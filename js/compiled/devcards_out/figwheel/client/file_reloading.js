// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.file_reloading.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__5043__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (((typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))))))));
if(or__5043__auto__){
return or__5043__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (((cljs.core._EQ_.call(null,"cljs.core",ns)) || (((cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (((goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")))))))));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__32525 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__32525 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__32525,"requires");
}
}):(function (path){
var G__32526 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__32526 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__32526);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32527_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32527_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__32528 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__32528__$1 = (((G__32528 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__32528,"provides"));
if((G__32528__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__32528__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides")));
})),(function (dep,path,_){
var provides = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"provides");
var requires = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,dep,"requires");
var seq__32529 = cljs.core.seq.call(null,provides);
var chunk__32530 = null;
var count__32531 = (0);
var i__32532 = (0);
while(true){
if((i__32532 < count__32531)){
var prov = cljs.core._nth.call(null,chunk__32530,i__32532);
var seq__32541_32553 = cljs.core.seq.call(null,requires);
var chunk__32542_32554 = null;
var count__32543_32555 = (0);
var i__32544_32556 = (0);
while(true){
if((i__32544_32556 < count__32543_32555)){
var req_32557 = cljs.core._nth.call(null,chunk__32542_32554,i__32544_32556);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32557,prov);


var G__32558 = seq__32541_32553;
var G__32559 = chunk__32542_32554;
var G__32560 = count__32543_32555;
var G__32561 = (i__32544_32556 + (1));
seq__32541_32553 = G__32558;
chunk__32542_32554 = G__32559;
count__32543_32555 = G__32560;
i__32544_32556 = G__32561;
continue;
} else {
var temp__5804__auto___32562 = cljs.core.seq.call(null,seq__32541_32553);
if(temp__5804__auto___32562){
var seq__32541_32563__$1 = temp__5804__auto___32562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32541_32563__$1)){
var c__5565__auto___32564 = cljs.core.chunk_first.call(null,seq__32541_32563__$1);
var G__32565 = cljs.core.chunk_rest.call(null,seq__32541_32563__$1);
var G__32566 = c__5565__auto___32564;
var G__32567 = cljs.core.count.call(null,c__5565__auto___32564);
var G__32568 = (0);
seq__32541_32553 = G__32565;
chunk__32542_32554 = G__32566;
count__32543_32555 = G__32567;
i__32544_32556 = G__32568;
continue;
} else {
var req_32569 = cljs.core.first.call(null,seq__32541_32563__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32569,prov);


var G__32570 = cljs.core.next.call(null,seq__32541_32563__$1);
var G__32571 = null;
var G__32572 = (0);
var G__32573 = (0);
seq__32541_32553 = G__32570;
chunk__32542_32554 = G__32571;
count__32543_32555 = G__32572;
i__32544_32556 = G__32573;
continue;
}
} else {
}
}
break;
}


var G__32574 = seq__32529;
var G__32575 = chunk__32530;
var G__32576 = count__32531;
var G__32577 = (i__32532 + (1));
seq__32529 = G__32574;
chunk__32530 = G__32575;
count__32531 = G__32576;
i__32532 = G__32577;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__32529);
if(temp__5804__auto__){
var seq__32529__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32529__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__32529__$1);
var G__32578 = cljs.core.chunk_rest.call(null,seq__32529__$1);
var G__32579 = c__5565__auto__;
var G__32580 = cljs.core.count.call(null,c__5565__auto__);
var G__32581 = (0);
seq__32529 = G__32578;
chunk__32530 = G__32579;
count__32531 = G__32580;
i__32532 = G__32581;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32529__$1);
var seq__32545_32582 = cljs.core.seq.call(null,requires);
var chunk__32546_32583 = null;
var count__32547_32584 = (0);
var i__32548_32585 = (0);
while(true){
if((i__32548_32585 < count__32547_32584)){
var req_32586 = cljs.core._nth.call(null,chunk__32546_32583,i__32548_32585);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32586,prov);


var G__32587 = seq__32545_32582;
var G__32588 = chunk__32546_32583;
var G__32589 = count__32547_32584;
var G__32590 = (i__32548_32585 + (1));
seq__32545_32582 = G__32587;
chunk__32546_32583 = G__32588;
count__32547_32584 = G__32589;
i__32548_32585 = G__32590;
continue;
} else {
var temp__5804__auto___32591__$1 = cljs.core.seq.call(null,seq__32545_32582);
if(temp__5804__auto___32591__$1){
var seq__32545_32592__$1 = temp__5804__auto___32591__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32545_32592__$1)){
var c__5565__auto___32593 = cljs.core.chunk_first.call(null,seq__32545_32592__$1);
var G__32594 = cljs.core.chunk_rest.call(null,seq__32545_32592__$1);
var G__32595 = c__5565__auto___32593;
var G__32596 = cljs.core.count.call(null,c__5565__auto___32593);
var G__32597 = (0);
seq__32545_32582 = G__32594;
chunk__32546_32583 = G__32595;
count__32547_32584 = G__32596;
i__32548_32585 = G__32597;
continue;
} else {
var req_32598 = cljs.core.first.call(null,seq__32545_32592__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32598,prov);


var G__32599 = cljs.core.next.call(null,seq__32545_32592__$1);
var G__32600 = null;
var G__32601 = (0);
var G__32602 = (0);
seq__32545_32582 = G__32599;
chunk__32546_32583 = G__32600;
count__32547_32584 = G__32601;
i__32548_32585 = G__32602;
continue;
}
} else {
}
}
break;
}


var G__32603 = cljs.core.next.call(null,seq__32529__$1);
var G__32604 = null;
var G__32605 = (0);
var G__32606 = (0);
seq__32529 = G__32603;
chunk__32530 = G__32604;
count__32531 = G__32605;
i__32532 = G__32606;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = figwheel.client.file_reloading.goog$module$goog$object.filter.call(null,goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,requires,(function (deps,path,_){
var seq__32549 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__32550 = null;
var count__32551 = (0);
var i__32552 = (0);
while(true){
if((i__32552 < count__32551)){
var prov = cljs.core._nth.call(null,chunk__32550,i__32552);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__32549,chunk__32550,count__32551,i__32552,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__32549,chunk__32550,count__32551,i__32552,prov,requires))
);


var G__32607 = seq__32549;
var G__32608 = chunk__32550;
var G__32609 = count__32551;
var G__32610 = (i__32552 + (1));
seq__32549 = G__32607;
chunk__32550 = G__32608;
count__32551 = G__32609;
i__32552 = G__32610;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__32549);
if(temp__5804__auto__){
var seq__32549__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32549__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__32549__$1);
var G__32611 = cljs.core.chunk_rest.call(null,seq__32549__$1);
var G__32612 = c__5565__auto__;
var G__32613 = cljs.core.count.call(null,c__5565__auto__);
var G__32614 = (0);
seq__32549 = G__32611;
chunk__32550 = G__32612;
count__32551 = G__32613;
i__32552 = G__32614;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32549__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__32549,chunk__32550,count__32551,i__32552,prov,seq__32549__$1,temp__5804__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__32549,chunk__32550,count__32551,i__32552,prov,seq__32549__$1,temp__5804__auto__,requires))
);


