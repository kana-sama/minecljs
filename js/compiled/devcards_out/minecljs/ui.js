// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('minecljs.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.match');
goog.require('minecljs.defcard');
minecljs.ui.card_row = (function minecljs$ui$card_row(var_args){
var args__5772__auto__ = [];
var len__5766__auto___35792 = arguments.length;
var i__5767__auto___35793 = (0);
while(true){
if((i__5767__auto___35793 < len__5766__auto___35792)){
args__5772__auto__.push((arguments[i__5767__auto___35793]));

var G__35794 = (i__5767__auto___35793 + (1));
i__5767__auto___35793 = G__35794;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return minecljs.ui.card_row.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(minecljs.ui.card_row.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null),(function (){var iter__5520__auto__ = (function minecljs$ui$iter__35788(s__35789){
return (new cljs.core.LazySeq(null,(function (){
var s__35789__$1 = s__35789;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__35789__$1);
if(temp__5804__auto__){
var s__35789__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35789__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__35789__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__35791 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__35790 = (0);
while(true){
if((i__35790 < size__5519__auto__)){
var item = cljs.core._nth.call(null,c__5518__auto__,i__35790);
cljs.core.chunk_append.call(null,b__35791,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(8)], null)], null),item], null));

var G__35795 = (i__35790 + (1));
i__35790 = G__35795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35791),minecljs$ui$iter__35788.call(null,cljs.core.chunk_rest.call(null,s__35789__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35791),null);
}
} else {
var item = cljs.core.first.call(null,s__35789__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(8)], null)], null),item], null),minecljs$ui$iter__35788.call(null,cljs.core.rest.call(null,s__35789__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,items);
})()));
}));

(minecljs.ui.card_row.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(minecljs.ui.card_row.cljs$lang$applyTo = (function (seq35787){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35787));
}));

minecljs.ui.rgb = (function minecljs$ui$rgb(var_args){
var G__35797 = arguments.length;
switch (G__35797) {
case 3:
return minecljs.ui.rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return minecljs.ui.rgb.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(minecljs.ui.rgb.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),")"].join('');
}));

(minecljs.ui.rgb.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),")"].join('');
}));

(minecljs.ui.rgb.cljs$lang$maxFixedArity = 4);

devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.ui","minecljs.ui",-671969340),new cljs.core.Keyword(null,"rgb","rgb",1432123467)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"rgb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.ui !== 'undefined') && (typeof minecljs.ui.t_minecljs$ui35799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.ui.t_minecljs$ui35799 = (function (meta35800){
this.meta35800 = meta35800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.ui.t_minecljs$ui35799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35801,meta35800__$1){
var self__ = this;
var _35801__$1 = this;
return (new minecljs.ui.t_minecljs$ui35799(meta35800__$1));
}));

(minecljs.ui.t_minecljs$ui35799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35801){
var self__ = this;
var _35801__$1 = this;
return self__.meta35800;
}));

(minecljs.ui.t_minecljs$ui35799.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.ui.t_minecljs$ui35799.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Builds css color from rgb components")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),minecljs.defcard.markup_block.call(null,"[:div\n [:div {:style {:color (rgb 150 100 50)}} \"(rgb 150 100 50)\"]\n [:div {:style {:color (rgb 255 100 100 0.5)}} \"(rgb 255 100 100 0.5)\"]]\n",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),minecljs.ui.rgb.call(null,(150),(100),(50))], null)], null),"(rgb 150 100 50)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),minecljs.ui.rgb.call(null,(255),(100),(100),0.5)], null)], null),"(rgb 255 100 100 0.5)"], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,minecljs.ui.rgb.call(null,(150),(100),(50)),"rgb(150,100,50)"))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(rgb 150 100 50)\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,"rgb(150,100,50)")], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(rgb 150 100 50)\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,"rgb(150,100,50)")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,minecljs.ui.rgb.call(null,(150),(100),(50)))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,minecljs.ui.rgb.call(null,(150),(100),(50),0.5),"rgba(150,100,50,0.5)"))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(rgb 150 100 50 0.5)\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,"rgba(150,100,50,0.5)")], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(rgb 150 100 50 0.5)\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,"rgba(150,100,50,0.5)")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,minecljs.ui.rgb.call(null,(150),(100),(50),0.5))], null)], null))], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.ui.t_minecljs$ui35799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35800","meta35800",2101505818,null)], null);
}));

(minecljs.ui.t_minecljs$ui35799.cljs$lang$type = true);

(minecljs.ui.t_minecljs$ui35799.cljs$lang$ctorStr = "minecljs.ui/t_minecljs$ui35799");

(minecljs.ui.t_minecljs$ui35799.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.ui/t_minecljs$ui35799");
}));

/**
 * Positional factory function for minecljs.ui/t_minecljs$ui35799.
 */
minecljs.ui.__GT_t_minecljs$ui35799 = (function minecljs$ui$__GT_t_minecljs$ui35799(meta35800){
return (new minecljs.ui.t_minecljs$ui35799(meta35800));
});

}

