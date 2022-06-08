// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('minecljs.game');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.match');
goog.require('minecljs.defcard');
goog.require('minecljs.ui');
goog.require('minecljs.random');
goog.require('clojure.set');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
minecljs.game.Game = (function (status,width,height,mines_amount,mines,open,flags,marks,__meta,__extmap,__hash){
this.status = status;
this.width = width;
this.height = height;
this.mines_amount = mines_amount;
this.mines = mines;
this.open = open;
this.flags = flags;
this.marks = marks;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(minecljs.game.Game.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(minecljs.game.Game.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k36833,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__36837 = k36833;
var G__36837__$1 = (((G__36837 instanceof cljs.core.Keyword))?G__36837.fqn:null);
switch (G__36837__$1) {
case "status":
return self__.status;

break;
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
case "mines-amount":
return self__.mines_amount;

break;
case "mines":
return self__.mines;

break;
case "open":
return self__.open;

break;
case "flags":
return self__.flags;

break;
case "marks":
return self__.marks;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36833,else__5343__auto__);

}
}));

(minecljs.game.Game.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__36838){
var vec__36839 = p__36838;
var k__5364__auto__ = cljs.core.nth.call(null,vec__36839,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__36839,(1),null);
return f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__);
}),init__5362__auto__,this__5360__auto____$1);
}));

(minecljs.game.Game.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5356__auto__,pr_pair__5358__auto__,"#minecljs.game.Game{",", ","}",opts__5357__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",-1997798413),self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),self__.mines_amount],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mines","mines",-1960796490),self__.mines],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open","open",-1763596448),self__.open],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flags","flags",1775418075),self__.flags],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"marks","marks",-1844991497),self__.marks],null))], null),self__.__extmap));
}));

(minecljs.game.Game.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36832){
var self__ = this;
var G__36832__$1 = this;
return (new cljs.core.RecordIter((0),G__36832__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),new cljs.core.Keyword(null,"mines","mines",-1960796490),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"marks","marks",-1844991497)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(minecljs.game.Game.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(minecljs.game.Game.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,self__.mines,self__.open,self__.flags,self__.marks,self__.__meta,self__.__extmap,self__.__hash));
}));

(minecljs.game.Game.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
}));

(minecljs.game.Game.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (2004635817 ^ cljs.core.hash_unordered_coll.call(null,coll__5337__auto__));
}).call(null,this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(minecljs.game.Game.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36834,other36835){
var self__ = this;
var this36834__$1 = this;
return (((!((other36835 == null)))) && ((((this36834__$1.constructor === other36835.constructor)) && (((cljs.core._EQ_.call(null,this36834__$1.status,other36835.status)) && (((cljs.core._EQ_.call(null,this36834__$1.width,other36835.width)) && (((cljs.core._EQ_.call(null,this36834__$1.height,other36835.height)) && (((cljs.core._EQ_.call(null,this36834__$1.mines_amount,other36835.mines_amount)) && (((cljs.core._EQ_.call(null,this36834__$1.mines,other36835.mines)) && (((cljs.core._EQ_.call(null,this36834__$1.open,other36835.open)) && (((cljs.core._EQ_.call(null,this36834__$1.flags,other36835.flags)) && (((cljs.core._EQ_.call(null,this36834__$1.marks,other36835.marks)) && (cljs.core._EQ_.call(null,this36834__$1.__extmap,other36835.__extmap)))))))))))))))))))));
}));

(minecljs.game.Game.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"open","open",-1763596448),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"mines","mines",-1960796490),null,new cljs.core.Keyword(null,"marks","marks",-1844991497),null,new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),null,new cljs.core.Keyword(null,"flags","flags",1775418075),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,self__.mines,self__.open,self__.flags,self__.marks,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5351__auto__)),null));
}
}));

(minecljs.game.Game.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k36833){
var self__ = this;
var this__5347__auto____$1 = this;
var G__36842 = k36833;
var G__36842__$1 = (((G__36842 instanceof cljs.core.Keyword))?G__36842.fqn:null);
switch (G__36842__$1) {
case "status":
case "width":
case "height":
case "mines-amount":
case "mines":
case "open":
case "flags":
case "marks":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k36833);

}
}));

(minecljs.game.Game.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__36832){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__36843 = cljs.core.keyword_identical_QMARK_;
var expr__36844 = k__5349__auto__;
if(cljs.core.truth_(pred__36843.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),expr__36844))){
return (new minecljs.game.Game(G__36832,self__.width,self__.height,self__.mines_amount,self__.mines,self__.open,self__.flags,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36843.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__36844))){
return (new minecljs.game.Game(self__.status,G__36832,self__.height,self__.mines_amount,self__.mines,self__.open,self__.flags,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36843.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__36844))){
return (new minecljs.game.Game(self__.status,self__.width,G__36832,self__.mines_amount,self__.mines,self__.open,self__.flags,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36843.call(null,new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),expr__36844))){
return (new minecljs.game.Game(self__.status,self__.width,self__.height,G__36832,self__.mines,self__.open,self__.flags,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36843.call(null,new cljs.core.Keyword(null,"mines","mines",-1960796490),expr__36844))){
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,G__36832,self__.open,self__.flags,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36843.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__36844))){
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,self__.mines,G__36832,self__.flags,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36843.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075),expr__36844))){
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,self__.mines,self__.open,G__36832,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__36843.call(null,new cljs.core.Keyword(null,"marks","marks",-1844991497),expr__36844))){
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,self__.mines,self__.open,self__.flags,G__36832,self__.__meta,self__.__extmap,null));
} else {
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,self__.mines,self__.open,self__.flags,self__.marks,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__36832),null));
}
}
}
}
}
}
}
}
}));

(minecljs.game.Game.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"status","status",-1997798413),self__.status,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"width","width",-384071477),self__.width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"height","height",1025178622),self__.height,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),self__.mines_amount,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mines","mines",-1960796490),self__.mines,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"open","open",-1763596448),self__.open,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"flags","flags",1775418075),self__.flags,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"marks","marks",-1844991497),self__.marks,null))], null),self__.__extmap));
}));

(minecljs.game.Game.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__36832){
var self__ = this;
var this__5339__auto____$1 = this;
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,self__.mines,self__.open,self__.flags,self__.marks,G__36832,self__.__extmap,self__.__hash));
}));

(minecljs.game.Game.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5346__auto__,(0)),cljs.core._nth.call(null,entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(minecljs.game.Game.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",-357266886,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"mines-amount","mines-amount",616804386,null),new cljs.core.Symbol(null,"mines","mines",-320264963,null),new cljs.core.Symbol(null,"open","open",-123064921,null),new cljs.core.Symbol(null,"flags","flags",-879017694,null),new cljs.core.Symbol(null,"marks","marks",-204459970,null)], null);
}));

(minecljs.game.Game.cljs$lang$type = true);

(minecljs.game.Game.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"minecljs.game/Game",null,(1),null));
}));

(minecljs.game.Game.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write.call(null,writer__5387__auto__,"minecljs.game/Game");
}));

/**
 * Positional factory function for minecljs.game/Game.
 */
minecljs.game.__GT_Game = (function minecljs$game$__GT_Game(status,width,height,mines_amount,mines,open,flags,marks){
return (new minecljs.game.Game(status,width,height,mines_amount,mines,open,flags,marks,null,null,null));
});

/**
 * Factory function for minecljs.game/Game, taking a map of keywords to field values.
 */
