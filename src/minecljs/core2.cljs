(ns minecljs.core2
  (:require
    [minecljs.defcard]
    [reagent.core :as r :refer-macros [with-let]]
    [cljs.core.match :refer-macros [match]]
    [minecljs.ui]
    [minecljs.game])
  (:require-macros
    [minecljs.defcard :refer [defcard]]))

(defn rand-elem [xs]
  (nth (into [] xs) (rand-int (count xs))))

(defn rand-subset [xs n]
  (loop [n n, xs xs, acc #{}]
    (if (or (zero? n) (empty? xs))
      acc
      (let [x (rand-elem xs)]
        (recur (dec n) (disj xs x) (conj acc x))))))

(defn with-state [initial mk]
  (let [state (r/atom initial)]
    (fn []
      [mk state])))

(defn edn [x]
  (devcards.util.edn-renderer/html-edn x))

(defn state-inspector [initial mk]
  (let [state (r/atom initial)]
    (fn []
      [:div
        [mk state]
        [:p [:button {:on-click #(reset! state initial)} "Reset state"]]
        [edn @state]])))

(defn rgb
  ([r g b] (str "rgb(" r "," g "," b ")"))
  ([r g b a] (str "rgba(" r "," g "," b "," a ")")))

(defcard rgb
  "Little helper to build css color from rgb components"
  [:div {:style {:color (rgb 150 100 50)}}
    "(rgb 150 100 50) -> " (rgb 150 100 50)]
  "Last optional argument is alpha:"
  [:div {:style {:color (rgb 150 100 50 0.5)}}
    "(rgb 150 100 50 0.5) -> " (rgb 150 100 50 0.5)])


(defn cell-base [{:keys [style on-open on-flag] :or {}} & children]
  (let [size "32px"
        default-style {:width size, :height size
                       :border "1px solid #ccc"
                       :line-height size
                       :text-align :center}]
    [:div {:on-click (fn [e] (on-open))
           :on-context-menu (fn [e] (.preventDefault e) (on-flag))
           :style (merge default-style style)}
      children]))

(defn open-cell-number-color [n]
  (rgb (min 255 (* n 50)) 0 0))

(defn cell [type on-open on-flag]
  (let [closed-style {:background "#ddd", :cursor :pointer}]
    (match type
      [:open 0] [cell-base]
      [:open n] [cell-base {:style {:color (open-cell-number-color n)}} n]
      :closed [cell-base {:style closed-style, :on-open on-open, :on-flag on-flag}]
      :flag [cell-base {:style closed-style, :on-flag on-flag} "🚩"]
      :bomb [cell-base {:style {:background (rgb 255 200 200)}} "💣"]
      :saved-bomb [cell-base {:style {:background (rgb 200 255 200)}} "💣"]
      :else (throw [:unknown-cell-type type]))))

(defcard cells
  "Empty open cell"
  [cell [:open 0]]
  "Open cells with numbers"
  [:div {:style {:display :flex, :flex-direction :row}}
   [cell [:open 1]]
   [cell [:open 4]]
   [cell [:open 8]]]
  "Open cell with bomb"
  [:div {:style {:display :flex, :flex-direction :row}}
   [cell :bomb]
   [cell :saved-bomb]]
  "Closed cell"
  [cell :closed]
  "Closed cell with flag"
  [cell :flag])

(defn cells-around [board x y]
  (for [dx [-1, 0, +1]
        dy [-1, 0, +1]
        :let [x (+ x dx)
              y (+ y dy)]
        :when (not= [dx dy] [0 0])
        :when (and (>= x 0) (< x (:width board)))
        :when (and (>= y 0) (< y (:height board)))]
    [x y]))
    

(defn bombs-around [board x y]
  (apply +
    (for [[x y] (cells-around board x y)]
      (if ((:bombs board) [x y])
        1 0))))

(defn board [{:keys [width height cell-type on-open on-flag]}]
  [:div {:style {:display :flex, :flex-direction :column}}
    (for [y (range height)]
      ^{:key y}
      [:div {:style {:display :flex, :flex-direction :row}}
        (for [x (range width)]
          ^{:key [x y]}
          [cell (cell-type x y) #(on-open x y) #(on-flag x y)])])])

(def example-board
  {:width 5
   :height 5
   :open #{[1 1] [2 1] [3 1] [3 2] [3 4]}
   :bombs #{[1 1] [2 0] [2 2]}
   :flags #{[3 3] [3 4]}})

(defn cell-type [board x y]
  (cond
    ((:open board) [x y])
    (if ((:bombs board) [x y])
      (if ((:flags board) [x y])
        :saved-bomb
        :bomb)
      [:open (bombs-around board x y)])

    ((:flags board) [x y])
    :flag

    :else :closed))

(defn open? [board x y]
  (not= :closed (cell-type board x y)))

(defn empty-board [width height]
  {:width width
   :height height
   :open #{}
   :bombs #{}
   :flags #{}})

(defn all-cells [board]
  (into #{}
    (for [x (range (:width board))
          y (range (:height board))]
      [x y])))

(defn plant-bombs [board amount start-x start-y]
  (let [cells (-> board
                (all-cells)
                (disj [start-x start-y])
                (clojure.set/difference (cells-around board start-x start-y)))
        bombs (rand-subset cells amount)]
    (assoc board :bombs bombs)))

(defn initialized? [board]
  (not-empty (:open board)))

(defn failed? [board]
  (not-empty (clojure.set/intersection (:open board) (:bombs board))))

(defn done? [board]
  (= (clojure.set/difference (all-cells board) (:bombs board))
     (:open board)))

(defn flag-cell [board x y]
  (if ((:flags board) [x y])
    (update board :flags disj [x y])
    (update board :flags conj [x y])))

(defn open-board-cell [board x y]
  (update board :open conj [x y]))

(defn open-board-cell-recur [board x y]
  (loop [queue (list [x y]), board board]
    (match [queue]
      [([] :seq)]
      board

      [([[x* y*] & queue*] :seq)]
      (if (open? board x* y*)
        (recur queue* board)
        (let [board (open-board-cell board x* y*)]
          (match (cell-type board x* y*)
            :bomb board
            [:open 0] (recur (concat queue* (cells-around board x* y*)) board)
            [:open n] (recur queue* board))))
      
      :else (throw queue))))

(defn open-all-cells [board]
  (assoc board :open (all-cells board)))

(defn initialize-board [board bombs-amount start-x start-y]
  (-> board
    (plant-bombs bombs-amount start-x start-y)
    (open-board-cell-recur start-x start-y)))

(defcard board
  [state-inspector example-board
    (fn [b]
      [board {:width (:width @b)
              :height (:height @b)
              :cell-type (let [b @b] (fn [x y] (cell-type b x y)))
              :on-open (fn [x y] (swap! b open-board-cell x y))}])])

(defn board-status [board]
  (cond (done? board) :done
        (failed? board) :failed
        (initialized? board) :active
        :else :not-initialized))

(defn game [b bombs]
  [:div
    (str (board-status @b))
    (match (board-status @b)
      :not-initialized
      [board {:width (:width @b)
              :height (:height @b)
              :cell-type (fn [x y] :closed)
              :on-open (fn [x y] (swap! b initialize-board bombs x y))}]

      :active
      [board {:width (:width @b)
              :height (:height @b)
              :cell-type (let [b @b]
                          (fn [x y] (cell-type b x y)))
              :on-open (fn [x y] (swap! b open-board-cell-recur x y))
              :on-flag (fn [x y] (swap! b flag-cell x y))}]

      :failed
      [board {:width (:width @b)
              :height (:height @b)
              :cell-type (let [b (open-all-cells @b)]
                          (fn [x y] (cell-type b x y)))
              :on-open #()}]

      :done
      [board {:width (:width @b)
              :height (:height @b)
              :cell-type (let [b (open-all-cells @b)]
                          (fn [x y] (cell-type b x y)))
              :on-open #()}])])      


(defcard game
  (let [width 16
        height 16
        bombs 30]
    [state-inspector (empty-board width height)
      (fn [b]
        [game b bombs])]))