var G__32615 = cljs.core.next.call(null,seq__32549__$1);
var G__32616 = null;
var G__32617 = (0);
var G__32618 = (0);
seq__32549 = G__32615;
chunk__32550 = G__32616;
count__32551 = G__32617;
i__32552 = G__32618;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__32619){
var vec__32620 = p__32619;
var _ = cljs.core.nth.call(null,vec__32620,(0),null);
var v = cljs.core.nth.call(null,vec__32620,(1),null);
var and__5041__auto__ = v;
if(cljs.core.truth_(and__5041__auto__)){
return v.call(null,dep);
} else {
return and__5041__auto__;
}
}),cljs.core.filter.call(null,(function (p__32623){
var vec__32624 = p__32623;
var k = cljs.core.nth.call(null,vec__32624,(0),null);
var v = cljs.core.nth.call(null,vec__32624,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__32636_32644 = cljs.core.seq.call(null,deps);
var chunk__32637_32645 = null;
var count__32638_32646 = (0);
var i__32639_32647 = (0);
while(true){
if((i__32639_32647 < count__32638_32646)){
var dep_32648 = cljs.core._nth.call(null,chunk__32637_32645,i__32639_32647);
if(cljs.core.truth_((function (){var and__5041__auto__ = dep_32648;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32648));
} else {
return and__5041__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32648,(depth + (1)),state);
} else {
}


var G__32649 = seq__32636_32644;
var G__32650 = chunk__32637_32645;
var G__32651 = count__32638_32646;
var G__32652 = (i__32639_32647 + (1));
seq__32636_32644 = G__32649;
chunk__32637_32645 = G__32650;
count__32638_32646 = G__32651;
i__32639_32647 = G__32652;
continue;
} else {
var temp__5804__auto___32653 = cljs.core.seq.call(null,seq__32636_32644);
if(temp__5804__auto___32653){
var seq__32636_32654__$1 = temp__5804__auto___32653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32636_32654__$1)){
var c__5565__auto___32655 = cljs.core.chunk_first.call(null,seq__32636_32654__$1);
var G__32656 = cljs.core.chunk_rest.call(null,seq__32636_32654__$1);
var G__32657 = c__5565__auto___32655;
var G__32658 = cljs.core.count.call(null,c__5565__auto___32655);
var G__32659 = (0);
seq__32636_32644 = G__32656;
chunk__32637_32645 = G__32657;
count__32638_32646 = G__32658;
i__32639_32647 = G__32659;
continue;
} else {
var dep_32660 = cljs.core.first.call(null,seq__32636_32654__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = dep_32660;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32660));
} else {
return and__5041__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32660,(depth + (1)),state);
} else {
}


var G__32661 = cljs.core.next.call(null,seq__32636_32654__$1);
var G__32662 = null;
var G__32663 = (0);
var G__32664 = (0);
seq__32636_32644 = G__32661;
chunk__32637_32645 = G__32662;
count__32638_32646 = G__32663;
i__32639_32647 = G__32664;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32640){
var vec__32641 = p__32640;
var seq__32642 = cljs.core.seq.call(null,vec__32641);
var first__32643 = cljs.core.first.call(null,seq__32642);
var seq__32642__$1 = cljs.core.next.call(null,seq__32642);
var x = first__32643;
var xs = seq__32642__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__32627_SHARP_){
return clojure.set.difference.call(null,p1__32627_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path);

figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path);

return figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__32665_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__32665_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32666 = cljs.core.seq.call(null,provides);
var chunk__32667 = null;
var count__32668 = (0);
var i__32669 = (0);
while(true){
if((i__32669 < count__32668)){
var prov = cljs.core._nth.call(null,chunk__32667,i__32669);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32678_32686 = cljs.core.seq.call(null,requires);
var chunk__32679_32687 = null;
var count__32680_32688 = (0);
var i__32681_32689 = (0);
while(true){
if((i__32681_32689 < count__32680_32688)){
var req_32690 = cljs.core._nth.call(null,chunk__32679_32687,i__32681_32689);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32690,prov);


var G__32691 = seq__32678_32686;
var G__32692 = chunk__32679_32687;
var G__32693 = count__32680_32688;
var G__32694 = (i__32681_32689 + (1));
seq__32678_32686 = G__32691;
chunk__32679_32687 = G__32692;
count__32680_32688 = G__32693;
i__32681_32689 = G__32694;
continue;
} else {
var temp__5804__auto___32695 = cljs.core.seq.call(null,seq__32678_32686);
if(temp__5804__auto___32695){
var seq__32678_32696__$1 = temp__5804__auto___32695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32678_32696__$1)){
var c__5565__auto___32697 = cljs.core.chunk_first.call(null,seq__32678_32696__$1);
var G__32698 = cljs.core.chunk_rest.call(null,seq__32678_32696__$1);
var G__32699 = c__5565__auto___32697;
var G__32700 = cljs.core.count.call(null,c__5565__auto___32697);
var G__32701 = (0);
seq__32678_32686 = G__32698;
chunk__32679_32687 = G__32699;
count__32680_32688 = G__32700;
i__32681_32689 = G__32701;
continue;
} else {
var req_32702 = cljs.core.first.call(null,seq__32678_32696__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32702,prov);


var G__32703 = cljs.core.next.call(null,seq__32678_32696__$1);
var G__32704 = null;
var G__32705 = (0);
var G__32706 = (0);
seq__32678_32686 = G__32703;
chunk__32679_32687 = G__32704;
count__32680_32688 = G__32705;
i__32681_32689 = G__32706;
continue;
}
} else {
}
}
break;
}


var G__32707 = seq__32666;
var G__32708 = chunk__32667;
var G__32709 = count__32668;
var G__32710 = (i__32669 + (1));
seq__32666 = G__32707;
chunk__32667 = G__32708;
count__32668 = G__32709;
i__32669 = G__32710;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__32666);
if(temp__5804__auto__){
var seq__32666__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32666__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__32666__$1);
var G__32711 = cljs.core.chunk_rest.call(null,seq__32666__$1);
var G__32712 = c__5565__auto__;
var G__32713 = cljs.core.count.call(null,c__5565__auto__);
var G__32714 = (0);
seq__32666 = G__32711;
chunk__32667 = G__32712;
count__32668 = G__32713;
i__32669 = G__32714;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32666__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32682_32715 = cljs.core.seq.call(null,requires);
var chunk__32683_32716 = null;
var count__32684_32717 = (0);
var i__32685_32718 = (0);
while(true){
if((i__32685_32718 < count__32684_32717)){
var req_32719 = cljs.core._nth.call(null,chunk__32683_32716,i__32685_32718);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32719,prov);


var G__32720 = seq__32682_32715;
var G__32721 = chunk__32683_32716;
var G__32722 = count__32684_32717;
var G__32723 = (i__32685_32718 + (1));
seq__32682_32715 = G__32720;
chunk__32683_32716 = G__32721;
count__32684_32717 = G__32722;
i__32685_32718 = G__32723;
continue;
} else {
var temp__5804__auto___32724__$1 = cljs.core.seq.call(null,seq__32682_32715);
if(temp__5804__auto___32724__$1){
var seq__32682_32725__$1 = temp__5804__auto___32724__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32682_32725__$1)){
var c__5565__auto___32726 = cljs.core.chunk_first.call(null,seq__32682_32725__$1);
var G__32727 = cljs.core.chunk_rest.call(null,seq__32682_32725__$1);
var G__32728 = c__5565__auto___32726;
var G__32729 = cljs.core.count.call(null,c__5565__auto___32726);
var G__32730 = (0);
seq__32682_32715 = G__32727;
chunk__32683_32716 = G__32728;
count__32684_32717 = G__32729;
i__32685_32718 = G__32730;
continue;
} else {
var req_32731 = cljs.core.first.call(null,seq__32682_32725__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32731,prov);


var G__32732 = cljs.core.next.call(null,seq__32682_32725__$1);
var G__32733 = null;
var G__32734 = (0);
var G__32735 = (0);
seq__32682_32715 = G__32732;
chunk__32683_32716 = G__32733;
count__32684_32717 = G__32734;
i__32685_32718 = G__32735;
continue;
}
} else {
}
}
break;
}


