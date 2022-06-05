(ns minecljs.random
  (:require
    [cljs.core.match :refer-macros [match]]
    [minecljs.defcard])
  (:require-macros
    [minecljs.defcard :refer [defcard test= markup]]
    [minecljs.random :refer [with-random-seed]]))

(defn make-random [seed]
  (let [a (atom seed)]
    (fn []
      (let [t (swap! a + 0x6D2B79F5)
            t (js/Math.imul (bit-xor t (unsigned-bit-shift-right t 15)) (bit-or t 1))
            t (bit-xor t (+ t (js/Math.imul (bit-xor t (unsigned-bit-shift-right t 7)) (bit-or t 61))))]
        (/ (unsigned-bit-shift-right (bit-xor t (unsigned-bit-shift-right t 14)) 0) 4294967296)))))

(def ^:dynamic *rand* (make-random 42))

(defn random-int [n]
  (int (* n (*rand*))))

(defn random-elem [xs]
  (let [xs (vec xs)
        i (random-int (count xs))]
    (nth xs i)))

(defn random-subset [s n]
  (loop [n n, s s, acc #{}]
    (if (or (zero? n) (empty? s))
      acc
      (let [x (random-elem s)]
        (recur (dec n) (disj s x) (conj acc x))))))

(defcard random
  (test= (with-random-seed 42 (random-int 100))
         (with-random-seed 42 (random-int 100)))
  (test= (with-random-seed 42 (random-elem #{1 2 3 4}))
         3)
  (test= (with-random-seed 42 (random-subset #{1 2 3 4} 3))
         #{2 3 4}))
