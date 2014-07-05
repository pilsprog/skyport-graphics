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
                 [enlive "1.1.5"]
                 [compojure "1.1.8"]
                 [ring "1.3.0"]]
  :profiles {:dev {:plugins [[com.cemerick/austin "0.1.4"]
                             [lein-cljsbuild "1.0.3"]]
                   :repl-options {:init-ns skyport.core}
                   :cljsbuild {:builds [{:id "dev"
                                         :source-paths ["src/cljs"]
                                         :compiler {:output-to "target/classes/public/main.js"
                                                    :output-dir "target/classes/public"
                                                    :source-map "target/classes/public/main.js.map"
                                                    :optimizations :none}}]}}})
