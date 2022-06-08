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
}catch (e34387){if((e34387 instanceof Error)){
var e = e34387;
return "Error: Unable to stringify";
} else {
throw e34387;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34390 = arguments.length;
switch (G__34390) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34388_SHARP_){
if(typeof p1__34388_SHARP_ === 'string'){
return p1__34388_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34388_SHARP_);
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
var len__5766__auto___34393 = arguments.length;
var i__5767__auto___34394 = (0);
while(true){
if((i__5767__auto___34394 < len__5766__auto___34393)){
args__5772__auto__.push((arguments[i__5767__auto___34394]));

var G__34395 = (i__5767__auto___34394 + (1));
i__5767__auto___34394 = G__34395;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34392){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34392));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__5772__auto__ = [];
var len__5766__auto___34397 = arguments.length;
var i__5767__auto___34398 = (0);
while(true){
if((i__5767__auto___34398 < len__5766__auto___34397)){
args__5772__auto__.push((arguments[i__5767__auto___34398]));

var G__34399 = (i__5767__auto___34398 + (1));
i__5767__auto___34398 = G__34399;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34396){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34396));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34400){
var map__34401 = p__34400;
var map__34401__$1 = cljs.core.__destructure_map.call(null,map__34401);
var message = cljs.core.get.call(null,map__34401__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34401__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__24947__auto___34479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_34451){
var state_val_34452 = (state_34451[(1)]);
if((state_val_34452 === (7))){
var inst_34447 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
var statearr_34453_34480 = state_34451__$1;
(statearr_34453_34480[(2)] = inst_34447);

(statearr_34453_34480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (1))){
var state_34451__$1 = state_34451;
var statearr_34454_34481 = state_34451__$1;
(statearr_34454_34481[(2)] = null);

(statearr_34454_34481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (4))){
var inst_34404 = (state_34451[(7)]);
var inst_34404__$1 = (state_34451[(2)]);
var state_34451__$1 = (function (){var statearr_34455 = state_34451;
(statearr_34455[(7)] = inst_34404__$1);

return statearr_34455;
})();
if(cljs.core.truth_(inst_34404__$1)){
var statearr_34456_34482 = state_34451__$1;
(statearr_34456_34482[(1)] = (5));

} else {
var statearr_34457_34483 = state_34451__$1;
(statearr_34457_34483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (15))){
var inst_34411 = (state_34451[(8)]);
var inst_34426 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34411);
var inst_34427 = cljs.core.first.call(null,inst_34426);
var inst_34428 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34427);
var inst_34429 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34428)].join('');
var inst_34430 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34429);
var state_34451__$1 = state_34451;
var statearr_34458_34484 = state_34451__$1;
(statearr_34458_34484[(2)] = inst_34430);

(statearr_34458_34484[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (13))){
var inst_34435 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
var statearr_34459_34485 = state_34451__$1;
(statearr_34459_34485[(2)] = inst_34435);

(statearr_34459_34485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (6))){
var state_34451__$1 = state_34451;
var statearr_34460_34486 = state_34451__$1;
(statearr_34460_34486[(2)] = null);

(statearr_34460_34486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (17))){
var inst_34433 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
var statearr_34461_34487 = state_34451__$1;
(statearr_34461_34487[(2)] = inst_34433);

(statearr_34461_34487[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (3))){
var inst_34449 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34451__$1,inst_34449);
} else {
if((state_val_34452 === (12))){
var inst_34410 = (state_34451[(9)]);
var inst_34424 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34410,opts);
var state_34451__$1 = state_34451;
if(inst_34424){
var statearr_34462_34488 = state_34451__$1;
(statearr_34462_34488[(1)] = (15));

} else {
var statearr_34463_34489 = state_34451__$1;
(statearr_34463_34489[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (2))){
var state_34451__$1 = state_34451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34451__$1,(4),ch);
} else {
if((state_val_34452 === (11))){
var inst_34411 = (state_34451[(8)]);
var inst_34416 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34417 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34411);
var inst_34418 = cljs.core.async.timeout.call(null,(1000));
var inst_34419 = [inst_34417,inst_34418];
var inst_34420 = (new cljs.core.PersistentVector(null,2,(5),inst_34416,inst_34419,null));
var state_34451__$1 = state_34451;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34451__$1,(14),inst_34420);
} else {
if((state_val_34452 === (9))){
var inst_34411 = (state_34451[(8)]);
var inst_34437 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34438 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34411);
var inst_34439 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34438);
var inst_34440 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34439)].join('');
var inst_34441 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34440);
var state_34451__$1 = (function (){var statearr_34464 = state_34451;
(statearr_34464[(10)] = inst_34437);

return statearr_34464;
})();
var statearr_34465_34490 = state_34451__$1;
(statearr_34465_34490[(2)] = inst_34441);

