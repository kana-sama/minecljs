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

(minecljs.game.Game.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k31710,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__31714 = k31710;
var G__31714__$1 = (((G__31714 instanceof cljs.core.Keyword))?G__31714.fqn:null);
switch (G__31714__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k31710,else__5343__auto__);

}
}));

(minecljs.game.Game.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5363__auto__,p__31715){
var vec__31716 = p__31715;
var k__5364__auto__ = cljs.core.nth.call(null,vec__31716,(0),null);
var v__5365__auto__ = cljs.core.nth.call(null,vec__31716,(1),null);
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

(minecljs.game.Game.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31709){
var self__ = this;
var G__31709__$1 = this;
return (new cljs.core.RecordIter((0),G__31709__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),new cljs.core.Keyword(null,"mines","mines",-1960796490),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"marks","marks",-1844991497)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

(minecljs.game.Game.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31711,other31712){
var self__ = this;
var this31711__$1 = this;
return (((!((other31712 == null)))) && ((((this31711__$1.constructor === other31712.constructor)) && (((cljs.core._EQ_.call(null,this31711__$1.status,other31712.status)) && (((cljs.core._EQ_.call(null,this31711__$1.width,other31712.width)) && (((cljs.core._EQ_.call(null,this31711__$1.height,other31712.height)) && (((cljs.core._EQ_.call(null,this31711__$1.mines_amount,other31712.mines_amount)) && (((cljs.core._EQ_.call(null,this31711__$1.mines,other31712.mines)) && (((cljs.core._EQ_.call(null,this31711__$1.open,other31712.open)) && (((cljs.core._EQ_.call(null,this31711__$1.flags,other31712.flags)) && (((cljs.core._EQ_.call(null,this31711__$1.marks,other31712.marks)) && (cljs.core._EQ_.call(null,this31711__$1.__extmap,other31712.__extmap)))))))))))))))))))));
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

(minecljs.game.Game.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k31710){
var self__ = this;
var this__5347__auto____$1 = this;
var G__31719 = k31710;
var G__31719__$1 = (((G__31719 instanceof cljs.core.Keyword))?G__31719.fqn:null);
switch (G__31719__$1) {
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
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k31710);

}
}));

(minecljs.game.Game.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__31709){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__31720 = cljs.core.keyword_identical_QMARK_;
var expr__31721 = k__5349__auto__;
if(cljs.core.truth_(pred__31720.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),expr__31721))){
return (new minecljs.game.Game(G__31709,self__.width,self__.height,self__.mines_amount,self__.mines,self__.open,self__.flags,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31720.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__31721))){
return (new minecljs.game.Game(self__.status,G__31709,self__.height,self__.mines_amount,self__.mines,self__.open,self__.flags,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31720.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__31721))){
return (new minecljs.game.Game(self__.status,self__.width,G__31709,self__.mines_amount,self__.mines,self__.open,self__.flags,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31720.call(null,new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),expr__31721))){
return (new minecljs.game.Game(self__.status,self__.width,self__.height,G__31709,self__.mines,self__.open,self__.flags,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31720.call(null,new cljs.core.Keyword(null,"mines","mines",-1960796490),expr__31721))){
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,G__31709,self__.open,self__.flags,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31720.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),expr__31721))){
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,self__.mines,G__31709,self__.flags,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31720.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075),expr__31721))){
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,self__.mines,self__.open,G__31709,self__.marks,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31720.call(null,new cljs.core.Keyword(null,"marks","marks",-1844991497),expr__31721))){
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,self__.mines,self__.open,self__.flags,G__31709,self__.__meta,self__.__extmap,null));
} else {
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,self__.mines,self__.open,self__.flags,self__.marks,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5349__auto__,G__31709),null));
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

(minecljs.game.Game.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__31709){
var self__ = this;
var this__5339__auto____$1 = this;
return (new minecljs.game.Game(self__.status,self__.width,self__.height,self__.mines_amount,self__.mines,self__.open,self__.flags,self__.marks,G__31709,self__.__extmap,self__.__hash));
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
minecljs.game.map__GT_Game = (function minecljs$game$map__GT_Game(G__31713){
var extmap__5382__auto__ = (function (){var G__31723 = cljs.core.dissoc.call(null,G__31713,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),new cljs.core.Keyword(null,"mines","mines",-1960796490),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"marks","marks",-1844991497));
if(cljs.core.record_QMARK_.call(null,G__31713)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31723);
} else {
return G__31723;
}
})();
return (new minecljs.game.Game(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(G__31713),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__31713),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__31713),new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141).cljs$core$IFn$_invoke$arity$1(G__31713),new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(G__31713),new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(G__31713),new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(G__31713),new cljs.core.Keyword(null,"marks","marks",-1844991497).cljs$core$IFn$_invoke$arity$1(G__31713),null,cljs.core.not_empty.call(null,extmap__5382__auto__),null));
});

