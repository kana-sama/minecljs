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
var G__31704 = (n__$1 - (1));
var G__31705 = cljs.core.disj.call(null,s__$1,x);
var G__31706 = cljs.core.conj.call(null,acc,x);
n__$1 = G__31704;
s__$1 = G__31705;
acc = G__31706;
continue;
}
break;
}
});

//# sourceMappingURL=random.js.map?rel=1654704961119
