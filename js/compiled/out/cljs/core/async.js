// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25007 = arguments.length;
switch (G__25007) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25008 = (function (f,blockable,meta25009){
this.f = f;
this.blockable = blockable;
this.meta25009 = meta25009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25010,meta25009__$1){
var self__ = this;
var _25010__$1 = this;
return (new cljs.core.async.t_cljs$core$async25008(self__.f,self__.blockable,meta25009__$1));
}));

(cljs.core.async.t_cljs$core$async25008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25010){
var self__ = this;
var _25010__$1 = this;
return self__.meta25009;
}));

(cljs.core.async.t_cljs$core$async25008.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25008.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25008.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async25008.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async25008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25009","meta25009",-232402590,null)], null);
}));

(cljs.core.async.t_cljs$core$async25008.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25008");

(cljs.core.async.t_cljs$core$async25008.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async25008");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25008.
 */
cljs.core.async.__GT_t_cljs$core$async25008 = (function cljs$core$async$__GT_t_cljs$core$async25008(f__$1,blockable__$1,meta25009){
return (new cljs.core.async.t_cljs$core$async25008(f__$1,blockable__$1,meta25009));
});

}

return (new cljs.core.async.t_cljs$core$async25008(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25014 = arguments.length;
switch (G__25014) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25017 = arguments.length;
switch (G__25017) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25020 = arguments.length;
switch (G__25020) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25022 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25022);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_25022);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25024 = arguments.length;
switch (G__25024) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___25026 = n;
var x_25027 = (0);
while(true){
if((x_25027 < n__5633__auto___25026)){
(a[x_25027] = (0));

var G__25028 = (x_25027 + (1));
x_25027 = G__25028;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25029 = (i + (1));
i = G__25029;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25030 = (function (flag,meta25031){
this.flag = flag;
this.meta25031 = meta25031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25032,meta25031__$1){
var self__ = this;
var _25032__$1 = this;
return (new cljs.core.async.t_cljs$core$async25030(self__.flag,meta25031__$1));
}));

(cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25032){
var self__ = this;
var _25032__$1 = this;
return self__.meta25031;
}));

(cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async25030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25031","meta25031",-687827493,null)], null);
}));

(cljs.core.async.t_cljs$core$async25030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25030");

(cljs.core.async.t_cljs$core$async25030.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async25030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25030.
 */
cljs.core.async.__GT_t_cljs$core$async25030 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25030(flag__$1,meta25031){
return (new cljs.core.async.t_cljs$core$async25030(flag__$1,meta25031));
});

}

return (new cljs.core.async.t_cljs$core$async25030(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25033 = (function (flag,cb,meta25034){
this.flag = flag;
this.cb = cb;
this.meta25034 = meta25034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25035,meta25034__$1){
var self__ = this;
var _25035__$1 = this;
return (new cljs.core.async.t_cljs$core$async25033(self__.flag,self__.cb,meta25034__$1));
}));

(cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25035){
var self__ = this;
var _25035__$1 = this;
return self__.meta25034;
}));

(cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async25033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25034","meta25034",1672650313,null)], null);
}));

(cljs.core.async.t_cljs$core$async25033.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25033");

(cljs.core.async.t_cljs$core$async25033.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async25033");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25033.
 */
cljs.core.async.__GT_t_cljs$core$async25033 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25033(flag__$1,cb__$1,meta25034){
return (new cljs.core.async.t_cljs$core$async25033(flag__$1,cb__$1,meta25034));
});

}