minecljs.game.new_game = (function minecljs$game$new_game(width,height,mines_amount){
return minecljs.game.map__GT_Game.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141),mines_amount,new cljs.core.Keyword(null,"mines","mines",-1960796490),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"marks","marks",-1844991497),cljs.core.PersistentHashSet.EMPTY], null));
});
minecljs.game.preview_cell_type = (function minecljs$game$preview_cell_type(game,p__31726){
var vec__31727 = p__31726;
var x = cljs.core.nth.call(null,vec__31727,(0),null);
var y = cljs.core.nth.call(null,vec__31727,(1),null);
var ocr_31730 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game);
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31730,new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906))){
return new cljs.core.Keyword(null,"closed","closed",-919675359);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31732){if((e31732 instanceof Error)){
var e__30262__auto__ = e31732;
if((e__30262__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31730,new cljs.core.Keyword(null,"active","active",1895962068))){
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
}catch (e31733){if((e31733 instanceof Error)){
var e__30262__auto____$1 = e31733;
if((e__30262__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31730,new cljs.core.Keyword(null,"failed","failed",-1397425762))){
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
}catch (e31734){if((e31734 instanceof Error)){
var e__30262__auto____$2 = e31734;
if((e__30262__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31730,new cljs.core.Keyword(null,"win","win",-1624642689))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return new cljs.core.Keyword(null,"defused","defused",-1674545666);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty","empty",767870958),minecljs.game.mines_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e31735){if((e31735 instanceof Error)){
var e__30262__auto____$3 = e31735;
if((e__30262__auto____$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_31730)].join('')));
} else {
throw e__30262__auto____$3;
}
} else {
throw e31735;

}
}} else {
throw e__30262__auto____$2;
}
} else {
throw e31734;

}
}} else {
throw e__30262__auto____$1;
}
} else {
throw e31733;

}
}} else {
throw e__30262__auto__;
}
} else {
throw e31732;

}
}});
minecljs.game.game_preview = (function minecljs$game$game_preview(game){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),(3),new cljs.core.Keyword(null,"margin","margin",-995903681),(2),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),(function (){var ocr_31736 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game);
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31736,new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906))){
return new cljs.core.Keyword(null,"gray","gray",1013268388);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31738){if((e31738 instanceof Error)){
var e__30262__auto__ = e31738;
if((e__30262__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31736,new cljs.core.Keyword(null,"active","active",1895962068))){
return new cljs.core.Keyword(null,"transparent","transparent",-2073609949);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31739){if((e31739 instanceof Error)){
var e__30262__auto____$1 = e31739;
if((e__30262__auto____$1 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31736,new cljs.core.Keyword(null,"failed","failed",-1397425762))){
return new cljs.core.Keyword(null,"red","red",-969428204);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31740){if((e31740 instanceof Error)){
var e__30262__auto____$2 = e31740;
if((e__30262__auto____$2 === cljs.core.match.backtrack)){
try{if(cljs.core.keyword_identical_QMARK_.call(null,ocr_31736,new cljs.core.Keyword(null,"win","win",-1624642689))){
return new cljs.core.Keyword(null,"limegreen","limegreen",-121735638);
} else {
throw cljs.core.match.backtrack;

}
}catch (e31741){if((e31741 instanceof Error)){
var e__30262__auto____$3 = e31741;
if((e__30262__auto____$3 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_31736)].join('')));
} else {
throw e__30262__auto____$3;
}
} else {
throw e31741;

}
}} else {
throw e__30262__auto____$2;
}
} else {
throw e31740;

}
}} else {
throw e__30262__auto____$1;
}
} else {
throw e31739;

}
}} else {
throw e__30262__auto__;
}
} else {
throw e31738;

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
var len__5766__auto___31744 = arguments.length;
var i__5767__auto___31745 = (0);
while(true){
if((i__5767__auto___31745 < len__5766__auto___31744)){
args__5772__auto__.push((arguments[i__5767__auto___31745]));

var G__31746 = (i__5767__auto___31745 + (1));
i__5767__auto___31745 = G__31746;
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
(minecljs.game.games_sequence.cljs$lang$applyTo = (function (seq31742){
var G__31743 = cljs.core.first.call(null,seq31742);
var seq31742__$1 = cljs.core.next.call(null,seq31742);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31743,seq31742__$1);
}));

minecljs.game.all_cells = (function minecljs$game$all_cells(game){
return cljs.core.set.call(null,(function (){var iter__5520__auto__ = (function minecljs$game$all_cells_$_iter__31747(s__31748){
return (new cljs.core.LazySeq(null,(function (){
var s__31748__$1 = s__31748;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__31748__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__31748__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function minecljs$game$all_cells_$_iter__31747_$_iter__31749(s__31750){
return (new cljs.core.LazySeq(null,((function (s__31748__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__31750__$1 = s__31750;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__31750__$1);
if(temp__5804__auto____$1){
var s__31750__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31750__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__31750__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__31752 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__31751 = (0);
while(true){
if((i__31751 < size__5519__auto__)){
var y = cljs.core._nth.call(null,c__5518__auto__,i__31751);
cljs.core.chunk_append.call(null,b__31752,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__31753 = (i__31751 + (1));
i__31751 = G__31753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31752),minecljs$game$all_cells_$_iter__31747_$_iter__31749.call(null,cljs.core.chunk_rest.call(null,s__31750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31752),null);
}
} else {
var y = cljs.core.first.call(null,s__31750__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),minecljs$game$all_cells_$_iter__31747_$_iter__31749.call(null,cljs.core.rest.call(null,s__31750__$2)));
}
} else {
return null;
}
break;
}
});})(s__31748__$1,x,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__31748__$1,x,xs__6360__auto__,temp__5804__auto__))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game))));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,minecljs$game$all_cells_$_iter__31747.call(null,cljs.core.rest.call(null,s__31748__$1)));
} else {
var G__31754 = cljs.core.rest.call(null,s__31748__$1);
s__31748__$1 = G__31754;
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
minecljs.game.cells_around = (function minecljs$game$cells_around(game,p__31755){
var vec__31756 = p__31755;
var x = cljs.core.nth.call(null,vec__31756,(0),null);
var y = cljs.core.nth.call(null,vec__31756,(1),null);
return cljs.core.set.call(null,(function (){var iter__5520__auto__ = (function minecljs$game$cells_around_$_iter__31759(s__31760){
return (new cljs.core.LazySeq(null,(function (){
var s__31760__$1 = s__31760;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__31760__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var dx = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5516__auto__ = ((function (s__31760__$1,dx,xs__6360__auto__,temp__5804__auto__,vec__31756,x,y){
return (function minecljs$game$cells_around_$_iter__31759_$_iter__31761(s__31762){
return (new cljs.core.LazySeq(null,((function (s__31760__$1,dx,xs__6360__auto__,temp__5804__auto__,vec__31756,x,y){
return (function (){
var s__31762__$1 = s__31762;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__31762__$1);
if(temp__5804__auto____$1){
var s__31762__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31762__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__31762__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__31764 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__31763 = (0);
while(true){
if((i__31763 < size__5519__auto__)){
var dy = cljs.core._nth.call(null,c__5518__auto__,i__31763);
if(cljs.core.not_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))){
var x__$1 = (x + dx);
var y__$1 = (y + dy);
if((((x__$1 >= (0))) && ((x__$1 < new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game))))){
if((((y__$1 >= (0))) && ((y__$1 < new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game))))){
cljs.core.chunk_append.call(null,b__31764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null));

var G__31765 = (i__31763 + (1));
i__31763 = G__31765;
continue;
} else {
var G__31766 = (i__31763 + (1));
i__31763 = G__31766;
continue;
}
} else {
var G__31767 = (i__31763 + (1));
i__31763 = G__31767;
continue;
}
} else {
var G__31768 = (i__31763 + (1));
i__31763 = G__31768;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31764),minecljs$game$cells_around_$_iter__31759_$_iter__31761.call(null,cljs.core.chunk_rest.call(null,s__31762__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31764),null);
}
} else {
var dy = cljs.core.first.call(null,s__31762__$2);
if(cljs.core.not_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))){
var x__$1 = (x + dx);
var y__$1 = (y + dy);
if((((x__$1 >= (0))) && ((x__$1 < new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(game))))){
if((((y__$1 >= (0))) && ((y__$1 < new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(game))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),minecljs$game$cells_around_$_iter__31759_$_iter__31761.call(null,cljs.core.rest.call(null,s__31762__$2)));
} else {
var G__31769 = cljs.core.rest.call(null,s__31762__$2);
s__31762__$1 = G__31769;
continue;
}
} else {
var G__31770 = cljs.core.rest.call(null,s__31762__$2);
s__31762__$1 = G__31770;
continue;
}
} else {
var G__31771 = cljs.core.rest.call(null,s__31762__$2);
s__31762__$1 = G__31771;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__31760__$1,dx,xs__6360__auto__,temp__5804__auto__,vec__31756,x,y))
,null,null));
});})(s__31760__$1,dx,xs__6360__auto__,temp__5804__auto__,vec__31756,x,y))
;
var fs__5517__auto__ = cljs.core.seq.call(null,iterys__5516__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)));
if(fs__5517__auto__){
return cljs.core.concat.call(null,fs__5517__auto__,minecljs$game$cells_around_$_iter__31759.call(null,cljs.core.rest.call(null,s__31760__$1)));
} else {
var G__31772 = cljs.core.rest.call(null,s__31760__$1);
s__31760__$1 = G__31772;
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
minecljs.game.mines_around = (function minecljs$game$mines_around(game,p__31773){
var vec__31774 = p__31773;
var x = cljs.core.nth.call(null,vec__31774,(0),null);
var y = cljs.core.nth.call(null,vec__31774,(1),null);
return cljs.core.apply.call(null,cljs.core._PLUS_,(function (){var iter__5520__auto__ = (function minecljs$game$mines_around_$_iter__31777(s__31778){
return (new cljs.core.LazySeq(null,(function (){
var s__31778__$1 = s__31778;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__31778__$1);
if(temp__5804__auto__){
var s__31778__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31778__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__31778__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__31780 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__31779 = (0);
while(true){
if((i__31779 < size__5519__auto__)){
var vec__31781 = cljs.core._nth.call(null,c__5518__auto__,i__31779);
var x__$1 = cljs.core.nth.call(null,vec__31781,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__31781,(1),null);
cljs.core.chunk_append.call(null,b__31780,(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?(1):(0)));

var G__31787 = (i__31779 + (1));
i__31779 = G__31787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31780),minecljs$game$mines_around_$_iter__31777.call(null,cljs.core.chunk_rest.call(null,s__31778__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31780),null);
}
} else {
var vec__31784 = cljs.core.first.call(null,s__31778__$2);
var x__$1 = cljs.core.nth.call(null,vec__31784,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__31784,(1),null);
return cljs.core.cons.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null)))?(1):(0)),minecljs$game$mines_around_$_iter__31777.call(null,cljs.core.rest.call(null,s__31778__$2)));
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
minecljs.game.flag_cell = (function minecljs$game$flag_cell(game,p__31788){
var vec__31789 = p__31788;
var x = cljs.core.nth.call(null,vec__31789,(0),null);
var y = cljs.core.nth.call(null,vec__31789,(1),null);
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
minecljs.game.mark_cell = (function minecljs$game$mark_cell(game,p__31792){
var vec__31793 = p__31792;
var x = cljs.core.nth.call(null,vec__31793,(0),null);
var y = cljs.core.nth.call(null,vec__31793,(1),null);
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
minecljs.game.cells_to_open = (function minecljs$game$cells_to_open(game,p__31799){
var vec__31800 = p__31799;
var x = cljs.core.nth.call(null,vec__31800,(0),null);
var y = cljs.core.nth.call(null,vec__31800,(1),null);
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
var queue_head__31809 = cljs.core.first.call(null,queue);
if(((cljs.core.vector_QMARK_.call(null,queue_head__31809)) && ((cljs.core.count.call(null,queue_head__31809) === 2)))){
var x_STAR_ = cljs.core.nth.call(null,queue_head__31809,(0));
var y_STAR_ = cljs.core.nth.call(null,queue_head__31809,(1));
var queue_STAR_ = cljs.core.rest.call(null,queue);
if(cljs.core.truth_(to_open.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null)))){
var G__31813 = queue_STAR_;
var G__31814 = to_open;
queue = G__31813;
to_open = G__31814;
continue;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null)))){
var G__31815 = queue_STAR_;
var G__31816 = to_open;
queue = G__31815;
to_open = G__31816;
continue;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"mines","mines",-1960796490).cljs$core$IFn$_invoke$arity$1(game).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null)))){
return cljs.core.conj.call(null,to_open,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null));
} else {
if((minecljs.game.mines_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null)) > (0))){
var G__31817 = queue_STAR_;
var G__31818 = cljs.core.conj.call(null,to_open,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null));
queue = G__31817;
to_open = G__31818;
continue;
} else {
var G__31819 = cljs.core.concat.call(null,queue_STAR_,minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null)));
var G__31820 = cljs.core.conj.call(null,to_open,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_STAR_,y_STAR_], null));
queue = G__31819;
to_open = G__31820;
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
minecljs.game.open_cell = (function minecljs$game$open_cell(game,p__31822){
var vec__31823 = p__31822;
var x = cljs.core.nth.call(null,vec__31823,(0),null);
var y = cljs.core.nth.call(null,vec__31823,(1),null);
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
minecljs.game.flags_around = (function minecljs$game$flags_around(game,p__31826){
var vec__31827 = p__31826;
var x = cljs.core.nth.call(null,vec__31827,(0),null);
var y = cljs.core.nth.call(null,vec__31827,(1),null);
return clojure.set.intersection.call(null,minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(game));
});
minecljs.game.closed_around_without_flags = (function minecljs$game$closed_around_without_flags(game,p__31830){
var vec__31831 = p__31830;
var x = cljs.core.nth.call(null,vec__31831,(0),null);
var y = cljs.core.nth.call(null,vec__31831,(1),null);
return clojure.set.difference.call(null,minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),clojure.set.union.call(null,new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(game)));
});
minecljs.game.closed_around_with_flags = (function minecljs$game$closed_around_with_flags(game,p__31834){
var vec__31835 = p__31834;
var x = cljs.core.nth.call(null,vec__31835,(0),null);
var y = cljs.core.nth.call(null,vec__31835,(1),null);
return clojure.set.difference.call(null,minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(game));
});
minecljs.game.open_or_flag_around = (function minecljs$game$open_or_flag_around(game,p__31838){
var vec__31839 = p__31838;
var x = cljs.core.nth.call(null,vec__31839,(0),null);
var y = cljs.core.nth.call(null,vec__31839,(1),null);
if(cljs.core._EQ_){
} else {
throw (new Error("Assert failed: ="));
}



if(cljs.core.truth_(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game))){
} else {
throw (new Error("Assert failed: (:status game)"));
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,minecljs.game.flags_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),minecljs.game.mines_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return cljs.core.reduce.call(null,(function (game__$1,p__31842){
var vec__31843 = p__31842;
var x__$1 = cljs.core.nth.call(null,vec__31843,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__31843,(1),null);
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
minecljs.game.random_mines = (function minecljs$game$random_mines(game,p__31856){
var vec__31857 = p__31856;
var start_x = cljs.core.nth.call(null,vec__31857,(0),null);
var start_y = cljs.core.nth.call(null,vec__31857,(1),null);
var available_cells = clojure.set.difference.call(null,cljs.core.disj.call(null,minecljs.game.all_cells.call(null,game),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_x,start_y], null)),minecljs.game.cells_around.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_x,start_y], null)));
return minecljs.random.random_subset.call(null,available_cells,new cljs.core.Keyword(null,"mines-amount","mines-amount",-1023727141).cljs$core$IFn$_invoke$arity$1(game));
});
minecljs.game.initialize = (function minecljs$game$initialize(game,p__31860){
var vec__31861 = p__31860;
var start_x = cljs.core.nth.call(null,vec__31861,(0),null);
var start_y = cljs.core.nth.call(null,vec__31861,(1),null);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(game))){
throw new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can't-initialize-game-twice","can't-initialize-game-twice",-1415093411),game], null);
} else {
return minecljs.game.open_cell.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"active","active",1895962068)),new cljs.core.Keyword(null,"mines","mines",-1960796490),minecljs.game.random_mines.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_x,start_y], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_x,start_y], null));
}
});

//# sourceMappingURL=game.js.map?rel=1654704961235
