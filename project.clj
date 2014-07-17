(defproject skyport-graphics "0.1.0-SNAPSHOT"
  :description "HTML5 graphics for Skyport"
  :url "https://github.com/pilsprog/skyport-graphics"
  :license {:name "The MIT License"
            :url "http://ljos.mit-license.org/"}
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2261"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [jarohen/chord "0.4.1"]
                 [om "0.6.4"]
                 [sablono "0.2.17"]

                 ;; For the server
                 [enlive "1.1.5"]
                 [compojure "1.1.8"]
                 [ring "1.3.0"]]
  :main skyport.core
  :profiles {:dev {:plugins [[com.cemerick/austin "0.1.4"]
                             [lein-cljsbuild "1.0.3"]]
                   :repl-options {:init-ns skyport.core
                                  :init (do
                                          (-main)
                                          (defn browser-repl []
                                            (def repl-env
                                              (reset! cemerick.austin.repls/browser-repl-env
                                                      (cemerick.austin/repl-env)))
                                            (cemerick.austin.repls/cljs-repl repl-env)))}
                   :cljsbuild {:builds [{:id "dev"
                                         :source-paths ["src/cljs"]
                                         :compiler {:output-to "target/classes/public/main.js"
                                                    :output-dir "target/classes/public"
                                                    :source-map "target/classes/public/main.js.map"
                                                    :optimizations :none}}]}}})
