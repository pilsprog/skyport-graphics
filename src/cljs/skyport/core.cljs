(ns skyport.core
  (:require-macros [cljs.core.async.macros :refer (go go-loop)])
  (:require [cljs.core.async :refer (<! chan close! map<)]
            [clojure.string :as str]
            [clojure.walk :refer [keywordize-keys]]
            [chord.client :as socket :refer (ws-ch)]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(enable-console-print!)

(def state
  (atom {:turn 0
         :map {:data [["V" "V" "V" "V" "V" "V" "V" "V" "V" "V" "V" "V" "V" "V" "V"]
                      ["V" "V" "V" "V" "V" "V" "V" "V" "V" "V" "V" "V" "V" "V" "V"]
                      ["V" "C" "C" "V" "V" "O" "O" "V" "G" "G" "V" "V" "V" "V" "V"]
                      ["V" "E" "E" "G" "V" "O" "G" "G" "G" "G" "S" "V" "V" "V" "V"]
                      ["V" "V" "G" "G" "V" "G" "G" "G" "G" "G" "G" "V" "V" "V" "V"]
                      ["V" "G" "G" "E" "V" "V" "V" "G" "G" "G" "G" "G" "G" "V" "V"]
                      ["V" "C" "C" "E" "G" "V" "V" "G" "G" "G" "G" "G" "G" "V" "V"]
                      ["V" "G" "G" "G" "V" "V" "V" "V" "G" "G" "G" "G" "G" "V" "V"]
                      ["V" "V" "G" "G" "O" "G" "R" "G" "G" "G" "G" "G" "G" "V" "V"]
                      ["V" "V" "G" "G" "G" "G" "G" "R" "G" "G" "G" "V" "G" "G" "V"]
                      ["V" "V" "G" "G" "G" "G" "G" "G" "V" "G" "G" "G" "G" "G" "G"]
                      ["V" "G" "G" "G" "G" "G" "G" "G" "V" "G" "C" "C" "G" "G" "G"]
                      ["S" "G" "G" "G" "G" "G" "G" "G" "V" "G" "E" "G" "G" "V" "V"]
                      ["V" "V" "G" "O" "G" "G" "O" "G" "V" "C" "G" "E" "O" "V" "V"]
                      ["V" "V" "V" "G" "G" "V" "G" "V" "V" "V" "C" "V" "V" "V" "V"]]
               :j-length 15
               :k-length 15}
         :players [{:name "player1"
                    :health 100
                    :score 0
                    :primary-weapon {:name "droid" :level 1}
                    :secondary-weapon {:name "mortar" :level 1}
                    :position [3 10]}
                   {:name "player2"
                    :health 100
                    :primary-weapon {:name "laser" :level 1}
                    :secondary-weapon {:name "mortar" :level 1}
                    :score 0
                    :position [12 0]}]
         :message "gamestate"}))

(defn parse-coords [coords]
  (mapv (comp js/parseInt str/trim)
        (str/split coords ",")))

(defn player! [name]
  (->> @state
       :players
       (drop-while (comp (partial not= name)
                         :name))
       first))

(defn direction->coord [dir]
  (case dir
    "up"         [-1 -1]
    "left-up"    [ 0 -1]
    "right-up"   [-1  0]
    "down"       [ 1  1]
    "left-down"  [ 1  0]
    "right-down" [ 0  1]))

(defmulti handle-action :type)

(defmethod handle-action "laser"
  [{:keys [from stop] :as action}]
  (swap! state assoc :action
         (assoc action
           :start (:position (player! from))
           :stop (parse-coords stop))))

(defmethod handle-action "droid"
  [{:keys [sequence] :as action}]
  (swap! state assoc :action
         (assoc action
           :sequence (mapv direction->coord
                           sequence))))

(defmethod handle-action "mortar"
  [{:keys [from coordinates]}]
  (let [player (player! from)
        mortar (first
                (drop-while (comp (partial not= "mortar") :name)
                            (select-keys player
                                         [:primary-weapon
                                          :secondary-weapon])))]
    (swap! state assoc :action
           {:coord (mapv +
                         (:position player)
                         (parse-coords coordinates))
            :radius (inc
                     (:level mortar))})))

(defmethod handle-action "move"
  [{:keys [direction from]}]
  (let [[x y] (direction->coord direction)]
    (swap! state update-in [:players]
           (partial mapv (fn [{:keys [name position] :as player}]
                           (if-not (= name from)
                             player
                             (assoc-in player [:position] (mapv + [x y] position))))))))

(defmethod handle-action :default [_]
  ;; Do nothing.
  )

(defn parse-position [player]
  (assoc player
    :position (parse-coords
               (:position player))))

(defn timeout [ms]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) ms)
    c))