minecljs.game.map__GT_Game = (function minecljs$game$map__GT_Game(G__36836){
var extmap__5382__auto__ = (function (){var G__36846 = cljs.core.dissoc.call(null,G__36836,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),new cljs.core.Keyword(null,"mines","mines",-1960796490),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"marks","marks",-1844991497));
if(cljs.core.record_QMARK_.call(null,G__36836)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__36846);
} else {
return G__36846;
}
})();
return (new minecljs.game.Game(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(G__36836),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__36836),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__36836),new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141).cljs$core$IFn$_invoke$arity$1(G__36836),new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(G__36836),new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(G__36836),new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(G__36836),new cljs.core.Keyword(null,"marks","marks",-1844991497).cljs$core$IFn$_invoke$arity$1(G__36836),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});

devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.game","minecljs.game",1817424263),new cljs.core.Keyword(null,"game","game",-441523833)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"game",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.game !== 'undefined') && (typeof minecljs.game.t_minecljs$game36849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.game.t_minecljs$game36849 = (function (meta36850){
this.meta36850 = meta36850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.game.t_minecljs$game36849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36851,meta36850__$1){
var self__ = this;
var _36851__$1 = this;
return (new minecljs.game.t_minecljs$game36849(meta36850__$1));
}));

(minecljs.game.t_minecljs$game36849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36851){
var self__ = this;
var _36851__$1 = this;
return self__.meta36850;
}));

(minecljs.game.t_minecljs$game36849.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.game.t_minecljs$game36849.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Game state is a map with sets for open cells, cells with mines, cells with flags.\n   Marks are temporary, and will leave after every move.\n\n   Cell is just a vector of two numbers with position.\n\n   Status can be one of:\n   - `:not-initialized`\n   - `:active`\n   - `:failed`\n   - `:win`\n\n   Invariants:\n   1. status = `:active` \u2192 \u00AC(cell \u2208 flags \u2227 cell \u2208 open)\n   2. cell \u2208 open \u2227 cell \u2208 mines \u2192 status = `:failed`\n   3. status = `:initialized` \u2192 mines = \u2205\n   4. all-cells\\open = mines \u2192 status = `:win`")], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.game.t_minecljs$game36849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36850","meta36850",-1704670669,null)], null);
}));

(minecljs.game.t_minecljs$game36849.cljs$lang$type = true);

(minecljs.game.t_minecljs$game36849.cljs$lang$ctorStr = "minecljs.game/t_minecljs$game36849");

(minecljs.game.t_minecljs$game36849.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.game/t_minecljs$game36849");
}));

/**
 * Positional factory function for minecljs.game/t_minecljs$game36849.
 */
minecljs.game.__GT_t_minecljs$game36849 = (function minecljs$game$__GT_t_minecljs$game36849(meta36850){
return (new minecljs.game.t_minecljs$game36849(meta36850));
});

}

return (new minecljs.game.t_minecljs$game36849(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.game.new_game = (function minecljs$game$new_game(width,height,mines_amount){
return minecljs.game.map__GT_Game.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),mines_amount,new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"marks","marks",-1844991497),cljs.core.PersistentHashSet.EMPTY], null));
});
minecljs.game.preview_cell_type = (function minecljs$game$preview_cell_type(game,p__36852){
var vec__36853 = p__36852;
var x = cljs.core.nth.call(null,vec__36853,(0),null);
var y = cljs.core.nth.call(null,vec__36853,(1),null);
var ocr_36856 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game);
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36856,new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906))){
return new cljs.core.Keyword(null,"closed","closed",-919675359);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36858){if((e36858 instanceof Error)){
var e__28027__auto__ = e36858;
if((e__28027__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36856,new cljs.core.Keyword(null,"active","active",1895962068))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"marks","marks",-1844991497).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.Keyword(null,"mark","mark",-373816345);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.Keyword(null,"flag","flag",1088647881);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.Keyword(null,"mine-preview","mine-preview",-1678754082);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),minecljs.game.mines_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty-preview","empty-preview",-1756277821),minecljs.game.mines_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null);

}
}
}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e36859){if((e36859 instanceof Error)){
var e__28027__auto____$1 = e36859;
if((e__28027__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36856,new cljs.core.Keyword(null,"failed","failed",-1397425762))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.Keyword(null,"exploded","exploded",-931450631);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),minecljs.game.mines_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null);
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.Keyword(null,"defused","defused",-1674545666);
} else {
return new cljs.core.Keyword(null,"wrong-flag","wrong-flag",-559267509);
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.Keyword(null,"exploded","exploded",-931450631);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty-preview","empty-preview",-1756277821),minecljs.game.mines_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null);
}

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e36860){if((e36860 instanceof Error)){
var e__28027__auto____$2 = e36860;
if((e__28027__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36856,new cljs.core.Keyword(null,"win","win",-1624642689))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.Keyword(null,"defused","defused",-1674545666);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),minecljs.game.mines_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e36861){if((e36861 instanceof Error)){
var e__28027__auto____$3 = e36861;
if((e__28027__auto____$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_36856)].join('')));
} else {
throw e__28027__auto____$3;
}
} else {
throw e36861;

}
}} else {
throw e__28027__auto____$2;
}
} else {
throw e36860;

}
}} else {
throw e__28027__auto____$1;
}
} else {
throw e36859;

}
}} else {
throw e__28027__auto__;
}
} else {
throw e36858;

}
}});
minecljs.game.game_preview = (function minecljs$game$game_preview(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),(3),new cljs.core.Keyword(null,"margin","margin",-995903681),(2),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(function (){var ocr_36862 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game);
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36862,new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906))){
return new cljs.core.Keyword(null,"gray","gray",1013268388);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36864){if((e36864 instanceof Error)){
var e__28027__auto__ = e36864;
if((e__28027__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36862,new cljs.core.Keyword(null,"active","active",1895962068))){
return new cljs.core.Keyword(null,"transparent","transparent",-2073609949);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36865){if((e36865 instanceof Error)){
var e__28027__auto____$1 = e36865;
if((e__28027__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36862,new cljs.core.Keyword(null,"failed","failed",-1397425762))){
return new cljs.core.Keyword(null,"red","red",-969428204);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36866){if((e36866 instanceof Error)){
var e__28027__auto____$2 = e36866;
if((e__28027__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_36862,new cljs.core.Keyword(null,"win","win",-1624642689))){
return new cljs.core.Keyword(null,"limegreen","limegreen",-121735638);
} else {
throw cljs.core.match.backtrack;

}
}catch (e36867){if((e36867 instanceof Error)){
var e__28027__auto____$3 = e36867;
if((e__28027__auto____$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_36862)].join('')));
} else {
throw e__28027__auto____$3;
}
} else {
throw e36867;

}
}} else {
throw e__28027__auto____$2;
}
} else {
throw e36866;

}
}} else {
throw e__28027__auto____$1;
}
} else {
throw e36865;

}
}} else {
throw e__28027__auto__;
}
} else {
throw e36864;

}
}})(),new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(3),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"fit-content","fit-content",450803144)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.field,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"get-type","get-type",-1657795007),(function (x,y){
return minecljs.game.preview_cell_type.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
})], null)], null)], null);
});
minecljs.game.with_preview = (function minecljs$game$with_preview(content,preview){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),content], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(8)], null)], null),preview], null)], null);
});
minecljs.game.games_sequence = (function minecljs$game$games_sequence(var_args){
var args__5772__auto__ = [];
var len__5766__auto___36870 = arguments.length;
var i__5767__auto___36871 = (0);
while(true){
if((i__5767__auto___36871 < len__5766__auto___36870)){
args__5772__auto__.push((arguments[i__5767__auto___36871]));

var G__36872 = (i__5767__auto___36871 + (1));
i__5767__auto___36871 = G__36872;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return minecljs.game.games_sequence.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(minecljs.game.games_sequence.cljs$core$IFn$_invoke$arity$variadic = (function (game,actions){
return cljs.core.vec.call(null,cljs.core.cons.call(null,minecljs.ui.card_row,cljs.core.interpose.call(null,"\u2192",cljs.core.map.call(null,minecljs.game.game_preview,cljs.core.reductions.call(null,(function (game__$1,action){
return action.call(null,game__$1);
}),game,actions)))));
}));

(minecljs.game.games_sequence.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(minecljs.game.games_sequence.cljs$lang$applyTo = (function (seq36868){
var G__36869 = cljs.core.first.call(null,seq36868);
var seq36868__$1 = cljs.core.next.call(null,seq36868);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36869,seq36868__$1);
}));

devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.game","minecljs.game",1817424263),new cljs.core.Keyword(null,"new-game","new-game",167241648)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"new-game",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.game !== 'undefined') && (typeof minecljs.game.t_minecljs$game36873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.game.t_minecljs$game36873 = (function (meta36874){
this.meta36874 = meta36874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.game.t_minecljs$game36873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36875,meta36874__$1){
var self__ = this;
var _36875__$1 = this;
return (new minecljs.game.t_minecljs$game36873(meta36874__$1));
}));

(minecljs.game.t_minecljs$game36873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36875){
var self__ = this;
var _36875__$1 = this;
return self__.meta36874;
}));

