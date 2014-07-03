(defproject skyport-graphics "0.1.0-SNAPSHOT"
  :description "HTML5 graphics for Skyport"
  :url "https://github.com/pilsprog/skyport-graphics"
  :license {:name "The MIT License"
            :url "http://ljos.mit-license.org/"}
  :global-vars {*warn-on-reflection* true}
  :plugins [[lein-cljsbuild "1.0.3"]]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2261"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [jarohen/chord "0.4.1"]
                 [om "0.6.4"]]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:output-to "main.js"
                                   :output-dir "target"
                                   :optimizations :none
                                   :source-map true}}]})