return (new minecljs.ui.t_minecljs$ui35799(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.ui.cell_mines_around_color = (function minecljs$ui$cell_mines_around_color(n){
try{if((n === (1))){
return new cljs.core.Keyword(null,"blue","blue",-622100620);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35804){if((e35804 instanceof Error)){
var e__28027__auto__ = e35804;
if((e__28027__auto__ === cljs.core.match.backtrack)){
try{if((n === (2))){
return new cljs.core.Keyword(null,"green","green",-945526839);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35805){if((e35805 instanceof Error)){
var e__28027__auto____$1 = e35805;
if((e__28027__auto____$1 === cljs.core.match.backtrack)){
try{if((n === (3))){
return new cljs.core.Keyword(null,"brown","brown",1414854429);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35806){if((e35806 instanceof Error)){
var e__28027__auto____$2 = e35806;
if((e__28027__auto____$2 === cljs.core.match.backtrack)){
try{if((n === (4))){
return new cljs.core.Keyword(null,"purple","purple",-876021126);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35807){if((e35807 instanceof Error)){
var e__28027__auto____$3 = e35807;
if((e__28027__auto____$3 === cljs.core.match.backtrack)){
try{if((n === (5))){
return new cljs.core.Keyword(null,"crimson","crimson",-1192060857);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35808){if((e35808 instanceof Error)){
var e__28027__auto____$4 = e35808;
if((e__28027__auto____$4 === cljs.core.match.backtrack)){
try{if((n === (6))){
return new cljs.core.Keyword(null,"red","red",-969428204);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35809){if((e35809 instanceof Error)){
var e__28027__auto____$5 = e35809;
if((e__28027__auto____$5 === cljs.core.match.backtrack)){
try{if((n === (7))){
return new cljs.core.Keyword(null,"indianred","indianred",-1829312906);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35810){if((e35810 instanceof Error)){
var e__28027__auto____$6 = e35810;
if((e__28027__auto____$6 === cljs.core.match.backtrack)){
try{if((n === (8))){
return new cljs.core.Keyword(null,"maroon","maroon",-952210123);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35811){if((e35811 instanceof Error)){
var e__28027__auto____$7 = e35811;
if((e__28027__auto____$7 === cljs.core.match.backtrack)){
throw new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown-cell-mines-around","unknown-cell-mines-around",-232932863),n], null);
} else {
throw e__28027__auto____$7;
}
} else {
throw e35811;

}
}} else {
throw e__28027__auto____$6;
}
} else {
throw e35810;

}
}} else {
throw e__28027__auto____$5;
}
} else {
throw e35809;

}
}} else {
throw e__28027__auto____$4;
}
} else {
throw e35808;

}
}} else {
throw e__28027__auto____$3;
}
} else {
throw e35807;

}
}} else {
throw e__28027__auto____$2;
}
} else {
throw e35806;

}
}} else {
throw e__28027__auto____$1;
}
} else {
throw e35805;

}
}} else {
throw e__28027__auto__;
}
} else {
throw e35804;

}
}});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.ui","minecljs.ui",-671969340),new cljs.core.Keyword(null,"cell-mines-around-color","cell-mines-around-color",1758999946)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cell-mines-around-color",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.ui !== 'undefined') && (typeof minecljs.ui.t_minecljs$ui35812 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.ui.t_minecljs$ui35812 = (function (meta35813){
this.meta35813 = meta35813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.ui.t_minecljs$ui35812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35814,meta35813__$1){
var self__ = this;
var _35814__$1 = this;
return (new minecljs.ui.t_minecljs$ui35812(meta35813__$1));
}));

(minecljs.ui.t_minecljs$ui35812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35814){
var self__ = this;
var _35814__$1 = this;
return self__.meta35813;
}));

(minecljs.ui.t_minecljs$ui35812.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.ui.t_minecljs$ui35812.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"For different numbers of mines around I want different colors")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"PapayaWhip","PapayaWhip",499786973),new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px"], null)], null),(function (){var iter__5520__auto__ = (function minecljs$ui$iter__35815(s__35816){
return (new cljs.core.LazySeq(null,(function (){
var s__35816__$1 = s__35816;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__35816__$1);
if(temp__5804__auto__){
var s__35816__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35816__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__35816__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__35818 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__35817 = (0);
while(true){
if((i__35817 < size__5519__auto__)){
var i = cljs.core._nth.call(null,c__5518__auto__,i__35817);
cljs.core.chunk_append.call(null,b__35818,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),minecljs.ui.cell_mines_around_color.call(null,i),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(8)], null)], null),i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__35819 = (i__35817 + (1));
i__35817 = G__35819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35818),minecljs$ui$iter__35815.call(null,cljs.core.chunk_rest.call(null,s__35816__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35818),null);
}
} else {
var i = cljs.core.first.call(null,s__35816__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),minecljs.ui.cell_mines_around_color.call(null,i),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(8)], null)], null),i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),minecljs$ui$iter__35815.call(null,cljs.core.rest.call(null,s__35816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,cljs.core.range.call(null,(1),(9)));
})()], null)], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.ui.t_minecljs$ui35812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35813","meta35813",1462386966,null)], null);
}));

(minecljs.ui.t_minecljs$ui35812.cljs$lang$type = true);

(minecljs.ui.t_minecljs$ui35812.cljs$lang$ctorStr = "minecljs.ui/t_minecljs$ui35812");

(minecljs.ui.t_minecljs$ui35812.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.ui/t_minecljs$ui35812");
}));

/**
 * Positional factory function for minecljs.ui/t_minecljs$ui35812.
 */
minecljs.ui.__GT_t_minecljs$ui35812 = (function minecljs$ui$__GT_t_minecljs$ui35812(meta35813){
return (new minecljs.ui.t_minecljs$ui35812(meta35813));
});

}

return (new minecljs.ui.t_minecljs$ui35812(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.ui.cell_base = (function minecljs$ui$cell_base(var_args){
var G__35821 = arguments.length;
switch (G__35821) {
case 0:
return minecljs.ui.cell_base.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return minecljs.ui.cell_base.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return minecljs.ui.cell_base.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(minecljs.ui.cell_base.cljs$core$IFn$_invoke$arity$0 = (function (){
return minecljs.ui.cell_base.call(null,cljs.core.PersistentArrayMap.EMPTY,"");
}));

(minecljs.ui.cell_base.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return minecljs.ui.cell_base.call(null,x,"");
} else {
return minecljs.ui.cell_base.call(null,cljs.core.PersistentArrayMap.EMPTY,x);
}
}));

(minecljs.ui.cell_base.cljs$core$IFn$_invoke$arity$2 = (function (p__35822,children){
var map__35823 = p__35822;
var map__35823__$1 = cljs.core.__destructure_map.call(null,map__35823);
var open_QMARK_ = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var on_open = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var on_open_around = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481));
var on_flag = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309));
var on_mark = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"on-mark","on-mark",588773538));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_(e.altKey)){
var and__5041__auto__ = on_mark;
if(cljs.core.truth_(and__5041__auto__)){
return on_mark.call(null);
} else {
return and__5041__auto__;
}
} else {
if(cljs.core.truth_(e.ctrlKey)){
return new cljs.core.Keyword(null,"none","none",1333468478);
} else {
var and__5041__auto__ = on_open;
if(cljs.core.truth_(and__5041__auto__)){
return on_open.call(null);
} else {
return and__5041__auto__;
}

}
}
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
e.preventDefault();