(statearr_34465_34490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (5))){
var inst_34404 = (state_34451[(7)]);
var inst_34406 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34407 = (new cljs.core.PersistentArrayMap(null,2,inst_34406,null));
var inst_34408 = (new cljs.core.PersistentHashSet(null,inst_34407,null));
var inst_34409 = figwheel.client.focus_msgs.call(null,inst_34408,inst_34404);
var inst_34410 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34409);
var inst_34411 = cljs.core.first.call(null,inst_34409);
var inst_34412 = figwheel.client.autoload_QMARK_.call(null);
var state_34451__$1 = (function (){var statearr_34466 = state_34451;
(statearr_34466[(9)] = inst_34410);

(statearr_34466[(8)] = inst_34411);

return statearr_34466;
})();
if(cljs.core.truth_(inst_34412)){
var statearr_34467_34491 = state_34451__$1;
(statearr_34467_34491[(1)] = (8));

} else {
var statearr_34468_34492 = state_34451__$1;
(statearr_34468_34492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (14))){
var inst_34422 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
var statearr_34469_34493 = state_34451__$1;
(statearr_34469_34493[(2)] = inst_34422);

(statearr_34469_34493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (16))){
var state_34451__$1 = state_34451;
var statearr_34470_34494 = state_34451__$1;
(statearr_34470_34494[(2)] = null);

(statearr_34470_34494[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (10))){
var inst_34443 = (state_34451[(2)]);
var state_34451__$1 = (function (){var statearr_34471 = state_34451;
(statearr_34471[(11)] = inst_34443);

return statearr_34471;
})();
var statearr_34472_34495 = state_34451__$1;
(statearr_34472_34495[(2)] = null);

(statearr_34472_34495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (8))){
var inst_34410 = (state_34451[(9)]);
var inst_34414 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34410,opts);
var state_34451__$1 = state_34451;
if(cljs.core.truth_(inst_34414)){
var statearr_34473_34496 = state_34451__$1;
(statearr_34473_34496[(1)] = (11));

} else {
var statearr_34474_34497 = state_34451__$1;
(statearr_34474_34497[(1)] = (12));

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
var statearr_34475 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34475[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24851__auto__);

(statearr_34475[(1)] = (1));

return statearr_34475;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24851__auto____1 = (function (state_34451){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_34451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e34476){if((e34476 instanceof Object)){
var ex__24854__auto__ = e34476;
var statearr_34477_34498 = state_34451;
(statearr_34477_34498[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34499 = state_34451;
state_34451 = G__34499;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24851__auto__ = function(state_34451){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24851__auto____1.call(this,state_34451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24851__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24851__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_34478 = f__24948__auto__.call(null);
(statearr_34478[(6)] = c__24947__auto___34479);

return statearr_34478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34500_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34500_SHARP_));
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
var base_path_34506 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34502 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34503 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34504 = true;
var _STAR_print_fn_STAR__temp_val__34505 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34504);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34505);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34503);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34502);
}}catch (e34501){if((e34501 instanceof Error)){
var e = e34501;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34506], null));
} else {
var e = e34501;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34507){
var map__34508 = p__34507;
var map__34508__$1 = cljs.core.__destructure_map.call(null,map__34508);
var opts = map__34508__$1;
var build_id = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__34509){
var vec__34510 = p__34509;
var seq__34511 = cljs.core.seq.call(null,vec__34510);
var first__34512 = cljs.core.first.call(null,seq__34511);
var seq__34511__$1 = cljs.core.next.call(null,seq__34511);
var map__34513 = first__34512;
var map__34513__$1 = cljs.core.__destructure_map.call(null,map__34513);
var msg = map__34513__$1;
var msg_name = cljs.core.get.call(null,map__34513__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34511__$1;
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
return (function (p__34514){
var vec__34515 = p__34514;
var seq__34516 = cljs.core.seq.call(null,vec__34515);
var first__34517 = cljs.core.first.call(null,seq__34516);
var seq__34516__$1 = cljs.core.next.call(null,seq__34516);
var map__34518 = first__34517;
var map__34518__$1 = cljs.core.__destructure_map.call(null,map__34518);
var msg = map__34518__$1;
var msg_name = cljs.core.get.call(null,map__34518__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34516__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34519){
var map__34520 = p__34519;
var map__34520__$1 = cljs.core.__destructure_map.call(null,map__34520);
var on_compile_warning = cljs.core.get.call(null,map__34520__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34520__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__34521){
var vec__34522 = p__34521;
var seq__34523 = cljs.core.seq.call(null,vec__34522);
var first__34524 = cljs.core.first.call(null,seq__34523);
var seq__34523__$1 = cljs.core.next.call(null,seq__34523);
var map__34525 = first__34524;
var map__34525__$1 = cljs.core.__destructure_map.call(null,map__34525);
var msg = map__34525__$1;
var msg_name = cljs.core.get.call(null,map__34525__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34523__$1;
var pred__34526 = cljs.core._EQ_;
var expr__34527 = msg_name;
if(cljs.core.truth_(pred__34526.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34527))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34526.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34527))){
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
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_34616){
var state_val_34617 = (state_34616[(1)]);
if((state_val_34617 === (7))){
var inst_34536 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
if(cljs.core.truth_(inst_34536)){
var statearr_34618_34665 = state_34616__$1;
(statearr_34618_34665[(1)] = (8));

} else {
var statearr_34619_34666 = state_34616__$1;
(statearr_34619_34666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (20))){
var inst_34610 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34620_34667 = state_34616__$1;
(statearr_34620_34667[(2)] = inst_34610);

(statearr_34620_34667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (27))){
var inst_34606 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34621_34668 = state_34616__$1;
(statearr_34621_34668[(2)] = inst_34606);

(statearr_34621_34668[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (1))){
var inst_34529 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34616__$1 = state_34616;
if(cljs.core.truth_(inst_34529)){
var statearr_34622_34669 = state_34616__$1;
(statearr_34622_34669[(1)] = (2));

} else {
var statearr_34623_34670 = state_34616__$1;
(statearr_34623_34670[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (24))){
var inst_34608 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34624_34671 = state_34616__$1;
(statearr_34624_34671[(2)] = inst_34608);

(statearr_34624_34671[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (4))){
var inst_34614 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34616__$1,inst_34614);
} else {
if((state_val_34617 === (15))){
var inst_34612 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34625_34672 = state_34616__$1;
(statearr_34625_34672[(2)] = inst_34612);

(statearr_34625_34672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (21))){
var inst_34565 = (state_34616[(2)]);
var inst_34566 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34567 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34566);
var state_34616__$1 = (function (){var statearr_34626 = state_34616;
(statearr_34626[(7)] = inst_34565);

return statearr_34626;
})();
var statearr_34627_34673 = state_34616__$1;
(statearr_34627_34673[(2)] = inst_34567);

(statearr_34627_34673[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (31))){
var inst_34595 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34616__$1 = state_34616;
if(inst_34595){
var statearr_34628_34674 = state_34616__$1;
(statearr_34628_34674[(1)] = (34));

} else {
var statearr_34629_34675 = state_34616__$1;
(statearr_34629_34675[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (32))){
var inst_34604 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34630_34676 = state_34616__$1;
(statearr_34630_34676[(2)] = inst_34604);

(statearr_34630_34676[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (33))){
var inst_34591 = (state_34616[(2)]);
var inst_34592 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34593 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34592);
var state_34616__$1 = (function (){var statearr_34631 = state_34616;
(statearr_34631[(8)] = inst_34591);

return statearr_34631;
})();
var statearr_34632_34677 = state_34616__$1;
(statearr_34632_34677[(2)] = inst_34593);

(statearr_34632_34677[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (13))){
var inst_34550 = figwheel.client.heads_up.clear.call(null);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34616__$1,(16),inst_34550);
} else {
if((state_val_34617 === (22))){
var inst_34571 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34572 = figwheel.client.heads_up.append_warning_message.call(null,inst_34571);
var state_34616__$1 = state_34616;
var statearr_34633_34678 = state_34616__$1;
(statearr_34633_34678[(2)] = inst_34572);

(statearr_34633_34678[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (36))){
var inst_34602 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34634_34679 = state_34616__$1;
(statearr_34634_34679[(2)] = inst_34602);

(statearr_34634_34679[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (29))){
var inst_34582 = (state_34616[(2)]);
var inst_34583 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34584 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34583);
var state_34616__$1 = (function (){var statearr_34635 = state_34616;
(statearr_34635[(9)] = inst_34582);

return statearr_34635;
})();
var statearr_34636_34680 = state_34616__$1;
(statearr_34636_34680[(2)] = inst_34584);

(statearr_34636_34680[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (6))){
var inst_34531 = (state_34616[(10)]);
var state_34616__$1 = state_34616;
var statearr_34637_34681 = state_34616__$1;
(statearr_34637_34681[(2)] = inst_34531);

(statearr_34637_34681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (28))){
var inst_34578 = (state_34616[(2)]);
var inst_34579 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34580 = figwheel.client.heads_up.display_warning.call(null,inst_34579);
var state_34616__$1 = (function (){var statearr_34638 = state_34616;
(statearr_34638[(11)] = inst_34578);

return statearr_34638;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34616__$1,(29),inst_34580);
} else {
if((state_val_34617 === (25))){
var inst_34576 = figwheel.client.heads_up.clear.call(null);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34616__$1,(28),inst_34576);
} else {
if((state_val_34617 === (34))){
var inst_34597 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34616__$1,(37),inst_34597);
} else {
if((state_val_34617 === (17))){
var inst_34556 = (state_34616[(2)]);
var inst_34557 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34558 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34557);
var state_34616__$1 = (function (){var statearr_34639 = state_34616;
(statearr_34639[(12)] = inst_34556);

return statearr_34639;
})();
var statearr_34640_34682 = state_34616__$1;
(statearr_34640_34682[(2)] = inst_34558);

(statearr_34640_34682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (3))){
var inst_34548 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34616__$1 = state_34616;
if(inst_34548){
var statearr_34641_34683 = state_34616__$1;
(statearr_34641_34683[(1)] = (13));

} else {
var statearr_34642_34684 = state_34616__$1;
(statearr_34642_34684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (12))){
var inst_34544 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34643_34685 = state_34616__$1;
(statearr_34643_34685[(2)] = inst_34544);

(statearr_34643_34685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (2))){
var inst_34531 = (state_34616[(10)]);
var inst_34531__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34616__$1 = (function (){var statearr_34644 = state_34616;
(statearr_34644[(10)] = inst_34531__$1);

return statearr_34644;
})();
if(cljs.core.truth_(inst_34531__$1)){
var statearr_34645_34686 = state_34616__$1;
(statearr_34645_34686[(1)] = (5));

} else {
var statearr_34646_34687 = state_34616__$1;
(statearr_34646_34687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (23))){
var inst_34574 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34616__$1 = state_34616;
if(inst_34574){
var statearr_34647_34688 = state_34616__$1;
(statearr_34647_34688[(1)] = (25));

} else {
var statearr_34648_34689 = state_34616__$1;
(statearr_34648_34689[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (35))){
var state_34616__$1 = state_34616;
var statearr_34649_34690 = state_34616__$1;
(statearr_34649_34690[(2)] = null);

(statearr_34649_34690[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (19))){
var inst_34569 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34616__$1 = state_34616;
if(inst_34569){
var statearr_34650_34691 = state_34616__$1;
(statearr_34650_34691[(1)] = (22));

} else {
var statearr_34651_34692 = state_34616__$1;
(statearr_34651_34692[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (11))){
var inst_34540 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34652_34693 = state_34616__$1;
(statearr_34652_34693[(2)] = inst_34540);

(statearr_34652_34693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (9))){
var inst_34542 = figwheel.client.heads_up.clear.call(null);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34616__$1,(12),inst_34542);
} else {
if((state_val_34617 === (5))){
var inst_34533 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34616__$1 = state_34616;
var statearr_34653_34694 = state_34616__$1;
(statearr_34653_34694[(2)] = inst_34533);

(statearr_34653_34694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (14))){
var inst_34560 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34616__$1 = state_34616;
if(inst_34560){
var statearr_34654_34695 = state_34616__$1;
(statearr_34654_34695[(1)] = (18));

} else {
var statearr_34655_34696 = state_34616__$1;
(statearr_34655_34696[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (26))){
var inst_34586 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34616__$1 = state_34616;
if(inst_34586){
var statearr_34656_34697 = state_34616__$1;
(statearr_34656_34697[(1)] = (30));

} else {
var statearr_34657_34698 = state_34616__$1;
(statearr_34657_34698[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (16))){
var inst_34552 = (state_34616[(2)]);
var inst_34553 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34554 = figwheel.client.heads_up.display_exception.call(null,inst_34553);
var state_34616__$1 = (function (){var statearr_34658 = state_34616;
(statearr_34658[(13)] = inst_34552);

return statearr_34658;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34616__$1,(17),inst_34554);
} else {
if((state_val_34617 === (30))){
var inst_34588 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34589 = figwheel.client.heads_up.display_warning.call(null,inst_34588);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34616__$1,(33),inst_34589);
} else {
if((state_val_34617 === (10))){
var inst_34546 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34659_34699 = state_34616__$1;
(statearr_34659_34699[(2)] = inst_34546);

(statearr_34659_34699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (18))){
var inst_34562 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34563 = figwheel.client.heads_up.display_exception.call(null,inst_34562);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34616__$1,(21),inst_34563);
} else {
if((state_val_34617 === (37))){
var inst_34599 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34660_34700 = state_34616__$1;
(statearr_34660_34700[(2)] = inst_34599);

(statearr_34660_34700[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (8))){
var inst_34538 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34616__$1,(11),inst_34538);
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
var statearr_34661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34661[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto__);

(statearr_34661[(1)] = (1));

return statearr_34661;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto____1 = (function (state_34616){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_34616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e34662){if((e34662 instanceof Object)){
var ex__24854__auto__ = e34662;
var statearr_34663_34701 = state_34616;
(statearr_34663_34701[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34702 = state_34616;
state_34616 = G__34702;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto__ = function(state_34616){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto____1.call(this,state_34616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_34664 = f__24948__auto__.call(null);
(statearr_34664[(6)] = c__24947__auto__);

return statearr_34664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24947__auto___34731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_34717){
var state_val_34718 = (state_34717[(1)]);
if((state_val_34718 === (1))){
var state_34717__$1 = state_34717;
var statearr_34719_34732 = state_34717__$1;
(statearr_34719_34732[(2)] = null);

(statearr_34719_34732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34718 === (2))){
var state_34717__$1 = state_34717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34717__$1,(4),ch);
} else {
if((state_val_34718 === (3))){
var inst_34715 = (state_34717[(2)]);
var state_34717__$1 = state_34717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34717__$1,inst_34715);
} else {
if((state_val_34718 === (4))){
var inst_34705 = (state_34717[(7)]);
var inst_34705__$1 = (state_34717[(2)]);
var state_34717__$1 = (function (){var statearr_34720 = state_34717;
(statearr_34720[(7)] = inst_34705__$1);

return statearr_34720;
})();
if(cljs.core.truth_(inst_34705__$1)){
var statearr_34721_34733 = state_34717__$1;
(statearr_34721_34733[(1)] = (5));

} else {
var statearr_34722_34734 = state_34717__$1;
(statearr_34722_34734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34718 === (5))){
var inst_34705 = (state_34717[(7)]);
var inst_34707 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34705);
var state_34717__$1 = state_34717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34717__$1,(8),inst_34707);
} else {
if((state_val_34718 === (6))){
var state_34717__$1 = state_34717;
var statearr_34723_34735 = state_34717__$1;
(statearr_34723_34735[(2)] = null);

(statearr_34723_34735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34718 === (7))){
var inst_34713 = (state_34717[(2)]);
var state_34717__$1 = state_34717;
var statearr_34724_34736 = state_34717__$1;
(statearr_34724_34736[(2)] = inst_34713);

(statearr_34724_34736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34718 === (8))){
var inst_34709 = (state_34717[(2)]);
var state_34717__$1 = (function (){var statearr_34725 = state_34717;
(statearr_34725[(8)] = inst_34709);

return statearr_34725;
})();
var statearr_34726_34737 = state_34717__$1;
(statearr_34726_34737[(2)] = null);

(statearr_34726_34737[(1)] = (2));


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
var statearr_34727 = [null,null,null,null,null,null,null,null,null];
(statearr_34727[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24851__auto__);

(statearr_34727[(1)] = (1));

return statearr_34727;
});
var figwheel$client$heads_up_plugin_$_state_machine__24851__auto____1 = (function (state_34717){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_34717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e34728){if((e34728 instanceof Object)){
var ex__24854__auto__ = e34728;
var statearr_34729_34738 = state_34717;
(statearr_34729_34738[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34739 = state_34717;
state_34717 = G__34739;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24851__auto__ = function(state_34717){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24851__auto____1.call(this,state_34717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24851__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24851__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_34730 = f__24948__auto__.call(null);
(statearr_34730[(6)] = c__24947__auto___34731);

return statearr_34730;
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
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_34745){
var state_val_34746 = (state_34745[(1)]);
if((state_val_34746 === (1))){
var inst_34740 = cljs.core.async.timeout.call(null,(3000));
var state_34745__$1 = state_34745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34745__$1,(2),inst_34740);
} else {
if((state_val_34746 === (2))){
var inst_34742 = (state_34745[(2)]);
var inst_34743 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34745__$1 = (function (){var statearr_34747 = state_34745;
(statearr_34747[(7)] = inst_34742);

return statearr_34747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34745__$1,inst_34743);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24851__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24851__auto____0 = (function (){
var statearr_34748 = [null,null,null,null,null,null,null,null];
(statearr_34748[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24851__auto__);

(statearr_34748[(1)] = (1));

return statearr_34748;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24851__auto____1 = (function (state_34745){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_34745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e34749){if((e34749 instanceof Object)){
var ex__24854__auto__ = e34749;
var statearr_34750_34752 = state_34745;
(statearr_34750_34752[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34753 = state_34745;
state_34745 = G__34753;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24851__auto__ = function(state_34745){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24851__auto____1.call(this,state_34745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24851__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24851__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_34751 = f__24948__auto__.call(null);
(statearr_34751[(6)] = c__24947__auto__);

return statearr_34751;
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
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_34760){
var state_val_34761 = (state_34760[(1)]);
if((state_val_34761 === (1))){
var inst_34754 = cljs.core.async.timeout.call(null,(2000));
var state_34760__$1 = state_34760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34760__$1,(2),inst_34754);
} else {
if((state_val_34761 === (2))){
var inst_34756 = (state_34760[(2)]);
var inst_34757 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_34758 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34757);
var state_34760__$1 = (function (){var statearr_34762 = state_34760;
(statearr_34762[(7)] = inst_34756);

return statearr_34762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34760__$1,inst_34758);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto____0 = (function (){
var statearr_34763 = [null,null,null,null,null,null,null,null];
(statearr_34763[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto__);

(statearr_34763[(1)] = (1));

return statearr_34763;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto____1 = (function (state_34760){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_34760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e34764){if((e34764 instanceof Object)){
var ex__24854__auto__ = e34764;
var statearr_34765_34767 = state_34760;
(statearr_34765_34767[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34768 = state_34760;
state_34760 = G__34768;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto__ = function(state_34760){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto____1.call(this,state_34760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_34766 = f__24948__auto__.call(null);
(statearr_34766[(6)] = c__24947__auto__);

return statearr_34766;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34769){
var map__34770 = p__34769;
var map__34770__$1 = cljs.core.__destructure_map.call(null,map__34770);
var file = cljs.core.get.call(null,map__34770__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34770__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34770__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34771 = "";
var G__34771__$1 = (cljs.core.truth_(file)?[G__34771,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__34771);
var G__34771__$2 = (cljs.core.truth_(line)?[G__34771__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34771__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = line;
if(cljs.core.truth_(and__5041__auto__)){
return column;
} else {
return and__5041__auto__;
}
})())){
return [G__34771__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__34771__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34772){
var map__34773 = p__34772;
var map__34773__$1 = cljs.core.__destructure_map.call(null,map__34773);
var ed = map__34773__$1;
var exception_data = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_34775 = (function (){var G__34774 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34774)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__34774;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_34775);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34776){
var map__34777 = p__34776;
var map__34777__$1 = cljs.core.__destructure_map.call(null,map__34777);
var w = map__34777__$1;
var message = cljs.core.get.call(null,map__34777__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__34778 = cljs.core.seq.call(null,plugins);
var chunk__34779 = null;
var count__34780 = (0);
var i__34781 = (0);
while(true){
if((i__34781 < count__34780)){
var vec__34788 = cljs.core._nth.call(null,chunk__34779,i__34781);
var k = cljs.core.nth.call(null,vec__34788,(0),null);
var plugin = cljs.core.nth.call(null,vec__34788,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34794 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34778,chunk__34779,count__34780,i__34781,pl_34794,vec__34788,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34794.call(null,msg_hist);
});})(seq__34778,chunk__34779,count__34780,i__34781,pl_34794,vec__34788,k,plugin))
);
} else {
}


var G__34795 = seq__34778;
var G__34796 = chunk__34779;
var G__34797 = count__34780;
var G__34798 = (i__34781 + (1));
seq__34778 = G__34795;
chunk__34779 = G__34796;
count__34780 = G__34797;
i__34781 = G__34798;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__34778);
if(temp__5804__auto__){
var seq__34778__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34778__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__34778__$1);
var G__34799 = cljs.core.chunk_rest.call(null,seq__34778__$1);
var G__34800 = c__5565__auto__;
var G__34801 = cljs.core.count.call(null,c__5565__auto__);
var G__34802 = (0);
seq__34778 = G__34799;
chunk__34779 = G__34800;
count__34780 = G__34801;
i__34781 = G__34802;
continue;
} else {
var vec__34791 = cljs.core.first.call(null,seq__34778__$1);
var k = cljs.core.nth.call(null,vec__34791,(0),null);
var plugin = cljs.core.nth.call(null,vec__34791,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34803 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34778,chunk__34779,count__34780,i__34781,pl_34803,vec__34791,k,plugin,seq__34778__$1,temp__5804__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34803.call(null,msg_hist);
});})(seq__34778,chunk__34779,count__34780,i__34781,pl_34803,vec__34791,k,plugin,seq__34778__$1,temp__5804__auto__))
);
} else {
}


var G__34804 = cljs.core.next.call(null,seq__34778__$1);
var G__34805 = null;
var G__34806 = (0);
var G__34807 = (0);
seq__34778 = G__34804;
chunk__34779 = G__34805;
count__34780 = G__34806;
i__34781 = G__34807;
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
var G__34809 = arguments.length;
switch (G__34809) {
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

var seq__34810_34815 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34811_34816 = null;
var count__34812_34817 = (0);
var i__34813_34818 = (0);
while(true){
if((i__34813_34818 < count__34812_34817)){
var msg_34819 = cljs.core._nth.call(null,chunk__34811_34816,i__34813_34818);
figwheel.client.socket.handle_incoming_message.call(null,msg_34819);


var G__34820 = seq__34810_34815;
var G__34821 = chunk__34811_34816;
var G__34822 = count__34812_34817;
var G__34823 = (i__34813_34818 + (1));
seq__34810_34815 = G__34820;
chunk__34811_34816 = G__34821;
count__34812_34817 = G__34822;
i__34813_34818 = G__34823;
continue;
} else {
var temp__5804__auto___34824 = cljs.core.seq.call(null,seq__34810_34815);
if(temp__5804__auto___34824){
var seq__34810_34825__$1 = temp__5804__auto___34824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34810_34825__$1)){
var c__5565__auto___34826 = cljs.core.chunk_first.call(null,seq__34810_34825__$1);
var G__34827 = cljs.core.chunk_rest.call(null,seq__34810_34825__$1);
var G__34828 = c__5565__auto___34826;
var G__34829 = cljs.core.count.call(null,c__5565__auto___34826);
var G__34830 = (0);
seq__34810_34815 = G__34827;
chunk__34811_34816 = G__34828;
count__34812_34817 = G__34829;
i__34813_34818 = G__34830;
continue;
} else {
var msg_34831 = cljs.core.first.call(null,seq__34810_34825__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34831);


var G__34832 = cljs.core.next.call(null,seq__34810_34825__$1);
var G__34833 = null;
var G__34834 = (0);
var G__34835 = (0);
seq__34810_34815 = G__34832;
chunk__34811_34816 = G__34833;
count__34812_34817 = G__34834;
i__34813_34818 = G__34835;
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
var len__5766__auto___34839 = arguments.length;
var i__5767__auto___34840 = (0);
while(true){
if((i__5767__auto___34840 < len__5766__auto___34839)){
args__5772__auto__.push((arguments[i__5767__auto___34840]));

var G__34841 = (i__5767__auto___34840 + (1));
i__5767__auto___34840 = G__34841;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34837){
var map__34838 = p__34837;
var map__34838__$1 = cljs.core.__destructure_map.call(null,map__34838);
var opts = map__34838__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34836){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34836));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,figwheel.client.goog$module$goog$object.get.call(null,window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34842){if((e34842 instanceof Error)){
var e = e34842;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34842;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__34843){
var map__34844 = p__34843;
var map__34844__$1 = cljs.core.__destructure_map.call(null,map__34844);
var msg_name = cljs.core.get.call(null,map__34844__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1654516657412