(defmulti handle-message! :message)

(defmethod handle-message! "gamestate"
  [gamestate]
  (let [new-state (update-in gamestate [:players]
                             (partial map parse-position))]
    (reset! state new-state)
    (timeout 0)))

(defmethod handle-message! "action"
  [action]
  (handle-action action)
  (timeout 1000))

(defmethod handle-message! :default [message]
  (timeout 0))

(go-loop [{:keys [ws-channel error]}
          (<! (ws-ch "ws://localhost:54331"
                     {:format :json}))]
  ;; If there is an error we print the error and try again in a
  ;; second. If there isn't an error we loop forever in the message
  ;; channel. If the message channel provides an error we try to
  ;; connect again in a second.
  (if error
    (println error)
    (loop [{:keys [message error]} (<! ws-channel)]
      (if error
        (println "-- " error)
        (do
          (println "MESSAGE: " message)
          (<! (handle-message! (keywordize-keys message)))
          (recur (<! ws-channel))))))
  ;; wait 1 second before continuing.
  (<! (timeout 1000))
  (recur (<! (ws-ch "ws://localhost:54331"
                    {:format :json}))))

(def tile-type {"G" "grass"
                "V" "void"
                "S" "spawn"
                "E" "explosium"
                "R" "rubidium"
                "C" "scrap"
                "O" "rock"
                "D" "dmg"})

(def TILE-SIZE 25)
(def X-OFFSET 475)
(def Y-OFFSET 65)

(defn hexagon
  "Creates a polygon with six equal sides."
  [{:keys [size x y class]}]
  (let [points (for [i (range 6)
                     :let [angle (* 2 (/ js/Math.PI 6) i)
                           x_i (+ x (* TILE-SIZE (js/Math.cos angle)))
                           y_i (+ y (* TILE-SIZE (js/Math.sin angle)))]]
                 (str x_i " " y_i))]
    (html
     [:polygon {:class class
                :points (str/join ",  " points)}])))

(defn hexagon-view [{:keys [x y size label]} owner]
  (reify
    om/IRender
    (render [_]
      (html
       [:g {:class "hexagon"}
        (hexagon {:x x :y y :size size :class (tile-type label)})
        [:text {:x x :y y}
         label]]))))

(defn damage-view [{:keys [x y text]} owner]
  (reify
    om/IRender
    (render [_]
      (html
       [:g {:class "display"}
        [:text {:class "damage" :x x :y y}
         text]]))))

(defn coords-to-pixel [[j k]]
  [(+ X-OFFSET (* TILE-SIZE
                  (/ 3 2)
                  (+ 2 (- k j))))
   (+ Y-OFFSET (* (/ TILE-SIZE 2)
                  (js/Math.sqrt 3)
                  (+ k (- j 2))))])

(defn laser-shot [{:keys [start stop]} owner]
  (html
   (let [[x_1 y_1] (coords-to-pixel start)
         [x_2 y_2] (coords-to-pixel stop)
         x_d (- x_1 x_2)
         y_d (- y_1 y_2)
         height (js/Math.sqrt (+ (js/Math.pow x_d 2)
                                 (js/Math.pow y_d 2)))
         width 20
         angle (* (js/Math.atan2 x_d y_d)
                  (/ -180 js/Math.PI))]
     [:g
      [:rect
       {:class "laser"
        :x (- x_2 (/ width 2)) :y y_2
        :width width :height height
        :transform (str "rotate(" angle" " x_2 " " y_2 ")")
        :fill "url(#laser-shot)"}]])))