e.stopPropagation();

if(cljs.core.truth_(on_open_around)){
on_open_around.call(null);
} else {
}

if(cljs.core.truth_(on_flag)){
return on_flag.call(null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"32px",new cljs.core.Keyword(null,"height","height",1025178622),"32px",new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",minecljs.ui.rgb.call(null,(255),(255),(255),0.15)].join(''),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"32px",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(open_QMARK_)?new cljs.core.Keyword(null,"PapayaWhip","PapayaWhip",499786973):new cljs.core.Keyword(null,"yellowgreen","yellowgreen",844595052)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(open_QMARK_)?new cljs.core.Keyword(null,"default","default",-1987822328):new cljs.core.Keyword(null,"pointer","pointer",85071187))], null)], null),children], null);
}));

(minecljs.ui.cell_base.cljs$lang$maxFixedArity = 2);

devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.ui","minecljs.ui",-671969340),new cljs.core.Keyword(null,"cell-base","cell-base",-416547546)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cell-base",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.ui !== 'undefined') && (typeof minecljs.ui.t_minecljs$ui35825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.ui.t_minecljs$ui35825 = (function (meta35826){
this.meta35826 = meta35826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.ui.t_minecljs$ui35825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35827,meta35826__$1){
var self__ = this;
var _35827__$1 = this;
return (new minecljs.ui.t_minecljs$ui35825(meta35826__$1));
}));

(minecljs.ui.t_minecljs$ui35825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35827){
var self__ = this;
var _35827__$1 = this;
return self__.meta35826;
}));

(minecljs.ui.t_minecljs$ui35825.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.ui.t_minecljs$ui35825.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Base component for all cell types")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Closed:")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.card_row,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,"\uD83D\uDCA3"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Open:")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.card_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null),"\uD83D\uDCA3"], null)], null)], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.ui.t_minecljs$ui35825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35826","meta35826",-710599342,null)], null);
}));

(minecljs.ui.t_minecljs$ui35825.cljs$lang$type = true);

(minecljs.ui.t_minecljs$ui35825.cljs$lang$ctorStr = "minecljs.ui/t_minecljs$ui35825");

(minecljs.ui.t_minecljs$ui35825.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.ui/t_minecljs$ui35825");
}));

/**
 * Positional factory function for minecljs.ui/t_minecljs$ui35825.
 */
minecljs.ui.__GT_t_minecljs$ui35825 = (function minecljs$ui$__GT_t_minecljs$ui35825(meta35826){
return (new minecljs.ui.t_minecljs$ui35825(meta35826));
});

}

return (new minecljs.ui.t_minecljs$ui35825(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.ui.cell = (function minecljs$ui$cell(p__35828){
var map__35829 = p__35828;
var map__35829__$1 = cljs.core.__destructure_map.call(null,map__35829);
var type = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var on_open = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var on_open_around = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481));
var on_flag = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309));
var on_mark = cljs.core.get.call(null,map__35829__$1,new cljs.core.Keyword(null,"on-mark","on-mark",588773538));
try{if(((cljs.core.vector_QMARK_.call(null,type)) && ((cljs.core.count.call(null,type) === 2)))){
try{var type_0__35831 = cljs.core.nth.call(null,type,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,type_0__35831,new cljs.core.Keyword(null,"empty","empty",767870958))){
try{var type_1__35832 = cljs.core.nth.call(null,type,(1));
if((type_1__35832 === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35844){if((e35844 instanceof Error)){
var e__28027__auto__ = e35844;
if((e__28027__auto__ === cljs.core.match.backtrack)){
var n = cljs.core.nth.call(null,type,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481),on_open_around], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),minecljs.ui.cell_mines_around_color.call(null,n)], null)], null),n], null)], null);
} else {
throw e__28027__auto__;
}
} else {
throw e35844;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35841){if((e35841 instanceof Error)){
var e__28027__auto__ = e35841;
if((e__28027__auto__ === cljs.core.match.backtrack)){
try{var type_0__35831 = cljs.core.nth.call(null,type,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,type_0__35831,new cljs.core.Keyword(null,"empty-preview","empty-preview",-1756277821))){
try{var type_1__35832 = cljs.core.nth.call(null,type,(1));
if((type_1__35832 === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),on_open,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),on_flag], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35843){if((e35843 instanceof Error)){
var e__28027__auto____$1 = e35843;
if((e__28027__auto____$1 === cljs.core.match.backtrack)){
var n = cljs.core.nth.call(null,type,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),on_open,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),on_flag], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),minecljs.ui.cell_mines_around_color.call(null,n),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5], null)], null),n], null)], null);
} else {
throw e__28027__auto____$1;
}
} else {
throw e35843;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35842){if((e35842 instanceof Error)){
var e__28027__auto____$1 = e35842;
if((e__28027__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__28027__auto____$1;
}
} else {
throw e35842;

}
}} else {
throw e__28027__auto__;
}
} else {
throw e35841;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e35833){if((e35833 instanceof Error)){
var e__28027__auto__ = e35833;
if((e__28027__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"exploded","exploded",-931450631))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null),"\uD83D\uDD25"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35834){if((e35834 instanceof Error)){
var e__28027__auto____$1 = e35834;
if((e__28027__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"defused","defused",-1674545666))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null),"\uD83D\uDCA3"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35835){if((e35835 instanceof Error)){
var e__28027__auto____$2 = e35835;
if((e__28027__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"mine-preview","mine-preview",-1678754082))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),on_open,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),on_flag], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5], null)], null),"\uD83D\uDCA3"], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35836){if((e35836 instanceof Error)){
var e__28027__auto____$3 = e35836;
if((e__28027__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"closed","closed",-919675359))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),on_open,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),on_flag,new cljs.core.Keyword(null,"on-mark","on-mark",588773538),on_mark], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35837){if((e35837 instanceof Error)){
var e__28027__auto____$4 = e35837;
if((e__28027__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"flag","flag",1088647881))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),on_flag], null),"\uD83D\uDEA9"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35838){if((e35838 instanceof Error)){
var e__28027__auto____$5 = e35838;
if((e__28027__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"mark","mark",-373816345))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),on_open,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),on_flag,new cljs.core.Keyword(null,"on-mark","on-mark",588773538),on_mark], null),"\u2753"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35839){if((e35839 instanceof Error)){
var e__28027__auto____$6 = e35839;
if((e__28027__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"wrong-flag","wrong-flag",-559267509))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null),"\u274C"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e35840){if((e35840 instanceof Error)){
var e__28027__auto____$7 = e35840;
if((e__28027__auto____$7 === cljs.core.match.backtrack)){
throw new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown-cell-type","unknown-cell-type",-2101058038),type], null);
} else {
throw e__28027__auto____$7;
}
} else {
throw e35840;

}
}} else {
throw e__28027__auto____$6;
}
} else {
throw e35839;

}
}} else {
throw e__28027__auto____$5;
}
} else {
throw e35838;

}
}} else {
throw e__28027__auto____$4;
}
} else {
throw e35837;

}
}} else {
throw e__28027__auto____$3;
}
} else {
throw e35836;

}
}} else {
throw e__28027__auto____$2;
}
} else {
throw e35835;

}
}} else {
throw e__28027__auto____$1;
}
} else {
throw e35834;

}
}} else {
throw e__28027__auto__;
}
} else {
throw e35833;

}
}});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.ui","minecljs.ui",-671969340),new cljs.core.Keyword(null,"cell","cell",764245084)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cell",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.ui !== 'undefined') && (typeof minecljs.ui.t_minecljs$ui35845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.ui.t_minecljs$ui35845 = (function (meta35846){
this.meta35846 = meta35846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.ui.t_minecljs$ui35845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35847,meta35846__$1){
var self__ = this;
var _35847__$1 = this;
return (new minecljs.ui.t_minecljs$ui35845(meta35846__$1));
}));