return (new cljs.core.async.t_cljs$core$async25033(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25036_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25036_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25037_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25037_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25038 = (i + (1));
i = G__25038;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___25043 = arguments.length;
var i__5767__auto___25044 = (0);
while(true){
if((i__5767__auto___25044 < len__5766__auto___25043)){
args__5772__auto__.push((arguments[i__5767__auto___25044]));

var G__25045 = (i__5767__auto___25044 + (1));
i__5767__auto___25044 = G__25045;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25041){
var map__25042 = p__25041;
var map__25042__$1 = cljs.core.__destructure_map.call(null,map__25042);
var opts = map__25042__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25039){
var G__25040 = cljs.core.first.call(null,seq25039);
var seq25039__$1 = cljs.core.next.call(null,seq25039);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25040,seq25039__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25047 = arguments.length;
switch (G__25047) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24947__auto___25093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_25071){
var state_val_25072 = (state_25071[(1)]);
if((state_val_25072 === (7))){
var inst_25067 = (state_25071[(2)]);
var state_25071__$1 = state_25071;
var statearr_25073_25094 = state_25071__$1;
(statearr_25073_25094[(2)] = inst_25067);

(statearr_25073_25094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (1))){
var state_25071__$1 = state_25071;
var statearr_25074_25095 = state_25071__$1;
(statearr_25074_25095[(2)] = null);

(statearr_25074_25095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (4))){
var inst_25050 = (state_25071[(7)]);
var inst_25050__$1 = (state_25071[(2)]);
var inst_25051 = (inst_25050__$1 == null);
var state_25071__$1 = (function (){var statearr_25075 = state_25071;
(statearr_25075[(7)] = inst_25050__$1);

return statearr_25075;
})();
if(cljs.core.truth_(inst_25051)){
var statearr_25076_25096 = state_25071__$1;
(statearr_25076_25096[(1)] = (5));

} else {
var statearr_25077_25097 = state_25071__$1;
(statearr_25077_25097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (13))){
var state_25071__$1 = state_25071;
var statearr_25078_25098 = state_25071__$1;
(statearr_25078_25098[(2)] = null);

(statearr_25078_25098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (6))){
var inst_25050 = (state_25071[(7)]);
var state_25071__$1 = state_25071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25071__$1,(11),to,inst_25050);
} else {
if((state_val_25072 === (3))){
var inst_25069 = (state_25071[(2)]);
var state_25071__$1 = state_25071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25071__$1,inst_25069);
} else {
if((state_val_25072 === (12))){
var state_25071__$1 = state_25071;
var statearr_25079_25099 = state_25071__$1;
(statearr_25079_25099[(2)] = null);

(statearr_25079_25099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (2))){
var state_25071__$1 = state_25071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25071__$1,(4),from);
} else {
if((state_val_25072 === (11))){
var inst_25060 = (state_25071[(2)]);
var state_25071__$1 = state_25071;
if(cljs.core.truth_(inst_25060)){
var statearr_25080_25100 = state_25071__$1;
(statearr_25080_25100[(1)] = (12));

} else {
var statearr_25081_25101 = state_25071__$1;
(statearr_25081_25101[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (9))){
var state_25071__$1 = state_25071;
var statearr_25082_25102 = state_25071__$1;
(statearr_25082_25102[(2)] = null);

(statearr_25082_25102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (5))){
var state_25071__$1 = state_25071;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25083_25103 = state_25071__$1;
(statearr_25083_25103[(1)] = (8));

} else {
var statearr_25084_25104 = state_25071__$1;
(statearr_25084_25104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (14))){
var inst_25065 = (state_25071[(2)]);
var state_25071__$1 = state_25071;
var statearr_25085_25105 = state_25071__$1;
(statearr_25085_25105[(2)] = inst_25065);

(statearr_25085_25105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (10))){
var inst_25057 = (state_25071[(2)]);
var state_25071__$1 = state_25071;
var statearr_25086_25106 = state_25071__$1;
(statearr_25086_25106[(2)] = inst_25057);

(statearr_25086_25106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (8))){
var inst_25054 = cljs.core.async.close_BANG_.call(null,to);
var state_25071__$1 = state_25071;
var statearr_25087_25107 = state_25071__$1;
(statearr_25087_25107[(2)] = inst_25054);

(statearr_25087_25107[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__24851__auto__ = null;
var cljs$core$async$state_machine__24851__auto____0 = (function (){
var statearr_25088 = [null,null,null,null,null,null,null,null];
(statearr_25088[(0)] = cljs$core$async$state_machine__24851__auto__);

(statearr_25088[(1)] = (1));

return statearr_25088;
});
var cljs$core$async$state_machine__24851__auto____1 = (function (state_25071){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_25071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e25089){if((e25089 instanceof Object)){
var ex__24854__auto__ = e25089;
var statearr_25090_25108 = state_25071;
(statearr_25090_25108[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25109 = state_25071;
state_25071 = G__25109;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$state_machine__24851__auto__ = function(state_25071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24851__auto____1.call(this,state_25071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24851__auto____0;
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24851__auto____1;
return cljs$core$async$state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_25091 = f__24948__auto__.call(null);
(statearr_25091[(6)] = c__24947__auto___25093);

return statearr_25091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__25110){
var vec__25111 = p__25110;
var v = cljs.core.nth.call(null,vec__25111,(0),null);
var p = cljs.core.nth.call(null,vec__25111,(1),null);
var job = vec__25111;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24947__auto___25282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_25118){
var state_val_25119 = (state_25118[(1)]);
if((state_val_25119 === (1))){
var state_25118__$1 = state_25118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25118__$1,(2),res,v);
} else {
if((state_val_25119 === (2))){
var inst_25115 = (state_25118[(2)]);
var inst_25116 = cljs.core.async.close_BANG_.call(null,res);
var state_25118__$1 = (function (){var statearr_25120 = state_25118;
(statearr_25120[(7)] = inst_25115);

return statearr_25120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25118__$1,inst_25116);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0 = (function (){
var statearr_25121 = [null,null,null,null,null,null,null,null];
(statearr_25121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__);

(statearr_25121[(1)] = (1));

return statearr_25121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1 = (function (state_25118){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_25118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e25122){if((e25122 instanceof Object)){
var ex__24854__auto__ = e25122;
var statearr_25123_25283 = state_25118;
(statearr_25123_25283[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25284 = state_25118;
state_25118 = G__25284;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__ = function(state_25118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1.call(this,state_25118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_25124 = f__24948__auto__.call(null);
(statearr_25124[(6)] = c__24947__auto___25282);

return statearr_25124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__25125){
var vec__25126 = p__25125;
var v = cljs.core.nth.call(null,vec__25126,(0),null);
var p = cljs.core.nth.call(null,vec__25126,(1),null);
var job = vec__25126;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5633__auto___25285 = n;
var __25286 = (0);
while(true){
if((__25286 < n__5633__auto___25285)){
var G__25129_25287 = type;
var G__25129_25288__$1 = (((G__25129_25287 instanceof cljs.core.Keyword))?G__25129_25287.fqn:null);
switch (G__25129_25288__$1) {
case "compute":
var c__24947__auto___25290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25286,c__24947__auto___25290,G__25129_25287,G__25129_25288__$1,n__5633__auto___25285,jobs,results,process__$1,async){
return (function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = ((function (__25286,c__24947__auto___25290,G__25129_25287,G__25129_25288__$1,n__5633__auto___25285,jobs,results,process__$1,async){
return (function (state_25142){
var state_val_25143 = (state_25142[(1)]);
if((state_val_25143 === (1))){
var state_25142__$1 = state_25142;
var statearr_25144_25291 = state_25142__$1;
(statearr_25144_25291[(2)] = null);

(statearr_25144_25291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25143 === (2))){
var state_25142__$1 = state_25142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25142__$1,(4),jobs);
} else {
if((state_val_25143 === (3))){
var inst_25140 = (state_25142[(2)]);
var state_25142__$1 = state_25142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25142__$1,inst_25140);
} else {
if((state_val_25143 === (4))){
var inst_25132 = (state_25142[(2)]);
var inst_25133 = process__$1.call(null,inst_25132);
var state_25142__$1 = state_25142;
if(cljs.core.truth_(inst_25133)){
var statearr_25145_25292 = state_25142__$1;
(statearr_25145_25292[(1)] = (5));

} else {
var statearr_25146_25293 = state_25142__$1;
(statearr_25146_25293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25143 === (5))){
var state_25142__$1 = state_25142;
var statearr_25147_25294 = state_25142__$1;
(statearr_25147_25294[(2)] = null);

(statearr_25147_25294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25143 === (6))){
var state_25142__$1 = state_25142;
var statearr_25148_25295 = state_25142__$1;
(statearr_25148_25295[(2)] = null);

(statearr_25148_25295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25143 === (7))){
var inst_25138 = (state_25142[(2)]);
var state_25142__$1 = state_25142;
var statearr_25149_25296 = state_25142__$1;
(statearr_25149_25296[(2)] = inst_25138);

(statearr_25149_25296[(1)] = (3));


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
});})(__25286,c__24947__auto___25290,G__25129_25287,G__25129_25288__$1,n__5633__auto___25285,jobs,results,process__$1,async))
;
return ((function (__25286,switch__24850__auto__,c__24947__auto___25290,G__25129_25287,G__25129_25288__$1,n__5633__auto___25285,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0 = (function (){
var statearr_25150 = [null,null,null,null,null,null,null];
(statearr_25150[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__);

(statearr_25150[(1)] = (1));

return statearr_25150;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1 = (function (state_25142){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_25142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e25151){if((e25151 instanceof Object)){
var ex__24854__auto__ = e25151;
var statearr_25152_25297 = state_25142;
(statearr_25152_25297[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25298 = state_25142;
state_25142 = G__25298;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__ = function(state_25142){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1.call(this,state_25142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__;
})()
;})(__25286,switch__24850__auto__,c__24947__auto___25290,G__25129_25287,G__25129_25288__$1,n__5633__auto___25285,jobs,results,process__$1,async))
})();
var state__24949__auto__ = (function (){var statearr_25153 = f__24948__auto__.call(null);
(statearr_25153[(6)] = c__24947__auto___25290);

return statearr_25153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
});})(__25286,c__24947__auto___25290,G__25129_25287,G__25129_25288__$1,n__5633__auto___25285,jobs,results,process__$1,async))
);


break;
case "async":
var c__24947__auto___25299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25286,c__24947__auto___25299,G__25129_25287,G__25129_25288__$1,n__5633__auto___25285,jobs,results,process__$1,async){
return (function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = ((function (__25286,c__24947__auto___25299,G__25129_25287,G__25129_25288__$1,n__5633__auto___25285,jobs,results,process__$1,async){
return (function (state_25166){
var state_val_25167 = (state_25166[(1)]);
if((state_val_25167 === (1))){
var state_25166__$1 = state_25166;
var statearr_25168_25300 = state_25166__$1;
(statearr_25168_25300[(2)] = null);

(statearr_25168_25300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (2))){
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25166__$1,(4),jobs);
} else {
if((state_val_25167 === (3))){
var inst_25164 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25166__$1,inst_25164);
} else {
if((state_val_25167 === (4))){
var inst_25156 = (state_25166[(2)]);
var inst_25157 = async.call(null,inst_25156);
var state_25166__$1 = state_25166;
if(cljs.core.truth_(inst_25157)){
var statearr_25169_25301 = state_25166__$1;
(statearr_25169_25301[(1)] = (5));

} else {
var statearr_25170_25302 = state_25166__$1;
(statearr_25170_25302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (5))){
var state_25166__$1 = state_25166;
var statearr_25171_25303 = state_25166__$1;
(statearr_25171_25303[(2)] = null);

(statearr_25171_25303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (6))){
var state_25166__$1 = state_25166;
var statearr_25172_25304 = state_25166__$1;
(statearr_25172_25304[(2)] = null);

(statearr_25172_25304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25167 === (7))){
var inst_25162 = (state_25166[(2)]);
var state_25166__$1 = state_25166;
var statearr_25173_25305 = state_25166__$1;
(statearr_25173_25305[(2)] = inst_25162);

(statearr_25173_25305[(1)] = (3));


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
});})(__25286,c__24947__auto___25299,G__25129_25287,G__25129_25288__$1,n__5633__auto___25285,jobs,results,process__$1,async))
;
return ((function (__25286,switch__24850__auto__,c__24947__auto___25299,G__25129_25287,G__25129_25288__$1,n__5633__auto___25285,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0 = (function (){
var statearr_25174 = [null,null,null,null,null,null,null];
(statearr_25174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__);

(statearr_25174[(1)] = (1));

return statearr_25174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1 = (function (state_25166){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_25166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e25175){if((e25175 instanceof Object)){
var ex__24854__auto__ = e25175;
var statearr_25176_25306 = state_25166;
(statearr_25176_25306[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25307 = state_25166;
state_25166 = G__25307;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__ = function(state_25166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1.call(this,state_25166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__;
})()
;})(__25286,switch__24850__auto__,c__24947__auto___25299,G__25129_25287,G__25129_25288__$1,n__5633__auto___25285,jobs,results,process__$1,async))
})();
var state__24949__auto__ = (function (){var statearr_25177 = f__24948__auto__.call(null);
(statearr_25177[(6)] = c__24947__auto___25299);

return statearr_25177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
});})(__25286,c__24947__auto___25299,G__25129_25287,G__25129_25288__$1,n__5633__auto___25285,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25129_25288__$1)].join('')));

}

var G__25308 = (__25286 + (1));
__25286 = G__25308;
continue;
} else {
}
break;
}

var c__24947__auto___25309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_25199){
var state_val_25200 = (state_25199[(1)]);
if((state_val_25200 === (7))){
var inst_25195 = (state_25199[(2)]);
var state_25199__$1 = state_25199;
var statearr_25201_25310 = state_25199__$1;
(statearr_25201_25310[(2)] = inst_25195);

(statearr_25201_25310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (1))){
var state_25199__$1 = state_25199;
var statearr_25202_25311 = state_25199__$1;
(statearr_25202_25311[(2)] = null);

(statearr_25202_25311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (4))){
var inst_25180 = (state_25199[(7)]);
var inst_25180__$1 = (state_25199[(2)]);
var inst_25181 = (inst_25180__$1 == null);
var state_25199__$1 = (function (){var statearr_25203 = state_25199;
(statearr_25203[(7)] = inst_25180__$1);

return statearr_25203;
})();
if(cljs.core.truth_(inst_25181)){
var statearr_25204_25312 = state_25199__$1;
(statearr_25204_25312[(1)] = (5));

} else {
var statearr_25205_25313 = state_25199__$1;
(statearr_25205_25313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (6))){
var inst_25185 = (state_25199[(8)]);
var inst_25180 = (state_25199[(7)]);
var inst_25185__$1 = cljs.core.async.chan.call(null,(1));
var inst_25186 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25187 = [inst_25180,inst_25185__$1];
var inst_25188 = (new cljs.core.PersistentVector(null,2,(5),inst_25186,inst_25187,null));
var state_25199__$1 = (function (){var statearr_25206 = state_25199;
(statearr_25206[(8)] = inst_25185__$1);

return statearr_25206;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25199__$1,(8),jobs,inst_25188);
} else {
if((state_val_25200 === (3))){
var inst_25197 = (state_25199[(2)]);
var state_25199__$1 = state_25199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25199__$1,inst_25197);
} else {
if((state_val_25200 === (2))){
var state_25199__$1 = state_25199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25199__$1,(4),from);
} else {
if((state_val_25200 === (9))){
var inst_25192 = (state_25199[(2)]);
var state_25199__$1 = (function (){var statearr_25207 = state_25199;
(statearr_25207[(9)] = inst_25192);

return statearr_25207;
})();
var statearr_25208_25314 = state_25199__$1;
(statearr_25208_25314[(2)] = null);

(statearr_25208_25314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (5))){
var inst_25183 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25199__$1 = state_25199;
var statearr_25209_25315 = state_25199__$1;
(statearr_25209_25315[(2)] = inst_25183);

(statearr_25209_25315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (8))){
var inst_25185 = (state_25199[(8)]);
var inst_25190 = (state_25199[(2)]);
var state_25199__$1 = (function (){var statearr_25210 = state_25199;
(statearr_25210[(10)] = inst_25190);

return statearr_25210;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25199__$1,(9),results,inst_25185);
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
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0 = (function (){
var statearr_25211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__);

(statearr_25211[(1)] = (1));

return statearr_25211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1 = (function (state_25199){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_25199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e25212){if((e25212 instanceof Object)){
var ex__24854__auto__ = e25212;
var statearr_25213_25316 = state_25199;
(statearr_25213_25316[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25317 = state_25199;
state_25199 = G__25317;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__ = function(state_25199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1.call(this,state_25199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_25214 = f__24948__auto__.call(null);
(statearr_25214[(6)] = c__24947__auto___25309);

return statearr_25214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_25252){
var state_val_25253 = (state_25252[(1)]);
if((state_val_25253 === (7))){
var inst_25248 = (state_25252[(2)]);
var state_25252__$1 = state_25252;
var statearr_25254_25318 = state_25252__$1;
(statearr_25254_25318[(2)] = inst_25248);

(statearr_25254_25318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (20))){
var state_25252__$1 = state_25252;
var statearr_25255_25319 = state_25252__$1;
(statearr_25255_25319[(2)] = null);

(statearr_25255_25319[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (1))){
var state_25252__$1 = state_25252;
var statearr_25256_25320 = state_25252__$1;
(statearr_25256_25320[(2)] = null);

(statearr_25256_25320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (4))){
var inst_25217 = (state_25252[(7)]);
var inst_25217__$1 = (state_25252[(2)]);
var inst_25218 = (inst_25217__$1 == null);
var state_25252__$1 = (function (){var statearr_25257 = state_25252;
(statearr_25257[(7)] = inst_25217__$1);

return statearr_25257;
})();
if(cljs.core.truth_(inst_25218)){
var statearr_25258_25321 = state_25252__$1;
(statearr_25258_25321[(1)] = (5));

} else {
var statearr_25259_25322 = state_25252__$1;
(statearr_25259_25322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (15))){
var inst_25230 = (state_25252[(8)]);
var state_25252__$1 = state_25252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25252__$1,(18),to,inst_25230);
} else {
if((state_val_25253 === (21))){
var inst_25243 = (state_25252[(2)]);
var state_25252__$1 = state_25252;
var statearr_25260_25323 = state_25252__$1;
(statearr_25260_25323[(2)] = inst_25243);

(statearr_25260_25323[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (13))){
var inst_25245 = (state_25252[(2)]);
var state_25252__$1 = (function (){var statearr_25261 = state_25252;
(statearr_25261[(9)] = inst_25245);

return statearr_25261;
})();
var statearr_25262_25324 = state_25252__$1;
(statearr_25262_25324[(2)] = null);

(statearr_25262_25324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (6))){
var inst_25217 = (state_25252[(7)]);
var state_25252__$1 = state_25252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25252__$1,(11),inst_25217);
} else {
if((state_val_25253 === (17))){
var inst_25238 = (state_25252[(2)]);
var state_25252__$1 = state_25252;
if(cljs.core.truth_(inst_25238)){
var statearr_25263_25325 = state_25252__$1;
(statearr_25263_25325[(1)] = (19));

} else {
var statearr_25264_25326 = state_25252__$1;
(statearr_25264_25326[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (3))){
var inst_25250 = (state_25252[(2)]);
var state_25252__$1 = state_25252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25252__$1,inst_25250);
} else {
if((state_val_25253 === (12))){
var inst_25227 = (state_25252[(10)]);
var state_25252__$1 = state_25252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25252__$1,(14),inst_25227);
} else {
if((state_val_25253 === (2))){
var state_25252__$1 = state_25252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25252__$1,(4),results);
} else {
if((state_val_25253 === (19))){
var state_25252__$1 = state_25252;
var statearr_25265_25327 = state_25252__$1;
(statearr_25265_25327[(2)] = null);

(statearr_25265_25327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (11))){
var inst_25227 = (state_25252[(2)]);
var state_25252__$1 = (function (){var statearr_25266 = state_25252;
(statearr_25266[(10)] = inst_25227);

return statearr_25266;
})();
var statearr_25267_25328 = state_25252__$1;
(statearr_25267_25328[(2)] = null);

(statearr_25267_25328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (9))){
var state_25252__$1 = state_25252;
var statearr_25268_25329 = state_25252__$1;
(statearr_25268_25329[(2)] = null);

(statearr_25268_25329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (5))){
var state_25252__$1 = state_25252;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25269_25330 = state_25252__$1;
(statearr_25269_25330[(1)] = (8));

} else {
var statearr_25270_25331 = state_25252__$1;
(statearr_25270_25331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (14))){
var inst_25232 = (state_25252[(11)]);
var inst_25230 = (state_25252[(8)]);
var inst_25230__$1 = (state_25252[(2)]);
var inst_25231 = (inst_25230__$1 == null);
var inst_25232__$1 = cljs.core.not.call(null,inst_25231);
var state_25252__$1 = (function (){var statearr_25271 = state_25252;
(statearr_25271[(11)] = inst_25232__$1);

(statearr_25271[(8)] = inst_25230__$1);

return statearr_25271;
})();
if(inst_25232__$1){
var statearr_25272_25332 = state_25252__$1;
(statearr_25272_25332[(1)] = (15));

} else {
var statearr_25273_25333 = state_25252__$1;
(statearr_25273_25333[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (16))){
var inst_25232 = (state_25252[(11)]);
var state_25252__$1 = state_25252;
var statearr_25274_25334 = state_25252__$1;
(statearr_25274_25334[(2)] = inst_25232);

(statearr_25274_25334[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (10))){
var inst_25224 = (state_25252[(2)]);
var state_25252__$1 = state_25252;
var statearr_25275_25335 = state_25252__$1;
(statearr_25275_25335[(2)] = inst_25224);

(statearr_25275_25335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (18))){
var inst_25235 = (state_25252[(2)]);
var state_25252__$1 = state_25252;
var statearr_25276_25336 = state_25252__$1;
(statearr_25276_25336[(2)] = inst_25235);

(statearr_25276_25336[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (8))){
var inst_25221 = cljs.core.async.close_BANG_.call(null,to);
var state_25252__$1 = state_25252;
var statearr_25277_25337 = state_25252__$1;
(statearr_25277_25337[(2)] = inst_25221);

(statearr_25277_25337[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0 = (function (){
var statearr_25278 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__);

(statearr_25278[(1)] = (1));

return statearr_25278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1 = (function (state_25252){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_25252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e25279){if((e25279 instanceof Object)){
var ex__24854__auto__ = e25279;
var statearr_25280_25338 = state_25252;
(statearr_25280_25338[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25339 = state_25252;
state_25252 = G__25339;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__ = function(state_25252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1.call(this,state_25252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24851__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_25281 = f__24948__auto__.call(null);
(statearr_25281[(6)] = c__24947__auto__);

return statearr_25281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25341 = arguments.length;
switch (G__25341) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25344 = arguments.length;
switch (G__25344) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25347 = arguments.length;
switch (G__25347) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24947__auto___25396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_25373){
var state_val_25374 = (state_25373[(1)]);
if((state_val_25374 === (7))){
var inst_25369 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25375_25397 = state_25373__$1;
(statearr_25375_25397[(2)] = inst_25369);

(statearr_25375_25397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (1))){
var state_25373__$1 = state_25373;
var statearr_25376_25398 = state_25373__$1;
(statearr_25376_25398[(2)] = null);

(statearr_25376_25398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (4))){
var inst_25350 = (state_25373[(7)]);
var inst_25350__$1 = (state_25373[(2)]);
var inst_25351 = (inst_25350__$1 == null);
var state_25373__$1 = (function (){var statearr_25377 = state_25373;
(statearr_25377[(7)] = inst_25350__$1);

return statearr_25377;
})();
if(cljs.core.truth_(inst_25351)){
var statearr_25378_25399 = state_25373__$1;
(statearr_25378_25399[(1)] = (5));

} else {
var statearr_25379_25400 = state_25373__$1;
(statearr_25379_25400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (13))){
var state_25373__$1 = state_25373;
var statearr_25380_25401 = state_25373__$1;
(statearr_25380_25401[(2)] = null);

(statearr_25380_25401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (6))){
var inst_25350 = (state_25373[(7)]);
var inst_25356 = p.call(null,inst_25350);
var state_25373__$1 = state_25373;
if(cljs.core.truth_(inst_25356)){
var statearr_25381_25402 = state_25373__$1;
(statearr_25381_25402[(1)] = (9));

} else {
var statearr_25382_25403 = state_25373__$1;
(statearr_25382_25403[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (3))){
var inst_25371 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25373__$1,inst_25371);
} else {
if((state_val_25374 === (12))){
var state_25373__$1 = state_25373;
var statearr_25383_25404 = state_25373__$1;
(statearr_25383_25404[(2)] = null);

(statearr_25383_25404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (2))){
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25373__$1,(4),ch);
} else {
if((state_val_25374 === (11))){
var inst_25350 = (state_25373[(7)]);
var inst_25360 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25373__$1,(8),inst_25360,inst_25350);
} else {
if((state_val_25374 === (9))){
var state_25373__$1 = state_25373;
var statearr_25384_25405 = state_25373__$1;
(statearr_25384_25405[(2)] = tc);

(statearr_25384_25405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (5))){
var inst_25353 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25354 = cljs.core.async.close_BANG_.call(null,fc);
var state_25373__$1 = (function (){var statearr_25385 = state_25373;
(statearr_25385[(8)] = inst_25353);

return statearr_25385;
})();
var statearr_25386_25406 = state_25373__$1;
(statearr_25386_25406[(2)] = inst_25354);

(statearr_25386_25406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (14))){
var inst_25367 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25387_25407 = state_25373__$1;
(statearr_25387_25407[(2)] = inst_25367);

(statearr_25387_25407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (10))){
var state_25373__$1 = state_25373;
var statearr_25388_25408 = state_25373__$1;
(statearr_25388_25408[(2)] = fc);

(statearr_25388_25408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (8))){
var inst_25362 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
if(cljs.core.truth_(inst_25362)){
var statearr_25389_25409 = state_25373__$1;
(statearr_25389_25409[(1)] = (12));

} else {
var statearr_25390_25410 = state_25373__$1;
(statearr_25390_25410[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__24851__auto__ = null;
var cljs$core$async$state_machine__24851__auto____0 = (function (){
var statearr_25391 = [null,null,null,null,null,null,null,null,null];
(statearr_25391[(0)] = cljs$core$async$state_machine__24851__auto__);

(statearr_25391[(1)] = (1));

return statearr_25391;
});
var cljs$core$async$state_machine__24851__auto____1 = (function (state_25373){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_25373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e25392){if((e25392 instanceof Object)){
var ex__24854__auto__ = e25392;
var statearr_25393_25411 = state_25373;
(statearr_25393_25411[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25412 = state_25373;
state_25373 = G__25412;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$state_machine__24851__auto__ = function(state_25373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24851__auto____1.call(this,state_25373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24851__auto____0;
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24851__auto____1;
return cljs$core$async$state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_25394 = f__24948__auto__.call(null);
(statearr_25394[(6)] = c__24947__auto___25396);

return statearr_25394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_25433){
var state_val_25434 = (state_25433[(1)]);
if((state_val_25434 === (7))){
var inst_25429 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
var statearr_25435_25453 = state_25433__$1;
(statearr_25435_25453[(2)] = inst_25429);

(statearr_25435_25453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (1))){
var inst_25413 = init;
var state_25433__$1 = (function (){var statearr_25436 = state_25433;
(statearr_25436[(7)] = inst_25413);

return statearr_25436;
})();
var statearr_25437_25454 = state_25433__$1;
(statearr_25437_25454[(2)] = null);

(statearr_25437_25454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (4))){
var inst_25416 = (state_25433[(8)]);
var inst_25416__$1 = (state_25433[(2)]);
var inst_25417 = (inst_25416__$1 == null);
var state_25433__$1 = (function (){var statearr_25438 = state_25433;
(statearr_25438[(8)] = inst_25416__$1);

return statearr_25438;
})();
if(cljs.core.truth_(inst_25417)){
var statearr_25439_25455 = state_25433__$1;
(statearr_25439_25455[(1)] = (5));

} else {
var statearr_25440_25456 = state_25433__$1;
(statearr_25440_25456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (6))){
var inst_25413 = (state_25433[(7)]);
var inst_25420 = (state_25433[(9)]);
var inst_25416 = (state_25433[(8)]);
var inst_25420__$1 = f.call(null,inst_25413,inst_25416);
var inst_25421 = cljs.core.reduced_QMARK_.call(null,inst_25420__$1);
var state_25433__$1 = (function (){var statearr_25441 = state_25433;
(statearr_25441[(9)] = inst_25420__$1);

return statearr_25441;
})();
if(inst_25421){
var statearr_25442_25457 = state_25433__$1;
(statearr_25442_25457[(1)] = (8));

} else {
var statearr_25443_25458 = state_25433__$1;
(statearr_25443_25458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (3))){
var inst_25431 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25433__$1,inst_25431);
} else {
if((state_val_25434 === (2))){
var state_25433__$1 = state_25433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25433__$1,(4),ch);
} else {
if((state_val_25434 === (9))){
var inst_25420 = (state_25433[(9)]);
var inst_25413 = inst_25420;
var state_25433__$1 = (function (){var statearr_25444 = state_25433;
(statearr_25444[(7)] = inst_25413);

return statearr_25444;
})();
var statearr_25445_25459 = state_25433__$1;
(statearr_25445_25459[(2)] = null);

(statearr_25445_25459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (5))){
var inst_25413 = (state_25433[(7)]);
var state_25433__$1 = state_25433;
var statearr_25446_25460 = state_25433__$1;
(statearr_25446_25460[(2)] = inst_25413);

(statearr_25446_25460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (10))){
var inst_25427 = (state_25433[(2)]);
var state_25433__$1 = state_25433;
var statearr_25447_25461 = state_25433__$1;
(statearr_25447_25461[(2)] = inst_25427);

(statearr_25447_25461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25434 === (8))){
var inst_25420 = (state_25433[(9)]);
var inst_25423 = cljs.core.deref.call(null,inst_25420);
var state_25433__$1 = state_25433;
var statearr_25448_25462 = state_25433__$1;
(statearr_25448_25462[(2)] = inst_25423);

(statearr_25448_25462[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__24851__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24851__auto____0 = (function (){
var statearr_25449 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25449[(0)] = cljs$core$async$reduce_$_state_machine__24851__auto__);

(statearr_25449[(1)] = (1));

return statearr_25449;
});
var cljs$core$async$reduce_$_state_machine__24851__auto____1 = (function (state_25433){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_25433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e25450){if((e25450 instanceof Object)){
var ex__24854__auto__ = e25450;
var statearr_25451_25463 = state_25433;
(statearr_25451_25463[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25464 = state_25433;
state_25433 = G__25464;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24851__auto__ = function(state_25433){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24851__auto____1.call(this,state_25433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24851__auto____0;
cljs$core$async$reduce_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24851__auto____1;
return cljs$core$async$reduce_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_25452 = f__24948__auto__.call(null);
(statearr_25452[(6)] = c__24947__auto__);

return statearr_25452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_25470){
var state_val_25471 = (state_25470[(1)]);
if((state_val_25471 === (1))){
var inst_25465 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25470__$1 = state_25470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25470__$1,(2),inst_25465);
} else {
if((state_val_25471 === (2))){
var inst_25467 = (state_25470[(2)]);
var inst_25468 = f__$1.call(null,inst_25467);
var state_25470__$1 = state_25470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25470__$1,inst_25468);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24851__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24851__auto____0 = (function (){
var statearr_25472 = [null,null,null,null,null,null,null];
(statearr_25472[(0)] = cljs$core$async$transduce_$_state_machine__24851__auto__);

(statearr_25472[(1)] = (1));

return statearr_25472;
});
var cljs$core$async$transduce_$_state_machine__24851__auto____1 = (function (state_25470){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_25470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e25473){if((e25473 instanceof Object)){
var ex__24854__auto__ = e25473;
var statearr_25474_25476 = state_25470;
(statearr_25474_25476[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25477 = state_25470;
state_25470 = G__25477;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24851__auto__ = function(state_25470){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24851__auto____1.call(this,state_25470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24851__auto____0;
cljs$core$async$transduce_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24851__auto____1;
return cljs$core$async$transduce_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_25475 = f__24948__auto__.call(null);
(statearr_25475[(6)] = c__24947__auto__);

return statearr_25475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25479 = arguments.length;
switch (G__25479) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_25504){
var state_val_25505 = (state_25504[(1)]);
if((state_val_25505 === (7))){
var inst_25486 = (state_25504[(2)]);
var state_25504__$1 = state_25504;
var statearr_25506_25527 = state_25504__$1;
(statearr_25506_25527[(2)] = inst_25486);

(statearr_25506_25527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (1))){
var inst_25480 = cljs.core.seq.call(null,coll);
var inst_25481 = inst_25480;
var state_25504__$1 = (function (){var statearr_25507 = state_25504;
(statearr_25507[(7)] = inst_25481);

return statearr_25507;
})();
var statearr_25508_25528 = state_25504__$1;
(statearr_25508_25528[(2)] = null);

(statearr_25508_25528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (4))){
var inst_25481 = (state_25504[(7)]);
var inst_25484 = cljs.core.first.call(null,inst_25481);
var state_25504__$1 = state_25504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25504__$1,(7),ch,inst_25484);
} else {
if((state_val_25505 === (13))){
var inst_25498 = (state_25504[(2)]);
var state_25504__$1 = state_25504;
var statearr_25509_25529 = state_25504__$1;
(statearr_25509_25529[(2)] = inst_25498);

(statearr_25509_25529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (6))){
var inst_25489 = (state_25504[(2)]);
var state_25504__$1 = state_25504;
if(cljs.core.truth_(inst_25489)){
var statearr_25510_25530 = state_25504__$1;
(statearr_25510_25530[(1)] = (8));

} else {
var statearr_25511_25531 = state_25504__$1;
(statearr_25511_25531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (3))){
var inst_25502 = (state_25504[(2)]);
var state_25504__$1 = state_25504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25504__$1,inst_25502);
} else {
if((state_val_25505 === (12))){
var state_25504__$1 = state_25504;
var statearr_25512_25532 = state_25504__$1;
(statearr_25512_25532[(2)] = null);

(statearr_25512_25532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (2))){
var inst_25481 = (state_25504[(7)]);
var state_25504__$1 = state_25504;
if(cljs.core.truth_(inst_25481)){
var statearr_25513_25533 = state_25504__$1;
(statearr_25513_25533[(1)] = (4));

} else {
var statearr_25514_25534 = state_25504__$1;
(statearr_25514_25534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (11))){
var inst_25495 = cljs.core.async.close_BANG_.call(null,ch);
var state_25504__$1 = state_25504;
var statearr_25515_25535 = state_25504__$1;
(statearr_25515_25535[(2)] = inst_25495);

(statearr_25515_25535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (9))){
var state_25504__$1 = state_25504;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25516_25536 = state_25504__$1;
(statearr_25516_25536[(1)] = (11));

} else {
var statearr_25517_25537 = state_25504__$1;
(statearr_25517_25537[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (5))){
var inst_25481 = (state_25504[(7)]);
var state_25504__$1 = state_25504;
var statearr_25518_25538 = state_25504__$1;
(statearr_25518_25538[(2)] = inst_25481);

(statearr_25518_25538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (10))){
var inst_25500 = (state_25504[(2)]);
var state_25504__$1 = state_25504;
var statearr_25519_25539 = state_25504__$1;
(statearr_25519_25539[(2)] = inst_25500);

(statearr_25519_25539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (8))){
var inst_25481 = (state_25504[(7)]);
var inst_25491 = cljs.core.next.call(null,inst_25481);
var inst_25481__$1 = inst_25491;
var state_25504__$1 = (function (){var statearr_25520 = state_25504;
(statearr_25520[(7)] = inst_25481__$1);

return statearr_25520;
})();
var statearr_25521_25540 = state_25504__$1;
(statearr_25521_25540[(2)] = null);

(statearr_25521_25540[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24851__auto__ = null;
var cljs$core$async$state_machine__24851__auto____0 = (function (){
var statearr_25522 = [null,null,null,null,null,null,null,null];
(statearr_25522[(0)] = cljs$core$async$state_machine__24851__auto__);

(statearr_25522[(1)] = (1));

return statearr_25522;
});
var cljs$core$async$state_machine__24851__auto____1 = (function (state_25504){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_25504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e25523){if((e25523 instanceof Object)){
var ex__24854__auto__ = e25523;
var statearr_25524_25541 = state_25504;
(statearr_25524_25541[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25542 = state_25504;
state_25504 = G__25542;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$state_machine__24851__auto__ = function(state_25504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24851__auto____1.call(this,state_25504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24851__auto____0;
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24851__auto____1;
return cljs$core$async$state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_25525 = f__24948__auto__.call(null);
(statearr_25525[(6)] = c__24947__auto__);

return statearr_25525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_25543 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,_);
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_25543.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_25544 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_25544.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_25545 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_25545.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_25546 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_25546.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25547 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25547 = (function (ch,cs,meta25548){
this.ch = ch;
this.cs = cs;
this.meta25548 = meta25548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25549,meta25548__$1){
var self__ = this;
var _25549__$1 = this;
return (new cljs.core.async.t_cljs$core$async25547(self__.ch,self__.cs,meta25548__$1));
}));

(cljs.core.async.t_cljs$core$async25547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25549){
var self__ = this;
var _25549__$1 = this;
return self__.meta25548;
}));

(cljs.core.async.t_cljs$core$async25547.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25547.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async25547.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25547.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async25547.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async25547.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async25547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25548","meta25548",-675317736,null)], null);
}));

(cljs.core.async.t_cljs$core$async25547.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25547");

(cljs.core.async.t_cljs$core$async25547.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async25547");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25547.
 */
cljs.core.async.__GT_t_cljs$core$async25547 = (function cljs$core$async$mult_$___GT_t_cljs$core$async25547(ch__$1,cs__$1,meta25548){
return (new cljs.core.async.t_cljs$core$async25547(ch__$1,cs__$1,meta25548));
});

}

return (new cljs.core.async.t_cljs$core$async25547(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__24947__auto___25769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_25684){
var state_val_25685 = (state_25684[(1)]);
if((state_val_25685 === (7))){
var inst_25680 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25686_25770 = state_25684__$1;
(statearr_25686_25770[(2)] = inst_25680);

(statearr_25686_25770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (20))){
var inst_25583 = (state_25684[(7)]);
var inst_25595 = cljs.core.first.call(null,inst_25583);
var inst_25596 = cljs.core.nth.call(null,inst_25595,(0),null);
var inst_25597 = cljs.core.nth.call(null,inst_25595,(1),null);
var state_25684__$1 = (function (){var statearr_25687 = state_25684;
(statearr_25687[(8)] = inst_25596);

return statearr_25687;
})();
if(cljs.core.truth_(inst_25597)){
var statearr_25688_25771 = state_25684__$1;
(statearr_25688_25771[(1)] = (22));

} else {
var statearr_25689_25772 = state_25684__$1;
(statearr_25689_25772[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (27))){
var inst_25632 = (state_25684[(9)]);
var inst_25627 = (state_25684[(10)]);
var inst_25625 = (state_25684[(11)]);
var inst_25552 = (state_25684[(12)]);
var inst_25632__$1 = cljs.core._nth.call(null,inst_25625,inst_25627);
var inst_25633 = cljs.core.async.put_BANG_.call(null,inst_25632__$1,inst_25552,done);
var state_25684__$1 = (function (){var statearr_25690 = state_25684;
(statearr_25690[(9)] = inst_25632__$1);

return statearr_25690;
})();
if(cljs.core.truth_(inst_25633)){
var statearr_25691_25773 = state_25684__$1;
(statearr_25691_25773[(1)] = (30));

} else {
var statearr_25692_25774 = state_25684__$1;
(statearr_25692_25774[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (1))){
var state_25684__$1 = state_25684;
var statearr_25693_25775 = state_25684__$1;
(statearr_25693_25775[(2)] = null);

(statearr_25693_25775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (24))){
var inst_25583 = (state_25684[(7)]);
var inst_25602 = (state_25684[(2)]);
var inst_25603 = cljs.core.next.call(null,inst_25583);
var inst_25561 = inst_25603;
var inst_25562 = null;
var inst_25563 = (0);
var inst_25564 = (0);
var state_25684__$1 = (function (){var statearr_25694 = state_25684;
(statearr_25694[(13)] = inst_25602);

(statearr_25694[(14)] = inst_25562);

(statearr_25694[(15)] = inst_25564);

(statearr_25694[(16)] = inst_25563);

(statearr_25694[(17)] = inst_25561);

return statearr_25694;
})();
var statearr_25695_25776 = state_25684__$1;
(statearr_25695_25776[(2)] = null);

(statearr_25695_25776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (39))){
var state_25684__$1 = state_25684;
var statearr_25699_25777 = state_25684__$1;
(statearr_25699_25777[(2)] = null);

(statearr_25699_25777[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (4))){
var inst_25552 = (state_25684[(12)]);
var inst_25552__$1 = (state_25684[(2)]);
var inst_25553 = (inst_25552__$1 == null);
var state_25684__$1 = (function (){var statearr_25700 = state_25684;
(statearr_25700[(12)] = inst_25552__$1);

return statearr_25700;
})();
if(cljs.core.truth_(inst_25553)){
var statearr_25701_25778 = state_25684__$1;
(statearr_25701_25778[(1)] = (5));

} else {
var statearr_25702_25779 = state_25684__$1;
(statearr_25702_25779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (15))){
var inst_25562 = (state_25684[(14)]);
var inst_25564 = (state_25684[(15)]);
var inst_25563 = (state_25684[(16)]);
var inst_25561 = (state_25684[(17)]);
var inst_25579 = (state_25684[(2)]);
var inst_25580 = (inst_25564 + (1));
var tmp25696 = inst_25562;
var tmp25697 = inst_25563;
var tmp25698 = inst_25561;
var inst_25561__$1 = tmp25698;
var inst_25562__$1 = tmp25696;
var inst_25563__$1 = tmp25697;
var inst_25564__$1 = inst_25580;
var state_25684__$1 = (function (){var statearr_25703 = state_25684;
(statearr_25703[(14)] = inst_25562__$1);

(statearr_25703[(15)] = inst_25564__$1);

(statearr_25703[(18)] = inst_25579);

(statearr_25703[(16)] = inst_25563__$1);

(statearr_25703[(17)] = inst_25561__$1);

return statearr_25703;
})();
var statearr_25704_25780 = state_25684__$1;
(statearr_25704_25780[(2)] = null);

(statearr_25704_25780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (21))){
var inst_25606 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25708_25781 = state_25684__$1;
(statearr_25708_25781[(2)] = inst_25606);

(statearr_25708_25781[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (31))){
var inst_25632 = (state_25684[(9)]);
var inst_25636 = done.call(null,null);
var inst_25637 = cljs.core.async.untap_STAR_.call(null,m,inst_25632);
var state_25684__$1 = (function (){var statearr_25709 = state_25684;
(statearr_25709[(19)] = inst_25636);

return statearr_25709;
})();
var statearr_25710_25782 = state_25684__$1;
(statearr_25710_25782[(2)] = inst_25637);

(statearr_25710_25782[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (32))){
var inst_25624 = (state_25684[(20)]);
var inst_25626 = (state_25684[(21)]);
var inst_25627 = (state_25684[(10)]);
var inst_25625 = (state_25684[(11)]);
var inst_25639 = (state_25684[(2)]);
var inst_25640 = (inst_25627 + (1));
var tmp25705 = inst_25624;
var tmp25706 = inst_25626;
var tmp25707 = inst_25625;
var inst_25624__$1 = tmp25705;
var inst_25625__$1 = tmp25707;
var inst_25626__$1 = tmp25706;
var inst_25627__$1 = inst_25640;
var state_25684__$1 = (function (){var statearr_25711 = state_25684;
(statearr_25711[(20)] = inst_25624__$1);

(statearr_25711[(21)] = inst_25626__$1);

(statearr_25711[(22)] = inst_25639);

(statearr_25711[(10)] = inst_25627__$1);

(statearr_25711[(11)] = inst_25625__$1);

return statearr_25711;
})();
var statearr_25712_25783 = state_25684__$1;
(statearr_25712_25783[(2)] = null);

(statearr_25712_25783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (40))){
var inst_25652 = (state_25684[(23)]);
var inst_25656 = done.call(null,null);
var inst_25657 = cljs.core.async.untap_STAR_.call(null,m,inst_25652);
var state_25684__$1 = (function (){var statearr_25713 = state_25684;
(statearr_25713[(24)] = inst_25656);

return statearr_25713;
})();
var statearr_25714_25784 = state_25684__$1;
(statearr_25714_25784[(2)] = inst_25657);

(statearr_25714_25784[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (33))){
var inst_25643 = (state_25684[(25)]);
var inst_25645 = cljs.core.chunked_seq_QMARK_.call(null,inst_25643);
var state_25684__$1 = state_25684;
if(inst_25645){
var statearr_25715_25785 = state_25684__$1;
(statearr_25715_25785[(1)] = (36));

} else {
var statearr_25716_25786 = state_25684__$1;
(statearr_25716_25786[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (13))){
var inst_25573 = (state_25684[(26)]);
var inst_25576 = cljs.core.async.close_BANG_.call(null,inst_25573);
var state_25684__$1 = state_25684;
var statearr_25717_25787 = state_25684__$1;
(statearr_25717_25787[(2)] = inst_25576);

(statearr_25717_25787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (22))){
var inst_25596 = (state_25684[(8)]);
var inst_25599 = cljs.core.async.close_BANG_.call(null,inst_25596);
var state_25684__$1 = state_25684;
var statearr_25718_25788 = state_25684__$1;
(statearr_25718_25788[(2)] = inst_25599);

(statearr_25718_25788[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (36))){
var inst_25643 = (state_25684[(25)]);
var inst_25647 = cljs.core.chunk_first.call(null,inst_25643);
var inst_25648 = cljs.core.chunk_rest.call(null,inst_25643);
var inst_25649 = cljs.core.count.call(null,inst_25647);
var inst_25624 = inst_25648;
var inst_25625 = inst_25647;
var inst_25626 = inst_25649;
var inst_25627 = (0);
var state_25684__$1 = (function (){var statearr_25719 = state_25684;
(statearr_25719[(20)] = inst_25624);

(statearr_25719[(21)] = inst_25626);

(statearr_25719[(10)] = inst_25627);

(statearr_25719[(11)] = inst_25625);

return statearr_25719;
})();
var statearr_25720_25789 = state_25684__$1;
(statearr_25720_25789[(2)] = null);

(statearr_25720_25789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (41))){
var inst_25643 = (state_25684[(25)]);
var inst_25659 = (state_25684[(2)]);
var inst_25660 = cljs.core.next.call(null,inst_25643);
var inst_25624 = inst_25660;
var inst_25625 = null;
var inst_25626 = (0);
var inst_25627 = (0);
var state_25684__$1 = (function (){var statearr_25721 = state_25684;
(statearr_25721[(20)] = inst_25624);

(statearr_25721[(21)] = inst_25626);

(statearr_25721[(10)] = inst_25627);

(statearr_25721[(27)] = inst_25659);

(statearr_25721[(11)] = inst_25625);

return statearr_25721;
})();
var statearr_25722_25790 = state_25684__$1;
(statearr_25722_25790[(2)] = null);

(statearr_25722_25790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (43))){
var state_25684__$1 = state_25684;
var statearr_25723_25791 = state_25684__$1;
(statearr_25723_25791[(2)] = null);

(statearr_25723_25791[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (29))){
var inst_25668 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25724_25792 = state_25684__$1;
(statearr_25724_25792[(2)] = inst_25668);

(statearr_25724_25792[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (44))){
var inst_25677 = (state_25684[(2)]);
var state_25684__$1 = (function (){var statearr_25725 = state_25684;
(statearr_25725[(28)] = inst_25677);

return statearr_25725;
})();
var statearr_25726_25793 = state_25684__$1;
(statearr_25726_25793[(2)] = null);

(statearr_25726_25793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (6))){
var inst_25616 = (state_25684[(29)]);
var inst_25615 = cljs.core.deref.call(null,cs);
var inst_25616__$1 = cljs.core.keys.call(null,inst_25615);
var inst_25617 = cljs.core.count.call(null,inst_25616__$1);
var inst_25618 = cljs.core.reset_BANG_.call(null,dctr,inst_25617);
var inst_25623 = cljs.core.seq.call(null,inst_25616__$1);
var inst_25624 = inst_25623;
var inst_25625 = null;
var inst_25626 = (0);
var inst_25627 = (0);
var state_25684__$1 = (function (){var statearr_25727 = state_25684;
(statearr_25727[(29)] = inst_25616__$1);

(statearr_25727[(20)] = inst_25624);

(statearr_25727[(21)] = inst_25626);

(statearr_25727[(30)] = inst_25618);

(statearr_25727[(10)] = inst_25627);

(statearr_25727[(11)] = inst_25625);

return statearr_25727;
})();
var statearr_25728_25794 = state_25684__$1;
(statearr_25728_25794[(2)] = null);

(statearr_25728_25794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (28))){
var inst_25624 = (state_25684[(20)]);
var inst_25643 = (state_25684[(25)]);
var inst_25643__$1 = cljs.core.seq.call(null,inst_25624);
var state_25684__$1 = (function (){var statearr_25729 = state_25684;
(statearr_25729[(25)] = inst_25643__$1);

return statearr_25729;
})();
if(inst_25643__$1){
var statearr_25730_25795 = state_25684__$1;
(statearr_25730_25795[(1)] = (33));

} else {
var statearr_25731_25796 = state_25684__$1;
(statearr_25731_25796[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (25))){
var inst_25626 = (state_25684[(21)]);
var inst_25627 = (state_25684[(10)]);
var inst_25629 = (inst_25627 < inst_25626);
var inst_25630 = inst_25629;
var state_25684__$1 = state_25684;
if(cljs.core.truth_(inst_25630)){
var statearr_25732_25797 = state_25684__$1;
(statearr_25732_25797[(1)] = (27));

} else {
var statearr_25733_25798 = state_25684__$1;
(statearr_25733_25798[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (34))){
var state_25684__$1 = state_25684;
var statearr_25734_25799 = state_25684__$1;
(statearr_25734_25799[(2)] = null);

(statearr_25734_25799[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (17))){
var state_25684__$1 = state_25684;
var statearr_25735_25800 = state_25684__$1;
(statearr_25735_25800[(2)] = null);

(statearr_25735_25800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (3))){
var inst_25682 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25684__$1,inst_25682);
} else {
if((state_val_25685 === (12))){
var inst_25611 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25736_25801 = state_25684__$1;
(statearr_25736_25801[(2)] = inst_25611);

(statearr_25736_25801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (2))){
var state_25684__$1 = state_25684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25684__$1,(4),ch);
} else {
if((state_val_25685 === (23))){
var state_25684__$1 = state_25684;
var statearr_25737_25802 = state_25684__$1;
(statearr_25737_25802[(2)] = null);

(statearr_25737_25802[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (35))){
var inst_25666 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25738_25803 = state_25684__$1;
(statearr_25738_25803[(2)] = inst_25666);

(statearr_25738_25803[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (19))){
var inst_25583 = (state_25684[(7)]);
var inst_25587 = cljs.core.chunk_first.call(null,inst_25583);
var inst_25588 = cljs.core.chunk_rest.call(null,inst_25583);
var inst_25589 = cljs.core.count.call(null,inst_25587);
var inst_25561 = inst_25588;
var inst_25562 = inst_25587;
var inst_25563 = inst_25589;
var inst_25564 = (0);
var state_25684__$1 = (function (){var statearr_25739 = state_25684;
(statearr_25739[(14)] = inst_25562);

(statearr_25739[(15)] = inst_25564);

(statearr_25739[(16)] = inst_25563);

(statearr_25739[(17)] = inst_25561);

return statearr_25739;
})();
var statearr_25740_25804 = state_25684__$1;
(statearr_25740_25804[(2)] = null);

(statearr_25740_25804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (11))){
var inst_25583 = (state_25684[(7)]);
var inst_25561 = (state_25684[(17)]);
var inst_25583__$1 = cljs.core.seq.call(null,inst_25561);
var state_25684__$1 = (function (){var statearr_25741 = state_25684;
(statearr_25741[(7)] = inst_25583__$1);

return statearr_25741;
})();
if(inst_25583__$1){
var statearr_25742_25805 = state_25684__$1;
(statearr_25742_25805[(1)] = (16));

} else {
var statearr_25743_25806 = state_25684__$1;
(statearr_25743_25806[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (9))){
var inst_25613 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25744_25807 = state_25684__$1;
(statearr_25744_25807[(2)] = inst_25613);

(statearr_25744_25807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (5))){
var inst_25559 = cljs.core.deref.call(null,cs);
var inst_25560 = cljs.core.seq.call(null,inst_25559);
var inst_25561 = inst_25560;
var inst_25562 = null;
var inst_25563 = (0);
var inst_25564 = (0);
var state_25684__$1 = (function (){var statearr_25745 = state_25684;
(statearr_25745[(14)] = inst_25562);

(statearr_25745[(15)] = inst_25564);

(statearr_25745[(16)] = inst_25563);

(statearr_25745[(17)] = inst_25561);

return statearr_25745;
})();
var statearr_25746_25808 = state_25684__$1;
(statearr_25746_25808[(2)] = null);

(statearr_25746_25808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (14))){
var state_25684__$1 = state_25684;
var statearr_25747_25809 = state_25684__$1;
(statearr_25747_25809[(2)] = null);

(statearr_25747_25809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (45))){
var inst_25674 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25748_25810 = state_25684__$1;
(statearr_25748_25810[(2)] = inst_25674);

(statearr_25748_25810[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (26))){
var inst_25616 = (state_25684[(29)]);
var inst_25670 = (state_25684[(2)]);
var inst_25671 = cljs.core.seq.call(null,inst_25616);
var state_25684__$1 = (function (){var statearr_25749 = state_25684;
(statearr_25749[(31)] = inst_25670);

return statearr_25749;
})();
if(inst_25671){
var statearr_25750_25811 = state_25684__$1;
(statearr_25750_25811[(1)] = (42));

} else {
var statearr_25751_25812 = state_25684__$1;
(statearr_25751_25812[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (16))){
var inst_25583 = (state_25684[(7)]);
var inst_25585 = cljs.core.chunked_seq_QMARK_.call(null,inst_25583);
var state_25684__$1 = state_25684;
if(inst_25585){
var statearr_25752_25813 = state_25684__$1;
(statearr_25752_25813[(1)] = (19));

} else {
var statearr_25753_25814 = state_25684__$1;
(statearr_25753_25814[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (38))){
var inst_25663 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25754_25815 = state_25684__$1;
(statearr_25754_25815[(2)] = inst_25663);

(statearr_25754_25815[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (30))){
var state_25684__$1 = state_25684;
var statearr_25755_25816 = state_25684__$1;
(statearr_25755_25816[(2)] = null);

(statearr_25755_25816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (10))){
var inst_25562 = (state_25684[(14)]);
var inst_25564 = (state_25684[(15)]);
var inst_25572 = cljs.core._nth.call(null,inst_25562,inst_25564);
var inst_25573 = cljs.core.nth.call(null,inst_25572,(0),null);
var inst_25574 = cljs.core.nth.call(null,inst_25572,(1),null);
var state_25684__$1 = (function (){var statearr_25756 = state_25684;
(statearr_25756[(26)] = inst_25573);

return statearr_25756;
})();
if(cljs.core.truth_(inst_25574)){
var statearr_25757_25817 = state_25684__$1;
(statearr_25757_25817[(1)] = (13));

} else {
var statearr_25758_25818 = state_25684__$1;
(statearr_25758_25818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (18))){
var inst_25609 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25759_25819 = state_25684__$1;
(statearr_25759_25819[(2)] = inst_25609);

(statearr_25759_25819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (42))){
var state_25684__$1 = state_25684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25684__$1,(45),dchan);
} else {
if((state_val_25685 === (37))){
var inst_25643 = (state_25684[(25)]);
var inst_25652 = (state_25684[(23)]);
var inst_25552 = (state_25684[(12)]);
var inst_25652__$1 = cljs.core.first.call(null,inst_25643);
var inst_25653 = cljs.core.async.put_BANG_.call(null,inst_25652__$1,inst_25552,done);
var state_25684__$1 = (function (){var statearr_25760 = state_25684;
(statearr_25760[(23)] = inst_25652__$1);

return statearr_25760;
})();
if(cljs.core.truth_(inst_25653)){
var statearr_25761_25820 = state_25684__$1;
(statearr_25761_25820[(1)] = (39));

} else {
var statearr_25762_25821 = state_25684__$1;
(statearr_25762_25821[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (8))){
var inst_25564 = (state_25684[(15)]);
var inst_25563 = (state_25684[(16)]);
var inst_25566 = (inst_25564 < inst_25563);
var inst_25567 = inst_25566;
var state_25684__$1 = state_25684;
if(cljs.core.truth_(inst_25567)){
var statearr_25763_25822 = state_25684__$1;
(statearr_25763_25822[(1)] = (10));

} else {
var statearr_25764_25823 = state_25684__$1;
(statearr_25764_25823[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__24851__auto__ = null;
var cljs$core$async$mult_$_state_machine__24851__auto____0 = (function (){
var statearr_25765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25765[(0)] = cljs$core$async$mult_$_state_machine__24851__auto__);

(statearr_25765[(1)] = (1));

return statearr_25765;
});
var cljs$core$async$mult_$_state_machine__24851__auto____1 = (function (state_25684){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_25684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e25766){if((e25766 instanceof Object)){
var ex__24854__auto__ = e25766;
var statearr_25767_25824 = state_25684;
(statearr_25767_25824[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25825 = state_25684;
state_25684 = G__25825;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24851__auto__ = function(state_25684){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24851__auto____1.call(this,state_25684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24851__auto____0;
cljs$core$async$mult_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24851__auto____1;
return cljs$core$async$mult_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_25768 = f__24948__auto__.call(null);
(statearr_25768[(6)] = c__24947__auto___25769);

return statearr_25768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25827 = arguments.length;
switch (G__25827) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_25829 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_25829.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_25830 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,ch);
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_25830.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_25831 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m);
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_25831.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_25832 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,state_map);
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_25832.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_25833 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,m,mode);
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_25833.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___25843 = arguments.length;
var i__5767__auto___25844 = (0);
while(true){
if((i__5767__auto___25844 < len__5766__auto___25843)){
args__5772__auto__.push((arguments[i__5767__auto___25844]));

var G__25845 = (i__5767__auto___25844 + (1));
i__5767__auto___25844 = G__25845;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25838){
var map__25839 = p__25838;
var map__25839__$1 = cljs.core.__destructure_map.call(null,map__25839);
var opts = map__25839__$1;
var statearr_25840_25846 = state;
(statearr_25840_25846[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_25841_25847 = state;
(statearr_25841_25847[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_25842_25848 = state;
(statearr_25842_25848[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25834){
var G__25835 = cljs.core.first.call(null,seq25834);
var seq25834__$1 = cljs.core.next.call(null,seq25834);
var G__25836 = cljs.core.first.call(null,seq25834__$1);
var seq25834__$2 = cljs.core.next.call(null,seq25834__$1);
var G__25837 = cljs.core.first.call(null,seq25834__$2);
var seq25834__$3 = cljs.core.next.call(null,seq25834__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25835,G__25836,G__25837,seq25834__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25849 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25850){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25850 = meta25850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25851,meta25850__$1){
var self__ = this;
var _25851__$1 = this;
return (new cljs.core.async.t_cljs$core$async25849(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25850__$1));
}));

(cljs.core.async.t_cljs$core$async25849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25851){
var self__ = this;
var _25851__$1 = this;
return self__.meta25850;
}));

(cljs.core.async.t_cljs$core$async25849.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25849.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async25849.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25849.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25849.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25849.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25849.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25849.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async25849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25850","meta25850",-2086688807,null)], null);
}));

(cljs.core.async.t_cljs$core$async25849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25849");

(cljs.core.async.t_cljs$core$async25849.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async25849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25849.
 */
cljs.core.async.__GT_t_cljs$core$async25849 = (function cljs$core$async$mix_$___GT_t_cljs$core$async25849(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25850){
return (new cljs.core.async.t_cljs$core$async25849(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25850));
});

}

return (new cljs.core.async.t_cljs$core$async25849(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24947__auto___25963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_25919){
var state_val_25920 = (state_25919[(1)]);
if((state_val_25920 === (7))){
var inst_25879 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
if(cljs.core.truth_(inst_25879)){
var statearr_25921_25964 = state_25919__$1;
(statearr_25921_25964[(1)] = (8));

} else {
var statearr_25922_25965 = state_25919__$1;
(statearr_25922_25965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (20))){
var inst_25872 = (state_25919[(7)]);
var state_25919__$1 = state_25919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25919__$1,(23),out,inst_25872);
} else {
if((state_val_25920 === (1))){
var inst_25855 = calc_state.call(null);
var inst_25856 = cljs.core.__destructure_map.call(null,inst_25855);
var inst_25857 = cljs.core.get.call(null,inst_25856,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25858 = cljs.core.get.call(null,inst_25856,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25859 = cljs.core.get.call(null,inst_25856,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25860 = inst_25855;
var state_25919__$1 = (function (){var statearr_25923 = state_25919;
(statearr_25923[(8)] = inst_25859);

(statearr_25923[(9)] = inst_25858);

(statearr_25923[(10)] = inst_25857);

(statearr_25923[(11)] = inst_25860);

return statearr_25923;
})();
var statearr_25924_25966 = state_25919__$1;
(statearr_25924_25966[(2)] = null);

(statearr_25924_25966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (24))){
var inst_25863 = (state_25919[(12)]);
var inst_25860 = inst_25863;
var state_25919__$1 = (function (){var statearr_25925 = state_25919;
(statearr_25925[(11)] = inst_25860);

return statearr_25925;
})();
var statearr_25926_25967 = state_25919__$1;
(statearr_25926_25967[(2)] = null);

(statearr_25926_25967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (4))){
var inst_25874 = (state_25919[(13)]);
var inst_25872 = (state_25919[(7)]);
var inst_25871 = (state_25919[(2)]);
var inst_25872__$1 = cljs.core.nth.call(null,inst_25871,(0),null);
var inst_25873 = cljs.core.nth.call(null,inst_25871,(1),null);
var inst_25874__$1 = (inst_25872__$1 == null);
var state_25919__$1 = (function (){var statearr_25927 = state_25919;
(statearr_25927[(13)] = inst_25874__$1);

(statearr_25927[(7)] = inst_25872__$1);

(statearr_25927[(14)] = inst_25873);

return statearr_25927;
})();
if(cljs.core.truth_(inst_25874__$1)){
var statearr_25928_25968 = state_25919__$1;
(statearr_25928_25968[(1)] = (5));

} else {
var statearr_25929_25969 = state_25919__$1;
(statearr_25929_25969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (15))){
var inst_25893 = (state_25919[(15)]);
var inst_25864 = (state_25919[(16)]);
var inst_25893__$1 = cljs.core.empty_QMARK_.call(null,inst_25864);
var state_25919__$1 = (function (){var statearr_25930 = state_25919;
(statearr_25930[(15)] = inst_25893__$1);

return statearr_25930;
})();
if(inst_25893__$1){
var statearr_25931_25970 = state_25919__$1;
(statearr_25931_25970[(1)] = (17));

} else {
var statearr_25932_25971 = state_25919__$1;
(statearr_25932_25971[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (21))){
var inst_25863 = (state_25919[(12)]);
var inst_25860 = inst_25863;
var state_25919__$1 = (function (){var statearr_25933 = state_25919;
(statearr_25933[(11)] = inst_25860);

return statearr_25933;
})();
var statearr_25934_25972 = state_25919__$1;
(statearr_25934_25972[(2)] = null);

(statearr_25934_25972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (13))){
var inst_25886 = (state_25919[(2)]);
var inst_25887 = calc_state.call(null);
var inst_25860 = inst_25887;
var state_25919__$1 = (function (){var statearr_25935 = state_25919;
(statearr_25935[(17)] = inst_25886);

(statearr_25935[(11)] = inst_25860);

return statearr_25935;
})();
var statearr_25936_25973 = state_25919__$1;
(statearr_25936_25973[(2)] = null);

(statearr_25936_25973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (22))){
var inst_25913 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
var statearr_25937_25974 = state_25919__$1;
(statearr_25937_25974[(2)] = inst_25913);

(statearr_25937_25974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (6))){
var inst_25873 = (state_25919[(14)]);
var inst_25877 = cljs.core._EQ_.call(null,inst_25873,change);
var state_25919__$1 = state_25919;
var statearr_25938_25975 = state_25919__$1;
(statearr_25938_25975[(2)] = inst_25877);

(statearr_25938_25975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (25))){
var state_25919__$1 = state_25919;
var statearr_25939_25976 = state_25919__$1;
(statearr_25939_25976[(2)] = null);

(statearr_25939_25976[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (17))){
var inst_25865 = (state_25919[(18)]);
var inst_25873 = (state_25919[(14)]);
var inst_25895 = inst_25865.call(null,inst_25873);
var inst_25896 = cljs.core.not.call(null,inst_25895);
var state_25919__$1 = state_25919;
var statearr_25940_25977 = state_25919__$1;
(statearr_25940_25977[(2)] = inst_25896);

(statearr_25940_25977[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (3))){
var inst_25917 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25919__$1,inst_25917);
} else {
if((state_val_25920 === (12))){
var state_25919__$1 = state_25919;
var statearr_25941_25978 = state_25919__$1;
(statearr_25941_25978[(2)] = null);

(statearr_25941_25978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (2))){
var inst_25863 = (state_25919[(12)]);
var inst_25860 = (state_25919[(11)]);
var inst_25863__$1 = cljs.core.__destructure_map.call(null,inst_25860);
var inst_25864 = cljs.core.get.call(null,inst_25863__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25865 = cljs.core.get.call(null,inst_25863__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25866 = cljs.core.get.call(null,inst_25863__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25919__$1 = (function (){var statearr_25942 = state_25919;
(statearr_25942[(12)] = inst_25863__$1);

(statearr_25942[(18)] = inst_25865);

(statearr_25942[(16)] = inst_25864);

return statearr_25942;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25919__$1,(4),inst_25866);
} else {
if((state_val_25920 === (23))){
var inst_25904 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
if(cljs.core.truth_(inst_25904)){
var statearr_25943_25979 = state_25919__$1;
(statearr_25943_25979[(1)] = (24));

} else {
var statearr_25944_25980 = state_25919__$1;
(statearr_25944_25980[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (19))){
var inst_25899 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
var statearr_25945_25981 = state_25919__$1;
(statearr_25945_25981[(2)] = inst_25899);

(statearr_25945_25981[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (11))){
var inst_25873 = (state_25919[(14)]);
var inst_25883 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25873);
var state_25919__$1 = state_25919;
var statearr_25946_25982 = state_25919__$1;
(statearr_25946_25982[(2)] = inst_25883);

(statearr_25946_25982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (9))){
var inst_25864 = (state_25919[(16)]);
var inst_25873 = (state_25919[(14)]);
var inst_25890 = (state_25919[(19)]);
var inst_25890__$1 = inst_25864.call(null,inst_25873);
var state_25919__$1 = (function (){var statearr_25947 = state_25919;
(statearr_25947[(19)] = inst_25890__$1);

return statearr_25947;
})();
if(cljs.core.truth_(inst_25890__$1)){
var statearr_25948_25983 = state_25919__$1;
(statearr_25948_25983[(1)] = (14));

} else {
var statearr_25949_25984 = state_25919__$1;
(statearr_25949_25984[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (5))){
var inst_25874 = (state_25919[(13)]);
var state_25919__$1 = state_25919;
var statearr_25950_25985 = state_25919__$1;
(statearr_25950_25985[(2)] = inst_25874);

(statearr_25950_25985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (14))){
var inst_25890 = (state_25919[(19)]);
var state_25919__$1 = state_25919;
var statearr_25951_25986 = state_25919__$1;
(statearr_25951_25986[(2)] = inst_25890);

(statearr_25951_25986[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (26))){
var inst_25909 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
var statearr_25952_25987 = state_25919__$1;
(statearr_25952_25987[(2)] = inst_25909);

(statearr_25952_25987[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (16))){
var inst_25901 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
if(cljs.core.truth_(inst_25901)){
var statearr_25953_25988 = state_25919__$1;
(statearr_25953_25988[(1)] = (20));

} else {
var statearr_25954_25989 = state_25919__$1;
(statearr_25954_25989[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (10))){
var inst_25915 = (state_25919[(2)]);
var state_25919__$1 = state_25919;
var statearr_25955_25990 = state_25919__$1;
(statearr_25955_25990[(2)] = inst_25915);

(statearr_25955_25990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (18))){
var inst_25893 = (state_25919[(15)]);
var state_25919__$1 = state_25919;
var statearr_25956_25991 = state_25919__$1;
(statearr_25956_25991[(2)] = inst_25893);

(statearr_25956_25991[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25920 === (8))){
var inst_25872 = (state_25919[(7)]);
var inst_25881 = (inst_25872 == null);
var state_25919__$1 = state_25919;
if(cljs.core.truth_(inst_25881)){
var statearr_25957_25992 = state_25919__$1;
(statearr_25957_25992[(1)] = (11));

} else {
var statearr_25958_25993 = state_25919__$1;
(statearr_25958_25993[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__24851__auto__ = null;
var cljs$core$async$mix_$_state_machine__24851__auto____0 = (function (){
var statearr_25959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25959[(0)] = cljs$core$async$mix_$_state_machine__24851__auto__);

(statearr_25959[(1)] = (1));

return statearr_25959;
});
var cljs$core$async$mix_$_state_machine__24851__auto____1 = (function (state_25919){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_25919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e25960){if((e25960 instanceof Object)){
var ex__24854__auto__ = e25960;
var statearr_25961_25994 = state_25919;
(statearr_25961_25994[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25995 = state_25919;
state_25919 = G__25995;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24851__auto__ = function(state_25919){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24851__auto____1.call(this,state_25919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24851__auto____0;
cljs$core$async$mix_$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24851__auto____1;
return cljs$core$async$mix_$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_25962 = f__24948__auto__.call(null);
(statearr_25962[(6)] = c__24947__auto___25963);

return statearr_25962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_25998 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_25998.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_25999 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v,ch);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_25999.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_26000 = (function() {
var G__26001 = null;
var G__26001__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__26001__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,p,v);
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__26001 = function(p,v){
switch(arguments.length){
case 1:
return G__26001__1.call(this,p);
case 2:
return G__26001__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26001.cljs$core$IFn$_invoke$arity$1 = G__26001__1;
G__26001.cljs$core$IFn$_invoke$arity$2 = G__26001__2;
return G__26001;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25997 = arguments.length;
switch (G__25997) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26000.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_26000.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26005 = arguments.length;
switch (G__26005) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__26003_SHARP_){
if(cljs.core.truth_(p1__26003_SHARP_.call(null,topic))){
return p1__26003_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26003_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26006 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26007){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26007 = meta26007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26008,meta26007__$1){
var self__ = this;
var _26008__$1 = this;
return (new cljs.core.async.t_cljs$core$async26006(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26007__$1));
}));

(cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26008){
var self__ = this;
var _26008__$1 = this;
return self__.meta26007;
}));

(cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async26006.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async26006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26007","meta26007",-1827763353,null)], null);
}));

(cljs.core.async.t_cljs$core$async26006.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26006");

(cljs.core.async.t_cljs$core$async26006.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async26006");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26006.
 */
cljs.core.async.__GT_t_cljs$core$async26006 = (function cljs$core$async$__GT_t_cljs$core$async26006(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26007){
return (new cljs.core.async.t_cljs$core$async26006(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26007));
});

}

return (new cljs.core.async.t_cljs$core$async26006(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24947__auto___26126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_26080){
var state_val_26081 = (state_26080[(1)]);
if((state_val_26081 === (7))){
var inst_26076 = (state_26080[(2)]);
var state_26080__$1 = state_26080;
var statearr_26082_26127 = state_26080__$1;
(statearr_26082_26127[(2)] = inst_26076);

(statearr_26082_26127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (20))){
var state_26080__$1 = state_26080;
var statearr_26083_26128 = state_26080__$1;
(statearr_26083_26128[(2)] = null);

(statearr_26083_26128[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (1))){
var state_26080__$1 = state_26080;
var statearr_26084_26129 = state_26080__$1;
(statearr_26084_26129[(2)] = null);

(statearr_26084_26129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (24))){
var inst_26059 = (state_26080[(7)]);
var inst_26068 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26059);
var state_26080__$1 = state_26080;
var statearr_26085_26130 = state_26080__$1;
(statearr_26085_26130[(2)] = inst_26068);

(statearr_26085_26130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (4))){
var inst_26011 = (state_26080[(8)]);
var inst_26011__$1 = (state_26080[(2)]);
var inst_26012 = (inst_26011__$1 == null);
var state_26080__$1 = (function (){var statearr_26086 = state_26080;
(statearr_26086[(8)] = inst_26011__$1);

return statearr_26086;
})();
if(cljs.core.truth_(inst_26012)){
var statearr_26087_26131 = state_26080__$1;
(statearr_26087_26131[(1)] = (5));

} else {
var statearr_26088_26132 = state_26080__$1;
(statearr_26088_26132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (15))){
var inst_26053 = (state_26080[(2)]);
var state_26080__$1 = state_26080;
var statearr_26089_26133 = state_26080__$1;
(statearr_26089_26133[(2)] = inst_26053);

(statearr_26089_26133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (21))){
var inst_26073 = (state_26080[(2)]);
var state_26080__$1 = (function (){var statearr_26090 = state_26080;
(statearr_26090[(9)] = inst_26073);

return statearr_26090;
})();
var statearr_26091_26134 = state_26080__$1;
(statearr_26091_26134[(2)] = null);

(statearr_26091_26134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (13))){
var inst_26035 = (state_26080[(10)]);
var inst_26037 = cljs.core.chunked_seq_QMARK_.call(null,inst_26035);
var state_26080__$1 = state_26080;
if(inst_26037){
var statearr_26092_26135 = state_26080__$1;
(statearr_26092_26135[(1)] = (16));

} else {
var statearr_26093_26136 = state_26080__$1;
(statearr_26093_26136[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (22))){
var inst_26065 = (state_26080[(2)]);
var state_26080__$1 = state_26080;
if(cljs.core.truth_(inst_26065)){
var statearr_26094_26137 = state_26080__$1;
(statearr_26094_26137[(1)] = (23));

} else {
var statearr_26095_26138 = state_26080__$1;
(statearr_26095_26138[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (6))){
var inst_26061 = (state_26080[(11)]);
var inst_26059 = (state_26080[(7)]);
var inst_26011 = (state_26080[(8)]);
var inst_26059__$1 = topic_fn.call(null,inst_26011);
var inst_26060 = cljs.core.deref.call(null,mults);
var inst_26061__$1 = cljs.core.get.call(null,inst_26060,inst_26059__$1);
var state_26080__$1 = (function (){var statearr_26096 = state_26080;
(statearr_26096[(11)] = inst_26061__$1);

(statearr_26096[(7)] = inst_26059__$1);

return statearr_26096;
})();
if(cljs.core.truth_(inst_26061__$1)){
var statearr_26097_26139 = state_26080__$1;
(statearr_26097_26139[(1)] = (19));

} else {
var statearr_26098_26140 = state_26080__$1;
(statearr_26098_26140[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (25))){
var inst_26070 = (state_26080[(2)]);
var state_26080__$1 = state_26080;
var statearr_26099_26141 = state_26080__$1;
(statearr_26099_26141[(2)] = inst_26070);

(statearr_26099_26141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (17))){
var inst_26035 = (state_26080[(10)]);
var inst_26044 = cljs.core.first.call(null,inst_26035);
var inst_26045 = cljs.core.async.muxch_STAR_.call(null,inst_26044);
var inst_26046 = cljs.core.async.close_BANG_.call(null,inst_26045);
var inst_26047 = cljs.core.next.call(null,inst_26035);
var inst_26021 = inst_26047;
var inst_26022 = null;
var inst_26023 = (0);
var inst_26024 = (0);
var state_26080__$1 = (function (){var statearr_26100 = state_26080;
(statearr_26100[(12)] = inst_26023);

(statearr_26100[(13)] = inst_26022);

(statearr_26100[(14)] = inst_26024);

(statearr_26100[(15)] = inst_26046);

(statearr_26100[(16)] = inst_26021);

return statearr_26100;
})();
var statearr_26101_26142 = state_26080__$1;
(statearr_26101_26142[(2)] = null);

(statearr_26101_26142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (3))){
var inst_26078 = (state_26080[(2)]);
var state_26080__$1 = state_26080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26080__$1,inst_26078);
} else {
if((state_val_26081 === (12))){
var inst_26055 = (state_26080[(2)]);
var state_26080__$1 = state_26080;
var statearr_26102_26143 = state_26080__$1;
(statearr_26102_26143[(2)] = inst_26055);

(statearr_26102_26143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (2))){
var state_26080__$1 = state_26080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26080__$1,(4),ch);
} else {
if((state_val_26081 === (23))){
var state_26080__$1 = state_26080;
var statearr_26103_26144 = state_26080__$1;
(statearr_26103_26144[(2)] = null);

(statearr_26103_26144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (19))){
var inst_26061 = (state_26080[(11)]);
var inst_26011 = (state_26080[(8)]);
var inst_26063 = cljs.core.async.muxch_STAR_.call(null,inst_26061);
var state_26080__$1 = state_26080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26080__$1,(22),inst_26063,inst_26011);
} else {
if((state_val_26081 === (11))){
var inst_26035 = (state_26080[(10)]);
var inst_26021 = (state_26080[(16)]);
var inst_26035__$1 = cljs.core.seq.call(null,inst_26021);
var state_26080__$1 = (function (){var statearr_26104 = state_26080;
(statearr_26104[(10)] = inst_26035__$1);

return statearr_26104;
})();
if(inst_26035__$1){
var statearr_26105_26145 = state_26080__$1;
(statearr_26105_26145[(1)] = (13));

} else {
var statearr_26106_26146 = state_26080__$1;
(statearr_26106_26146[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (9))){
var inst_26057 = (state_26080[(2)]);
var state_26080__$1 = state_26080;
var statearr_26107_26147 = state_26080__$1;
(statearr_26107_26147[(2)] = inst_26057);

(statearr_26107_26147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (5))){
var inst_26018 = cljs.core.deref.call(null,mults);
var inst_26019 = cljs.core.vals.call(null,inst_26018);
var inst_26020 = cljs.core.seq.call(null,inst_26019);
var inst_26021 = inst_26020;
var inst_26022 = null;
var inst_26023 = (0);
var inst_26024 = (0);
var state_26080__$1 = (function (){var statearr_26108 = state_26080;
(statearr_26108[(12)] = inst_26023);

(statearr_26108[(13)] = inst_26022);

(statearr_26108[(14)] = inst_26024);

(statearr_26108[(16)] = inst_26021);

return statearr_26108;
})();
var statearr_26109_26148 = state_26080__$1;
(statearr_26109_26148[(2)] = null);

(statearr_26109_26148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (14))){
var state_26080__$1 = state_26080;
var statearr_26113_26149 = state_26080__$1;
(statearr_26113_26149[(2)] = null);

(statearr_26113_26149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (16))){
var inst_26035 = (state_26080[(10)]);
var inst_26039 = cljs.core.chunk_first.call(null,inst_26035);
var inst_26040 = cljs.core.chunk_rest.call(null,inst_26035);
var inst_26041 = cljs.core.count.call(null,inst_26039);
var inst_26021 = inst_26040;
var inst_26022 = inst_26039;
var inst_26023 = inst_26041;
var inst_26024 = (0);
var state_26080__$1 = (function (){var statearr_26114 = state_26080;
(statearr_26114[(12)] = inst_26023);

(statearr_26114[(13)] = inst_26022);

(statearr_26114[(14)] = inst_26024);

(statearr_26114[(16)] = inst_26021);

return statearr_26114;
})();
var statearr_26115_26150 = state_26080__$1;
(statearr_26115_26150[(2)] = null);

(statearr_26115_26150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (10))){
var inst_26023 = (state_26080[(12)]);
var inst_26022 = (state_26080[(13)]);
var inst_26024 = (state_26080[(14)]);
var inst_26021 = (state_26080[(16)]);
var inst_26029 = cljs.core._nth.call(null,inst_26022,inst_26024);
var inst_26030 = cljs.core.async.muxch_STAR_.call(null,inst_26029);
var inst_26031 = cljs.core.async.close_BANG_.call(null,inst_26030);
var inst_26032 = (inst_26024 + (1));
var tmp26110 = inst_26023;
var tmp26111 = inst_26022;
var tmp26112 = inst_26021;
var inst_26021__$1 = tmp26112;
var inst_26022__$1 = tmp26111;
var inst_26023__$1 = tmp26110;
var inst_26024__$1 = inst_26032;
var state_26080__$1 = (function (){var statearr_26116 = state_26080;
(statearr_26116[(17)] = inst_26031);

(statearr_26116[(12)] = inst_26023__$1);

(statearr_26116[(13)] = inst_26022__$1);

(statearr_26116[(14)] = inst_26024__$1);

(statearr_26116[(16)] = inst_26021__$1);

return statearr_26116;
})();
var statearr_26117_26151 = state_26080__$1;
(statearr_26117_26151[(2)] = null);

(statearr_26117_26151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (18))){
var inst_26050 = (state_26080[(2)]);
var state_26080__$1 = state_26080;
var statearr_26118_26152 = state_26080__$1;
(statearr_26118_26152[(2)] = inst_26050);

(statearr_26118_26152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26081 === (8))){
var inst_26023 = (state_26080[(12)]);
var inst_26024 = (state_26080[(14)]);
var inst_26026 = (inst_26024 < inst_26023);
var inst_26027 = inst_26026;
var state_26080__$1 = state_26080;
if(cljs.core.truth_(inst_26027)){
var statearr_26119_26153 = state_26080__$1;
(statearr_26119_26153[(1)] = (10));

} else {
var statearr_26120_26154 = state_26080__$1;
(statearr_26120_26154[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__24851__auto__ = null;
var cljs$core$async$state_machine__24851__auto____0 = (function (){
var statearr_26121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26121[(0)] = cljs$core$async$state_machine__24851__auto__);

(statearr_26121[(1)] = (1));

return statearr_26121;
});
var cljs$core$async$state_machine__24851__auto____1 = (function (state_26080){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_26080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e26122){if((e26122 instanceof Object)){
var ex__24854__auto__ = e26122;
var statearr_26123_26155 = state_26080;
(statearr_26123_26155[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26156 = state_26080;
state_26080 = G__26156;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$state_machine__24851__auto__ = function(state_26080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24851__auto____1.call(this,state_26080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24851__auto____0;
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24851__auto____1;
return cljs$core$async$state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_26124 = f__24948__auto__.call(null);
(statearr_26124[(6)] = c__24947__auto___26126);

return statearr_26124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26158 = arguments.length;
switch (G__26158) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26161 = arguments.length;
switch (G__26161) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26164 = arguments.length;
switch (G__26164) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__24947__auto___26231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_26203){
var state_val_26204 = (state_26203[(1)]);
if((state_val_26204 === (7))){
var state_26203__$1 = state_26203;
var statearr_26205_26232 = state_26203__$1;
(statearr_26205_26232[(2)] = null);

(statearr_26205_26232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (1))){
var state_26203__$1 = state_26203;
var statearr_26206_26233 = state_26203__$1;
(statearr_26206_26233[(2)] = null);

(statearr_26206_26233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (4))){
var inst_26167 = (state_26203[(7)]);
var inst_26169 = (inst_26167 < cnt);
var state_26203__$1 = state_26203;
if(cljs.core.truth_(inst_26169)){
var statearr_26207_26234 = state_26203__$1;
(statearr_26207_26234[(1)] = (6));

} else {
var statearr_26208_26235 = state_26203__$1;
(statearr_26208_26235[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (15))){
var inst_26199 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26209_26236 = state_26203__$1;
(statearr_26209_26236[(2)] = inst_26199);

(statearr_26209_26236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (13))){
var inst_26192 = cljs.core.async.close_BANG_.call(null,out);
var state_26203__$1 = state_26203;
var statearr_26210_26237 = state_26203__$1;
(statearr_26210_26237[(2)] = inst_26192);

(statearr_26210_26237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (6))){
var state_26203__$1 = state_26203;
var statearr_26211_26238 = state_26203__$1;
(statearr_26211_26238[(2)] = null);

(statearr_26211_26238[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (3))){
var inst_26201 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26203__$1,inst_26201);
} else {
if((state_val_26204 === (12))){
var inst_26189 = (state_26203[(8)]);
var inst_26189__$1 = (state_26203[(2)]);
var inst_26190 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26189__$1);
var state_26203__$1 = (function (){var statearr_26212 = state_26203;
(statearr_26212[(8)] = inst_26189__$1);

return statearr_26212;
})();
if(cljs.core.truth_(inst_26190)){
var statearr_26213_26239 = state_26203__$1;
(statearr_26213_26239[(1)] = (13));

} else {
var statearr_26214_26240 = state_26203__$1;
(statearr_26214_26240[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (2))){
var inst_26166 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26167 = (0);
var state_26203__$1 = (function (){var statearr_26215 = state_26203;
(statearr_26215[(9)] = inst_26166);

(statearr_26215[(7)] = inst_26167);

return statearr_26215;
})();
var statearr_26216_26241 = state_26203__$1;
(statearr_26216_26241[(2)] = null);

(statearr_26216_26241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (11))){
var inst_26167 = (state_26203[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26203,(10),Object,null,(9));
var inst_26176 = chs__$1.call(null,inst_26167);
var inst_26177 = done.call(null,inst_26167);
var inst_26178 = cljs.core.async.take_BANG_.call(null,inst_26176,inst_26177);
var state_26203__$1 = state_26203;
var statearr_26217_26242 = state_26203__$1;
(statearr_26217_26242[(2)] = inst_26178);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26203__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (9))){
var inst_26167 = (state_26203[(7)]);
var inst_26180 = (state_26203[(2)]);
var inst_26181 = (inst_26167 + (1));
var inst_26167__$1 = inst_26181;
var state_26203__$1 = (function (){var statearr_26218 = state_26203;
(statearr_26218[(10)] = inst_26180);

(statearr_26218[(7)] = inst_26167__$1);

return statearr_26218;
})();
var statearr_26219_26243 = state_26203__$1;
(statearr_26219_26243[(2)] = null);

(statearr_26219_26243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (5))){
var inst_26187 = (state_26203[(2)]);
var state_26203__$1 = (function (){var statearr_26220 = state_26203;
(statearr_26220[(11)] = inst_26187);

return statearr_26220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26203__$1,(12),dchan);
} else {
if((state_val_26204 === (14))){
var inst_26189 = (state_26203[(8)]);
var inst_26194 = cljs.core.apply.call(null,f,inst_26189);
var state_26203__$1 = state_26203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26203__$1,(16),out,inst_26194);
} else {
if((state_val_26204 === (16))){
var inst_26196 = (state_26203[(2)]);
var state_26203__$1 = (function (){var statearr_26221 = state_26203;
(statearr_26221[(12)] = inst_26196);

return statearr_26221;
})();
var statearr_26222_26244 = state_26203__$1;
(statearr_26222_26244[(2)] = null);

(statearr_26222_26244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (10))){
var inst_26171 = (state_26203[(2)]);
var inst_26172 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26203__$1 = (function (){var statearr_26223 = state_26203;
(statearr_26223[(13)] = inst_26171);

return statearr_26223;
})();
var statearr_26224_26245 = state_26203__$1;
(statearr_26224_26245[(2)] = inst_26172);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26203__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26204 === (8))){
var inst_26185 = (state_26203[(2)]);
var state_26203__$1 = state_26203;
var statearr_26225_26246 = state_26203__$1;
(statearr_26225_26246[(2)] = inst_26185);

(statearr_26225_26246[(1)] = (5));


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
var cljs$core$async$state_machine__24851__auto__ = null;
var cljs$core$async$state_machine__24851__auto____0 = (function (){
var statearr_26226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26226[(0)] = cljs$core$async$state_machine__24851__auto__);

(statearr_26226[(1)] = (1));

return statearr_26226;
});
var cljs$core$async$state_machine__24851__auto____1 = (function (state_26203){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_26203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e26227){if((e26227 instanceof Object)){
var ex__24854__auto__ = e26227;
var statearr_26228_26247 = state_26203;
(statearr_26228_26247[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26248 = state_26203;
state_26203 = G__26248;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$state_machine__24851__auto__ = function(state_26203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24851__auto____1.call(this,state_26203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24851__auto____0;
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24851__auto____1;
return cljs$core$async$state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_26229 = f__24948__auto__.call(null);
(statearr_26229[(6)] = c__24947__auto___26231);

return statearr_26229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26251 = arguments.length;
switch (G__26251) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24947__auto___26305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_26283){
var state_val_26284 = (state_26283[(1)]);
if((state_val_26284 === (7))){
var inst_26262 = (state_26283[(7)]);
var inst_26263 = (state_26283[(8)]);
var inst_26262__$1 = (state_26283[(2)]);
var inst_26263__$1 = cljs.core.nth.call(null,inst_26262__$1,(0),null);
var inst_26264 = cljs.core.nth.call(null,inst_26262__$1,(1),null);
var inst_26265 = (inst_26263__$1 == null);
var state_26283__$1 = (function (){var statearr_26285 = state_26283;
(statearr_26285[(7)] = inst_26262__$1);

(statearr_26285[(8)] = inst_26263__$1);

(statearr_26285[(9)] = inst_26264);

return statearr_26285;
})();
if(cljs.core.truth_(inst_26265)){
var statearr_26286_26306 = state_26283__$1;
(statearr_26286_26306[(1)] = (8));

} else {
var statearr_26287_26307 = state_26283__$1;
(statearr_26287_26307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26284 === (1))){
var inst_26252 = cljs.core.vec.call(null,chs);
var inst_26253 = inst_26252;
var state_26283__$1 = (function (){var statearr_26288 = state_26283;
(statearr_26288[(10)] = inst_26253);

return statearr_26288;
})();
var statearr_26289_26308 = state_26283__$1;
(statearr_26289_26308[(2)] = null);

(statearr_26289_26308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26284 === (4))){
var inst_26253 = (state_26283[(10)]);
var state_26283__$1 = state_26283;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26283__$1,(7),inst_26253);
} else {
if((state_val_26284 === (6))){
var inst_26279 = (state_26283[(2)]);
var state_26283__$1 = state_26283;
var statearr_26290_26309 = state_26283__$1;
(statearr_26290_26309[(2)] = inst_26279);

(statearr_26290_26309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26284 === (3))){
var inst_26281 = (state_26283[(2)]);
var state_26283__$1 = state_26283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26283__$1,inst_26281);
} else {
if((state_val_26284 === (2))){
var inst_26253 = (state_26283[(10)]);
var inst_26255 = cljs.core.count.call(null,inst_26253);
var inst_26256 = (inst_26255 > (0));
var state_26283__$1 = state_26283;
if(cljs.core.truth_(inst_26256)){
var statearr_26292_26310 = state_26283__$1;
(statearr_26292_26310[(1)] = (4));

} else {
var statearr_26293_26311 = state_26283__$1;
(statearr_26293_26311[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26284 === (11))){
var inst_26253 = (state_26283[(10)]);
var inst_26272 = (state_26283[(2)]);
var tmp26291 = inst_26253;
var inst_26253__$1 = tmp26291;
var state_26283__$1 = (function (){var statearr_26294 = state_26283;
(statearr_26294[(10)] = inst_26253__$1);

(statearr_26294[(11)] = inst_26272);

return statearr_26294;
})();
var statearr_26295_26312 = state_26283__$1;
(statearr_26295_26312[(2)] = null);

(statearr_26295_26312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26284 === (9))){
var inst_26263 = (state_26283[(8)]);
var state_26283__$1 = state_26283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26283__$1,(11),out,inst_26263);
} else {
if((state_val_26284 === (5))){
var inst_26277 = cljs.core.async.close_BANG_.call(null,out);
var state_26283__$1 = state_26283;
var statearr_26296_26313 = state_26283__$1;
(statearr_26296_26313[(2)] = inst_26277);

(statearr_26296_26313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26284 === (10))){
var inst_26275 = (state_26283[(2)]);
var state_26283__$1 = state_26283;
var statearr_26297_26314 = state_26283__$1;
(statearr_26297_26314[(2)] = inst_26275);

(statearr_26297_26314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26284 === (8))){
var inst_26262 = (state_26283[(7)]);
var inst_26263 = (state_26283[(8)]);
var inst_26264 = (state_26283[(9)]);
var inst_26253 = (state_26283[(10)]);
var inst_26267 = (function (){var cs = inst_26253;
var vec__26258 = inst_26262;
var v = inst_26263;
var c = inst_26264;
return (function (p1__26249_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26249_SHARP_);
});
})();
var inst_26268 = cljs.core.filterv.call(null,inst_26267,inst_26253);
var inst_26253__$1 = inst_26268;
var state_26283__$1 = (function (){var statearr_26298 = state_26283;
(statearr_26298[(10)] = inst_26253__$1);

return statearr_26298;
})();
var statearr_26299_26315 = state_26283__$1;
(statearr_26299_26315[(2)] = null);

(statearr_26299_26315[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24851__auto__ = null;
var cljs$core$async$state_machine__24851__auto____0 = (function (){
var statearr_26300 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26300[(0)] = cljs$core$async$state_machine__24851__auto__);

(statearr_26300[(1)] = (1));

return statearr_26300;
});
var cljs$core$async$state_machine__24851__auto____1 = (function (state_26283){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_26283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e26301){if((e26301 instanceof Object)){
var ex__24854__auto__ = e26301;
var statearr_26302_26316 = state_26283;
(statearr_26302_26316[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26317 = state_26283;
state_26283 = G__26317;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$state_machine__24851__auto__ = function(state_26283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24851__auto____1.call(this,state_26283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24851__auto____0;
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24851__auto____1;
return cljs$core$async$state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_26303 = f__24948__auto__.call(null);
(statearr_26303[(6)] = c__24947__auto___26305);

return statearr_26303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26319 = arguments.length;
switch (G__26319) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24947__auto___26364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_26343){
var state_val_26344 = (state_26343[(1)]);
if((state_val_26344 === (7))){
var inst_26325 = (state_26343[(7)]);
var inst_26325__$1 = (state_26343[(2)]);
var inst_26326 = (inst_26325__$1 == null);
var inst_26327 = cljs.core.not.call(null,inst_26326);
var state_26343__$1 = (function (){var statearr_26345 = state_26343;
(statearr_26345[(7)] = inst_26325__$1);

return statearr_26345;
})();
if(inst_26327){
var statearr_26346_26365 = state_26343__$1;
(statearr_26346_26365[(1)] = (8));

} else {
var statearr_26347_26366 = state_26343__$1;
(statearr_26347_26366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (1))){
var inst_26320 = (0);
var state_26343__$1 = (function (){var statearr_26348 = state_26343;
(statearr_26348[(8)] = inst_26320);

return statearr_26348;
})();
var statearr_26349_26367 = state_26343__$1;
(statearr_26349_26367[(2)] = null);

(statearr_26349_26367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (4))){
var state_26343__$1 = state_26343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26343__$1,(7),ch);
} else {
if((state_val_26344 === (6))){
var inst_26338 = (state_26343[(2)]);
var state_26343__$1 = state_26343;
var statearr_26350_26368 = state_26343__$1;
(statearr_26350_26368[(2)] = inst_26338);

(statearr_26350_26368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (3))){
var inst_26340 = (state_26343[(2)]);
var inst_26341 = cljs.core.async.close_BANG_.call(null,out);
var state_26343__$1 = (function (){var statearr_26351 = state_26343;
(statearr_26351[(9)] = inst_26340);

return statearr_26351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26343__$1,inst_26341);
} else {
if((state_val_26344 === (2))){
var inst_26320 = (state_26343[(8)]);
var inst_26322 = (inst_26320 < n);
var state_26343__$1 = state_26343;
if(cljs.core.truth_(inst_26322)){
var statearr_26352_26369 = state_26343__$1;
(statearr_26352_26369[(1)] = (4));

} else {
var statearr_26353_26370 = state_26343__$1;
(statearr_26353_26370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (11))){
var inst_26320 = (state_26343[(8)]);
var inst_26330 = (state_26343[(2)]);
var inst_26331 = (inst_26320 + (1));
var inst_26320__$1 = inst_26331;
var state_26343__$1 = (function (){var statearr_26354 = state_26343;
(statearr_26354[(10)] = inst_26330);

(statearr_26354[(8)] = inst_26320__$1);

return statearr_26354;
})();
var statearr_26355_26371 = state_26343__$1;
(statearr_26355_26371[(2)] = null);

(statearr_26355_26371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (9))){
var state_26343__$1 = state_26343;
var statearr_26356_26372 = state_26343__$1;
(statearr_26356_26372[(2)] = null);

(statearr_26356_26372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (5))){
var state_26343__$1 = state_26343;
var statearr_26357_26373 = state_26343__$1;
(statearr_26357_26373[(2)] = null);

(statearr_26357_26373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (10))){
var inst_26335 = (state_26343[(2)]);
var state_26343__$1 = state_26343;
var statearr_26358_26374 = state_26343__$1;
(statearr_26358_26374[(2)] = inst_26335);

(statearr_26358_26374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26344 === (8))){
var inst_26325 = (state_26343[(7)]);
var state_26343__$1 = state_26343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26343__$1,(11),out,inst_26325);
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
});
return (function() {
var cljs$core$async$state_machine__24851__auto__ = null;
var cljs$core$async$state_machine__24851__auto____0 = (function (){
var statearr_26359 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26359[(0)] = cljs$core$async$state_machine__24851__auto__);

(statearr_26359[(1)] = (1));

return statearr_26359;
});
var cljs$core$async$state_machine__24851__auto____1 = (function (state_26343){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_26343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e26360){if((e26360 instanceof Object)){
var ex__24854__auto__ = e26360;
var statearr_26361_26375 = state_26343;
(statearr_26361_26375[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26376 = state_26343;
state_26343 = G__26376;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$state_machine__24851__auto__ = function(state_26343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24851__auto____1.call(this,state_26343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24851__auto____0;
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24851__auto____1;
return cljs$core$async$state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_26362 = f__24948__auto__.call(null);
(statearr_26362[(6)] = c__24947__auto___26364);

return statearr_26362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26378 = (function (f,ch,meta26379){
this.f = f;
this.ch = ch;
this.meta26379 = meta26379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26380,meta26379__$1){
var self__ = this;
var _26380__$1 = this;
return (new cljs.core.async.t_cljs$core$async26378(self__.f,self__.ch,meta26379__$1));
}));

(cljs.core.async.t_cljs$core$async26378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26380){
var self__ = this;
var _26380__$1 = this;
return self__.meta26379;
}));

(cljs.core.async.t_cljs$core$async26378.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26378.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26378.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26381 = (function (f,ch,meta26379,_,fn1,meta26382){
this.f = f;
this.ch = ch;
this.meta26379 = meta26379;
this._ = _;
this.fn1 = fn1;
this.meta26382 = meta26382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26383,meta26382__$1){
var self__ = this;
var _26383__$1 = this;
return (new cljs.core.async.t_cljs$core$async26381(self__.f,self__.ch,self__.meta26379,self__._,self__.fn1,meta26382__$1));
}));

(cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26383){
var self__ = this;
var _26383__$1 = this;
return self__.meta26382;
}));

(cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__26377_SHARP_){
return f1.call(null,(((p1__26377_SHARP_ == null))?null:self__.f.call(null,p1__26377_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async26381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26379","meta26379",1945776288,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26378","cljs.core.async/t_cljs$core$async26378",-810568802,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26382","meta26382",-81596300,null)], null);
}));

(cljs.core.async.t_cljs$core$async26381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26381");

(cljs.core.async.t_cljs$core$async26381.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async26381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26381.
 */
cljs.core.async.__GT_t_cljs$core$async26381 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26381(f__$1,ch__$1,meta26379__$1,___$2,fn1__$1,meta26382){
return (new cljs.core.async.t_cljs$core$async26381(f__$1,ch__$1,meta26379__$1,___$2,fn1__$1,meta26382));
});

}

return (new cljs.core.async.t_cljs$core$async26381(self__.f,self__.ch,self__.meta26379,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async26378.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async26378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26379","meta26379",1945776288,null)], null);
}));

(cljs.core.async.t_cljs$core$async26378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26378");

(cljs.core.async.t_cljs$core$async26378.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async26378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26378.
 */
cljs.core.async.__GT_t_cljs$core$async26378 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26378(f__$1,ch__$1,meta26379){
return (new cljs.core.async.t_cljs$core$async26378(f__$1,ch__$1,meta26379));
});

}

return (new cljs.core.async.t_cljs$core$async26378(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26384 = (function (f,ch,meta26385){
this.f = f;
this.ch = ch;
this.meta26385 = meta26385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26386,meta26385__$1){
var self__ = this;
var _26386__$1 = this;
return (new cljs.core.async.t_cljs$core$async26384(self__.f,self__.ch,meta26385__$1));
}));

(cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26386){
var self__ = this;
var _26386__$1 = this;
return self__.meta26385;
}));

(cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26384.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async26384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26385","meta26385",1948203687,null)], null);
}));

(cljs.core.async.t_cljs$core$async26384.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26384");

(cljs.core.async.t_cljs$core$async26384.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async26384");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26384.
 */
cljs.core.async.__GT_t_cljs$core$async26384 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26384(f__$1,ch__$1,meta26385){
return (new cljs.core.async.t_cljs$core$async26384(f__$1,ch__$1,meta26385));
});

}

return (new cljs.core.async.t_cljs$core$async26384(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26387 = (function (p,ch,meta26388){
this.p = p;
this.ch = ch;
this.meta26388 = meta26388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26389,meta26388__$1){
var self__ = this;
var _26389__$1 = this;
return (new cljs.core.async.t_cljs$core$async26387(self__.p,self__.ch,meta26388__$1));
}));

(cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26389){
var self__ = this;
var _26389__$1 = this;
return self__.meta26388;
}));

(cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async26387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26388","meta26388",731658834,null)], null);
}));

(cljs.core.async.t_cljs$core$async26387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26387");

(cljs.core.async.t_cljs$core$async26387.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"cljs.core.async/t_cljs$core$async26387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26387.
 */
cljs.core.async.__GT_t_cljs$core$async26387 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26387(p__$1,ch__$1,meta26388){
return (new cljs.core.async.t_cljs$core$async26387(p__$1,ch__$1,meta26388));
});

}

return (new cljs.core.async.t_cljs$core$async26387(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26391 = arguments.length;
switch (G__26391) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24947__auto___26431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_26412){
var state_val_26413 = (state_26412[(1)]);
if((state_val_26413 === (7))){
var inst_26408 = (state_26412[(2)]);
var state_26412__$1 = state_26412;
var statearr_26414_26432 = state_26412__$1;
(statearr_26414_26432[(2)] = inst_26408);

(statearr_26414_26432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (1))){
var state_26412__$1 = state_26412;
var statearr_26415_26433 = state_26412__$1;
(statearr_26415_26433[(2)] = null);

(statearr_26415_26433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (4))){
var inst_26394 = (state_26412[(7)]);
var inst_26394__$1 = (state_26412[(2)]);
var inst_26395 = (inst_26394__$1 == null);
var state_26412__$1 = (function (){var statearr_26416 = state_26412;
(statearr_26416[(7)] = inst_26394__$1);

return statearr_26416;
})();
if(cljs.core.truth_(inst_26395)){
var statearr_26417_26434 = state_26412__$1;
(statearr_26417_26434[(1)] = (5));

} else {
var statearr_26418_26435 = state_26412__$1;
(statearr_26418_26435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (6))){
var inst_26394 = (state_26412[(7)]);
var inst_26399 = p.call(null,inst_26394);
var state_26412__$1 = state_26412;
if(cljs.core.truth_(inst_26399)){
var statearr_26419_26436 = state_26412__$1;
(statearr_26419_26436[(1)] = (8));

} else {
var statearr_26420_26437 = state_26412__$1;
(statearr_26420_26437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (3))){
var inst_26410 = (state_26412[(2)]);
var state_26412__$1 = state_26412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26412__$1,inst_26410);
} else {
if((state_val_26413 === (2))){
var state_26412__$1 = state_26412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26412__$1,(4),ch);
} else {
if((state_val_26413 === (11))){
var inst_26402 = (state_26412[(2)]);
var state_26412__$1 = state_26412;
var statearr_26421_26438 = state_26412__$1;
(statearr_26421_26438[(2)] = inst_26402);

(statearr_26421_26438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (9))){
var state_26412__$1 = state_26412;
var statearr_26422_26439 = state_26412__$1;
(statearr_26422_26439[(2)] = null);

(statearr_26422_26439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (5))){
var inst_26397 = cljs.core.async.close_BANG_.call(null,out);
var state_26412__$1 = state_26412;
var statearr_26423_26440 = state_26412__$1;
(statearr_26423_26440[(2)] = inst_26397);

(statearr_26423_26440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (10))){
var inst_26405 = (state_26412[(2)]);
var state_26412__$1 = (function (){var statearr_26424 = state_26412;
(statearr_26424[(8)] = inst_26405);

return statearr_26424;
})();
var statearr_26425_26441 = state_26412__$1;
(statearr_26425_26441[(2)] = null);

(statearr_26425_26441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (8))){
var inst_26394 = (state_26412[(7)]);
var state_26412__$1 = state_26412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26412__$1,(11),out,inst_26394);
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
});
return (function() {
var cljs$core$async$state_machine__24851__auto__ = null;
var cljs$core$async$state_machine__24851__auto____0 = (function (){
var statearr_26426 = [null,null,null,null,null,null,null,null,null];
(statearr_26426[(0)] = cljs$core$async$state_machine__24851__auto__);

(statearr_26426[(1)] = (1));

return statearr_26426;
});
var cljs$core$async$state_machine__24851__auto____1 = (function (state_26412){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_26412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e26427){if((e26427 instanceof Object)){
var ex__24854__auto__ = e26427;
var statearr_26428_26442 = state_26412;
(statearr_26428_26442[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26443 = state_26412;
state_26412 = G__26443;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$state_machine__24851__auto__ = function(state_26412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24851__auto____1.call(this,state_26412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24851__auto____0;
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24851__auto____1;
return cljs$core$async$state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_26429 = f__24948__auto__.call(null);
(statearr_26429[(6)] = c__24947__auto___26431);

return statearr_26429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26445 = arguments.length;
switch (G__26445) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_26508){
var state_val_26509 = (state_26508[(1)]);
if((state_val_26509 === (7))){
var inst_26504 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26510_26548 = state_26508__$1;
(statearr_26510_26548[(2)] = inst_26504);

(statearr_26510_26548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (20))){
var inst_26474 = (state_26508[(7)]);
var inst_26485 = (state_26508[(2)]);
var inst_26486 = cljs.core.next.call(null,inst_26474);
var inst_26460 = inst_26486;
var inst_26461 = null;
var inst_26462 = (0);
var inst_26463 = (0);
var state_26508__$1 = (function (){var statearr_26511 = state_26508;
(statearr_26511[(8)] = inst_26460);

(statearr_26511[(9)] = inst_26461);

(statearr_26511[(10)] = inst_26485);

(statearr_26511[(11)] = inst_26463);

(statearr_26511[(12)] = inst_26462);

return statearr_26511;
})();
var statearr_26512_26549 = state_26508__$1;
(statearr_26512_26549[(2)] = null);

(statearr_26512_26549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (1))){
var state_26508__$1 = state_26508;
var statearr_26513_26550 = state_26508__$1;
(statearr_26513_26550[(2)] = null);

(statearr_26513_26550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (4))){
var inst_26449 = (state_26508[(13)]);
var inst_26449__$1 = (state_26508[(2)]);
var inst_26450 = (inst_26449__$1 == null);
var state_26508__$1 = (function (){var statearr_26514 = state_26508;
(statearr_26514[(13)] = inst_26449__$1);

return statearr_26514;
})();
if(cljs.core.truth_(inst_26450)){
var statearr_26515_26551 = state_26508__$1;
(statearr_26515_26551[(1)] = (5));

} else {
var statearr_26516_26552 = state_26508__$1;
(statearr_26516_26552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (15))){
var state_26508__$1 = state_26508;
var statearr_26520_26553 = state_26508__$1;
(statearr_26520_26553[(2)] = null);

(statearr_26520_26553[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (21))){
var state_26508__$1 = state_26508;
var statearr_26521_26554 = state_26508__$1;
(statearr_26521_26554[(2)] = null);

(statearr_26521_26554[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (13))){
var inst_26460 = (state_26508[(8)]);
var inst_26461 = (state_26508[(9)]);
var inst_26463 = (state_26508[(11)]);
var inst_26462 = (state_26508[(12)]);
var inst_26470 = (state_26508[(2)]);
var inst_26471 = (inst_26463 + (1));
var tmp26517 = inst_26460;
var tmp26518 = inst_26461;
var tmp26519 = inst_26462;
var inst_26460__$1 = tmp26517;
var inst_26461__$1 = tmp26518;
var inst_26462__$1 = tmp26519;
var inst_26463__$1 = inst_26471;
var state_26508__$1 = (function (){var statearr_26522 = state_26508;
(statearr_26522[(8)] = inst_26460__$1);

(statearr_26522[(14)] = inst_26470);

(statearr_26522[(9)] = inst_26461__$1);

(statearr_26522[(11)] = inst_26463__$1);

(statearr_26522[(12)] = inst_26462__$1);

return statearr_26522;
})();
var statearr_26523_26555 = state_26508__$1;
(statearr_26523_26555[(2)] = null);

(statearr_26523_26555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (22))){
var state_26508__$1 = state_26508;
var statearr_26524_26556 = state_26508__$1;
(statearr_26524_26556[(2)] = null);

(statearr_26524_26556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (6))){
var inst_26449 = (state_26508[(13)]);
var inst_26458 = f.call(null,inst_26449);
var inst_26459 = cljs.core.seq.call(null,inst_26458);
var inst_26460 = inst_26459;
var inst_26461 = null;
var inst_26462 = (0);
var inst_26463 = (0);
var state_26508__$1 = (function (){var statearr_26525 = state_26508;
(statearr_26525[(8)] = inst_26460);

(statearr_26525[(9)] = inst_26461);

(statearr_26525[(11)] = inst_26463);

(statearr_26525[(12)] = inst_26462);

return statearr_26525;
})();
var statearr_26526_26557 = state_26508__$1;
(statearr_26526_26557[(2)] = null);

(statearr_26526_26557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (17))){
var inst_26474 = (state_26508[(7)]);
var inst_26478 = cljs.core.chunk_first.call(null,inst_26474);
var inst_26479 = cljs.core.chunk_rest.call(null,inst_26474);
var inst_26480 = cljs.core.count.call(null,inst_26478);
var inst_26460 = inst_26479;
var inst_26461 = inst_26478;
var inst_26462 = inst_26480;
var inst_26463 = (0);
var state_26508__$1 = (function (){var statearr_26527 = state_26508;
(statearr_26527[(8)] = inst_26460);

(statearr_26527[(9)] = inst_26461);

(statearr_26527[(11)] = inst_26463);

(statearr_26527[(12)] = inst_26462);

return statearr_26527;
})();
var statearr_26528_26558 = state_26508__$1;
(statearr_26528_26558[(2)] = null);

(statearr_26528_26558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (3))){
var inst_26506 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26508__$1,inst_26506);
} else {
if((state_val_26509 === (12))){
var inst_26494 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26529_26559 = state_26508__$1;
(statearr_26529_26559[(2)] = inst_26494);

(statearr_26529_26559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (2))){
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26508__$1,(4),in$);
} else {
if((state_val_26509 === (23))){
var inst_26502 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26530_26560 = state_26508__$1;
(statearr_26530_26560[(2)] = inst_26502);

(statearr_26530_26560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (19))){
var inst_26489 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26531_26561 = state_26508__$1;
(statearr_26531_26561[(2)] = inst_26489);

(statearr_26531_26561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (11))){
var inst_26460 = (state_26508[(8)]);
var inst_26474 = (state_26508[(7)]);
var inst_26474__$1 = cljs.core.seq.call(null,inst_26460);
var state_26508__$1 = (function (){var statearr_26532 = state_26508;
(statearr_26532[(7)] = inst_26474__$1);

return statearr_26532;
})();
if(inst_26474__$1){
var statearr_26533_26562 = state_26508__$1;
(statearr_26533_26562[(1)] = (14));

} else {
var statearr_26534_26563 = state_26508__$1;
(statearr_26534_26563[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (9))){
var inst_26496 = (state_26508[(2)]);
var inst_26497 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26508__$1 = (function (){var statearr_26535 = state_26508;
(statearr_26535[(15)] = inst_26496);

return statearr_26535;
})();
if(cljs.core.truth_(inst_26497)){
var statearr_26536_26564 = state_26508__$1;
(statearr_26536_26564[(1)] = (21));

} else {
var statearr_26537_26565 = state_26508__$1;
(statearr_26537_26565[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (5))){
var inst_26452 = cljs.core.async.close_BANG_.call(null,out);
var state_26508__$1 = state_26508;
var statearr_26538_26566 = state_26508__$1;
(statearr_26538_26566[(2)] = inst_26452);

(statearr_26538_26566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (14))){
var inst_26474 = (state_26508[(7)]);
var inst_26476 = cljs.core.chunked_seq_QMARK_.call(null,inst_26474);
var state_26508__$1 = state_26508;
if(inst_26476){
var statearr_26539_26567 = state_26508__$1;
(statearr_26539_26567[(1)] = (17));

} else {
var statearr_26540_26568 = state_26508__$1;
(statearr_26540_26568[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (16))){
var inst_26492 = (state_26508[(2)]);
var state_26508__$1 = state_26508;
var statearr_26541_26569 = state_26508__$1;
(statearr_26541_26569[(2)] = inst_26492);

(statearr_26541_26569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26509 === (10))){
var inst_26461 = (state_26508[(9)]);
var inst_26463 = (state_26508[(11)]);
var inst_26468 = cljs.core._nth.call(null,inst_26461,inst_26463);
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26508__$1,(13),out,inst_26468);
} else {
if((state_val_26509 === (18))){
var inst_26474 = (state_26508[(7)]);
var inst_26483 = cljs.core.first.call(null,inst_26474);
var state_26508__$1 = state_26508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26508__$1,(20),out,inst_26483);
} else {
if((state_val_26509 === (8))){
var inst_26463 = (state_26508[(11)]);
var inst_26462 = (state_26508[(12)]);
var inst_26465 = (inst_26463 < inst_26462);
var inst_26466 = inst_26465;
var state_26508__$1 = state_26508;
if(cljs.core.truth_(inst_26466)){
var statearr_26542_26570 = state_26508__$1;
(statearr_26542_26570[(1)] = (10));

} else {
var statearr_26543_26571 = state_26508__$1;
(statearr_26543_26571[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24851__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24851__auto____0 = (function (){
var statearr_26544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26544[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24851__auto__);

(statearr_26544[(1)] = (1));

return statearr_26544;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24851__auto____1 = (function (state_26508){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_26508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e26545){if((e26545 instanceof Object)){
var ex__24854__auto__ = e26545;
var statearr_26546_26572 = state_26508;
(statearr_26546_26572[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26573 = state_26508;
state_26508 = G__26573;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24851__auto__ = function(state_26508){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24851__auto____1.call(this,state_26508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24851__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24851__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_26547 = f__24948__auto__.call(null);
(statearr_26547[(6)] = c__24947__auto__);

return statearr_26547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));

return c__24947__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26575 = arguments.length;
switch (G__26575) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26578 = arguments.length;
switch (G__26578) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26581 = arguments.length;
switch (G__26581) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24947__auto___26628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_26605){
var state_val_26606 = (state_26605[(1)]);
if((state_val_26606 === (7))){
var inst_26600 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26607_26629 = state_26605__$1;
(statearr_26607_26629[(2)] = inst_26600);

(statearr_26607_26629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (1))){
var inst_26582 = null;
var state_26605__$1 = (function (){var statearr_26608 = state_26605;
(statearr_26608[(7)] = inst_26582);

return statearr_26608;
})();
var statearr_26609_26630 = state_26605__$1;
(statearr_26609_26630[(2)] = null);

(statearr_26609_26630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (4))){
var inst_26585 = (state_26605[(8)]);
var inst_26585__$1 = (state_26605[(2)]);
var inst_26586 = (inst_26585__$1 == null);
var inst_26587 = cljs.core.not.call(null,inst_26586);
var state_26605__$1 = (function (){var statearr_26610 = state_26605;
(statearr_26610[(8)] = inst_26585__$1);

return statearr_26610;
})();
if(inst_26587){
var statearr_26611_26631 = state_26605__$1;
(statearr_26611_26631[(1)] = (5));

} else {
var statearr_26612_26632 = state_26605__$1;
(statearr_26612_26632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (6))){
var state_26605__$1 = state_26605;
var statearr_26613_26633 = state_26605__$1;
(statearr_26613_26633[(2)] = null);

(statearr_26613_26633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (3))){
var inst_26602 = (state_26605[(2)]);
var inst_26603 = cljs.core.async.close_BANG_.call(null,out);
var state_26605__$1 = (function (){var statearr_26614 = state_26605;
(statearr_26614[(9)] = inst_26602);

return statearr_26614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26605__$1,inst_26603);
} else {
if((state_val_26606 === (2))){
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26605__$1,(4),ch);
} else {
if((state_val_26606 === (11))){
var inst_26585 = (state_26605[(8)]);
var inst_26594 = (state_26605[(2)]);
var inst_26582 = inst_26585;
var state_26605__$1 = (function (){var statearr_26615 = state_26605;
(statearr_26615[(10)] = inst_26594);

(statearr_26615[(7)] = inst_26582);

return statearr_26615;
})();
var statearr_26616_26634 = state_26605__$1;
(statearr_26616_26634[(2)] = null);

(statearr_26616_26634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (9))){
var inst_26585 = (state_26605[(8)]);
var state_26605__$1 = state_26605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26605__$1,(11),out,inst_26585);
} else {
if((state_val_26606 === (5))){
var inst_26585 = (state_26605[(8)]);
var inst_26582 = (state_26605[(7)]);
var inst_26589 = cljs.core._EQ_.call(null,inst_26585,inst_26582);
var state_26605__$1 = state_26605;
if(inst_26589){
var statearr_26618_26635 = state_26605__$1;
(statearr_26618_26635[(1)] = (8));

} else {
var statearr_26619_26636 = state_26605__$1;
(statearr_26619_26636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (10))){
var inst_26597 = (state_26605[(2)]);
var state_26605__$1 = state_26605;
var statearr_26620_26637 = state_26605__$1;
(statearr_26620_26637[(2)] = inst_26597);

(statearr_26620_26637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26606 === (8))){
var inst_26582 = (state_26605[(7)]);
var tmp26617 = inst_26582;
var inst_26582__$1 = tmp26617;
var state_26605__$1 = (function (){var statearr_26621 = state_26605;
(statearr_26621[(7)] = inst_26582__$1);

return statearr_26621;
})();
var statearr_26622_26638 = state_26605__$1;
(statearr_26622_26638[(2)] = null);

(statearr_26622_26638[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24851__auto__ = null;
var cljs$core$async$state_machine__24851__auto____0 = (function (){
var statearr_26623 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26623[(0)] = cljs$core$async$state_machine__24851__auto__);

(statearr_26623[(1)] = (1));

return statearr_26623;
});
var cljs$core$async$state_machine__24851__auto____1 = (function (state_26605){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_26605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e26624){if((e26624 instanceof Object)){
var ex__24854__auto__ = e26624;
var statearr_26625_26639 = state_26605;
(statearr_26625_26639[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26640 = state_26605;
state_26605 = G__26640;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$state_machine__24851__auto__ = function(state_26605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24851__auto____1.call(this,state_26605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24851__auto____0;
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24851__auto____1;
return cljs$core$async$state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_26626 = f__24948__auto__.call(null);
(statearr_26626[(6)] = c__24947__auto___26628);

return statearr_26626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26642 = arguments.length;
switch (G__26642) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24947__auto___26708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_26680){
var state_val_26681 = (state_26680[(1)]);
if((state_val_26681 === (7))){
var inst_26676 = (state_26680[(2)]);
var state_26680__$1 = state_26680;
var statearr_26682_26709 = state_26680__$1;
(statearr_26682_26709[(2)] = inst_26676);

(statearr_26682_26709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26681 === (1))){
var inst_26643 = (new Array(n));
var inst_26644 = inst_26643;
var inst_26645 = (0);
var state_26680__$1 = (function (){var statearr_26683 = state_26680;
(statearr_26683[(7)] = inst_26644);

(statearr_26683[(8)] = inst_26645);

return statearr_26683;
})();
var statearr_26684_26710 = state_26680__$1;
(statearr_26684_26710[(2)] = null);

(statearr_26684_26710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26681 === (4))){
var inst_26648 = (state_26680[(9)]);
var inst_26648__$1 = (state_26680[(2)]);
var inst_26649 = (inst_26648__$1 == null);
var inst_26650 = cljs.core.not.call(null,inst_26649);
var state_26680__$1 = (function (){var statearr_26685 = state_26680;
(statearr_26685[(9)] = inst_26648__$1);

return statearr_26685;
})();
if(inst_26650){
var statearr_26686_26711 = state_26680__$1;
(statearr_26686_26711[(1)] = (5));

} else {
var statearr_26687_26712 = state_26680__$1;
(statearr_26687_26712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26681 === (15))){
var inst_26670 = (state_26680[(2)]);
var state_26680__$1 = state_26680;
var statearr_26688_26713 = state_26680__$1;
(statearr_26688_26713[(2)] = inst_26670);

(statearr_26688_26713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26681 === (13))){
var state_26680__$1 = state_26680;
var statearr_26689_26714 = state_26680__$1;
(statearr_26689_26714[(2)] = null);

(statearr_26689_26714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26681 === (6))){
var inst_26645 = (state_26680[(8)]);
var inst_26666 = (inst_26645 > (0));
var state_26680__$1 = state_26680;
if(cljs.core.truth_(inst_26666)){
var statearr_26690_26715 = state_26680__$1;
(statearr_26690_26715[(1)] = (12));

} else {
var statearr_26691_26716 = state_26680__$1;
(statearr_26691_26716[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26681 === (3))){
var inst_26678 = (state_26680[(2)]);
var state_26680__$1 = state_26680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26680__$1,inst_26678);
} else {
if((state_val_26681 === (12))){
var inst_26644 = (state_26680[(7)]);
var inst_26668 = cljs.core.vec.call(null,inst_26644);
var state_26680__$1 = state_26680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26680__$1,(15),out,inst_26668);
} else {
if((state_val_26681 === (2))){
var state_26680__$1 = state_26680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26680__$1,(4),ch);
} else {
if((state_val_26681 === (11))){
var inst_26660 = (state_26680[(2)]);
var inst_26661 = (new Array(n));
var inst_26644 = inst_26661;
var inst_26645 = (0);
var state_26680__$1 = (function (){var statearr_26692 = state_26680;
(statearr_26692[(7)] = inst_26644);

(statearr_26692[(10)] = inst_26660);

(statearr_26692[(8)] = inst_26645);

return statearr_26692;
})();
var statearr_26693_26717 = state_26680__$1;
(statearr_26693_26717[(2)] = null);

(statearr_26693_26717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26681 === (9))){
var inst_26644 = (state_26680[(7)]);
var inst_26658 = cljs.core.vec.call(null,inst_26644);
var state_26680__$1 = state_26680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26680__$1,(11),out,inst_26658);
} else {
if((state_val_26681 === (5))){
var inst_26644 = (state_26680[(7)]);
var inst_26648 = (state_26680[(9)]);
var inst_26653 = (state_26680[(11)]);
var inst_26645 = (state_26680[(8)]);
var inst_26652 = (inst_26644[inst_26645] = inst_26648);
var inst_26653__$1 = (inst_26645 + (1));
var inst_26654 = (inst_26653__$1 < n);
var state_26680__$1 = (function (){var statearr_26694 = state_26680;
(statearr_26694[(12)] = inst_26652);

(statearr_26694[(11)] = inst_26653__$1);

return statearr_26694;
})();
if(cljs.core.truth_(inst_26654)){
var statearr_26695_26718 = state_26680__$1;
(statearr_26695_26718[(1)] = (8));

} else {
var statearr_26696_26719 = state_26680__$1;
(statearr_26696_26719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26681 === (14))){
var inst_26673 = (state_26680[(2)]);
var inst_26674 = cljs.core.async.close_BANG_.call(null,out);
var state_26680__$1 = (function (){var statearr_26698 = state_26680;
(statearr_26698[(13)] = inst_26673);

return statearr_26698;
})();
var statearr_26699_26720 = state_26680__$1;
(statearr_26699_26720[(2)] = inst_26674);

(statearr_26699_26720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26681 === (10))){
var inst_26664 = (state_26680[(2)]);
var state_26680__$1 = state_26680;
var statearr_26700_26721 = state_26680__$1;
(statearr_26700_26721[(2)] = inst_26664);

(statearr_26700_26721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26681 === (8))){
var inst_26644 = (state_26680[(7)]);
var inst_26653 = (state_26680[(11)]);
var tmp26697 = inst_26644;
var inst_26644__$1 = tmp26697;
var inst_26645 = inst_26653;
var state_26680__$1 = (function (){var statearr_26701 = state_26680;
(statearr_26701[(7)] = inst_26644__$1);

(statearr_26701[(8)] = inst_26645);

return statearr_26701;
})();
var statearr_26702_26722 = state_26680__$1;
(statearr_26702_26722[(2)] = null);

(statearr_26702_26722[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24851__auto__ = null;
var cljs$core$async$state_machine__24851__auto____0 = (function (){
var statearr_26703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26703[(0)] = cljs$core$async$state_machine__24851__auto__);

(statearr_26703[(1)] = (1));

return statearr_26703;
});
var cljs$core$async$state_machine__24851__auto____1 = (function (state_26680){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_26680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e26704){if((e26704 instanceof Object)){
var ex__24854__auto__ = e26704;
var statearr_26705_26723 = state_26680;
(statearr_26705_26723[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26724 = state_26680;
state_26680 = G__26724;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$state_machine__24851__auto__ = function(state_26680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24851__auto____1.call(this,state_26680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24851__auto____0;
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24851__auto____1;
return cljs$core$async$state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_26706 = f__24948__auto__.call(null);
(statearr_26706[(6)] = c__24947__auto___26708);

return statearr_26706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26726 = arguments.length;
switch (G__26726) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24947__auto___26803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24948__auto__ = (function (){var switch__24850__auto__ = (function (state_26771){
var state_val_26772 = (state_26771[(1)]);
if((state_val_26772 === (7))){
var inst_26767 = (state_26771[(2)]);
var state_26771__$1 = state_26771;
var statearr_26773_26804 = state_26771__$1;
(statearr_26773_26804[(2)] = inst_26767);

(statearr_26773_26804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (1))){
var inst_26727 = [];
var inst_26728 = inst_26727;
var inst_26729 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26771__$1 = (function (){var statearr_26774 = state_26771;
(statearr_26774[(7)] = inst_26728);

(statearr_26774[(8)] = inst_26729);

return statearr_26774;
})();
var statearr_26775_26805 = state_26771__$1;
(statearr_26775_26805[(2)] = null);

(statearr_26775_26805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (4))){
var inst_26732 = (state_26771[(9)]);
var inst_26732__$1 = (state_26771[(2)]);
var inst_26733 = (inst_26732__$1 == null);
var inst_26734 = cljs.core.not.call(null,inst_26733);
var state_26771__$1 = (function (){var statearr_26776 = state_26771;
(statearr_26776[(9)] = inst_26732__$1);

return statearr_26776;
})();
if(inst_26734){
var statearr_26777_26806 = state_26771__$1;
(statearr_26777_26806[(1)] = (5));

} else {
var statearr_26778_26807 = state_26771__$1;
(statearr_26778_26807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (15))){
var inst_26728 = (state_26771[(7)]);
var inst_26759 = cljs.core.vec.call(null,inst_26728);
var state_26771__$1 = state_26771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26771__$1,(18),out,inst_26759);
} else {
if((state_val_26772 === (13))){
var inst_26754 = (state_26771[(2)]);
var state_26771__$1 = state_26771;
var statearr_26779_26808 = state_26771__$1;
(statearr_26779_26808[(2)] = inst_26754);

(statearr_26779_26808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (6))){
var inst_26728 = (state_26771[(7)]);
var inst_26756 = inst_26728.length;
var inst_26757 = (inst_26756 > (0));
var state_26771__$1 = state_26771;
if(cljs.core.truth_(inst_26757)){
var statearr_26780_26809 = state_26771__$1;
(statearr_26780_26809[(1)] = (15));

} else {
var statearr_26781_26810 = state_26771__$1;
(statearr_26781_26810[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (17))){
var inst_26764 = (state_26771[(2)]);
var inst_26765 = cljs.core.async.close_BANG_.call(null,out);
var state_26771__$1 = (function (){var statearr_26782 = state_26771;
(statearr_26782[(10)] = inst_26764);

return statearr_26782;
})();
var statearr_26783_26811 = state_26771__$1;
(statearr_26783_26811[(2)] = inst_26765);

(statearr_26783_26811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (3))){
var inst_26769 = (state_26771[(2)]);
var state_26771__$1 = state_26771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26771__$1,inst_26769);
} else {
if((state_val_26772 === (12))){
var inst_26728 = (state_26771[(7)]);
var inst_26747 = cljs.core.vec.call(null,inst_26728);
var state_26771__$1 = state_26771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26771__$1,(14),out,inst_26747);
} else {
if((state_val_26772 === (2))){
var state_26771__$1 = state_26771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26771__$1,(4),ch);
} else {
if((state_val_26772 === (11))){
var inst_26728 = (state_26771[(7)]);
var inst_26732 = (state_26771[(9)]);
var inst_26736 = (state_26771[(11)]);
var inst_26744 = inst_26728.push(inst_26732);
var tmp26784 = inst_26728;
var inst_26728__$1 = tmp26784;
var inst_26729 = inst_26736;
var state_26771__$1 = (function (){var statearr_26785 = state_26771;
(statearr_26785[(7)] = inst_26728__$1);

(statearr_26785[(8)] = inst_26729);

(statearr_26785[(12)] = inst_26744);

return statearr_26785;
})();
var statearr_26786_26812 = state_26771__$1;
(statearr_26786_26812[(2)] = null);

(statearr_26786_26812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (9))){
var inst_26729 = (state_26771[(8)]);
var inst_26740 = cljs.core.keyword_identical_QMARK_.call(null,inst_26729,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_26771__$1 = state_26771;
var statearr_26787_26813 = state_26771__$1;
(statearr_26787_26813[(2)] = inst_26740);

(statearr_26787_26813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (5))){
var inst_26737 = (state_26771[(13)]);
var inst_26729 = (state_26771[(8)]);
var inst_26732 = (state_26771[(9)]);
var inst_26736 = (state_26771[(11)]);
var inst_26736__$1 = f.call(null,inst_26732);
var inst_26737__$1 = cljs.core._EQ_.call(null,inst_26736__$1,inst_26729);
var state_26771__$1 = (function (){var statearr_26788 = state_26771;
(statearr_26788[(13)] = inst_26737__$1);

(statearr_26788[(11)] = inst_26736__$1);

return statearr_26788;
})();
if(inst_26737__$1){
var statearr_26789_26814 = state_26771__$1;
(statearr_26789_26814[(1)] = (8));

} else {
var statearr_26790_26815 = state_26771__$1;
(statearr_26790_26815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (14))){
var inst_26732 = (state_26771[(9)]);
var inst_26736 = (state_26771[(11)]);
var inst_26749 = (state_26771[(2)]);
var inst_26750 = [];
var inst_26751 = inst_26750.push(inst_26732);
var inst_26728 = inst_26750;
var inst_26729 = inst_26736;
var state_26771__$1 = (function (){var statearr_26791 = state_26771;
(statearr_26791[(7)] = inst_26728);

(statearr_26791[(8)] = inst_26729);

(statearr_26791[(14)] = inst_26751);

(statearr_26791[(15)] = inst_26749);

return statearr_26791;
})();
var statearr_26792_26816 = state_26771__$1;
(statearr_26792_26816[(2)] = null);

(statearr_26792_26816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (16))){
var state_26771__$1 = state_26771;
var statearr_26793_26817 = state_26771__$1;
(statearr_26793_26817[(2)] = null);

(statearr_26793_26817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (10))){
var inst_26742 = (state_26771[(2)]);
var state_26771__$1 = state_26771;
if(cljs.core.truth_(inst_26742)){
var statearr_26794_26818 = state_26771__$1;
(statearr_26794_26818[(1)] = (11));

} else {
var statearr_26795_26819 = state_26771__$1;
(statearr_26795_26819[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (18))){
var inst_26761 = (state_26771[(2)]);
var state_26771__$1 = state_26771;
var statearr_26796_26820 = state_26771__$1;
(statearr_26796_26820[(2)] = inst_26761);

(statearr_26796_26820[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (8))){
var inst_26737 = (state_26771[(13)]);
var state_26771__$1 = state_26771;
var statearr_26797_26821 = state_26771__$1;
(statearr_26797_26821[(2)] = inst_26737);

(statearr_26797_26821[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__24851__auto__ = null;
var cljs$core$async$state_machine__24851__auto____0 = (function (){
var statearr_26798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26798[(0)] = cljs$core$async$state_machine__24851__auto__);

(statearr_26798[(1)] = (1));

return statearr_26798;
});
var cljs$core$async$state_machine__24851__auto____1 = (function (state_26771){
while(true){
var ret_value__24852__auto__ = (function (){try{while(true){
var result__24853__auto__ = switch__24850__auto__.call(null,state_26771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24853__auto__;
}
break;
}
}catch (e26799){if((e26799 instanceof Object)){
var ex__24854__auto__ = e26799;
var statearr_26800_26822 = state_26771;
(statearr_26800_26822[(5)] = ex__24854__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24852__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26823 = state_26771;
state_26771 = G__26823;
continue;
} else {
return ret_value__24852__auto__;
}
break;
}
});
cljs$core$async$state_machine__24851__auto__ = function(state_26771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24851__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24851__auto____1.call(this,state_26771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24851__auto____0;
cljs$core$async$state_machine__24851__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24851__auto____1;
return cljs$core$async$state_machine__24851__auto__;
})()
})();
var state__24949__auto__ = (function (){var statearr_26801 = f__24948__auto__.call(null);
(statearr_26801[(6)] = c__24947__auto___26803);

return statearr_26801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24949__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1654704958208
