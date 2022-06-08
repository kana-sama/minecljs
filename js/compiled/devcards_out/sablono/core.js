// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('react');
sablono.core.global$module$react = goog.global["React"];
/**
 * The React.js create element function.
 */
sablono.core.create_element = sablono.core.global$module$react.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = sablono.core.global$module$react.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__28557__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__28554 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__28555 = cljs.core.seq.call(null,vec__28554);
var first__28556 = cljs.core.first.call(null,seq__28555);
var seq__28555__$1 = cljs.core.next.call(null,seq__28555);
var tag = first__28556;
var body = seq__28555__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__28557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28558__i = 0, G__28558__a = new Array(arguments.length -  0);
while (G__28558__i < G__28558__a.length) {G__28558__a[G__28558__i] = arguments[G__28558__i + 0]; ++G__28558__i;}
  args = new cljs.core.IndexedSeq(G__28558__a,0,null);
} 
return G__28557__delegate.call(this,args);};
G__28557.cljs$lang$maxFixedArity = 0;
G__28557.cljs$lang$applyTo = (function (arglist__28559){
var args = cljs.core.seq(arglist__28559);
return G__28557__delegate(args);
});
G__28557.cljs$core$IFn$_invoke$arity$variadic = G__28557__delegate;
return G__28557;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5520__auto__ = (function sablono$core$update_arglists_$_iter__28560(s__28561){
return (new cljs.core.LazySeq(null,(function (){
var s__28561__$1 = s__28561;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__28561__$1);
if(temp__5804__auto__){
var s__28561__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28561__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__28561__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__28563 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__28562 = (0);
while(true){
if((i__28562 < size__5519__auto__)){
var args = cljs.core._nth.call(null,c__5518__auto__,i__28562);
cljs.core.chunk_append.call(null,b__28563,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28564 = (i__28562 + (1));
i__28562 = G__28564;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28563),sablono$core$update_arglists_$_iter__28560.call(null,cljs.core.chunk_rest.call(null,s__28561__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28563),null);
}
} else {
var args = cljs.core.first.call(null,s__28561__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__28560.call(null,cljs.core.rest.call(null,s__28561__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28570 = arguments.length;
var i__5767__auto___28571 = (0);
while(true){
if((i__5767__auto___28571 < len__5766__auto___28570)){
args__5772__auto__.push((arguments[i__5767__auto___28571]));

var G__28572 = (i__5767__auto___28571 + (1));
i__5767__auto___28571 = G__28572;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5520__auto__ = (function sablono$core$iter__28566(s__28567){
return (new cljs.core.LazySeq(null,(function (){
var s__28567__$1 = s__28567;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__28567__$1);
if(temp__5804__auto__){
var s__28567__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28567__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__28567__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__28569 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__28568 = (0);
while(true){
if((i__28568 < size__5519__auto__)){
var style = cljs.core._nth.call(null,c__5518__auto__,i__28568);
cljs.core.chunk_append.call(null,b__28569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28573 = (i__28568 + (1));
i__28568 = G__28573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28569),sablono$core$iter__28566.call(null,cljs.core.chunk_rest.call(null,s__28567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28569),null);
}
} else {
var style = cljs.core.first.call(null,s__28567__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__28566.call(null,cljs.core.rest.call(null,s__28567__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq28565){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28565));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to28574 = (function sablono$core$link_to28574(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28577 = arguments.length;
var i__5767__auto___28578 = (0);
while(true){
if((i__5767__auto___28578 < len__5766__auto___28577)){
args__5772__auto__.push((arguments[i__5767__auto___28578]));

var G__28579 = (i__5767__auto___28578 + (1));
i__5767__auto___28578 = G__28579;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28574.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sablono.core.link_to28574.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to28574.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to28574.cljs$lang$applyTo = (function (seq28575){
var G__28576 = cljs.core.first.call(null,seq28575);
var seq28575__$1 = cljs.core.next.call(null,seq28575);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28576,seq28575__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28574);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28580 = (function sablono$core$mail_to28580(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28587 = arguments.length;
var i__5767__auto___28588 = (0);
while(true){
if((i__5767__auto___28588 < len__5766__auto___28587)){
args__5772__auto__.push((arguments[i__5767__auto___28588]));

var G__28589 = (i__5767__auto___28588 + (1));
i__5767__auto___28588 = G__28589;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28580.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sablono.core.mail_to28580.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28583){
var vec__28584 = p__28583;
var content = cljs.core.nth.call(null,vec__28584,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to28580.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to28580.cljs$lang$applyTo = (function (seq28581){
var G__28582 = cljs.core.first.call(null,seq28581);
var seq28581__$1 = cljs.core.next.call(null,seq28581);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28582,seq28581__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28580);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28590 = (function sablono$core$unordered_list28590(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5520__auto__ = (function sablono$core$unordered_list28590_$_iter__28591(s__28592){
return (new cljs.core.LazySeq(null,(function (){
var s__28592__$1 = s__28592;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__28592__$1);
if(temp__5804__auto__){
var s__28592__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28592__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__28592__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__28594 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__28593 = (0);
while(true){
if((i__28593 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__28593);
cljs.core.chunk_append.call(null,b__28594,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28595 = (i__28593 + (1));
i__28593 = G__28595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28594),sablono$core$unordered_list28590_$_iter__28591.call(null,cljs.core.chunk_rest.call(null,s__28592__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28594),null);
}
} else {
var x = cljs.core.first.call(null,s__28592__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list28590_$_iter__28591.call(null,cljs.core.rest.call(null,s__28592__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28590);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28596 = (function sablono$core$ordered_list28596(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5520__auto__ = (function sablono$core$ordered_list28596_$_iter__28597(s__28598){
return (new cljs.core.LazySeq(null,(function (){
var s__28598__$1 = s__28598;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__28598__$1);
if(temp__5804__auto__){
var s__28598__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28598__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__28598__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__28600 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__28599 = (0);
while(true){
if((i__28599 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__28599);
cljs.core.chunk_append.call(null,b__28600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28601 = (i__28599 + (1));
i__28599 = G__28601;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28600),sablono$core$ordered_list28596_$_iter__28597.call(null,cljs.core.chunk_rest.call(null,s__28598__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28600),null);
}
} else {
var x = cljs.core.first.call(null,s__28598__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list28596_$_iter__28597.call(null,cljs.core.rest.call(null,s__28598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28596);
/**
 * Create an image element.
 */
sablono.core.image28602 = (function sablono$core$image28602(var_args){
var G__28604 = arguments.length;
switch (G__28604) {
case 1:
return sablono.core.image28602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image28602.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image28602.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image28602.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28602);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__28606_SHARP_,p2__28607_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28606_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28607_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__28608_SHARP_,p2__28609_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28608_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28609_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__28611 = arguments.length;
switch (G__28611) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5043__auto__ = value;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field28613 = (function sablono$core$color_field28613(var_args){
var G__28615 = arguments.length;
switch (G__28615) {
case 1:
return sablono.core.color_field28613.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field28613.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__28544__auto__);
}));

(sablono.core.color_field28613.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.color_field28613.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28613);

/**
 * Creates a date input field.
 */
sablono.core.date_field28616 = (function sablono$core$date_field28616(var_args){
var G__28618 = arguments.length;
switch (G__28618) {
case 1:
return sablono.core.date_field28616.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28616.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field28616.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__28544__auto__);
}));

(sablono.core.date_field28616.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.date_field28616.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28616);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28619 = (function sablono$core$datetime_field28619(var_args){
var G__28621 = arguments.length;
switch (G__28621) {
case 1:
return sablono.core.datetime_field28619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field28619.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__28544__auto__);
}));

(sablono.core.datetime_field28619.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.datetime_field28619.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28619);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28622 = (function sablono$core$datetime_local_field28622(var_args){
var G__28624 = arguments.length;
switch (G__28624) {
case 1:
return sablono.core.datetime_local_field28622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field28622.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__28544__auto__);
}));

(sablono.core.datetime_local_field28622.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.datetime_local_field28622.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28622);

/**
 * Creates a email input field.
 */
sablono.core.email_field28625 = (function sablono$core$email_field28625(var_args){
var G__28627 = arguments.length;
switch (G__28627) {
case 1:
return sablono.core.email_field28625.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28625.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field28625.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__28544__auto__);
}));

(sablono.core.email_field28625.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.email_field28625.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28625);

/**
 * Creates a file input field.
 */
sablono.core.file_field28628 = (function sablono$core$file_field28628(var_args){
var G__28630 = arguments.length;
switch (G__28630) {
case 1:
return sablono.core.file_field28628.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28628.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field28628.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__28544__auto__);
}));

(sablono.core.file_field28628.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.file_field28628.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28628);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28631 = (function sablono$core$hidden_field28631(var_args){
var G__28633 = arguments.length;
switch (G__28633) {
case 1:
return sablono.core.hidden_field28631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field28631.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__28544__auto__);
}));

(sablono.core.hidden_field28631.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.hidden_field28631.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28631);

/**
 * Creates a month input field.
 */
sablono.core.month_field28634 = (function sablono$core$month_field28634(var_args){
var G__28636 = arguments.length;
switch (G__28636) {
case 1:
return sablono.core.month_field28634.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28634.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field28634.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__28544__auto__);
}));

(sablono.core.month_field28634.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.month_field28634.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28634);

/**
 * Creates a number input field.
 */
sablono.core.number_field28637 = (function sablono$core$number_field28637(var_args){
var G__28639 = arguments.length;
switch (G__28639) {
case 1:
return sablono.core.number_field28637.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28637.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field28637.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__28544__auto__);
}));

(sablono.core.number_field28637.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.number_field28637.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28637);

/**
 * Creates a password input field.
 */
sablono.core.password_field28640 = (function sablono$core$password_field28640(var_args){
var G__28642 = arguments.length;
switch (G__28642) {
case 1:
return sablono.core.password_field28640.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28640.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field28640.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__28544__auto__);
}));

(sablono.core.password_field28640.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.password_field28640.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28640);

/**
 * Creates a range input field.
 */
sablono.core.range_field28643 = (function sablono$core$range_field28643(var_args){
var G__28645 = arguments.length;
switch (G__28645) {
case 1:
return sablono.core.range_field28643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field28643.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__28544__auto__);
}));

(sablono.core.range_field28643.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.range_field28643.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28643);

/**
 * Creates a search input field.
 */
sablono.core.search_field28646 = (function sablono$core$search_field28646(var_args){
var G__28648 = arguments.length;
switch (G__28648) {
case 1:
return sablono.core.search_field28646.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28646.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field28646.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__28544__auto__);
}));

(sablono.core.search_field28646.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.search_field28646.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28646);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28649 = (function sablono$core$tel_field28649(var_args){
var G__28651 = arguments.length;
switch (G__28651) {
case 1:
return sablono.core.tel_field28649.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28649.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field28649.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__28544__auto__);
}));

(sablono.core.tel_field28649.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.tel_field28649.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28649);

/**
 * Creates a text input field.
 */
sablono.core.text_field28652 = (function sablono$core$text_field28652(var_args){
var G__28654 = arguments.length;
switch (G__28654) {
case 1:
return sablono.core.text_field28652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field28652.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__28544__auto__);
}));

(sablono.core.text_field28652.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.text_field28652.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28652);

/**
 * Creates a time input field.
 */
sablono.core.time_field28655 = (function sablono$core$time_field28655(var_args){
var G__28657 = arguments.length;
switch (G__28657) {
case 1:
return sablono.core.time_field28655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field28655.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__28544__auto__);
}));

(sablono.core.time_field28655.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.time_field28655.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28655);

/**
 * Creates a url input field.
 */
sablono.core.url_field28658 = (function sablono$core$url_field28658(var_args){
var G__28660 = arguments.length;
switch (G__28660) {
case 1:
return sablono.core.url_field28658.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28658.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field28658.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__28544__auto__);
}));

(sablono.core.url_field28658.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.url_field28658.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28658);

/**
 * Creates a week input field.
 */
sablono.core.week_field28661 = (function sablono$core$week_field28661(var_args){
var G__28663 = arguments.length;
switch (G__28663) {
case 1:
return sablono.core.week_field28661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field28661.cljs$core$IFn$_invoke$arity$1 = (function (name__28544__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__28544__auto__);
}));

(sablono.core.week_field28661.cljs$core$IFn$_invoke$arity$2 = (function (name__28544__auto__,value__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__28544__auto__,value__28545__auto__);
}));

(sablono.core.week_field28661.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28661);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28681 = (function sablono$core$check_box28681(var_args){
var G__28683 = arguments.length;
switch (G__28683) {
case 1:
return sablono.core.check_box28681.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28681.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28681.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box28681.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box28681.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box28681.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box28681.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28681);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28685 = (function sablono$core$radio_button28685(var_args){
var G__28687 = arguments.length;
switch (G__28687) {
case 1:
return sablono.core.radio_button28685.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28685.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28685.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button28685.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button28685.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button28685.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button28685.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28685);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28689 = (function sablono$core$select_options28689(coll){
var iter__5520__auto__ = (function sablono$core$select_options28689_$_iter__28690(s__28691){
return (new cljs.core.LazySeq(null,(function (){
var s__28691__$1 = s__28691;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__28691__$1);
if(temp__5804__auto__){
var s__28691__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28691__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__28691__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__28693 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__28692 = (0);
while(true){
if((i__28692 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__28692);
cljs.core.chunk_append.call(null,b__28693,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28694 = x;
var text = cljs.core.nth.call(null,vec__28694,(0),null);
var val = cljs.core.nth.call(null,vec__28694,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28694,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options28689.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28700 = (i__28692 + (1));
i__28692 = G__28700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28693),sablono$core$select_options28689_$_iter__28690.call(null,cljs.core.chunk_rest.call(null,s__28691__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28693),null);
}
} else {
var x = cljs.core.first.call(null,s__28691__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28697 = x;
var text = cljs.core.nth.call(null,vec__28697,(0),null);
var val = cljs.core.nth.call(null,vec__28697,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28697,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options28689.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28689_$_iter__28690.call(null,cljs.core.rest.call(null,s__28691__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28689);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28701 = (function sablono$core$drop_down28701(var_args){
var G__28703 = arguments.length;
switch (G__28703) {
case 2:
return sablono.core.drop_down28701.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28701.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down28701.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28701.call(null,name,options,null);
}));

(sablono.core.drop_down28701.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down28701.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28701);
/**
 * Creates a text area element.
 */
sablono.core.text_area28705 = (function sablono$core$text_area28705(var_args){
var G__28707 = arguments.length;
switch (G__28707) {
case 1:
return sablono.core.text_area28705.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28705.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area28705.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area28705.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5043__auto__ = value;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area28705.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28705);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28709 = (function sablono$core$label28709(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28709);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28710 = (function sablono$core$submit_button28710(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28710);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28711 = (function sablono$core$reset_button28711(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28711);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28712 = (function sablono$core$form_to28712(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28719 = arguments.length;
var i__5767__auto___28720 = (0);
while(true){
if((i__5767__auto___28720 < len__5766__auto___28719)){
args__5772__auto__.push((arguments[i__5767__auto___28720]));

var G__28721 = (i__5767__auto___28720 + (1));
i__5767__auto___28720 = G__28721;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28712.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sablono.core.form_to28712.cljs$core$IFn$_invoke$arity$variadic = (function (p__28715,body){
var vec__28716 = p__28715;
var method = cljs.core.nth.call(null,vec__28716,(0),null);
var action = cljs.core.nth.call(null,vec__28716,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to28712.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to28712.cljs$lang$applyTo = (function (seq28713){
var G__28714 = cljs.core.first.call(null,seq28713);
var seq28713__$1 = cljs.core.next.call(null,seq28713);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28714,seq28713__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28712);

//# sourceMappingURL=core.js.map?rel=1654516651760