(minecljs.ui.t_minecljs$ui35845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35847){
var self__ = this;
var _35847__$1 = this;
return self__.meta35846;
}));

(minecljs.ui.t_minecljs$ui35845.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.ui.t_minecljs$ui35845.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Predefined cell types")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Empty open cells")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),minecljs.defcard.markup_block.call(null,"[card-row\n [cell {:type [:empty 0]}]\n [cell {:type [:empty 1]}]\n [cell {:type [:empty 2]}]\n [cell {:type [:empty 3]}]\n [cell {:type [:empty 4]}]\n [cell {:type [:empty 5]}]\n [cell {:type [:empty 6]}]\n [cell {:type [:empty 7]}]\n [cell {:type [:empty 8]}]]\n",new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.card_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),(2)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),(3)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),(4)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),(5)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),(6)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),(7)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),(8)], null)], null)], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Open cells with mines")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),minecljs.defcard.markup_block.call(null,"[card-row [cell {:type :exploded}] [cell {:type :defused}]]\n",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.card_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"exploded","exploded",-931450631)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"defused","defused",-1674545666)], null)], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Closed cells\n\n   `on-open` and `on-flags` are called ONLY when it is possible, so it is impossible to handle\n   `on-open` for already open cell, or closed cell with flag, `cell` incapsulates this behaviour.\n   \n   Closed cells without flag and all preview cells are the only cell types, that can handle\n   both events.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),minecljs.defcard.markup_block.call(null,"[card-row\n [cell\n  {:type :closed,\n   :on-open (fn* [] (print :on-open)),\n   :on-flag (fn* [] (print :on-flag)),\n   :on-mark (fn* [] (print :on-mark))}]\n [cell {:type :flag, :on-flag (fn* [] (print :on-flag))}]\n [cell\n  {:type :mark,\n   :on-open (fn* [] (print :on-open)),\n   :on-flag (fn* [] (print :on-flag)),\n   :on-mark (fn* [] (print :on-mark))}]]\n",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.card_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (){
return cljs.core.print.call(null,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
}),new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),(function (){
return cljs.core.print.call(null,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309));
}),new cljs.core.Keyword(null,"on-mark","on-mark",588773538),(function (){
return cljs.core.print.call(null,new cljs.core.Keyword(null,"on-mark","on-mark",588773538));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),(function (){
return cljs.core.print.call(null,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (){
return cljs.core.print.call(null,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
}),new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),(function (){
return cljs.core.print.call(null,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309));
}),new cljs.core.Keyword(null,"on-mark","on-mark",588773538),(function (){
return cljs.core.print.call(null,new cljs.core.Keyword(null,"on-mark","on-mark",588773538));
})], null)], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Preview cells (for debug)")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),minecljs.defcard.markup_block.call(null,"[card-row\n [cell {:type :mine-preview}]\n [cell {:type [:empty-preview 1]}]\n [cell {:type [:empty-preview 5]}]]\n",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.card_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mine-preview","mine-preview",-1678754082)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty-preview","empty-preview",-1756277821),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty-preview","empty-preview",-1756277821),(5)], null)], null)], null)], null))], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.ui.t_minecljs$ui35845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35846","meta35846",976022049,null)], null);
}));

(minecljs.ui.t_minecljs$ui35845.cljs$lang$type = true);

(minecljs.ui.t_minecljs$ui35845.cljs$lang$ctorStr = "minecljs.ui/t_minecljs$ui35845");

(minecljs.ui.t_minecljs$ui35845.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.ui/t_minecljs$ui35845");
}));

/**
 * Positional factory function for minecljs.ui/t_minecljs$ui35845.
 */
minecljs.ui.__GT_t_minecljs$ui35845 = (function minecljs$ui$__GT_t_minecljs$ui35845(meta35846){
return (new minecljs.ui.t_minecljs$ui35845(meta35846));
});

}

