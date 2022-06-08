// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('minecljs.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.match');
goog.require('minecljs.defcard');
minecljs.ui.card_row = (function minecljs$ui$card_row(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31613 = arguments.length;
var i__5767__auto___31614 = (0);
while(true){
if((i__5767__auto___31614 < len__5766__auto___31613)){
args__5772__auto__.push((arguments[i__5767__auto___31614]));

var G__31615 = (i__5767__auto___31614 + (1));
i__5767__auto___31614 = G__31615;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return minecljs.ui.card_row.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(minecljs.ui.card_row.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null),(function (){var iter__5520__auto__ = (function minecljs$ui$iter__31609(s__31610){
return (new cljs.core.LazySeq(null,(function (){
var s__31610__$1 = s__31610;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__31610__$1);
if(temp__5804__auto__){
var s__31610__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31610__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__31610__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__31612 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__31611 = (0);
while(true){
if((i__31611 < size__5519__auto__)){
var item = cljs.core._nth.call(null,c__5518__auto__,i__31611);
cljs.core.chunk_append.call(null,b__31612,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(8)], null)], null),item], null));

var G__31616 = (i__31611 + (1));
i__31611 = G__31616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31612),minecljs$ui$iter__31609.call(null,cljs.core.chunk_rest.call(null,s__31610__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31612),null);
}
} else {
var item = cljs.core.first.call(null,s__31610__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(8)], null)], null),item], null),minecljs$ui$iter__31609.call(null,cljs.core.rest.call(null,s__31610__$2)));
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
(minecljs.ui.card_row.cljs$lang$applyTo = (function (seq31608){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31608));
}));

