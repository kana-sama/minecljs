(ns minecljs.solver
  (:require
    [reagent.core :as r :refer-macros [with-let]]
    [cljs.core.match :refer-macros [match]]
    [minecljs.defcard]
    [minecljs.game :as game :refer [mines-around cells-around]]
    [minecljs.ui :refer [card-row]]
    [minecljs.random :refer-macros [with-random-seed]]
    [clojure.set :refer [select intersection difference]])
  (:require-macros
    [minecljs.defcard :refer [defcard test= markup]]))

(defn open-with-numbers [game]
  (filter
    #(pos? (mines-around game %))
    (:open game)))

(defn flags-around [game [x y]]
  (intersection
    (cells-around game [x y])
    (:flags game)))

(defn closed-around [game [x y]]
  (difference
    (cells-around game [x y])
    (:open game)))

(defn find-step [game]
  (loop [cls (open-with-numbers game)]
    (if (empty? cls)
      :none
      (let [[x y] (first cls), cls (rest cls)]
        (cond
          (and (= (mines-around game [x y])
                  (count (flags-around game [x y])))
               (> (count (closed-around game [x y]))
                  (count (flags-around game [x y]))))
          (let [to-open (difference (closed-around game [x y])
                                    (flags-around game [x y]))]
            [:some [:open (first to-open)]])

          (and (= (mines-around game [x y])
                  (count (closed-around game [x y])))
               (< (count (flags-around game [x y]))
                  (count (closed-around game [x y]))))
          (let [to-flag (difference (closed-around game [x y])
                                    (flags-around game [x y]))]
            [:some [:flag (first to-flag)]])
          
          :else
          (recur cls))))))

(defn apply-step [game step]
  (match step
    [:open [x y]] (game/open-cell game [x y])
    [:flag [x y]] (game/flag-cell game [x y])))

(defn solve [game]
  {:pre [(= :active (:status game))]}
  (loop [game game, steps []]
    (if (= :win (:status game))
      [:solved steps]
      (match (find-step game)
        :none [:stucked steps]
        [:some step] (recur (apply-step game step) (conj steps step))))))

(defn preview-solution [game]
  (let [[result steps] (solve game)]
    (->> steps
      (reductions apply-step game)
      (map game/game-preview)
      (cons [:span "Result: " result])
      (cons :div)
      (vec))))

(defcard qwe
  (with-random-seed 45
    [preview-solution
      (-> (game/new-game 10 10 10)
        (game/initialize [2 2]))]))
  
(defn smart-initialize [game [x y]]
  (loop []
    (let [game (game/initialize game [x y])]
      (match (solve game)
        [:solved _] game
        [:stucked _] (recur)))))
