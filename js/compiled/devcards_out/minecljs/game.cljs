(ns minecljs.game
  (:require
    [reagent.core :as r :refer-macros [with-let]]
    [cljs.core.match :refer-macros [match]]
    [minecljs.defcard :refer [edn markdown]]
    [minecljs.ui :refer [field card-row]]
    [minecljs.random :refer [random-subset]
                     :refer-macros [with-random-seed]]
    [clojure.set :refer [union intersection difference]])
  (:require-macros
    [minecljs.defcard :refer [defcard test= markup]]))

(defrecord Game
  [status
   width height mines-amount
   mines open flags marks])
   
(defcard game
  "Game state is a map with sets for open cells, cells with mines, cells with flags.
   Marks are temporary, and will leave after every move.

   Cell is just a vector of two numbers with position.

   Status can be one of:
   - `:not-initialized`
   - `:active`
   - `:failed`
   - `:win`

   Invariants:
   1. status = `:active` → ¬(cell ∈ flags ∧ cell ∈ open)
   2. cell ∈ open ∧ cell ∈ mines → status = `:failed`
   3. status = `:initialized` → mines = ∅
   4. all-cells\\open = mines → status = `:win`")


(defn new-game [width height mines-amount]
  (map->Game {:status :not-initialized
              :width width, :height height, :mines-amount mines-amount
              :mines #{}, :open #{}, :flags #{}, :marks #{}}))

(declare mines-around)
(defn preview-cell-type [game [x y]]
  (match (:status game)
    :not-initialized
    :closed

    :active
    (cond ((:marks game) [x y]) :mark
          ((:flags game) [x y]) :flag
          ((:mines game) [x y]) :mine-preview
          ((:open game) [x y]) [:empty (mines-around game [x y])]
          :else [:empty-preview (mines-around game [x y])])

    :failed
    (cond ((:open game) [x y])
          (if ((:mines game) [x y])
            :exploded
            [:empty (mines-around game [x y])])
          
          ((:flags game) [x y])
          (if ((:mines game) [x y])
            :defused
            :wrong-flag)

          :else
          (if ((:mines game) [x y])
            :exploded
            [:empty-preview (mines-around game [x y])]))

    :win
    (if ((:mines game) [x y])
      :defused
      [:empty (mines-around game [x y])])))

(defn game-preview [game]
  [:div {:style {:padding 3
                 :margin 2
                 :border-color (match (:status game)
                                 :not-initialized :gray
                                 :active :transparent
                                 :failed :red
                                 :win :limegreen)
                 :border-style :solid
                 :border-width 3
                 :width :fit-content}}
    [field {:width (:width game)
            :height (:height game)
            :get-type (fn [x y] (preview-cell-type game [x y]))}]])

(defn with-preview [content preview]
  [:div {:style {:display :flex}}
    [:div {:style {:width "100%"}} content]
    [:div {:style {:padding-left 8}} preview]])  

(defn games-sequence [game & actions]
  (->> actions
    (reductions (fn [game action] (action game)) game)
    (map game-preview)
    (interpose "→")
    (cons card-row)
    (vec)))
      

(defcard new-game
  "When we create new game, it is not initialized, and all sets are empty
   `[invariant 3]`."
  (test= (new-game 5 5 5)
         (map->Game {:status :not-initialized
                     :width 5, :height 5, :mines-amount 5
                     :mines #{}, :open #{}, :flags #{}, :marks #{}}))
  "We can render such game, but as it isn't initialized,
   nothing interesting here."
  (let [game (new-game 5 5 5)]
    [game-preview game])

  "Gray border - not initialized, green border - win, red border - failed:"
  (let [game (new-game 3 3 0)]
    [card-row
      [game-preview game]
      [game-preview (assoc game :status :active)]
      [game-preview (assoc game :status :win)]
      [game-preview (assoc game :status :failed)]]))


(defn all-cells [game]
  (set (for [x (range (:width game))
             y (range (:height game))]
         [x y])))

(defcard all-cells
  "Returns all cells from game field."
  (test= (all-cells (new-game 3 3 3))
         #{[0 0] [1 0] [2 0]
           [0 1] [1 1] [2 1]
           [0 2] [1 2] [2 2]}))


(defn cells-around [game [x y]]
  (set (for [dx [-1 0 +1]
             dy [-1 0 +1]
             :when (not= [dx dy] [0 0])
             :let [x (+ x dx), y (+ y dy)]
             :when (and (>= x 0) (< x (:width game)))
             :when (and (>= y 0) (< y (:height game)))]
         [x y])))

(defcard cells-around
  "Returns all cells around selected one:"
  [with-preview
    (test= (cells-around (new-game 3 3 0) [1 1])
           (disj (all-cells (new-game 3 3 0)) [1 1]))
    (let [game (assoc (new-game 3 3 0) :status :active)
          around (cells-around game [1 1])]
      [game-preview (assoc game :flags around)])]
  
  "...even on bigger fields: "
  [with-preview
    (test= (cells-around (new-game 5 5 0) [2 2])
           #{[1 1] [1 2] [1 3] [2 1] [2 3] [3 1] [3 2] [3 3]})
    (let [game (assoc (new-game 5 5 0) :status :active)
          around (cells-around game [2 2])]
      [game-preview (assoc game :flags around)])]

  "No negative cells:"
  [with-preview
    (test= (cells-around (new-game 3 3 0) [0 0])
           #{[1 0] [1 1] [0 1]})
    (let [game (assoc (new-game 3 3 0) :status :active)
          around (cells-around game [0 0])]
      [game-preview (assoc game :flags around)])]

  "No cells out of field:"
  [with-preview
    (test= (cells-around (new-game 3 3 0) [2 2])
           #{[1 1] [1 2] [2 1]})
    (let [game (assoc (new-game 3 3 0) :status :active)
          around (cells-around game [2 2])]
      [game-preview (assoc game :flags around)])]

  "No cells on 1×1 field"
  (test= (cells-around (new-game 1 1 0) [0 0])
         #{}))


(defn mines-around [game [x y]]
  (apply +
    (for [[x y] (cells-around game [x y])]
      (if ((:mines game) [x y]) 1 0))))

(defcard mines-around
  "Returns amount of mines around selected cell:"
  [with-preview
    (test= (let [game (new-game 3 3 8)]
             (-> game
               (assoc :mines (cells-around game [1 1]))
               (mines-around [1 1])))
           8)
    [game-preview
      (let [game (assoc (new-game 3 3 8) :status :active)]
        (assoc game :mines (cells-around game [1 1])))]]
         
  [with-preview
    (test= (let [game (new-game 3 3 2)]
             (-> game
               (assoc :mines #{[0 0] [2 2]})
               (mines-around [1 1])))
           2)
    [game-preview
      (let [game (assoc (new-game 3 3 2) :status :active)]
        (assoc game :mines #{[0 0] [2 2]}))]])
  

(defn flag-cell [game [x y]]
  (cond
    (not= :active (:status game))
    (throw [:game-should-be-active game])

    ((:open game) [x y])
    (throw [:impossible-to-flag-open-cell game [x y]])

    ((:flags game) [x y])
    (-> game
      (update :flags disj [x y])
      (assoc :marks #{}))

    :else
    (-> game
      (update :flags conj [x y])
      (assoc :marks #{}))))

(defn mark-cell [game [x y]]
  {:pre [(= :active (:status game))
         (not ((:open game) [x y]))
         (not ((:flags game) [x y]))]}
  (if ((:marks game) [x y])
    (update game :marks disj [x y])
    (update game :marks conj [x y])))

(defcard flag-cell
  "Game state transition, when player flag closed cell."

  "We can't flag open cell, we can't flag when game is not active."

  (let [game (map->Game {:status :active
                         :width 3, :height 3, :mines-amount 2
                         :mines #{[0 0] [2 2]}
                         :open #{} :flags #{}, :marks #{}})]
    [:div
      [markdown "When we flag [1 1]:"]
      [games-sequence game
        #(flag-cell % [1 1])]

      [markdown "When we flag [1 1] again:"]
      [games-sequence game
        #(flag-cell % [1 1])
        #(flag-cell % [1 1])]]))

(defn cells-to-open [game [x y]]
  (cond
    ((:open game) [x y])
    (throw [:cell-is-already-open game [x y]])

    ((:flags game) [x y])
    (throw [:cells-with-flag-should-not-be-open game [x y]])

    :else
    (loop [queue (list [x y])
           to-open #{}]
      (match [queue]
        [([] :seq)]
        to-open

        [([[x* y*] & queue*] :seq)]
        (cond
          (to-open [x* y*])
          (recur queue* to-open)
          
          ((:open game) [x* y*])
          (recur queue* to-open)

          ((:mines game) [x* y*])
          (conj to-open [x* y*])

          (pos? (mines-around game [x* y*]))
          (recur queue* (conj to-open [x* y*]))

          :else
          (recur (concat queue* (cells-around game [x* y*]))
                 (conj to-open [x* y*])))))))
  
(defcard cells-to-open
  "Returns set of cells that should be just open after clicking on selected cell.
   Open all empty cells. If no mines around, open all cells around as well.
   If mine, then just open it."

  (let [game (map->Game {:status :active
                         :width 5, :height 5, :mines-amount 2
                         :open #{}, :flags #{}, :marks #{}
                         :mines #{[1 1] [3 0]}})]
    [:div
      [markdown "Clicking on [3 3]"]
      [games-sequence game
        #(assoc % :open (cells-to-open % [3 3]))]])

  "Tests:"   
  (test= (cells-to-open (new-game 3 3 0) [1 1])
         (all-cells (new-game 3 3 0)))
  (test= (let [game (assoc (new-game 3 3 0) :mines #{[0 0]})]
           (cells-to-open game [1 1]))
         #{[1 1]})
  (test= (let [game (assoc (new-game 3 3 0) :mines #{[0 0]})]
           (cells-to-open game [2 2]))
         (disj (all-cells (new-game 3 3 0)) [0 0])))


(defn open-cell [game [x y]]
  (if (not= :active (:status game))
    (throw [:game-should-be-active game])
    (let [to-open (cells-to-open game [x y])
          game (update game :open union to-open)
          game (update game :flags difference to-open)
          game (assoc game :marks #{})]
      (cond
        (not-empty (intersection (:mines game) (:open game)))
        (assoc game :status :failed)
           
        (= (:mines game) (difference (all-cells game) (:open game)))
        (assoc game :status :win)

        :else game))))

(defn flags-around [game [x y]]
  (intersection
    (cells-around game [x y])
    (:flags game)))

(defn closed-around-without-flags [game [x y]]
  (difference
    (cells-around game [x y])
    (union (:open game) (:flags game))))

(defn closed-around-with-flags [game [x y]]
  (difference
    (cells-around game [x y])
    (:open game)))

(defn open-or-flag-around [game [x y]]
  {:pre (= :active (:status game))}
  (cond
    (= (count (flags-around game [x y]))
       (mines-around game [x y]))
    (reduce
      (fn [game [x y]]
        (cond
          (not (= :active (:status game))) (reduced game)
          ((:open game) [x y]) game
          :else (open-cell game [x y])))
      game (closed-around-without-flags game [x y]))
    
    (= (count (closed-around-with-flags game [x y]))
       (mines-around game [x y]))
    (reduce flag-cell game
      (closed-around-without-flags game [x y]))

    :else
    game))


(defcard open-cell
  "Game state transition, when player open some cell.

   Can change game state to `:win` or `:failed`."

  (let [game (map->Game {:status :active
                         :width 3, :height 3, :mines-amount 2
                         :mines #{[0 0] [2 2]}
                         :open #{} :flags #{}, :marks #{}})]
    [:div
      [markdown "Let `game` be:"]
      [game-preview game]

      [markdown "When we open [1 1]:"]
      [games-sequence game
        #(open-cell % [1 1])]

      [markdown "When we open [0 2]:"]
      [games-sequence game
        #(open-cell % [0 2])]

      [markdown "When we open [0 0]:"]
      [games-sequence game
        #(open-cell % [0 0])]

      [markdown "When we flag [2 2] and then open [0 0]:"]
      [games-sequence game
        #(flag-cell % [2 2])
        #(open-cell % [0 0])]

      [markdown "When we open [2 0] and [0 2] (all cells except bombs):"]
      [games-sequence game
        #(open-cell % [2 0])
        #(open-cell % [0 2])]

      [markdown "Flag disappears when cell is opened. Open [2 0]:"]
      [games-sequence game
        #(flag-cell % [1 0])
        #(flag-cell % [1 2])
        #(open-cell % [2 0])]]))


(defn random-mines [game [start-x start-y]]
  (let [available-cells (-> (all-cells game)
                            (disj [start-x start-y])
                            (difference (cells-around game [start-x start-y])))]
    (random-subset available-cells (:mines-amount game))))

(defcard random-mines
  "Returns random set of mines.
   
   Mines can't be placed in or around start cell."

  (test= (with-random-seed 42 (random-mines (new-game 5 5 5) [2 2]))
         #{[0 3] [0 2] [2 0] [4 1] [3 4]}))


(defn initialize [game [start-x start-y]]
  (if (not= :not-initialized (:status game))
    (throw [:can't-initialize-game-twice game])
    (-> game
        (assoc :status :active)
        (assoc :mines (random-mines game [start-x start-y]))
        (open-cell [start-x start-y]))))

(defcard initialize
  "Game state transition, when player open some cell for first time.

   Plants mines on field, changes game-status to `:active`."

  "Game example:"
  (markup
    [games-sequence (new-game 5 5 3)
      (fn [%] (with-random-seed 50 (initialize % [3 3])))
      (fn [%] (flag-cell % [1 2]))
      (fn [%] (flag-cell % [0 2]))
      (fn [%] (open-cell % [1 3]))
      (fn [%] (flag-cell % [1 4]))
      (fn [%] (open-cell % [0 3]))
      (fn [%] (open-cell % [0 4]))])

  "Failed game example:"
  (markup
    [games-sequence (new-game 5 5 3)
      (fn [%] (with-random-seed 100 (initialize % [2 2])))
      (fn [%] (open-cell % [0 3]))]))
