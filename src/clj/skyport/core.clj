(ns skyport.core
  (:require [cemerick.austin.repls :refer (browser-connected-repl-js)]
            [net.cgrand.enlive-html :as enlive]
            [compojure.route :refer (resources)]
            [compojure.core :refer (GET defroutes)]
            [ring.adapter.jetty :as jetty]
            [clojure.java.io :as io]))

(enlive/deftemplate page
  (io/resource "index.html")
  []
  [:body] (enlive/append
           (enlive/html [:script "";; (browser-connected-repl-js)
                         ])))

(defroutes site
  (resources "/")
  (GET "/*" req (page)))

(defn run
  []
  (defonce ^:private server
    (jetty/run-jetty #'site {:port 8080 :join? false})))