(minecljs.game.t_minecljs$game36873.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.game.t_minecljs$game36873.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"When we create new game, it is not initialized, and all sets are empty\n   `[invariant 3]`.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,minecljs.game.new_game.call(null,(5),(5),(5)),minecljs.game.map__GT_Game.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),(5),new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"marks","marks",-1844991497),cljs.core.PersistentHashSet.EMPTY], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(new-game 5 5 5)\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,minecljs.game.map__GT_Game.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),(5),new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"marks","marks",-1844991497),cljs.core.PersistentHashSet.EMPTY], null)))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(new-game 5 5 5)\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,minecljs.game.map__GT_Game.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),(5),new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"marks","marks",-1844991497),cljs.core.PersistentHashSet.EMPTY], null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,minecljs.game.new_game.call(null,(5),(5),(5)))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"We can render such game, but as it isn't initialized,\n   nothing interesting here.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var game = minecljs.game.new_game.call(null,(5),(5),(5));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.game_preview,game], null);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Gray border - not initialized, green border - win, red border - failed:")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var game = minecljs.game.new_game.call(null,(3),(3),(0));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.ui.card_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.game_preview,game], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.game_preview,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"active","active",1895962068))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.game_preview,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"win","win",-1624642689))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.game_preview,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"failed","failed",-1397425762))], null)], null);
})()], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.game.t_minecljs$game36873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36874","meta36874",1308042699,null)], null);
}));

(minecljs.game.t_minecljs$game36873.cljs$lang$type = true);

(minecljs.game.t_minecljs$game36873.cljs$lang$ctorStr = "minecljs.game/t_minecljs$game36873");

(minecljs.game.t_minecljs$game36873.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.game/t_minecljs$game36873");
}));

/**
 * Positional factory function for minecljs.game/t_minecljs$game36873.
 */
minecljs.game.__GT_t_minecljs$game36873 = (function minecljs$game$__GT_t_minecljs$game36873(meta36874){
return (new minecljs.game.t_minecljs$game36873(meta36874));
});

}

return (new minecljs.game.t_minecljs$game36873(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.game.all_cells = (function minecljs$game$all_cells(game){
return cljs.core.set.call(null,(function (){var iter__5520__auto__ = (function minecljs$game$all_cells_$_iter__36876(s__36877){
return (new cljs.core.LazySeq(null,(function (){
var s__36877__$1 = s__36877;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__36877__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__36877__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function minecljs$game$all_cells_$_iter__36876_$_iter__36878(s__36879){
return (new cljs.core.LazySeq(null,((function (s__36877__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__36879__$1 = s__36879;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__36879__$1);
if(temp__5804__auto____$1){
var s__36879__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36879__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__36879__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__36881 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__36880 = (0);
while(true){
if((i__36880 < size__5519__auto__)){
var y = cljs.core._nth.call(null,c__5518__auto__,i__36880);
cljs.core.chunk_append.call(null,b__36881,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__36882 = (i__36880 + (1));
i__36880 = G__36882;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36881),minecljs$game$all_cells_$_iter__36876_$_iter__36878.call(null,cljs.core.chunk_rest.call(null,s__36879__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36881),null);
}
} else {
var y = cljs.core.first.call(null,s__36879__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),minecljs$game$all_cells_$_iter__36876_$_iter__36878.call(null,cljs.core.rest.call(null,s__36879__$2)));
}
} else {
return null;
}
break;
}
});})(s__36877__$1,x,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__36877__$1,x,xs__6360__auto__,temp__5804__auto__))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game))));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,minecljs$game$all_cells_$_iter__36876.call(null,cljs.core.rest.call(null,s__36877__$1)));
} else {
var G__36883 = cljs.core.rest.call(null,s__36877__$1);
s__36877__$1 = G__36883;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game)));
})());
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.game","minecljs.game",1817424263),new cljs.core.Keyword(null,"all-cells","all-cells",1716484958)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"all-cells",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.game !== 'undefined') && (typeof minecljs.game.t_minecljs$game36884 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.game.t_minecljs$game36884 = (function (meta36885){
this.meta36885 = meta36885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.game.t_minecljs$game36884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36886,meta36885__$1){
var self__ = this;
var _36886__$1 = this;
return (new minecljs.game.t_minecljs$game36884(meta36885__$1));
}));

(minecljs.game.t_minecljs$game36884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36886){
var self__ = this;
var _36886__$1 = this;
return self__.meta36885;
}));

(minecljs.game.t_minecljs$game36884.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.game.t_minecljs$game36884.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Returns all cells from game field.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,minecljs.game.all_cells.call(null,minecljs.game.new_game.call(null,(3),(3),(3))),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)])))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(all-cells (new-game 3 3 3))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)]))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(all-cells (new-game 3 3 3))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)]))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,minecljs.game.all_cells.call(null,minecljs.game.new_game.call(null,(3),(3),(3))))], null)], null))], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.game.t_minecljs$game36884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36885","meta36885",-1674012316,null)], null);
}));

(minecljs.game.t_minecljs$game36884.cljs$lang$type = true);

(minecljs.game.t_minecljs$game36884.cljs$lang$ctorStr = "minecljs.game/t_minecljs$game36884");

(minecljs.game.t_minecljs$game36884.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.game/t_minecljs$game36884");
}));

/**
 * Positional factory function for minecljs.game/t_minecljs$game36884.
 */
minecljs.game.__GT_t_minecljs$game36884 = (function minecljs$game$__GT_t_minecljs$game36884(meta36885){
return (new minecljs.game.t_minecljs$game36884(meta36885));
});

}

