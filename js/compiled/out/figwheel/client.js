// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e34306){if((e34306 instanceof Error)){
var e = e34306;
return "Error: Unable to stringify";
} else {
throw e34306;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34309 = arguments.length;
switch (G__34309) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34307_SHARP_){
if(typeof p1__34307_SHARP_ === 'string'){
return p1__34307_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34307_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___34312 = arguments.length;
var i__5767__auto___34313 = (0);
while(true){
if((i__5767__auto___34313 < len__5766__auto___34312)){
args__5772__auto__.push((arguments[i__5767__auto___34313]));

var G__34314 = (i__5767__auto___34313 + (1));
i__5767__auto___34313 = G__34314;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34311){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34311));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___34316 = arguments.length;
var i__5767__auto___34317 = (0);
while(true){
if((i__5767__auto___34317 < len__5766__auto___34316)){
args__5772__auto__.push((arguments[i__5767__auto___34317]));

var G__34318 = (i__5767__auto___34317 + (1));
i__5767__auto___34317 = G__34318;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34315){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34315));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34319){
var map__34320 = p__34319;
var map__34320__$1 = cljs.core.__destructure_map.call(null,map__34320);
var message = cljs.core.get.call(null,map__34320__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34320__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__5043__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__5041__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__5041__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__5041__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24947__auto___34398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_34370){
var state_val_34371 = (state_34370[(1)]);
if((state_val_34371 === (7))){
var inst_34366 = (state_34370[(2)]);
var state_34370__$1 = state_34370;
var statearr_34372_34399 = state_34370__$1;
(statearr_34372_34399[(2)] = inst_34366);

(statearr_34372_34399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (1))){
var state_34370__$1 = state_34370;
var statearr_34373_34400 = state_34370__$1;
(statearr_34373_34400[(2)] = null);

(statearr_34373_34400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (4))){
var inst_34323 = (state_34370[(7)]);
var inst_34323__$1 = (state_34370[(2)]);
var state_34370__$1 = (function (){var statearr_34374 = state_34370;
(statearr_34374[(7)] = inst_34323__$1);

return statearr_34374;
})();
if(cljs.core.truth_(inst_34323__$1)){
var statearr_34375_34401 = state_34370__$1;
(statearr_34375_34401[(1)] = (5));

} else {
var statearr_34376_34402 = state_34370__$1;
(statearr_34376_34402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (15))){
var inst_34330 = (state_34370[(8)]);
var inst_34345 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34330);
var inst_34346 = cljs.core.first.call(null,inst_34345);
var inst_34347 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34346);
var inst_34348 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34347)].join('');
var inst_34349 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34348);
var state_34370__$1 = state_34370;
var statearr_34377_34403 = state_34370__$1;
(statearr_34377_34403[(2)] = inst_34349);

