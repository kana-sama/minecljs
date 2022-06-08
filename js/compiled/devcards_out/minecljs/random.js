// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('minecljs.random');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('minecljs.defcard');
minecljs.random.make_random = (function minecljs$random$make_random(seed){
var a = cljs.core.atom.call(null,seed);
return (function (){
var t = cljs.core.swap_BANG_.call(null,a,cljs.core._PLUS_,(1831565813));
var t__$1 = Math.imul((t ^ (t >>> (15))),(t | (1)));
var t__$2 = (t__$1 ^ (t__$1 + Math.imul((t__$1 ^ (t__$1 >>> (7))),(t__$1 | (61)))));
return (((t__$2 ^ (t__$2 >>> (14))) >>> (0)) / (4294967296));
});
});
minecljs.random._STAR_rand_STAR_ = minecljs.random.make_random.call(null,Date.now());
minecljs.random.random_int = (function minecljs$random$random_int(n){
return ((n * minecljs.random._STAR_rand_STAR_.call(null)) | (0));
});
minecljs.random.random_elem = (function minecljs$random$random_elem(xs){
var xs__$1 = cljs.core.vec.call(null,xs);
var i = minecljs.random.random_int.call(null,cljs.core.count.call(null,xs__$1));
return cljs.core.nth.call(null,xs__$1,i);
});
minecljs.random.random_subset = (function minecljs$random$random_subset(s,n){
var n__$1 = n;
var s__$1 = s;
var acc = cljs.core.PersistentHashSet.EMPTY;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_.call(null,s__$1)))){
return acc;
} else {
var x = minecljs.random.random_elem.call(null,s__$1);
var G__31743 = (n__$1 - (1));
var G__31744 = cljs.core.disj.call(null,s__$1,x);
var G__31745 = cljs.core.conj.call(null,acc,x);
n__$1 = G__31743;
s__$1 = G__31744;
acc = G__31745;
continue;
}
break;
}
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.random","minecljs.random",820409492),new cljs.core.Keyword(null,"random","random",-557811113)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"random",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.random !== 'undefined') && (typeof minecljs.random.t_minecljs$random31746 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.random.t_minecljs$random31746 = (function (meta31747){
this.meta31747 = meta31747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.random.t_minecljs$random31746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31748,meta31747__$1){
var self__ = this;
var _31748__$1 = this;
return (new minecljs.random.t_minecljs$random31746(meta31747__$1));
}));

(minecljs.random.t_minecljs$random31746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31748){
var self__ = this;
var _31748__$1 = this;
return self__.meta31747;
}));

(minecljs.random.t_minecljs$random31746.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.random.t_minecljs$random31746.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__29364__auto__,devcard_opts__29365__auto__){
var self__ = this;
var this__29364__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__29365__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__29383__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,(function (){var _STAR_rand_STAR__orig_val__31749 = minecljs.random._STAR_rand_STAR_;
var _STAR_rand_STAR__temp_val__31750 = minecljs.random.make_random.call(null,(42));
(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__temp_val__31750);

try{return minecljs.random.random_int.call(null,(100));
}finally {(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__orig_val__31749);
}})(),(function (){var _STAR_rand_STAR__orig_val__31751 = minecljs.random._STAR_rand_STAR_;
var _STAR_rand_STAR__temp_val__31752 = minecljs.random.make_random.call(null,(42));
(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__temp_val__31752);

try{return minecljs.random.random_int.call(null,(100));
}finally {(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__orig_val__31751);
}})()))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(with-random-seed 42 (random-int 100))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,(function (){var _STAR_rand_STAR__orig_val__31753 = minecljs.random._STAR_rand_STAR_;
var _STAR_rand_STAR__temp_val__31754 = minecljs.random.make_random.call(null,(42));
(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__temp_val__31754);

try{return minecljs.random.random_int.call(null,(100));
}finally {(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__orig_val__31753);
}})())], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(with-random-seed 42 (random-int 100))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,(function (){var _STAR_rand_STAR__orig_val__31755 = minecljs.random._STAR_rand_STAR_;
var _STAR_rand_STAR__temp_val__31756 = minecljs.random.make_random.call(null,(42));
(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__temp_val__31756);

try{return minecljs.random.random_int.call(null,(100));
}finally {(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__orig_val__31755);
}})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,(function (){var _STAR_rand_STAR__orig_val__31757 = minecljs.random._STAR_rand_STAR_;
var _STAR_rand_STAR__temp_val__31758 = minecljs.random.make_random.call(null,(42));
(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__temp_val__31758);

try{return minecljs.random.random_int.call(null,(100));
}finally {(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__orig_val__31757);
}})())], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,(function (){var _STAR_rand_STAR__orig_val__31759 = minecljs.random._STAR_rand_STAR_;
var _STAR_rand_STAR__temp_val__31760 = minecljs.random.make_random.call(null,(42));
(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__temp_val__31760);

try{return minecljs.random.random_elem.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),null,(4),null,(3),null,(2),null], null), null));
}finally {(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__orig_val__31759);
}})(),(3)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(with-random-seed 42 (random-elem #{1 4 3 2}))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,(3))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(with-random-seed 42 (random-elem #{1 4 3 2}))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,(3))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,(function (){var _STAR_rand_STAR__orig_val__31761 = minecljs.random._STAR_rand_STAR_;
var _STAR_rand_STAR__temp_val__31762 = minecljs.random.make_random.call(null,(42));
(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__temp_val__31762);

try{return minecljs.random.random_elem.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),null,(4),null,(3),null,(2),null], null), null));
}finally {(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__orig_val__31761);
}})())], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,(function (){var _STAR_rand_STAR__orig_val__31763 = minecljs.random._STAR_rand_STAR_;
var _STAR_rand_STAR__temp_val__31764 = minecljs.random.make_random.call(null,(42));
(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__temp_val__31764);

try{return minecljs.random.random_subset.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),null,(4),null,(3),null,(2),null], null), null),(3));
}finally {(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__orig_val__31763);
}})(),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(3),null,(2),null], null), null)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(with-random-seed 42 (random-subset #{1 4 3 2} 3))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(3),null,(2),null], null), null))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(with-random-seed 42 (random-subset #{1 4 3 2} 3))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(3),null,(2),null], null), null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,(function (){var _STAR_rand_STAR__orig_val__31765 = minecljs.random._STAR_rand_STAR_;
var _STAR_rand_STAR__temp_val__31766 = minecljs.random.make_random.call(null,(42));
(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__temp_val__31766);

try{return minecljs.random.random_subset.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),null,(4),null,(3),null,(2),null], null), null),(3));
}finally {(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__orig_val__31765);
}})())], null)], null))], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__29383__auto__)){
return (function (data_atom__29384__auto__,owner__29385__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__29383__auto__,data_atom__29384__auto__,owner__29385__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__29383__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__29365__auto__))));
}));

(minecljs.random.t_minecljs$random31746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31747","meta31747",1161265653,null)], null);
}));

(minecljs.random.t_minecljs$random31746.cljs$lang$type = true);

(minecljs.random.t_minecljs$random31746.cljs$lang$ctorStr = "minecljs.random/t_minecljs$random31746");

(minecljs.random.t_minecljs$random31746.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.random/t_minecljs$random31746");
}));

/**
 * Positional factory function for minecljs.random/t_minecljs$random31746.
 */
minecljs.random.__GT_t_minecljs$random31746 = (function minecljs$random$__GT_t_minecljs$random31746(meta31747){
return (new minecljs.random.t_minecljs$random31746(meta31747));
});

}

return (new minecljs.random.t_minecljs$random31746(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=random.js.map?rel=1654516654385