minecljs.ui.rgb = (function minecljs$ui$rgb(var_args){
var G__31618 = arguments.length;
switch (G__31618) {
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

minecljs.ui.cell_mines_around_color = (function minecljs$ui$cell_mines_around_color(n){
try{if((n === (1))){
return new cljs.core.Keyword(null,"blue","blue",-622100620);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31622){if((e31622 instanceof Error)){
var e__30262__auto__ = e31622;
if((e__30262__auto__ === cljs.core.match.backtrack)){
try{if((n === (2))){
return new cljs.core.Keyword(null,"green","green",-945526839);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31623){if((e31623 instanceof Error)){
var e__30262__auto____$1 = e31623;
if((e__30262__auto____$1 === cljs.core.match.backtrack)){
try{if((n === (3))){
return new cljs.core.Keyword(null,"brown","brown",1414854429);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31624){if((e31624 instanceof Error)){
var e__30262__auto____$2 = e31624;
if((e__30262__auto____$2 === cljs.core.match.backtrack)){
try{if((n === (4))){
return new cljs.core.Keyword(null,"purple","purple",-876021126);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31625){if((e31625 instanceof Error)){
var e__30262__auto____$3 = e31625;
if((e__30262__auto____$3 === cljs.core.match.backtrack)){
try{if((n === (5))){
return new cljs.core.Keyword(null,"crimson","crimson",-1192060857);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31626){if((e31626 instanceof Error)){
var e__30262__auto____$4 = e31626;
if((e__30262__auto____$4 === cljs.core.match.backtrack)){
try{if((n === (6))){
return new cljs.core.Keyword(null,"red","red",-969428204);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31627){if((e31627 instanceof Error)){
var e__30262__auto____$5 = e31627;
if((e__30262__auto____$5 === cljs.core.match.backtrack)){
try{if((n === (7))){
return new cljs.core.Keyword(null,"indianred","indianred",-1829312906);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31628){if((e31628 instanceof Error)){
var e__30262__auto____$6 = e31628;
if((e__30262__auto____$6 === cljs.core.match.backtrack)){
try{if((n === (8))){
return new cljs.core.Keyword(null,"maroon","maroon",-952210123);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31629){if((e31629 instanceof Error)){
var e__30262__auto____$7 = e31629;
if((e__30262__auto____$7 === cljs.core.match.backtrack)){
throw new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown-cell-mines-around","unknown-cell-mines-around",-232932863),n], null);
} else {
throw e__30262__auto____$7;
}
} else {
throw e31629;

}
}} else {
throw e__30262__auto____$6;
}
} else {
throw e31628;

}
}} else {
throw e__30262__auto____$5;
}
} else {
throw e31627;

}
}} else {
throw e__30262__auto____$4;
}
} else {
throw e31626;

}
}} else {
throw e__30262__auto____$3;
}
} else {
throw e31625;

}
}} else {
throw e__30262__auto____$2;
}
} else {
throw e31624;

}
}} else {
throw e__30262__auto____$1;
}
} else {
throw e31623;

}
}} else {
throw e__30262__auto__;
}
} else {
throw e31622;

}
}});
minecljs.ui.cell_base = (function minecljs$ui$cell_base(var_args){
var G__31631 = arguments.length;
switch (G__31631) {
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

(minecljs.ui.cell_base.cljs$core$IFn$_invoke$arity$2 = (function (p__31632,children){
var map__31633 = p__31632;
var map__31633__$1 = cljs.core.__destructure_map.call(null,map__31633);
var open_QMARK_ = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var on_open = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var on_open_around = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481));
var on_flag = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309));
var on_mark = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"on-mark","on-mark",588773538));
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

minecljs.ui.cell = (function minecljs$ui$cell(p__31635){
var map__31636 = p__31635;
var map__31636__$1 = cljs.core.__destructure_map.call(null,map__31636);
var type = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var on_open = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var on_open_around = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481));
var on_flag = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309));
var on_mark = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"on-mark","on-mark",588773538));
try{if(((cljs.core.vector_QMARK_.call(null,type)) && ((cljs.core.count.call(null,type) === 2)))){
try{var type_0__31638 = cljs.core.nth.call(null,type,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,type_0__31638,new cljs.core.Keyword(null,"empty","empty",767870958))){
try{var type_1__31639 = cljs.core.nth.call(null,type,(1));
if((type_1__31639 === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31651){if((e31651 instanceof Error)){
var e__30262__auto__ = e31651;
if((e__30262__auto__ === cljs.core.match.backtrack)){
var n = cljs.core.nth.call(null,type,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481),on_open_around], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),minecljs.ui.cell_mines_around_color.call(null,n)], null)], null),n], null)], null);
} else {
throw e__30262__auto__;
}
} else {
throw e31651;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31648){if((e31648 instanceof Error)){
var e__30262__auto__ = e31648;
if((e__30262__auto__ === cljs.core.match.backtrack)){
try{var type_0__31638 = cljs.core.nth.call(null,type,(0));
if(cljs.core.keyword_identical_QMARK_.call(null,type_0__31638,new cljs.core.Keyword(null,"empty-preview","empty-preview",-1756277821))){
try{var type_1__31639 = cljs.core.nth.call(null,type,(1));
if((type_1__31639 === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),on_open,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),on_flag], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31650){if((e31650 instanceof Error)){
var e__30262__auto____$1 = e31650;
if((e__30262__auto____$1 === cljs.core.match.backtrack)){
var n = cljs.core.nth.call(null,type,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),on_open,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),on_flag], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),minecljs.ui.cell_mines_around_color.call(null,n),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5], null)], null),n], null)], null);
} else {
throw e__30262__auto____$1;
}
} else {
throw e31650;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31649){if((e31649 instanceof Error)){
var e__30262__auto____$1 = e31649;
if((e__30262__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__30262__auto____$1;
}
} else {
throw e31649;

}
}} else {
throw e__30262__auto__;
}
} else {
throw e31648;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e31640){if((e31640 instanceof Error)){
var e__30262__auto__ = e31640;
if((e__30262__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"exploded","exploded",-931450631))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null),"\uD83D\uDD25"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31641){if((e31641 instanceof Error)){
var e__30262__auto____$1 = e31641;
if((e__30262__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"defused","defused",-1674545666))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null),"\uD83D\uDCA3"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31642){if((e31642 instanceof Error)){
var e__30262__auto____$2 = e31642;
if((e__30262__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"mine-preview","mine-preview",-1678754082))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),on_open,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),on_flag], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5], null)], null),"\uD83D\uDCA3"], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31643){if((e31643 instanceof Error)){
var e__30262__auto____$3 = e31643;
if((e__30262__auto____$3 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"closed","closed",-919675359))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),on_open,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),on_flag,new cljs.core.Keyword(null,"on-mark","on-mark",588773538),on_mark], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31644){if((e31644 instanceof Error)){
var e__30262__auto____$4 = e31644;
if((e__30262__auto____$4 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"flag","flag",1088647881))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),on_flag], null),"\uD83D\uDEA9"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31645){if((e31645 instanceof Error)){
var e__30262__auto____$5 = e31645;
if((e__30262__auto____$5 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"mark","mark",-373816345))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),on_open,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),on_flag,new cljs.core.Keyword(null,"on-mark","on-mark",588773538),on_mark], null),"\u2753"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31646){if((e31646 instanceof Error)){
var e__30262__auto____$6 = e31646;
if((e__30262__auto____$6 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,type,new cljs.core.Keyword(null,"wrong-flag","wrong-flag",-559267509))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null),"\u274C"], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31647){if((e31647 instanceof Error)){
var e__30262__auto____$7 = e31647;
if((e__30262__auto____$7 === cljs.core.match.backtrack)){
throw new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unknown-cell-type","unknown-cell-type",-2101058038),type], null);
} else {
throw e__30262__auto____$7;
}
} else {
throw e31647;

}
}} else {
throw e__30262__auto____$6;
}
} else {
throw e31646;

}
}} else {
throw e__30262__auto____$5;
}
} else {
throw e31645;

}
}} else {
throw e__30262__auto____$4;
}
} else {
throw e31644;

}
}} else {
throw e__30262__auto____$3;
}
} else {
throw e31643;

}
}} else {
throw e__30262__auto____$2;
}
} else {
throw e31642;

}
}} else {
throw e__30262__auto____$1;
}
} else {
throw e31641;

}
}} else {
throw e__30262__auto__;
}
} else {
throw e31640;

}
}});
minecljs.ui.field = (function minecljs$ui$field(p__31652){
var map__31653 = p__31652;
var map__31653__$1 = cljs.core.__destructure_map.call(null,map__31653);
var width = cljs.core.get.call(null,map__31653__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__31653__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var get_type = cljs.core.get.call(null,map__31653__$1,new cljs.core.Keyword(null,"get-type","get-type",-1657795007));
var on_open = cljs.core.get.call(null,map__31653__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var on_open_around = cljs.core.get.call(null,map__31653__$1,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481));
var on_flag = cljs.core.get.call(null,map__31653__$1,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309));
var on_mark = cljs.core.get.call(null,map__31653__$1,new cljs.core.Keyword(null,"on-mark","on-mark",588773538));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null),(function (){var iter__5520__auto__ = (function minecljs$ui$field_$_iter__31654(s__31655){
return (new cljs.core.LazySeq(null,(function (){
var s__31655__$1 = s__31655;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__31655__$1);
if(temp__5804__auto__){
var s__31655__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31655__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__31655__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__31657 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__31656 = (0);
while(true){
if((i__31656 < size__5519__auto__)){
var y = cljs.core._nth.call(null,c__5518__auto__,i__31656);
cljs.core.chunk_append.call(null,b__31657,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),(function (){var iter__5520__auto__ = ((function (i__31656,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function minecljs$ui$field_$_iter__31654_$_iter__31658(s__31659){
return (new cljs.core.LazySeq(null,((function (i__31656,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
var s__31659__$1 = s__31659;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__31659__$1);
if(temp__5804__auto____$1){
var s__31659__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31659__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first.call(null,s__31659__$2);
var size__5519__auto____$1 = cljs.core.count.call(null,c__5518__auto____$1);
var b__31661 = cljs.core.chunk_buffer.call(null,size__5519__auto____$1);
if((function (){var i__31660 = (0);
while(true){
if((i__31660 < size__5519__auto____$1)){
var x = cljs.core._nth.call(null,c__5518__auto____$1,i__31660);
cljs.core.chunk_append.call(null,b__31661,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),get_type.call(null,x,y),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (i__31660,i__31656,x,c__5518__auto____$1,size__5519__auto____$1,b__31661,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open)){
return on_open.call(null,x,y);
} else {
return null;
}
});})(i__31660,i__31656,x,c__5518__auto____$1,size__5519__auto____$1,b__31661,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),((function (i__31660,i__31656,x,c__5518__auto____$1,size__5519__auto____$1,b__31661,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_flag)){
return on_flag.call(null,x,y);
} else {
return null;
}
});})(i__31660,i__31656,x,c__5518__auto____$1,size__5519__auto____$1,b__31661,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-mark","on-mark",588773538),((function (i__31660,i__31656,x,c__5518__auto____$1,size__5519__auto____$1,b__31661,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_mark)){
return on_mark.call(null,x,y);
} else {
return null;
}
});})(i__31660,i__31656,x,c__5518__auto____$1,size__5519__auto____$1,b__31661,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481),((function (i__31660,i__31656,x,c__5518__auto____$1,size__5519__auto____$1,b__31661,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open_around)){
return on_open_around.call(null,x,y);
} else {
return null;
}
});})(i__31660,i__31656,x,c__5518__auto____$1,size__5519__auto____$1,b__31661,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__31666 = (i__31660 + (1));
i__31660 = G__31666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31661),minecljs$ui$field_$_iter__31654_$_iter__31658.call(null,cljs.core.chunk_rest.call(null,s__31659__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31661),null);
}
} else {
var x = cljs.core.first.call(null,s__31659__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),get_type.call(null,x,y),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (i__31656,x,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open)){
return on_open.call(null,x,y);
} else {
return null;
}
});})(i__31656,x,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),((function (i__31656,x,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_flag)){
return on_flag.call(null,x,y);
} else {
return null;
}
});})(i__31656,x,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-mark","on-mark",588773538),((function (i__31656,x,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_mark)){
return on_mark.call(null,x,y);
} else {
return null;
}
});})(i__31656,x,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481),((function (i__31656,x,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open_around)){
return on_open_around.call(null,x,y);
} else {
return null;
}
});})(i__31656,x,s__31659__$2,temp__5804__auto____$1,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),minecljs$ui$field_$_iter__31654_$_iter__31658.call(null,cljs.core.rest.call(null,s__31659__$2)));
}
} else {
return null;
}
break;
}
});})(i__31656,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,null,null));
});})(i__31656,y,c__5518__auto__,size__5519__auto__,b__31657,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
;
return iter__5520__auto__.call(null,cljs.core.range.call(null,width));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__31667 = (i__31656 + (1));
i__31656 = G__31667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31657),minecljs$ui$field_$_iter__31654.call(null,cljs.core.chunk_rest.call(null,s__31655__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31657),null);
}
} else {
var y = cljs.core.first.call(null,s__31655__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),(function (){var iter__5520__auto__ = ((function (y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function minecljs$ui$field_$_iter__31654_$_iter__31662(s__31663){
return (new cljs.core.LazySeq(null,(function (){
var s__31663__$1 = s__31663;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__31663__$1);
if(temp__5804__auto____$1){
var s__31663__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31663__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__31663__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__31665 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__31664 = (0);
while(true){
if((i__31664 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__31664);
cljs.core.chunk_append.call(null,b__31665,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),get_type.call(null,x,y),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (i__31664,x,c__5518__auto__,size__5519__auto__,b__31665,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open)){
return on_open.call(null,x,y);
} else {
return null;
}
});})(i__31664,x,c__5518__auto__,size__5519__auto__,b__31665,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),((function (i__31664,x,c__5518__auto__,size__5519__auto__,b__31665,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_flag)){
return on_flag.call(null,x,y);
} else {
return null;
}
});})(i__31664,x,c__5518__auto__,size__5519__auto__,b__31665,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-mark","on-mark",588773538),((function (i__31664,x,c__5518__auto__,size__5519__auto__,b__31665,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_mark)){
return on_mark.call(null,x,y);
} else {
return null;
}
});})(i__31664,x,c__5518__auto__,size__5519__auto__,b__31665,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481),((function (i__31664,x,c__5518__auto__,size__5519__auto__,b__31665,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open_around)){
return on_open_around.call(null,x,y);
} else {
return null;
}
});})(i__31664,x,c__5518__auto__,size__5519__auto__,b__31665,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)));