return (new minecljs.ui.t_minecljs$ui35845(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.ui.field = (function minecljs$ui$field(p__35848){
var map__35849 = p__35848;
var map__35849__$1 = cljs.core.__destructure_map.call(null,map__35849);
var width = cljs.core.get.call(null,map__35849__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__35849__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var get_type = cljs.core.get.call(null,map__35849__$1,new cljs.core.Keyword(null,"get-type","get-type",-1657795007));
var on_open = cljs.core.get.call(null,map__35849__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var on_open_around = cljs.core.get.call(null,map__35849__$1,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481));
var on_flag = cljs.core.get.call(null,map__35849__$1,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309));
var on_mark = cljs.core.get.call(null,map__35849__$1,new cljs.core.Keyword(null,"on-mark","on-mark",588773538));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),(function (){var iter__5520__auto__ = (function minecljs$ui$field_$_iter__35850(s__35851){
return (new cljs.core.LazySeq(null,(function (){
var s__35851__$1 = s__35851;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__35851__$1);
if(temp__5804__auto__){
var s__35851__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35851__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__35851__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__35853 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__35852 = (0);
while(true){
if((i__35852 < size__5519__auto__)){
var y = cljs.core._nth.call(null,c__5518__auto__,i__35852);
cljs.core.chunk_append.call(null,b__35853,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),(function (){var iter__5520__auto__ = ((function (i__35852,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function minecljs$ui$field_$_iter__35850_$_iter__35854(s__35855){
return (new cljs.core.LazySeq(null,((function (i__35852,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
var s__35855__$1 = s__35855;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__35855__$1);
if(temp__5804__auto____$1){
var s__35855__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35855__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first.call(null,s__35855__$2);
var size__5519__auto____$1 = cljs.core.count.call(null,c__5518__auto____$1);
var b__35857 = cljs.core.chunk_buffer.call(null,size__5519__auto____$1);
if((function (){var i__35856 = (0);
while(true){
if((i__35856 < size__5519__auto____$1)){
var x = cljs.core._nth.call(null,c__5518__auto____$1,i__35856);
cljs.core.chunk_append.call(null,b__35857,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),get_type.call(null,x,y),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (i__35856,i__35852,x,c__5518__auto____$1,size__5519__auto____$1,b__35857,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open)){
return on_open.call(null,x,y);
} else {
return null;
}
});})(i__35856,i__35852,x,c__5518__auto____$1,size__5519__auto____$1,b__35857,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),((function (i__35856,i__35852,x,c__5518__auto____$1,size__5519__auto____$1,b__35857,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_flag)){
return on_flag.call(null,x,y);
} else {
return null;
}
});})(i__35856,i__35852,x,c__5518__auto____$1,size__5519__auto____$1,b__35857,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-mark","on-mark",588773538),((function (i__35856,i__35852,x,c__5518__auto____$1,size__5519__auto____$1,b__35857,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_mark)){
return on_mark.call(null,x,y);
} else {
return null;
}
});})(i__35856,i__35852,x,c__5518__auto____$1,size__5519__auto____$1,b__35857,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481),((function (i__35856,i__35852,x,c__5518__auto____$1,size__5519__auto____$1,b__35857,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open_around)){
return on_open_around.call(null,x,y);
} else {
return null;
}
});})(i__35856,i__35852,x,c__5518__auto____$1,size__5519__auto____$1,b__35857,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__35862 = (i__35856 + (1));
i__35856 = G__35862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35857),minecljs$ui$field_$_iter__35850_$_iter__35854.call(null,cljs.core.chunk_rest.call(null,s__35855__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35857),null);
}
} else {
var x = cljs.core.first.call(null,s__35855__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),get_type.call(null,x,y),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (i__35852,x,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open)){
return on_open.call(null,x,y);
} else {
return null;
}
});})(i__35852,x,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),((function (i__35852,x,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_flag)){
return on_flag.call(null,x,y);
} else {
return null;
}
});})(i__35852,x,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-mark","on-mark",588773538),((function (i__35852,x,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_mark)){
return on_mark.call(null,x,y);
} else {
return null;
}
});})(i__35852,x,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481),((function (i__35852,x,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open_around)){
return on_open_around.call(null,x,y);
} else {
return null;
}
});})(i__35852,x,s__35855__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),minecljs$ui$field_$_iter__35850_$_iter__35854.call(null,cljs.core.rest.call(null,s__35855__$2)));
}
} else {
return null;
}
break;
}
});})(i__35852,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,null,null));
});})(i__35852,y,c__5518__auto__,size__5519__auto__,b__35853,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
;
return iter__5520__auto__.call(null,cljs.core.range.call(null,width));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__35863 = (i__35852 + (1));
i__35852 = G__35863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35853),minecljs$ui$field_$_iter__35850.call(null,cljs.core.chunk_rest.call(null,s__35851__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35853),null);
}
} else {
var y = cljs.core.first.call(null,s__35851__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),(function (){var iter__5520__auto__ = ((function (y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function minecljs$ui$field_$_iter__35850_$_iter__35858(s__35859){
return (new cljs.core.LazySeq(null,(function (){
var s__35859__$1 = s__35859;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__35859__$1);
if(temp__5804__auto____$1){
var s__35859__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35859__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__35859__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__35861 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__35860 = (0);
while(true){
if((i__35860 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__35860);
cljs.core.chunk_append.call(null,b__35861,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),get_type.call(null,x,y),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (i__35860,x,c__5518__auto__,size__5519__auto__,b__35861,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open)){
return on_open.call(null,x,y);
} else {
return null;
}
});})(i__35860,x,c__5518__auto__,size__5519__auto__,b__35861,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),((function (i__35860,x,c__5518__auto__,size__5519__auto__,b__35861,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_flag)){
return on_flag.call(null,x,y);
} else {
return null;
}
});})(i__35860,x,c__5518__auto__,size__5519__auto__,b__35861,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-mark","on-mark",588773538),((function (i__35860,x,c__5518__auto__,size__5519__auto__,b__35861,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_mark)){
return on_mark.call(null,x,y);
} else {
return null;
}
});})(i__35860,x,c__5518__auto__,size__5519__auto__,b__35861,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481),((function (i__35860,x,c__5518__auto__,size__5519__auto__,b__35861,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open_around)){
return on_open_around.call(null,x,y);
} else {
return null;
}
});})(i__35860,x,c__5518__auto__,size__5519__auto__,b__35861,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__35864 = (i__35860 + (1));
i__35860 = G__35864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35861),minecljs$ui$field_$_iter__35850_$_iter__35858.call(null,cljs.core.chunk_rest.call(null,s__35859__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35861),null);
}
} else {
var x = cljs.core.first.call(null,s__35859__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),get_type.call(null,x,y),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (x,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open)){
return on_open.call(null,x,y);
} else {
return null;
}
});})(x,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),((function (x,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_flag)){
return on_flag.call(null,x,y);
} else {
return null;
}
});})(x,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-mark","on-mark",588773538),((function (x,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_mark)){
return on_mark.call(null,x,y);
} else {
return null;
}
});})(x,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481),((function (x,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open_around)){
return on_open_around.call(null,x,y);
} else {
return null;
}
});})(x,s__35859__$2,temp__5804__auto____$1,y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),minecljs$ui$field_$_iter__35850_$_iter__35858.call(null,cljs.core.rest.call(null,s__35859__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(y,s__35851__$2,temp__5804__auto__,map__35849,map__35849__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
;
return iter__5520__auto__.call(null,cljs.core.range.call(null,width));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),minecljs$ui$field_$_iter__35850.call(null,cljs.core.rest.call(null,s__35851__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,cljs.core.range.call(null,height));
})()], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.ui","minecljs.ui",-671969340),new cljs.core.Keyword(null,"field","field",-1302436500)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"field",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.ui !== 'undefined') && (typeof minecljs.ui.t_minecljs$ui35865 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.ui.t_minecljs$ui35865 = (function (meta35866){
this.meta35866 = meta35866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.ui.t_minecljs$ui35865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35867,meta35866__$1){
var self__ = this;
var _35867__$1 = this;
return (new minecljs.ui.t_minecljs$ui35865(meta35866__$1));
}));

