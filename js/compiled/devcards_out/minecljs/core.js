// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('minecljs.core');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('minecljs.ui');
goog.require('minecljs.game');
goog.require('minecljs.defcard');
minecljs.core.new_game = (function minecljs$core$new_game(mode){
try{if(cljs.core.keyword_identical_QMARK_.call(null,mode,new cljs.core.Keyword(null,"easy","easy",315769928))){
return minecljs.game.new_game.call(null,(9),(9),(10));
} else {
throw cljs.core.match.backtrack;

}
}catch (e37134){if((e37134 instanceof Error)){
var e__28027__auto__ = e37134;
if((e__28027__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,mode,new cljs.core.Keyword(null,"medium","medium",-1864319384))){
return minecljs.game.new_game.call(null,(16),(16),(40));
} else {
throw cljs.core.match.backtrack;

}
}catch (e37135){if((e37135 instanceof Error)){
var e__28027__auto____$1 = e37135;
if((e__28027__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,mode,new cljs.core.Keyword(null,"hard","hard",2068420191))){
return minecljs.game.new_game.call(null,(30),(16),(99));
} else {
throw cljs.core.match.backtrack;

}
}catch (e37136){if((e37136 instanceof Error)){
var e__28027__auto____$2 = e37136;
if((e__28027__auto____$2 === cljs.core.match.backtrack)){
throw new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown-mode","unknown-mode",-2040380525),mode], null);
} else {
throw e__28027__auto____$2;
}
} else {
throw e37136;

}
}} else {
throw e__28027__auto____$1;
}
} else {
throw e37135;

}
}} else {
throw e__28027__auto__;
}
} else {
throw e37134;

}
}});
minecljs.core.app = (function minecljs$core$app(){
var with_let37137 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let37137","with-let37137",1299874264));
var temp__5808__auto___37150 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___37150 == null)){
} else {
var c__29187__auto___37151 = temp__5808__auto___37150;
if((with_let37137.generation === c__29187__auto___37151.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let37137.generation = c__29187__auto___37151.ratomGeneration);
}

var init37138 = (with_let37137.length === (0));
var mode = ((((init37138) || (cljs.core.not.call(null,with_let37137.hasOwnProperty((0))))))?(with_let37137[(0)] = reagent.core.atom.call(null,new cljs.core.Keyword(null,"easy","easy",315769928))):(with_let37137[(0)]));
var game = ((((init37138) || (cljs.core.not.call(null,with_let37137.hasOwnProperty((1))))))?(with_let37137[(1)] = reagent.core.atom.call(null,minecljs.core.new_game.call(null,cljs.core.deref.call(null,mode)))):(with_let37137[(1)]));
var duration = ((((init37138) || (cljs.core.not.call(null,with_let37137.hasOwnProperty((2))))))?(with_let37137[(2)] = reagent.core.atom.call(null,(0))):(with_let37137[(2)]));
var timer = ((((init37138) || (cljs.core.not.call(null,with_let37137.hasOwnProperty((3))))))?(with_let37137[(3)] = cljs.core.atom.call(null,null)):(with_let37137[(3)]));
var res37139 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var ocr_37140 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game));
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_37140,new cljs.core.Keyword(null,"win","win",-1624642689))){
return "#cfc";
} else {
throw cljs.core.match.backtrack;

}
}catch (e37142){if((e37142 instanceof Error)){
var e__28027__auto__ = e37142;
if((e__28027__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_37140,new cljs.core.Keyword(null,"failed","failed",-1397425762))){
return "#fcc";
} else {
throw cljs.core.match.backtrack;

}
}catch (e37143){if((e37143 instanceof Error)){
var e__28027__auto____$1 = e37143;
if((e__28027__auto____$1 === cljs.core.match.backtrack)){
return "#fff";
} else {
throw e__28027__auto____$1;
}
} else {
throw e37143;

}
}} else {
throw e__28027__auto__;
}
} else {
throw e37142;

}
}})(),new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 200ms",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(16),new cljs.core.Keyword(null,"width","width",-384071477),(400)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.control_panel,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mode","mode",654403691),cljs.core.deref.call(null,mode),new cljs.core.Keyword(null,"mines-rest","mines-rest",728153196),(new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game)) - cljs.core.count.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game)))),new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.deref.call(null,duration),new cljs.core.Keyword(null,"on-mode-change","on-mode-change",2031399020),(function (){var timer_STAR_ = cljs.core.deref.call(null,timer);
return (function (new_mode){
cljs.core.reset_BANG_.call(null,mode,new_mode);

cljs.core.reset_BANG_.call(null,game,minecljs.core.new_game.call(null,new_mode));

cljs.core.reset_BANG_.call(null,duration,(0));

return clearInterval(timer_STAR_);
});
})(),new cljs.core.Keyword(null,"on-reset","on-reset",1057446829),(function (){var mode_STAR_ = cljs.core.deref.call(null,mode);
var timer_STAR_ = cljs.core.deref.call(null,timer);
return (function (){
cljs.core.reset_BANG_.call(null,game,minecljs.core.new_game.call(null,mode_STAR_));

cljs.core.reset_BANG_.call(null,duration,(0));

return clearInterval(timer_STAR_);
});
})()], null)], null)], null),(function (){var game_STAR_ = cljs.core.deref.call(null,game);
var ocr_37144 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game));
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_37144,new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.field,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game)),new cljs.core.Keyword(null,"get-type","get-type",-1657795007),(function (x,y){
return new cljs.core.Keyword(null,"closed","closed",-919675359);
}),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (x,y){
cljs.core.swap_BANG_.call(null,game,minecljs.game.initialize,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

return cljs.core.reset_BANG_.call(null,timer,setInterval((function (){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game)))){
return cljs.core.swap_BANG_.call(null,duration,cljs.core.inc);
} else {
return null;
}
}),(1000)));
})], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37146){if((e37146 instanceof Error)){
var e__28027__auto__ = e37146;
if((e__28027__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_37144,new cljs.core.Keyword(null,"active","active",1895962068))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.field,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game_STAR_),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game_STAR_),new cljs.core.Keyword(null,"get-type","get-type",-1657795007),(function (x,y){
if(cljs.core.truth_(new cljs.core.Keyword(null,"marks","marks",-1844991497).cljs$core$IFn$_invoke$arity$1(game_STAR_).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.Keyword(null,"mark","mark",-373816345);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(game_STAR_).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.Keyword(null,"flag","flag",1088647881);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game_STAR_).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),minecljs.game.mines_around.call(null,game_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null);
} else {
return new cljs.core.Keyword(null,"closed","closed",-919675359);

}
}
}
}),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (x,y){
return cljs.core.swap_BANG_.call(null,game,minecljs.game.open_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),(function (x,y){
return cljs.core.swap_BANG_.call(null,game,minecljs.game.flag_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),new cljs.core.Keyword(null,"on-mark","on-mark",588773538),(function (x,y){
return cljs.core.swap_BANG_.call(null,game,minecljs.game.mark_cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481),(function (x,y){
return cljs.core.swap_BANG_.call(null,game,minecljs.game.open_or_flag_around,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
})], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37147){if((e37147 instanceof Error)){
var e__28027__auto____$1 = e37147;
if((e__28027__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_37144,new cljs.core.Keyword(null,"failed","failed",-1397425762))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.field,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game_STAR_),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game_STAR_),new cljs.core.Keyword(null,"get-type","get-type",-1657795007),(function (x,y){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game_STAR_).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(game_STAR_).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.Keyword(null,"defused","defused",-1674545666);
} else {
return new cljs.core.Keyword(null,"exploded","exploded",-931450631);
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game_STAR_).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),minecljs.game.mines_around.call(null,game_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(game_STAR_).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.Keyword(null,"wrong-flag","wrong-flag",-559267509);
} else {
return new cljs.core.Keyword(null,"closed","closed",-919675359);

}
}
}
})], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37148){if((e37148 instanceof Error)){
var e__28027__auto____$2 = e37148;
if((e__28027__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_37144,new cljs.core.Keyword(null,"win","win",-1624642689))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.field,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game_STAR_),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game_STAR_),new cljs.core.Keyword(null,"get-type","get-type",-1657795007),(function (x,y){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game_STAR_).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.Keyword(null,"defused","defused",-1674545666);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),minecljs.game.mines_around.call(null,game_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null);
}
})], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e37149){if((e37149 instanceof Error)){
var e__28027__auto____$3 = e37149;
if((e__28027__auto____$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_37144)].join('')));
} else {
throw e__28027__auto____$3;
}
} else {
throw e37149;

}
}} else {
throw e__28027__auto____$2;
}
} else {
throw e37148;

}
}} else {
throw e__28027__auto____$1;
}
} else {
throw e37147;

}
}} else {
throw e__28027__auto__;
}
} else {
throw e37146;

}
}})()], null)], null);
var destroy__29186__auto___37152 = (function (){
return clearInterval(cljs.core.deref.call(null,timer));
});
if(reagent.ratom.reactive_QMARK_.call(null)){
if((with_let37137.destroy == null)){
(with_let37137.destroy = destroy__29186__auto___37152);
} else {
}
} else {
destroy__29186__auto___37152.call(null);
}