(defn mortar-shot [{:keys [coord radius]} owner]
  (html
   (let [circle [[ 1  0]
                 [ 1  1]
                 [ 0  1]
                 [-1  0]
                 [-1 -1]
                 [ 0 -1]]
         ;; The way we find the points is that we take what we know is
         ;; 1 complete circle around the given point and interleave it
         ;; with itself for each increase in the radius. To make the
         ;; path correctly we move the point up one hexagon each turn
         ;; around the point, including the first round. We then take
         ;; the current coordinate and add move it around the
         ;; path. Lastly, because the each circle completes back at
         ;; the same place it started we remove these all the extra
         ;; points.
         hits (->> circle
                   repeat
                   (reductions interleave)
                   (take radius)
                   (interleave (repeat '([-1 -1])))
                   (apply concat)
                   (reductions (partial mapv +) coord)
                   distinct)]
     [:g (om/build-all hexagon-view
                       (for [[j k] hits
                             :let [[x y] (coords-to-pixel [j k])]]
                         {:x x
                          :y y
                          :size TILE-SIZE
                          :label "D"
                          :position [j k]})
                       {:key :position})])))

(defn droid-shot [{:keys [sequence from]} owner]
  (reify
    om/IInitState
    (init-state [_]
      {:sequence (reductions (partial mapv +)
                             (:position (player! from))
                             sequence)
       :explosion nil
       :time (/ 1000 (dec (count sequence)))
       })
    om/IRenderState
    (render-state [_ {:keys [sequence explosion time]}]
      (when-not (empty? sequence)
        (js/setTimeout
         (fn []
           (let [[coord & sequence] sequence]
             (om/set-state!
              owner :sequence sequence)
             (om/set-state!
              owner :explosion (if (empty? sequence)
                                 coord))))
         time))
      (if-let [[coord & _] sequence]
        (let [[x y] (coords-to-pixel coord)]
          (html
           [:g {:class "droid"}
            [:circle {:fill "black"
                      :cx x
                      :cy y
                      :r (/ TILE-SIZE 3)}]]))
        (om/build mortar-shot {:coord explosion
                               :radius 1})))))

(defmulti action-view
  (fn [action _] (:type action)))

(defmethod action-view "laser"
  [action owner]
  (laser-shot action owner))

(defmethod action-view "droid"
  [action owner]
  (droid-shot action owner))

(defmethod action-view "mortar"
  [action owner]
  (mortar-shot action owner))

(defmethod action-view :default [_ _]
  (html [:g]))

(defn player-view [{:keys [name position text]} owner]
  (reify
    om/IRender
    (render [_]
      (let [[x y] (coords-to-pixel position)]
        (html
         [:g {:id name
              :class "player"}
          [:circle {:fill "blue"
                    :cx x
                    :cy y
                    :r (/ TILE-SIZE 2)}]])))))

(defn world-view [state owner]
  (reify
    om/IRender
    (render [_]
      (let [{:keys [data j-length k-length]} (:map state)]
        (html
         [:div {:id "world"}
          [:svg {:width (* TILE-SIZE (dec (* 3 j-length)))
                 :height (* TILE-SIZE (- (* 2 j-length) 4))}
           [:defs
            [:linearGradient {:id "laser-shot"}
             [:stop {:style {:stop-opacity 0} :offset "0%"}]
             [:stop {:style {:stop-color "red"
                             :stop-opacity 1} :offset "50%"}]
             [:stop {:style {:stop-opacity 0} :offset "100%"}]]]
           [:g {:id "hexagons"}
            (for [j (range (count data))
                  k (range (count (data j)))
                  :let [[x y] (coords-to-pixel [j k])]]
              (om/build hexagon-view
                        {:x x
                         :y y
                         :label (get-in data [j k])
                         :position [j k]
                         :size TILE-SIZE}
                        {:key :position}))]
           [:g {:id "players"}
            (om/build-all player-view (:players state) {:key :name})]
           (om/build action-view (:action state))]])))))

(defn weapon-interface-view [{:keys [name level]} owner]
  (reify
    om/IRender
    (render [_]
      (html [:div {:class "weapon"}
             [:div {:class "name"}
              name]
             [:span {:class "level"}
              level]]))))

(defn player-interface-view [{:keys [name
                                     position
                                     health
                                     score
                                     primary-weapon
                                     secondary-weapon]}
                             owner]
  (reify
    om/IRender
    (render [_]
      (html [:div {:class "player"}
             [:h2 {:class "name"}
              name]
             [:div {:class "attr"}
              "Position: "
              [:span {:class "value"}
               (str/join " " position)]]
             [:div {:class "attr"}
              (str "HP: ")
              [:span {:class "value"}
               health]]
             [:div {:class "attr"}
              "Score: "
              [:span {:class "value"}
               score]]
             [:div {:class "primary"}
              "Primary: "
              (om/build weapon-interface-view primary-weapon)]
             [:div {:class "secondary"}
              "Secondary: "
              (om/build weapon-interface-view secondary-weapon)]]))))

(defn interface-view [{:keys [turn players]} owner]
  (reify
    om/IRender
    (render [_]
      (html [:div {:class "interface"}
             [:h1 {:class "header"}
              "Skyport"]
             [:div {:class "turn"}
              (str "Turn " turn)]
             [:div {:class "players"}
              (om/build-all player-interface-view
                            players
                            {:key :name})]]))))

(defn app-view [state owner]
  (reify
    om/IRender
    (render [_]
      (html
       [:div
        (om/build interface-view state)
        (om/build world-view state)]))))

(om/root app-view state
         {:target (.getElementById js/document "app")})