(minecljs.ui.t_minecljs$ui35865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35867){
var self__ = this;
var _35867__$1 = this;
return self__.meta35866;
}));

(minecljs.ui.t_minecljs$ui35865.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.ui.t_minecljs$ui35865.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),minecljs.defcard.markup_block.call(null,"[field\n {:width 3,\n  :height 3,\n  :get-type (fn [] :closed),\n  :on-open (fn [x y] (print [:open x y])),\n  :on-flag (fn [x y] (print [:flag x y]))}]\n",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.field,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(3),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"get-type","get-type",-1657795007),(function (){
return new cljs.core.Keyword(null,"closed","closed",-919675359);
}),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (x,y){
return cljs.core.print.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),x,y], null));
}),new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),(function (x,y){
return cljs.core.print.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flag","flag",1088647881),x,y], null));
})], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),minecljs.defcard.markup_block.call(null,"(let\n [map\n  [[:defused :exploded :mark]\n   [:flag [:empty 0] [:empty 5]]\n   [:closed :mine-preview [:empty-preview 3]]]]\n (field\n  {:width 3,\n   :height 3,\n   :get-type (fn [x y] (-> map (nth y) (nth x))),\n   :on-open (fn [x y] (print [:open x y])),\n   :on-flag (fn [x y] (print [:flag x y]))}))\n",(function (){var map = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defused","defused",-1674545666),new cljs.core.Keyword(null,"exploded","exploded",-931450631),new cljs.core.Keyword(null,"mark","mark",-373816345)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flag","flag",1088647881),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closed","closed",-919675359),new cljs.core.Keyword(null,"mine-preview","mine-preview",-1678754082),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty-preview","empty-preview",-1756277821),(3)], null)], null)], null);
return minecljs.ui.field.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(3),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"get-type","get-type",-1657795007),(function (x,y){
return cljs.core.nth.call(null,cljs.core.nth.call(null,map,y),x);
}),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (x,y){
return cljs.core.print.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),x,y], null));
}),new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),(function (x,y){
return cljs.core.print.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flag","flag",1088647881),x,y], null));
})], null));
})())], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.ui.t_minecljs$ui35865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35866","meta35866",-1317362775,null)], null);
}));

(minecljs.ui.t_minecljs$ui35865.cljs$lang$type = true);

(minecljs.ui.t_minecljs$ui35865.cljs$lang$ctorStr = "minecljs.ui/t_minecljs$ui35865");

(minecljs.ui.t_minecljs$ui35865.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.ui/t_minecljs$ui35865");
}));

/**
 * Positional factory function for minecljs.ui/t_minecljs$ui35865.
 */
minecljs.ui.__GT_t_minecljs$ui35865 = (function minecljs$ui$__GT_t_minecljs$ui35865(meta35866){
return (new minecljs.ui.t_minecljs$ui35865(meta35866));
});

}

return (new minecljs.ui.t_minecljs$ui35865(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.ui.switcher = (function minecljs$ui$switcher(p__35868){
var map__35869 = p__35868;
var map__35869__$1 = cljs.core.__destructure_map.call(null,map__35869);
var options = cljs.core.get.call(null,map__35869__$1,new cljs.core.Keyword(null,"options","options",99638489));
var value = cljs.core.get.call(null,map__35869__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.call(null,map__35869__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(8),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)], null),(function (){var iter__5520__auto__ = (function minecljs$ui$switcher_$_iter__35870(s__35871){
return (new cljs.core.LazySeq(null,(function (){
var s__35871__$1 = s__35871;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__35871__$1);
if(temp__5804__auto__){
var s__35871__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35871__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__35871__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__35873 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__35872 = (0);
while(true){
if((i__35872 < size__5519__auto__)){
var vec__35874 = cljs.core._nth.call(null,c__5518__auto__,i__35872);
var key = cljs.core.nth.call(null,vec__35874,(0),null);
var label = cljs.core.nth.call(null,vec__35874,(1),null);
var active_QMARK_ = cljs.core._EQ_.call(null,key,value);
cljs.core.chunk_append.call(null,b__35873,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),(16),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"background","background",-863952629),((active_QMARK_)?"#eee":"#fff"),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"cursor","cursor",1011937484),((active_QMARK_)?null:new cljs.core.Keyword(null,"pointer","pointer",85071187))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((active_QMARK_)?null:((function (i__35872,active_QMARK_,vec__35874,key,label,c__5518__auto__,size__5519__auto__,b__35873,s__35871__$2,temp__5804__auto__,map__35869,map__35869__$1,options,value,on_change){
return (function (){
return on_change.call(null,key);
});})(i__35872,active_QMARK_,vec__35874,key,label,c__5518__auto__,size__5519__auto__,b__35873,s__35871__$2,temp__5804__auto__,map__35869,map__35869__$1,options,value,on_change))
)], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__35880 = (i__35872 + (1));
i__35872 = G__35880;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35873),minecljs$ui$switcher_$_iter__35870.call(null,cljs.core.chunk_rest.call(null,s__35871__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35873),null);
}
} else {
var vec__35877 = cljs.core.first.call(null,s__35871__$2);
var key = cljs.core.nth.call(null,vec__35877,(0),null);
var label = cljs.core.nth.call(null,vec__35877,(1),null);
var active_QMARK_ = cljs.core._EQ_.call(null,key,value);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),(16),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"background","background",-863952629),((active_QMARK_)?"#eee":"#fff"),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"cursor","cursor",1011937484),((active_QMARK_)?null:new cljs.core.Keyword(null,"pointer","pointer",85071187))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((active_QMARK_)?null:((function (active_QMARK_,vec__35877,key,label,s__35871__$2,temp__5804__auto__,map__35869,map__35869__$1,options,value,on_change){
return (function (){
return on_change.call(null,key);
});})(active_QMARK_,vec__35877,key,label,s__35871__$2,temp__5804__auto__,map__35869,map__35869__$1,options,value,on_change))
)], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),minecljs$ui$switcher_$_iter__35870.call(null,cljs.core.rest.call(null,s__35871__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,options);
})()], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.ui","minecljs.ui",-671969340),new cljs.core.Keyword(null,"switcher","switcher",-327264790)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"switcher",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.ui !== 'undefined') && (typeof minecljs.ui.t_minecljs$ui35882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.ui.t_minecljs$ui35882 = (function (meta35883){
this.meta35883 = meta35883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.ui.t_minecljs$ui35882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35884,meta35883__$1){
var self__ = this;
var _35884__$1 = this;
return (new minecljs.ui.t_minecljs$ui35882(meta35883__$1));
}));

