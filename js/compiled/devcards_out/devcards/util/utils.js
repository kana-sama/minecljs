// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('react');
goog.require('goog.object');
goog.scope(function(){
devcards.util.utils.goog$module$goog$object = goog.module.get('goog.object');
});
devcards.util.utils.global$module$react = goog.global["React"];
devcards.util.utils.react_holder = devcards.util.utils.global$module$react;
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5802__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5802__auto__)){
var doc = temp__5802__auto__;
return devcards.util.utils.goog$module$goog$object.get.call(null,doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23598_23602 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23599_23603 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23600_23604 = true;
var _STAR_print_fn_STAR__temp_val__23601_23605 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23600_23604);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23601_23605);

try{cljs.pprint.pprint.call(null,obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23599_23603);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23598_23602);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
}catch (e23596){if((e23596 instanceof Error)){
var e1 = e23596;
try{return obj.toString();
}catch (e23597){if((e23597 instanceof Error)){
var e2 = e23597;
return "<<Un-printable Type>>";
} else {
throw e23597;

}
}} else {
throw e23596;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__23606 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__23607 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__23607);

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__23606);
}});

//# sourceMappingURL=utils.js.map?rel=1654516649810