return (new minecljs.game.t_minecljs$game36884(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.game.cells_around = (function minecljs$game$cells_around(game,p__36887){
var vec__36888 = p__36887;
var x = cljs.core.nth.call(null,vec__36888,(0),null);
var y = cljs.core.nth.call(null,vec__36888,(1),null);
return cljs.core.set.call(null,(function (){var iter__5520__auto__ = (function minecljs$game$cells_around_$_iter__36891(s__36892){
return (new cljs.core.LazySeq(null,(function (){
var s__36892__$1 = s__36892;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__36892__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var dx = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__36892__$1,dx,xs__6360__auto__,temp__5804__auto__,vec__36888,x,y){
return (function minecljs$game$cells_around_$_iter__36891_$_iter__36893(s__36894){
return (new cljs.core.LazySeq(null,((function (s__36892__$1,dx,xs__6360__auto__,temp__5804__auto__,vec__36888,x,y){
return (function (){
var s__36894__$1 = s__36894;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__36894__$1);
if(temp__5804__auto____$1){
var s__36894__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36894__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__36894__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__36896 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__36895 = (0);
while(true){
if((i__36895 < size__5519__auto__)){
var dy = cljs.core._nth.call(null,c__5518__auto__,i__36895);
if(cljs.core.not_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))){
var x__$1 = (x + dx);
var y__$1 = (y + dy);
if((((x__$1 >= (0))) && ((x__$1 < new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game))))){
if((((y__$1 >= (0))) && ((y__$1 < new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game))))){
cljs.core.chunk_append.call(null,b__36896,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__36897 = (i__36895 + (1));
i__36895 = G__36897;
continue;
} else {
var G__36898 = (i__36895 + (1));
i__36895 = G__36898;
continue;
}
} else {
var G__36899 = (i__36895 + (1));
i__36895 = G__36899;
continue;
}
} else {
var G__36900 = (i__36895 + (1));
i__36895 = G__36900;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36896),minecljs$game$cells_around_$_iter__36891_$_iter__36893.call(null,cljs.core.chunk_rest.call(null,s__36894__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36896),null);
}
} else {
var dy = cljs.core.first.call(null,s__36894__$2);
if(cljs.core.not_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))){
var x__$1 = (x + dx);
var y__$1 = (y + dy);
if((((x__$1 >= (0))) && ((x__$1 < new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game))))){
if((((y__$1 >= (0))) && ((y__$1 < new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),minecljs$game$cells_around_$_iter__36891_$_iter__36893.call(null,cljs.core.rest.call(null,s__36894__$2)));
} else {
var G__36901 = cljs.core.rest.call(null,s__36894__$2);
s__36894__$1 = G__36901;
continue;
}
} else {
var G__36902 = cljs.core.rest.call(null,s__36894__$2);
s__36894__$1 = G__36902;
continue;
}
} else {
var G__36903 = cljs.core.rest.call(null,s__36894__$2);
s__36894__$1 = G__36903;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__36892__$1,dx,xs__6360__auto__,temp__5804__auto__,vec__36888,x,y))
,null,null));
});})(s__36892__$1,dx,xs__6360__auto__,temp__5804__auto__,vec__36888,x,y))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,minecljs$game$cells_around_$_iter__36891.call(null,cljs.core.rest.call(null,s__36892__$1)));
} else {
var G__36904 = cljs.core.rest.call(null,s__36892__$1);
s__36892__$1 = G__36904;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null));
})());
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.game","minecljs.game",1817424263),new cljs.core.Keyword(null,"cells-around","cells-around",35723822)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cells-around",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.game !== 'undefined') && (typeof minecljs.game.t_minecljs$game36905 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.game.t_minecljs$game36905 = (function (meta36906){
this.meta36906 = meta36906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.game.t_minecljs$game36905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36907,meta36906__$1){
var self__ = this;
var _36907__$1 = this;
return (new minecljs.game.t_minecljs$game36905(meta36906__$1));
}));

(minecljs.game.t_minecljs$game36905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36907){
var self__ = this;
var _36907__$1 = this;
return self__.meta36906;
}));

(minecljs.game.t_minecljs$game36905.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.game.t_minecljs$game36905.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Returns all cells around selected one:")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.with_preview,((cljs.core._EQ_.call(null,minecljs.game.cells_around.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.disj.call(null,minecljs.game.all_cells.call(null,minecljs.game.new_game.call(null,(3),(3),(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(cells-around (new-game 3 3 0) [1 1])\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,cljs.core.disj.call(null,minecljs.game.all_cells.call(null,minecljs.game.new_game.call(null,(3),(3),(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(cells-around (new-game 3 3 0) [1 1])\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,cljs.core.disj.call(null,minecljs.game.all_cells.call(null,minecljs.game.new_game.call(null,(3),(3),(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,minecljs.game.cells_around.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)))], null)], null)),(function (){var game = cljs.core.assoc.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"active","active",1895962068));
var around = minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.game_preview,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"flags","flags",1775418075),around)], null);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"...even on bigger fields: ")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.with_preview,((cljs.core._EQ_.call(null,minecljs.game.cells_around.call(null,minecljs.game.new_game.call(null,(5),(5),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null)])))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(cells-around (new-game 5 5 0) [2 2])\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null)]))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(cells-around (new-game 5 5 0) [2 2])\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null)]))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,minecljs.game.cells_around.call(null,minecljs.game.new_game.call(null,(5),(5),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)))], null)], null)),(function (){var game = cljs.core.assoc.call(null,minecljs.game.new_game.call(null,(5),(5),(0)),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"active","active",1895962068));
var around = minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.game_preview,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"flags","flags",1775418075),around)], null);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"No negative cells:")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.with_preview,((cljs.core._EQ_.call(null,minecljs.game.cells_around.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)])))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(cells-around (new-game 3 3 0) [0 0])\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)]))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(cells-around (new-game 3 3 0) [0 0])\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)]))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,minecljs.game.cells_around.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))], null)], null)),(function (){var game = cljs.core.assoc.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"active","active",1895962068));
var around = minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.game_preview,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"flags","flags",1775418075),around)], null);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"No cells out of field:")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.with_preview,((cljs.core._EQ_.call(null,minecljs.game.cells_around.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)])))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(cells-around (new-game 3 3 0) [2 2])\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)]))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(cells-around (new-game 3 3 0) [2 2])\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)]))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,minecljs.game.cells_around.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)))], null)], null)),(function (){var game = cljs.core.assoc.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"active","active",1895962068));
var around = minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.game_preview,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"flags","flags",1775418075),around)], null);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"No cells on 1\u00D71 field")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,minecljs.game.cells_around.call(null,minecljs.game.new_game.call(null,(1),(1),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.PersistentHashSet.EMPTY))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(cells-around (new-game 1 1 0) [0 0])\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.EMPTY)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(cells-around (new-game 1 1 0) [0 0])\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.EMPTY)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,minecljs.game.cells_around.call(null,minecljs.game.new_game.call(null,(1),(1),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))], null)], null))], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.game.t_minecljs$game36905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36906","meta36906",-1642517591,null)], null);
}));

(minecljs.game.t_minecljs$game36905.cljs$lang$type = true);

(minecljs.game.t_minecljs$game36905.cljs$lang$ctorStr = "minecljs.game/t_minecljs$game36905");

(minecljs.game.t_minecljs$game36905.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.game/t_minecljs$game36905");
}));

/**
 * Positional factory function for minecljs.game/t_minecljs$game36905.
 */
minecljs.game.__GT_t_minecljs$game36905 = (function minecljs$game$__GT_t_minecljs$game36905(meta36906){
return (new minecljs.game.t_minecljs$game36905(meta36906));
});

}

