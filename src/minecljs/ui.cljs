(ns minecljs.ui
  (:require
    [reagent.core :as r :refer-macros [with-let]]
    [cljs.core.match :refer-macros [match]]
    [minecljs.defcard])
  (:require-macros
    [minecljs.defcard :refer [defcard test= markup]]))

(defn card-row [& items]
  (vec (concat
         [:div]
         [{:style {:display :flex
                   :flex-direction :row
                   :flex-wrap :wrap
                   :align-items :center}}]
         (for [item items]
           [:div {:style {:padding-right 8}} item]))))

(defn rgb
  ([r g b] (str "rgb(" r "," g "," b ")"))
  ([r g b a] (str "rgba(" r "," g "," b "," a ")")))

(defcard rgb
  "Builds css color from rgb components"
  (markup
    [:div
      [:div {:style {:color (rgb 150 100 50)}}
        "(rgb 150 100 50)"]
      [:div {:style {:color (rgb 255 100 100 0.5)}}
        "(rgb 255 100 100 0.5)"]])
  (test= (rgb 150 100 50) "rgb(150,100,50)")
  (test= (rgb 150 100 50 0.5) "rgba(150,100,50,0.5)"))


(defn cell-mines-around-color [n]
  (match n
    1 :blue
    2 :green
    3 :brown
    4 :purple
    5 :crimson
    6 :red
    7 :indianred
    8 :maroon
    _ (throw [:unknown-cell-mines-around n])))

(defcard cell-mines-around-color
  "For different numbers of mines around I want different colors"
  [:div {:style {:background :PapayaWhip, :padding "8px 12px"}}                
    (for [i (range 1 9)]
      ^{:key i}
      [:span {:style {:color (cell-mines-around-color i)
                      :padding-right 8}}
        i])])


(defn cell-base
  ([]
   (cell-base {} ""))
  ([x]
   (if (map? x) (cell-base x "") (cell-base {} x)))
  ([{:keys [open? on-open on-flag on-mark]} children]
   [:div {:on-click (fn [e]
                      (cond
                        (.-altKey e)
                        (and on-mark (on-mark))

                        (.-ctrlKey e)
                        :none

                        :else
                        (and on-open (on-open))))
          :on-context-menu (fn [e]
                             (.preventDefault e)
                             (.stopPropagation e)
                             (and on-flag (on-flag)))
          :style {:width "32px", :height "32px"
                  :border (str "1px solid " (rgb 255 255 255 0.15))
                  :line-height "32px"
                  :background-color (if open? :PapayaWhip :yellowgreen)
                  :text-align :center
                  :cursor (if open? :default :pointer)}}
     children]))

(defcard cell-base
  "Base component for all cell types"
  "Closed:"
  [card-row
    [cell-base]
    [cell-base "💣"]]
  "Open:"
  [card-row
    [cell-base {:open? true}]
    [cell-base {:open? true} 1]
    [cell-base {:open? true} "💣"]])


(defn cell [{:keys [type on-open on-flag on-mark]}]
  (match type
    [:empty 0]
    [cell-base {:open? true}]

    [:empty n]
    [cell-base {:open? true}
      [:span {:style {:color (cell-mines-around-color n)}}
        n]]

    [:empty-preview 0]
    [cell-base {:on-open on-open, :on-flag on-flag}]

    [:empty-preview n]
    [cell-base {:on-open on-open, :on-flag on-flag}
      [:span {:style {:color (cell-mines-around-color n)
                      :opacity 0.5}}
        n]]

    :exploded
    [cell-base {:open? true} "🔥"]

    :defused
    [cell-base {:open? true} "💣"]

    :mine-preview
    [cell-base {:on-open on-open, :on-flag on-flag}
      [:span {:style {:opacity 0.5}} "💣"]]

    :closed
    [cell-base {:on-open on-open, :on-flag on-flag, :on-mark on-mark}]

    :flag
    [cell-base {:on-flag on-flag} "🚩"]

    :mark
    [cell-base {:on-open on-open, :on-flag on-flag, :on-mark on-mark} "❓"]

    :wrong-flag
    [cell-base {:open? true} "❌"]

    :else
    (throw [:unknown-cell-type type])))

