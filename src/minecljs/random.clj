(ns minecljs.random)

(defmacro with-random-seed [seed & body]
  `(binding [*rand* (minecljs.random/make-random ~seed)]
     ~@body))