return (new minecljs.game.t_minecljs$game36905(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.game.mines_around = (function minecljs$game$mines_around(game,p__36908){
var vec__36909 = p__36908;
var x = cljs.core.nth.call(null,vec__36909,(0),null);
var y = cljs.core.nth.call(null,vec__36909,(1),null);
return cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__5520__auto__ = (function minecljs$game$mines_around_$_iter__36912(s__36913){
return (new cljs.core.LazySeq(null,(function (){
var s__36913__$1 = s__36913;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__36913__$1);
if(temp__5804__auto__){
var s__36913__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36913__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__36913__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__36915 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__36914 = (0);
while(true){
if((i__36914 < size__5519__auto__)){
var vec__36916 = cljs.core._nth.call(null,c__5518__auto__,i__36914);
var x__$1 = cljs.core.nth.call(null,vec__36916,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__36916,(1),null);
cljs.core.chunk_append.call(null,b__36915,(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?(1):(0)));

var G__36922 = (i__36914 + (1));
i__36914 = G__36922;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36915),minecljs$game$mines_around_$_iter__36912.call(null,cljs.core.chunk_rest.call(null,s__36913__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36915),null);
}
} else {
var vec__36919 = cljs.core.first.call(null,s__36913__$2);
var x__$1 = cljs.core.nth.call(null,vec__36919,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__36919,(1),null);
return cljs.core.cons.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?(1):(0)),minecljs$game$mines_around_$_iter__36912.call(null,cljs.core.rest.call(null,s__36913__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
})());
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.game","minecljs.game",1817424263),new cljs.core.Keyword(null,"mines-around","mines-around",-1565638268)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"mines-around",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.game !== 'undefined') && (typeof minecljs.game.t_minecljs$game36923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.game.t_minecljs$game36923 = (function (meta36924){
this.meta36924 = meta36924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.game.t_minecljs$game36923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36925,meta36924__$1){
var self__ = this;
var _36925__$1 = this;
return (new minecljs.game.t_minecljs$game36923(meta36924__$1));
}));

(minecljs.game.t_minecljs$game36923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36925){
var self__ = this;
var _36925__$1 = this;
return self__.meta36924;
}));

(minecljs.game.t_minecljs$game36923.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.game.t_minecljs$game36923.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Returns amount of mines around selected cell:")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.with_preview,((cljs.core._EQ_.call(null,(function (){var game = minecljs.game.new_game.call(null,(3),(3),(8));
return minecljs.game.mines_around.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"mines","mines",-1960796490),minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
})(),(8)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(let\n [game (new-game 3 3 8)]\n (->\n  game\n  (assoc :mines (cells-around game [1 1]))\n  (mines-around [1 1])))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,(8))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(let\n [game (new-game 3 3 8)]\n (->\n  game\n  (assoc :mines (cells-around game [1 1]))\n  (mines-around [1 1])))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,(8))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,(function (){var game = minecljs.game.new_game.call(null,(3),(3),(8));
return minecljs.game.mines_around.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"mines","mines",-1960796490),minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
})())], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.game_preview,(function (){var game = cljs.core.assoc.call(null,minecljs.game.new_game.call(null,(3),(3),(8)),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"active","active",1895962068));
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"mines","mines",-1960796490),minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.with_preview,((cljs.core._EQ_.call(null,(function (){var game = minecljs.game.new_game.call(null,(3),(3),(2));
return minecljs.game.mines_around.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)])),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
})(),(2)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(let\n [game (new-game 3 3 2)]\n (-> game (assoc :mines #{[2 2] [0 0]}) (mines-around [1 1])))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,(2))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(let\n [game (new-game 3 3 2)]\n (-> game (assoc :mines #{[2 2] [0 0]}) (mines-around [1 1])))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,(2))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,(function (){var game = minecljs.game.new_game.call(null,(3),(3),(2));
return minecljs.game.mines_around.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)])),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
})())], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.game_preview,(function (){var game = cljs.core.assoc.call(null,minecljs.game.new_game.call(null,(3),(3),(2)),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"active","active",1895962068));
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)]));
})()], null)], null)], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.game.t_minecljs$game36923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36924","meta36924",665230858,null)], null);
}));

(minecljs.game.t_minecljs$game36923.cljs$lang$type = true);

(minecljs.game.t_minecljs$game36923.cljs$lang$ctorStr = "minecljs.game/t_minecljs$game36923");

(minecljs.game.t_minecljs$game36923.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.game/t_minecljs$game36923");
}));

/**
 * Positional factory function for minecljs.game/t_minecljs$game36923.
 */
minecljs.game.__GT_t_minecljs$game36923 = (function minecljs$game$__GT_t_minecljs$game36923(meta36924){
return (new minecljs.game.t_minecljs$game36923(meta36924));
});

}

return (new minecljs.game.t_minecljs$game36923(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.game.flag_cell = (function minecljs$game$flag_cell(game,p__36926){
var vec__36927 = p__36926;
var x = cljs.core.nth.call(null,vec__36927,(0),null);
var y = cljs.core.nth.call(null,vec__36927,(1),null);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game))){
throw new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-should-be-active","game-should-be-active",1478680654),game], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
throw new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"impossible-to-flag-open-cell","impossible-to-flag-open-cell",246652325),game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return cljs.core.assoc.call(null,cljs.core.update.call(null,game,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.disj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"marks","marks",-1844991497),cljs.core.PersistentHashSet.EMPTY);
} else {
return cljs.core.assoc.call(null,cljs.core.update.call(null,game,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"marks","marks",-1844991497),cljs.core.PersistentHashSet.EMPTY);

}
}
}
});
minecljs.game.mark_cell = (function minecljs$game$mark_cell(game,p__36930){
var vec__36931 = p__36930;
var x = cljs.core.nth.call(null,vec__36931,(0),null);
var y = cljs.core.nth.call(null,vec__36931,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game))){
} else {
throw (new Error("Assert failed: (= :active (:status game))"));
}

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
} else {
throw (new Error("Assert failed: (not ((:open game) [x y]))"));
}

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
} else {
throw (new Error("Assert failed: (not ((:flags game) [x y]))"));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"marks","marks",-1844991497).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return cljs.core.update.call(null,game,new cljs.core.Keyword(null,"marks","marks",-1844991497),cljs.core.disj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return cljs.core.update.call(null,game,new cljs.core.Keyword(null,"marks","marks",-1844991497),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.game","minecljs.game",1817424263),new cljs.core.Keyword(null,"flag-cell","flag-cell",-1883548968)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"flag-cell",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.game !== 'undefined') && (typeof minecljs.game.t_minecljs$game36937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.game.t_minecljs$game36937 = (function (meta36938){
this.meta36938 = meta36938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.game.t_minecljs$game36937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36939,meta36938__$1){
var self__ = this;
var _36939__$1 = this;
return (new minecljs.game.t_minecljs$game36937(meta36938__$1));
}));

(minecljs.game.t_minecljs$game36937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36939){
var self__ = this;
var _36939__$1 = this;
return self__.meta36938;
}));

(minecljs.game.t_minecljs$game36937.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.game.t_minecljs$game36937.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Game state transition, when player flag closed cell.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"We can't flag open cell, we can't flag when game is not active.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var game = minecljs.game.map__GT_Game.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"width","width",-384071477),(3),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),(2),new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)]),new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"marks","marks",-1844991497),cljs.core.PersistentHashSet.EMPTY], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.markdown,"When we flag [1 1]:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.games_sequence,game,(function (p1__36934_SHARP_){
return minecljs.game.flag_cell.call(null,p1__36934_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.markdown,"When we flag [1 1] again:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.games_sequence,game,(function (p1__36935_SHARP_){
return minecljs.game.flag_cell.call(null,p1__36935_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
}),(function (p1__36936_SHARP_){
return minecljs.game.flag_cell.call(null,p1__36936_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
})], null)], null);
})()], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.game.t_minecljs$game36937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36938","meta36938",2088901572,null)], null);
}));

