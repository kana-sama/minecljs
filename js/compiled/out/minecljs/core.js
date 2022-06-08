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
}catch (e31920){if((e31920 instanceof Error)){
var e__30262__auto__ = e31920;
if((e__30262__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,mode,new cljs.core.Keyword(null,"medium","medium",-1864319384))){
return minecljs.game.new_game.call(null,(16),(16),(40));
} else {
throw cljs.core.match.backtrack;

}
}catch (e31921){if((e31921 instanceof Error)){
var e__30262__auto____$1 = e31921;
if((e__30262__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,mode,new cljs.core.Keyword(null,"hard","hard",2068420191))){
return minecljs.game.new_game.call(null,(30),(16),(99));
} else {
throw cljs.core.match.backtrack;

}
}catch (e31922){if((e31922 instanceof Error)){
var e__30262__auto____$2 = e31922;
if((e__30262__auto____$2 === cljs.core.match.backtrack)){
throw new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown-mode","unknown-mode",-2040380525),mode], null);
} else {
throw e__30262__auto____$2;
}
} else {
throw e31922;

}
}} else {
throw e__30262__auto____$1;
}
} else {
throw e31921;

}
}} else {
throw e__30262__auto__;
}
} else {
throw e31920;

}
}});
minecljs.core.app = (function minecljs$core$app(){
var with_let31923 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let31923","with-let31923",1660985394));
var temp__5808__auto___31936 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___31936 == null)){
} else {
var c__31231__auto___31937 = temp__5808__auto___31936;
if((with_let31923.generation === c__31231__auto___31937.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let31923.generation = c__31231__auto___31937.ratomGeneration);
}

var init31924 = (with_let31923.length === (0));
var mode = ((((init31924) || (cljs.core.not.call(null,with_let31923.hasOwnProperty((0))))))?(with_let31923[(0)] = reagent.core.atom.call(null,new cljs.core.Keyword(null,"easy","easy",315769928))):(with_let31923[(0)]));
var game = ((((init31924) || (cljs.core.not.call(null,with_let31923.hasOwnProperty((1))))))?(with_let31923[(1)] = reagent.core.atom.call(null,minecljs.core.new_game.call(null,cljs.core.deref.call(null,mode)))):(with_let31923[(1)]));
var duration = ((((init31924) || (cljs.core.not.call(null,with_let31923.hasOwnProperty((2))))))?(with_let31923[(2)] = reagent.core.atom.call(null,(0))):(with_let31923[(2)]));
var timer = ((((init31924) || (cljs.core.not.call(null,with_let31923.hasOwnProperty((3))))))?(with_let31923[(3)] = cljs.core.atom.call(null,null)):(with_let31923[(3)]));
var res31925 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"background","background",-863952629),(function (){var ocr_31926 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game));
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31926,new cljs.core.Keyword(null,"win","win",-1624642689))){
return "#cfc";
} else {
throw cljs.core.match.backtrack;

}
}catch (e31928){if((e31928 instanceof Error)){
var e__30262__auto__ = e31928;
if((e__30262__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31926,new cljs.core.Keyword(null,"failed","failed",-1397425762))){
return "#fcc";
} else {
throw cljs.core.match.backtrack;

}
}catch (e31929){if((e31929 instanceof Error)){
var e__30262__auto____$1 = e31929;
if((e__30262__auto____$1 === cljs.core.match.backtrack)){
return "#fff";
} else {
throw e__30262__auto____$1;
}
} else {
throw e31929;

}
}} else {
throw e__30262__auto__;
}
} else {
throw e31928;

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
var ocr_31930 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game));
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31930,new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906))){
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
}catch (e31932){if((e31932 instanceof Error)){
var e__30262__auto__ = e31932;
if((e__30262__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31930,new cljs.core.Keyword(null,"active","active",1895962068))){
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
}catch (e31933){if((e31933 instanceof Error)){
var e__30262__auto____$1 = e31933;
if((e__30262__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31930,new cljs.core.Keyword(null,"failed","failed",-1397425762))){
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
}catch (e31934){if((e31934 instanceof Error)){
var e__30262__auto____$2 = e31934;
if((e__30262__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31930,new cljs.core.Keyword(null,"win","win",-1624642689))){
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
}catch (e31935){if((e31935 instanceof Error)){
var e__30262__auto____$3 = e31935;
if((e__30262__auto____$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_31930)].join('')));
} else {
throw e__30262__auto____$3;
}
} else {
throw e31935;

}
}} else {
throw e__30262__auto____$2;
}
} else {
throw e31934;

}
}} else {
throw e__30262__auto____$1;
}
} else {
throw e31933;

}
}} else {
throw e__30262__auto__;
}
} else {
throw e31932;

}
}})()], null)], null);
var destroy__31230__auto___31938 = (function (){
return clearInterval(cljs.core.deref.call(null,timer));
});
if(reagent.ratom.reactive_QMARK_.call(null)){
if((with_let31923.destroy == null)){
(with_let31923.destroy = destroy__31230__auto___31938);
} else {
}
} else {
destroy__31230__auto___31938.call(null);
}

return res31925;
});
var node_31939 = document.getElementById("main-app-area");
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.core.app], null),node_31939);

//# sourceMappingURL=core.js.map?rel=1654704961319
