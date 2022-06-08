// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.dom');
goog.require('cljs.pprint');
goog.require('goog.object');
goog.scope(function(){
figwheel.client.heads_up.goog$module$goog$object = goog.module.get('goog.object');
});

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__5772__auto__ = [];
var len__5766__auto___34143 = arguments.length;
var i__5767__auto___34144 = (0);
while(true){
if((i__5767__auto___34144 < len__5766__auto___34143)){
args__5772__auto__.push((arguments[i__5767__auto___34144]));

var G__34145 = (i__5767__auto___34144 + (1));
i__5767__auto___34144 = G__34145;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__34135_34146 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34136_34147 = null;
var count__34137_34148 = (0);
var i__34138_34149 = (0);
while(true){
if((i__34138_34149 < count__34137_34148)){
var k_34150 = cljs.core._nth.call(null,chunk__34136_34147,i__34138_34149);
e.setAttribute(cljs.core.name.call(null,k_34150),cljs.core.get.call(null,attrs,k_34150));


var G__34151 = seq__34135_34146;
var G__34152 = chunk__34136_34147;
var G__34153 = count__34137_34148;
var G__34154 = (i__34138_34149 + (1));
seq__34135_34146 = G__34151;
chunk__34136_34147 = G__34152;
count__34137_34148 = G__34153;
i__34138_34149 = G__34154;
continue;
} else {
var temp__5804__auto___34155 = cljs.core.seq.call(null,seq__34135_34146);
if(temp__5804__auto___34155){
var seq__34135_34156__$1 = temp__5804__auto___34155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34135_34156__$1)){
var c__5565__auto___34157 = cljs.core.chunk_first.call(null,seq__34135_34156__$1);
var G__34158 = cljs.core.chunk_rest.call(null,seq__34135_34156__$1);
var G__34159 = c__5565__auto___34157;
var G__34160 = cljs.core.count.call(null,c__5565__auto___34157);
var G__34161 = (0);
seq__34135_34146 = G__34158;
chunk__34136_34147 = G__34159;
count__34137_34148 = G__34160;
i__34138_34149 = G__34161;
continue;
} else {
var k_34162 = cljs.core.first.call(null,seq__34135_34156__$1);
e.setAttribute(cljs.core.name.call(null,k_34162),cljs.core.get.call(null,attrs,k_34162));


var G__34163 = cljs.core.next.call(null,seq__34135_34156__$1);
var G__34164 = null;
var G__34165 = (0);
var G__34166 = (0);
seq__34135_34146 = G__34163;
chunk__34136_34147 = G__34164;
count__34137_34148 = G__34165;
i__34138_34149 = G__34166;
continue;
}
} else {
}
}
break;
}

var seq__34139_34167 = cljs.core.seq.call(null,children);
var chunk__34140_34168 = null;
var count__34141_34169 = (0);
var i__34142_34170 = (0);
while(true){
if((i__34142_34170 < count__34141_34169)){
var ch_34171 = cljs.core._nth.call(null,chunk__34140_34168,i__34142_34170);
e.appendChild(ch_34171);


var G__34172 = seq__34139_34167;
var G__34173 = chunk__34140_34168;
var G__34174 = count__34141_34169;
var G__34175 = (i__34142_34170 + (1));
seq__34139_34167 = G__34172;
chunk__34140_34168 = G__34173;
count__34141_34169 = G__34174;
i__34142_34170 = G__34175;
continue;
} else {
var temp__5804__auto___34176 = cljs.core.seq.call(null,seq__34139_34167);
if(temp__5804__auto___34176){
var seq__34139_34177__$1 = temp__5804__auto___34176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34139_34177__$1)){
var c__5565__auto___34178 = cljs.core.chunk_first.call(null,seq__34139_34177__$1);
var G__34179 = cljs.core.chunk_rest.call(null,seq__34139_34177__$1);
var G__34180 = c__5565__auto___34178;
var G__34181 = cljs.core.count.call(null,c__5565__auto___34178);
var G__34182 = (0);
seq__34139_34167 = G__34179;
chunk__34140_34168 = G__34180;
count__34141_34169 = G__34181;
i__34142_34170 = G__34182;
continue;
} else {
var ch_34183 = cljs.core.first.call(null,seq__34139_34177__$1);
e.appendChild(ch_34183);


var G__34184 = cljs.core.next.call(null,seq__34139_34177__$1);
var G__34185 = null;
var G__34186 = (0);
var G__34187 = (0);
seq__34139_34167 = G__34184;
chunk__34140_34168 = G__34185;
count__34141_34169 = G__34186;
i__34142_34170 = G__34187;
continue;
}
} else {
}
}
break;
}