(defcard cell
  "Predefined cell types"
  "Empty open cells"
  (markup
    [card-row
      [cell {:type [:empty 0]}]
      [cell {:type [:empty 1]}]
      [cell {:type [:empty 2]}]
      [cell {:type [:empty 3]}]
      [cell {:type [:empty 4]}]
      [cell {:type [:empty 5]}]
      [cell {:type [:empty 6]}]
      [cell {:type [:empty 7]}]
      [cell {:type [:empty 8]}]])
  "Open cells with mines"
  (markup
    [card-row
      [cell {:type :exploded}]
      [cell {:type :defused}]])

  "Closed cells

   `on-open` and `on-flags` are called ONLY when it is possible, so it is impossible to handle
   `on-open` for already open cell, or closed cell with flag, `cell` incapsulates this behaviour.
   
   Closed cells without flag and all preview cells are the only cell types, that can handle
   both events."
  (markup
    [card-row
      [cell {:type :closed
             :on-open #(print :on-open)
             :on-flag #(print :on-flag)
             :on-mark #(print :on-mark)}]
      [cell {:type :flag
             :on-flag #(print :on-flag)}]
      [cell {:type :mark
             :on-open #(print :on-open)
             :on-flag #(print :on-flag)
             :on-mark #(print :on-mark)}]])
        
  "Preview cells (for debug)"
  (markup
    [card-row
      [cell {:type :mine-preview}]
      [cell {:type [:empty-preview 1]}]
      [cell {:type [:empty-preview 5]}]]))


(defn field [{:keys [width height get-type on-open on-flag on-mark]}]
  [:div {:style {:display :flex, :flex-direction :column}}
    (for [y (range height)]
      ^{:key y}
      [:div {:style {:display :flex, :flex-direction :row}}
        (for [x (range width)]
          ^{:key x}
          [cell {:type (get-type x y)
                 :on-open #(and on-open (on-open x y))
                 :on-flag #(and on-flag (on-flag x y))
                 :on-mark #(and on-mark (on-mark x y))}])])])

(defcard field
  (markup
    [field {:width 3, :height 3
            :get-type (fn [] :closed)
            :on-open (fn [x y] (print [:open x y]))
            :on-flag (fn [x y] (print [:flag x y]))}])

  (markup
    (let [map [[:defused :exploded     :mark]
               [:flag    [:empty 0]    [:empty 5]]
               [:closed  :mine-preview [:empty-preview 3]]]]
      (field {:width 3, :height 3
              :get-type (fn [x y] (-> map (nth y) (nth x)))
              :on-open  (fn [x y] (print [:open x y]))
              :on-flag  (fn [x y] (print [:flag x y]))}))))


(defn switcher [{:keys [options value on-change]}]
  [:div {:style {:display :flex
                 :border "1px solid #ccc"
                 :border-radius 8
                 :overflow :hidden}}
    (for [[key label] options
          :let [active? (= key value)]]
      ^{:key key}
      [:div {:style {:padding 16
                     :width "100%"
                     :height 24
                     :background (if active? "#eee" "#fff")
                     :display :flex
                     :justify-content :center
                     :align-items :center
                     :cursor (if active? nil :pointer)}
             :on-click (if active? nil #(on-change key))}
        label])])

(defcard switcher
  [switcher {:options [[:a "A"] [:b "B"] [:c "C"]]
             :value :a
             :on-change #()}]

  "#### Interactive example, try to select:"
  (letfn [(example []
            (with-let [mode (r/atom :easy)]
              [:div
                "Selected mode: " @mode
                [switcher {:options [[:easy "Easy"]
                                     [:medium "Medium"]
                                     [:hard "Hard"]]
                           :value @mode
                           :on-change #(reset! mode %)}]]))]
    [example]))


(defn reset-button [on-click]
  [:div {:style {:cursor :pointer
                 :padding 16
                 :width 24
                 :height 24
                 :text-align :center
                 :border "1px solid #ccc"
                 :border-radius 8
                 :background "#fff"}
         :on-click on-click}
    "⟳"])

(defcard reset-button
  [reset-button #()])

(defn game-stats [{:keys [mines-rest duration]}]
  [:div {:style {:padding-top 16
                 :font-size "2em"
                 :display :flex
                 :justify-content :space-between}}
    [:div "🚩 " mines-rest]
    [:div duration " 🕐"]])

(defn control-panel [{:keys [mode mines-rest duration on-mode-change on-reset]}]
  (let [modes [[:easy "Easy"]
               [:medium "Medium"]
               [:hard "Hard"]]]
    [:div {:style {:display :flex, :flex-direction :column}}
      [:div {:style {:display :flex}}
        [:div {:style {:width "100%", :padding-right 8}}
          [switcher {:options modes, :value mode, :on-change on-mode-change}]]
        [reset-button on-reset]]
      [game-stats {:mines-rest mines-rest, :duration duration}]]))

(defcard control-panel
  [control-panel {:mode :easy
                  :mines-rest 10
                  :duration 10
                  :on-mode-change #()
                  :on-reset #()}])

  