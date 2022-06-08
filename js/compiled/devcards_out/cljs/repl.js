// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34064){
var map__34065 = p__34064;
var map__34065__$1 = cljs.core.__destructure_map.call(null,map__34065);
var m = map__34065__$1;
var n = cljs.core.get.call(null,map__34065__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34065__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34066_34094 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34067_34095 = null;
var count__34068_34096 = (0);
var i__34069_34097 = (0);
while(true){
if((i__34069_34097 < count__34068_34096)){
var f_34098 = cljs.core._nth.call(null,chunk__34067_34095,i__34069_34097);
cljs.core.println.call(null,"  ",f_34098);


var G__34099 = seq__34066_34094;
var G__34100 = chunk__34067_34095;
var G__34101 = count__34068_34096;
var G__34102 = (i__34069_34097 + (1));
seq__34066_34094 = G__34099;
chunk__34067_34095 = G__34100;
count__34068_34096 = G__34101;
i__34069_34097 = G__34102;
continue;
} else {
var temp__5804__auto___34103 = cljs.core.seq.call(null,seq__34066_34094);
if(temp__5804__auto___34103){
var seq__34066_34104__$1 = temp__5804__auto___34103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34066_34104__$1)){
var c__5565__auto___34105 = cljs.core.chunk_first.call(null,seq__34066_34104__$1);
var G__34106 = cljs.core.chunk_rest.call(null,seq__34066_34104__$1);
var G__34107 = c__5565__auto___34105;
var G__34108 = cljs.core.count.call(null,c__5565__auto___34105);
var G__34109 = (0);
seq__34066_34094 = G__34106;
chunk__34067_34095 = G__34107;
count__34068_34096 = G__34108;
i__34069_34097 = G__34109;
continue;
} else {
var f_34110 = cljs.core.first.call(null,seq__34066_34104__$1);
cljs.core.println.call(null,"  ",f_34110);


var G__34111 = cljs.core.next.call(null,seq__34066_34104__$1);
var G__34112 = null;
var G__34113 = (0);
var G__34114 = (0);
seq__34066_34094 = G__34111;
chunk__34067_34095 = G__34112;
count__34068_34096 = G__34113;
i__34069_34097 = G__34114;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34115 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34115);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34115)))?cljs.core.second.call(null,arglists_34115):arglists_34115));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34070_34116 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34071_34117 = null;
var count__34072_34118 = (0);
var i__34073_34119 = (0);
while(true){
if((i__34073_34119 < count__34072_34118)){
var vec__34082_34120 = cljs.core._nth.call(null,chunk__34071_34117,i__34073_34119);
var name_34121 = cljs.core.nth.call(null,vec__34082_34120,(0),null);
var map__34085_34122 = cljs.core.nth.call(null,vec__34082_34120,(1),null);
var map__34085_34123__$1 = cljs.core.__destructure_map.call(null,map__34085_34122);
var doc_34124 = cljs.core.get.call(null,map__34085_34123__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34125 = cljs.core.get.call(null,map__34085_34123__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34121);

cljs.core.println.call(null," ",arglists_34125);

if(cljs.core.truth_(doc_34124)){
cljs.core.println.call(null," ",doc_34124);
} else {
}


var G__34126 = seq__34070_34116;
var G__34127 = chunk__34071_34117;
var G__34128 = count__34072_34118;
var G__34129 = (i__34073_34119 + (1));
seq__34070_34116 = G__34126;
chunk__34071_34117 = G__34127;
count__34072_34118 = G__34128;
i__34073_34119 = G__34129;
continue;
} else {
var temp__5804__auto___34130 = cljs.core.seq.call(null,seq__34070_34116);
if(temp__5804__auto___34130){
var seq__34070_34131__$1 = temp__5804__auto___34130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34070_34131__$1)){
var c__5565__auto___34132 = cljs.core.chunk_first.call(null,seq__34070_34131__$1);
var G__34133 = cljs.core.chunk_rest.call(null,seq__34070_34131__$1);
var G__34134 = c__5565__auto___34132;
var G__34135 = cljs.core.count.call(null,c__5565__auto___34132);
var G__34136 = (0);
seq__34070_34116 = G__34133;
chunk__34071_34117 = G__34134;
count__34072_34118 = G__34135;
i__34073_34119 = G__34136;
continue;
} else {
var vec__34086_34137 = cljs.core.first.call(null,seq__34070_34131__$1);
var name_34138 = cljs.core.nth.call(null,vec__34086_34137,(0),null);
var map__34089_34139 = cljs.core.nth.call(null,vec__34086_34137,(1),null);
var map__34089_34140__$1 = cljs.core.__destructure_map.call(null,map__34089_34139);
var doc_34141 = cljs.core.get.call(null,map__34089_34140__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34142 = cljs.core.get.call(null,map__34089_34140__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34138);

cljs.core.println.call(null," ",arglists_34142);

if(cljs.core.truth_(doc_34141)){
cljs.core.println.call(null," ",doc_34141);
} else {
}


var G__34143 = cljs.core.next.call(null,seq__34070_34131__$1);
var G__34144 = null;
var G__34145 = (0);
var G__34146 = (0);
seq__34070_34116 = G__34143;
chunk__34071_34117 = G__34144;
count__34072_34118 = G__34145;
i__34073_34119 = G__34146;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__34090 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34091 = null;
var count__34092 = (0);
var i__34093 = (0);
while(true){
if((i__34093 < count__34092)){
var role = cljs.core._nth.call(null,chunk__34091,i__34093);
var temp__5804__auto___34147__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___34147__$1)){
var spec_34148 = temp__5804__auto___34147__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34148));
} else {
}


var G__34149 = seq__34090;
var G__34150 = chunk__34091;
var G__34151 = count__34092;
var G__34152 = (i__34093 + (1));
seq__34090 = G__34149;
chunk__34091 = G__34150;
count__34092 = G__34151;
i__34093 = G__34152;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__34090);
if(temp__5804__auto____$1){
var seq__34090__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34090__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__34090__$1);
var G__34153 = cljs.core.chunk_rest.call(null,seq__34090__$1);
var G__34154 = c__5565__auto__;
var G__34155 = cljs.core.count.call(null,c__5565__auto__);
var G__34156 = (0);
seq__34090 = G__34153;
chunk__34091 = G__34154;
count__34092 = G__34155;
i__34093 = G__34156;
continue;
} else {
var role = cljs.core.first.call(null,seq__34090__$1);
var temp__5804__auto___34157__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___34157__$2)){
var spec_34158 = temp__5804__auto___34157__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34158));
} else {
}