(statearr_34377_34403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (13))){
var inst_34354 = (state_34370[(2)]);
var state_34370__$1 = state_34370;
var statearr_34378_34404 = state_34370__$1;
(statearr_34378_34404[(2)] = inst_34354);

(statearr_34378_34404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (6))){
var state_34370__$1 = state_34370;
var statearr_34379_34405 = state_34370__$1;
(statearr_34379_34405[(2)] = null);

(statearr_34379_34405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (17))){
var inst_34352 = (state_34370[(2)]);
var state_34370__$1 = state_34370;
var statearr_34380_34406 = state_34370__$1;
(statearr_34380_34406[(2)] = inst_34352);

(statearr_34380_34406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (3))){
var inst_34368 = (state_34370[(2)]);
var state_34370__$1 = state_34370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34370__$1,inst_34368);
} else {
if((state_val_34371 === (12))){
var inst_34329 = (state_34370[(9)]);
var inst_34343 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34329,opts);
var state_34370__$1 = state_34370;
if(inst_34343){
var statearr_34381_34407 = state_34370__$1;
(statearr_34381_34407[(1)] = (15));

} else {
var statearr_34382_34408 = state_34370__$1;
(statearr_34382_34408[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (2))){
var state_34370__$1 = state_34370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34370__$1,(4),ch);
} else {
if((state_val_34371 === (11))){
var inst_34330 = (state_34370[(8)]);
var inst_34335 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34336 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34330);
var inst_34337 = cljs.core.async.timeout.call(null,(1000));
var inst_34338 = [inst_34336,inst_34337];
var inst_34339 = (new cljs.core.PersistentVector(null,2,(5),inst_34335,inst_34338,null));
var state_34370__$1 = state_34370;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34370__$1,(14),inst_34339);
} else {
if((state_val_34371 === (9))){
var inst_34330 = (state_34370[(8)]);
var inst_34356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34357 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34330);
var inst_34358 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34357);
var inst_34359 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34358)].join('');
var inst_34360 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34359);
var state_34370__$1 = (function (){var statearr_34383 = state_34370;
(statearr_34383[(10)] = inst_34356);

return statearr_34383;
})();
var statearr_34384_34409 = state_34370__$1;
(statearr_34384_34409[(2)] = inst_34360);

