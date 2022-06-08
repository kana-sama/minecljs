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
var G__32444 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
if((G__32444 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__32444,"requires");
}
}):(function (path){
var G__32445 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.dependencies_.requires,path);
if((G__32445 == null)){
return null;
} else {
return figwheel.client.file_reloading.goog$module$goog$object.getKeys.call(null,G__32445);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32446_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32446_SHARP_)));
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
var G__32447 = figwheel.client.file_reloading.goog$module$goog$object.get.call(null,goog.debugLoader_.dependencies_,path);
var G__32447__$1 = (((G__32447 == null))?null:figwheel.client.file_reloading.goog$module$goog$object.get.call(null,G__32447,"provides"));
if((G__32447__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__32447__$1);
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
var seq__32448 = cljs.core.seq.call(null,provides);
var chunk__32449 = null;
var count__32450 = (0);
var i__32451 = (0);
while(true){
if((i__32451 < count__32450)){
var prov = cljs.core._nth.call(null,chunk__32449,i__32451);
var seq__32460_32472 = cljs.core.seq.call(null,requires);
var chunk__32461_32473 = null;
var count__32462_32474 = (0);
var i__32463_32475 = (0);
while(true){
if((i__32463_32475 < count__32462_32474)){
var req_32476 = cljs.core._nth.call(null,chunk__32461_32473,i__32463_32475);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32476,prov);


var G__32477 = seq__32460_32472;
var G__32478 = chunk__32461_32473;
var G__32479 = count__32462_32474;
var G__32480 = (i__32463_32475 + (1));
seq__32460_32472 = G__32477;
chunk__32461_32473 = G__32478;
count__32462_32474 = G__32479;
i__32463_32475 = G__32480;
continue;
} else {
var temp__5804__auto___32481 = cljs.core.seq.call(null,seq__32460_32472);
if(temp__5804__auto___32481){
var seq__32460_32482__$1 = temp__5804__auto___32481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32460_32482__$1)){
var c__5565__auto___32483 = cljs.core.chunk_first.call(null,seq__32460_32482__$1);
var G__32484 = cljs.core.chunk_rest.call(null,seq__32460_32482__$1);
var G__32485 = c__5565__auto___32483;
var G__32486 = cljs.core.count.call(null,c__5565__auto___32483);
var G__32487 = (0);
seq__32460_32472 = G__32484;
chunk__32461_32473 = G__32485;
count__32462_32474 = G__32486;
i__32463_32475 = G__32487;
continue;
} else {
var req_32488 = cljs.core.first.call(null,seq__32460_32482__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32488,prov);


var G__32489 = cljs.core.next.call(null,seq__32460_32482__$1);
var G__32490 = null;
var G__32491 = (0);
var G__32492 = (0);
seq__32460_32472 = G__32489;
chunk__32461_32473 = G__32490;
count__32462_32474 = G__32491;
i__32463_32475 = G__32492;
continue;
}
} else {
}
}
break;
}


var G__32493 = seq__32448;
var G__32494 = chunk__32449;
var G__32495 = count__32450;
var G__32496 = (i__32451 + (1));
seq__32448 = G__32493;
chunk__32449 = G__32494;
count__32450 = G__32495;
i__32451 = G__32496;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__32448);
if(temp__5804__auto__){
var seq__32448__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32448__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__32448__$1);
var G__32497 = cljs.core.chunk_rest.call(null,seq__32448__$1);
var G__32498 = c__5565__auto__;
var G__32499 = cljs.core.count.call(null,c__5565__auto__);
var G__32500 = (0);
seq__32448 = G__32497;
chunk__32449 = G__32498;
count__32450 = G__32499;
i__32451 = G__32500;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32448__$1);
var seq__32464_32501 = cljs.core.seq.call(null,requires);
var chunk__32465_32502 = null;
var count__32466_32503 = (0);
var i__32467_32504 = (0);
while(true){
if((i__32467_32504 < count__32466_32503)){
var req_32505 = cljs.core._nth.call(null,chunk__32465_32502,i__32467_32504);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32505,prov);


var G__32506 = seq__32464_32501;
var G__32507 = chunk__32465_32502;
var G__32508 = count__32466_32503;
var G__32509 = (i__32467_32504 + (1));
seq__32464_32501 = G__32506;
chunk__32465_32502 = G__32507;
count__32466_32503 = G__32508;
i__32467_32504 = G__32509;
continue;
} else {
var temp__5804__auto___32510__$1 = cljs.core.seq.call(null,seq__32464_32501);
if(temp__5804__auto___32510__$1){
var seq__32464_32511__$1 = temp__5804__auto___32510__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32464_32511__$1)){
var c__5565__auto___32512 = cljs.core.chunk_first.call(null,seq__32464_32511__$1);
var G__32513 = cljs.core.chunk_rest.call(null,seq__32464_32511__$1);
var G__32514 = c__5565__auto___32512;
var G__32515 = cljs.core.count.call(null,c__5565__auto___32512);
var G__32516 = (0);
seq__32464_32501 = G__32513;
chunk__32465_32502 = G__32514;
count__32466_32503 = G__32515;
i__32467_32504 = G__32516;
continue;
} else {
var req_32517 = cljs.core.first.call(null,seq__32464_32511__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32517,prov);


var G__32518 = cljs.core.next.call(null,seq__32464_32511__$1);
var G__32519 = null;
var G__32520 = (0);
var G__32521 = (0);
seq__32464_32501 = G__32518;
chunk__32465_32502 = G__32519;
count__32466_32503 = G__32520;
i__32467_32504 = G__32521;
continue;
}
} else {
}
}
break;
}


var G__32522 = cljs.core.next.call(null,seq__32448__$1);
var G__32523 = null;
var G__32524 = (0);
var G__32525 = (0);
seq__32448 = G__32522;
chunk__32449 = G__32523;
count__32450 = G__32524;
i__32451 = G__32525;
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
var seq__32468 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__32469 = null;
var count__32470 = (0);
var i__32471 = (0);
while(true){
if((i__32471 < count__32470)){
var prov = cljs.core._nth.call(null,chunk__32469,i__32471);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__32468,chunk__32469,count__32470,i__32471,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__32468,chunk__32469,count__32470,i__32471,prov,requires))
);


