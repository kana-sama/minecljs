(ns minecljs.core
  (:require
    [cljs.core.match :refer-macros [match]]
    [reagent.core :as r :refer-macros [with-let]]
    [reagent.dom :refer [render]]
    [minecljs.ui :refer [field control-panel]]
    [minecljs.game :as game]
    [minecljs.defcard])
  (:require-macros
    [minecljs.defcard :refer [defcard]]))


(defn new-game [mode]
  (match mode
    :easy (game/new-game 9 9 10)
    :medium (game/new-game 16 16 40)
    :hard (game/new-game 30 16 99)
    :else (throw [:unknown-mode mode])))

(defn app []
  (with-let [mode (r/atom :easy)
             game (r/atom (new-game @mode))
             duration (r/atom 0)
             timer (atom nil)]
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
                          :mines-rest (- (:mines-amount @game) (count (:flags @game)))
                          :duration @duration
                          :on-mode-change
                          (let [timer* @timer]
                            (fn [new-mode]
                              (reset! mode new-mode)
                              (reset! game (new-game new-mode))
                              (reset! duration 0)
                              (js/clearInterval timer*)))
                          :on-reset
                          (let [mode* @mode, timer* @timer]
                            (fn []
                              (reset! game (new-game mode*))
                              (reset! duration 0)
                              (js/clearInterval timer*)))}]]
        (let [game* @game]
          (match (:status @game)
            :not-initialized
            [field {:width (:width @game)
                    :height (:height @game)
                    :get-type (fn [x y] :closed)
                    :on-open (fn [x y]
                               (swap! game game/initialize [x y])
                               (reset! timer
                                  (js/setInterval
                                    (fn []
                                      (if (= :active (:status @game))
                                        (swap! duration inc)))
                                    1000)))}]

            :active
            [field {:width (:width game*)
                    :height (:height game*)
                    :get-type (fn [x y]
                                (cond
                                  ((:marks game*) [x y])
                                  :mark

                                  ((:flags game*) [x y])
                                  :flag

                                  ((:open game*) [x y])
                                  [:empty (game/mines-around game* [x y])]

                                  :else :closed))
                    :on-open (fn [x y] (swap! game game/open-cell [x y]))
                    :on-flag (fn [x y] (swap! game game/flag-cell [x y]))
                    :on-mark (fn [x y] (swap! game game/mark-cell [x y]))}]

            :failed
            [field {:width (:width game*)
                    :height (:height game*)
                    :get-type (fn [x y]
                                (cond
                                  ((:mines game*) [x y])
                                  (if ((:flags game*) [x y])
                                    :defused
                                    :exploded)

                                  ((:open game*) [x y])
                                  [:empty (game/mines-around game* [x y])]

                                  ((:flags game*) [x y])
                                  :wrong-flag
                                  
                                  :else :closed))}]

            :win
            [field {:width (:width game*)
                    :height (:height game*)
                    :get-type (fn [x y]
                                (if ((:mines game*) [x y])
                                  :defused
                                  [:empty (game/mines-around game* [x y])]))}]))]]
    (finally
      (js/clearInterval @timer))))

(defcard app
  [app])

(let [node (js/document.getElementById "main-app-area")]
  (render [app] node))