(statearr_34384_34409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (5))){
var inst_34323 = (state_34370[(7)]);
var inst_34325 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34326 = (new cljs.core.PersistentArrayMap(null,2,inst_34325,null));
var inst_34327 = (new cljs.core.PersistentHashSet(null,inst_34326,null));
var inst_34328 = figwheel.client.focus_msgs.call(null,inst_34327,inst_34323);
var inst_34329 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34328);
var inst_34330 = cljs.core.first.call(null,inst_34328);
var inst_34331 = figwheel.client.autoload_QMARK_.call(null);
var state_34370__$1 = (function (){var statearr_34385 = state_34370;
(statearr_34385[(8)] = inst_34330);

(statearr_34385[(9)] = inst_34329);

return statearr_34385;
})();
if(cljs.core.truth_(inst_34331)){
var statearr_34386_34410 = state_34370__$1;
(statearr_34386_34410[(1)] = (8));

} else {
var statearr_34387_34411 = state_34370__$1;
(statearr_34387_34411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (14))){
var inst_34341 = (state_34370[(2)]);
var state_34370__$1 = state_34370;
var statearr_34388_34412 = state_34370__$1;
(statearr_34388_34412[(2)] = inst_34341);

(statearr_34388_34412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (16))){
var state_34370__$1 = state_34370;
var statearr_34389_34413 = state_34370__$1;
(statearr_34389_34413[(2)] = null);

(statearr_34389_34413[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (10))){
var inst_34362 = (state_34370[(2)]);
var state_34370__$1 = (function (){var statearr_34390 = state_34370;
(statearr_34390[(11)] = inst_34362);

return statearr_34390;
})();
var statearr_34391_34414 = state_34370__$1;
(statearr_34391_34414[(2)] = null);

(statearr_34391_34414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34371 === (8))){
var inst_34329 = (state_34370[(9)]);
var inst_34333 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34329,opts);
var state_34370__$1 = state_34370;
if(cljs.core.truth_(inst_34333)){
var statearr_34392_34415 = state_34370__$1;
(statearr_34392_34415[(1)] = (11));

} else {
var statearr_34393_34416 = state_34370__$1;
(statearr_34393_34416[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24851__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24851__auto____0 = (function (){
var statearr_34394 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34394[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24851__auto__);

(statearr_34394[(1)] = (1));

return statearr_34394;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24851__auto____1 = (function (state_34370){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_34370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e34395){if((e34395 instanceof Object)){
var ex__24854__auto__ = e34395;
var statearr_34396_34417 = state_34370;
(statearr_34396_34417[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34418 = state_34370;
state_34370 = G__34418;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24851__auto__ = function(state_34370){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24851__auto____1.call(this,state_34370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24851__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24851__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_34397 = f__24948__auto__.call(null);
(statearr_34397[(6)] = c__24947__auto___34398);

return statearr_34397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34419_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34419_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34425 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34421 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34422 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34423 = true;
var _STAR_print_fn_STAR__temp_val__34424 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34423);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34424);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34422);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34421);
}}catch (e34420){if((e34420 instanceof Error)){
var e = e34420;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34425], null));
} else {
var e = e34420;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34426){
var map__34427 = p__34426;
var map__34427__$1 = cljs.core.__destructure_map.call(null,map__34427);
var opts = map__34427__$1;
var build_id = cljs.core.get.call(null,map__34427__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__34428){
var vec__34429 = p__34428;
var seq__34430 = cljs.core.seq.call(null,vec__34429);
var first__34431 = cljs.core.first.call(null,seq__34430);
var seq__34430__$1 = cljs.core.next.call(null,seq__34430);
var map__34432 = first__34431;
var map__34432__$1 = cljs.core.__destructure_map.call(null,map__34432);
var msg = map__34432__$1;
var msg_name = cljs.core.get.call(null,map__34432__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34430__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34433){
var vec__34434 = p__34433;
var seq__34435 = cljs.core.seq.call(null,vec__34434);
var first__34436 = cljs.core.first.call(null,seq__34435);
var seq__34435__$1 = cljs.core.next.call(null,seq__34435);
var map__34437 = first__34436;
var map__34437__$1 = cljs.core.__destructure_map.call(null,map__34437);
var msg = map__34437__$1;
var msg_name = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34435__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34438){
var map__34439 = p__34438;
var map__34439__$1 = cljs.core.__destructure_map.call(null,map__34439);
var on_compile_warning = cljs.core.get.call(null,map__34439__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34439__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__34440){
var vec__34441 = p__34440;
var seq__34442 = cljs.core.seq.call(null,vec__34441);
var first__34443 = cljs.core.first.call(null,seq__34442);
var seq__34442__$1 = cljs.core.next.call(null,seq__34442);
var map__34444 = first__34443;
var map__34444__$1 = cljs.core.__destructure_map.call(null,map__34444);
var msg = map__34444__$1;
var msg_name = cljs.core.get.call(null,map__34444__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34442__$1;
var pred__34445 = cljs.core._EQ_;
var expr__34446 = msg_name;
if(cljs.core.truth_(pred__34445.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34446))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34445.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34446))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_34535){
var state_val_34536 = (state_34535[(1)]);
if((state_val_34536 === (7))){
var inst_34455 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
if(cljs.core.truth_(inst_34455)){
var statearr_34537_34584 = state_34535__$1;
(statearr_34537_34584[(1)] = (8));

} else {
var statearr_34538_34585 = state_34535__$1;
(statearr_34538_34585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (20))){
var inst_34529 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34539_34586 = state_34535__$1;
(statearr_34539_34586[(2)] = inst_34529);

(statearr_34539_34586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (27))){
var inst_34525 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34540_34587 = state_34535__$1;
(statearr_34540_34587[(2)] = inst_34525);

(statearr_34540_34587[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (1))){
var inst_34448 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34535__$1 = state_34535;
if(cljs.core.truth_(inst_34448)){
var statearr_34541_34588 = state_34535__$1;
(statearr_34541_34588[(1)] = (2));

} else {
var statearr_34542_34589 = state_34535__$1;
(statearr_34542_34589[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (24))){
var inst_34527 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34543_34590 = state_34535__$1;
(statearr_34543_34590[(2)] = inst_34527);

(statearr_34543_34590[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (4))){
var inst_34533 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34535__$1,inst_34533);
} else {
if((state_val_34536 === (15))){
var inst_34531 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34544_34591 = state_34535__$1;
(statearr_34544_34591[(2)] = inst_34531);

(statearr_34544_34591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (21))){
var inst_34484 = (state_34535[(2)]);
var inst_34485 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34486 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34485);
var state_34535__$1 = (function (){var statearr_34545 = state_34535;
(statearr_34545[(7)] = inst_34484);

return statearr_34545;
})();
var statearr_34546_34592 = state_34535__$1;
(statearr_34546_34592[(2)] = inst_34486);

(statearr_34546_34592[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (31))){
var inst_34514 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34535__$1 = state_34535;
if(inst_34514){
var statearr_34547_34593 = state_34535__$1;
(statearr_34547_34593[(1)] = (34));

} else {
var statearr_34548_34594 = state_34535__$1;
(statearr_34548_34594[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (32))){
var inst_34523 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34549_34595 = state_34535__$1;
(statearr_34549_34595[(2)] = inst_34523);

(statearr_34549_34595[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (33))){
var inst_34510 = (state_34535[(2)]);
var inst_34511 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34512 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34511);
var state_34535__$1 = (function (){var statearr_34550 = state_34535;
(statearr_34550[(8)] = inst_34510);

return statearr_34550;
})();
var statearr_34551_34596 = state_34535__$1;
(statearr_34551_34596[(2)] = inst_34512);

(statearr_34551_34596[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (13))){
var inst_34469 = figwheel.client.heads_up.clear.call(null);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34535__$1,(16),inst_34469);
} else {
if((state_val_34536 === (22))){
var inst_34490 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34491 = figwheel.client.heads_up.append_warning_message.call(null,inst_34490);
var state_34535__$1 = state_34535;
var statearr_34552_34597 = state_34535__$1;
(statearr_34552_34597[(2)] = inst_34491);

(statearr_34552_34597[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (36))){
var inst_34521 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34553_34598 = state_34535__$1;
(statearr_34553_34598[(2)] = inst_34521);

(statearr_34553_34598[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (29))){
var inst_34501 = (state_34535[(2)]);
var inst_34502 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34503 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34502);
var state_34535__$1 = (function (){var statearr_34554 = state_34535;
(statearr_34554[(9)] = inst_34501);

return statearr_34554;
})();
var statearr_34555_34599 = state_34535__$1;
(statearr_34555_34599[(2)] = inst_34503);

(statearr_34555_34599[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (6))){
var inst_34450 = (state_34535[(10)]);
var state_34535__$1 = state_34535;
var statearr_34556_34600 = state_34535__$1;
(statearr_34556_34600[(2)] = inst_34450);

(statearr_34556_34600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (28))){
var inst_34497 = (state_34535[(2)]);
var inst_34498 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34499 = figwheel.client.heads_up.display_warning.call(null,inst_34498);
var state_34535__$1 = (function (){var statearr_34557 = state_34535;
(statearr_34557[(11)] = inst_34497);

return statearr_34557;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34535__$1,(29),inst_34499);
} else {
if((state_val_34536 === (25))){
var inst_34495 = figwheel.client.heads_up.clear.call(null);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34535__$1,(28),inst_34495);
} else {
if((state_val_34536 === (34))){
var inst_34516 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34535__$1,(37),inst_34516);
} else {
if((state_val_34536 === (17))){
var inst_34475 = (state_34535[(2)]);
var inst_34476 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34477 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34476);
var state_34535__$1 = (function (){var statearr_34558 = state_34535;
(statearr_34558[(12)] = inst_34475);

return statearr_34558;
})();
var statearr_34559_34601 = state_34535__$1;
(statearr_34559_34601[(2)] = inst_34477);

(statearr_34559_34601[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (3))){
var inst_34467 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34535__$1 = state_34535;
if(inst_34467){
var statearr_34560_34602 = state_34535__$1;
(statearr_34560_34602[(1)] = (13));

} else {
var statearr_34561_34603 = state_34535__$1;
(statearr_34561_34603[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (12))){
var inst_34463 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34562_34604 = state_34535__$1;
(statearr_34562_34604[(2)] = inst_34463);

(statearr_34562_34604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (2))){
var inst_34450 = (state_34535[(10)]);
var inst_34450__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34535__$1 = (function (){var statearr_34563 = state_34535;
(statearr_34563[(10)] = inst_34450__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34450__$1)){
var statearr_34564_34605 = state_34535__$1;
(statearr_34564_34605[(1)] = (5));

} else {
var statearr_34565_34606 = state_34535__$1;
(statearr_34565_34606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (23))){
var inst_34493 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34535__$1 = state_34535;
if(inst_34493){
var statearr_34566_34607 = state_34535__$1;
(statearr_34566_34607[(1)] = (25));

} else {
var statearr_34567_34608 = state_34535__$1;
(statearr_34567_34608[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (35))){
var state_34535__$1 = state_34535;
var statearr_34568_34609 = state_34535__$1;
(statearr_34568_34609[(2)] = null);

(statearr_34568_34609[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (19))){
var inst_34488 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34535__$1 = state_34535;
if(inst_34488){
var statearr_34569_34610 = state_34535__$1;
(statearr_34569_34610[(1)] = (22));

} else {
var statearr_34570_34611 = state_34535__$1;
(statearr_34570_34611[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (11))){
var inst_34459 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34571_34612 = state_34535__$1;
(statearr_34571_34612[(2)] = inst_34459);

(statearr_34571_34612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (9))){
var inst_34461 = figwheel.client.heads_up.clear.call(null);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34535__$1,(12),inst_34461);
} else {
if((state_val_34536 === (5))){
var inst_34452 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34535__$1 = state_34535;
var statearr_34572_34613 = state_34535__$1;
(statearr_34572_34613[(2)] = inst_34452);

(statearr_34572_34613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (14))){
var inst_34479 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34535__$1 = state_34535;
if(inst_34479){
var statearr_34573_34614 = state_34535__$1;
(statearr_34573_34614[(1)] = (18));

} else {
var statearr_34574_34615 = state_34535__$1;
(statearr_34574_34615[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (26))){
var inst_34505 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34535__$1 = state_34535;
if(inst_34505){
var statearr_34575_34616 = state_34535__$1;
(statearr_34575_34616[(1)] = (30));

} else {
var statearr_34576_34617 = state_34535__$1;
(statearr_34576_34617[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (16))){
var inst_34471 = (state_34535[(2)]);
var inst_34472 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34473 = figwheel.client.heads_up.display_exception.call(null,inst_34472);
var state_34535__$1 = (function (){var statearr_34577 = state_34535;
(statearr_34577[(13)] = inst_34471);

return statearr_34577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34535__$1,(17),inst_34473);
} else {
if((state_val_34536 === (30))){
var inst_34507 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34508 = figwheel.client.heads_up.display_warning.call(null,inst_34507);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34535__$1,(33),inst_34508);
} else {
if((state_val_34536 === (10))){
var inst_34465 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34578_34618 = state_34535__$1;
(statearr_34578_34618[(2)] = inst_34465);

(statearr_34578_34618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (18))){
var inst_34481 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34482 = figwheel.client.heads_up.display_exception.call(null,inst_34481);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34535__$1,(21),inst_34482);
} else {
if((state_val_34536 === (37))){
var inst_34518 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34579_34619 = state_34535__$1;
(statearr_34579_34619[(2)] = inst_34518);

(statearr_34579_34619[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (8))){
var inst_34457 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34535__$1,(11),inst_34457);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto____0 = (function (){
var statearr_34580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34580[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto__);

(statearr_34580[(1)] = (1));

return statearr_34580;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto____1 = (function (state_34535){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_34535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e34581){if((e34581 instanceof Object)){
var ex__24854__auto__ = e34581;
var statearr_34582_34620 = state_34535;
(statearr_34582_34620[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34621 = state_34535;
state_34535 = G__34621;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto__ = function(state_34535){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto____1.call(this,state_34535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_34583 = f__24948__auto__.call(null);
(statearr_34583[(6)] = c__24947__auto__);

return statearr_34583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24947__auto___34650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_34636){
var state_val_34637 = (state_34636[(1)]);
if((state_val_34637 === (1))){
var state_34636__$1 = state_34636;
var statearr_34638_34651 = state_34636__$1;
(statearr_34638_34651[(2)] = null);

(statearr_34638_34651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34637 === (2))){
var state_34636__$1 = state_34636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34636__$1,(4),ch);
} else {
if((state_val_34637 === (3))){
var inst_34634 = (state_34636[(2)]);
var state_34636__$1 = state_34636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34636__$1,inst_34634);
} else {
if((state_val_34637 === (4))){
var inst_34624 = (state_34636[(7)]);
var inst_34624__$1 = (state_34636[(2)]);
var state_34636__$1 = (function (){var statearr_34639 = state_34636;
(statearr_34639[(7)] = inst_34624__$1);

return statearr_34639;
})();
if(cljs.core.truth_(inst_34624__$1)){
var statearr_34640_34652 = state_34636__$1;
(statearr_34640_34652[(1)] = (5));

} else {
var statearr_34641_34653 = state_34636__$1;
(statearr_34641_34653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34637 === (5))){
var inst_34624 = (state_34636[(7)]);
var inst_34626 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34624);
var state_34636__$1 = state_34636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34636__$1,(8),inst_34626);
} else {
if((state_val_34637 === (6))){
var state_34636__$1 = state_34636;
var statearr_34642_34654 = state_34636__$1;
(statearr_34642_34654[(2)] = null);

(statearr_34642_34654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34637 === (7))){
var inst_34632 = (state_34636[(2)]);
var state_34636__$1 = state_34636;
var statearr_34643_34655 = state_34636__$1;
(statearr_34643_34655[(2)] = inst_34632);

(statearr_34643_34655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34637 === (8))){
var inst_34628 = (state_34636[(2)]);
var state_34636__$1 = (function (){var statearr_34644 = state_34636;
(statearr_34644[(8)] = inst_34628);

return statearr_34644;
})();
var statearr_34645_34656 = state_34636__$1;
(statearr_34645_34656[(2)] = null);

(statearr_34645_34656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24851__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24851__auto____0 = (function (){
var statearr_34646 = [null,null,null,null,null,null,null,null,null];
(statearr_34646[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24851__auto__);

(statearr_34646[(1)] = (1));

return statearr_34646;
});
var figwheel$client$heads_up_plugin_$_state_machine__24851__auto____1 = (function (state_34636){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_34636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e34647){if((e34647 instanceof Object)){
var ex__24854__auto__ = e34647;
var statearr_34648_34657 = state_34636;
(statearr_34648_34657[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34658 = state_34636;
state_34636 = G__34658;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24851__auto__ = function(state_34636){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24851__auto____1.call(this,state_34636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24851__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24851__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_34649 = f__24948__auto__.call(null);
(statearr_34649[(6)] = c__24947__auto___34650);

return statearr_34649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_34664){
var state_val_34665 = (state_34664[(1)]);
if((state_val_34665 === (1))){
var inst_34659 = cljs.core.async.timeout.call(null,(3000));
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34664__$1,(2),inst_34659);
} else {
if((state_val_34665 === (2))){
var inst_34661 = (state_34664[(2)]);
var inst_34662 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34664__$1 = (function (){var statearr_34666 = state_34664;
(statearr_34666[(7)] = inst_34661);

return statearr_34666;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34664__$1,inst_34662);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24851__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24851__auto____0 = (function (){
var statearr_34667 = [null,null,null,null,null,null,null,null];
(statearr_34667[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24851__auto__);

(statearr_34667[(1)] = (1));

return statearr_34667;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24851__auto____1 = (function (state_34664){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_34664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e34668){if((e34668 instanceof Object)){
var ex__24854__auto__ = e34668;
var statearr_34669_34671 = state_34664;
(statearr_34669_34671[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34672 = state_34664;
state_34664 = G__34672;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24851__auto__ = function(state_34664){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24851__auto____1.call(this,state_34664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24851__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24851__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_34670 = f__24948__auto__.call(null);
(statearr_34670[(6)] = c__24947__auto__);

return statearr_34670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5804__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5804__auto__)){
var figwheel_version = temp__5804__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_34679){
var state_val_34680 = (state_34679[(1)]);
if((state_val_34680 === (1))){
var inst_34673 = cljs.core.async.timeout.call(null,(2000));
var state_34679__$1 = state_34679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34679__$1,(2),inst_34673);
} else {
if((state_val_34680 === (2))){
var inst_34675 = (state_34679[(2)]);
var inst_34676 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_34677 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34676);
var state_34679__$1 = (function (){var statearr_34681 = state_34679;
(statearr_34681[(7)] = inst_34675);

return statearr_34681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34679__$1,inst_34677);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto____0 = (function (){
var statearr_34682 = [null,null,null,null,null,null,null,null];
(statearr_34682[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto__);

(statearr_34682[(1)] = (1));

return statearr_34682;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto____1 = (function (state_34679){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_34679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e34683){if((e34683 instanceof Object)){
var ex__24854__auto__ = e34683;
var statearr_34684_34686 = state_34679;
(statearr_34684_34686[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34687 = state_34679;
state_34679 = G__34687;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto__ = function(state_34679){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto____1.call(this,state_34679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_34685 = f__24948__auto__.call(null);
(statearr_34685[(6)] = c__24947__auto__);

return statearr_34685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34688){
var map__34689 = p__34688;
var map__34689__$1 = cljs.core.__destructure_map.call(null,map__34689);
var file = cljs.core.get.call(null,map__34689__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34689__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34689__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34690 = "";
var G__34690__$1 = (cljs.core.truth_(file)?[G__34690,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__34690);
var G__34690__$2 = (cljs.core.truth_(line)?[G__34690__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34690__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = line;
if(cljs.core.truth_(and__5041__auto__)){
return column;
} else {
return and__5041__auto__;
}
})())){
return [G__34690__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__34690__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34691){
var map__34692 = p__34691;
var map__34692__$1 = cljs.core.__destructure_map.call(null,map__34692);
var ed = map__34692__$1;
var exception_data = cljs.core.get.call(null,map__34692__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34692__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_34694 = (function (){var G__34693 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34693)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__34693;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_34694);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34695){
var map__34696 = p__34695;
var map__34696__$1 = cljs.core.__destructure_map.call(null,map__34696);
var w = map__34696__$1;
var message = cljs.core.get.call(null,map__34696__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__5041__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__5041__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34697 = cljs.core.seq.call(null,plugins);
var chunk__34698 = null;
var count__34699 = (0);
var i__34700 = (0);
while(true){
if((i__34700 < count__34699)){
var vec__34707 = cljs.core._nth.call(null,chunk__34698,i__34700);
var k = cljs.core.nth.call(null,vec__34707,(0),null);
var plugin = cljs.core.nth.call(null,vec__34707,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34713 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34697,chunk__34698,count__34699,i__34700,pl_34713,vec__34707,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34713.call(null,msg_hist);
});})(seq__34697,chunk__34698,count__34699,i__34700,pl_34713,vec__34707,k,plugin))
);
} else {
}


var G__34714 = seq__34697;
var G__34715 = chunk__34698;
var G__34716 = count__34699;
var G__34717 = (i__34700 + (1));
seq__34697 = G__34714;
chunk__34698 = G__34715;
count__34699 = G__34716;
i__34700 = G__34717;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__34697);
if(temp__5804__auto__){
var seq__34697__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34697__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__34697__$1);
var G__34718 = cljs.core.chunk_rest.call(null,seq__34697__$1);
var G__34719 = c__5565__auto__;
var G__34720 = cljs.core.count.call(null,c__5565__auto__);
var G__34721 = (0);
seq__34697 = G__34718;
chunk__34698 = G__34719;
count__34699 = G__34720;
i__34700 = G__34721;
continue;
} else {
var vec__34710 = cljs.core.first.call(null,seq__34697__$1);
var k = cljs.core.nth.call(null,vec__34710,(0),null);
var plugin = cljs.core.nth.call(null,vec__34710,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34722 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34697,chunk__34698,count__34699,i__34700,pl_34722,vec__34710,k,plugin,seq__34697__$1,temp__5804__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34722.call(null,msg_hist);
});})(seq__34697,chunk__34698,count__34699,i__34700,pl_34722,vec__34710,k,plugin,seq__34697__$1,temp__5804__auto__))
);
} else {
}


var G__34723 = cljs.core.next.call(null,seq__34697__$1);
var G__34724 = null;
var G__34725 = (0);
var G__34726 = (0);
seq__34697 = G__34723;
chunk__34698 = G__34724;
count__34699 = G__34725;
i__34700 = G__34726;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__34728 = arguments.length;
switch (G__34728) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__34729_34734 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34730_34735 = null;
var count__34731_34736 = (0);
var i__34732_34737 = (0);
while(true){
if((i__34732_34737 < count__34731_34736)){
var msg_34738 = cljs.core._nth.call(null,chunk__34730_34735,i__34732_34737);
figwheel.client.socket.handle_incoming_message.call(null,msg_34738);


var G__34739 = seq__34729_34734;
var G__34740 = chunk__34730_34735;
var G__34741 = count__34731_34736;
var G__34742 = (i__34732_34737 + (1));
seq__34729_34734 = G__34739;
chunk__34730_34735 = G__34740;
count__34731_34736 = G__34741;
i__34732_34737 = G__34742;
continue;
} else {
var temp__5804__auto___34743 = cljs.core.seq.call(null,seq__34729_34734);
if(temp__5804__auto___34743){
var seq__34729_34744__$1 = temp__5804__auto___34743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34729_34744__$1)){
var c__5565__auto___34745 = cljs.core.chunk_first.call(null,seq__34729_34744__$1);
var G__34746 = cljs.core.chunk_rest.call(null,seq__34729_34744__$1);
var G__34747 = c__5565__auto___34745;
var G__34748 = cljs.core.count.call(null,c__5565__auto___34745);
var G__34749 = (0);
seq__34729_34734 = G__34746;
chunk__34730_34735 = G__34747;
count__34731_34736 = G__34748;
i__34732_34737 = G__34749;
continue;
} else {
var msg_34750 = cljs.core.first.call(null,seq__34729_34744__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34750);


var G__34751 = cljs.core.next.call(null,seq__34729_34744__$1);
var G__34752 = null;
var G__34753 = (0);
var G__34754 = (0);
seq__34729_34734 = G__34751;
chunk__34730_34735 = G__34752;
count__34731_34736 = G__34753;
i__34732_34737 = G__34754;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__5772__auto__ = [];
var len__5766__auto___34758 = arguments.length;
var i__5767__auto___34759 = (0);
while(true){
if((i__5767__auto___34759 < len__5766__auto___34758)){
args__5772__auto__.push((arguments[i__5767__auto___34759]));

var G__34760 = (i__5767__auto___34759 + (1));
i__5767__auto___34759 = G__34760;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34756){
var map__34757 = p__34756;
var map__34757__$1 = cljs.core.__destructure_map.call(null,map__34757);
var opts = map__34757__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34755){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34755));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34761){if((e34761 instanceof Error)){
var e = e34761;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34761;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__34762){
var map__34763 = p__34762;
var map__34763__$1 = cljs.core.__destructure_map.call(null,map__34763);
var msg_name = cljs.core.get.call(null,map__34763__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1654704964146