var G__34159 = cljs.core.next.call(null,seq__34090__$1);
var G__34160 = null;
var G__34161 = (0);
var G__34162 = (0);
seq__34090 = G__34159;
chunk__34091 = G__34160;
count__34092 = G__34161;
i__34093 = G__34162;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34163 = cljs.core.conj.call(null,via,t);
var G__34164 = cljs.core.ex_cause.call(null,t);
via = G__34163;
t = G__34164;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34167 = datafied_throwable;
var map__34167__$1 = cljs.core.__destructure_map.call(null,map__34167);
var via = cljs.core.get.call(null,map__34167__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__34167__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__34167__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34168 = cljs.core.last.call(null,via);
var map__34168__$1 = cljs.core.__destructure_map.call(null,map__34168);
var type = cljs.core.get.call(null,map__34168__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__34168__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__34168__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34169 = data;
var map__34169__$1 = cljs.core.__destructure_map.call(null,map__34169);
var problems = cljs.core.get.call(null,map__34169__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__34169__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__34169__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34170 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__34170__$1 = cljs.core.__destructure_map.call(null,map__34170);
var top_data = map__34170__$1;
var source = cljs.core.get.call(null,map__34170__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__34171 = phase;
var G__34171__$1 = (((G__34171 instanceof cljs.core.Keyword))?G__34171.fqn:null);
switch (G__34171__$1) {
case "read-source":
var map__34172 = data;
var map__34172__$1 = cljs.core.__destructure_map.call(null,map__34172);
var line = cljs.core.get.call(null,map__34172__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34172__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34173 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__34173__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34173,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34173);
var G__34173__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34173__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34173__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34173__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34173__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34174 = top_data;
var G__34174__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34174,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34174);
var G__34174__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34174__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34174__$1);
var G__34174__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34174__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34174__$2);
var G__34174__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34174__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34174__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34174__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34174__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34175 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34175,(0),null);
var method = cljs.core.nth.call(null,vec__34175,(1),null);
var file = cljs.core.nth.call(null,vec__34175,(2),null);
var line = cljs.core.nth.call(null,vec__34175,(3),null);
var G__34178 = top_data;
var G__34178__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__34178,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34178);
var G__34178__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__34178__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34178__$1);
var G__34178__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.call(null,G__34178__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34178__$2);
var G__34178__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34178__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34178__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34178__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34178__$4;
}

break;
case "execution":
var vec__34179 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34179,(0),null);
var method = cljs.core.nth.call(null,vec__34179,(1),null);
var file = cljs.core.nth.call(null,vec__34179,(2),null);
var line = cljs.core.nth.call(null,vec__34179,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__34166_SHARP_){
var or__5043__auto__ = (p1__34166_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__34166_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__34182 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34182__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__34182,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34182);
var G__34182__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34182__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34182__$1);
var G__34182__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.call(null,G__34182__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34182__$2);
var G__34182__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__34182__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34182__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34182__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34182__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34171__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34186){
var map__34187 = p__34186;
var map__34187__$1 = cljs.core.__destructure_map.call(null,map__34187);
var triage_data = map__34187__$1;
var phase = cljs.core.get.call(null,map__34187__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__34187__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__34187__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34187__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__34187__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__34187__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__34187__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__34187__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34188 = phase;
var G__34188__$1 = (((G__34188 instanceof cljs.core.Keyword))?G__34188.fqn:null);
switch (G__34188__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34189_34198 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34190_34199 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34191_34200 = true;
var _STAR_print_fn_STAR__temp_val__34192_34201 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34191_34200);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34192_34201);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__34184_SHARP_){
return cljs.core.dissoc.call(null,p1__34184_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34190_34199);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34189_34198);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34193_34202 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34194_34203 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34195_34204 = true;
var _STAR_print_fn_STAR__temp_val__34196_34205 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34195_34204);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34196_34205);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__34185_SHARP_){
return cljs.core.dissoc.call(null,p1__34185_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34194_34203);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34193_34202);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34188__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1654516657084
