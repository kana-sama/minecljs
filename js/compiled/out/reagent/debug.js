// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__22074__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22075__i = 0, G__22075__a = new Array(arguments.length -  0);
while (G__22075__i < G__22075__a.length) {G__22075__a[G__22075__i] = arguments[G__22075__i + 0]; ++G__22075__i;}
  args = new cljs.core.IndexedSeq(G__22075__a,0,null);
} 
return G__22074__delegate.call(this,args);};
G__22074.cljs$lang$maxFixedArity = 0;
G__22074.cljs$lang$applyTo = (function (arglist__22076){
var args = cljs.core.seq(arglist__22076);
return G__22074__delegate(args);
});
G__22074.cljs$core$IFn$_invoke$arity$variadic = G__22074__delegate;
return G__22074;
})()
);

(o.error = (function() { 
var G__22077__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22078__i = 0, G__22078__a = new Array(arguments.length -  0);
while (G__22078__i < G__22078__a.length) {G__22078__a[G__22078__i] = arguments[G__22078__i + 0]; ++G__22078__i;}
  args = new cljs.core.IndexedSeq(G__22078__a,0,null);
} 
return G__22077__delegate.call(this,args);};
G__22077.cljs$lang$maxFixedArity = 0;
G__22077.cljs$lang$applyTo = (function (arglist__22079){
var args = cljs.core.seq(arglist__22079);
return G__22077__delegate(args);
});
G__22077.cljs$core$IFn$_invoke$arity$variadic = G__22077__delegate;
return G__22077;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1654704955446
