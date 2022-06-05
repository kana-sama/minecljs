(ns minecljs.defcard
  (:require 
    [devcards.core]))

(defn pretty [x]
  (with-out-str
    (clojure.pprint/pprint x)))

(defn defcard-expr [e]
  [:div
    (if (string? e)
      `(devcards.core/markdown->react ~e)
      e)])

(defmacro defcard [name & exprs]
  `(devcards.core/defcard ~name
    (devcards.core/reagent
      [:div ~@(for [e exprs] (defcard-expr e))])))

(defmacro test= [a b]          
  `(if (= ~a ~b)
     [minecljs.defcard/test :success
       [minecljs.defcard/test-block :success "Input" ~(pretty a)]
       [minecljs.defcard/test-block :success "Result" (minecljs.defcard/pretty ~b)]]
     [minecljs.defcard/test :fail
       [minecljs.defcard/test-block :fail "Input" ~(pretty a)]
       [minecljs.defcard/test-block :fail "Result" (minecljs.defcard/pretty ~b)]
       [minecljs.defcard/test-block :fail "Expected" (minecljs.defcard/pretty ~a)]]))

(defmacro markup [code]
  `(minecljs.defcard/markup-block ~(pretty code) ~code))
  