return res37139;
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.core","minecljs.core",683185814),new cljs.core.Keyword(null,"app","app",-560961707)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"app",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.core !== 'undefined') && (typeof minecljs.core.t_minecljs$core37153 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.core.t_minecljs$core37153 = (function (meta37154){
this.meta37154 = meta37154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.core.t_minecljs$core37153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37155,meta37154__$1){
var self__ = this;
var _37155__$1 = this;
return (new minecljs.core.t_minecljs$core37153(meta37154__$1));
}));

(minecljs.core.t_minecljs$core37153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37155){
var self__ = this;
var _37155__$1 = this;
return self__.meta37154;
}));

(minecljs.core.t_minecljs$core37153.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.core.t_minecljs$core37153.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.core.app], null)], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.core.t_minecljs$core37153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta37154","meta37154",-1985602639,null)], null);
}));

(minecljs.core.t_minecljs$core37153.cljs$lang$type = true);

(minecljs.core.t_minecljs$core37153.cljs$lang$ctorStr = "minecljs.core/t_minecljs$core37153");

(minecljs.core.t_minecljs$core37153.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.core/t_minecljs$core37153");
}));

/**
 * Positional factory function for minecljs.core/t_minecljs$core37153.
 */
minecljs.core.__GT_t_minecljs$core37153 = (function minecljs$core$__GT_t_minecljs$core37153(meta37154){
return (new minecljs.core.t_minecljs$core37153(meta37154));
});

}

return (new minecljs.core.t_minecljs$core37153(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
var node_37156 = document.getElementById("main-app-area");
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.core.app], null),node_37156);

//# sourceMappingURL=core.js.map?rel=1654704893467