var G__32526 = seq__32468;
var G__32527 = chunk__32469;
var G__32528 = count__32470;
var G__32529 = (i__32471 + (1));
seq__32468 = G__32526;
chunk__32469 = G__32527;
count__32470 = G__32528;
i__32471 = G__32529;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__32468);
if(temp__5804__auto__){
var seq__32468__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32468__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__32468__$1);
var G__32530 = cljs.core.chunk_rest.call(null,seq__32468__$1);
var G__32531 = c__5565__auto__;
var G__32532 = cljs.core.count.call(null,c__5565__auto__);
var G__32533 = (0);
seq__32468 = G__32530;
chunk__32469 = G__32531;
count__32470 = G__32532;
i__32471 = G__32533;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32468__$1);
figwheel.client.file_reloading.goog$module$goog$object.forEach.call(null,deps,((function (seq__32468,chunk__32469,count__32470,i__32471,prov,seq__32468__$1,temp__5804__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__32468,chunk__32469,count__32470,i__32471,prov,seq__32468__$1,temp__5804__auto__,requires))
);


var G__32534 = cljs.core.next.call(null,seq__32468__$1);
var G__32535 = null;
var G__32536 = (0);
var G__32537 = (0);
seq__32468 = G__32534;
chunk__32469 = G__32535;
count__32470 = G__32536;
i__32471 = G__32537;
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
return cljs.core.some.call(null,(function (p__32538){
var vec__32539 = p__32538;
var _ = cljs.core.nth.call(null,vec__32539,(0),null);
var v = cljs.core.nth.call(null,vec__32539,(1),null);
var and__5041__auto__ = v;
if(cljs.core.truth_(and__5041__auto__)){
return v.call(null,dep);
} else {
return and__5041__auto__;
}
}),cljs.core.filter.call(null,(function (p__32542){
var vec__32543 = p__32542;
var k = cljs.core.nth.call(null,vec__32543,(0),null);
var v = cljs.core.nth.call(null,vec__32543,(1),null);
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

var seq__32555_32563 = cljs.core.seq.call(null,deps);
var chunk__32556_32564 = null;
var count__32557_32565 = (0);
var i__32558_32566 = (0);
while(true){
if((i__32558_32566 < count__32557_32565)){
var dep_32567 = cljs.core._nth.call(null,chunk__32556_32564,i__32558_32566);
if(cljs.core.truth_((function (){var and__5041__auto__ = dep_32567;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32567));
} else {
return and__5041__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32567,(depth + (1)),state);
} else {
}


var G__32568 = seq__32555_32563;
var G__32569 = chunk__32556_32564;
var G__32570 = count__32557_32565;
var G__32571 = (i__32558_32566 + (1));
seq__32555_32563 = G__32568;
chunk__32556_32564 = G__32569;
count__32557_32565 = G__32570;
i__32558_32566 = G__32571;
continue;
} else {
var temp__5804__auto___32572 = cljs.core.seq.call(null,seq__32555_32563);
if(temp__5804__auto___32572){
var seq__32555_32573__$1 = temp__5804__auto___32572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32555_32573__$1)){
var c__5565__auto___32574 = cljs.core.chunk_first.call(null,seq__32555_32573__$1);
var G__32575 = cljs.core.chunk_rest.call(null,seq__32555_32573__$1);
var G__32576 = c__5565__auto___32574;
var G__32577 = cljs.core.count.call(null,c__5565__auto___32574);
var G__32578 = (0);
seq__32555_32563 = G__32575;
chunk__32556_32564 = G__32576;
count__32557_32565 = G__32577;
i__32558_32566 = G__32578;
continue;
} else {
var dep_32579 = cljs.core.first.call(null,seq__32555_32573__$1);
if(cljs.core.truth_((function (){var and__5041__auto__ = dep_32579;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32579));
} else {
return and__5041__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32579,(depth + (1)),state);
} else {
}


var G__32580 = cljs.core.next.call(null,seq__32555_32573__$1);
var G__32581 = null;
var G__32582 = (0);
var G__32583 = (0);
seq__32555_32563 = G__32580;
chunk__32556_32564 = G__32581;
count__32557_32565 = G__32582;
i__32558_32566 = G__32583;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32559){
var vec__32560 = p__32559;
var seq__32561 = cljs.core.seq.call(null,vec__32560);
var first__32562 = cljs.core.first.call(null,seq__32561);
var seq__32561__$1 = cljs.core.next.call(null,seq__32561);
var x = first__32562;
var xs = seq__32561__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__32546_SHARP_){
return clojure.set.difference.call(null,p1__32546_SHARP_,x);
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
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__32584_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__32584_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32585 = cljs.core.seq.call(null,provides);
var chunk__32586 = null;
var count__32587 = (0);
var i__32588 = (0);
while(true){
if((i__32588 < count__32587)){
var prov = cljs.core._nth.call(null,chunk__32586,i__32588);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32597_32605 = cljs.core.seq.call(null,requires);
var chunk__32598_32606 = null;
var count__32599_32607 = (0);
var i__32600_32608 = (0);
while(true){
if((i__32600_32608 < count__32599_32607)){
var req_32609 = cljs.core._nth.call(null,chunk__32598_32606,i__32600_32608);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32609,prov);


var G__32610 = seq__32597_32605;
var G__32611 = chunk__32598_32606;
var G__32612 = count__32599_32607;
var G__32613 = (i__32600_32608 + (1));
seq__32597_32605 = G__32610;
chunk__32598_32606 = G__32611;
count__32599_32607 = G__32612;
i__32600_32608 = G__32613;
continue;
} else {
var temp__5804__auto___32614 = cljs.core.seq.call(null,seq__32597_32605);
if(temp__5804__auto___32614){
var seq__32597_32615__$1 = temp__5804__auto___32614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32597_32615__$1)){
var c__5565__auto___32616 = cljs.core.chunk_first.call(null,seq__32597_32615__$1);
var G__32617 = cljs.core.chunk_rest.call(null,seq__32597_32615__$1);
var G__32618 = c__5565__auto___32616;
var G__32619 = cljs.core.count.call(null,c__5565__auto___32616);
var G__32620 = (0);
seq__32597_32605 = G__32617;
chunk__32598_32606 = G__32618;
count__32599_32607 = G__32619;
i__32600_32608 = G__32620;
continue;
} else {
var req_32621 = cljs.core.first.call(null,seq__32597_32615__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32621,prov);


var G__32622 = cljs.core.next.call(null,seq__32597_32615__$1);
var G__32623 = null;
var G__32624 = (0);
var G__32625 = (0);
seq__32597_32605 = G__32622;
chunk__32598_32606 = G__32623;
count__32599_32607 = G__32624;
i__32600_32608 = G__32625;
continue;
}
} else {
}
}
break;
}


var G__32626 = seq__32585;
var G__32627 = chunk__32586;
var G__32628 = count__32587;
var G__32629 = (i__32588 + (1));
seq__32585 = G__32626;
chunk__32586 = G__32627;
count__32587 = G__32628;
i__32588 = G__32629;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__32585);
if(temp__5804__auto__){
var seq__32585__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32585__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__32585__$1);
var G__32630 = cljs.core.chunk_rest.call(null,seq__32585__$1);
var G__32631 = c__5565__auto__;
var G__32632 = cljs.core.count.call(null,c__5565__auto__);
var G__32633 = (0);
seq__32585 = G__32630;
chunk__32586 = G__32631;
count__32587 = G__32632;
i__32588 = G__32633;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32585__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32601_32634 = cljs.core.seq.call(null,requires);
var chunk__32602_32635 = null;
var count__32603_32636 = (0);
var i__32604_32637 = (0);
while(true){
if((i__32604_32637 < count__32603_32636)){
var req_32638 = cljs.core._nth.call(null,chunk__32602_32635,i__32604_32637);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32638,prov);


var G__32639 = seq__32601_32634;
var G__32640 = chunk__32602_32635;
var G__32641 = count__32603_32636;
var G__32642 = (i__32604_32637 + (1));
seq__32601_32634 = G__32639;
chunk__32602_32635 = G__32640;
count__32603_32636 = G__32641;
i__32604_32637 = G__32642;
continue;
} else {
var temp__5804__auto___32643__$1 = cljs.core.seq.call(null,seq__32601_32634);
if(temp__5804__auto___32643__$1){
var seq__32601_32644__$1 = temp__5804__auto___32643__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32601_32644__$1)){
var c__5565__auto___32645 = cljs.core.chunk_first.call(null,seq__32601_32644__$1);
var G__32646 = cljs.core.chunk_rest.call(null,seq__32601_32644__$1);
var G__32647 = c__5565__auto___32645;
var G__32648 = cljs.core.count.call(null,c__5565__auto___32645);
var G__32649 = (0);
seq__32601_32634 = G__32646;
chunk__32602_32635 = G__32647;
count__32603_32636 = G__32648;
i__32604_32637 = G__32649;
continue;
} else {
var req_32650 = cljs.core.first.call(null,seq__32601_32644__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32650,prov);


var G__32651 = cljs.core.next.call(null,seq__32601_32644__$1);
var G__32652 = null;
var G__32653 = (0);
var G__32654 = (0);
seq__32601_32634 = G__32651;
chunk__32602_32635 = G__32652;
count__32603_32636 = G__32653;
i__32604_32637 = G__32654;
continue;
}
} else {
}
}
break;
}


var G__32655 = cljs.core.next.call(null,seq__32585__$1);
var G__32656 = null;
var G__32657 = (0);
var G__32658 = (0);
seq__32585 = G__32655;
chunk__32586 = G__32656;
count__32587 = G__32657;
i__32588 = G__32658;
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
var seq__32659_32663 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32660_32664 = null;
var count__32661_32665 = (0);
var i__32662_32666 = (0);
while(true){
if((i__32662_32666 < count__32661_32665)){
var ns_32667 = cljs.core._nth.call(null,chunk__32660_32664,i__32662_32666);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32667);


var G__32668 = seq__32659_32663;
var G__32669 = chunk__32660_32664;
var G__32670 = count__32661_32665;
var G__32671 = (i__32662_32666 + (1));
seq__32659_32663 = G__32668;
chunk__32660_32664 = G__32669;
count__32661_32665 = G__32670;
i__32662_32666 = G__32671;
continue;
} else {
var temp__5804__auto___32672 = cljs.core.seq.call(null,seq__32659_32663);
if(temp__5804__auto___32672){
var seq__32659_32673__$1 = temp__5804__auto___32672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32659_32673__$1)){
var c__5565__auto___32674 = cljs.core.chunk_first.call(null,seq__32659_32673__$1);
var G__32675 = cljs.core.chunk_rest.call(null,seq__32659_32673__$1);
var G__32676 = c__5565__auto___32674;
var G__32677 = cljs.core.count.call(null,c__5565__auto___32674);
var G__32678 = (0);
seq__32659_32663 = G__32675;
chunk__32660_32664 = G__32676;
count__32661_32665 = G__32677;
i__32662_32666 = G__32678;
continue;
} else {
var ns_32679 = cljs.core.first.call(null,seq__32659_32673__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32679);


var G__32680 = cljs.core.next.call(null,seq__32659_32673__$1);
var G__32681 = null;
var G__32682 = (0);
var G__32683 = (0);
seq__32659_32663 = G__32680;
chunk__32660_32664 = G__32681;
count__32661_32665 = G__32682;
i__32662_32666 = G__32683;
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
var G__32684__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32684 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32685__i = 0, G__32685__a = new Array(arguments.length -  0);
while (G__32685__i < G__32685__a.length) {G__32685__a[G__32685__i] = arguments[G__32685__i + 0]; ++G__32685__i;}
  args = new cljs.core.IndexedSeq(G__32685__a,0,null);
} 
return G__32684__delegate.call(this,args);};
G__32684.cljs$lang$maxFixedArity = 0;
G__32684.cljs$lang$applyTo = (function (arglist__32686){
var args = cljs.core.seq(arglist__32686);
return G__32684__delegate(args);
});
G__32684.cljs$core$IFn$_invoke$arity$variadic = G__32684__delegate;
return G__32684;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32687_SHARP_,p2__32688_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32687_SHARP_)),p2__32688_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32689_SHARP_,p2__32690_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32689_SHARP_),p2__32690_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32691 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32691.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__32691.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__32691;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32692){if((e32692 instanceof Error)){
var e = e32692;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32692;

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
}catch (e32693){if((e32693 instanceof Error)){
var e = e32693;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32693;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32694 = cljs.core._EQ_;
var expr__32695 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32694.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32695))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32694.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32695))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32694.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32695))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32697,callback){
var map__32698 = p__32697;
var map__32698__$1 = cljs.core.__destructure_map.call(null,map__32698);
var file_msg = map__32698__$1;
var request_url = cljs.core.get.call(null,map__32698__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_32735){
var state_val_32736 = (state_32735[(1)]);
if((state_val_32736 === (7))){
var inst_32731 = (state_32735[(2)]);
var state_32735__$1 = state_32735;
var statearr_32737_32763 = state_32735__$1;
(statearr_32737_32763[(2)] = inst_32731);

(statearr_32737_32763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (1))){
var state_32735__$1 = state_32735;
var statearr_32738_32764 = state_32735__$1;
(statearr_32738_32764[(2)] = null);

(statearr_32738_32764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (4))){
var inst_32701 = (state_32735[(7)]);
var inst_32701__$1 = (state_32735[(2)]);
var state_32735__$1 = (function (){var statearr_32739 = state_32735;
(statearr_32739[(7)] = inst_32701__$1);

return statearr_32739;
})();
if(cljs.core.truth_(inst_32701__$1)){
var statearr_32740_32765 = state_32735__$1;
(statearr_32740_32765[(1)] = (5));

} else {
var statearr_32741_32766 = state_32735__$1;
(statearr_32741_32766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (15))){
var inst_32714 = (state_32735[(8)]);
var inst_32716 = (state_32735[(9)]);
var inst_32718 = inst_32716.call(null,inst_32714);
var state_32735__$1 = state_32735;
var statearr_32742_32767 = state_32735__$1;
(statearr_32742_32767[(2)] = inst_32718);

(statearr_32742_32767[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (13))){
var inst_32725 = (state_32735[(2)]);
var state_32735__$1 = state_32735;
var statearr_32743_32768 = state_32735__$1;
(statearr_32743_32768[(2)] = inst_32725);

(statearr_32743_32768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (6))){
var state_32735__$1 = state_32735;
var statearr_32744_32769 = state_32735__$1;
(statearr_32744_32769[(2)] = null);

(statearr_32744_32769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (17))){
var inst_32722 = (state_32735[(2)]);
var state_32735__$1 = state_32735;
var statearr_32745_32770 = state_32735__$1;
(statearr_32745_32770[(2)] = inst_32722);

(statearr_32745_32770[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (3))){
var inst_32733 = (state_32735[(2)]);
var state_32735__$1 = state_32735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32735__$1,inst_32733);
} else {
if((state_val_32736 === (12))){
var state_32735__$1 = state_32735;
var statearr_32746_32771 = state_32735__$1;
(statearr_32746_32771[(2)] = null);

(statearr_32746_32771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (2))){
var state_32735__$1 = state_32735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32735__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32736 === (11))){
var inst_32706 = (state_32735[(10)]);
var inst_32712 = figwheel.client.file_reloading.blocking_load.call(null,inst_32706);
var state_32735__$1 = state_32735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32735__$1,(14),inst_32712);
} else {
if((state_val_32736 === (9))){
var inst_32706 = (state_32735[(10)]);
var state_32735__$1 = state_32735;
if(cljs.core.truth_(inst_32706)){
var statearr_32747_32772 = state_32735__$1;
(statearr_32747_32772[(1)] = (11));

} else {
var statearr_32748_32773 = state_32735__$1;
(statearr_32748_32773[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (5))){
var inst_32701 = (state_32735[(7)]);
var inst_32707 = (state_32735[(11)]);
var inst_32706 = cljs.core.nth.call(null,inst_32701,(0),null);
var inst_32707__$1 = cljs.core.nth.call(null,inst_32701,(1),null);
var state_32735__$1 = (function (){var statearr_32749 = state_32735;
(statearr_32749[(11)] = inst_32707__$1);

(statearr_32749[(10)] = inst_32706);

return statearr_32749;
})();
if(cljs.core.truth_(inst_32707__$1)){
var statearr_32750_32774 = state_32735__$1;
(statearr_32750_32774[(1)] = (8));

} else {
var statearr_32751_32775 = state_32735__$1;
(statearr_32751_32775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (14))){
var inst_32716 = (state_32735[(9)]);
var inst_32706 = (state_32735[(10)]);
var inst_32714 = (state_32735[(2)]);
var inst_32715 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32716__$1 = cljs.core.get.call(null,inst_32715,inst_32706);
var state_32735__$1 = (function (){var statearr_32752 = state_32735;
(statearr_32752[(8)] = inst_32714);

(statearr_32752[(9)] = inst_32716__$1);

return statearr_32752;
})();
if(cljs.core.truth_(inst_32716__$1)){
var statearr_32753_32776 = state_32735__$1;
(statearr_32753_32776[(1)] = (15));

} else {
var statearr_32754_32777 = state_32735__$1;
(statearr_32754_32777[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (16))){
var inst_32714 = (state_32735[(8)]);
var inst_32720 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32714);
var state_32735__$1 = state_32735;
var statearr_32755_32778 = state_32735__$1;
(statearr_32755_32778[(2)] = inst_32720);

(statearr_32755_32778[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (10))){
var inst_32727 = (state_32735[(2)]);
var state_32735__$1 = (function (){var statearr_32756 = state_32735;
(statearr_32756[(12)] = inst_32727);

return statearr_32756;
})();
var statearr_32757_32779 = state_32735__$1;
(statearr_32757_32779[(2)] = null);

(statearr_32757_32779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32736 === (8))){
var inst_32707 = (state_32735[(11)]);
var inst_32709 = eval(inst_32707);
var state_32735__$1 = state_32735;
var statearr_32758_32780 = state_32735__$1;
(statearr_32758_32780[(2)] = inst_32709);

(statearr_32758_32780[(1)] = (10));


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
var statearr_32759 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32759[(0)] = figwheel$client$file_reloading$state_machine__24851__auto__);

(statearr_32759[(1)] = (1));

return statearr_32759;
});
var figwheel$client$file_reloading$state_machine__24851__auto____1 = (function (state_32735){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_32735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e32760){if((e32760 instanceof Object)){
var ex__24854__auto__ = e32760;
var statearr_32761_32781 = state_32735;
(statearr_32761_32781[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32782 = state_32735;
state_32735 = G__32782;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24851__auto__ = function(state_32735){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24851__auto____1.call(this,state_32735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24851__auto____0;
figwheel$client$file_reloading$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24851__auto____1;
return figwheel$client$file_reloading$state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_32762 = f__24948__auto__.call(null);
(statearr_32762[(6)] = c__24947__auto__);

return statearr_32762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32784 = arguments.length;
switch (G__32784) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32786,callback){
var map__32787 = p__32786;
var map__32787__$1 = cljs.core.__destructure_map.call(null,map__32787);
var file_msg = map__32787__$1;
var namespace = cljs.core.get.call(null,map__32787__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32788){
var map__32789 = p__32788;
var map__32789__$1 = cljs.core.__destructure_map.call(null,map__32789);
var file_msg = map__32789__$1;
var namespace = cljs.core.get.call(null,map__32789__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.client.file_reloading.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32790){
var map__32791 = p__32790;
var map__32791__$1 = cljs.core.__destructure_map.call(null,map__32791);
var file_msg = map__32791__$1;
var namespace = cljs.core.get.call(null,map__32791__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32792,callback){
var map__32793 = p__32792;
var map__32793__$1 = cljs.core.__destructure_map.call(null,map__32793);
var file_msg = map__32793__$1;
var request_url = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32793__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__24947__auto___32842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_32827){
var state_val_32828 = (state_32827[(1)]);
if((state_val_32828 === (1))){
var inst_32801 = cljs.core.seq.call(null,files);
var inst_32802 = cljs.core.first.call(null,inst_32801);
var inst_32803 = cljs.core.next.call(null,inst_32801);
var inst_32804 = files;
var state_32827__$1 = (function (){var statearr_32829 = state_32827;
(statearr_32829[(7)] = inst_32803);

(statearr_32829[(8)] = inst_32802);

(statearr_32829[(9)] = inst_32804);

return statearr_32829;
})();
var statearr_32830_32843 = state_32827__$1;
(statearr_32830_32843[(2)] = null);

(statearr_32830_32843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (2))){
var inst_32810 = (state_32827[(10)]);
var inst_32804 = (state_32827[(9)]);
var inst_32809 = cljs.core.seq.call(null,inst_32804);
var inst_32810__$1 = cljs.core.first.call(null,inst_32809);
var inst_32811 = cljs.core.next.call(null,inst_32809);
var inst_32812 = (inst_32810__$1 == null);
var inst_32813 = cljs.core.not.call(null,inst_32812);
var state_32827__$1 = (function (){var statearr_32831 = state_32827;
(statearr_32831[(11)] = inst_32811);

(statearr_32831[(10)] = inst_32810__$1);

return statearr_32831;
})();
if(inst_32813){
var statearr_32832_32844 = state_32827__$1;
(statearr_32832_32844[(1)] = (4));

} else {
var statearr_32833_32845 = state_32827__$1;
(statearr_32833_32845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (3))){
var inst_32825 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32827__$1,inst_32825);
} else {
if((state_val_32828 === (4))){
var inst_32810 = (state_32827[(10)]);
var inst_32815 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32810);
var state_32827__$1 = state_32827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32827__$1,(7),inst_32815);
} else {
if((state_val_32828 === (5))){
var inst_32821 = cljs.core.async.close_BANG_.call(null,out);
var state_32827__$1 = state_32827;
var statearr_32834_32846 = state_32827__$1;
(statearr_32834_32846[(2)] = inst_32821);

(statearr_32834_32846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (6))){
var inst_32823 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
var statearr_32835_32847 = state_32827__$1;
(statearr_32835_32847[(2)] = inst_32823);

(statearr_32835_32847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (7))){
var inst_32811 = (state_32827[(11)]);
var inst_32817 = (state_32827[(2)]);
var inst_32818 = cljs.core.async.put_BANG_.call(null,out,inst_32817);
var inst_32804 = inst_32811;
var state_32827__$1 = (function (){var statearr_32836 = state_32827;
(statearr_32836[(12)] = inst_32818);

(statearr_32836[(9)] = inst_32804);

return statearr_32836;
})();
var statearr_32837_32848 = state_32827__$1;
(statearr_32837_32848[(2)] = null);

(statearr_32837_32848[(1)] = (2));


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
var statearr_32838 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32838[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto__);

(statearr_32838[(1)] = (1));

return statearr_32838;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto____1 = (function (state_32827){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_32827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e32839){if((e32839 instanceof Object)){
var ex__24854__auto__ = e32839;
var statearr_32840_32849 = state_32827;
(statearr_32840_32849[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32850 = state_32827;
state_32827 = G__32850;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto__ = function(state_32827){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto____1.call(this,state_32827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_32841 = f__24948__auto__.call(null);
(statearr_32841[(6)] = c__24947__auto___32842);

return statearr_32841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32851,opts){
var map__32852 = p__32851;
var map__32852__$1 = cljs.core.__destructure_map.call(null,map__32852);
var eval_body = cljs.core.get.call(null,map__32852__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32852__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32853){var e = e32853;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5802__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__32854_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32854_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32855){
var vec__32856 = p__32855;
var k = cljs.core.nth.call(null,vec__32856,(0),null);
var v = cljs.core.nth.call(null,vec__32856,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32859){
var vec__32860 = p__32859;
var k = cljs.core.nth.call(null,vec__32860,(0),null);
var v = cljs.core.nth.call(null,vec__32860,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32866,p__32867){
var map__32868 = p__32866;
var map__32868__$1 = cljs.core.__destructure_map.call(null,map__32868);
var opts = map__32868__$1;
var before_jsload = cljs.core.get.call(null,map__32868__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32868__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32868__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32869 = p__32867;
var map__32869__$1 = cljs.core.__destructure_map.call(null,map__32869);
var msg = map__32869__$1;
var files = cljs.core.get.call(null,map__32869__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32869__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32869__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_33001){
var state_val_33002 = (state_33001[(1)]);
if((state_val_33002 === (7))){
var inst_32882 = (state_33001[(7)]);
var inst_32881 = (state_33001[(8)]);
var inst_32883 = (state_33001[(9)]);
var inst_32884 = (state_33001[(10)]);
var inst_32889 = cljs.core._nth.call(null,inst_32882,inst_32884);
var inst_32890 = figwheel.client.file_reloading.eval_body.call(null,inst_32889,opts);
var inst_32891 = (inst_32884 + (1));
var tmp33003 = inst_32882;
var tmp33004 = inst_32881;
var tmp33005 = inst_32883;
var inst_32881__$1 = tmp33004;
var inst_32882__$1 = tmp33003;
var inst_32883__$1 = tmp33005;
var inst_32884__$1 = inst_32891;
var state_33001__$1 = (function (){var statearr_33006 = state_33001;
(statearr_33006[(11)] = inst_32890);

(statearr_33006[(7)] = inst_32882__$1);

(statearr_33006[(8)] = inst_32881__$1);

(statearr_33006[(9)] = inst_32883__$1);

(statearr_33006[(10)] = inst_32884__$1);

return statearr_33006;
})();
var statearr_33007_33074 = state_33001__$1;
(statearr_33007_33074[(2)] = null);

(statearr_33007_33074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (20))){
var inst_32924 = (state_33001[(12)]);
var inst_32932 = figwheel.client.file_reloading.sort_files.call(null,inst_32924);
var state_33001__$1 = state_33001;
var statearr_33008_33075 = state_33001__$1;
(statearr_33008_33075[(2)] = inst_32932);

(statearr_33008_33075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (27))){
var state_33001__$1 = state_33001;
var statearr_33009_33076 = state_33001__$1;
(statearr_33009_33076[(2)] = null);

(statearr_33009_33076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (1))){
var inst_32873 = (state_33001[(13)]);
var inst_32870 = before_jsload.call(null,files);
var inst_32871 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32872 = (function (){return (function (p1__32863_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32863_SHARP_);
});
})();
var inst_32873__$1 = cljs.core.filter.call(null,inst_32872,files);
var inst_32874 = cljs.core.not_empty.call(null,inst_32873__$1);
var state_33001__$1 = (function (){var statearr_33010 = state_33001;
(statearr_33010[(14)] = inst_32870);

(statearr_33010[(15)] = inst_32871);

(statearr_33010[(13)] = inst_32873__$1);

return statearr_33010;
})();
if(cljs.core.truth_(inst_32874)){
var statearr_33011_33077 = state_33001__$1;
(statearr_33011_33077[(1)] = (2));

} else {
var statearr_33012_33078 = state_33001__$1;
(statearr_33012_33078[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (24))){
var state_33001__$1 = state_33001;
var statearr_33013_33079 = state_33001__$1;
(statearr_33013_33079[(2)] = null);

(statearr_33013_33079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (4))){
var inst_32918 = (state_33001[(2)]);
var inst_32919 = cljs.core.List.EMPTY;
var inst_32920 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32919);
var inst_32921 = (function (){return (function (p1__32864_SHARP_){
var and__5041__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32864_SHARP_);
if(cljs.core.truth_(and__5041__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32864_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32864_SHARP_))));
} else {
return and__5041__auto__;
}
});
})();
var inst_32922 = cljs.core.filter.call(null,inst_32921,files);
var inst_32923 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32924 = cljs.core.concat.call(null,inst_32922,inst_32923);
var state_33001__$1 = (function (){var statearr_33014 = state_33001;
(statearr_33014[(16)] = inst_32918);

(statearr_33014[(17)] = inst_32920);

(statearr_33014[(12)] = inst_32924);

return statearr_33014;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33015_33080 = state_33001__$1;
(statearr_33015_33080[(1)] = (16));

} else {
var statearr_33016_33081 = state_33001__$1;
(statearr_33016_33081[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (15))){
var inst_32908 = (state_33001[(2)]);
var state_33001__$1 = state_33001;
var statearr_33017_33082 = state_33001__$1;
(statearr_33017_33082[(2)] = inst_32908);

(statearr_33017_33082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (21))){
var inst_32934 = (state_33001[(18)]);
var inst_32934__$1 = (state_33001[(2)]);
var inst_32935 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32934__$1);
var state_33001__$1 = (function (){var statearr_33018 = state_33001;
(statearr_33018[(18)] = inst_32934__$1);

return statearr_33018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33001__$1,(22),inst_32935);
} else {
if((state_val_33002 === (31))){
var inst_32999 = (state_33001[(2)]);
var state_33001__$1 = state_33001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33001__$1,inst_32999);
} else {
if((state_val_33002 === (32))){
var inst_32976 = (state_33001[(19)]);
var inst_32980 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32981 = cljs.core.map.call(null,inst_32980,inst_32976);
var inst_32982 = cljs.core.pr_str.call(null,inst_32981);
var inst_32983 = ["figwheel-no-load meta-data: ",inst_32982].join('');
var inst_32984 = figwheel.client.utils.log.call(null,inst_32983);
var state_33001__$1 = state_33001;
var statearr_33019_33083 = state_33001__$1;
(statearr_33019_33083[(2)] = inst_32984);

(statearr_33019_33083[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (33))){
var state_33001__$1 = state_33001;
var statearr_33020_33084 = state_33001__$1;
(statearr_33020_33084[(2)] = null);

(statearr_33020_33084[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (13))){
var inst_32894 = (state_33001[(20)]);
var inst_32898 = cljs.core.chunk_first.call(null,inst_32894);
var inst_32899 = cljs.core.chunk_rest.call(null,inst_32894);
var inst_32900 = cljs.core.count.call(null,inst_32898);
var inst_32881 = inst_32899;
var inst_32882 = inst_32898;
var inst_32883 = inst_32900;
var inst_32884 = (0);
var state_33001__$1 = (function (){var statearr_33021 = state_33001;
(statearr_33021[(7)] = inst_32882);

(statearr_33021[(8)] = inst_32881);

(statearr_33021[(9)] = inst_32883);

(statearr_33021[(10)] = inst_32884);

return statearr_33021;
})();
var statearr_33022_33085 = state_33001__$1;
(statearr_33022_33085[(2)] = null);

(statearr_33022_33085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (22))){
var inst_32938 = (state_33001[(21)]);
var inst_32942 = (state_33001[(22)]);
var inst_32937 = (state_33001[(23)]);
var inst_32934 = (state_33001[(18)]);
var inst_32937__$1 = (state_33001[(2)]);
var inst_32938__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32937__$1);
var inst_32939 = (function (){var all_files = inst_32934;
var res_SINGLEQUOTE_ = inst_32937__$1;
var res = inst_32938__$1;
return (function (p1__32865_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32865_SHARP_));
});
})();
var inst_32940 = cljs.core.filter.call(null,inst_32939,inst_32937__$1);
var inst_32941 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32942__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32941);
var inst_32943 = cljs.core.not_empty.call(null,inst_32942__$1);
var state_33001__$1 = (function (){var statearr_33023 = state_33001;
(statearr_33023[(21)] = inst_32938__$1);

(statearr_33023[(22)] = inst_32942__$1);

(statearr_33023[(23)] = inst_32937__$1);

(statearr_33023[(24)] = inst_32940);

return statearr_33023;
})();
if(cljs.core.truth_(inst_32943)){
var statearr_33024_33086 = state_33001__$1;
(statearr_33024_33086[(1)] = (23));

} else {
var statearr_33025_33087 = state_33001__$1;
(statearr_33025_33087[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (36))){
var state_33001__$1 = state_33001;
var statearr_33026_33088 = state_33001__$1;
(statearr_33026_33088[(2)] = null);

(statearr_33026_33088[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (29))){
var inst_32976 = (state_33001[(19)]);
var inst_32938 = (state_33001[(21)]);
var inst_32942 = (state_33001[(22)]);
var inst_32937 = (state_33001[(23)]);
var inst_32940 = (state_33001[(24)]);
var inst_32934 = (state_33001[(18)]);
var inst_32970 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32973 = (function (){var all_files = inst_32934;
var res_SINGLEQUOTE_ = inst_32937;
var res = inst_32938;
var files_not_loaded = inst_32940;
var dependencies_that_loaded = inst_32942;
return (function (p__32972){
var map__33027 = p__32972;
var map__33027__$1 = cljs.core.__destructure_map.call(null,map__33027);
var namespace = cljs.core.get.call(null,map__33027__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_32974 = cljs.core.group_by.call(null,inst_32973,inst_32940);
var inst_32975 = cljs.core.__destructure_map.call(null,inst_32974);
var inst_32976__$1 = cljs.core.get.call(null,inst_32975,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32977 = cljs.core.get.call(null,inst_32975,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32978 = cljs.core.not_empty.call(null,inst_32976__$1);
var state_33001__$1 = (function (){var statearr_33028 = state_33001;
(statearr_33028[(19)] = inst_32976__$1);

(statearr_33028[(25)] = inst_32970);

(statearr_33028[(26)] = inst_32977);

return statearr_33028;
})();
if(cljs.core.truth_(inst_32978)){
var statearr_33029_33089 = state_33001__$1;
(statearr_33029_33089[(1)] = (32));

} else {
var statearr_33030_33090 = state_33001__$1;
(statearr_33030_33090[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (6))){
var inst_32915 = (state_33001[(2)]);
var state_33001__$1 = state_33001;
var statearr_33031_33091 = state_33001__$1;
(statearr_33031_33091[(2)] = inst_32915);

(statearr_33031_33091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (28))){
var inst_32940 = (state_33001[(24)]);
var inst_32967 = (state_33001[(2)]);
var inst_32968 = cljs.core.not_empty.call(null,inst_32940);
var state_33001__$1 = (function (){var statearr_33032 = state_33001;
(statearr_33032[(27)] = inst_32967);

return statearr_33032;
})();
if(cljs.core.truth_(inst_32968)){
var statearr_33033_33092 = state_33001__$1;
(statearr_33033_33092[(1)] = (29));

} else {
var statearr_33034_33093 = state_33001__$1;
(statearr_33034_33093[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (25))){
var inst_32938 = (state_33001[(21)]);
var inst_32954 = (state_33001[(2)]);
var inst_32955 = cljs.core.not_empty.call(null,inst_32938);
var state_33001__$1 = (function (){var statearr_33035 = state_33001;
(statearr_33035[(28)] = inst_32954);

return statearr_33035;
})();
if(cljs.core.truth_(inst_32955)){
var statearr_33036_33094 = state_33001__$1;
(statearr_33036_33094[(1)] = (26));

} else {
var statearr_33037_33095 = state_33001__$1;
(statearr_33037_33095[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (34))){
var inst_32977 = (state_33001[(26)]);
var inst_32987 = (state_33001[(2)]);
var inst_32988 = cljs.core.not_empty.call(null,inst_32977);
var state_33001__$1 = (function (){var statearr_33038 = state_33001;
(statearr_33038[(29)] = inst_32987);

return statearr_33038;
})();
if(cljs.core.truth_(inst_32988)){
var statearr_33039_33096 = state_33001__$1;
(statearr_33039_33096[(1)] = (35));

} else {
var statearr_33040_33097 = state_33001__$1;
(statearr_33040_33097[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (17))){
var state_33001__$1 = state_33001;
var statearr_33041_33098 = state_33001__$1;
(statearr_33041_33098[(2)] = recompile_dependents);

(statearr_33041_33098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (3))){
var state_33001__$1 = state_33001;
var statearr_33042_33099 = state_33001__$1;
(statearr_33042_33099[(2)] = null);

(statearr_33042_33099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (12))){
var inst_32911 = (state_33001[(2)]);
var state_33001__$1 = state_33001;
var statearr_33043_33100 = state_33001__$1;
(statearr_33043_33100[(2)] = inst_32911);

(statearr_33043_33100[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (2))){
var inst_32873 = (state_33001[(13)]);
var inst_32880 = cljs.core.seq.call(null,inst_32873);
var inst_32881 = inst_32880;
var inst_32882 = null;
var inst_32883 = (0);
var inst_32884 = (0);
var state_33001__$1 = (function (){var statearr_33044 = state_33001;
(statearr_33044[(7)] = inst_32882);

(statearr_33044[(8)] = inst_32881);

(statearr_33044[(9)] = inst_32883);

(statearr_33044[(10)] = inst_32884);

return statearr_33044;
})();
var statearr_33045_33101 = state_33001__$1;
(statearr_33045_33101[(2)] = null);

(statearr_33045_33101[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (23))){
var inst_32938 = (state_33001[(21)]);
var inst_32942 = (state_33001[(22)]);
var inst_32937 = (state_33001[(23)]);
var inst_32940 = (state_33001[(24)]);
var inst_32934 = (state_33001[(18)]);
var inst_32945 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32947 = (function (){var all_files = inst_32934;
var res_SINGLEQUOTE_ = inst_32937;
var res = inst_32938;
var files_not_loaded = inst_32940;
var dependencies_that_loaded = inst_32942;
return (function (p__32946){
var map__33046 = p__32946;
var map__33046__$1 = cljs.core.__destructure_map.call(null,map__33046);
var request_url = cljs.core.get.call(null,map__33046__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_32948 = cljs.core.reverse.call(null,inst_32942);
var inst_32949 = cljs.core.map.call(null,inst_32947,inst_32948);
var inst_32950 = cljs.core.pr_str.call(null,inst_32949);
var inst_32951 = figwheel.client.utils.log.call(null,inst_32950);
var state_33001__$1 = (function (){var statearr_33047 = state_33001;
(statearr_33047[(30)] = inst_32945);

return statearr_33047;
})();
var statearr_33048_33102 = state_33001__$1;
(statearr_33048_33102[(2)] = inst_32951);

(statearr_33048_33102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (35))){
var inst_32977 = (state_33001[(26)]);
var inst_32990 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32977);
var inst_32991 = cljs.core.pr_str.call(null,inst_32990);
var inst_32992 = ["not required: ",inst_32991].join('');
var inst_32993 = figwheel.client.utils.log.call(null,inst_32992);
var state_33001__$1 = state_33001;
var statearr_33049_33103 = state_33001__$1;
(statearr_33049_33103[(2)] = inst_32993);

(statearr_33049_33103[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (19))){
var inst_32924 = (state_33001[(12)]);
var inst_32930 = figwheel.client.file_reloading.expand_files.call(null,inst_32924);
var state_33001__$1 = state_33001;
var statearr_33050_33104 = state_33001__$1;
(statearr_33050_33104[(2)] = inst_32930);

(statearr_33050_33104[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (11))){
var state_33001__$1 = state_33001;
var statearr_33051_33105 = state_33001__$1;
(statearr_33051_33105[(2)] = null);

(statearr_33051_33105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (9))){
var inst_32913 = (state_33001[(2)]);
var state_33001__$1 = state_33001;
var statearr_33052_33106 = state_33001__$1;
(statearr_33052_33106[(2)] = inst_32913);

(statearr_33052_33106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (5))){
var inst_32883 = (state_33001[(9)]);
var inst_32884 = (state_33001[(10)]);
var inst_32886 = (inst_32884 < inst_32883);
var inst_32887 = inst_32886;
var state_33001__$1 = state_33001;
if(cljs.core.truth_(inst_32887)){
var statearr_33053_33107 = state_33001__$1;
(statearr_33053_33107[(1)] = (7));

} else {
var statearr_33054_33108 = state_33001__$1;
(statearr_33054_33108[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (14))){
var inst_32894 = (state_33001[(20)]);
var inst_32903 = cljs.core.first.call(null,inst_32894);
var inst_32904 = figwheel.client.file_reloading.eval_body.call(null,inst_32903,opts);
var inst_32905 = cljs.core.next.call(null,inst_32894);
var inst_32881 = inst_32905;
var inst_32882 = null;
var inst_32883 = (0);
var inst_32884 = (0);
var state_33001__$1 = (function (){var statearr_33055 = state_33001;
(statearr_33055[(7)] = inst_32882);

(statearr_33055[(8)] = inst_32881);

(statearr_33055[(31)] = inst_32904);

(statearr_33055[(9)] = inst_32883);

(statearr_33055[(10)] = inst_32884);

return statearr_33055;
})();
var statearr_33056_33109 = state_33001__$1;
(statearr_33056_33109[(2)] = null);

(statearr_33056_33109[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (26))){
var inst_32938 = (state_33001[(21)]);
var inst_32942 = (state_33001[(22)]);
var inst_32937 = (state_33001[(23)]);
var inst_32940 = (state_33001[(24)]);
var inst_32934 = (state_33001[(18)]);
var inst_32957 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32959 = (function (){var all_files = inst_32934;
var res_SINGLEQUOTE_ = inst_32937;
var res = inst_32938;
var files_not_loaded = inst_32940;
var dependencies_that_loaded = inst_32942;
return (function (p__32958){
var map__33057 = p__32958;
var map__33057__$1 = cljs.core.__destructure_map.call(null,map__33057);
var namespace = cljs.core.get.call(null,map__33057__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33057__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_32960 = cljs.core.map.call(null,inst_32959,inst_32938);
var inst_32961 = cljs.core.pr_str.call(null,inst_32960);
var inst_32962 = figwheel.client.utils.log.call(null,inst_32961);
var inst_32963 = (function (){var all_files = inst_32934;
var res_SINGLEQUOTE_ = inst_32937;
var res = inst_32938;
var files_not_loaded = inst_32940;
var dependencies_that_loaded = inst_32942;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_32964 = setTimeout(inst_32963,(10));
var state_33001__$1 = (function (){var statearr_33058 = state_33001;
(statearr_33058[(32)] = inst_32957);

(statearr_33058[(33)] = inst_32962);

return statearr_33058;
})();
var statearr_33059_33110 = state_33001__$1;
(statearr_33059_33110[(2)] = inst_32964);

(statearr_33059_33110[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (16))){
var state_33001__$1 = state_33001;
var statearr_33060_33111 = state_33001__$1;
(statearr_33060_33111[(2)] = reload_dependents);

(statearr_33060_33111[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (30))){
var state_33001__$1 = state_33001;
var statearr_33061_33112 = state_33001__$1;
(statearr_33061_33112[(2)] = null);

(statearr_33061_33112[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (10))){
var inst_32894 = (state_33001[(20)]);
var inst_32896 = cljs.core.chunked_seq_QMARK_.call(null,inst_32894);
var state_33001__$1 = state_33001;
if(inst_32896){
var statearr_33062_33113 = state_33001__$1;
(statearr_33062_33113[(1)] = (13));

} else {
var statearr_33063_33114 = state_33001__$1;
(statearr_33063_33114[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (18))){
var inst_32928 = (state_33001[(2)]);
var state_33001__$1 = state_33001;
if(cljs.core.truth_(inst_32928)){
var statearr_33064_33115 = state_33001__$1;
(statearr_33064_33115[(1)] = (19));

} else {
var statearr_33065_33116 = state_33001__$1;
(statearr_33065_33116[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (37))){
var inst_32996 = (state_33001[(2)]);
var state_33001__$1 = state_33001;
var statearr_33066_33117 = state_33001__$1;
(statearr_33066_33117[(2)] = inst_32996);

(statearr_33066_33117[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (8))){
var inst_32881 = (state_33001[(8)]);
var inst_32894 = (state_33001[(20)]);
var inst_32894__$1 = cljs.core.seq.call(null,inst_32881);
var state_33001__$1 = (function (){var statearr_33067 = state_33001;
(statearr_33067[(20)] = inst_32894__$1);

return statearr_33067;
})();
if(inst_32894__$1){
var statearr_33068_33118 = state_33001__$1;
(statearr_33068_33118[(1)] = (10));

} else {
var statearr_33069_33119 = state_33001__$1;
(statearr_33069_33119[(1)] = (11));

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
var statearr_33070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33070[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto__);

(statearr_33070[(1)] = (1));

return statearr_33070;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto____1 = (function (state_33001){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_33001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e33071){if((e33071 instanceof Object)){
var ex__24854__auto__ = e33071;
var statearr_33072_33120 = state_33001;
(statearr_33072_33120[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33121 = state_33001;
state_33001 = G__33121;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto__ = function(state_33001){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto____1.call(this,state_33001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_33073 = f__24948__auto__.call(null);
(statearr_33073[(6)] = c__24947__auto__);

return statearr_33073;
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
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33124,link){
var map__33125 = p__33124;
var map__33125__$1 = cljs.core.__destructure_map.call(null,map__33125);
var file = cljs.core.get.call(null,map__33125__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5804__auto__ = link.href;
if(cljs.core.truth_(temp__5804__auto__)){
var link_href = temp__5804__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__33122_SHARP_,p2__33123_SHARP_){
if(cljs.core._EQ_.call(null,p1__33122_SHARP_,p2__33123_SHARP_)){
return p1__33122_SHARP_;
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
var temp__5804__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33127){
var map__33128 = p__33127;
var map__33128__$1 = cljs.core.__destructure_map.call(null,map__33128);
var match_length = cljs.core.get.call(null,map__33128__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33128__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33126_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33126_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33129_SHARP_,p2__33130_SHARP_){
return cljs.core.assoc.call(null,p1__33129_SHARP_,cljs.core.get.call(null,p2__33130_SHARP_,key),p2__33130_SHARP_);
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
var loaded_f_datas_33131 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33131);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33131);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33132,p__33133){
var map__33134 = p__33132;
var map__33134__$1 = cljs.core.__destructure_map.call(null,map__33134);
var on_cssload = cljs.core.get.call(null,map__33134__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33135 = p__33133;
var map__33135__$1 = cljs.core.__destructure_map.call(null,map__33135);
var files_msg = map__33135__$1;
var files = cljs.core.get.call(null,map__33135__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1654704962401
