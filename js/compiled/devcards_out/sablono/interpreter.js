// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('react');
goog.require('react_dom');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('goog.object');
goog.scope(function(){
sablono.interpreter.goog$module$goog$object = goog.module.get('goog.object');
});
sablono.interpreter.global$module$react = goog.global["React"];
sablono.interpreter.global$module$react_dom = goog.global["ReactDOM"];

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

var sablono$interpreter$IInterpreter$interpret$dyn_26921 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$);
} else {
var m__5389__auto__ = (sablono.interpreter.interpret["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpreter.interpret",this$);
}
}
});
/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((((!((this$ == null)))) && ((!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
return sablono$interpreter$IInterpreter$interpret$dyn_26921.call(null,this$);
}
});

/**
 * Updates the state of the wrapped input element.
 */
sablono.interpreter.update_state = (function sablono$interpreter$update_state(component,next_props,property,value){
var on_change = sablono.interpreter.goog$module$goog$object.getValueByKeys.call(null,component,"state","onChange");
var next_state = ({});
sablono.interpreter.goog$module$goog$object.extend.call(null,next_state,next_props,({"onChange": on_change}));

sablono.interpreter.goog$module$goog$object.set.call(null,next_state,property,value);

return component.setState(next_state);
});
sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element,property){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({});
sablono.interpreter.goog$module$goog$object.extend.call(null,state,props,({"onChange": goog.bind(sablono.interpreter.goog$module$goog$object.get.call(null,this$,"onChange"),this$)}));

return state;
})());

return sablono.interpreter.global$module$react.Component.call(this$,props);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,sablono.interpreter.global$module$react.Component);

var x26922_26923 = ctor.prototype;
(x26922_26923.onChange = (function (event){
var this$ = this;
var temp__5804__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5804__auto__)){
var handler = temp__5804__auto__;
handler.call(null,event);

return sablono.interpreter.update_state.call(null,this$,this$.props,property,sablono.interpreter.goog$module$goog$object.getValueByKeys.call(null,event,"target",property));
} else {
return null;
}
}));

(x26922_26923.componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = sablono.interpreter.goog$module$goog$object.getValueByKeys.call(null,this$,"state",property);
var element_value = sablono.interpreter.goog$module$goog$object.get.call(null,sablono.interpreter.global$module$react_dom.findDOMNode(this$),property);
if(cljs.core.not_EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(state_value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(element_value))){
return sablono.interpreter.update_state.call(null,this$,new_props,property,element_value);
} else {
return sablono.interpreter.update_state.call(null,this$,new_props,property,sablono.interpreter.goog$module$goog$object.get.call(null,new_props,property));
}
}));

(x26922_26923.render = (function (){
var this$ = this;
return sablono.interpreter.global$module$react.createElement(element,this$.state);
}));


return ctor;
});
sablono.interpreter.lazy_load_wrappers = (function sablono$interpreter$lazy_load_wrappers(){
if(cljs.core.truth_(sablono.interpreter.wrapped_textarea)){
return null;
} else {
(sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element.call(null,"input","value"));

(sablono.interpreter.wrapped_checked = sablono.interpreter.wrap_form_element.call(null,"input","checked"));

(sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element.call(null,"select","value"));

return (sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element.call(null,"textarea","value"));
}
});
/**
 * Returns true if `type` and `props` are used a controlled input,
 *   otherwise false.
 */
sablono.interpreter.controlled_input_QMARK_ = (function sablono$interpreter$controlled_input_QMARK_(type,props){
var and__5041__auto__ = cljs.core.object_QMARK_.call(null,props);
if(and__5041__auto__){
var G__26924 = type;
switch (G__26924) {
case "input":
return (((!((props.checked == null)))) || ((!((props.value == null)))));

break;
case "select":
return (!((props.value == null)));

break;
case "textarea":
return (!((props.value == null)));

break;
default:
return false;

}
} else {
return and__5041__auto__;
}
});
/**
 * Returns either `type` or a wrapped element for controlled
 *   inputs.
 */
sablono.interpreter.element_class = (function sablono$interpreter$element_class(type,props){
if(sablono.interpreter.controlled_input_QMARK_.call(null,type,props)){
sablono.interpreter.lazy_load_wrappers.call(null);

var G__26926 = type;
switch (G__26926) {
case "input":
var G__26927 = (function (){var and__5041__auto__ = cljs.core.object_QMARK_.call(null,props);
if(and__5041__auto__){
return props.type;
} else {
return and__5041__auto__;
}
})();
switch (G__26927) {
case "radio":
return sablono.interpreter.wrapped_checked;

break;
case "checkbox":
return sablono.interpreter.wrapped_checked;

break;
default:
return sablono.interpreter.wrapped_input;

}

break;
case "select":
return sablono.interpreter.wrapped_select;

break;
case "textarea":
return sablono.interpreter.wrapped_textarea;

break;
default:
return type;

}
} else {
return type;
}
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__5772__auto__ = [];
var len__5766__auto___26933 = arguments.length;
var i__5767__auto___26934 = (0);
while(true){
if((i__5767__auto___26934 < len__5766__auto___26933)){
args__5772__auto__.push((arguments[i__5767__auto___26934]));

var G__26935 = (i__5767__auto___26934 + (1));
i__5767__auto___26934 = G__26935;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
return cljs.core.apply.call(null,sablono.interpreter.global$module$react.createElement,sablono.interpreter.element_class.call(null,type,props),props,children);
}));

(sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq26930){
var G__26931 = cljs.core.first.call(null,seq26930);
var seq26930__$1 = cljs.core.next.call(null,seq26930);
var G__26932 = cljs.core.first.call(null,seq26930__$1);
var seq26930__$2 = cljs.core.next.call(null,seq26930__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26931,G__26932,seq26930__$2);
}));

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var temp__5804__auto__ = cljs.core.clj__GT_js.call(null,sablono.util.html_to_dom_attrs.call(null,attrs));
if(cljs.core.truth_(temp__5804__auto__)){
var js_attrs = temp__5804__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_.call(null,class$))?clojure.string.join.call(null," ",class$):class$);
if(clojure.string.blank_QMARK_.call(null,class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__26937 = sablono.normalize.element.call(null,element);
var type = cljs.core.nth.call(null,vec__26937,(0),null);
var attrs = cljs.core.nth.call(null,vec__26937,(1),null);
var content = cljs.core.nth.call(null,vec__26937,(2),null);
return cljs.core.apply.call(null,sablono.interpreter.create_element,type,sablono.interpreter.attributes.call(null,attrs),sablono.interpreter.interpret_seq.call(null,content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(sablono.util.element_QMARK_.call(null,x)){
return sablono.interpreter.element.call(null,x);
} else {
return sablono.interpreter.interpret_seq.call(null,x);
}
});
(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));

(cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec.call(null,this$__$1);
}));

(cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
}));

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

(cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
}));

(cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec.call(null,this$__$1);
}));

(cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
}));

(cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
}));

(cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
}));

(cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
}));

//# sourceMappingURL=interpreter.js.map?rel=1654516651124