(minecljs.ui.t_minecljs$ui35882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35884){
var self__ = this;
var _35884__$1 = this;
return self__.meta35883;
}));

(minecljs.ui.t_minecljs$ui35882.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.ui.t_minecljs$ui35882.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.switcher,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"B"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),"C"], null)], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.List.EMPTY;
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"#### Interactive example, try to select:")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var example = (function minecljs$ui$example(){
var with_let35888 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let35888","with-let35888",-1094313832));
var temp__5808__auto___35891 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___35891 == null)){
} else {
var c__29187__auto___35892 = temp__5808__auto___35891;
if((with_let35888.generation === c__29187__auto___35892.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let35888.generation = c__29187__auto___35892.ratomGeneration);
}

var init35889 = (with_let35888.length === (0));
var mode = ((((init35889) || (cljs.core.not.call(null,with_let35888.hasOwnProperty((0))))))?(with_let35888[(0)] = reagent.core.atom.call(null,new cljs.core.Keyword(null,"easy","easy",315769928))):(with_let35888[(0)]));
var res35890 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Selected mode: ",cljs.core.deref.call(null,mode),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.switcher,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),"Easy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),"Medium"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191),"Hard"], null)], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,mode),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__35881_SHARP_){
return cljs.core.reset_BANG_.call(null,mode,p1__35881_SHARP_);
})], null)], null)], null);
return res35890;
});
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example], null);
})()], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.ui.t_minecljs$ui35882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35883","meta35883",-126102997,null)], null);
}));

(minecljs.ui.t_minecljs$ui35882.cljs$lang$type = true);

(minecljs.ui.t_minecljs$ui35882.cljs$lang$ctorStr = "minecljs.ui/t_minecljs$ui35882");

(minecljs.ui.t_minecljs$ui35882.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.ui/t_minecljs$ui35882");
}));

/**
 * Positional factory function for minecljs.ui/t_minecljs$ui35882.
 */
minecljs.ui.__GT_t_minecljs$ui35882 = (function minecljs$ui$__GT_t_minecljs$ui35882(meta35883){
return (new minecljs.ui.t_minecljs$ui35882(meta35883));
});

}

return (new minecljs.ui.t_minecljs$ui35882(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.ui.reset_button = (function minecljs$ui$reset_button(on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding","padding",1660304693),(16),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(8),new cljs.core.Keyword(null,"background","background",-863952629),"#fff"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),"\u27F3"], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.ui","minecljs.ui",-671969340),new cljs.core.Keyword(null,"reset-button","reset-button",7908814)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"reset-button",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.ui !== 'undefined') && (typeof minecljs.ui.t_minecljs$ui35893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.ui.t_minecljs$ui35893 = (function (meta35894){
this.meta35894 = meta35894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.ui.t_minecljs$ui35893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35895,meta35894__$1){
var self__ = this;
var _35895__$1 = this;
return (new minecljs.ui.t_minecljs$ui35893(meta35894__$1));
}));

(minecljs.ui.t_minecljs$ui35893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35895){
var self__ = this;
var _35895__$1 = this;
return self__.meta35894;
}));

(minecljs.ui.t_minecljs$ui35893.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.ui.t_minecljs$ui35893.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.reset_button,(function (){
return cljs.core.List.EMPTY;
})], null)], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.ui.t_minecljs$ui35893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35894","meta35894",-1410566182,null)], null);
}));

(minecljs.ui.t_minecljs$ui35893.cljs$lang$type = true);

(minecljs.ui.t_minecljs$ui35893.cljs$lang$ctorStr = "minecljs.ui/t_minecljs$ui35893");

(minecljs.ui.t_minecljs$ui35893.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.ui/t_minecljs$ui35893");
}));

/**
 * Positional factory function for minecljs.ui/t_minecljs$ui35893.
 */
minecljs.ui.__GT_t_minecljs$ui35893 = (function minecljs$ui$__GT_t_minecljs$ui35893(meta35894){
return (new minecljs.ui.t_minecljs$ui35893(meta35894));
});

}