var G__32736 = cljs.core.next.call(null,seq__32666__$1);
var G__32737 = null;
var G__32738 = (0);
var G__32739 = (0);
seq__32666 = G__32736;
chunk__32667 = G__32737;
count__32668 = G__32738;
i__32669 = G__32739;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32740_32744 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32741_32745 = null;
var count__32742_32746 = (0);
var i__32743_32747 = (0);
while(true){
if((i__32743_32747 < count__32742_32746)){
var ns_32748 = cljs.core._nth.call(null,chunk__32741_32745,i__32743_32747);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32748);


var G__32749 = seq__32740_32744;
var G__32750 = chunk__32741_32745;
var G__32751 = count__32742_32746;
var G__32752 = (i__32743_32747 + (1));
seq__32740_32744 = G__32749;
chunk__32741_32745 = G__32750;
count__32742_32746 = G__32751;
i__32743_32747 = G__32752;
continue;
} else {
var temp__5804__auto___32753 = cljs.core.seq.call(null,seq__32740_32744);
if(temp__5804__auto___32753){
var seq__32740_32754__$1 = temp__5804__auto___32753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32740_32754__$1)){
var c__5565__auto___32755 = cljs.core.chunk_first.call(null,seq__32740_32754__$1);
var G__32756 = cljs.core.chunk_rest.call(null,seq__32740_32754__$1);
var G__32757 = c__5565__auto___32755;
var G__32758 = cljs.core.count.call(null,c__5565__auto___32755);
var G__32759 = (0);
seq__32740_32744 = G__32756;
chunk__32741_32745 = G__32757;
count__32742_32746 = G__32758;
i__32743_32747 = G__32759;
continue;
} else {
var ns_32760 = cljs.core.first.call(null,seq__32740_32754__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32760);


var G__32761 = cljs.core.next.call(null,seq__32740_32754__$1);
var G__32762 = null;
var G__32763 = (0);
var G__32764 = (0);
seq__32740_32744 = G__32761;
chunk__32741_32745 = G__32762;
count__32742_32746 = G__32763;
i__32743_32747 = G__32764;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__5043__auto__ = goog.require__;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__32765__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32766__i = 0, G__32766__a = new Array(arguments.length -  0);
while (G__32766__i < G__32766__a.length) {G__32766__a[G__32766__i] = arguments[G__32766__i + 0]; ++G__32766__i;}
  args = new cljs.core.IndexedSeq(G__32766__a,0,null);
} 
return G__32765__delegate.call(this,args);};
G__32765.cljs$lang$maxFixedArity = 0;
G__32765.cljs$lang$applyTo = (function (arglist__32767){
var args = cljs.core.seq(arglist__32767);
return G__32765__delegate(args);
});
G__32765.cljs$core$IFn$_invoke$arity$variadic = G__32765__delegate;
return G__32765;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32768_SHARP_,p2__32769_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32768_SHARP_)),p2__32769_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32770_SHARP_,p2__32771_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32770_SHARP_),p2__32771_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32772 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32772.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__32772.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__32772;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32773){if((e32773 instanceof Error)){
var e = e32773;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32773;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = figwheel.client.file_reloading.goog$module$goog$object.findKey.call(null,require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
figwheel.client.file_reloading.goog$module$goog$object.remove.call(null,require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32774){if((e32774 instanceof Error)){
var e = e32774;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32774;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32775 = cljs.core._EQ_;
var expr__32776 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32775.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32776))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32775.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32776))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32775.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32776))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32778,callback){
var map__32779 = p__32778;
var map__32779__$1 = cljs.core.__destructure_map.call(null,map__32779);
var file_msg = map__32779__$1;
var request_url = cljs.core.get.call(null,map__32779__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__5043__auto__ = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_32816){
var state_val_32817 = (state_32816[(1)]);
if((state_val_32817 === (7))){
var inst_32812 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
var statearr_32818_32844 = state_32816__$1;
(statearr_32818_32844[(2)] = inst_32812);

(statearr_32818_32844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (1))){
var state_32816__$1 = state_32816;
var statearr_32819_32845 = state_32816__$1;
(statearr_32819_32845[(2)] = null);

(statearr_32819_32845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (4))){
var inst_32782 = (state_32816[(7)]);
var inst_32782__$1 = (state_32816[(2)]);
var state_32816__$1 = (function (){var statearr_32820 = state_32816;
(statearr_32820[(7)] = inst_32782__$1);

return statearr_32820;
})();
if(cljs.core.truth_(inst_32782__$1)){
var statearr_32821_32846 = state_32816__$1;
(statearr_32821_32846[(1)] = (5));

} else {
var statearr_32822_32847 = state_32816__$1;
(statearr_32822_32847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (15))){
var inst_32797 = (state_32816[(8)]);
var inst_32795 = (state_32816[(9)]);
var inst_32799 = inst_32797.call(null,inst_32795);
var state_32816__$1 = state_32816;
var statearr_32823_32848 = state_32816__$1;
(statearr_32823_32848[(2)] = inst_32799);

(statearr_32823_32848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (13))){
var inst_32806 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
var statearr_32824_32849 = state_32816__$1;
(statearr_32824_32849[(2)] = inst_32806);

(statearr_32824_32849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (6))){
var state_32816__$1 = state_32816;
var statearr_32825_32850 = state_32816__$1;
(statearr_32825_32850[(2)] = null);

(statearr_32825_32850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (17))){
var inst_32803 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
var statearr_32826_32851 = state_32816__$1;
(statearr_32826_32851[(2)] = inst_32803);

(statearr_32826_32851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (3))){
var inst_32814 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32816__$1,inst_32814);
} else {
if((state_val_32817 === (12))){
var state_32816__$1 = state_32816;
var statearr_32827_32852 = state_32816__$1;
(statearr_32827_32852[(2)] = null);

(statearr_32827_32852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (2))){
var state_32816__$1 = state_32816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32816__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32817 === (11))){
var inst_32787 = (state_32816[(10)]);
var inst_32793 = figwheel.client.file_reloading.blocking_load.call(null,inst_32787);
var state_32816__$1 = state_32816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32816__$1,(14),inst_32793);
} else {
if((state_val_32817 === (9))){
var inst_32787 = (state_32816[(10)]);
var state_32816__$1 = state_32816;
if(cljs.core.truth_(inst_32787)){
var statearr_32828_32853 = state_32816__$1;
(statearr_32828_32853[(1)] = (11));

} else {
var statearr_32829_32854 = state_32816__$1;
(statearr_32829_32854[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (5))){
var inst_32782 = (state_32816[(7)]);
var inst_32788 = (state_32816[(11)]);
var inst_32787 = cljs.core.nth.call(null,inst_32782,(0),null);
var inst_32788__$1 = cljs.core.nth.call(null,inst_32782,(1),null);
var state_32816__$1 = (function (){var statearr_32830 = state_32816;
(statearr_32830[(10)] = inst_32787);

(statearr_32830[(11)] = inst_32788__$1);

return statearr_32830;
})();
if(cljs.core.truth_(inst_32788__$1)){
var statearr_32831_32855 = state_32816__$1;
(statearr_32831_32855[(1)] = (8));

} else {
var statearr_32832_32856 = state_32816__$1;
(statearr_32832_32856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (14))){
var inst_32787 = (state_32816[(10)]);
var inst_32797 = (state_32816[(8)]);
var inst_32795 = (state_32816[(2)]);
var inst_32796 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32797__$1 = cljs.core.get.call(null,inst_32796,inst_32787);
var state_32816__$1 = (function (){var statearr_32833 = state_32816;
(statearr_32833[(8)] = inst_32797__$1);

(statearr_32833[(9)] = inst_32795);

return statearr_32833;
})();
if(cljs.core.truth_(inst_32797__$1)){
var statearr_32834_32857 = state_32816__$1;
(statearr_32834_32857[(1)] = (15));

} else {
var statearr_32835_32858 = state_32816__$1;
(statearr_32835_32858[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (16))){
var inst_32795 = (state_32816[(9)]);
var inst_32801 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32795);
var state_32816__$1 = state_32816;
var statearr_32836_32859 = state_32816__$1;
(statearr_32836_32859[(2)] = inst_32801);

(statearr_32836_32859[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (10))){
var inst_32808 = (state_32816[(2)]);
var state_32816__$1 = (function (){var statearr_32837 = state_32816;
(statearr_32837[(12)] = inst_32808);

return statearr_32837;
})();
var statearr_32838_32860 = state_32816__$1;
(statearr_32838_32860[(2)] = null);

(statearr_32838_32860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (8))){
var inst_32788 = (state_32816[(11)]);
var inst_32790 = eval(inst_32788);
var state_32816__$1 = state_32816;
var statearr_32839_32861 = state_32816__$1;
(statearr_32839_32861[(2)] = inst_32790);

(statearr_32839_32861[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__24851__auto__ = null;
var figwheel$client$file_reloading$state_machine__24851__auto____0 = (function (){
var statearr_32840 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32840[(0)] = figwheel$client$file_reloading$state_machine__24851__auto__);

(statearr_32840[(1)] = (1));

return statearr_32840;
});
var figwheel$client$file_reloading$state_machine__24851__auto____1 = (function (state_32816){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_32816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e32841){if((e32841 instanceof Object)){
var ex__24854__auto__ = e32841;
var statearr_32842_32862 = state_32816;
(statearr_32842_32862[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32863 = state_32816;
state_32816 = G__32863;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24851__auto__ = function(state_32816){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24851__auto____1.call(this,state_32816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24851__auto____0;
figwheel$client$file_reloading$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24851__auto____1;
return figwheel$client$file_reloading$state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_32843 = f__24948__auto__.call(null);
(statearr_32843[(6)] = c__24947__auto__);

return statearr_32843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32865 = arguments.length;
switch (G__32865) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32867,callback){
var map__32868 = p__32867;
var map__32868__$1 = cljs.core.__destructure_map.call(null,map__32868);
var file_msg = map__32868__$1;
var namespace = cljs.core.get.call(null,map__32868__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32869){
var map__32870 = p__32869;
var map__32870__$1 = cljs.core.__destructure_map.call(null,map__32870);
var file_msg = map__32870__$1;
var namespace = cljs.core.get.call(null,map__32870__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32871){
var map__32872 = p__32871;
var map__32872__$1 = cljs.core.__destructure_map.call(null,map__32872);
var file_msg = map__32872__$1;
var namespace = cljs.core.get.call(null,map__32872__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__5041__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__5041__auto__){
var or__5043__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
var or__5043__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__5043__auto____$2)){
return or__5043__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__5041__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32873,callback){
var map__32874 = p__32873;
var map__32874__$1 = cljs.core.__destructure_map.call(null,map__32874);
var file_msg = map__32874__$1;
var request_url = cljs.core.get.call(null,map__32874__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32874__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24947__auto___32923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_32908){
var state_val_32909 = (state_32908[(1)]);
if((state_val_32909 === (1))){
var inst_32882 = cljs.core.seq.call(null,files);
var inst_32883 = cljs.core.first.call(null,inst_32882);
var inst_32884 = cljs.core.next.call(null,inst_32882);
var inst_32885 = files;
var state_32908__$1 = (function (){var statearr_32910 = state_32908;
(statearr_32910[(7)] = inst_32885);

(statearr_32910[(8)] = inst_32883);

(statearr_32910[(9)] = inst_32884);

return statearr_32910;
})();
var statearr_32911_32924 = state_32908__$1;
(statearr_32911_32924[(2)] = null);

(statearr_32911_32924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (2))){
var inst_32885 = (state_32908[(7)]);
var inst_32891 = (state_32908[(10)]);
var inst_32890 = cljs.core.seq.call(null,inst_32885);
var inst_32891__$1 = cljs.core.first.call(null,inst_32890);
var inst_32892 = cljs.core.next.call(null,inst_32890);
var inst_32893 = (inst_32891__$1 == null);
var inst_32894 = cljs.core.not.call(null,inst_32893);
var state_32908__$1 = (function (){var statearr_32912 = state_32908;
(statearr_32912[(11)] = inst_32892);

(statearr_32912[(10)] = inst_32891__$1);

return statearr_32912;
})();
if(inst_32894){
var statearr_32913_32925 = state_32908__$1;
(statearr_32913_32925[(1)] = (4));

} else {
var statearr_32914_32926 = state_32908__$1;
(statearr_32914_32926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (3))){
var inst_32906 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32908__$1,inst_32906);
} else {
if((state_val_32909 === (4))){
var inst_32891 = (state_32908[(10)]);
var inst_32896 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32891);
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32908__$1,(7),inst_32896);
} else {
if((state_val_32909 === (5))){
var inst_32902 = cljs.core.async.close_BANG_.call(null,out);
var state_32908__$1 = state_32908;
var statearr_32915_32927 = state_32908__$1;
(statearr_32915_32927[(2)] = inst_32902);

(statearr_32915_32927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (6))){
var inst_32904 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32916_32928 = state_32908__$1;
(statearr_32916_32928[(2)] = inst_32904);

(statearr_32916_32928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (7))){
var inst_32892 = (state_32908[(11)]);
var inst_32898 = (state_32908[(2)]);
var inst_32899 = cljs.core.async.put_BANG_.call(null,out,inst_32898);
var inst_32885 = inst_32892;
var state_32908__$1 = (function (){var statearr_32917 = state_32908;
(statearr_32917[(12)] = inst_32899);

(statearr_32917[(7)] = inst_32885);

return statearr_32917;
})();
var statearr_32918_32929 = state_32908__$1;
(statearr_32918_32929[(2)] = null);

(statearr_32918_32929[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto____0 = (function (){
var statearr_32919 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32919[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto__);

(statearr_32919[(1)] = (1));

return statearr_32919;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto____1 = (function (state_32908){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_32908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e32920){if((e32920 instanceof Object)){
var ex__24854__auto__ = e32920;
var statearr_32921_32930 = state_32908;
(statearr_32921_32930[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32931 = state_32908;
state_32908 = G__32931;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto__ = function(state_32908){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto____1.call(this,state_32908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_32922 = f__24948__auto__.call(null);
(statearr_32922[(6)] = c__24947__auto___32923);

return statearr_32922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32932,opts){
var map__32933 = p__32932;
var map__32933__$1 = cljs.core.__destructure_map.call(null,map__32933);
var eval_body = cljs.core.get.call(null,map__32933__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32933__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__5041__auto__ = eval_body;
if(cljs.core.truth_(and__5041__auto__)){
return typeof eval_body === 'string';
} else {
return and__5041__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32934){var e = e32934;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5802__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__32935_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32935_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5802__auto__)){
var file_msg = temp__5802__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32936){
var vec__32937 = p__32936;
var k = cljs.core.nth.call(null,vec__32937,(0),null);
var v = cljs.core.nth.call(null,vec__32937,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32940){
var vec__32941 = p__32940;
var k = cljs.core.nth.call(null,vec__32941,(0),null);
var v = cljs.core.nth.call(null,vec__32941,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32947,p__32948){
var map__32949 = p__32947;
var map__32949__$1 = cljs.core.__destructure_map.call(null,map__32949);
var opts = map__32949__$1;
var before_jsload = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32950 = p__32948;
var map__32950__$1 = cljs.core.__destructure_map.call(null,map__32950);
var msg = map__32950__$1;
var files = cljs.core.get.call(null,map__32950__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32950__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32950__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_33082){
var state_val_33083 = (state_33082[(1)]);
if((state_val_33083 === (7))){
var inst_32964 = (state_33082[(7)]);
var inst_32963 = (state_33082[(8)]);
var inst_32965 = (state_33082[(9)]);
var inst_32962 = (state_33082[(10)]);
var inst_32970 = cljs.core._nth.call(null,inst_32963,inst_32965);
var inst_32971 = figwheel.client.file_reloading.eval_body.call(null,inst_32970,opts);
var inst_32972 = (inst_32965 + (1));
var tmp33084 = inst_32964;
var tmp33085 = inst_32963;
var tmp33086 = inst_32962;
var inst_32962__$1 = tmp33086;
var inst_32963__$1 = tmp33085;
var inst_32964__$1 = tmp33084;
var inst_32965__$1 = inst_32972;
var state_33082__$1 = (function (){var statearr_33087 = state_33082;
(statearr_33087[(7)] = inst_32964__$1);

(statearr_33087[(8)] = inst_32963__$1);

(statearr_33087[(11)] = inst_32971);

(statearr_33087[(9)] = inst_32965__$1);

(statearr_33087[(10)] = inst_32962__$1);

return statearr_33087;
})();
var statearr_33088_33155 = state_33082__$1;
(statearr_33088_33155[(2)] = null);

(statearr_33088_33155[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (20))){
var inst_33005 = (state_33082[(12)]);
var inst_33013 = figwheel.client.file_reloading.sort_files.call(null,inst_33005);
var state_33082__$1 = state_33082;
var statearr_33089_33156 = state_33082__$1;
(statearr_33089_33156[(2)] = inst_33013);

(statearr_33089_33156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (27))){
var state_33082__$1 = state_33082;
var statearr_33090_33157 = state_33082__$1;
(statearr_33090_33157[(2)] = null);

(statearr_33090_33157[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (1))){
var inst_32954 = (state_33082[(13)]);
var inst_32951 = before_jsload.call(null,files);
var inst_32952 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32953 = (function (){return (function (p1__32944_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32944_SHARP_);
});
})();
var inst_32954__$1 = cljs.core.filter.call(null,inst_32953,files);
var inst_32955 = cljs.core.not_empty.call(null,inst_32954__$1);
var state_33082__$1 = (function (){var statearr_33091 = state_33082;
(statearr_33091[(14)] = inst_32951);

(statearr_33091[(13)] = inst_32954__$1);

(statearr_33091[(15)] = inst_32952);

return statearr_33091;
})();
if(cljs.core.truth_(inst_32955)){
var statearr_33092_33158 = state_33082__$1;
(statearr_33092_33158[(1)] = (2));

} else {
var statearr_33093_33159 = state_33082__$1;
(statearr_33093_33159[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (24))){
var state_33082__$1 = state_33082;
var statearr_33094_33160 = state_33082__$1;
(statearr_33094_33160[(2)] = null);

(statearr_33094_33160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (4))){
var inst_32999 = (state_33082[(2)]);
var inst_33000 = cljs.core.List.EMPTY;
var inst_33001 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33000);
var inst_33002 = (function (){return (function (p1__32945_SHARP_){
var and__5041__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32945_SHARP_);
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32945_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32945_SHARP_))));
} else {
return and__5041__auto__;
}
});
})();
var inst_33003 = cljs.core.filter.call(null,inst_33002,files);
var inst_33004 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33005 = cljs.core.concat.call(null,inst_33003,inst_33004);
var state_33082__$1 = (function (){var statearr_33095 = state_33082;
(statearr_33095[(12)] = inst_33005);

(statearr_33095[(16)] = inst_32999);

(statearr_33095[(17)] = inst_33001);

return statearr_33095;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33096_33161 = state_33082__$1;
(statearr_33096_33161[(1)] = (16));

} else {
var statearr_33097_33162 = state_33082__$1;
(statearr_33097_33162[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (15))){
var inst_32989 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
var statearr_33098_33163 = state_33082__$1;
(statearr_33098_33163[(2)] = inst_32989);

(statearr_33098_33163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (21))){
var inst_33015 = (state_33082[(18)]);
var inst_33015__$1 = (state_33082[(2)]);
var inst_33016 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33015__$1);
var state_33082__$1 = (function (){var statearr_33099 = state_33082;
(statearr_33099[(18)] = inst_33015__$1);

return statearr_33099;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33082__$1,(22),inst_33016);
} else {
if((state_val_33083 === (31))){
var inst_33080 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33082__$1,inst_33080);
} else {
if((state_val_33083 === (32))){
var inst_33057 = (state_33082[(19)]);
var inst_33061 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33062 = cljs.core.map.call(null,inst_33061,inst_33057);
var inst_33063 = cljs.core.pr_str.call(null,inst_33062);
var inst_33064 = ["figwheel-no-load meta-data: ",inst_33063].join('');
var inst_33065 = figwheel.client.utils.log.call(null,inst_33064);
var state_33082__$1 = state_33082;
var statearr_33100_33164 = state_33082__$1;
(statearr_33100_33164[(2)] = inst_33065);

(statearr_33100_33164[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (33))){
var state_33082__$1 = state_33082;
var statearr_33101_33165 = state_33082__$1;
(statearr_33101_33165[(2)] = null);

(statearr_33101_33165[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (13))){
var inst_32975 = (state_33082[(20)]);
var inst_32979 = cljs.core.chunk_first.call(null,inst_32975);
var inst_32980 = cljs.core.chunk_rest.call(null,inst_32975);
var inst_32981 = cljs.core.count.call(null,inst_32979);
var inst_32962 = inst_32980;
var inst_32963 = inst_32979;
var inst_32964 = inst_32981;
var inst_32965 = (0);
var state_33082__$1 = (function (){var statearr_33102 = state_33082;
(statearr_33102[(7)] = inst_32964);

(statearr_33102[(8)] = inst_32963);

(statearr_33102[(9)] = inst_32965);

(statearr_33102[(10)] = inst_32962);

return statearr_33102;
})();
var statearr_33103_33166 = state_33082__$1;
(statearr_33103_33166[(2)] = null);

(statearr_33103_33166[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (22))){
var inst_33015 = (state_33082[(18)]);
var inst_33019 = (state_33082[(21)]);
var inst_33018 = (state_33082[(22)]);
var inst_33023 = (state_33082[(23)]);
var inst_33018__$1 = (state_33082[(2)]);
var inst_33019__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33018__$1);
var inst_33020 = (function (){var all_files = inst_33015;
var res_SINGLEQUOTE_ = inst_33018__$1;
var res = inst_33019__$1;
return (function (p1__32946_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32946_SHARP_));
});
})();
var inst_33021 = cljs.core.filter.call(null,inst_33020,inst_33018__$1);
var inst_33022 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33023__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33022);
var inst_33024 = cljs.core.not_empty.call(null,inst_33023__$1);
var state_33082__$1 = (function (){var statearr_33104 = state_33082;
(statearr_33104[(21)] = inst_33019__$1);

(statearr_33104[(24)] = inst_33021);

(statearr_33104[(22)] = inst_33018__$1);

(statearr_33104[(23)] = inst_33023__$1);

return statearr_33104;
})();
if(cljs.core.truth_(inst_33024)){
var statearr_33105_33167 = state_33082__$1;
(statearr_33105_33167[(1)] = (23));

} else {
var statearr_33106_33168 = state_33082__$1;
(statearr_33106_33168[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (36))){
var state_33082__$1 = state_33082;
var statearr_33107_33169 = state_33082__$1;
(statearr_33107_33169[(2)] = null);

(statearr_33107_33169[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (29))){
var inst_33015 = (state_33082[(18)]);
var inst_33019 = (state_33082[(21)]);
var inst_33057 = (state_33082[(19)]);
var inst_33021 = (state_33082[(24)]);
var inst_33018 = (state_33082[(22)]);
var inst_33023 = (state_33082[(23)]);
var inst_33051 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33054 = (function (){var all_files = inst_33015;
var res_SINGLEQUOTE_ = inst_33018;
var res = inst_33019;
var files_not_loaded = inst_33021;
var dependencies_that_loaded = inst_33023;
return (function (p__33053){
var map__33108 = p__33053;
var map__33108__$1 = cljs.core.__destructure_map.call(null,map__33108);
var namespace = cljs.core.get.call(null,map__33108__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_33055 = cljs.core.group_by.call(null,inst_33054,inst_33021);
var inst_33056 = cljs.core.__destructure_map.call(null,inst_33055);
var inst_33057__$1 = cljs.core.get.call(null,inst_33056,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33058 = cljs.core.get.call(null,inst_33056,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33059 = cljs.core.not_empty.call(null,inst_33057__$1);
var state_33082__$1 = (function (){var statearr_33109 = state_33082;
(statearr_33109[(25)] = inst_33051);

(statearr_33109[(19)] = inst_33057__$1);

(statearr_33109[(26)] = inst_33058);

return statearr_33109;
})();
if(cljs.core.truth_(inst_33059)){
var statearr_33110_33170 = state_33082__$1;
(statearr_33110_33170[(1)] = (32));

} else {
var statearr_33111_33171 = state_33082__$1;
(statearr_33111_33171[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (6))){
var inst_32996 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
var statearr_33112_33172 = state_33082__$1;
(statearr_33112_33172[(2)] = inst_32996);

(statearr_33112_33172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (28))){
var inst_33021 = (state_33082[(24)]);
var inst_33048 = (state_33082[(2)]);
var inst_33049 = cljs.core.not_empty.call(null,inst_33021);
var state_33082__$1 = (function (){var statearr_33113 = state_33082;
(statearr_33113[(27)] = inst_33048);

return statearr_33113;
})();
if(cljs.core.truth_(inst_33049)){
var statearr_33114_33173 = state_33082__$1;
(statearr_33114_33173[(1)] = (29));

} else {
var statearr_33115_33174 = state_33082__$1;
(statearr_33115_33174[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (25))){
var inst_33019 = (state_33082[(21)]);
var inst_33035 = (state_33082[(2)]);
var inst_33036 = cljs.core.not_empty.call(null,inst_33019);
var state_33082__$1 = (function (){var statearr_33116 = state_33082;
(statearr_33116[(28)] = inst_33035);

return statearr_33116;
})();
if(cljs.core.truth_(inst_33036)){
var statearr_33117_33175 = state_33082__$1;
(statearr_33117_33175[(1)] = (26));

} else {
var statearr_33118_33176 = state_33082__$1;
(statearr_33118_33176[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (34))){
var inst_33058 = (state_33082[(26)]);
var inst_33068 = (state_33082[(2)]);
var inst_33069 = cljs.core.not_empty.call(null,inst_33058);
var state_33082__$1 = (function (){var statearr_33119 = state_33082;
(statearr_33119[(29)] = inst_33068);

return statearr_33119;
})();
if(cljs.core.truth_(inst_33069)){
var statearr_33120_33177 = state_33082__$1;
(statearr_33120_33177[(1)] = (35));

} else {
var statearr_33121_33178 = state_33082__$1;
(statearr_33121_33178[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (17))){
var state_33082__$1 = state_33082;
var statearr_33122_33179 = state_33082__$1;
(statearr_33122_33179[(2)] = recompile_dependents);

(statearr_33122_33179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (3))){
var state_33082__$1 = state_33082;
var statearr_33123_33180 = state_33082__$1;
(statearr_33123_33180[(2)] = null);

(statearr_33123_33180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (12))){
var inst_32992 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
var statearr_33124_33181 = state_33082__$1;
(statearr_33124_33181[(2)] = inst_32992);

(statearr_33124_33181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (2))){
var inst_32954 = (state_33082[(13)]);
var inst_32961 = cljs.core.seq.call(null,inst_32954);
var inst_32962 = inst_32961;
var inst_32963 = null;
var inst_32964 = (0);
var inst_32965 = (0);
var state_33082__$1 = (function (){var statearr_33125 = state_33082;
(statearr_33125[(7)] = inst_32964);

(statearr_33125[(8)] = inst_32963);

(statearr_33125[(9)] = inst_32965);

(statearr_33125[(10)] = inst_32962);

return statearr_33125;
})();
var statearr_33126_33182 = state_33082__$1;
(statearr_33126_33182[(2)] = null);

(statearr_33126_33182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (23))){
var inst_33015 = (state_33082[(18)]);
var inst_33019 = (state_33082[(21)]);
var inst_33021 = (state_33082[(24)]);
var inst_33018 = (state_33082[(22)]);
var inst_33023 = (state_33082[(23)]);
var inst_33026 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33028 = (function (){var all_files = inst_33015;
var res_SINGLEQUOTE_ = inst_33018;
var res = inst_33019;
var files_not_loaded = inst_33021;
var dependencies_that_loaded = inst_33023;
return (function (p__33027){
var map__33127 = p__33027;
var map__33127__$1 = cljs.core.__destructure_map.call(null,map__33127);
var request_url = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_33029 = cljs.core.reverse.call(null,inst_33023);
var inst_33030 = cljs.core.map.call(null,inst_33028,inst_33029);
var inst_33031 = cljs.core.pr_str.call(null,inst_33030);
var inst_33032 = figwheel.client.utils.log.call(null,inst_33031);
var state_33082__$1 = (function (){var statearr_33128 = state_33082;
(statearr_33128[(30)] = inst_33026);

return statearr_33128;
})();
var statearr_33129_33183 = state_33082__$1;
(statearr_33129_33183[(2)] = inst_33032);

(statearr_33129_33183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (35))){
var inst_33058 = (state_33082[(26)]);
var inst_33071 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33058);
var inst_33072 = cljs.core.pr_str.call(null,inst_33071);
var inst_33073 = ["not required: ",inst_33072].join('');
var inst_33074 = figwheel.client.utils.log.call(null,inst_33073);
var state_33082__$1 = state_33082;
var statearr_33130_33184 = state_33082__$1;
(statearr_33130_33184[(2)] = inst_33074);

(statearr_33130_33184[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (19))){
var inst_33005 = (state_33082[(12)]);
var inst_33011 = figwheel.client.file_reloading.expand_files.call(null,inst_33005);
var state_33082__$1 = state_33082;
var statearr_33131_33185 = state_33082__$1;
(statearr_33131_33185[(2)] = inst_33011);

(statearr_33131_33185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (11))){
var state_33082__$1 = state_33082;
var statearr_33132_33186 = state_33082__$1;
(statearr_33132_33186[(2)] = null);

(statearr_33132_33186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (9))){
var inst_32994 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
var statearr_33133_33187 = state_33082__$1;
(statearr_33133_33187[(2)] = inst_32994);

(statearr_33133_33187[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (5))){
var inst_32964 = (state_33082[(7)]);
var inst_32965 = (state_33082[(9)]);
var inst_32967 = (inst_32965 < inst_32964);
var inst_32968 = inst_32967;
var state_33082__$1 = state_33082;
if(cljs.core.truth_(inst_32968)){
var statearr_33134_33188 = state_33082__$1;
(statearr_33134_33188[(1)] = (7));

} else {
var statearr_33135_33189 = state_33082__$1;
(statearr_33135_33189[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (14))){
var inst_32975 = (state_33082[(20)]);
var inst_32984 = cljs.core.first.call(null,inst_32975);
var inst_32985 = figwheel.client.file_reloading.eval_body.call(null,inst_32984,opts);
var inst_32986 = cljs.core.next.call(null,inst_32975);
var inst_32962 = inst_32986;
var inst_32963 = null;
var inst_32964 = (0);
var inst_32965 = (0);
var state_33082__$1 = (function (){var statearr_33136 = state_33082;
(statearr_33136[(7)] = inst_32964);

(statearr_33136[(8)] = inst_32963);

(statearr_33136[(9)] = inst_32965);

(statearr_33136[(31)] = inst_32985);

(statearr_33136[(10)] = inst_32962);

return statearr_33136;
})();
var statearr_33137_33190 = state_33082__$1;
(statearr_33137_33190[(2)] = null);

(statearr_33137_33190[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (26))){
var inst_33015 = (state_33082[(18)]);
var inst_33019 = (state_33082[(21)]);
var inst_33021 = (state_33082[(24)]);
var inst_33018 = (state_33082[(22)]);
var inst_33023 = (state_33082[(23)]);
var inst_33038 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33040 = (function (){var all_files = inst_33015;
var res_SINGLEQUOTE_ = inst_33018;
var res = inst_33019;
var files_not_loaded = inst_33021;
var dependencies_that_loaded = inst_33023;
return (function (p__33039){
var map__33138 = p__33039;
var map__33138__$1 = cljs.core.__destructure_map.call(null,map__33138);
var namespace = cljs.core.get.call(null,map__33138__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33138__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_33041 = cljs.core.map.call(null,inst_33040,inst_33019);
var inst_33042 = cljs.core.pr_str.call(null,inst_33041);
var inst_33043 = figwheel.client.utils.log.call(null,inst_33042);
var inst_33044 = (function (){var all_files = inst_33015;
var res_SINGLEQUOTE_ = inst_33018;
var res = inst_33019;
var files_not_loaded = inst_33021;
var dependencies_that_loaded = inst_33023;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_33045 = setTimeout(inst_33044,(10));
var state_33082__$1 = (function (){var statearr_33139 = state_33082;
(statearr_33139[(32)] = inst_33038);

(statearr_33139[(33)] = inst_33043);

return statearr_33139;
})();
var statearr_33140_33191 = state_33082__$1;
(statearr_33140_33191[(2)] = inst_33045);

(statearr_33140_33191[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (16))){
var state_33082__$1 = state_33082;
var statearr_33141_33192 = state_33082__$1;
(statearr_33141_33192[(2)] = reload_dependents);

(statearr_33141_33192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (30))){
var state_33082__$1 = state_33082;
var statearr_33142_33193 = state_33082__$1;
(statearr_33142_33193[(2)] = null);

(statearr_33142_33193[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (10))){
var inst_32975 = (state_33082[(20)]);
var inst_32977 = cljs.core.chunked_seq_QMARK_.call(null,inst_32975);
var state_33082__$1 = state_33082;
if(inst_32977){
var statearr_33143_33194 = state_33082__$1;
(statearr_33143_33194[(1)] = (13));

} else {
var statearr_33144_33195 = state_33082__$1;
(statearr_33144_33195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (18))){
var inst_33009 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
if(cljs.core.truth_(inst_33009)){
var statearr_33145_33196 = state_33082__$1;
(statearr_33145_33196[(1)] = (19));

} else {
var statearr_33146_33197 = state_33082__$1;
(statearr_33146_33197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (37))){
var inst_33077 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
var statearr_33147_33198 = state_33082__$1;
(statearr_33147_33198[(2)] = inst_33077);

(statearr_33147_33198[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (8))){
var inst_32975 = (state_33082[(20)]);
var inst_32962 = (state_33082[(10)]);
var inst_32975__$1 = cljs.core.seq.call(null,inst_32962);
var state_33082__$1 = (function (){var statearr_33148 = state_33082;
(statearr_33148[(20)] = inst_32975__$1);

return statearr_33148;
})();
if(inst_32975__$1){
var statearr_33149_33199 = state_33082__$1;
(statearr_33149_33199[(1)] = (10));

} else {
var statearr_33150_33200 = state_33082__$1;
(statearr_33150_33200[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto____0 = (function (){
var statearr_33151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33151[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto__);

(statearr_33151[(1)] = (1));

return statearr_33151;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto____1 = (function (state_33082){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_33082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e33152){if((e33152 instanceof Object)){
var ex__24854__auto__ = e33152;
var statearr_33153_33201 = state_33082;
(statearr_33153_33201[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33202 = state_33082;
state_33082 = G__33202;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto__ = function(state_33082){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto____1.call(this,state_33082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_33154 = f__24948__auto__.call(null);
(statearr_33154[(6)] = c__24947__auto__);

return statearr_33154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33205,link){
var map__33206 = p__33205;
var map__33206__$1 = cljs.core.__destructure_map.call(null,map__33206);
var file = cljs.core.get.call(null,map__33206__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5804__auto__ = link.href;
if(cljs.core.truth_(temp__5804__auto__)){
var link_href = temp__5804__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__33203_SHARP_,p2__33204_SHARP_){
if(cljs.core._EQ_.call(null,p1__33203_SHARP_,p2__33204_SHARP_)){
return p1__33203_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5804__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33208){
var map__33209 = p__33208;
var map__33209__$1 = cljs.core.__destructure_map.call(null,map__33209);
var match_length = cljs.core.get.call(null,map__33209__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33209__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33207_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33207_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5804__auto__)){
var res = temp__5804__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33210_SHARP_,p2__33211_SHARP_){
return cljs.core.assoc.call(null,p1__33210_SHARP_,cljs.core.get.call(null,p2__33211_SHARP_,key),p2__33211_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5802__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5802__auto__)){
var link = temp__5802__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_33212 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33212);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33212);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33213,p__33214){
var map__33215 = p__33213;
var map__33215__$1 = cljs.core.__destructure_map.call(null,map__33215);
var on_cssload = cljs.core.get.call(null,map__33215__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33216 = p__33214;
var map__33216__$1 = cljs.core.__destructure_map.call(null,map__33216);
var files_msg = map__33216__$1;
var files = cljs.core.get.call(null,map__33216__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5804__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5804__auto__)){
var f_datas = temp__5804__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1654516656128
