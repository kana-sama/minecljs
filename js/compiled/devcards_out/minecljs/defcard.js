// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('minecljs.defcard');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('cljs.core.match');
minecljs.defcard.pretty = (function minecljs$defcard$pretty(x){
var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31167_31171 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31168_31172 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31169_31173 = true;
var _STAR_print_fn_STAR__temp_val__31170_31174 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31169_31173);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31170_31174);

try{cljs.pprint.pprint.call(null,x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31168_31172);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31167_31171);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
});
minecljs.defcard.edn = (function minecljs$defcard$edn(x){
return devcards.util.edn_renderer.html_edn.call(null,x);
});
minecljs.defcard.markdown = (function minecljs$defcard$markdown(x){
return devcards.core.markdown__GT_react.call(null,x);
});
minecljs.defcard.test_color = (function minecljs$defcard$test_color(status){
try{if(cljs.core.keyword_identical_QMARK_.call(null,status,new cljs.core.Keyword(null,"success","success",1890645906))){
return "#c7e1a0";
} else {
throw cljs.core.match.backtrack;

}
}catch (e31176){if((e31176 instanceof Error)){
var e__30261__auto__ = e31176;
if((e__30261__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,status,new cljs.core.Keyword(null,"fail","fail",1706214930))){
return "#ecc4c4";
} else {
throw cljs.core.match.backtrack;

}
}catch (e31177){if((e31177 instanceof Error)){
var e__30261__auto____$1 = e31177;
if((e__30261__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join('')));
} else {
throw e__30261__auto____$1;
}
} else {
throw e31177;

}
}} else {
throw e__30261__auto__;
}
} else {
throw e31176;

}
}});
minecljs.defcard.test = (function minecljs$defcard$test(var_args){
var args__5772__auto__ = [];
var len__5766__auto___31180 = arguments.length;
var i__5767__auto___31181 = (0);
while(true){
if((i__5767__auto___31181 < len__5766__auto___31180)){
args__5772__auto__.push((arguments[i__5767__auto___31181]));

var G__31182 = (i__5767__auto___31181 + (1));
i__5767__auto___31181 = G__31182;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return minecljs.defcard.test.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(minecljs.defcard.test.cljs$core$IFn$_invoke$arity$variadic = (function (status,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),minecljs.defcard.test_color.call(null,status),new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"0 1px 1px 1px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px"], null)], null),children], null);
}));

(minecljs.defcard.test.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(minecljs.defcard.test.cljs$lang$applyTo = (function (seq31178){
var G__31179 = cljs.core.first.call(null,seq31178);
var seq31178__$1 = cljs.core.next.call(null,seq31178);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31179,seq31178__$1);
}));

minecljs.defcard.test_block = (function minecljs$defcard$test_block(status,name,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),minecljs.defcard.test_color.call(null,status),new cljs.core.Keyword(null,"color","color",1011675173),"#333",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px"], null)], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(8)], null)], null),devcards.core.code_highlight.call(null,content,new cljs.core.Keyword(null,"clojure","clojure",438975815))], null)], null);
});
minecljs.defcard.markup_block = (function minecljs$defcard$markup_block(code,vdom){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #eee"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee"], null)], null),devcards.core.code_highlight.call(null,code,new cljs.core.Keyword(null,"clojure","clojure",438975815))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px"], null)], null),vdom], null)], null);
});

//# sourceMappingURL=defcard.js.map?rel=1654516653234
