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
var G__28558__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__28555 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__28556 = cljs.core.seq.call(null,vec__28555);
var first__28557 = cljs.core.first.call(null,seq__28556);
var seq__28556__$1 = cljs.core.next.call(null,seq__28556);
var tag = first__28557;
var body = seq__28556__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__28558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28559__i = 0, G__28559__a = new Array(arguments.length -  0);
while (G__28559__i < G__28559__a.length) {G__28559__a[G__28559__i] = arguments[G__28559__i + 0]; ++G__28559__i;}
  args = new cljs.core.IndexedSeq(G__28559__a,0,null);
} 
return G__28558__delegate.call(this,args);};
G__28558.cljs$lang$maxFixedArity = 0;
G__28558.cljs$lang$applyTo = (function (arglist__28560){
var args = cljs.core.seq(arglist__28560);
return G__28558__delegate(args);
});
G__28558.cljs$core$IFn$_invoke$arity$variadic = G__28558__delegate;
return G__28558;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5520__auto__ = (function sablono$core$update_arglists_$_iter__28561(s__28562){
return (new cljs.core.LazySeq(null,(function (){
var s__28562__$1 = s__28562;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__28562__$1);
if(temp__5804__auto__){
var s__28562__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28562__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__28562__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__28564 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__28563 = (0);
while(true){
if((i__28563 < size__5519__auto__)){
var args = cljs.core._nth.call(null,c__5518__auto__,i__28563);
cljs.core.chunk_append.call(null,b__28564,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28565 = (i__28563 + (1));
i__28563 = G__28565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28564),sablono$core$update_arglists_$_iter__28561.call(null,cljs.core.chunk_rest.call(null,s__28562__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28564),null);
}
} else {
var args = cljs.core.first.call(null,s__28562__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__28561.call(null,cljs.core.rest.call(null,s__28562__$2)));
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
var len__5766__auto___28571 = arguments.length;
var i__5767__auto___28572 = (0);
while(true){
if((i__5767__auto___28572 < len__5766__auto___28571)){
args__5772__auto__.push((arguments[i__5767__auto___28572]));

var G__28573 = (i__5767__auto___28572 + (1));
i__5767__auto___28572 = G__28573;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5520__auto__ = (function sablono$core$iter__28567(s__28568){
return (new cljs.core.LazySeq(null,(function (){
var s__28568__$1 = s__28568;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__28568__$1);
if(temp__5804__auto__){
var s__28568__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28568__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__28568__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__28570 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__28569 = (0);
while(true){
if((i__28569 < size__5519__auto__)){
var style = cljs.core._nth.call(null,c__5518__auto__,i__28569);
cljs.core.chunk_append.call(null,b__28570,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28574 = (i__28569 + (1));
i__28569 = G__28574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28570),sablono$core$iter__28567.call(null,cljs.core.chunk_rest.call(null,s__28568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28570),null);
}
} else {
var style = cljs.core.first.call(null,s__28568__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__28567.call(null,cljs.core.rest.call(null,s__28568__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq28566){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28566));
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
sablono.core.link_to28575 = (function sablono$core$link_to28575(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28578 = arguments.length;
var i__5767__auto___28579 = (0);
while(true){
if((i__5767__auto___28579 < len__5766__auto___28578)){
args__5772__auto__.push((arguments[i__5767__auto___28579]));

var G__28580 = (i__5767__auto___28579 + (1));
i__5767__auto___28579 = G__28580;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28575.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sablono.core.link_to28575.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
}));

(sablono.core.link_to28575.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to28575.cljs$lang$applyTo = (function (seq28576){
var G__28577 = cljs.core.first.call(null,seq28576);
var seq28576__$1 = cljs.core.next.call(null,seq28576);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28577,seq28576__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28575);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28581 = (function sablono$core$mail_to28581(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28588 = arguments.length;
var i__5767__auto___28589 = (0);
while(true){
if((i__5767__auto___28589 < len__5766__auto___28588)){
args__5772__auto__.push((arguments[i__5767__auto___28589]));

var G__28590 = (i__5767__auto___28589 + (1));
i__5767__auto___28589 = G__28590;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28581.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sablono.core.mail_to28581.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28584){
var vec__28585 = p__28584;
var content = cljs.core.nth.call(null,vec__28585,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__5043__auto__ = content;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to28581.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to28581.cljs$lang$applyTo = (function (seq28582){
var G__28583 = cljs.core.first.call(null,seq28582);
var seq28582__$1 = cljs.core.next.call(null,seq28582);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28583,seq28582__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28581);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28591 = (function sablono$core$unordered_list28591(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5520__auto__ = (function sablono$core$unordered_list28591_$_iter__28592(s__28593){
return (new cljs.core.LazySeq(null,(function (){
var s__28593__$1 = s__28593;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__28593__$1);
if(temp__5804__auto__){
var s__28593__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28593__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__28593__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__28595 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__28594 = (0);
while(true){
if((i__28594 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__28594);
cljs.core.chunk_append.call(null,b__28595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28596 = (i__28594 + (1));
i__28594 = G__28596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28595),sablono$core$unordered_list28591_$_iter__28592.call(null,cljs.core.chunk_rest.call(null,s__28593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28595),null);
}
} else {
var x = cljs.core.first.call(null,s__28593__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list28591_$_iter__28592.call(null,cljs.core.rest.call(null,s__28593__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28591);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28597 = (function sablono$core$ordered_list28597(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5520__auto__ = (function sablono$core$ordered_list28597_$_iter__28598(s__28599){
return (new cljs.core.LazySeq(null,(function (){
var s__28599__$1 = s__28599;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__28599__$1);
if(temp__5804__auto__){
var s__28599__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28599__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__28599__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__28601 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__28600 = (0);
while(true){
if((i__28600 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__28600);
cljs.core.chunk_append.call(null,b__28601,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28602 = (i__28600 + (1));
i__28600 = G__28602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28601),sablono$core$ordered_list28597_$_iter__28598.call(null,cljs.core.chunk_rest.call(null,s__28599__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28601),null);
}
} else {
var x = cljs.core.first.call(null,s__28599__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list28597_$_iter__28598.call(null,cljs.core.rest.call(null,s__28599__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28597);
/**
 * Create an image element.
 */
sablono.core.image28603 = (function sablono$core$image28603(var_args){
var G__28605 = arguments.length;
switch (G__28605) {
case 1:
return sablono.core.image28603.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28603.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image28603.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
}));

(sablono.core.image28603.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image28603.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28603);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__28607_SHARP_,p2__28608_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28607_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28608_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__28609_SHARP_,p2__28610_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28609_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28610_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__28612 = arguments.length;
switch (G__28612) {
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
sablono.core.color_field28614 = (function sablono$core$color_field28614(var_args){
var G__28616 = arguments.length;
switch (G__28616) {
case 1:
return sablono.core.color_field28614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field28614.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__28545__auto__);
}));

(sablono.core.color_field28614.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.color_field28614.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28614);

/**
 * Creates a date input field.
 */
sablono.core.date_field28617 = (function sablono$core$date_field28617(var_args){
var G__28619 = arguments.length;
switch (G__28619) {
case 1:
return sablono.core.date_field28617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field28617.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__28545__auto__);
}));

(sablono.core.date_field28617.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.date_field28617.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28617);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28620 = (function sablono$core$datetime_field28620(var_args){
var G__28622 = arguments.length;
switch (G__28622) {
case 1:
return sablono.core.datetime_field28620.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28620.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field28620.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__28545__auto__);
}));

(sablono.core.datetime_field28620.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.datetime_field28620.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28620);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28623 = (function sablono$core$datetime_local_field28623(var_args){
var G__28625 = arguments.length;
switch (G__28625) {
case 1:
return sablono.core.datetime_local_field28623.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28623.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field28623.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__28545__auto__);
}));

(sablono.core.datetime_local_field28623.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.datetime_local_field28623.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28623);

/**
 * Creates a email input field.
 */
sablono.core.email_field28626 = (function sablono$core$email_field28626(var_args){
var G__28628 = arguments.length;
switch (G__28628) {
case 1:
return sablono.core.email_field28626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field28626.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__28545__auto__);
}));

(sablono.core.email_field28626.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.email_field28626.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28626);

/**
 * Creates a file input field.
 */
sablono.core.file_field28629 = (function sablono$core$file_field28629(var_args){
var G__28631 = arguments.length;
switch (G__28631) {
case 1:
return sablono.core.file_field28629.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28629.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field28629.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__28545__auto__);
}));

(sablono.core.file_field28629.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.file_field28629.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28629);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28632 = (function sablono$core$hidden_field28632(var_args){
var G__28634 = arguments.length;
switch (G__28634) {
case 1:
return sablono.core.hidden_field28632.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28632.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field28632.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__28545__auto__);
}));

(sablono.core.hidden_field28632.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.hidden_field28632.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28632);

/**
 * Creates a month input field.
 */
sablono.core.month_field28635 = (function sablono$core$month_field28635(var_args){
var G__28637 = arguments.length;
switch (G__28637) {
case 1:
return sablono.core.month_field28635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field28635.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__28545__auto__);
}));

(sablono.core.month_field28635.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.month_field28635.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28635);

/**
 * Creates a number input field.
 */
sablono.core.number_field28638 = (function sablono$core$number_field28638(var_args){
var G__28640 = arguments.length;
switch (G__28640) {
case 1:
return sablono.core.number_field28638.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28638.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field28638.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__28545__auto__);
}));

(sablono.core.number_field28638.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.number_field28638.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28638);

/**
 * Creates a password input field.
 */
sablono.core.password_field28641 = (function sablono$core$password_field28641(var_args){
var G__28643 = arguments.length;
switch (G__28643) {
case 1:
return sablono.core.password_field28641.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28641.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field28641.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__28545__auto__);
}));

(sablono.core.password_field28641.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.password_field28641.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28641);

/**
 * Creates a range input field.
 */
sablono.core.range_field28644 = (function sablono$core$range_field28644(var_args){
var G__28646 = arguments.length;
switch (G__28646) {
case 1:
return sablono.core.range_field28644.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field28644.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__28545__auto__);
}));

(sablono.core.range_field28644.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.range_field28644.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28644);

/**
 * Creates a search input field.
 */
sablono.core.search_field28647 = (function sablono$core$search_field28647(var_args){
var G__28649 = arguments.length;
switch (G__28649) {
case 1:
return sablono.core.search_field28647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field28647.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__28545__auto__);
}));

(sablono.core.search_field28647.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.search_field28647.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28647);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28650 = (function sablono$core$tel_field28650(var_args){
var G__28652 = arguments.length;
switch (G__28652) {
case 1:
return sablono.core.tel_field28650.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28650.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field28650.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__28545__auto__);
}));

(sablono.core.tel_field28650.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.tel_field28650.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28650);

/**
 * Creates a text input field.
 */
sablono.core.text_field28653 = (function sablono$core$text_field28653(var_args){
var G__28655 = arguments.length;
switch (G__28655) {
case 1:
return sablono.core.text_field28653.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28653.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field28653.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__28545__auto__);
}));

(sablono.core.text_field28653.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.text_field28653.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28653);

/**
 * Creates a time input field.
 */
sablono.core.time_field28656 = (function sablono$core$time_field28656(var_args){
var G__28658 = arguments.length;
switch (G__28658) {
case 1:
return sablono.core.time_field28656.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28656.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field28656.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__28545__auto__);
}));

(sablono.core.time_field28656.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.time_field28656.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28656);

/**
 * Creates a url input field.
 */
sablono.core.url_field28659 = (function sablono$core$url_field28659(var_args){
var G__28661 = arguments.length;
switch (G__28661) {
case 1:
return sablono.core.url_field28659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field28659.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__28545__auto__);
}));

(sablono.core.url_field28659.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.url_field28659.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28659);

/**
 * Creates a week input field.
 */
sablono.core.week_field28662 = (function sablono$core$week_field28662(var_args){
var G__28664 = arguments.length;
switch (G__28664) {
case 1:
return sablono.core.week_field28662.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28662.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field28662.cljs$core$IFn$_invoke$arity$1 = (function (name__28545__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__28545__auto__);
}));

(sablono.core.week_field28662.cljs$core$IFn$_invoke$arity$2 = (function (name__28545__auto__,value__28546__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__28545__auto__,value__28546__auto__);
}));

(sablono.core.week_field28662.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28662);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28682 = (function sablono$core$check_box28682(var_args){
var G__28684 = arguments.length;
switch (G__28684) {
case 1:
return sablono.core.check_box28682.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28682.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28682.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box28682.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.check_box28682.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box28682.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box28682.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28682);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28686 = (function sablono$core$radio_button28686(var_args){
var G__28688 = arguments.length;
switch (G__28688) {
case 1:
return sablono.core.radio_button28686.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28686.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28686.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button28686.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
}));

(sablono.core.radio_button28686.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button28686.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[sablono.util.as_str.call(null,group),"-",sablono.util.as_str.call(null,value)].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button28686.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28686);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28690 = (function sablono$core$select_options28690(coll){
var iter__5520__auto__ = (function sablono$core$select_options28690_$_iter__28691(s__28692){
return (new cljs.core.LazySeq(null,(function (){
var s__28692__$1 = s__28692;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__28692__$1);
if(temp__5804__auto__){
var s__28692__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28692__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__28692__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__28694 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__28693 = (0);
while(true){
if((i__28693 < size__5519__auto__)){
var x = cljs.core._nth.call(null,c__5518__auto__,i__28693);
cljs.core.chunk_append.call(null,b__28694,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28695 = x;
var text = cljs.core.nth.call(null,vec__28695,(0),null);
var val = cljs.core.nth.call(null,vec__28695,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28695,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options28690.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28701 = (i__28693 + (1));
i__28693 = G__28701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28694),sablono$core$select_options28690_$_iter__28691.call(null,cljs.core.chunk_rest.call(null,s__28692__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28694),null);
}
} else {
var x = cljs.core.first.call(null,s__28692__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28698 = x;
var text = cljs.core.nth.call(null,vec__28698,(0),null);
var val = cljs.core.nth.call(null,vec__28698,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28698,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options28690.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28690_$_iter__28691.call(null,cljs.core.rest.call(null,s__28692__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28690);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28702 = (function sablono$core$drop_down28702(var_args){
var G__28704 = arguments.length;
switch (G__28704) {
case 2:
return sablono.core.drop_down28702.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28702.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down28702.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28702.call(null,name,options,null);
}));

(sablono.core.drop_down28702.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
}));

(sablono.core.drop_down28702.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28702);
/**
 * Creates a text area element.
 */
sablono.core.text_area28706 = (function sablono$core$text_area28706(var_args){
var G__28708 = arguments.length;
switch (G__28708) {
case 1:
return sablono.core.text_area28706.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28706.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area28706.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
}));

(sablono.core.text_area28706.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5043__auto__ = value;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area28706.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28706);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28710 = (function sablono$core$label28710(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28710);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28711 = (function sablono$core$submit_button28711(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28711);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28712 = (function sablono$core$reset_button28712(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28712);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28713 = (function sablono$core$form_to28713(var_args){
var args__5772__auto__ = [];
var len__5766__auto___28720 = arguments.length;
var i__5767__auto___28721 = (0);
while(true){
if((i__5767__auto___28721 < len__5766__auto___28720)){
args__5772__auto__.push((arguments[i__5767__auto___28721]));

var G__28722 = (i__5767__auto___28721 + (1));
i__5767__auto___28721 = G__28722;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28713.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(sablono.core.form_to28713.cljs$core$IFn$_invoke$arity$variadic = (function (p__28716,body){
var vec__28717 = p__28716;
var method = cljs.core.nth.call(null,vec__28717,(0),null);
var action = cljs.core.nth.call(null,vec__28717,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to28713.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to28713.cljs$lang$applyTo = (function (seq28714){
var G__28715 = cljs.core.first.call(null,seq28714);
var seq28714__$1 = cljs.core.next.call(null,seq28714);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28715,seq28714__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28713);

//# sourceMappingURL=core.js.map?rel=1654704959090
