(ns minecljs.core
  (:require
    [cljs.core.match :refer-macros [match]]
    [reagent.core :as r :refer-macros [with-let]]
    [reagent.dom :refer [render]]
    [minecljs.ui :refer [field control-panel]]
    [minecljs.game :as game]))


(defn new-game [mode]
  (match mode
    :easy (game/new-game 9 9 10)
    :medium (game/new-game 16 16 40)
    :hard (game/new-game 30 16 99)
    :else (throw [:unknown-mode mode])))


(defn app []
  (with-let [mode (r/atom :easy)
             game (r/atom (new-game @mode))]
    [:div {:style {:width "100vw"
                   :height "100vh"
                   :background (match (:status @game)
                                 :win "#cfc"
                                 :failed "#fcc"
                                 :else "#fff")
                   :transition "background-color 200ms"
                   :display :flex
                   :align-items :center
                   :justify-content :center}}
      [:div {:style{:display :flex
                    :flex-direction :column
                    :align-items :center}}
        [:div {:style {:padding-bottom 16
                       :width 400}}
          [control-panel {:mode @mode
                          :on-mode-change #(do (reset! mode %)
                                               (reset! game (new-game %)))
                          :on-reset (let [mode* @mode]
                                      #(do (reset! game (new-game mode*))
                                           (print 1)))}]]
        (let [game* @game]
          (match (:status @game)
            :not-initialized
            [field {:width (:width @game)
                    :height (:height @game)
                    :get-type (fn [x y] :closed)
                    :on-open (fn [x y] (swap! game game/initialize [x y]))}]

            :active
            [field {:width (:width game*)
                    :height (:height game*)
                    :get-type (fn [x y]
                                (cond
                                  ((:flags game*) [x y])
                                  :flag

                                  ((:open game*) [x y])
                                  [:empty (game/mines-around game* [x y])]

                                  :else :closed))
                    :on-open (fn [x y] (swap! game game/open-cell [x y]))
                    :on-flag (fn [x y] (swap! game game/flag-cell [x y]))}]

            :failed
            [field {:width (:width game*)
                    :height (:height game*)
                    :get-type (fn [x y]
                                (if ((:mines game*) [x y])
                                  (if ((:flags game*) [x y])
                                    :defused
                                    :exploded)
                                  [:empty (game/mines-around game* [x y])]))}]

            :win
            [field {:width (:width game*)
                    :height (:height game*)
                    :get-type (fn [x y]
                                (if ((:mines game*) [x y])
                                  :defused
                                  [:empty (game/mines-around game* [x y])]))}]))]]))


(let [node (js/document.getElementById "main-app-area")]
  (render [app] node))
  