(minecljs.game.t_minecljs$game36937.cljs$lang$type = true);

(minecljs.game.t_minecljs$game36937.cljs$lang$ctorStr = "minecljs.game/t_minecljs$game36937");

(minecljs.game.t_minecljs$game36937.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.game/t_minecljs$game36937");
}));

/**
 * Positional factory function for minecljs.game/t_minecljs$game36937.
 */
minecljs.game.__GT_t_minecljs$game36937 = (function minecljs$game$__GT_t_minecljs$game36937(meta36938){
return (new minecljs.game.t_minecljs$game36937(meta36938));
});

}

return (new minecljs.game.t_minecljs$game36937(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.game.cells_to_open = (function minecljs$game$cells_to_open(game,p__36940){
var vec__36941 = p__36940;
var x = cljs.core.nth.call(null,vec__36941,(0),null);
var y = cljs.core.nth.call(null,vec__36941,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
throw new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-is-already-open","cell-is-already-open",-1392668734),game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
throw new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells-with-flag-should-not-be-open","cells-with-flag-should-not-be-open",-310305157),game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null);
} else {
var queue = (new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null,(1),null));
var to_open = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,queue)){
return to_open;
} else {
if(((((cljs.core.seq_QMARK_.call(null,queue)) || (cljs.core.sequential_QMARK_.call(null,queue)))) && (cljs.core.seq.call(null,queue)))){
var queue_head__36950 = cljs.core.first.call(null,queue);
if(((cljs.core.vector_QMARK_.call(null,queue_head__36950)) && ((cljs.core.count.call(null,queue_head__36950) === 2)))){
var x_STAR_ = cljs.core.nth.call(null,queue_head__36950,(0));
var y_STAR_ = cljs.core.nth.call(null,queue_head__36950,(1));
var queue_STAR_ = cljs.core.rest.call(null,queue);
if(cljs.core.truth_(to_open.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null)))){
var G__36954 = queue_STAR_;
var G__36955 = to_open;
queue = G__36954;
to_open = G__36955;
continue;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null)))){
var G__36956 = queue_STAR_;
var G__36957 = to_open;
queue = G__36956;
to_open = G__36957;
continue;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null)))){
return cljs.core.conj.call(null,to_open,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null));
} else {
if((minecljs.game.mines_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null)) > (0))){
var G__36958 = queue_STAR_;
var G__36959 = cljs.core.conj.call(null,to_open,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null));
queue = G__36958;
to_open = G__36959;
continue;
} else {
var G__36960 = cljs.core.concat.call(null,queue_STAR_,minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null)));
var G__36961 = cljs.core.conj.call(null,to_open,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null));
queue = G__36960;
to_open = G__36961;
continue;

}
}
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queue)].join('')));

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queue)].join('')));

}

}
break;
}

}
}
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.game","minecljs.game",1817424263),new cljs.core.Keyword(null,"cells-to-open","cells-to-open",-231388420)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cells-to-open",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.game !== 'undefined') && (typeof minecljs.game.t_minecljs$game36963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.game.t_minecljs$game36963 = (function (meta36964){
this.meta36964 = meta36964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.game.t_minecljs$game36963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36965,meta36964__$1){
var self__ = this;
var _36965__$1 = this;
return (new minecljs.game.t_minecljs$game36963(meta36964__$1));
}));

(minecljs.game.t_minecljs$game36963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36965){
var self__ = this;
var _36965__$1 = this;
return self__.meta36964;
}));

(minecljs.game.t_minecljs$game36963.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.game.t_minecljs$game36963.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Returns set of cells that should be just open after clicking on selected cell.\n   Open all empty cells. If no mines around, open all cells around as well.\n   If mine, then just open it.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var game = minecljs.game.map__GT_Game.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"width","width",-384071477),(5),new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),(2),new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"marks","marks",-1844991497),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null)])], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.markdown,"Clicking on [3 3]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.games_sequence,game,(function (p1__36962_SHARP_){
return cljs.core.assoc.call(null,p1__36962_SHARP_,new cljs.core.Keyword(null,"open","open",-1763596448),minecljs.game.cells_to_open.call(null,p1__36962_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)));
})], null)], null);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Tests:")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,minecljs.game.cells_to_open.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),minecljs.game.all_cells.call(null,minecljs.game.new_game.call(null,(3),(3),(0)))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(cells-to-open (new-game 3 3 0) [1 1])\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,minecljs.game.all_cells.call(null,minecljs.game.new_game.call(null,(3),(3),(0))))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(cells-to-open (new-game 3 3 0) [1 1])\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,minecljs.game.all_cells.call(null,minecljs.game.new_game.call(null,(3),(3),(0))))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,minecljs.game.cells_to_open.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,(function (){var game = cljs.core.assoc.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)]));
return minecljs.game.cells_to_open.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
})(),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)])))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(let\n [game (assoc (new-game 3 3 0) :mines #{[0 0]})]\n (cells-to-open game [1 1]))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)]))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(let\n [game (assoc (new-game 3 3 0) :mines #{[0 0]})]\n (cells-to-open game [1 1]))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)]))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,(function (){var game = cljs.core.assoc.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)]));
return minecljs.game.cells_to_open.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
})())], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,(function (){var game = cljs.core.assoc.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)]));
return minecljs.game.cells_to_open.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
})(),cljs.core.disj.call(null,minecljs.game.all_cells.call(null,minecljs.game.new_game.call(null,(3),(3),(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(let\n [game (assoc (new-game 3 3 0) :mines #{[0 0]})]\n (cells-to-open game [2 2]))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,cljs.core.disj.call(null,minecljs.game.all_cells.call(null,minecljs.game.new_game.call(null,(3),(3),(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(let\n [game (assoc (new-game 3 3 0) :mines #{[0 0]})]\n (cells-to-open game [2 2]))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,cljs.core.disj.call(null,minecljs.game.all_cells.call(null,minecljs.game.new_game.call(null,(3),(3),(0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,(function (){var game = cljs.core.assoc.call(null,minecljs.game.new_game.call(null,(3),(3),(0)),new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)]));
return minecljs.game.cells_to_open.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
})())], null)], null))], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.game.t_minecljs$game36963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta36964","meta36964",-1020610795,null)], null);
}));

(minecljs.game.t_minecljs$game36963.cljs$lang$type = true);

(minecljs.game.t_minecljs$game36963.cljs$lang$ctorStr = "minecljs.game/t_minecljs$game36963");

(minecljs.game.t_minecljs$game36963.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.game/t_minecljs$game36963");
}));

/**
 * Positional factory function for minecljs.game/t_minecljs$game36963.
 */
minecljs.game.__GT_t_minecljs$game36963 = (function minecljs$game$__GT_t_minecljs$game36963(meta36964){
return (new minecljs.game.t_minecljs$game36963(meta36964));
});

}