return (new minecljs.ui.t_minecljs$ui35893(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.ui.seconds__GT_mm_COLON_ss = (function minecljs$ui$seconds__GT_mm_COLON_ss(duration){
var s = cljs.core.mod.call(null,duration,(60));
var m = ((duration - s) / (60));
return goog.string.format("%02d:%02d",m,s);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.ui","minecljs.ui",-671969340),new cljs.core.Keyword(null,"seconds->mm:ss","seconds->mm:ss",2056141329)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"seconds->mm:ss",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.ui !== 'undefined') && (typeof minecljs.ui.t_minecljs$ui35896 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.ui.t_minecljs$ui35896 = (function (meta35897){
this.meta35897 = meta35897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.ui.t_minecljs$ui35896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35898,meta35897__$1){
var self__ = this;
var _35898__$1 = this;
return (new minecljs.ui.t_minecljs$ui35896(meta35897__$1));
}));

(minecljs.ui.t_minecljs$ui35896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35898){
var self__ = this;
var _35898__$1 = this;
return self__.meta35897;
}));

(minecljs.ui.t_minecljs$ui35896.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.ui.t_minecljs$ui35896.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,minecljs.ui.seconds__GT_mm_COLON_ss.call(null,(45)),"00:45"))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(seconds->mm:ss 45)\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,"00:45")], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(seconds->mm:ss 45)\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,"00:45")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,minecljs.ui.seconds__GT_mm_COLON_ss.call(null,(45)))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,minecljs.ui.seconds__GT_mm_COLON_ss.call(null,(145)),"02:25"))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(seconds->mm:ss 145)\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,"02:25")], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(seconds->mm:ss 145)\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,"02:25")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,minecljs.ui.seconds__GT_mm_COLON_ss.call(null,(145)))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,minecljs.ui.seconds__GT_mm_COLON_ss.call(null,(99999)),"1666:39"))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(seconds->mm:ss 99999)\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,"1666:39")], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(seconds->mm:ss 99999)\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,"1666:39")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,minecljs.ui.seconds__GT_mm_COLON_ss.call(null,(99999)))], null)], null))], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.ui.t_minecljs$ui35896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35897","meta35897",594436028,null)], null);
}));

(minecljs.ui.t_minecljs$ui35896.cljs$lang$type = true);

(minecljs.ui.t_minecljs$ui35896.cljs$lang$ctorStr = "minecljs.ui/t_minecljs$ui35896");

(minecljs.ui.t_minecljs$ui35896.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.ui/t_minecljs$ui35896");
}));

/**
 * Positional factory function for minecljs.ui/t_minecljs$ui35896.
 */
minecljs.ui.__GT_t_minecljs$ui35896 = (function minecljs$ui$__GT_t_minecljs$ui35896(meta35897){
return (new minecljs.ui.t_minecljs$ui35896(meta35897));
});

}

return (new minecljs.ui.t_minecljs$ui35896(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.ui.game_stats = (function minecljs$ui$game_stats(p__35899){
var map__35900 = p__35899;
var map__35900__$1 = cljs.core.__destructure_map.call(null,map__35900);
var mines_rest = cljs.core.get.call(null,map__35900__$1,new cljs.core.Keyword(null,"mines-rest","mines-rest",728153196));
var duration = cljs.core.get.call(null,map__35900__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(16),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\uD83D\uDEA9 ",mines_rest], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),minecljs.ui.seconds__GT_mm_COLON_ss.call(null,duration)," \uD83D\uDD50"], null)], null);
});
minecljs.ui.control_panel = (function minecljs$ui$control_panel(p__35901){
var map__35902 = p__35901;
var map__35902__$1 = cljs.core.__destructure_map.call(null,map__35902);
var mode = cljs.core.get.call(null,map__35902__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var mines_rest = cljs.core.get.call(null,map__35902__$1,new cljs.core.Keyword(null,"mines-rest","mines-rest",728153196));
var duration = cljs.core.get.call(null,map__35902__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var on_mode_change = cljs.core.get.call(null,map__35902__$1,new cljs.core.Keyword(null,"on-mode-change","on-mode-change",2031399020));
var on_highlight_QMARK__change = cljs.core.get.call(null,map__35902__$1,new cljs.core.Keyword(null,"on-highlight?-change","on-highlight?-change",329778279));
var on_reset = cljs.core.get.call(null,map__35902__$1,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829));
var modes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),"Easy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),"Medium"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191),"Hard"], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(8)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.switcher,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"options","options",99638489),modes,new cljs.core.Keyword(null,"value","value",305978217),mode,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_mode_change], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.reset_button,on_reset], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.game_stats,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mines-rest","mines-rest",728153196),mines_rest,new cljs.core.Keyword(null,"duration","duration",1444101068),duration], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.ui","minecljs.ui",-671969340),new cljs.core.Keyword(null,"control-panel","control-panel",-1773875065)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"control-panel",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.ui !== 'undefined') && (typeof minecljs.ui.t_minecljs$ui35903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.ui.t_minecljs$ui35903 = (function (meta35904){
this.meta35904 = meta35904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.ui.t_minecljs$ui35903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35905,meta35904__$1){
var self__ = this;
var _35905__$1 = this;
return (new minecljs.ui.t_minecljs$ui35903(meta35904__$1));
}));

(minecljs.ui.t_minecljs$ui35903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35905){
var self__ = this;
var _35905__$1 = this;
return self__.meta35904;
}));

(minecljs.ui.t_minecljs$ui35903.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.ui.t_minecljs$ui35903.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.control_panel,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"mines-rest","mines-rest",728153196),(10),new cljs.core.Keyword(null,"duration","duration",1444101068),(10),new cljs.core.Keyword(null,"on-mode-change","on-mode-change",2031399020),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-reset","on-reset",1057446829),(function (){
return cljs.core.List.EMPTY;
})], null)], null)], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.ui.t_minecljs$ui35903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35904","meta35904",-550662739,null)], null);
}));

(minecljs.ui.t_minecljs$ui35903.cljs$lang$type = true);

(minecljs.ui.t_minecljs$ui35903.cljs$lang$ctorStr = "minecljs.ui/t_minecljs$ui35903");

(minecljs.ui.t_minecljs$ui35903.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.ui/t_minecljs$ui35903");
}));

/**
 * Positional factory function for minecljs.ui/t_minecljs$ui35903.
 */
minecljs.ui.__GT_t_minecljs$ui35903 = (function minecljs$ui$__GT_t_minecljs$ui35903(meta35904){
return (new minecljs.ui.t_minecljs$ui35903(meta35904));
});

}

return (new minecljs.ui.t_minecljs$ui35903(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=ui.js.map?rel=1654704291204