return e;
}));

(figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq34132){
var G__34133 = cljs.core.first.call(null,seq34132);
var seq34132__$1 = cljs.core.next.call(null,seq34132);
var G__34134 = cljs.core.first.call(null,seq34132__$1);
var seq34132__$2 = cljs.core.next.call(null,seq34132__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34133,G__34134,seq34132__$2);
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.heads_up !== 'undefined') && (typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined')){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__5639__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),(function (dataset){
return dataset.figwheelEvent;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cont_id].join('')))){
var el_34188 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
(el_34188.onclick = figwheel.client.heads_up.heads_up_onclick_handler);

(el_34188.innerHTML = figwheel.client.heads_up.cljs_logo_svg);

el_34188.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34188);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34189,st_map){
var map__34190 = p__34189;
var map__34190__$1 = cljs.core.__destructure_map.call(null,map__34190);
var container_el = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,(function (p__34191){
var vec__34192 = p__34191;
var k = cljs.core.nth.call(null,vec__34192,(0),null);
var v = cljs.core.nth.call(null,vec__34192,(1),null);
return figwheel.client.heads_up.goog$module$goog$object.set.call(null,container_el.style,cljs.core.name.call(null,k),v);
}),st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34195,dom_str){
var map__34196 = p__34195;
var map__34196__$1 = cljs.core.__destructure_map.call(null,map__34196);
var c = map__34196__$1;
var content_area_el = cljs.core.get.call(null,map__34196__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return (content_area_el.innerHTML = dom_str);
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34197){
var map__34198 = p__34197;
var map__34198__$1 = cljs.core.__destructure_map.call(null,map__34198);
var content_area_el = cljs.core.get.call(null,map__34198__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_34214){
var state_val_34215 = (state_34214[(1)]);
if((state_val_34215 === (1))){
var inst_34199 = (state_34214[(7)]);
var inst_34199__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34200 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34201 = ["10px","10px","100%","68px","1.0"];
var inst_34202 = cljs.core.PersistentHashMap.fromArrays(inst_34200,inst_34201);
var inst_34203 = cljs.core.merge.call(null,inst_34202,style);
var inst_34204 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34199__$1,inst_34203);
var inst_34205 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34199__$1,msg);
var inst_34206 = cljs.core.async.timeout.call(null,(300));
var state_34214__$1 = (function (){var statearr_34216 = state_34214;
(statearr_34216[(7)] = inst_34199__$1);

(statearr_34216[(8)] = inst_34205);

(statearr_34216[(9)] = inst_34204);

return statearr_34216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34214__$1,(2),inst_34206);
} else {
if((state_val_34215 === (2))){
var inst_34199 = (state_34214[(7)]);
var inst_34208 = (state_34214[(2)]);
var inst_34209 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34210 = ["auto"];
var inst_34211 = cljs.core.PersistentHashMap.fromArrays(inst_34209,inst_34210);
var inst_34212 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34199,inst_34211);
var state_34214__$1 = (function (){var statearr_34217 = state_34214;
(statearr_34217[(10)] = inst_34208);

return statearr_34217;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34214__$1,inst_34212);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24851__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24851__auto____0 = (function (){
var statearr_34218 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34218[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24851__auto__);

(statearr_34218[(1)] = (1));

return statearr_34218;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24851__auto____1 = (function (state_34214){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_34214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e34219){if((e34219 instanceof Object)){
var ex__24854__auto__ = e34219;
var statearr_34220_34222 = state_34214;
(statearr_34220_34222[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34223 = state_34214;
state_34214 = G__34223;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24851__auto__ = function(state_34214){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24851__auto____1.call(this,state_34214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24851__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24851__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_34221 = f__24948__auto__.call(null);
(statearr_34221[(6)] = c__24947__auto__);

return statearr_34221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__34225 = arguments.length;
switch (G__34225) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
}));

(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
}));

(figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2);

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__34227){
var map__34228 = p__34227;
var map__34228__$1 = cljs.core.__destructure_map.call(null,map__34228);
var file = cljs.core.get.call(null,map__34228__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34228__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34228__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__5043__auto__ = file;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",msg__$1,"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",figwheel.client.heads_up.escape.call(null,line),"</span>"].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__34229){
var vec__34230 = p__34229;
var typ = cljs.core.nth.call(null,vec__34230,(0),null);
var line_number = cljs.core.nth.call(null,vec__34230,(1),null);
var line = cljs.core.nth.call(null,vec__34230,(2),null);
var pred__34233 = cljs.core._EQ_;
var expr__34234 = typ;
if(cljs.core.truth_(pred__34233.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__34234))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__34233.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__34234))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__34233.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__34234))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))).length);
return cljs.core.map.call(null,(function (p1__34236_SHARP_){
return cljs.core.update_in.call(null,p1__34236_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
}),inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",clojure.string.join.call(null,"\n",lines),"</pre>"].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__34237_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__34237_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__34240){
var map__34241 = p__34240;
var map__34241__$1 = cljs.core.__destructure_map.call(null,map__34241);
var exception = map__34241__$1;
var message = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__34241__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__5041__auto__ = file;
if(cljs.core.truth_(and__5041__auto__)){
return line;
} else {
return and__5041__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__34238_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34238_SHARP_),"</div>"].join('');
}),(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[(cljs.core.truth_(class$)?[figwheel.client.heads_up.escape.call(null,class$),": "].join(''):""),"<span style=\"font-weight:bold;\">",figwheel.client.heads_up.escape.call(null,message),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",figwheel.client.utils.pprint_to_string.call(null,display_ex_data),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,(function (p1__34239_SHARP_){
return [figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__34239_SHARP_)),": ",figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__34239_SHARP_))].join('');
}),figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",figwheel.client.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__34242){
var map__34243 = p__34242;
var map__34243__$1 = cljs.core.__destructure_map.call(null,map__34243);
var file = cljs.core.get.call(null,map__34243__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34243__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34243__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),new cljs.core.Keyword(null,"file-column","file-column",1543934780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__34245 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__34245__$1 = cljs.core.__destructure_map.call(null,map__34245);
var head = cljs.core.get.call(null,map__34245__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__34245__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__34245__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__34245__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__34245__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34245__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34245__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__34247){
var map__34248 = p__34247;
var map__34248__$1 = cljs.core.__destructure_map.call(null,map__34248);
var warning_data = map__34248__$1;
var file = cljs.core.get.call(null,map__34248__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34248__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34248__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__34248__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__34248__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__5041__auto__ = file;
if(cljs.core.truth_(and__5041__auto__)){
return line;
} else {
return and__5041__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__34246_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34246_SHARP_),"</div>"].join('');
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",figwheel.client.heads_up.escape.call(null,message),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",figwheel.client.heads_up.escape.call(null,last_message),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__34249 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__34249__$1 = cljs.core.__destructure_map.call(null,map__34249);
var head = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34249__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[figwheel.client.heads_up.close_link.call(null),figwheel.client.heads_up.heading.call(null,head,sub_head),figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg)].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__34250){
var map__34251 = p__34250;
var map__34251__$1 = cljs.core.__destructure_map.call(null,map__34251);
var warning_data = map__34251__$1;
var message = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34252 = message;
var G__34252__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34252)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34252);
var G__34252__$2 = (cljs.core.truth_((function (){var and__5041__auto__ = line;
if(cljs.core.truth_(and__5041__auto__)){
return column;
} else {
return and__5041__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34252__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__34252__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34252__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__34252__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__34253){
var map__34254 = p__34253;
var map__34254__$1 = cljs.core.__destructure_map.call(null,map__34254);
var warning_data = map__34254__$1;
var message = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__34255 = figwheel.client.heads_up.ensure_container.call(null);
var map__34255__$1 = cljs.core.__destructure_map.call(null,map__34255);
var content_area_el = cljs.core.get.call(null,map__34255__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
(el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data));

return goog.dom.append(content_area_el,el);
} else {
var temp__5804__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5804__auto__)){
var last_child = temp__5804__auto__;
var temp__5802__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5802__auto__)){
var message_count = temp__5802__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return (last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join(''));
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_34273){
var state_val_34274 = (state_34273[(1)]);
if((state_val_34274 === (1))){
var inst_34256 = (state_34273[(7)]);
var inst_34256__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34257 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34258 = ["0.0"];
var inst_34259 = cljs.core.PersistentHashMap.fromArrays(inst_34257,inst_34258);
var inst_34260 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34256__$1,inst_34259);
var inst_34261 = cljs.core.async.timeout.call(null,(300));
var state_34273__$1 = (function (){var statearr_34275 = state_34273;
(statearr_34275[(7)] = inst_34256__$1);

(statearr_34275[(8)] = inst_34260);

return statearr_34275;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34273__$1,(2),inst_34261);
} else {
if((state_val_34274 === (2))){
var inst_34256 = (state_34273[(7)]);
var inst_34263 = (state_34273[(2)]);
var inst_34264 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34265 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34266 = cljs.core.PersistentHashMap.fromArrays(inst_34264,inst_34265);
var inst_34267 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34256,inst_34266);
var inst_34268 = cljs.core.async.timeout.call(null,(200));
var state_34273__$1 = (function (){var statearr_34276 = state_34273;
(statearr_34276[(9)] = inst_34267);

(statearr_34276[(10)] = inst_34263);

return statearr_34276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34273__$1,(3),inst_34268);
} else {
if((state_val_34274 === (3))){
var inst_34256 = (state_34273[(7)]);
var inst_34270 = (state_34273[(2)]);
var inst_34271 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34256,"");
var state_34273__$1 = (function (){var statearr_34277 = state_34273;
(statearr_34277[(11)] = inst_34270);

return statearr_34277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34273__$1,inst_34271);
} else {
return null;
}
}
}
});
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24851__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24851__auto____0 = (function (){
var statearr_34278 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34278[(0)] = figwheel$client$heads_up$clear_$_state_machine__24851__auto__);

(statearr_34278[(1)] = (1));

return statearr_34278;
});
var figwheel$client$heads_up$clear_$_state_machine__24851__auto____1 = (function (state_34273){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_34273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e34279){if((e34279 instanceof Object)){
var ex__24854__auto__ = e34279;
var statearr_34280_34282 = state_34273;
(statearr_34280_34282[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34283 = state_34273;
state_34273 = G__34283;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24851__auto__ = function(state_34273){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24851__auto____1.call(this,state_34273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24851__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24851__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_34281 = f__24948__auto__.call(null);
(statearr_34281[(6)] = c__24947__auto__);

return statearr_34281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_34294){
var state_val_34295 = (state_34294[(1)]);
if((state_val_34295 === (1))){
var inst_34284 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34294__$1 = state_34294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34294__$1,(2),inst_34284);
} else {
if((state_val_34295 === (2))){
var inst_34286 = (state_34294[(2)]);
var inst_34287 = cljs.core.async.timeout.call(null,(400));
var state_34294__$1 = (function (){var statearr_34296 = state_34294;
(statearr_34296[(7)] = inst_34286);

return statearr_34296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34294__$1,(3),inst_34287);
} else {
if((state_val_34295 === (3))){
var inst_34289 = (state_34294[(2)]);
var inst_34290 = figwheel.client.heads_up.clear.call(null);
var state_34294__$1 = (function (){var statearr_34297 = state_34294;
(statearr_34297[(8)] = inst_34289);

return statearr_34297;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34294__$1,(4),inst_34290);
} else {
if((state_val_34295 === (4))){
var inst_34292 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34294__$1,inst_34292);
} else {
return null;
}
}
}
}
});
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24851__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24851__auto____0 = (function (){
var statearr_34298 = [null,null,null,null,null,null,null,null,null];
(statearr_34298[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24851__auto__);

(statearr_34298[(1)] = (1));

return statearr_34298;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24851__auto____1 = (function (state_34294){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_34294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e34299){if((e34299 instanceof Object)){
var ex__24854__auto__ = e34299;
var statearr_34300_34302 = state_34294;
(statearr_34300_34302[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34303 = state_34294;
state_34294 = G__34303;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24851__auto__ = function(state_34294){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24851__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24851__auto____1.call(this,state_34294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24851__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24851__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_34301 = f__24948__auto__.call(null);
(statearr_34301[(6)] = c__24947__auto__);

return statearr_34301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5804__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5804__auto__)){
var el = temp__5804__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
}), "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1654704963765
