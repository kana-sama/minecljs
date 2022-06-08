// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('devcards.util.utils');
goog.require('react');
goog.require('react_dom');
goog.require('goog.History');
goog.require('goog.object');
goog.scope(function(){
devcards.system.goog$module$goog$object = goog.module.get('goog.object');
});
devcards.system.global$module$react = goog.global["React"];
devcards.system.global$module$react_dom = goog.global["ReactDOM"];
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return f.call(null,e);
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id.call(null,devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.call(null,".",cljs.core.map.call(null,(function (x){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"]"].join('');
}),cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"cardpath","cardpath",-1078069311),path))));
});
devcards.system.create_element_STAR_ = (function devcards$system$create_element_STAR_(tag,id,style_text){
var el = document.createElement(tag);
(el.id = id);

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.create_style_element = cljs.core.partial.call(null,devcards.system.create_element_STAR_,"style");
devcards.system.create_script_element = cljs.core.partial.call(null,devcards.system.create_element_STAR_,"script");
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__5802__auto__ = node.firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var first_child = temp__5802__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__5802__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__5802__auto__)){
var heads = temp__5802__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-code-highlight-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-code-highlight-css","/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-devcards-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-devcards-css","body {\n    margin: 0px;\n}\n\nbody .hljs {\n  padding: 0px;\n  color: #333;\n  background: transparent;\n}\n  \n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre\n{\n  display: block;\n  padding: 9.5px 14px;\n  margin: 0px 0px 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;\n  color: #333;\n  background-color: rgb(250,250,250);\n  border: 1px solid #e1e1e1;  \n  margin-left: -14px;\n  margin-right: -14px;  \n  border-left: 0px;\n  border-right: 0px; \n}\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  margin-left: -15px;\n  margin-right: -15px;  \n}\n\n/* frameless style for markdown */\n.com-rigsomelight-devcards-framelesss .com-rigsomelight-devcards-markdown {\n    padding-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n}\n\n/* end fremless markdown style */\n\n.com-rigsomelight-devcards-padding-top-border {\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #990073;\n  background-color: #fafafa;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: 1em;\n  color: inherit;\n  white-space: pre; \n  background-color: transparent;\n  border-radius: 0;\n}\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n\n}\n\n\n.com-rigsomelight-devcards-typog {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards-typog h1,\n.com-rigsomelight-devcards-typog h2,\n.com-rigsomelight-devcards-typog h3,\n.com-rigsomelight-devcards-typog h4,\n.com-rigsomelight-devcards-typog h5,\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-typog a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px;\n    display: block;\n    margin-left: 14px;\n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n    padding: 8px 14px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border:  1px solid rgb(231,234,242);\n    margin-top: 20px;\n    border-left: 0px;\n    border-right: 0px;    \n}\n\n.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-card-hide-border {\n   border: 1px solid transparent;\n}\n\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n    border: none !important;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 14px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #eee;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\nbutton.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 19px;\n}\n\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    background-color: rgb(142,162,206);\n    background-color: rgb(239, 237, 237);\n}\n\n.com-rigsomelight-devcards-panel-heading a {\n    color: #666;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 14px;\n  border: none;\n  border-top: 1px solid #fafafa;\n}\n\n\n\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-context {\n    background-color: #fcfcfc;\n    border-left: 1px solid #f1f1f1;\n    border-right: 1px solid #f1f1f1;      \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n    \n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;    \n}\n\n\n.com-rigsomelight-devcards-test-line pre code {\n    font-size: 80%;\n    padding: 0px;\n    background-color:transparent;\n}\n    \n.com-rigsomelight-devcards-pass {\n    color: #3c763d;\n    border: 1px solid rgb(199, 225, 160);\n    border-left: 10px solid rgb(199, 225, 160);    \n}\n\n.com-rigsomelight-devcards-fail, .com-rigsomelight-devcards-error {\n  color: #a94442;\n  border: 1px solid rgb(236, 196, 196);    \n  border-left: 10px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-fail {\n    background-color: rgb(254, 254, 244);\n}\n\n\n.com-rigsomelight-devcards-error {\n    background-color: rgb(254, 245, 245);\n}\n\n\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-left: -10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: rgb(255,252,234);\n    padding-top: 5px;\n    padding-bottom: 3px;    \n    margin: 14px 0px;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: right;\n    /* position: absolute;\n    top: 0px;\n    right: 0px; */\n}\n\n.com-rigsomelight-devcards-history-control-bar button {\n    background: transparent;\n    border: none;\n    margin: 0px 4px;\n    height: 20px;\n    padding: 1px 28px;\n}\n\n.com-rigsomelight-devcards-history-control-bar + .com-rigsomelight-devcards-padding-top-border {\n    border: none;\n    padding-top: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    /* margin-top: -14px; */\n    margin: 14px -30px;\n}\n\n\n\n\n@media (min-width: 768px) {\n\n    \n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  padding: 9.5px 30px;\n  margin-left: -30px;\n  margin-right: -30px;      \n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 30px;\n}    \n\n.com-rigsomelight-devcards-brand {\n    margin-left: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 0px;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    padding-left: 0px;\n    padding-right: 0px;    \n}\n    \n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n }\n\n button.com-rigsomelight-devcards-badge {\n    border: 1px solid #999;\n    padding: 3px 9px;\n    background-color: #ccc;\n }\n\n .com-rigsomelight-devcards-history-control-bar button {\n     padding: 1px 6px;\n }\n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid rgb(231,234,242);\n }\n\n .com-rigsomelight-devcards-test-line {\n    padding: 10px 30px;\n }\n\n.com-rigsomelight-devcards-pass {\n  border-left: 25px solid rgb(199, 225, 160);        \n}\n\n.com-rigsomelight-devcards-fail {\n  border-left: 25px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-error {\n  border-left: 25px solid rgb(236, 196, 196);      \n}\n \n}\n\n@media (min-width: 800px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-markdown pre {\n      border: 1px solid #e1e1e1;\n      border-radius: 4px;\n      padding-left: 14px;\n      padding-right: 14px;\n\n      margin-left: 0px;\n      margin-right: 0px;            \n  }\n}\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .com-rigsomelight-devcards-brand {\n    margin-left: 30px;\n  }\n  .com-rigsomelight-devcards-list-group-item {\n      margin-left: 30px;\n      margin-right: 30px;\n  }\n  \n  .com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 30px;\n  }\n  \n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-devcards-addons-css"))){
} else {
head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-devcards-addons-css","/* full width code examples */\n\nbody {\n    overflow-x: hidden;\n}\n\n@media (max-width: 1000px) {\n.com-rigsomelight-devcards-card-hide-border\n.com-rigsomelight-devcards_rendered-card\n.com-rigsomelight-devcards-markdown pre {\n    margin-right: -3000px;\n    margin-left: -3000px;\n    padding-right: 3000px;\n    padding-left: 3000px;        \n}\n}\n\n/* default typography */\n.com-rigsomelight-devcards_rendered-card {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards_rendered-card code {\n    font-size: 90%;\n}\n\n.com-rigsomelight-devcards_rendered-card h1,\n.com-rigsomelight-devcards_rendered-card h2,\n.com-rigsomelight-devcards_rendered-card h3,\n.com-rigsomelight-devcards_rendered-card h4,\n.com-rigsomelight-devcards_rendered-card h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards_rendered-card a {\n    color: #428bca;\n    text-decoration: none;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id.call(null,"com-rigsomelight-edn-css"))){
return null;
} else {
return head.appendChild(devcards.system.create_style_element.call(null,"com-rigsomelight-edn-css",".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    display: -webkit-flex;    \n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;    \n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442; \n}\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;    \n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column-reverse;\n    -webkit-flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n"));
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_.call(null);

if(cljs.core.truth_(devcards.system.devcards_app_node.call(null))){
return null;
} else {
var el = document.createElement("div");
(el.id = devcards.system.devcards_app_element_id);

return devcards.system.prepend_child.call(null,document.body,el);
}
});

if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.history !== 'undefined')){
} else {
devcards.system.history = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})():null);
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return ["!/",clojure.string.join.call(null,"/",cljs.core.map.call(null,cljs.core.name,path))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,token,/#/,""),/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token.call(null,path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__28770_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,p1__28770_SHARP_.token));
}));