return (new minecljs.game.t_minecljs$game36963(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.game.open_cell = (function minecljs$game$open_cell(game,p__36966){
var vec__36967 = p__36966;
var x = cljs.core.nth.call(null,vec__36967,(0),null);
var y = cljs.core.nth.call(null,vec__36967,(1),null);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game))){
throw new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-should-be-active","game-should-be-active",1478680654),game], null);
} else {
var to_open = minecljs.game.cells_to_open.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var game__$1 = cljs.core.update.call(null,game,new cljs.core.Keyword(null,"open","open",-1763596448),clojure.set.union,to_open);
var game__$2 = cljs.core.update.call(null,game__$1,new cljs.core.Keyword(null,"flags","flags",1775418075),clojure.set.difference,to_open);
var game__$3 = cljs.core.assoc.call(null,game__$2,new cljs.core.Keyword(null,"marks","marks",-1844991497),cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(cljs.core.not_empty.call(null,clojure.set.intersection.call(null,new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game__$3),new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game__$3))))){
return cljs.core.assoc.call(null,game__$3,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"failed","failed",-1397425762));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game__$3),clojure.set.difference.call(null,minecljs.game.all_cells.call(null,game__$3),new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game__$3)))){
return cljs.core.assoc.call(null,game__$3,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"win","win",-1624642689));
} else {
return game__$3;

}
}
}
});
minecljs.game.flags_around = (function minecljs$game$flags_around(game,p__36970){
var vec__36971 = p__36970;
var x = cljs.core.nth.call(null,vec__36971,(0),null);
var y = cljs.core.nth.call(null,vec__36971,(1),null);
return clojure.set.intersection.call(null,minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(game));
});
minecljs.game.closed_around_without_flags = (function minecljs$game$closed_around_without_flags(game,p__36974){
var vec__36975 = p__36974;
var x = cljs.core.nth.call(null,vec__36975,(0),null);
var y = cljs.core.nth.call(null,vec__36975,(1),null);
return clojure.set.difference.call(null,minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),clojure.set.union.call(null,new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(game)));
});
minecljs.game.closed_around_with_flags = (function minecljs$game$closed_around_with_flags(game,p__36978){
var vec__36979 = p__36978;
var x = cljs.core.nth.call(null,vec__36979,(0),null);
var y = cljs.core.nth.call(null,vec__36979,(1),null);
return clojure.set.difference.call(null,minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game));
});
minecljs.game.open_or_flag_around = (function minecljs$game$open_or_flag_around(game,p__36982){
var vec__36983 = p__36982;
var x = cljs.core.nth.call(null,vec__36983,(0),null);
var y = cljs.core.nth.call(null,vec__36983,(1),null);
if(cljs.core._EQ_){
} else {
throw (new Error("Assert failed: ="));
}



if(cljs.core.truth_(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game))){
} else {
throw (new Error("Assert failed: (:status game)"));
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,minecljs.game.flags_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),minecljs.game.mines_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return cljs.core.reduce.call(null,(function (game__$1,p__36986){
var vec__36987 = p__36986;
var x__$1 = cljs.core.nth.call(null,vec__36987,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__36987,(1),null);
if((!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game__$1))))){
return cljs.core.reduced.call(null,game__$1);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game__$1).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))){
return game__$1;
} else {
return minecljs.game.open_cell.call(null,game__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

}
}
}),game,minecljs.game.closed_around_without_flags.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,minecljs.game.closed_around_with_flags.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),minecljs.game.mines_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return cljs.core.reduce.call(null,minecljs.game.flag_cell,game,minecljs.game.closed_around_without_flags.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
} else {
return game;

}
}
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.game","minecljs.game",1817424263),new cljs.core.Keyword(null,"open-cell","open-cell",1905935913)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"open-cell",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.game !== 'undefined') && (typeof minecljs.game.t_minecljs$game37000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.game.t_minecljs$game37000 = (function (meta37001){
this.meta37001 = meta37001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.game.t_minecljs$game37000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37002,meta37001__$1){
var self__ = this;
var _37002__$1 = this;
return (new minecljs.game.t_minecljs$game37000(meta37001__$1));
}));

(minecljs.game.t_minecljs$game37000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37002){
var self__ = this;
var _37002__$1 = this;
return self__.meta37001;
}));

(minecljs.game.t_minecljs$game37000.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.game.t_minecljs$game37000.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Game state transition, when player open some cell.\n\n   Can change game state to `:win` or `:failed`.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var game = minecljs.game.map__GT_Game.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"width","width",-384071477),(3),new cljs.core.Keyword(null,"height","height",1025178622),(3),new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),(2),new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)]),new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"marks","marks",-1844991497),cljs.core.PersistentHashSet.EMPTY], null));
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.markdown,"Let `game` be:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.game_preview,game], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.markdown,"When we open [1 1]:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.games_sequence,game,(function (p1__36990_SHARP_){
return minecljs.game.open_cell.call(null,p1__36990_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.markdown,"When we open [0 2]:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.games_sequence,game,(function (p1__36991_SHARP_){
return minecljs.game.open_cell.call(null,p1__36991_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.markdown,"When we open [0 0]:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.games_sequence,game,(function (p1__36992_SHARP_){
return minecljs.game.open_cell.call(null,p1__36992_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.markdown,"When we flag [2 2] and then open [0 0]:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.games_sequence,game,(function (p1__36993_SHARP_){
return minecljs.game.flag_cell.call(null,p1__36993_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
}),(function (p1__36994_SHARP_){
return minecljs.game.open_cell.call(null,p1__36994_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.markdown,"When we open [2 0] and [0 2] (all cells except bombs):"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.games_sequence,game,(function (p1__36995_SHARP_){
return minecljs.game.open_cell.call(null,p1__36995_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null));
}),(function (p1__36996_SHARP_){
return minecljs.game.open_cell.call(null,p1__36996_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.markdown,"Flag disappears when cell is opened. Open [2 0]:"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.games_sequence,game,(function (p1__36997_SHARP_){
return minecljs.game.flag_cell.call(null,p1__36997_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
}),(function (p1__36998_SHARP_){
return minecljs.game.flag_cell.call(null,p1__36998_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
}),(function (p1__36999_SHARP_){
return minecljs.game.open_cell.call(null,p1__36999_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null));
})], null)], null);
})()], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.game.t_minecljs$game37000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta37001","meta37001",-1521223215,null)], null);
}));

(minecljs.game.t_minecljs$game37000.cljs$lang$type = true);

(minecljs.game.t_minecljs$game37000.cljs$lang$ctorStr = "minecljs.game/t_minecljs$game37000");

(minecljs.game.t_minecljs$game37000.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.game/t_minecljs$game37000");
}));

/**
 * Positional factory function for minecljs.game/t_minecljs$game37000.
 */
minecljs.game.__GT_t_minecljs$game37000 = (function minecljs$game$__GT_t_minecljs$game37000(meta37001){
return (new minecljs.game.t_minecljs$game37000(meta37001));
});

}

return (new minecljs.game.t_minecljs$game37000(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.game.random_mines = (function minecljs$game$random_mines(game,p__37003){
var vec__37004 = p__37003;
var start_x = cljs.core.nth.call(null,vec__37004,(0),null);
var start_y = cljs.core.nth.call(null,vec__37004,(1),null);
var available_cells = clojure.set.difference.call(null,cljs.core.disj.call(null,minecljs.game.all_cells.call(null,game),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_x,start_y], null)),minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_x,start_y], null)));
return minecljs.random.random_subset.call(null,available_cells,new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141).cljs$core$IFn$_invoke$arity$1(game));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.game","minecljs.game",1817424263),new cljs.core.Keyword(null,"random-mines","random-mines",-987971564)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"random-mines",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.game !== 'undefined') && (typeof minecljs.game.t_minecljs$game37007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.game.t_minecljs$game37007 = (function (meta37008){
this.meta37008 = meta37008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.game.t_minecljs$game37007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37009,meta37008__$1){
var self__ = this;
var _37009__$1 = this;
return (new minecljs.game.t_minecljs$game37007(meta37008__$1));
}));

