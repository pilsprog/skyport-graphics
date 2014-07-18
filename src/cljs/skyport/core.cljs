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

(defmulti handle-action :type)

(defmethod handle-action "laser"
  [{:keys [from stop] :as action}]
  (let [start (->> @state
                  :players
                  (drop-while (comp (partial not= from)
                                    :name))
                  first
                  :position)]
    (swap! state assoc :action
           (assoc action :start start :stop (parse-coords stop)))))

(defmethod handle-action "droid"
  [action]
  (swap! state assoc :action action))

(defmethod handle-action "mortar"
  [action]
  (swap! state assoc :action action))

(defmethod handle-action "move"
  [{:keys [direction from]}]
  (let [[x y] (case direction
                "up"         [-1 -1]
                "left-up"    [ 0 -1]
                "right-up"   [-1  0]
                "down"       [ 1  1]
                "left-down"  [ 1  0]
                "right-down" [ 0  1])]
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

(defmulti handle-message! :message)

(defmethod handle-message! "gamestate"
  [gamestate]
  (let [new-state (update-in gamestate [:players]
                             (partial map parse-position))]
    (println new-state)
    (reset! state new-state)))

(defmethod handle-message! "action"
  [action]
  (handle-action action))

(defmethod handle-message! :default [message]
  ;; Do nothing.
  (println message))



(defn timeout [ms]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) ms)
    c))


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
          (handle-message! (keywordize-keys message))
          ;; Wait a second before doing the next message.
          (<! (timeout 1000))
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
                "O" "rock"})

(def TILE-SIZE 25)
(def X-OFFSET 475)
(def Y-OFFSET 65)

(defn hexagon [{:keys [size x y class]}]
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

(defn laser-shot [{:keys [start stop]}]
  (html
   (let [[x_1 y_1] (coords-to-pixel start)
         [x_2 y_2] (coords-to-pixel stop)
         x_d (- x_1 x_2)
         y_d (- y_1 y_2)
         height (+ TILE-SIZE
                   (js/Math.sqrt (+ (js/Math.pow x_d 2)
                                    (js/Math.pow y_d 2))))
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

(defmulti action-view :type)
(defmethod action-view "laser"
  [shot]
  (laser-shot shot))
(defmethod action-view "droid"
  [action]
  (html [:g]))
(defmethod action-view "mortar"
  [action]
  (html [:g]))
(defmethod action-view :default [_]
  (html [:g]))

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
           [:g (for [j (range (count data))
                     k (range (count (data j)))
                     :let [[x y] (coords-to-pixel [j k])]]
                 (om/build hexagon-view
                           {:x x
                            :y y
                            :label (get-in data [j k])
                            :key [j k]
                            :size TILE-SIZE}
                           {:key :key}))]
           [:g (om/build-all player-view (:players state) {:key :name})]
           (om/build action-view (:action state))]])))))

(defn weapon-interface-view [{:keys [name level]} owner]
  (reify
    om/IRender
    (render [_]
      (html [:div {:class "weapon"}
             [:div {:class "name"}
              name]
             [:div {:class "level"}
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
              [:div {:class "value"}
               (str/join " " position)]]
             [:div {:class "attr"}
              (str "HP: ")
              [:div {:class "value"}
               health]]
             [:div {:class "attr"}
              "Score: "
              [:div {:class "value"}
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
