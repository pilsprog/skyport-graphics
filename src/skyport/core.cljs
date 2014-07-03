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
                             :position "0,2"}]}))

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

(defn world-view [state owner]
  (reify
    om/IRender
    (render [_]
      (dom/div {}
       (dom/svg #js {:width "100%" :height "100%"}
        (apply dom/g nil
               (flatten
                (for [j (range 3)
                      k (range 3)
                      :let [size 25
                            offset 130
                            x (+ offset (* size
                                           (/ 3 2)
                                           (+ 3 (- k j 1))))
                            y (+ offset (* (/ size 2)
                                           (js/Math.sqrt 3)
                                           (+ j (- k 2))))]]
                  (list (hexagon {:x x
                                  :y y
                                  :size size})
                        (dom/text #js {:x x
                                       :y y}
                                  (get-in state [:data j k])))))))))))

(om/root world-view state
  {:target (.getElementById js/document "app")})