(minecljs.game.t_minecljs$game37007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37009){
var self__ = this;
var _37009__$1 = this;
return self__.meta37008;
}));

(minecljs.game.t_minecljs$game37007.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.game.t_minecljs$game37007.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Returns random set of mines.\n   \n   Mines can't be placed in or around start cell.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,(function (){var _STAR_rand_STAR__orig_val__37010 = minecljs.random._STAR_rand_STAR_;
var _STAR_rand_STAR__temp_val__37011 = minecljs.random.make_random.call(null,(42));
(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__temp_val__37011);

try{return minecljs.game.random_mines.call(null,minecljs.game.new_game.call(null,(5),(5),(5)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
}finally {(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__orig_val__37010);
}})(),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)])))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Input","(with-random-seed 42 (random-mines (new-game 5 5 5) [2 2]))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"success","success",1890645906),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)]))], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Input","(with-random-seed 42 (random-mines (new-game 5 5 5) [2 2]))\n"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Result",minecljs.defcard.pretty.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)]))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.defcard.test_block,new cljs.core.Keyword(null,"fail","fail",1706214930),"Expected",minecljs.defcard.pretty.call(null,(function (){var _STAR_rand_STAR__orig_val__37012 = minecljs.random._STAR_rand_STAR_;
var _STAR_rand_STAR__temp_val__37013 = minecljs.random.make_random.call(null,(42));
(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__temp_val__37013);

try{return minecljs.game.random_mines.call(null,minecljs.game.new_game.call(null,(5),(5),(5)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
}finally {(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__orig_val__37012);
}})())], null)], null))], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.game.t_minecljs$game37007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta37008","meta37008",1886643711,null)], null);
}));

(minecljs.game.t_minecljs$game37007.cljs$lang$type = true);

(minecljs.game.t_minecljs$game37007.cljs$lang$ctorStr = "minecljs.game/t_minecljs$game37007");

(minecljs.game.t_minecljs$game37007.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.game/t_minecljs$game37007");
}));

/**
 * Positional factory function for minecljs.game/t_minecljs$game37007.
 */
minecljs.game.__GT_t_minecljs$game37007 = (function minecljs$game$__GT_t_minecljs$game37007(meta37008){
return (new minecljs.game.t_minecljs$game37007(meta37008));
});

}

return (new minecljs.game.t_minecljs$game37007(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
minecljs.game.initialize = (function minecljs$game$initialize(game,p__37014){
var vec__37015 = p__37014;
var start_x = cljs.core.nth.call(null,vec__37015,(0),null);
var start_y = cljs.core.nth.call(null,vec__37015,(1),null);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game))){
throw new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can't-initialize-game-twice","can't-initialize-game-twice",-1415093411),game], null);
} else {
return minecljs.game.open_cell.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"active","active",1895962068)),new cljs.core.Keyword(null,"mines","mines",-1960796490),minecljs.game.random_mines.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_x,start_y], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_x,start_y], null));
}
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minecljs.game","minecljs.game",1817424263),new cljs.core.Keyword(null,"initialize","initialize",609952913)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"initialize",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof minecljs !== 'undefined') && (typeof minecljs.game !== 'undefined') && (typeof minecljs.game.t_minecljs$game37018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
minecljs.game.t_minecljs$game37018 = (function (meta37019){
this.meta37019 = meta37019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(minecljs.game.t_minecljs$game37018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37020,meta37019__$1){
var self__ = this;
var _37020__$1 = this;
return (new minecljs.game.t_minecljs$game37018(meta37019__$1));
}));

(minecljs.game.t_minecljs$game37018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37020){
var self__ = this;
var _37020__$1 = this;
return self__.meta37019;
}));

(minecljs.game.t_minecljs$game37018.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(minecljs.game.t_minecljs$game37018.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__32507__auto__,devcard_opts__32508__auto__){
var self__ = this;
var this__32507__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__32508__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__32526__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Game state transition, when player open some cell for first time.\n\n   Plants mines on field, changes game-status to `:active`.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Game example:")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),minecljs.defcard.markup_block.call(null,"[games-sequence\n (new-game 5 5 3)\n (fn [%] (with-random-seed 50 (initialize % [3 3])))\n (fn [%] (flag-cell % [1 2]))\n (fn [%] (flag-cell % [0 2]))\n (fn [%] (open-cell % [1 3]))\n (fn [%] (flag-cell % [1 4]))\n (fn [%] (open-cell % [0 3]))\n (fn [%] (open-cell % [0 4]))]\n",new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.games_sequence,minecljs.game.new_game.call(null,(5),(5),(3)),(function (_PERCENT_){
var _STAR_rand_STAR__orig_val__37021 = minecljs.random._STAR_rand_STAR_;
var _STAR_rand_STAR__temp_val__37022 = minecljs.random.make_random.call(null,(50));
(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__temp_val__37022);

try{return minecljs.game.initialize.call(null,_PERCENT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null));
}finally {(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__orig_val__37021);
}}),(function (_PERCENT_){
return minecljs.game.flag_cell.call(null,_PERCENT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
}),(function (_PERCENT_){
return minecljs.game.flag_cell.call(null,_PERCENT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null));
}),(function (_PERCENT_){
return minecljs.game.open_cell.call(null,_PERCENT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null));
}),(function (_PERCENT_){
return minecljs.game.flag_cell.call(null,_PERCENT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4)], null));
}),(function (_PERCENT_){
return minecljs.game.open_cell.call(null,_PERCENT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null));
}),(function (_PERCENT_){
return minecljs.game.open_cell.call(null,_PERCENT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null));
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),devcards.core.markdown__GT_react.call(null,"Failed game example:")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),minecljs.defcard.markup_block.call(null,"[games-sequence\n (new-game 5 5 3)\n (fn [%] (with-random-seed 100 (initialize % [2 2])))\n (fn [%] (open-cell % [0 3]))]\n",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minecljs.game.games_sequence,minecljs.game.new_game.call(null,(5),(5),(3)),(function (_PERCENT_){
var _STAR_rand_STAR__orig_val__37023 = minecljs.random._STAR_rand_STAR_;
var _STAR_rand_STAR__temp_val__37024 = minecljs.random.make_random.call(null,(100));
(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__temp_val__37024);

try{return minecljs.game.initialize.call(null,_PERCENT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
}finally {(minecljs.random._STAR_rand_STAR_ = _STAR_rand_STAR__orig_val__37023);
}}),(function (_PERCENT_){
return minecljs.game.open_cell.call(null,_PERCENT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null));
})], null))], null)], null);
if(cljs.core.fn_QMARK_.call(null,v__32526__auto__)){
return (function (data_atom__32527__auto__,owner__32528__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__32526__auto__,data_atom__32527__auto__,owner__32528__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__32526__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__32508__auto__))));
}));

(minecljs.game.t_minecljs$game37018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta37019","meta37019",-513122008,null)], null);
}));

(minecljs.game.t_minecljs$game37018.cljs$lang$type = true);

(minecljs.game.t_minecljs$game37018.cljs$lang$ctorStr = "minecljs.game/t_minecljs$game37018");

(minecljs.game.t_minecljs$game37018.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"minecljs.game/t_minecljs$game37018");
}));

/**
 * Positional factory function for minecljs.game/t_minecljs$game37018.
 */
minecljs.game.__GT_t_minecljs$game37018 = (function minecljs$game$__GT_t_minecljs$game37018(meta37019){
return (new minecljs.game.t_minecljs$game37018(meta37019));
});

}

return (new minecljs.game.t_minecljs$game37018(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

//# sourceMappingURL=game.js.map?rel=1654704817154