var temp__5804__auto__ = devcards.system.goog$module$goog$object.get.call(null,location,"hash");
if(cljs.core.truth_(temp__5804__auto__)){
var token = temp__5804__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,devcards.system.token__GT_path.call(null,token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
var and__5041__auto__ = cljs.core.map_QMARK_.call(null,d);
if(and__5041__auto__){
var and__5041__auto____$1 = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__5041__auto____$1)){
var and__5041__auto____$2 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__5041__auto____$2)){
var and__5041__auto____$3 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__5041__auto____$3)){
return d;
} else {
return and__5041__auto____$3;
}
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__5802__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351).cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.butlast.call(null,cljs.core.vec.call(null,path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.name.call(null,cljs.core.last.call(null,path)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),path], null),cljs.core.inc);
});
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.dev_trans !== 'undefined')){
} else {
devcards.system.dev_trans = (function (){var method_table__5639__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
cljs.core._add_method.call(null,devcards.system.dev_trans,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__28771,state){
var vec__28772 = p__28771;
var _ = cljs.core.nth.call(null,vec__28772,(0),null);
var map__28775 = cljs.core.nth.call(null,vec__28772,(1),null);
var map__28775__$1 = cljs.core.__destructure_map.call(null,map__28775);
var path = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision.call(null,state,path);
return devcards.system.register_collision.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.inc),cljs.core.cons.call(null,new cljs.core.Keyword(null,"cards","cards",169174038),new_path),(function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new_path,new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
})),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true,new cljs.core.Keyword(null,"padding","padding",1660304693),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true,new cljs.core.Keyword(null,"history","history",-247395220),false], null)], null);
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.app_state !== 'undefined')){
} else {
devcards.system.app_state = cljs.core.atom.call(null,devcards.system.devcard_initial_data);
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__5043__auto__ = cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,path);
if(or__5043__auto__){
return or__5043__auto__;
} else {
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec.call(null,(cljs.core.truth_(devcards.system.valid_path_QMARK_.call(null,state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__28776,path){
var map__28777 = p__28776;
var map__28777__$1 = cljs.core.__destructure_map.call(null,map__28777);
var state = map__28777__$1;
var current_path = cljs.core.get.call(null,map__28777__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,cljs.core.conj.call(null,current_path,cljs.core.keyword.call(null,path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__28778,path){
var map__28779 = p__28778;
var map__28779__$1 = cljs.core.__destructure_map.call(null,map__28779);
var state = map__28779__$1;
var current_path = cljs.core.get.call(null,map__28779__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var path__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,path));
if(cljs.core.not_EQ_.call(null,current_path,path__$1)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path.call(null,state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.call(null,state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate.call(null,path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__5041__auto__ = new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__5041__auto__)){
var and__5041__auto____$1 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__5041__auto____$1)){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_.call(null,devcards.system.current_page.call(null,state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page.call(null,state);
return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.comp.call(null,devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(cur){
return cljs.core.filter.call(null,cljs.core.comp.call(null,(function (p1__28780_SHARP_){
var and__5041__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__28780_SHARP_));
if(and__5041__auto__){
return devcards.system.devcard_QMARK_.call(null,p1__28780_SHARP_);
} else {
return and__5041__auto__;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__28781){
var map__28782 = p__28781;
var map__28782__$1 = cljs.core.__destructure_map.call(null,map__28782);
var card = map__28782__$1;
var path = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"func","func",-238706040));
return sablono.core.create_element.call(null,"div",({"key": devcards.system.path__GT_unique_card_id.call(null,path), "className": "com-rigsomelight-devcard"}),sablono.interpreter.interpret.call(null,(function (){var _STAR_devcard_data_STAR__orig_val__28783 = devcards.system._STAR_devcard_data_STAR_;
var _STAR_devcard_data_STAR__temp_val__28784 = card;
(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__temp_val__28784);

try{return func.call(null);
}finally {(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__orig_val__28783);
}})()));
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))){
return devcards.system.card_template.call(null,state_atom,devcards.system.current_page.call(null,data));
} else {
return devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,devcards.system.current_page.call(null,data)),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__28785){
var map__28786 = p__28785;
var map__28786__$1 = cljs.core.__destructure_map.call(null,map__28786);
var state = map__28786__$1;
var current_path = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.call(null,cljs.core.name,cljs.core.cons.call(null,new cljs.core.Keyword(null,"devcards","devcards",365747130),current_path));
var crumbs = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.last,cljs.core.rest),cljs.core.rest.call(null,cljs.core.map_indexed.call(null,(function (i,v){
return cljs.core.subvec.call(null,v,(0),i);
}),cljs.core.take.call(null,(cljs.core.count.call(null,cpath) + (1)),cljs.core.repeat.call(null,cljs.core.vec.call(null,cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = cljs.core.atom.call(null,(0));
var sep_fn = (function (_){
return sablono.core.create_element.call(null,"span",({"key": (function (){
cljs.core.swap_BANG_.call(null,counter,cljs.core.inc);

return cljs.core.deref.call(null,counter);
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"}),"/");
});
return sablono.core.create_element.call(null,"div",({"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.rest.call(null,cljs.core.interleave.call(null,cljs.core.iterate.call(null,sep_fn,sep_fn.call(null,null)),cljs.core.map.call(null,(function (p__28787){
var vec__28788 = p__28787;
var n = cljs.core.nth.call(null,vec__28788,(0),null);
var path = cljs.core.nth.call(null,vec__28788,(1),null);
return sablono.core.create_element.call(null,"span",({"style": ({"display": "inline-block"}), "key": devcards.system.path__GT_unique_card_id.call(null,path)}),sablono.core.create_element.call(null,"a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,(function (){
return devcards.system.set_current_path_BANG_.call(null,state_atom,path);
})), "className": "com-rigsomelight-devcards_set-current-path"}),sablono.interpreter.interpret.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))));
}),crumbs)))),sablono.interpreter.interpret.call(null,devcards.system.cljs_logo.call(null)));
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.call(null,state_atom,(function (s){
var new_s = devcards.system.add_to_current_path.call(null,s,key);
devcards.system.hash_navigate.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_.call(null,dirs)){
return null;
} else {
var attrs28791 = cljs.core.map.call(null,(function (p__28792){
var vec__28793 = p__28792;
var key = cljs.core.nth.call(null,vec__28793,(0),null);
var child_tree = cljs.core.nth.call(null,vec__28793,(1),null);
return sablono.core.create_element.call(null,"a",({"href": "#", "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(key), "onClick": devcards.system.prevent__GT_.call(null,(function (e){
return devcards.system.navigate_to_path.call(null,key,state_atom);
})), "className": "com-rigsomelight-devcards-list-group-item"}),sablono.core.create_element.call(null,"span",({"style": ({"float": "right"}), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,cljs.core.count.call(null,child_tree))),sablono.core.create_element.call(null,"span",null," ",sablono.interpreter.interpret.call(null,cljs.core.name.call(null,key))));
}),cljs.core.sort_by.call(null,(function (p__28796){
var vec__28797 = p__28796;
var key = cljs.core.nth.call(null,vec__28797,(0),null);
var _ = cljs.core.nth.call(null,vec__28797,(1),null);
return cljs.core.name.call(null,key);
}),dirs));
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs28791))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs28791)):({"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"})),((cljs.core.map_QMARK_.call(null,attrs28791))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28791)], null)));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref.call(null,state_atom);
return sablono.core.create_element.call(null,"div",({"className": ["com-rigsomelight-devcards-base ",(function (){var temp__5804__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
return clojure.string.replace.call(null,cljs.core.name.call(null,n),".","-");
} else {
return null;
}
})()].join('')}),(function (){var attrs28800 = (function (){var temp__5804__auto__ = devcards.system.breadcrumbs.call(null,data);
if(cljs.core.truth_(temp__5804__auto__)){
var crumbs = temp__5804__auto__;
return devcards.system.breadcrumbs_templ.call(null,crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs28800))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs28800)):({"className": "com-rigsomelight-devcards-container"})),((cljs.core.map_QMARK_.call(null,attrs28800))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs28801 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs28801))?sablono.interpreter.attributes.call(null,attrs28801):null),((cljs.core.map_QMARK_.call(null,attrs28801))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28801)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28800),(cljs.core.truth_(devcards.system.display_single_card_QMARK_.call(null,data))?null:(function (){var dir_paths = devcards.system.display_dir_paths.call(null,data);
return sablono.interpreter.interpret.call(null,devcards.system.dir_links.call(null,dir_paths,state_atom));
})()),(function (){var attrs28802 = devcards.system.main_cards_template.call(null,state_atom);
return cljs.core.apply.call(null,sablono.core.create_element,"div",((cljs.core.map_QMARK_.call(null,attrs28802))?sablono.interpreter.attributes.call(null,attrs28802):null),((cljs.core.map_QMARK_.call(null,attrs28802))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28802)], null)));
})()], null)));
})());
});
devcards.system.DevcardsRoot = (function (){var ctor__23574__auto__ = (function (props__23571__auto__){
var this__23572__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__23572__auto__,props__23571__auto__);

return this__23572__auto__;
});
goog.inherits(ctor__23574__auto__,devcards.util.utils.react_holder.Component);

var x28803_28804 = ctor__23574__auto__.prototype;
(x28803_28804.componentDidMount = (function (){
var this$ = this;
return cljs.core.add_watch.call(null,devcards.system.app_state,new cljs.core.Keyword(null,"renderer-watch","renderer-watch",542998517),(function (_,___$1,___$2,___$3){
return this$.forceUpdate();
}));
}));

(x28803_28804.render = (function (){
var this$ = this;
return devcards.system.main_template.call(null,devcards.system.app_state);
}));


return ctor__23574__auto__;
})();

