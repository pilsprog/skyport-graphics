(ns skyport.core
  (:require-macros [cljs.core.async.macros :refer (go go-loop)])
  (:require [cljs.core.async :refer (<! >! put! chan)]
            [clojure.string :as str]
            [chord.client :as socket :refer (ws-ch)]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def state (atom {:message "gamestate"
                  :turn 0
                  :data [["G" "E" "S"]
                         ["G" "R" "V"]
                         ["C" "G" "G"]]
                  :players [{:name "player1"
                             :primary-weapon {:name "laser"
                                              :level 1}
                             :secondary-weapon {:name "mortar"
                                                :level 1}
                             :health 100
                             :score 0
                             :position [0 2]}]}))

;; (go
;;   (let [{:keys [ws-channel error]}
;;         (<! (ws-ch "ws://localhost:54331"
;;                    {:format :json}))]
;;     (if error
;;       (println error)
;;       (loop [{:keys [message error]} (<! ws-channel)]
;;         (if error
;;           (println error)
;;           (do (println message)
;;               (recur (<! ws-channel))))))))

(defn hexagon [{:keys [size x y]}]
  (let [points (for [i (range 6)
                     :let [angle (* 2 (/ js/Math.PI 6) i)
                           x_i (+ x (* size (js/Math.cos angle)))
                           y_i (+ y (* size (js/Math.sin angle)))]]
                 (str x_i " " y_i))]
    (dom/polygon #js {:points (str/join ", " points)})))

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))

(defn hexagon-view [{:keys [x y size label]} owner]
  (reify
    om/IRender
    (render [_]
      (dom/g #js {:style (display (not= "V" label))}
             (hexagon {:x x :y y :size size})
             (dom/text #js {:x x :y y}
                       label)))))

(defn coords-to-pixel [[j k] size offset]
  [(+ offset (* size
                (/ 3 2)
                (+ 2 (- k j))))
   (+ offset (* (/ size 2)
                (js/Math.sqrt 3)
                (+ k (- j 2))))])

(defn player-view [player]
  (reify
    om/IRender
    (render [_]
      (let [[x y] (coords-to-pixel (:position player) 25 75)]
        (dom/circle #js {:cx x
                         :cy y
                         :r 10
                         :fill "blue"})))))

(defn world-view [state owner]
  (reify
    om/IRender
    (render [_]
      (dom/div #js {:id "world"}
       (dom/svg #js {:width "50%" :height "50%"}
        (apply dom/g nil
               (om/build-all hexagon-view
                             (let [data (:data state)]
                               (for [j (range (count data))
                                     k (range (count (data j)))
                                     :let [size 25
                                           offset 75
                                           [x y] (coords-to-pixel [j k] 25 75)]]
                                 {:x x
                                  :y y
                                  :label (get-in data [j k])
                                  :size size}))))
        (apply dom/g nil
               (om/build-all player-view
                             (:players state))))))))

(om/root world-view state
  {:target (.getElementById js/document "app")})
