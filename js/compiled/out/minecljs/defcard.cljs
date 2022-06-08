(ns minecljs.defcard
  (:require
    [devcards.core]
    [cljs.core.match :refer-macros [match]]))

(defn pretty [x]
  (with-out-str
    (cljs.pprint/pprint x)))

(defn edn [x]
  (devcards.util.edn-renderer/html-edn x))

(defn markdown [x]
  (devcards.core/markdown->react x))

(defn test-color [status]
  (match status
    :success "#c7e1a0"
    :fail "#ecc4c4"))

(defn test [status & children]
  [:div {:style {:border-color (test-color status)
                 :border-style :solid
                 :border-width "0 1px 1px 1px"
                 :margin-bottom "16px"}}
   children])

(defn test-block [status name content]
  [:div
    [:div {:style {:background-color (test-color status)
                   :color "#333"
                   :padding "4px 8px"}}
     name]
    [:div {:style {:padding-left 8}}
     (devcards.core/code-highlight content :clojure)]])

(defn markup-block [code vdom]
  [:div {:style {:border "1px solid #eee"}}
    [:div {:style {:padding "4px 8px"
                   :background "#eee"}}
      (devcards.core/code-highlight code :clojure)]
    [:div {:style {:padding "12px"}}
      vdom]])