(devcards.system.DevcardsRoot.displayName = cljs.core.name.call(null,new cljs.core.Symbol(null,"DevcardsRoot","DevcardsRoot",-655621301,null)));
devcards.system.renderer = (function devcards$system$renderer(state_atom){
return devcards.system.global$module$react_dom.render(devcards.system.global$module$react.createElement(devcards.system.DevcardsRoot),devcards.system.devcards_app_node.call(null));
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.merge.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(new_state)));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards
 * that have arrived. This prevents multiple renders and allows us
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,start_data,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"cards","cards",169174038));
var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_28852){
var state_val_28853 = (state_28852[(1)]);
if((state_val_28853 === (7))){
var inst_28848 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
var statearr_28854_28881 = state_28852__$1;
(statearr_28854_28881[(2)] = inst_28848);

(statearr_28854_28881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (1))){
var inst_28805 = devcards.system.dev_trans.call(null,first_message,initial_data);
var inst_28806 = inst_28805;
var state_28852__$1 = (function (){var statearr_28855 = state_28852;
(statearr_28855[(7)] = inst_28806);

return statearr_28855;
})();
var statearr_28856_28882 = state_28852__$1;
(statearr_28856_28882[(2)] = null);

(statearr_28856_28882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (4))){
var inst_28813 = (state_28852[(8)]);
var inst_28813__$1 = (state_28852[(2)]);
var state_28852__$1 = (function (){var statearr_28857 = state_28852;
(statearr_28857[(8)] = inst_28813__$1);

return statearr_28857;
})();
if(cljs.core.truth_(inst_28813__$1)){
var statearr_28858_28883 = state_28852__$1;
(statearr_28858_28883[(1)] = (5));

} else {
var statearr_28859_28884 = state_28852__$1;
(statearr_28859_28884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (15))){
var state_28852__$1 = state_28852;
var statearr_28860_28885 = state_28852__$1;
(statearr_28860_28885[(2)] = null);

(statearr_28860_28885[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (13))){
var inst_28843 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
var statearr_28861_28886 = state_28852__$1;
(statearr_28861_28886[(2)] = inst_28843);

(statearr_28861_28886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (6))){
var state_28852__$1 = state_28852;
var statearr_28862_28887 = state_28852__$1;
(statearr_28862_28887[(2)] = null);

(statearr_28862_28887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (3))){
var inst_28850 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28852__$1,inst_28850);
} else {
if((state_val_28853 === (12))){
var state_28852__$1 = state_28852;
var statearr_28863_28888 = state_28852__$1;
(statearr_28863_28888[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (2))){
var inst_28808 = (state_28852[(9)]);
var inst_28808__$1 = cljs.core.async.timeout.call(null,(500));
var inst_28809 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28810 = [channel,inst_28808__$1];
var inst_28811 = (new cljs.core.PersistentVector(null,2,(5),inst_28809,inst_28810,null));
var state_28852__$1 = (function (){var statearr_28865 = state_28852;
(statearr_28865[(9)] = inst_28808__$1);

return statearr_28865;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28852__$1,(4),inst_28811);
} else {
if((state_val_28853 === (11))){
var inst_28806 = (state_28852[(7)]);
var inst_28831 = devcards.system.merge_in_new_data.call(null,start_data,inst_28806);
var state_28852__$1 = state_28852;
var statearr_28866_28889 = state_28852__$1;
(statearr_28866_28889[(2)] = inst_28831);

(statearr_28866_28889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (9))){
var inst_28822 = (state_28852[(10)]);
var inst_28829 = cljs.core._EQ_.call(null,inst_28822,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_28852__$1 = state_28852;
if(inst_28829){
var statearr_28867_28890 = state_28852__$1;
(statearr_28867_28890[(1)] = (11));

} else {
var statearr_28868_28891 = state_28852__$1;
(statearr_28868_28891[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (5))){
var inst_28813 = (state_28852[(8)]);
var inst_28808 = (state_28852[(9)]);
var inst_28821 = cljs.core.nth.call(null,inst_28813,(0),null);
var inst_28822 = cljs.core.nth.call(null,inst_28821,(0),null);
var inst_28823 = cljs.core.nth.call(null,inst_28821,(1),null);
var inst_28824 = cljs.core.nth.call(null,inst_28813,(1),null);
var inst_28825 = cljs.core._EQ_.call(null,inst_28824,inst_28808);
var state_28852__$1 = (function (){var statearr_28869 = state_28852;
(statearr_28869[(10)] = inst_28822);

(statearr_28869[(11)] = inst_28823);

return statearr_28869;
})();
if(inst_28825){
var statearr_28870_28892 = state_28852__$1;
(statearr_28870_28892[(1)] = (8));

} else {
var statearr_28871_28893 = state_28852__$1;
(statearr_28871_28893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (14))){
var inst_28822 = (state_28852[(10)]);
var inst_28806 = (state_28852[(7)]);
var inst_28823 = (state_28852[(11)]);
var inst_28834 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28835 = [inst_28822,inst_28823];
var inst_28836 = (new cljs.core.PersistentVector(null,2,(5),inst_28834,inst_28835,null));
var inst_28837 = devcards.system.dev_trans.call(null,inst_28836,inst_28806);
var inst_28806__$1 = inst_28837;
var state_28852__$1 = (function (){var statearr_28872 = state_28852;
(statearr_28872[(7)] = inst_28806__$1);

return statearr_28872;
})();
var statearr_28873_28894 = state_28852__$1;
(statearr_28873_28894[(2)] = null);

(statearr_28873_28894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (16))){
var inst_28841 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
var statearr_28874_28895 = state_28852__$1;
(statearr_28874_28895[(2)] = inst_28841);

(statearr_28874_28895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (10))){
var inst_28845 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
var statearr_28875_28896 = state_28852__$1;
(statearr_28875_28896[(2)] = inst_28845);

(statearr_28875_28896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28853 === (8))){
var inst_28806 = (state_28852[(7)]);
var inst_28827 = devcards.system.merge_in_new_data.call(null,start_data,inst_28806);
var state_28852__$1 = state_28852;
var statearr_28876_28897 = state_28852__$1;
(statearr_28876_28897[(2)] = inst_28827);

(statearr_28876_28897[(1)] = (10));


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
});
return (function() {
var devcards$system$off_the_books_$_state_machine__24851__auto__ = null;
var devcards$system$off_the_books_$_state_machine__24851__auto____0 = (function (){
var statearr_28877 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28877[(0)] = devcards$system$off_the_books_$_state_machine__24851__auto__);

(statearr_28877[(1)] = (1));

return statearr_28877;
});
var devcards$system$off_the_books_$_state_machine__24851__auto____1 = (function (state_28852){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_28852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e28878){if((e28878 instanceof Object)){
var ex__24854__auto__ = e28878;
var statearr_28879_28898 = state_28852;
(statearr_28879_28898[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28899 = state_28852;
state_28852 = G__28899;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__24851__auto__ = function(state_28852){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__24851__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__24851__auto____1.call(this,state_28852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__24851__auto____0;
devcards$system$off_the_books_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__24851__auto____1;
return devcards$system$off_the_books_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_28880 = f__24948__auto__.call(null);
(statearr_28880[(6)] = c__24947__auto__);

return statearr_28880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_28907){
var state_val_28908 = (state_28907[(1)]);
if((state_val_28908 === (1))){
var inst_28900 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_28901 = cljs.core.PersistentVector.EMPTY;
var inst_28902 = devcards.system.off_the_books.call(null,channel,inst_28900,inst_28901);
var state_28907__$1 = state_28907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28907__$1,(2),inst_28902);
} else {
if((state_val_28908 === (2))){
var inst_28904 = (state_28907[(2)]);
var inst_28905 = cljs.core.reset_BANG_.call(null,devcards.system.app_state,inst_28904);
var state_28907__$1 = state_28907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28907__$1,inst_28905);
} else {
return null;
}
}
});
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__24851__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__24851__auto____0 = (function (){
var statearr_28909 = [null,null,null,null,null,null,null];
(statearr_28909[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__24851__auto__);

(statearr_28909[(1)] = (1));

return statearr_28909;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__24851__auto____1 = (function (state_28907){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_28907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e28910){if((e28910 instanceof Object)){
var ex__24854__auto__ = e28910;
var statearr_28911_28913 = state_28907;
(statearr_28911_28913[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28914 = state_28907;
state_28907 = G__28914;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__24851__auto__ = function(state_28907){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__24851__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__24851__auto____1.call(this,state_28907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__24851__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__24851__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_28912 = f__24948__auto__.call(null);
(statearr_28912[(6)] = c__24947__auto__);

return statearr_28912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
});
devcards.system.start_ui_with_renderer = (function devcards$system$start_ui_with_renderer(channel,renderer){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.global$module$react !== 'undefined') && (typeof devcards.system.global$module$react.initializeTouchEvents !== 'undefined')){
devcards.system.global$module$react.initializeTouchEvents(true);
} else {
}

var c__24947__auto___28954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_28939){
var state_val_28940 = (state_28939[(1)]);
if((state_val_28940 === (7))){
var state_28939__$1 = state_28939;
var statearr_28941_28955 = state_28939__$1;
(statearr_28941_28955[(2)] = null);

(statearr_28941_28955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28940 === (1))){
var inst_28915 = devcards.system.load_data_from_channel_BANG_.call(null,channel);
var state_28939__$1 = state_28939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28939__$1,(2),inst_28915);
} else {
if((state_val_28940 === (4))){
var inst_28937 = (state_28939[(2)]);
var state_28939__$1 = state_28939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28939__$1,inst_28937);
} else {
if((state_val_28940 === (6))){
var inst_28924 = (state_28939[(7)]);
var inst_28926 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_28927 = devcards.system.off_the_books.call(null,channel,inst_28926,inst_28924);
var state_28939__$1 = state_28939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28939__$1,(9),inst_28927);
} else {
if((state_val_28940 === (3))){
var state_28939__$1 = state_28939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28939__$1,(5),channel);
} else {
if((state_val_28940 === (2))){
var inst_28917 = (state_28939[(2)]);
var inst_28918 = (function (){return (function (){
return renderer.call(null,devcards.system.app_state);
});
})();
var inst_28919 = setTimeout(inst_28918,(0));
var inst_28920 = (function (){return (function (){
return cljs.core.add_watch.call(null,devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),(function (_,___$1,___$2,___$3){
return renderer.call(null,devcards.system.app_state);
}));
});
})();
var inst_28921 = setTimeout(inst_28920,(0));
var state_28939__$1 = (function (){var statearr_28942 = state_28939;
(statearr_28942[(8)] = inst_28921);

(statearr_28942[(9)] = inst_28919);

(statearr_28942[(10)] = inst_28917);

return statearr_28942;
})();
var statearr_28943_28956 = state_28939__$1;
(statearr_28943_28956[(2)] = null);

(statearr_28943_28956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28940 === (9))){
var inst_28924 = (state_28939[(7)]);
var inst_28929 = (state_28939[(2)]);
var inst_28930 = (function (){var temp__5804__auto__ = inst_28924;
var v = inst_28924;
var new_state = inst_28929;
return (function (){
return cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state);
});
})();
var inst_28931 = setTimeout(inst_28930,(0));
var state_28939__$1 = (function (){var statearr_28944 = state_28939;
(statearr_28944[(11)] = inst_28931);

return statearr_28944;
})();
var statearr_28945_28957 = state_28939__$1;
(statearr_28945_28957[(2)] = null);

(statearr_28945_28957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28940 === (5))){
var inst_28924 = (state_28939[(7)]);
var inst_28924__$1 = (state_28939[(2)]);
var state_28939__$1 = (function (){var statearr_28946 = state_28939;
(statearr_28946[(7)] = inst_28924__$1);

return statearr_28946;
})();
if(cljs.core.truth_(inst_28924__$1)){
var statearr_28947_28958 = state_28939__$1;
(statearr_28947_28958[(1)] = (6));

} else {
var statearr_28948_28959 = state_28939__$1;
(statearr_28948_28959[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28940 === (8))){
var inst_28935 = (state_28939[(2)]);
var state_28939__$1 = state_28939;
var statearr_28949_28960 = state_28939__$1;
(statearr_28949_28960[(2)] = inst_28935);

(statearr_28949_28960[(1)] = (4));


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
});
return (function() {
var devcards$system$start_ui_with_renderer_$_state_machine__24851__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__24851__auto____0 = (function (){
var statearr_28950 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28950[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__24851__auto__);

(statearr_28950[(1)] = (1));

return statearr_28950;
});
var devcards$system$start_ui_with_renderer_$_state_machine__24851__auto____1 = (function (state_28939){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_28939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e28951){if((e28951 instanceof Object)){
var ex__24854__auto__ = e28951;
var statearr_28952_28961 = state_28939;
(statearr_28952_28961[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28962 = state_28939;
state_28939 = G__28962;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__24851__auto__ = function(state_28939){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__24851__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__24851__auto____1.call(this,state_28939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_with_renderer_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__24851__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__24851__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_28953 = f__24948__auto__.call(null);
(statearr_28953[(6)] = c__24947__auto___28954);

return statearr_28953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.global$module$react !== 'undefined') && (typeof devcards.system.global$module$react.initializeTouchEvents !== 'undefined')){
devcards.system.global$module$react.initializeTouchEvents(true);
} else {
}

devcards.system.render_base_if_necessary_BANG_.call(null);

var c__24947__auto___29002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_28987){
var state_val_28988 = (state_28987[(1)]);
if((state_val_28988 === (7))){
var state_28987__$1 = state_28987;
var statearr_28989_29003 = state_28987__$1;
(statearr_28989_29003[(2)] = null);

(statearr_28989_29003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28988 === (1))){
var inst_28963 = devcards.system.load_data_from_channel_BANG_.call(null,channel);
var state_28987__$1 = state_28987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28987__$1,(2),inst_28963);
} else {
if((state_val_28988 === (4))){
var inst_28985 = (state_28987[(2)]);
var state_28987__$1 = state_28987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28987__$1,inst_28985);
} else {
if((state_val_28988 === (6))){
var inst_28972 = (state_28987[(7)]);
var inst_28974 = cljs.core.deref.call(null,devcards.system.app_state);
var inst_28975 = devcards.system.off_the_books.call(null,channel,inst_28974,inst_28972);
var state_28987__$1 = state_28987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28987__$1,(9),inst_28975);
} else {
if((state_val_28988 === (3))){
var state_28987__$1 = state_28987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28987__$1,(5),channel);
} else {
if((state_val_28988 === (2))){
var inst_28965 = (state_28987[(2)]);
var inst_28966 = (function (){return (function (){
return devcards.system.renderer.call(null,devcards.system.app_state);
});
})();
var inst_28967 = setTimeout(inst_28966,(0));
var inst_28968 = (function (){return (function (){
return devcards.system.hash_routing_init.call(null,devcards.system.app_state);
});
})();
var inst_28969 = setTimeout(inst_28968,(0));
var state_28987__$1 = (function (){var statearr_28990 = state_28987;
(statearr_28990[(8)] = inst_28967);

(statearr_28990[(9)] = inst_28969);

(statearr_28990[(10)] = inst_28965);

return statearr_28990;
})();
var statearr_28991_29004 = state_28987__$1;
(statearr_28991_29004[(2)] = null);

(statearr_28991_29004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28988 === (9))){
var inst_28972 = (state_28987[(7)]);
var inst_28977 = (state_28987[(2)]);
var inst_28978 = (function (){var temp__5804__auto__ = inst_28972;
var v = inst_28972;
var new_state = inst_28977;
return (function (){
return cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state);
});
})();
var inst_28979 = setTimeout(inst_28978,(0));
var state_28987__$1 = (function (){var statearr_28992 = state_28987;
(statearr_28992[(11)] = inst_28979);

return statearr_28992;
})();
var statearr_28993_29005 = state_28987__$1;
(statearr_28993_29005[(2)] = null);

(statearr_28993_29005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28988 === (5))){
var inst_28972 = (state_28987[(7)]);
var inst_28972__$1 = (state_28987[(2)]);
var state_28987__$1 = (function (){var statearr_28994 = state_28987;
(statearr_28994[(7)] = inst_28972__$1);

return statearr_28994;
})();
if(cljs.core.truth_(inst_28972__$1)){
var statearr_28995_29006 = state_28987__$1;
(statearr_28995_29006[(1)] = (6));

} else {
var statearr_28996_29007 = state_28987__$1;
(statearr_28996_29007[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28988 === (8))){
var inst_28983 = (state_28987[(2)]);
var state_28987__$1 = state_28987;
var statearr_28997_29008 = state_28987__$1;
(statearr_28997_29008[(2)] = inst_28983);

(statearr_28997_29008[(1)] = (4));


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
});
return (function() {
var devcards$system$start_ui_$_state_machine__24851__auto__ = null;
var devcards$system$start_ui_$_state_machine__24851__auto____0 = (function (){
var statearr_28998 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28998[(0)] = devcards$system$start_ui_$_state_machine__24851__auto__);

(statearr_28998[(1)] = (1));

return statearr_28998;
});
var devcards$system$start_ui_$_state_machine__24851__auto____1 = (function (state_28987){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_28987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e28999){if((e28999 instanceof Object)){
var ex__24854__auto__ = e28999;
var statearr_29000_29009 = state_28987;
(statearr_29000_29009[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29010 = state_28987;
state_28987 = G__29010;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__24851__auto__ = function(state_28987){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__24851__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__24851__auto____1.call(this,state_28987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__24851__auto____0;
devcards$system$start_ui_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__24851__auto____1;
return devcards$system$start_ui_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_29001 = f__24948__auto__.call(null);
(statearr_29001[(6)] = c__24947__auto___29002);

return statearr_29001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg class='cljs-logo' width='49px' height='49px' style='float: right; display: inline-block; position:relative; top:-13px; right: 0px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
devcards.system.cljs_logo = (function devcards$system$cljs_logo(){
return devcards.system.global$module$react.createElement("span",({"key": "cljs-logo", "dangerouslySetInnerHTML": ({"__html": devcards.system.cljs_logo_svg})}));
});

//# sourceMappingURL=system.js.map?rel=1654516652034