var G__31668 = (i__31664 + (1));
i__31664 = G__31668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31665),minecljs$ui$field_$_iter__31654_$_iter__31662.call(null,cljs.core.chunk_rest.call(null,s__31663__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31665),null);
}
} else {
var x = cljs.core.first.call(null,s__31663__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),get_type.call(null,x,y),new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (x,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open)){
return on_open.call(null,x,y);
} else {
return null;
}
});})(x,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-flag","on-flag",2096721309),((function (x,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_flag)){
return on_flag.call(null,x,y);
} else {
return null;
}
});})(x,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-mark","on-mark",588773538),((function (x,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_mark)){
return on_mark.call(null,x,y);
} else {
return null;
}
});})(x,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
,new cljs.core.Keyword(null,"on-open-around","on-open-around",-1577128481),((function (x,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark){
return (function (){
if(cljs.core.truth_(on_open_around)){
return on_open_around.call(null,x,y);
} else {
return null;
}
});})(x,s__31663__$2,temp__5804__auto____$1,y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null)),minecljs$ui$field_$_iter__31654_$_iter__31662.call(null,cljs.core.rest.call(null,s__31663__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(y,s__31655__$2,temp__5804__auto__,map__31653,map__31653__$1,width,height,get_type,on_open,on_open_around,on_flag,on_mark))
;
return iter__5520__auto__.call(null,cljs.core.range.call(null,width));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),minecljs$ui$field_$_iter__31654.call(null,cljs.core.rest.call(null,s__31655__$2)));
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
minecljs.ui.switcher = (function minecljs$ui$switcher(p__31669){
var map__31670 = p__31669;
var map__31670__$1 = cljs.core.__destructure_map.call(null,map__31670);
var options = cljs.core.get.call(null,map__31670__$1,new cljs.core.Keyword(null,"options","options",99638489));
var value = cljs.core.get.call(null,map__31670__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.call(null,map__31670__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(8),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)], null),(function (){var iter__5520__auto__ = (function minecljs$ui$switcher_$_iter__31671(s__31672){
return (new cljs.core.LazySeq(null,(function (){
var s__31672__$1 = s__31672;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__31672__$1);
if(temp__5804__auto__){
var s__31672__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31672__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__31672__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__31674 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__31673 = (0);
while(true){
if((i__31673 < size__5519__auto__)){
var vec__31675 = cljs.core._nth.call(null,c__5518__auto__,i__31673);
var key = cljs.core.nth.call(null,vec__31675,(0),null);
var label = cljs.core.nth.call(null,vec__31675,(1),null);
var active_QMARK_ = cljs.core._EQ_.call(null,key,value);
cljs.core.chunk_append.call(null,b__31674,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),(16),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"background","background",-863952629),((active_QMARK_)?"#eee":"#fff"),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"cursor","cursor",1011937484),((active_QMARK_)?null:new cljs.core.Keyword(null,"pointer","pointer",85071187))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((active_QMARK_)?null:((function (i__31673,active_QMARK_,vec__31675,key,label,c__5518__auto__,size__5519__auto__,b__31674,s__31672__$2,temp__5804__auto__,map__31670,map__31670__$1,options,value,on_change){
return (function (){
return on_change.call(null,key);
});})(i__31673,active_QMARK_,vec__31675,key,label,c__5518__auto__,size__5519__auto__,b__31674,s__31672__$2,temp__5804__auto__,map__31670,map__31670__$1,options,value,on_change))
)], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__31681 = (i__31673 + (1));
i__31673 = G__31681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31674),minecljs$ui$switcher_$_iter__31671.call(null,cljs.core.chunk_rest.call(null,s__31672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31674),null);
}
} else {
var vec__31678 = cljs.core.first.call(null,s__31672__$2);
var key = cljs.core.nth.call(null,vec__31678,(0),null);
var label = cljs.core.nth.call(null,vec__31678,(1),null);
var active_QMARK_ = cljs.core._EQ_.call(null,key,value);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),(16),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"background","background",-863952629),((active_QMARK_)?"#eee":"#fff"),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"cursor","cursor",1011937484),((active_QMARK_)?null:new cljs.core.Keyword(null,"pointer","pointer",85071187))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((active_QMARK_)?null:((function (active_QMARK_,vec__31678,key,label,s__31672__$2,temp__5804__auto__,map__31670,map__31670__$1,options,value,on_change){
return (function (){
return on_change.call(null,key);
});})(active_QMARK_,vec__31678,key,label,s__31672__$2,temp__5804__auto__,map__31670,map__31670__$1,options,value,on_change))
)], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),minecljs$ui$switcher_$_iter__31671.call(null,cljs.core.rest.call(null,s__31672__$2)));
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
minecljs.ui.reset_button = (function minecljs$ui$reset_button(on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"padding","padding",1660304693),(16),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(8),new cljs.core.Keyword(null,"background","background",-863952629),"#fff"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),"\u27F3"], null);
});
minecljs.ui.seconds__GT_mm_COLON_ss = (function minecljs$ui$seconds__GT_mm_COLON_ss(duration){
var s = cljs.core.mod.call(null,duration,(60));
var m = ((duration - s) / (60));
return goog.string.format("%02d:%02d",m,s);
});
minecljs.ui.game_stats = (function minecljs$ui$game_stats(p__31683){
var map__31684 = p__31683;
var map__31684__$1 = cljs.core.__destructure_map.call(null,map__31684);
var mines_rest = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"mines-rest","mines-rest",728153196));
var duration = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(16),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\uD83D\uDEA9 ",mines_rest], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),minecljs.ui.seconds__GT_mm_COLON_ss.call(null,duration)," \uD83D\uDD50"], null)], null);
});
minecljs.ui.control_panel = (function minecljs$ui$control_panel(p__31685){
var map__31686 = p__31685;
var map__31686__$1 = cljs.core.__destructure_map.call(null,map__31686);
var mode = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var mines_rest = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"mines-rest","mines-rest",728153196));
var duration = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var on_mode_change = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"on-mode-change","on-mode-change",2031399020));
var on_highlight_QMARK__change = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"on-highlight?-change","on-highlight?-change",329778279));
var on_reset = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"on-reset","on-reset",1057446829));
var modes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy","easy",315769928),"Easy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),"Medium"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hard","hard",2068420191),"Hard"], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(8)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.switcher,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"options","options",99638489),modes,new cljs.core.Keyword(null,"value","value",305978217),mode,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_mode_change], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.reset_button,on_reset], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.game_stats,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mines-rest","mines-rest",728153196),mines_rest,new cljs.core.Keyword(null,"duration","duration",1444101068),duration], null)], null)], null);
});

//# sourceMappingURL=ui.js.map?rel=1654704961088
