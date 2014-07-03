// Compiled by ClojureScript 0.0-2261
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11739 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11739 = (function (f,fn_handler,meta11740){
this.f = f;
this.fn_handler = fn_handler;
this.meta11740 = meta11740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11739.cljs$lang$type = true;
cljs.core.async.t11739.cljs$lang$ctorStr = "cljs.core.async/t11739";
cljs.core.async.t11739.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11739");
});
cljs.core.async.t11739.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11741){var self__ = this;
var _11741__$1 = this;return self__.meta11740;
});
cljs.core.async.t11739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11741,meta11740__$1){var self__ = this;
var _11741__$1 = this;return (new cljs.core.async.t11739(self__.f,self__.fn_handler,meta11740__$1));
});
cljs.core.async.__GT_t11739 = (function __GT_t11739(f__$1,fn_handler__$1,meta11740){return (new cljs.core.async.t11739(f__$1,fn_handler__$1,meta11740));
});
}
return (new cljs.core.async.t11739(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11743 = buff;if(G__11743)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__11743.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11743.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11743);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11743);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11744 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11744);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11744,ret){
return (function (){return fn1.call(null,val_11744);
});})(val_11744,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___11745 = n;var x_11746 = (0);while(true){
if((x_11746 < n__4399__auto___11745))
{(a[x_11746] = (0));
{
var G__11747 = (x_11746 + (1));
x_11746 = G__11747;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11748 = (i + (1));
i = G__11748;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11752 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11752 = (function (flag,alt_flag,meta11753){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11753 = meta11753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11752.cljs$lang$type = true;
cljs.core.async.t11752.cljs$lang$ctorStr = "cljs.core.async/t11752";
cljs.core.async.t11752.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11752");
});})(flag))
;
cljs.core.async.t11752.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11752.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11754){var self__ = this;
var _11754__$1 = this;return self__.meta11753;
});})(flag))
;
cljs.core.async.t11752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11754,meta11753__$1){var self__ = this;
var _11754__$1 = this;return (new cljs.core.async.t11752(self__.flag,self__.alt_flag,meta11753__$1));
});})(flag))
;
cljs.core.async.__GT_t11752 = ((function (flag){
return (function __GT_t11752(flag__$1,alt_flag__$1,meta11753){return (new cljs.core.async.t11752(flag__$1,alt_flag__$1,meta11753));
});})(flag))
;
}
return (new cljs.core.async.t11752(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11758 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11758 = (function (cb,flag,alt_handler,meta11759){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11759 = meta11759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11758.cljs$lang$type = true;
cljs.core.async.t11758.cljs$lang$ctorStr = "cljs.core.async/t11758";
cljs.core.async.t11758.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11758");
});
cljs.core.async.t11758.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11760){var self__ = this;
var _11760__$1 = this;return self__.meta11759;
});
cljs.core.async.t11758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11760,meta11759__$1){var self__ = this;
var _11760__$1 = this;return (new cljs.core.async.t11758(self__.cb,self__.flag,self__.alt_handler,meta11759__$1));
});
cljs.core.async.__GT_t11758 = (function __GT_t11758(cb__$1,flag__$1,alt_handler__$1,meta11759){return (new cljs.core.async.t11758(cb__$1,flag__$1,alt_handler__$1,meta11759));
});
}
return (new cljs.core.async.t11758(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11761_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11761_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11762_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11762_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3543__auto__ = wport;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11763 = (i + (1));
i = G__11763;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3543__auto__ = ret;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3531__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3531__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3531__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11764){var map__11766 = p__11764;var map__11766__$1 = ((cljs.core.seq_QMARK_.call(null,map__11766))?cljs.core.apply.call(null,cljs.core.hash_map,map__11766):map__11766);var opts = map__11766__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11764 = null;if (arguments.length > 1) {
  p__11764 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11764);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11767){
var ports = cljs.core.first(arglist__11767);
var p__11764 = cljs.core.rest(arglist__11767);
return alts_BANG___delegate(ports,p__11764);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11775 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11775 = (function (ch,f,map_LT_,meta11776){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11776 = meta11776;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11775.cljs$lang$type = true;
cljs.core.async.t11775.cljs$lang$ctorStr = "cljs.core.async/t11775";
cljs.core.async.t11775.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11775");
});
cljs.core.async.t11775.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11775.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11775.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11775.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11778 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11778 = (function (fn1,_,meta11776,ch,f,map_LT_,meta11779){
this.fn1 = fn1;
this._ = _;
this.meta11776 = meta11776;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11779 = meta11779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11778.cljs$lang$type = true;
cljs.core.async.t11778.cljs$lang$ctorStr = "cljs.core.async/t11778";
cljs.core.async.t11778.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11778");
});})(___$1))
;
cljs.core.async.t11778.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11778.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11768_SHARP_){return f1.call(null,(((p1__11768_SHARP_ == null))?null:self__.f.call(null,p1__11768_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11778.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11780){var self__ = this;
var _11780__$1 = this;return self__.meta11779;
});})(___$1))
;
cljs.core.async.t11778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11780,meta11779__$1){var self__ = this;
var _11780__$1 = this;return (new cljs.core.async.t11778(self__.fn1,self__._,self__.meta11776,self__.ch,self__.f,self__.map_LT_,meta11779__$1));
});})(___$1))
;
cljs.core.async.__GT_t11778 = ((function (___$1){
return (function __GT_t11778(fn1__$1,___$2,meta11776__$1,ch__$2,f__$2,map_LT___$2,meta11779){return (new cljs.core.async.t11778(fn1__$1,___$2,meta11776__$1,ch__$2,f__$2,map_LT___$2,meta11779));
});})(___$1))
;
}
return (new cljs.core.async.t11778(fn1,___$1,self__.meta11776,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3531__auto__ = ret;if(cljs.core.truth_(and__3531__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11775.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11775.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11775.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11777){var self__ = this;
var _11777__$1 = this;return self__.meta11776;
});
cljs.core.async.t11775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11777,meta11776__$1){var self__ = this;
var _11777__$1 = this;return (new cljs.core.async.t11775(self__.ch,self__.f,self__.map_LT_,meta11776__$1));
});
cljs.core.async.__GT_t11775 = (function __GT_t11775(ch__$1,f__$1,map_LT___$1,meta11776){return (new cljs.core.async.t11775(ch__$1,f__$1,map_LT___$1,meta11776));
});
}
return (new cljs.core.async.t11775(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11784 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11784 = (function (ch,f,map_GT_,meta11785){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11785 = meta11785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11784.cljs$lang$type = true;
cljs.core.async.t11784.cljs$lang$ctorStr = "cljs.core.async/t11784";
cljs.core.async.t11784.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11784");
});
cljs.core.async.t11784.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11784.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11784.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11784.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11784.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11784.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11786){var self__ = this;
var _11786__$1 = this;return self__.meta11785;
});
cljs.core.async.t11784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11786,meta11785__$1){var self__ = this;
var _11786__$1 = this;return (new cljs.core.async.t11784(self__.ch,self__.f,self__.map_GT_,meta11785__$1));
});
cljs.core.async.__GT_t11784 = (function __GT_t11784(ch__$1,f__$1,map_GT___$1,meta11785){return (new cljs.core.async.t11784(ch__$1,f__$1,map_GT___$1,meta11785));
});
}
return (new cljs.core.async.t11784(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11790 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11790 = (function (ch,p,filter_GT_,meta11791){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11791 = meta11791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11790.cljs$lang$type = true;
cljs.core.async.t11790.cljs$lang$ctorStr = "cljs.core.async/t11790";
cljs.core.async.t11790.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t11790");
});
cljs.core.async.t11790.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11790.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11790.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11790.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11790.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11790.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11790.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11792){var self__ = this;
var _11792__$1 = this;return self__.meta11791;
});
cljs.core.async.t11790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11792,meta11791__$1){var self__ = this;
var _11792__$1 = this;return (new cljs.core.async.t11790(self__.ch,self__.p,self__.filter_GT_,meta11791__$1));
});
cljs.core.async.__GT_t11790 = (function __GT_t11790(ch__$1,p__$1,filter_GT___$1,meta11791){return (new cljs.core.async.t11790(ch__$1,p__$1,filter_GT___$1,meta11791));
});
}
return (new cljs.core.async.t11790(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6366__auto___11875 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___11875,out){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___11875,out){
return (function (state_11854){var state_val_11855 = (state_11854[(1)]);if((state_val_11855 === (7)))
{var inst_11850 = (state_11854[(2)]);var state_11854__$1 = state_11854;var statearr_11856_11876 = state_11854__$1;(statearr_11856_11876[(2)] = inst_11850);
(statearr_11856_11876[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (1)))
{var state_11854__$1 = state_11854;var statearr_11857_11877 = state_11854__$1;(statearr_11857_11877[(2)] = null);
(statearr_11857_11877[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (4)))
{var inst_11836 = (state_11854[(7)]);var inst_11836__$1 = (state_11854[(2)]);var inst_11837 = (inst_11836__$1 == null);var state_11854__$1 = (function (){var statearr_11858 = state_11854;(statearr_11858[(7)] = inst_11836__$1);
return statearr_11858;
})();if(cljs.core.truth_(inst_11837))
{var statearr_11859_11878 = state_11854__$1;(statearr_11859_11878[(1)] = (5));
} else
{var statearr_11860_11879 = state_11854__$1;(statearr_11860_11879[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (6)))
{var inst_11836 = (state_11854[(7)]);var inst_11841 = p.call(null,inst_11836);var state_11854__$1 = state_11854;if(cljs.core.truth_(inst_11841))
{var statearr_11861_11880 = state_11854__$1;(statearr_11861_11880[(1)] = (8));
} else
{var statearr_11862_11881 = state_11854__$1;(statearr_11862_11881[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (3)))
{var inst_11852 = (state_11854[(2)]);var state_11854__$1 = state_11854;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11854__$1,inst_11852);
} else
{if((state_val_11855 === (2)))
{var state_11854__$1 = state_11854;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11854__$1,(4),ch);
} else
{if((state_val_11855 === (11)))
{var inst_11844 = (state_11854[(2)]);var state_11854__$1 = state_11854;var statearr_11863_11882 = state_11854__$1;(statearr_11863_11882[(2)] = inst_11844);
(statearr_11863_11882[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (9)))
{var state_11854__$1 = state_11854;var statearr_11864_11883 = state_11854__$1;(statearr_11864_11883[(2)] = null);
(statearr_11864_11883[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (5)))
{var inst_11839 = cljs.core.async.close_BANG_.call(null,out);var state_11854__$1 = state_11854;var statearr_11865_11884 = state_11854__$1;(statearr_11865_11884[(2)] = inst_11839);
(statearr_11865_11884[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (10)))
{var inst_11847 = (state_11854[(2)]);var state_11854__$1 = (function (){var statearr_11866 = state_11854;(statearr_11866[(8)] = inst_11847);
return statearr_11866;
})();var statearr_11867_11885 = state_11854__$1;(statearr_11867_11885[(2)] = null);
(statearr_11867_11885[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11855 === (8)))
{var inst_11836 = (state_11854[(7)]);var state_11854__$1 = state_11854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11854__$1,(11),out,inst_11836);
} else
{return null;
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
});})(c__6366__auto___11875,out))
;return ((function (switch__6351__auto__,c__6366__auto___11875,out){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_11871 = [null,null,null,null,null,null,null,null,null];(statearr_11871[(0)] = state_machine__6352__auto__);
(statearr_11871[(1)] = (1));
return statearr_11871;
});
var state_machine__6352__auto____1 = (function (state_11854){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_11854);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e11872){if((e11872 instanceof Object))
{var ex__6355__auto__ = e11872;var statearr_11873_11886 = state_11854;(statearr_11873_11886[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11854);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11887 = state_11854;
state_11854 = G__11887;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_11854){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_11854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___11875,out))
})();var state__6368__auto__ = (function (){var statearr_11874 = f__6367__auto__.call(null);(statearr_11874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___11875);
return statearr_11874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___11875,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6366__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto__){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto__){
return (function (state_12053){var state_val_12054 = (state_12053[(1)]);if((state_val_12054 === (7)))
{var inst_12049 = (state_12053[(2)]);var state_12053__$1 = state_12053;var statearr_12055_12096 = state_12053__$1;(statearr_12055_12096[(2)] = inst_12049);
(statearr_12055_12096[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (20)))
{var inst_12019 = (state_12053[(7)]);var inst_12030 = (state_12053[(2)]);var inst_12031 = cljs.core.next.call(null,inst_12019);var inst_12005 = inst_12031;var inst_12006 = null;var inst_12007 = (0);var inst_12008 = (0);var state_12053__$1 = (function (){var statearr_12056 = state_12053;(statearr_12056[(8)] = inst_12006);
(statearr_12056[(9)] = inst_12005);
(statearr_12056[(10)] = inst_12007);
(statearr_12056[(11)] = inst_12030);
(statearr_12056[(12)] = inst_12008);
return statearr_12056;
})();var statearr_12057_12097 = state_12053__$1;(statearr_12057_12097[(2)] = null);
(statearr_12057_12097[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (1)))
{var state_12053__$1 = state_12053;var statearr_12058_12098 = state_12053__$1;(statearr_12058_12098[(2)] = null);
(statearr_12058_12098[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (4)))
{var inst_11994 = (state_12053[(13)]);var inst_11994__$1 = (state_12053[(2)]);var inst_11995 = (inst_11994__$1 == null);var state_12053__$1 = (function (){var statearr_12059 = state_12053;(statearr_12059[(13)] = inst_11994__$1);
return statearr_12059;
})();if(cljs.core.truth_(inst_11995))
{var statearr_12060_12099 = state_12053__$1;(statearr_12060_12099[(1)] = (5));
} else
{var statearr_12061_12100 = state_12053__$1;(statearr_12061_12100[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (15)))
{var state_12053__$1 = state_12053;var statearr_12065_12101 = state_12053__$1;(statearr_12065_12101[(2)] = null);
(statearr_12065_12101[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (21)))
{var state_12053__$1 = state_12053;var statearr_12066_12102 = state_12053__$1;(statearr_12066_12102[(2)] = null);
(statearr_12066_12102[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (13)))
{var inst_12006 = (state_12053[(8)]);var inst_12005 = (state_12053[(9)]);var inst_12007 = (state_12053[(10)]);var inst_12008 = (state_12053[(12)]);var inst_12015 = (state_12053[(2)]);var inst_12016 = (inst_12008 + (1));var tmp12062 = inst_12006;var tmp12063 = inst_12005;var tmp12064 = inst_12007;var inst_12005__$1 = tmp12063;var inst_12006__$1 = tmp12062;var inst_12007__$1 = tmp12064;var inst_12008__$1 = inst_12016;var state_12053__$1 = (function (){var statearr_12067 = state_12053;(statearr_12067[(8)] = inst_12006__$1);
(statearr_12067[(14)] = inst_12015);
(statearr_12067[(9)] = inst_12005__$1);
(statearr_12067[(10)] = inst_12007__$1);
(statearr_12067[(12)] = inst_12008__$1);
return statearr_12067;
})();var statearr_12068_12103 = state_12053__$1;(statearr_12068_12103[(2)] = null);
(statearr_12068_12103[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (22)))
{var state_12053__$1 = state_12053;var statearr_12069_12104 = state_12053__$1;(statearr_12069_12104[(2)] = null);
(statearr_12069_12104[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (6)))
{var inst_11994 = (state_12053[(13)]);var inst_12003 = f.call(null,inst_11994);var inst_12004 = cljs.core.seq.call(null,inst_12003);var inst_12005 = inst_12004;var inst_12006 = null;var inst_12007 = (0);var inst_12008 = (0);var state_12053__$1 = (function (){var statearr_12070 = state_12053;(statearr_12070[(8)] = inst_12006);
(statearr_12070[(9)] = inst_12005);
(statearr_12070[(10)] = inst_12007);
(statearr_12070[(12)] = inst_12008);
return statearr_12070;
})();var statearr_12071_12105 = state_12053__$1;(statearr_12071_12105[(2)] = null);
(statearr_12071_12105[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (17)))
{var inst_12019 = (state_12053[(7)]);var inst_12023 = cljs.core.chunk_first.call(null,inst_12019);var inst_12024 = cljs.core.chunk_rest.call(null,inst_12019);var inst_12025 = cljs.core.count.call(null,inst_12023);var inst_12005 = inst_12024;var inst_12006 = inst_12023;var inst_12007 = inst_12025;var inst_12008 = (0);var state_12053__$1 = (function (){var statearr_12072 = state_12053;(statearr_12072[(8)] = inst_12006);
(statearr_12072[(9)] = inst_12005);
(statearr_12072[(10)] = inst_12007);
(statearr_12072[(12)] = inst_12008);
return statearr_12072;
})();var statearr_12073_12106 = state_12053__$1;(statearr_12073_12106[(2)] = null);
(statearr_12073_12106[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (3)))
{var inst_12051 = (state_12053[(2)]);var state_12053__$1 = state_12053;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12053__$1,inst_12051);
} else
{if((state_val_12054 === (12)))
{var inst_12039 = (state_12053[(2)]);var state_12053__$1 = state_12053;var statearr_12074_12107 = state_12053__$1;(statearr_12074_12107[(2)] = inst_12039);
(statearr_12074_12107[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (2)))
{var state_12053__$1 = state_12053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12053__$1,(4),in$);
} else
{if((state_val_12054 === (23)))
{var inst_12047 = (state_12053[(2)]);var state_12053__$1 = state_12053;var statearr_12075_12108 = state_12053__$1;(statearr_12075_12108[(2)] = inst_12047);
(statearr_12075_12108[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (19)))
{var inst_12034 = (state_12053[(2)]);var state_12053__$1 = state_12053;var statearr_12076_12109 = state_12053__$1;(statearr_12076_12109[(2)] = inst_12034);
(statearr_12076_12109[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (11)))
{var inst_12005 = (state_12053[(9)]);var inst_12019 = (state_12053[(7)]);var inst_12019__$1 = cljs.core.seq.call(null,inst_12005);var state_12053__$1 = (function (){var statearr_12077 = state_12053;(statearr_12077[(7)] = inst_12019__$1);
return statearr_12077;
})();if(inst_12019__$1)
{var statearr_12078_12110 = state_12053__$1;(statearr_12078_12110[(1)] = (14));
} else
{var statearr_12079_12111 = state_12053__$1;(statearr_12079_12111[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (9)))
{var inst_12041 = (state_12053[(2)]);var inst_12042 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_12053__$1 = (function (){var statearr_12080 = state_12053;(statearr_12080[(15)] = inst_12041);
return statearr_12080;
})();if(cljs.core.truth_(inst_12042))
{var statearr_12081_12112 = state_12053__$1;(statearr_12081_12112[(1)] = (21));
} else
{var statearr_12082_12113 = state_12053__$1;(statearr_12082_12113[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (5)))
{var inst_11997 = cljs.core.async.close_BANG_.call(null,out);var state_12053__$1 = state_12053;var statearr_12083_12114 = state_12053__$1;(statearr_12083_12114[(2)] = inst_11997);
(statearr_12083_12114[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (14)))
{var inst_12019 = (state_12053[(7)]);var inst_12021 = cljs.core.chunked_seq_QMARK_.call(null,inst_12019);var state_12053__$1 = state_12053;if(inst_12021)
{var statearr_12084_12115 = state_12053__$1;(statearr_12084_12115[(1)] = (17));
} else
{var statearr_12085_12116 = state_12053__$1;(statearr_12085_12116[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (16)))
{var inst_12037 = (state_12053[(2)]);var state_12053__$1 = state_12053;var statearr_12086_12117 = state_12053__$1;(statearr_12086_12117[(2)] = inst_12037);
(statearr_12086_12117[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12054 === (10)))
{var inst_12006 = (state_12053[(8)]);var inst_12008 = (state_12053[(12)]);var inst_12013 = cljs.core._nth.call(null,inst_12006,inst_12008);var state_12053__$1 = state_12053;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12053__$1,(13),out,inst_12013);
} else
{if((state_val_12054 === (18)))
{var inst_12019 = (state_12053[(7)]);var inst_12028 = cljs.core.first.call(null,inst_12019);var state_12053__$1 = state_12053;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12053__$1,(20),out,inst_12028);
} else
{if((state_val_12054 === (8)))
{var inst_12007 = (state_12053[(10)]);var inst_12008 = (state_12053[(12)]);var inst_12010 = (inst_12008 < inst_12007);var inst_12011 = inst_12010;var state_12053__$1 = state_12053;if(cljs.core.truth_(inst_12011))
{var statearr_12087_12118 = state_12053__$1;(statearr_12087_12118[(1)] = (10));
} else
{var statearr_12088_12119 = state_12053__$1;(statearr_12088_12119[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6366__auto__))
;return ((function (switch__6351__auto__,c__6366__auto__){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_12092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12092[(0)] = state_machine__6352__auto__);
(statearr_12092[(1)] = (1));
return statearr_12092;
});
var state_machine__6352__auto____1 = (function (state_12053){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_12053);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e12093){if((e12093 instanceof Object))
{var ex__6355__auto__ = e12093;var statearr_12094_12120 = state_12053;(statearr_12094_12120[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12053);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12093;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12121 = state_12053;
state_12053 = G__12121;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_12053){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_12053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto__))
})();var state__6368__auto__ = (function (){var statearr_12095 = f__6367__auto__.call(null);(statearr_12095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto__);
return statearr_12095;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto__))
);
return c__6366__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6366__auto___12216 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___12216){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___12216){
return (function (state_12192){var state_val_12193 = (state_12192[(1)]);if((state_val_12193 === (7)))
{var inst_12188 = (state_12192[(2)]);var state_12192__$1 = state_12192;var statearr_12194_12217 = state_12192__$1;(statearr_12194_12217[(2)] = inst_12188);
(statearr_12194_12217[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12193 === (1)))
{var state_12192__$1 = state_12192;var statearr_12195_12218 = state_12192__$1;(statearr_12195_12218[(2)] = null);
(statearr_12195_12218[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12193 === (4)))
{var inst_12171 = (state_12192[(7)]);var inst_12171__$1 = (state_12192[(2)]);var inst_12172 = (inst_12171__$1 == null);var state_12192__$1 = (function (){var statearr_12196 = state_12192;(statearr_12196[(7)] = inst_12171__$1);
return statearr_12196;
})();if(cljs.core.truth_(inst_12172))
{var statearr_12197_12219 = state_12192__$1;(statearr_12197_12219[(1)] = (5));
} else
{var statearr_12198_12220 = state_12192__$1;(statearr_12198_12220[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12193 === (13)))
{var state_12192__$1 = state_12192;var statearr_12199_12221 = state_12192__$1;(statearr_12199_12221[(2)] = null);
(statearr_12199_12221[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12193 === (6)))
{var inst_12171 = (state_12192[(7)]);var state_12192__$1 = state_12192;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12192__$1,(11),to,inst_12171);
} else
{if((state_val_12193 === (3)))
{var inst_12190 = (state_12192[(2)]);var state_12192__$1 = state_12192;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12192__$1,inst_12190);
} else
{if((state_val_12193 === (12)))
{var state_12192__$1 = state_12192;var statearr_12200_12222 = state_12192__$1;(statearr_12200_12222[(2)] = null);
(statearr_12200_12222[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12193 === (2)))
{var state_12192__$1 = state_12192;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12192__$1,(4),from);
} else
{if((state_val_12193 === (11)))
{var inst_12181 = (state_12192[(2)]);var state_12192__$1 = state_12192;if(cljs.core.truth_(inst_12181))
{var statearr_12201_12223 = state_12192__$1;(statearr_12201_12223[(1)] = (12));
} else
{var statearr_12202_12224 = state_12192__$1;(statearr_12202_12224[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12193 === (9)))
{var state_12192__$1 = state_12192;var statearr_12203_12225 = state_12192__$1;(statearr_12203_12225[(2)] = null);
(statearr_12203_12225[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12193 === (5)))
{var state_12192__$1 = state_12192;if(cljs.core.truth_(close_QMARK_))
{var statearr_12204_12226 = state_12192__$1;(statearr_12204_12226[(1)] = (8));
} else
{var statearr_12205_12227 = state_12192__$1;(statearr_12205_12227[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12193 === (14)))
{var inst_12186 = (state_12192[(2)]);var state_12192__$1 = state_12192;var statearr_12206_12228 = state_12192__$1;(statearr_12206_12228[(2)] = inst_12186);
(statearr_12206_12228[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12193 === (10)))
{var inst_12178 = (state_12192[(2)]);var state_12192__$1 = state_12192;var statearr_12207_12229 = state_12192__$1;(statearr_12207_12229[(2)] = inst_12178);
(statearr_12207_12229[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12193 === (8)))
{var inst_12175 = cljs.core.async.close_BANG_.call(null,to);var state_12192__$1 = state_12192;var statearr_12208_12230 = state_12192__$1;(statearr_12208_12230[(2)] = inst_12175);
(statearr_12208_12230[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6366__auto___12216))
;return ((function (switch__6351__auto__,c__6366__auto___12216){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_12212 = [null,null,null,null,null,null,null,null];(statearr_12212[(0)] = state_machine__6352__auto__);
(statearr_12212[(1)] = (1));
return statearr_12212;
});
var state_machine__6352__auto____1 = (function (state_12192){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_12192);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e12213){if((e12213 instanceof Object))
{var ex__6355__auto__ = e12213;var statearr_12214_12231 = state_12192;(statearr_12214_12231[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12192);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12213;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12232 = state_12192;
state_12192 = G__12232;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_12192){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_12192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___12216))
})();var state__6368__auto__ = (function (){var statearr_12215 = f__6367__auto__.call(null);(statearr_12215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___12216);
return statearr_12215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___12216))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6366__auto___12333 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___12333,tc,fc){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___12333,tc,fc){
return (function (state_12308){var state_val_12309 = (state_12308[(1)]);if((state_val_12309 === (7)))
{var inst_12304 = (state_12308[(2)]);var state_12308__$1 = state_12308;var statearr_12310_12334 = state_12308__$1;(statearr_12310_12334[(2)] = inst_12304);
(statearr_12310_12334[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12309 === (1)))
{var state_12308__$1 = state_12308;var statearr_12311_12335 = state_12308__$1;(statearr_12311_12335[(2)] = null);
(statearr_12311_12335[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12309 === (4)))
{var inst_12285 = (state_12308[(7)]);var inst_12285__$1 = (state_12308[(2)]);var inst_12286 = (inst_12285__$1 == null);var state_12308__$1 = (function (){var statearr_12312 = state_12308;(statearr_12312[(7)] = inst_12285__$1);
return statearr_12312;
})();if(cljs.core.truth_(inst_12286))
{var statearr_12313_12336 = state_12308__$1;(statearr_12313_12336[(1)] = (5));
} else
{var statearr_12314_12337 = state_12308__$1;(statearr_12314_12337[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12309 === (13)))
{var state_12308__$1 = state_12308;var statearr_12315_12338 = state_12308__$1;(statearr_12315_12338[(2)] = null);
(statearr_12315_12338[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12309 === (6)))
{var inst_12285 = (state_12308[(7)]);var inst_12291 = p.call(null,inst_12285);var state_12308__$1 = state_12308;if(cljs.core.truth_(inst_12291))
{var statearr_12316_12339 = state_12308__$1;(statearr_12316_12339[(1)] = (9));
} else
{var statearr_12317_12340 = state_12308__$1;(statearr_12317_12340[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12309 === (3)))
{var inst_12306 = (state_12308[(2)]);var state_12308__$1 = state_12308;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12308__$1,inst_12306);
} else
{if((state_val_12309 === (12)))
{var state_12308__$1 = state_12308;var statearr_12318_12341 = state_12308__$1;(statearr_12318_12341[(2)] = null);
(statearr_12318_12341[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12309 === (2)))
{var state_12308__$1 = state_12308;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12308__$1,(4),ch);
} else
{if((state_val_12309 === (11)))
{var inst_12285 = (state_12308[(7)]);var inst_12295 = (state_12308[(2)]);var state_12308__$1 = state_12308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12308__$1,(8),inst_12295,inst_12285);
} else
{if((state_val_12309 === (9)))
{var state_12308__$1 = state_12308;var statearr_12319_12342 = state_12308__$1;(statearr_12319_12342[(2)] = tc);
(statearr_12319_12342[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12309 === (5)))
{var inst_12288 = cljs.core.async.close_BANG_.call(null,tc);var inst_12289 = cljs.core.async.close_BANG_.call(null,fc);var state_12308__$1 = (function (){var statearr_12320 = state_12308;(statearr_12320[(8)] = inst_12288);
return statearr_12320;
})();var statearr_12321_12343 = state_12308__$1;(statearr_12321_12343[(2)] = inst_12289);
(statearr_12321_12343[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12309 === (14)))
{var inst_12302 = (state_12308[(2)]);var state_12308__$1 = state_12308;var statearr_12322_12344 = state_12308__$1;(statearr_12322_12344[(2)] = inst_12302);
(statearr_12322_12344[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12309 === (10)))
{var state_12308__$1 = state_12308;var statearr_12323_12345 = state_12308__$1;(statearr_12323_12345[(2)] = fc);
(statearr_12323_12345[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12309 === (8)))
{var inst_12297 = (state_12308[(2)]);var state_12308__$1 = state_12308;if(cljs.core.truth_(inst_12297))
{var statearr_12324_12346 = state_12308__$1;(statearr_12324_12346[(1)] = (12));
} else
{var statearr_12325_12347 = state_12308__$1;(statearr_12325_12347[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6366__auto___12333,tc,fc))
;return ((function (switch__6351__auto__,c__6366__auto___12333,tc,fc){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_12329 = [null,null,null,null,null,null,null,null,null];(statearr_12329[(0)] = state_machine__6352__auto__);
(statearr_12329[(1)] = (1));
return statearr_12329;
});
var state_machine__6352__auto____1 = (function (state_12308){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_12308);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e12330){if((e12330 instanceof Object))
{var ex__6355__auto__ = e12330;var statearr_12331_12348 = state_12308;(statearr_12331_12348[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12308);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12349 = state_12308;
state_12308 = G__12349;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_12308){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_12308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___12333,tc,fc))
})();var state__6368__auto__ = (function (){var statearr_12332 = f__6367__auto__.call(null);(statearr_12332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___12333);
return statearr_12332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___12333,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6366__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto__){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto__){
return (function (state_12396){var state_val_12397 = (state_12396[(1)]);if((state_val_12397 === (7)))
{var inst_12392 = (state_12396[(2)]);var state_12396__$1 = state_12396;var statearr_12398_12414 = state_12396__$1;(statearr_12398_12414[(2)] = inst_12392);
(statearr_12398_12414[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12397 === (6)))
{var inst_12382 = (state_12396[(7)]);var inst_12385 = (state_12396[(8)]);var inst_12389 = f.call(null,inst_12382,inst_12385);var inst_12382__$1 = inst_12389;var state_12396__$1 = (function (){var statearr_12399 = state_12396;(statearr_12399[(7)] = inst_12382__$1);
return statearr_12399;
})();var statearr_12400_12415 = state_12396__$1;(statearr_12400_12415[(2)] = null);
(statearr_12400_12415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12397 === (5)))
{var inst_12382 = (state_12396[(7)]);var state_12396__$1 = state_12396;var statearr_12401_12416 = state_12396__$1;(statearr_12401_12416[(2)] = inst_12382);
(statearr_12401_12416[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12397 === (4)))
{var inst_12385 = (state_12396[(8)]);var inst_12385__$1 = (state_12396[(2)]);var inst_12386 = (inst_12385__$1 == null);var state_12396__$1 = (function (){var statearr_12402 = state_12396;(statearr_12402[(8)] = inst_12385__$1);
return statearr_12402;
})();if(cljs.core.truth_(inst_12386))
{var statearr_12403_12417 = state_12396__$1;(statearr_12403_12417[(1)] = (5));
} else
{var statearr_12404_12418 = state_12396__$1;(statearr_12404_12418[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12397 === (3)))
{var inst_12394 = (state_12396[(2)]);var state_12396__$1 = state_12396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12396__$1,inst_12394);
} else
{if((state_val_12397 === (2)))
{var state_12396__$1 = state_12396;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12396__$1,(4),ch);
} else
{if((state_val_12397 === (1)))
{var inst_12382 = init;var state_12396__$1 = (function (){var statearr_12405 = state_12396;(statearr_12405[(7)] = inst_12382);
return statearr_12405;
})();var statearr_12406_12419 = state_12396__$1;(statearr_12406_12419[(2)] = null);
(statearr_12406_12419[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6366__auto__))
;return ((function (switch__6351__auto__,c__6366__auto__){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_12410 = [null,null,null,null,null,null,null,null,null];(statearr_12410[(0)] = state_machine__6352__auto__);
(statearr_12410[(1)] = (1));
return statearr_12410;
});
var state_machine__6352__auto____1 = (function (state_12396){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_12396);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e12411){if((e12411 instanceof Object))
{var ex__6355__auto__ = e12411;var statearr_12412_12420 = state_12396;(statearr_12412_12420[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12396);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12411;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12421 = state_12396;
state_12396 = G__12421;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_12396){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_12396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto__))
})();var state__6368__auto__ = (function (){var statearr_12413 = f__6367__auto__.call(null);(statearr_12413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto__);
return statearr_12413;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto__))
);
return c__6366__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6366__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto__){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto__){
return (function (state_12495){var state_val_12496 = (state_12495[(1)]);if((state_val_12496 === (7)))
{var inst_12477 = (state_12495[(2)]);var state_12495__$1 = state_12495;var statearr_12497_12520 = state_12495__$1;(statearr_12497_12520[(2)] = inst_12477);
(statearr_12497_12520[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12496 === (1)))
{var inst_12471 = cljs.core.seq.call(null,coll);var inst_12472 = inst_12471;var state_12495__$1 = (function (){var statearr_12498 = state_12495;(statearr_12498[(7)] = inst_12472);
return statearr_12498;
})();var statearr_12499_12521 = state_12495__$1;(statearr_12499_12521[(2)] = null);
(statearr_12499_12521[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12496 === (4)))
{var inst_12472 = (state_12495[(7)]);var inst_12475 = cljs.core.first.call(null,inst_12472);var state_12495__$1 = state_12495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12495__$1,(7),ch,inst_12475);
} else
{if((state_val_12496 === (13)))
{var inst_12489 = (state_12495[(2)]);var state_12495__$1 = state_12495;var statearr_12500_12522 = state_12495__$1;(statearr_12500_12522[(2)] = inst_12489);
(statearr_12500_12522[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12496 === (6)))
{var inst_12480 = (state_12495[(2)]);var state_12495__$1 = state_12495;if(cljs.core.truth_(inst_12480))
{var statearr_12501_12523 = state_12495__$1;(statearr_12501_12523[(1)] = (8));
} else
{var statearr_12502_12524 = state_12495__$1;(statearr_12502_12524[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12496 === (3)))
{var inst_12493 = (state_12495[(2)]);var state_12495__$1 = state_12495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12495__$1,inst_12493);
} else
{if((state_val_12496 === (12)))
{var state_12495__$1 = state_12495;var statearr_12503_12525 = state_12495__$1;(statearr_12503_12525[(2)] = null);
(statearr_12503_12525[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12496 === (2)))
{var inst_12472 = (state_12495[(7)]);var state_12495__$1 = state_12495;if(cljs.core.truth_(inst_12472))
{var statearr_12504_12526 = state_12495__$1;(statearr_12504_12526[(1)] = (4));
} else
{var statearr_12505_12527 = state_12495__$1;(statearr_12505_12527[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12496 === (11)))
{var inst_12486 = cljs.core.async.close_BANG_.call(null,ch);var state_12495__$1 = state_12495;var statearr_12506_12528 = state_12495__$1;(statearr_12506_12528[(2)] = inst_12486);
(statearr_12506_12528[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12496 === (9)))
{var state_12495__$1 = state_12495;if(cljs.core.truth_(close_QMARK_))
{var statearr_12507_12529 = state_12495__$1;(statearr_12507_12529[(1)] = (11));
} else
{var statearr_12508_12530 = state_12495__$1;(statearr_12508_12530[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12496 === (5)))
{var inst_12472 = (state_12495[(7)]);var state_12495__$1 = state_12495;var statearr_12509_12531 = state_12495__$1;(statearr_12509_12531[(2)] = inst_12472);
(statearr_12509_12531[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12496 === (10)))
{var inst_12491 = (state_12495[(2)]);var state_12495__$1 = state_12495;var statearr_12510_12532 = state_12495__$1;(statearr_12510_12532[(2)] = inst_12491);
(statearr_12510_12532[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12496 === (8)))
{var inst_12472 = (state_12495[(7)]);var inst_12482 = cljs.core.next.call(null,inst_12472);var inst_12472__$1 = inst_12482;var state_12495__$1 = (function (){var statearr_12511 = state_12495;(statearr_12511[(7)] = inst_12472__$1);
return statearr_12511;
})();var statearr_12512_12533 = state_12495__$1;(statearr_12512_12533[(2)] = null);
(statearr_12512_12533[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6366__auto__))
;return ((function (switch__6351__auto__,c__6366__auto__){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_12516 = [null,null,null,null,null,null,null,null];(statearr_12516[(0)] = state_machine__6352__auto__);
(statearr_12516[(1)] = (1));
return statearr_12516;
});
var state_machine__6352__auto____1 = (function (state_12495){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_12495);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e12517){if((e12517 instanceof Object))
{var ex__6355__auto__ = e12517;var statearr_12518_12534 = state_12495;(statearr_12518_12534[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12517;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12535 = state_12495;
state_12495 = G__12535;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_12495){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_12495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto__))
})();var state__6368__auto__ = (function (){var statearr_12519 = f__6367__auto__.call(null);(statearr_12519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto__);
return statearr_12519;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto__))
);
return c__6366__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12537 = {};return obj12537;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3531__auto__ = _;if(and__3531__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4170__auto__ = (((_ == null))?null:_);return (function (){var or__3543__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12539 = {};return obj12539;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12761 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12761 = (function (cs,ch,mult,meta12762){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12762 = meta12762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12761.cljs$lang$type = true;
cljs.core.async.t12761.cljs$lang$ctorStr = "cljs.core.async/t12761";
cljs.core.async.t12761.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t12761");
});})(cs))
;
cljs.core.async.t12761.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12761.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12761.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12761.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12761.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12761.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12763){var self__ = this;
var _12763__$1 = this;return self__.meta12762;
});})(cs))
;
cljs.core.async.t12761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12763,meta12762__$1){var self__ = this;
var _12763__$1 = this;return (new cljs.core.async.t12761(self__.cs,self__.ch,self__.mult,meta12762__$1));
});})(cs))
;
cljs.core.async.__GT_t12761 = ((function (cs){
return (function __GT_t12761(cs__$1,ch__$1,mult__$1,meta12762){return (new cljs.core.async.t12761(cs__$1,ch__$1,mult__$1,meta12762));
});})(cs))
;
}
return (new cljs.core.async.t12761(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6366__auto___12982 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___12982,cs,m,dchan,dctr,done){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___12982,cs,m,dchan,dctr,done){
return (function (state_12894){var state_val_12895 = (state_12894[(1)]);if((state_val_12895 === (7)))
{var inst_12890 = (state_12894[(2)]);var state_12894__$1 = state_12894;var statearr_12896_12983 = state_12894__$1;(statearr_12896_12983[(2)] = inst_12890);
(statearr_12896_12983[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (20)))
{var inst_12795 = (state_12894[(7)]);var inst_12805 = cljs.core.first.call(null,inst_12795);var inst_12806 = cljs.core.nth.call(null,inst_12805,(0),null);var inst_12807 = cljs.core.nth.call(null,inst_12805,(1),null);var state_12894__$1 = (function (){var statearr_12897 = state_12894;(statearr_12897[(8)] = inst_12806);
return statearr_12897;
})();if(cljs.core.truth_(inst_12807))
{var statearr_12898_12984 = state_12894__$1;(statearr_12898_12984[(1)] = (22));
} else
{var statearr_12899_12985 = state_12894__$1;(statearr_12899_12985[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (27)))
{var inst_12766 = (state_12894[(9)]);var inst_12837 = (state_12894[(10)]);var inst_12835 = (state_12894[(11)]);var inst_12842 = (state_12894[(12)]);var inst_12842__$1 = cljs.core._nth.call(null,inst_12835,inst_12837);var inst_12843 = cljs.core.async.put_BANG_.call(null,inst_12842__$1,inst_12766,done);var state_12894__$1 = (function (){var statearr_12900 = state_12894;(statearr_12900[(12)] = inst_12842__$1);
return statearr_12900;
})();if(cljs.core.truth_(inst_12843))
{var statearr_12901_12986 = state_12894__$1;(statearr_12901_12986[(1)] = (30));
} else
{var statearr_12902_12987 = state_12894__$1;(statearr_12902_12987[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (1)))
{var state_12894__$1 = state_12894;var statearr_12903_12988 = state_12894__$1;(statearr_12903_12988[(2)] = null);
(statearr_12903_12988[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (24)))
{var inst_12795 = (state_12894[(7)]);var inst_12812 = (state_12894[(2)]);var inst_12813 = cljs.core.next.call(null,inst_12795);var inst_12775 = inst_12813;var inst_12776 = null;var inst_12777 = (0);var inst_12778 = (0);var state_12894__$1 = (function (){var statearr_12904 = state_12894;(statearr_12904[(13)] = inst_12777);
(statearr_12904[(14)] = inst_12775);
(statearr_12904[(15)] = inst_12778);
(statearr_12904[(16)] = inst_12776);
(statearr_12904[(17)] = inst_12812);
return statearr_12904;
})();var statearr_12905_12989 = state_12894__$1;(statearr_12905_12989[(2)] = null);
(statearr_12905_12989[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (39)))
{var state_12894__$1 = state_12894;var statearr_12909_12990 = state_12894__$1;(statearr_12909_12990[(2)] = null);
(statearr_12909_12990[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (4)))
{var inst_12766 = (state_12894[(9)]);var inst_12766__$1 = (state_12894[(2)]);var inst_12767 = (inst_12766__$1 == null);var state_12894__$1 = (function (){var statearr_12910 = state_12894;(statearr_12910[(9)] = inst_12766__$1);
return statearr_12910;
})();if(cljs.core.truth_(inst_12767))
{var statearr_12911_12991 = state_12894__$1;(statearr_12911_12991[(1)] = (5));
} else
{var statearr_12912_12992 = state_12894__$1;(statearr_12912_12992[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (15)))
{var inst_12777 = (state_12894[(13)]);var inst_12775 = (state_12894[(14)]);var inst_12778 = (state_12894[(15)]);var inst_12776 = (state_12894[(16)]);var inst_12791 = (state_12894[(2)]);var inst_12792 = (inst_12778 + (1));var tmp12906 = inst_12777;var tmp12907 = inst_12775;var tmp12908 = inst_12776;var inst_12775__$1 = tmp12907;var inst_12776__$1 = tmp12908;var inst_12777__$1 = tmp12906;var inst_12778__$1 = inst_12792;var state_12894__$1 = (function (){var statearr_12913 = state_12894;(statearr_12913[(13)] = inst_12777__$1);
(statearr_12913[(14)] = inst_12775__$1);
(statearr_12913[(15)] = inst_12778__$1);
(statearr_12913[(16)] = inst_12776__$1);
(statearr_12913[(18)] = inst_12791);
return statearr_12913;
})();var statearr_12914_12993 = state_12894__$1;(statearr_12914_12993[(2)] = null);
(statearr_12914_12993[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (21)))
{var inst_12816 = (state_12894[(2)]);var state_12894__$1 = state_12894;var statearr_12918_12994 = state_12894__$1;(statearr_12918_12994[(2)] = inst_12816);
(statearr_12918_12994[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (31)))
{var inst_12842 = (state_12894[(12)]);var inst_12846 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12847 = cljs.core.async.untap_STAR_.call(null,m,inst_12842);var state_12894__$1 = (function (){var statearr_12919 = state_12894;(statearr_12919[(19)] = inst_12846);
return statearr_12919;
})();var statearr_12920_12995 = state_12894__$1;(statearr_12920_12995[(2)] = inst_12847);
(statearr_12920_12995[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (32)))
{var inst_12836 = (state_12894[(20)]);var inst_12834 = (state_12894[(21)]);var inst_12837 = (state_12894[(10)]);var inst_12835 = (state_12894[(11)]);var inst_12849 = (state_12894[(2)]);var inst_12850 = (inst_12837 + (1));var tmp12915 = inst_12836;var tmp12916 = inst_12834;var tmp12917 = inst_12835;var inst_12834__$1 = tmp12916;var inst_12835__$1 = tmp12917;var inst_12836__$1 = tmp12915;var inst_12837__$1 = inst_12850;var state_12894__$1 = (function (){var statearr_12921 = state_12894;(statearr_12921[(20)] = inst_12836__$1);
(statearr_12921[(22)] = inst_12849);
(statearr_12921[(21)] = inst_12834__$1);
(statearr_12921[(10)] = inst_12837__$1);
(statearr_12921[(11)] = inst_12835__$1);
return statearr_12921;
})();var statearr_12922_12996 = state_12894__$1;(statearr_12922_12996[(2)] = null);
(statearr_12922_12996[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (40)))
{var inst_12862 = (state_12894[(23)]);var inst_12866 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12867 = cljs.core.async.untap_STAR_.call(null,m,inst_12862);var state_12894__$1 = (function (){var statearr_12923 = state_12894;(statearr_12923[(24)] = inst_12866);
return statearr_12923;
})();var statearr_12924_12997 = state_12894__$1;(statearr_12924_12997[(2)] = inst_12867);
(statearr_12924_12997[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (33)))
{var inst_12853 = (state_12894[(25)]);var inst_12855 = cljs.core.chunked_seq_QMARK_.call(null,inst_12853);var state_12894__$1 = state_12894;if(inst_12855)
{var statearr_12925_12998 = state_12894__$1;(statearr_12925_12998[(1)] = (36));
} else
{var statearr_12926_12999 = state_12894__$1;(statearr_12926_12999[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (13)))
{var inst_12785 = (state_12894[(26)]);var inst_12788 = cljs.core.async.close_BANG_.call(null,inst_12785);var state_12894__$1 = state_12894;var statearr_12927_13000 = state_12894__$1;(statearr_12927_13000[(2)] = inst_12788);
(statearr_12927_13000[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (22)))
{var inst_12806 = (state_12894[(8)]);var inst_12809 = cljs.core.async.close_BANG_.call(null,inst_12806);var state_12894__$1 = state_12894;var statearr_12928_13001 = state_12894__$1;(statearr_12928_13001[(2)] = inst_12809);
(statearr_12928_13001[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (36)))
{var inst_12853 = (state_12894[(25)]);var inst_12857 = cljs.core.chunk_first.call(null,inst_12853);var inst_12858 = cljs.core.chunk_rest.call(null,inst_12853);var inst_12859 = cljs.core.count.call(null,inst_12857);var inst_12834 = inst_12858;var inst_12835 = inst_12857;var inst_12836 = inst_12859;var inst_12837 = (0);var state_12894__$1 = (function (){var statearr_12929 = state_12894;(statearr_12929[(20)] = inst_12836);
(statearr_12929[(21)] = inst_12834);
(statearr_12929[(10)] = inst_12837);
(statearr_12929[(11)] = inst_12835);
return statearr_12929;
})();var statearr_12930_13002 = state_12894__$1;(statearr_12930_13002[(2)] = null);
(statearr_12930_13002[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (41)))
{var inst_12853 = (state_12894[(25)]);var inst_12869 = (state_12894[(2)]);var inst_12870 = cljs.core.next.call(null,inst_12853);var inst_12834 = inst_12870;var inst_12835 = null;var inst_12836 = (0);var inst_12837 = (0);var state_12894__$1 = (function (){var statearr_12931 = state_12894;(statearr_12931[(20)] = inst_12836);
(statearr_12931[(21)] = inst_12834);
(statearr_12931[(10)] = inst_12837);
(statearr_12931[(11)] = inst_12835);
(statearr_12931[(27)] = inst_12869);
return statearr_12931;
})();var statearr_12932_13003 = state_12894__$1;(statearr_12932_13003[(2)] = null);
(statearr_12932_13003[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (43)))
{var state_12894__$1 = state_12894;var statearr_12933_13004 = state_12894__$1;(statearr_12933_13004[(2)] = null);
(statearr_12933_13004[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (29)))
{var inst_12878 = (state_12894[(2)]);var state_12894__$1 = state_12894;var statearr_12934_13005 = state_12894__$1;(statearr_12934_13005[(2)] = inst_12878);
(statearr_12934_13005[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (44)))
{var inst_12887 = (state_12894[(2)]);var state_12894__$1 = (function (){var statearr_12935 = state_12894;(statearr_12935[(28)] = inst_12887);
return statearr_12935;
})();var statearr_12936_13006 = state_12894__$1;(statearr_12936_13006[(2)] = null);
(statearr_12936_13006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (6)))
{var inst_12826 = (state_12894[(29)]);var inst_12825 = cljs.core.deref.call(null,cs);var inst_12826__$1 = cljs.core.keys.call(null,inst_12825);var inst_12827 = cljs.core.count.call(null,inst_12826__$1);var inst_12828 = cljs.core.reset_BANG_.call(null,dctr,inst_12827);var inst_12833 = cljs.core.seq.call(null,inst_12826__$1);var inst_12834 = inst_12833;var inst_12835 = null;var inst_12836 = (0);var inst_12837 = (0);var state_12894__$1 = (function (){var statearr_12937 = state_12894;(statearr_12937[(20)] = inst_12836);
(statearr_12937[(21)] = inst_12834);
(statearr_12937[(10)] = inst_12837);
(statearr_12937[(29)] = inst_12826__$1);
(statearr_12937[(11)] = inst_12835);
(statearr_12937[(30)] = inst_12828);
return statearr_12937;
})();var statearr_12938_13007 = state_12894__$1;(statearr_12938_13007[(2)] = null);
(statearr_12938_13007[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (28)))
{var inst_12834 = (state_12894[(21)]);var inst_12853 = (state_12894[(25)]);var inst_12853__$1 = cljs.core.seq.call(null,inst_12834);var state_12894__$1 = (function (){var statearr_12939 = state_12894;(statearr_12939[(25)] = inst_12853__$1);
return statearr_12939;
})();if(inst_12853__$1)
{var statearr_12940_13008 = state_12894__$1;(statearr_12940_13008[(1)] = (33));
} else
{var statearr_12941_13009 = state_12894__$1;(statearr_12941_13009[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (25)))
{var inst_12836 = (state_12894[(20)]);var inst_12837 = (state_12894[(10)]);var inst_12839 = (inst_12837 < inst_12836);var inst_12840 = inst_12839;var state_12894__$1 = state_12894;if(cljs.core.truth_(inst_12840))
{var statearr_12942_13010 = state_12894__$1;(statearr_12942_13010[(1)] = (27));
} else
{var statearr_12943_13011 = state_12894__$1;(statearr_12943_13011[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (34)))
{var state_12894__$1 = state_12894;var statearr_12944_13012 = state_12894__$1;(statearr_12944_13012[(2)] = null);
(statearr_12944_13012[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (17)))
{var state_12894__$1 = state_12894;var statearr_12945_13013 = state_12894__$1;(statearr_12945_13013[(2)] = null);
(statearr_12945_13013[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (3)))
{var inst_12892 = (state_12894[(2)]);var state_12894__$1 = state_12894;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12894__$1,inst_12892);
} else
{if((state_val_12895 === (12)))
{var inst_12821 = (state_12894[(2)]);var state_12894__$1 = state_12894;var statearr_12946_13014 = state_12894__$1;(statearr_12946_13014[(2)] = inst_12821);
(statearr_12946_13014[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (2)))
{var state_12894__$1 = state_12894;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12894__$1,(4),ch);
} else
{if((state_val_12895 === (23)))
{var state_12894__$1 = state_12894;var statearr_12947_13015 = state_12894__$1;(statearr_12947_13015[(2)] = null);
(statearr_12947_13015[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (35)))
{var inst_12876 = (state_12894[(2)]);var state_12894__$1 = state_12894;var statearr_12948_13016 = state_12894__$1;(statearr_12948_13016[(2)] = inst_12876);
(statearr_12948_13016[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (19)))
{var inst_12795 = (state_12894[(7)]);var inst_12799 = cljs.core.chunk_first.call(null,inst_12795);var inst_12800 = cljs.core.chunk_rest.call(null,inst_12795);var inst_12801 = cljs.core.count.call(null,inst_12799);var inst_12775 = inst_12800;var inst_12776 = inst_12799;var inst_12777 = inst_12801;var inst_12778 = (0);var state_12894__$1 = (function (){var statearr_12949 = state_12894;(statearr_12949[(13)] = inst_12777);
(statearr_12949[(14)] = inst_12775);
(statearr_12949[(15)] = inst_12778);
(statearr_12949[(16)] = inst_12776);
return statearr_12949;
})();var statearr_12950_13017 = state_12894__$1;(statearr_12950_13017[(2)] = null);
(statearr_12950_13017[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (11)))
{var inst_12795 = (state_12894[(7)]);var inst_12775 = (state_12894[(14)]);var inst_12795__$1 = cljs.core.seq.call(null,inst_12775);var state_12894__$1 = (function (){var statearr_12951 = state_12894;(statearr_12951[(7)] = inst_12795__$1);
return statearr_12951;
})();if(inst_12795__$1)
{var statearr_12952_13018 = state_12894__$1;(statearr_12952_13018[(1)] = (16));
} else
{var statearr_12953_13019 = state_12894__$1;(statearr_12953_13019[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (9)))
{var inst_12823 = (state_12894[(2)]);var state_12894__$1 = state_12894;var statearr_12954_13020 = state_12894__$1;(statearr_12954_13020[(2)] = inst_12823);
(statearr_12954_13020[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (5)))
{var inst_12773 = cljs.core.deref.call(null,cs);var inst_12774 = cljs.core.seq.call(null,inst_12773);var inst_12775 = inst_12774;var inst_12776 = null;var inst_12777 = (0);var inst_12778 = (0);var state_12894__$1 = (function (){var statearr_12955 = state_12894;(statearr_12955[(13)] = inst_12777);
(statearr_12955[(14)] = inst_12775);
(statearr_12955[(15)] = inst_12778);
(statearr_12955[(16)] = inst_12776);
return statearr_12955;
})();var statearr_12956_13021 = state_12894__$1;(statearr_12956_13021[(2)] = null);
(statearr_12956_13021[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (14)))
{var state_12894__$1 = state_12894;var statearr_12957_13022 = state_12894__$1;(statearr_12957_13022[(2)] = null);
(statearr_12957_13022[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (45)))
{var inst_12884 = (state_12894[(2)]);var state_12894__$1 = state_12894;var statearr_12958_13023 = state_12894__$1;(statearr_12958_13023[(2)] = inst_12884);
(statearr_12958_13023[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (26)))
{var inst_12826 = (state_12894[(29)]);var inst_12880 = (state_12894[(2)]);var inst_12881 = cljs.core.seq.call(null,inst_12826);var state_12894__$1 = (function (){var statearr_12959 = state_12894;(statearr_12959[(31)] = inst_12880);
return statearr_12959;
})();if(inst_12881)
{var statearr_12960_13024 = state_12894__$1;(statearr_12960_13024[(1)] = (42));
} else
{var statearr_12961_13025 = state_12894__$1;(statearr_12961_13025[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (16)))
{var inst_12795 = (state_12894[(7)]);var inst_12797 = cljs.core.chunked_seq_QMARK_.call(null,inst_12795);var state_12894__$1 = state_12894;if(inst_12797)
{var statearr_12962_13026 = state_12894__$1;(statearr_12962_13026[(1)] = (19));
} else
{var statearr_12963_13027 = state_12894__$1;(statearr_12963_13027[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (38)))
{var inst_12873 = (state_12894[(2)]);var state_12894__$1 = state_12894;var statearr_12964_13028 = state_12894__$1;(statearr_12964_13028[(2)] = inst_12873);
(statearr_12964_13028[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (30)))
{var state_12894__$1 = state_12894;var statearr_12965_13029 = state_12894__$1;(statearr_12965_13029[(2)] = null);
(statearr_12965_13029[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (10)))
{var inst_12778 = (state_12894[(15)]);var inst_12776 = (state_12894[(16)]);var inst_12784 = cljs.core._nth.call(null,inst_12776,inst_12778);var inst_12785 = cljs.core.nth.call(null,inst_12784,(0),null);var inst_12786 = cljs.core.nth.call(null,inst_12784,(1),null);var state_12894__$1 = (function (){var statearr_12966 = state_12894;(statearr_12966[(26)] = inst_12785);
return statearr_12966;
})();if(cljs.core.truth_(inst_12786))
{var statearr_12967_13030 = state_12894__$1;(statearr_12967_13030[(1)] = (13));
} else
{var statearr_12968_13031 = state_12894__$1;(statearr_12968_13031[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (18)))
{var inst_12819 = (state_12894[(2)]);var state_12894__$1 = state_12894;var statearr_12969_13032 = state_12894__$1;(statearr_12969_13032[(2)] = inst_12819);
(statearr_12969_13032[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (42)))
{var state_12894__$1 = state_12894;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12894__$1,(45),dchan);
} else
{if((state_val_12895 === (37)))
{var inst_12862 = (state_12894[(23)]);var inst_12766 = (state_12894[(9)]);var inst_12853 = (state_12894[(25)]);var inst_12862__$1 = cljs.core.first.call(null,inst_12853);var inst_12863 = cljs.core.async.put_BANG_.call(null,inst_12862__$1,inst_12766,done);var state_12894__$1 = (function (){var statearr_12970 = state_12894;(statearr_12970[(23)] = inst_12862__$1);
return statearr_12970;
})();if(cljs.core.truth_(inst_12863))
{var statearr_12971_13033 = state_12894__$1;(statearr_12971_13033[(1)] = (39));
} else
{var statearr_12972_13034 = state_12894__$1;(statearr_12972_13034[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12895 === (8)))
{var inst_12777 = (state_12894[(13)]);var inst_12778 = (state_12894[(15)]);var inst_12780 = (inst_12778 < inst_12777);var inst_12781 = inst_12780;var state_12894__$1 = state_12894;if(cljs.core.truth_(inst_12781))
{var statearr_12973_13035 = state_12894__$1;(statearr_12973_13035[(1)] = (10));
} else
{var statearr_12974_13036 = state_12894__$1;(statearr_12974_13036[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6366__auto___12982,cs,m,dchan,dctr,done))
;return ((function (switch__6351__auto__,c__6366__auto___12982,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_12978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12978[(0)] = state_machine__6352__auto__);
(statearr_12978[(1)] = (1));
return statearr_12978;
});
var state_machine__6352__auto____1 = (function (state_12894){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_12894);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e12979){if((e12979 instanceof Object))
{var ex__6355__auto__ = e12979;var statearr_12980_13037 = state_12894;(statearr_12980_13037[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12894);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12979;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13038 = state_12894;
state_12894 = G__13038;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_12894){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_12894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___12982,cs,m,dchan,dctr,done))
})();var state__6368__auto__ = (function (){var statearr_12981 = f__6367__auto__.call(null);(statearr_12981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___12982);
return statearr_12981;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___12982,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13040 = {};return obj13040;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3531__auto__ = m;if(and__3531__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4170__auto__ = (((m == null))?null:m);return (function (){var or__3543__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13160 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13160 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13161){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13161 = meta13161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13160.cljs$lang$type = true;
cljs.core.async.t13160.cljs$lang$ctorStr = "cljs.core.async/t13160";
cljs.core.async.t13160.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t13160");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13160.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13160.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13160.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13160.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13160.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13160.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13160.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13160.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13162){var self__ = this;
var _13162__$1 = this;return self__.meta13161;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13162,meta13161__$1){var self__ = this;
var _13162__$1 = this;return (new cljs.core.async.t13160(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13161__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13160 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13160(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13161){return (new cljs.core.async.t13160(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13161));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13160(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6366__auto___13279 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___13279,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___13279,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13232){var state_val_13233 = (state_13232[(1)]);if((state_val_13233 === (7)))
{var inst_13176 = (state_13232[(7)]);var inst_13181 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13176);var state_13232__$1 = state_13232;var statearr_13234_13280 = state_13232__$1;(statearr_13234_13280[(2)] = inst_13181);
(statearr_13234_13280[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (20)))
{var inst_13191 = (state_13232[(8)]);var state_13232__$1 = state_13232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13232__$1,(23),out,inst_13191);
} else
{if((state_val_13233 === (1)))
{var inst_13166 = (state_13232[(9)]);var inst_13166__$1 = calc_state.call(null);var inst_13167 = cljs.core.seq_QMARK_.call(null,inst_13166__$1);var state_13232__$1 = (function (){var statearr_13235 = state_13232;(statearr_13235[(9)] = inst_13166__$1);
return statearr_13235;
})();if(inst_13167)
{var statearr_13236_13281 = state_13232__$1;(statearr_13236_13281[(1)] = (2));
} else
{var statearr_13237_13282 = state_13232__$1;(statearr_13237_13282[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (24)))
{var inst_13184 = (state_13232[(10)]);var inst_13176 = inst_13184;var state_13232__$1 = (function (){var statearr_13238 = state_13232;(statearr_13238[(7)] = inst_13176);
return statearr_13238;
})();var statearr_13239_13283 = state_13232__$1;(statearr_13239_13283[(2)] = null);
(statearr_13239_13283[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (4)))
{var inst_13166 = (state_13232[(9)]);var inst_13172 = (state_13232[(2)]);var inst_13173 = cljs.core.get.call(null,inst_13172,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13174 = cljs.core.get.call(null,inst_13172,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13175 = cljs.core.get.call(null,inst_13172,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13176 = inst_13166;var state_13232__$1 = (function (){var statearr_13240 = state_13232;(statearr_13240[(7)] = inst_13176);
(statearr_13240[(11)] = inst_13174);
(statearr_13240[(12)] = inst_13173);
(statearr_13240[(13)] = inst_13175);
return statearr_13240;
})();var statearr_13241_13284 = state_13232__$1;(statearr_13241_13284[(2)] = null);
(statearr_13241_13284[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (15)))
{var state_13232__$1 = state_13232;var statearr_13242_13285 = state_13232__$1;(statearr_13242_13285[(2)] = null);
(statearr_13242_13285[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (21)))
{var inst_13184 = (state_13232[(10)]);var inst_13176 = inst_13184;var state_13232__$1 = (function (){var statearr_13243 = state_13232;(statearr_13243[(7)] = inst_13176);
return statearr_13243;
})();var statearr_13244_13286 = state_13232__$1;(statearr_13244_13286[(2)] = null);
(statearr_13244_13286[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (13)))
{var inst_13228 = (state_13232[(2)]);var state_13232__$1 = state_13232;var statearr_13245_13287 = state_13232__$1;(statearr_13245_13287[(2)] = inst_13228);
(statearr_13245_13287[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (22)))
{var inst_13226 = (state_13232[(2)]);var state_13232__$1 = state_13232;var statearr_13246_13288 = state_13232__$1;(statearr_13246_13288[(2)] = inst_13226);
(statearr_13246_13288[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (6)))
{var inst_13230 = (state_13232[(2)]);var state_13232__$1 = state_13232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13232__$1,inst_13230);
} else
{if((state_val_13233 === (25)))
{var state_13232__$1 = state_13232;var statearr_13247_13289 = state_13232__$1;(statearr_13247_13289[(2)] = null);
(statearr_13247_13289[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (17)))
{var inst_13206 = (state_13232[(14)]);var state_13232__$1 = state_13232;var statearr_13248_13290 = state_13232__$1;(statearr_13248_13290[(2)] = inst_13206);
(statearr_13248_13290[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (3)))
{var inst_13166 = (state_13232[(9)]);var state_13232__$1 = state_13232;var statearr_13249_13291 = state_13232__$1;(statearr_13249_13291[(2)] = inst_13166);
(statearr_13249_13291[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (12)))
{var inst_13187 = (state_13232[(15)]);var inst_13206 = (state_13232[(14)]);var inst_13192 = (state_13232[(16)]);var inst_13206__$1 = inst_13187.call(null,inst_13192);var state_13232__$1 = (function (){var statearr_13250 = state_13232;(statearr_13250[(14)] = inst_13206__$1);
return statearr_13250;
})();if(cljs.core.truth_(inst_13206__$1))
{var statearr_13251_13292 = state_13232__$1;(statearr_13251_13292[(1)] = (17));
} else
{var statearr_13252_13293 = state_13232__$1;(statearr_13252_13293[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (2)))
{var inst_13166 = (state_13232[(9)]);var inst_13169 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13166);var state_13232__$1 = state_13232;var statearr_13253_13294 = state_13232__$1;(statearr_13253_13294[(2)] = inst_13169);
(statearr_13253_13294[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (23)))
{var inst_13217 = (state_13232[(2)]);var state_13232__$1 = state_13232;if(cljs.core.truth_(inst_13217))
{var statearr_13254_13295 = state_13232__$1;(statearr_13254_13295[(1)] = (24));
} else
{var statearr_13255_13296 = state_13232__$1;(statearr_13255_13296[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (19)))
{var inst_13214 = (state_13232[(2)]);var state_13232__$1 = state_13232;if(cljs.core.truth_(inst_13214))
{var statearr_13256_13297 = state_13232__$1;(statearr_13256_13297[(1)] = (20));
} else
{var statearr_13257_13298 = state_13232__$1;(statearr_13257_13298[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (11)))
{var inst_13191 = (state_13232[(8)]);var inst_13197 = (inst_13191 == null);var state_13232__$1 = state_13232;if(cljs.core.truth_(inst_13197))
{var statearr_13258_13299 = state_13232__$1;(statearr_13258_13299[(1)] = (14));
} else
{var statearr_13259_13300 = state_13232__$1;(statearr_13259_13300[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (9)))
{var inst_13184 = (state_13232[(10)]);var inst_13184__$1 = (state_13232[(2)]);var inst_13185 = cljs.core.get.call(null,inst_13184__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13186 = cljs.core.get.call(null,inst_13184__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13187 = cljs.core.get.call(null,inst_13184__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13232__$1 = (function (){var statearr_13260 = state_13232;(statearr_13260[(10)] = inst_13184__$1);
(statearr_13260[(17)] = inst_13186);
(statearr_13260[(15)] = inst_13187);
return statearr_13260;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13232__$1,(10),inst_13185);
} else
{if((state_val_13233 === (5)))
{var inst_13176 = (state_13232[(7)]);var inst_13179 = cljs.core.seq_QMARK_.call(null,inst_13176);var state_13232__$1 = state_13232;if(inst_13179)
{var statearr_13261_13301 = state_13232__$1;(statearr_13261_13301[(1)] = (7));
} else
{var statearr_13262_13302 = state_13232__$1;(statearr_13262_13302[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (14)))
{var inst_13192 = (state_13232[(16)]);var inst_13199 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13192);var state_13232__$1 = state_13232;var statearr_13263_13303 = state_13232__$1;(statearr_13263_13303[(2)] = inst_13199);
(statearr_13263_13303[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (26)))
{var inst_13222 = (state_13232[(2)]);var state_13232__$1 = state_13232;var statearr_13264_13304 = state_13232__$1;(statearr_13264_13304[(2)] = inst_13222);
(statearr_13264_13304[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (16)))
{var inst_13202 = (state_13232[(2)]);var inst_13203 = calc_state.call(null);var inst_13176 = inst_13203;var state_13232__$1 = (function (){var statearr_13265 = state_13232;(statearr_13265[(7)] = inst_13176);
(statearr_13265[(18)] = inst_13202);
return statearr_13265;
})();var statearr_13266_13305 = state_13232__$1;(statearr_13266_13305[(2)] = null);
(statearr_13266_13305[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (10)))
{var inst_13191 = (state_13232[(8)]);var inst_13192 = (state_13232[(16)]);var inst_13190 = (state_13232[(2)]);var inst_13191__$1 = cljs.core.nth.call(null,inst_13190,(0),null);var inst_13192__$1 = cljs.core.nth.call(null,inst_13190,(1),null);var inst_13193 = (inst_13191__$1 == null);var inst_13194 = cljs.core._EQ_.call(null,inst_13192__$1,change);var inst_13195 = (inst_13193) || (inst_13194);var state_13232__$1 = (function (){var statearr_13267 = state_13232;(statearr_13267[(8)] = inst_13191__$1);
(statearr_13267[(16)] = inst_13192__$1);
return statearr_13267;
})();if(cljs.core.truth_(inst_13195))
{var statearr_13268_13306 = state_13232__$1;(statearr_13268_13306[(1)] = (11));
} else
{var statearr_13269_13307 = state_13232__$1;(statearr_13269_13307[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (18)))
{var inst_13186 = (state_13232[(17)]);var inst_13187 = (state_13232[(15)]);var inst_13192 = (state_13232[(16)]);var inst_13209 = cljs.core.empty_QMARK_.call(null,inst_13187);var inst_13210 = inst_13186.call(null,inst_13192);var inst_13211 = cljs.core.not.call(null,inst_13210);var inst_13212 = (inst_13209) && (inst_13211);var state_13232__$1 = state_13232;var statearr_13270_13308 = state_13232__$1;(statearr_13270_13308[(2)] = inst_13212);
(statearr_13270_13308[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (8)))
{var inst_13176 = (state_13232[(7)]);var state_13232__$1 = state_13232;var statearr_13271_13309 = state_13232__$1;(statearr_13271_13309[(2)] = inst_13176);
(statearr_13271_13309[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6366__auto___13279,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6351__auto__,c__6366__auto___13279,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_13275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13275[(0)] = state_machine__6352__auto__);
(statearr_13275[(1)] = (1));
return statearr_13275;
});
var state_machine__6352__auto____1 = (function (state_13232){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_13232);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e13276){if((e13276 instanceof Object))
{var ex__6355__auto__ = e13276;var statearr_13277_13310 = state_13232;(statearr_13277_13310[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13232);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13311 = state_13232;
state_13232 = G__13311;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_13232){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_13232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___13279,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6368__auto__ = (function (){var statearr_13278 = f__6367__auto__.call(null);(statearr_13278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___13279);
return statearr_13278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___13279,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13313 = {};return obj13313;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3531__auto__ = p;if(and__3531__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3531__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4170__auto__ = (((p == null))?null:p);return (function (){var or__3543__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3543__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3543__auto__,mults){
return (function (p1__13314_SHARP_){if(cljs.core.truth_(p1__13314_SHARP_.call(null,topic)))
{return p1__13314_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13314_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13437 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13437 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13438){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13438 = meta13438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13437.cljs$lang$type = true;
cljs.core.async.t13437.cljs$lang$ctorStr = "cljs.core.async/t13437";
cljs.core.async.t13437.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t13437");
});})(mults,ensure_mult))
;
cljs.core.async.t13437.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13437.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13437.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13437.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13437.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13437.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13437.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13439){var self__ = this;
var _13439__$1 = this;return self__.meta13438;
});})(mults,ensure_mult))
;
cljs.core.async.t13437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13439,meta13438__$1){var self__ = this;
var _13439__$1 = this;return (new cljs.core.async.t13437(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13438__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13437 = ((function (mults,ensure_mult){
return (function __GT_t13437(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13438){return (new cljs.core.async.t13437(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13438));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13437(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6366__auto___13559 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___13559,mults,ensure_mult,p){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___13559,mults,ensure_mult,p){
return (function (state_13511){var state_val_13512 = (state_13511[(1)]);if((state_val_13512 === (7)))
{var inst_13507 = (state_13511[(2)]);var state_13511__$1 = state_13511;var statearr_13513_13560 = state_13511__$1;(statearr_13513_13560[(2)] = inst_13507);
(statearr_13513_13560[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (20)))
{var state_13511__$1 = state_13511;var statearr_13514_13561 = state_13511__$1;(statearr_13514_13561[(2)] = null);
(statearr_13514_13561[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (1)))
{var state_13511__$1 = state_13511;var statearr_13515_13562 = state_13511__$1;(statearr_13515_13562[(2)] = null);
(statearr_13515_13562[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (24)))
{var inst_13490 = (state_13511[(7)]);var inst_13499 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13490);var state_13511__$1 = state_13511;var statearr_13516_13563 = state_13511__$1;(statearr_13516_13563[(2)] = inst_13499);
(statearr_13516_13563[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (4)))
{var inst_13442 = (state_13511[(8)]);var inst_13442__$1 = (state_13511[(2)]);var inst_13443 = (inst_13442__$1 == null);var state_13511__$1 = (function (){var statearr_13517 = state_13511;(statearr_13517[(8)] = inst_13442__$1);
return statearr_13517;
})();if(cljs.core.truth_(inst_13443))
{var statearr_13518_13564 = state_13511__$1;(statearr_13518_13564[(1)] = (5));
} else
{var statearr_13519_13565 = state_13511__$1;(statearr_13519_13565[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (15)))
{var inst_13484 = (state_13511[(2)]);var state_13511__$1 = state_13511;var statearr_13520_13566 = state_13511__$1;(statearr_13520_13566[(2)] = inst_13484);
(statearr_13520_13566[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (21)))
{var inst_13504 = (state_13511[(2)]);var state_13511__$1 = (function (){var statearr_13521 = state_13511;(statearr_13521[(9)] = inst_13504);
return statearr_13521;
})();var statearr_13522_13567 = state_13511__$1;(statearr_13522_13567[(2)] = null);
(statearr_13522_13567[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (13)))
{var inst_13466 = (state_13511[(10)]);var inst_13468 = cljs.core.chunked_seq_QMARK_.call(null,inst_13466);var state_13511__$1 = state_13511;if(inst_13468)
{var statearr_13523_13568 = state_13511__$1;(statearr_13523_13568[(1)] = (16));
} else
{var statearr_13524_13569 = state_13511__$1;(statearr_13524_13569[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (22)))
{var inst_13496 = (state_13511[(2)]);var state_13511__$1 = state_13511;if(cljs.core.truth_(inst_13496))
{var statearr_13525_13570 = state_13511__$1;(statearr_13525_13570[(1)] = (23));
} else
{var statearr_13526_13571 = state_13511__$1;(statearr_13526_13571[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (6)))
{var inst_13490 = (state_13511[(7)]);var inst_13492 = (state_13511[(11)]);var inst_13442 = (state_13511[(8)]);var inst_13490__$1 = topic_fn.call(null,inst_13442);var inst_13491 = cljs.core.deref.call(null,mults);var inst_13492__$1 = cljs.core.get.call(null,inst_13491,inst_13490__$1);var state_13511__$1 = (function (){var statearr_13527 = state_13511;(statearr_13527[(7)] = inst_13490__$1);
(statearr_13527[(11)] = inst_13492__$1);
return statearr_13527;
})();if(cljs.core.truth_(inst_13492__$1))
{var statearr_13528_13572 = state_13511__$1;(statearr_13528_13572[(1)] = (19));
} else
{var statearr_13529_13573 = state_13511__$1;(statearr_13529_13573[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (25)))
{var inst_13501 = (state_13511[(2)]);var state_13511__$1 = state_13511;var statearr_13530_13574 = state_13511__$1;(statearr_13530_13574[(2)] = inst_13501);
(statearr_13530_13574[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (17)))
{var inst_13466 = (state_13511[(10)]);var inst_13475 = cljs.core.first.call(null,inst_13466);var inst_13476 = cljs.core.async.muxch_STAR_.call(null,inst_13475);var inst_13477 = cljs.core.async.close_BANG_.call(null,inst_13476);var inst_13478 = cljs.core.next.call(null,inst_13466);var inst_13452 = inst_13478;var inst_13453 = null;var inst_13454 = (0);var inst_13455 = (0);var state_13511__$1 = (function (){var statearr_13531 = state_13511;(statearr_13531[(12)] = inst_13454);
(statearr_13531[(13)] = inst_13477);
(statearr_13531[(14)] = inst_13455);
(statearr_13531[(15)] = inst_13453);
(statearr_13531[(16)] = inst_13452);
return statearr_13531;
})();var statearr_13532_13575 = state_13511__$1;(statearr_13532_13575[(2)] = null);
(statearr_13532_13575[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (3)))
{var inst_13509 = (state_13511[(2)]);var state_13511__$1 = state_13511;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13511__$1,inst_13509);
} else
{if((state_val_13512 === (12)))
{var inst_13486 = (state_13511[(2)]);var state_13511__$1 = state_13511;var statearr_13533_13576 = state_13511__$1;(statearr_13533_13576[(2)] = inst_13486);
(statearr_13533_13576[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (2)))
{var state_13511__$1 = state_13511;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13511__$1,(4),ch);
} else
{if((state_val_13512 === (23)))
{var state_13511__$1 = state_13511;var statearr_13534_13577 = state_13511__$1;(statearr_13534_13577[(2)] = null);
(statearr_13534_13577[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (19)))
{var inst_13492 = (state_13511[(11)]);var inst_13442 = (state_13511[(8)]);var inst_13494 = cljs.core.async.muxch_STAR_.call(null,inst_13492);var state_13511__$1 = state_13511;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13511__$1,(22),inst_13494,inst_13442);
} else
{if((state_val_13512 === (11)))
{var inst_13452 = (state_13511[(16)]);var inst_13466 = (state_13511[(10)]);var inst_13466__$1 = cljs.core.seq.call(null,inst_13452);var state_13511__$1 = (function (){var statearr_13535 = state_13511;(statearr_13535[(10)] = inst_13466__$1);
return statearr_13535;
})();if(inst_13466__$1)
{var statearr_13536_13578 = state_13511__$1;(statearr_13536_13578[(1)] = (13));
} else
{var statearr_13537_13579 = state_13511__$1;(statearr_13537_13579[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (9)))
{var inst_13488 = (state_13511[(2)]);var state_13511__$1 = state_13511;var statearr_13538_13580 = state_13511__$1;(statearr_13538_13580[(2)] = inst_13488);
(statearr_13538_13580[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (5)))
{var inst_13449 = cljs.core.deref.call(null,mults);var inst_13450 = cljs.core.vals.call(null,inst_13449);var inst_13451 = cljs.core.seq.call(null,inst_13450);var inst_13452 = inst_13451;var inst_13453 = null;var inst_13454 = (0);var inst_13455 = (0);var state_13511__$1 = (function (){var statearr_13539 = state_13511;(statearr_13539[(12)] = inst_13454);
(statearr_13539[(14)] = inst_13455);
(statearr_13539[(15)] = inst_13453);
(statearr_13539[(16)] = inst_13452);
return statearr_13539;
})();var statearr_13540_13581 = state_13511__$1;(statearr_13540_13581[(2)] = null);
(statearr_13540_13581[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (14)))
{var state_13511__$1 = state_13511;var statearr_13544_13582 = state_13511__$1;(statearr_13544_13582[(2)] = null);
(statearr_13544_13582[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (16)))
{var inst_13466 = (state_13511[(10)]);var inst_13470 = cljs.core.chunk_first.call(null,inst_13466);var inst_13471 = cljs.core.chunk_rest.call(null,inst_13466);var inst_13472 = cljs.core.count.call(null,inst_13470);var inst_13452 = inst_13471;var inst_13453 = inst_13470;var inst_13454 = inst_13472;var inst_13455 = (0);var state_13511__$1 = (function (){var statearr_13545 = state_13511;(statearr_13545[(12)] = inst_13454);
(statearr_13545[(14)] = inst_13455);
(statearr_13545[(15)] = inst_13453);
(statearr_13545[(16)] = inst_13452);
return statearr_13545;
})();var statearr_13546_13583 = state_13511__$1;(statearr_13546_13583[(2)] = null);
(statearr_13546_13583[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (10)))
{var inst_13454 = (state_13511[(12)]);var inst_13455 = (state_13511[(14)]);var inst_13453 = (state_13511[(15)]);var inst_13452 = (state_13511[(16)]);var inst_13460 = cljs.core._nth.call(null,inst_13453,inst_13455);var inst_13461 = cljs.core.async.muxch_STAR_.call(null,inst_13460);var inst_13462 = cljs.core.async.close_BANG_.call(null,inst_13461);var inst_13463 = (inst_13455 + (1));var tmp13541 = inst_13454;var tmp13542 = inst_13453;var tmp13543 = inst_13452;var inst_13452__$1 = tmp13543;var inst_13453__$1 = tmp13542;var inst_13454__$1 = tmp13541;var inst_13455__$1 = inst_13463;var state_13511__$1 = (function (){var statearr_13547 = state_13511;(statearr_13547[(12)] = inst_13454__$1);
(statearr_13547[(14)] = inst_13455__$1);
(statearr_13547[(17)] = inst_13462);
(statearr_13547[(15)] = inst_13453__$1);
(statearr_13547[(16)] = inst_13452__$1);
return statearr_13547;
})();var statearr_13548_13584 = state_13511__$1;(statearr_13548_13584[(2)] = null);
(statearr_13548_13584[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (18)))
{var inst_13481 = (state_13511[(2)]);var state_13511__$1 = state_13511;var statearr_13549_13585 = state_13511__$1;(statearr_13549_13585[(2)] = inst_13481);
(statearr_13549_13585[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13512 === (8)))
{var inst_13454 = (state_13511[(12)]);var inst_13455 = (state_13511[(14)]);var inst_13457 = (inst_13455 < inst_13454);var inst_13458 = inst_13457;var state_13511__$1 = state_13511;if(cljs.core.truth_(inst_13458))
{var statearr_13550_13586 = state_13511__$1;(statearr_13550_13586[(1)] = (10));
} else
{var statearr_13551_13587 = state_13511__$1;(statearr_13551_13587[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6366__auto___13559,mults,ensure_mult,p))
;return ((function (switch__6351__auto__,c__6366__auto___13559,mults,ensure_mult,p){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_13555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13555[(0)] = state_machine__6352__auto__);
(statearr_13555[(1)] = (1));
return statearr_13555;
});
var state_machine__6352__auto____1 = (function (state_13511){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_13511);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e13556){if((e13556 instanceof Object))
{var ex__6355__auto__ = e13556;var statearr_13557_13588 = state_13511;(statearr_13557_13588[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13511);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13556;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13589 = state_13511;
state_13511 = G__13589;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_13511){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_13511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___13559,mults,ensure_mult,p))
})();var state__6368__auto__ = (function (){var statearr_13558 = f__6367__auto__.call(null);(statearr_13558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___13559);
return statearr_13558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___13559,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6366__auto___13726 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___13726,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___13726,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13696){var state_val_13697 = (state_13696[(1)]);if((state_val_13697 === (7)))
{var state_13696__$1 = state_13696;var statearr_13698_13727 = state_13696__$1;(statearr_13698_13727[(2)] = null);
(statearr_13698_13727[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (1)))
{var state_13696__$1 = state_13696;var statearr_13699_13728 = state_13696__$1;(statearr_13699_13728[(2)] = null);
(statearr_13699_13728[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (4)))
{var inst_13660 = (state_13696[(7)]);var inst_13662 = (inst_13660 < cnt);var state_13696__$1 = state_13696;if(cljs.core.truth_(inst_13662))
{var statearr_13700_13729 = state_13696__$1;(statearr_13700_13729[(1)] = (6));
} else
{var statearr_13701_13730 = state_13696__$1;(statearr_13701_13730[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (15)))
{var inst_13692 = (state_13696[(2)]);var state_13696__$1 = state_13696;var statearr_13702_13731 = state_13696__$1;(statearr_13702_13731[(2)] = inst_13692);
(statearr_13702_13731[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (13)))
{var inst_13685 = cljs.core.async.close_BANG_.call(null,out);var state_13696__$1 = state_13696;var statearr_13703_13732 = state_13696__$1;(statearr_13703_13732[(2)] = inst_13685);
(statearr_13703_13732[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (6)))
{var state_13696__$1 = state_13696;var statearr_13704_13733 = state_13696__$1;(statearr_13704_13733[(2)] = null);
(statearr_13704_13733[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (3)))
{var inst_13694 = (state_13696[(2)]);var state_13696__$1 = state_13696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13696__$1,inst_13694);
} else
{if((state_val_13697 === (12)))
{var inst_13682 = (state_13696[(8)]);var inst_13682__$1 = (state_13696[(2)]);var inst_13683 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13682__$1);var state_13696__$1 = (function (){var statearr_13705 = state_13696;(statearr_13705[(8)] = inst_13682__$1);
return statearr_13705;
})();if(cljs.core.truth_(inst_13683))
{var statearr_13706_13734 = state_13696__$1;(statearr_13706_13734[(1)] = (13));
} else
{var statearr_13707_13735 = state_13696__$1;(statearr_13707_13735[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (2)))
{var inst_13659 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13660 = (0);var state_13696__$1 = (function (){var statearr_13708 = state_13696;(statearr_13708[(9)] = inst_13659);
(statearr_13708[(7)] = inst_13660);
return statearr_13708;
})();var statearr_13709_13736 = state_13696__$1;(statearr_13709_13736[(2)] = null);
(statearr_13709_13736[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (11)))
{var inst_13660 = (state_13696[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13696,(10),Object,null,(9));var inst_13669 = chs__$1.call(null,inst_13660);var inst_13670 = done.call(null,inst_13660);var inst_13671 = cljs.core.async.take_BANG_.call(null,inst_13669,inst_13670);var state_13696__$1 = state_13696;var statearr_13710_13737 = state_13696__$1;(statearr_13710_13737[(2)] = inst_13671);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13696__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (9)))
{var inst_13660 = (state_13696[(7)]);var inst_13673 = (state_13696[(2)]);var inst_13674 = (inst_13660 + (1));var inst_13660__$1 = inst_13674;var state_13696__$1 = (function (){var statearr_13711 = state_13696;(statearr_13711[(7)] = inst_13660__$1);
(statearr_13711[(10)] = inst_13673);
return statearr_13711;
})();var statearr_13712_13738 = state_13696__$1;(statearr_13712_13738[(2)] = null);
(statearr_13712_13738[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (5)))
{var inst_13680 = (state_13696[(2)]);var state_13696__$1 = (function (){var statearr_13713 = state_13696;(statearr_13713[(11)] = inst_13680);
return statearr_13713;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13696__$1,(12),dchan);
} else
{if((state_val_13697 === (14)))
{var inst_13682 = (state_13696[(8)]);var inst_13687 = cljs.core.apply.call(null,f,inst_13682);var state_13696__$1 = state_13696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13696__$1,(16),out,inst_13687);
} else
{if((state_val_13697 === (16)))
{var inst_13689 = (state_13696[(2)]);var state_13696__$1 = (function (){var statearr_13714 = state_13696;(statearr_13714[(12)] = inst_13689);
return statearr_13714;
})();var statearr_13715_13739 = state_13696__$1;(statearr_13715_13739[(2)] = null);
(statearr_13715_13739[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (10)))
{var inst_13664 = (state_13696[(2)]);var inst_13665 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13696__$1 = (function (){var statearr_13716 = state_13696;(statearr_13716[(13)] = inst_13664);
return statearr_13716;
})();var statearr_13717_13740 = state_13696__$1;(statearr_13717_13740[(2)] = inst_13665);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13696__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13697 === (8)))
{var inst_13678 = (state_13696[(2)]);var state_13696__$1 = state_13696;var statearr_13718_13741 = state_13696__$1;(statearr_13718_13741[(2)] = inst_13678);
(statearr_13718_13741[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6366__auto___13726,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6351__auto__,c__6366__auto___13726,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_13722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13722[(0)] = state_machine__6352__auto__);
(statearr_13722[(1)] = (1));
return statearr_13722;
});
var state_machine__6352__auto____1 = (function (state_13696){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_13696);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e13723){if((e13723 instanceof Object))
{var ex__6355__auto__ = e13723;var statearr_13724_13742 = state_13696;(statearr_13724_13742[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13696);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13743 = state_13696;
state_13696 = G__13743;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_13696){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_13696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___13726,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6368__auto__ = (function (){var statearr_13725 = f__6367__auto__.call(null);(statearr_13725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___13726);
return statearr_13725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___13726,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6366__auto___13851 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___13851,out){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___13851,out){
return (function (state_13827){var state_val_13828 = (state_13827[(1)]);if((state_val_13828 === (7)))
{var inst_13807 = (state_13827[(7)]);var inst_13806 = (state_13827[(8)]);var inst_13806__$1 = (state_13827[(2)]);var inst_13807__$1 = cljs.core.nth.call(null,inst_13806__$1,(0),null);var inst_13808 = cljs.core.nth.call(null,inst_13806__$1,(1),null);var inst_13809 = (inst_13807__$1 == null);var state_13827__$1 = (function (){var statearr_13829 = state_13827;(statearr_13829[(9)] = inst_13808);
(statearr_13829[(7)] = inst_13807__$1);
(statearr_13829[(8)] = inst_13806__$1);
return statearr_13829;
})();if(cljs.core.truth_(inst_13809))
{var statearr_13830_13852 = state_13827__$1;(statearr_13830_13852[(1)] = (8));
} else
{var statearr_13831_13853 = state_13827__$1;(statearr_13831_13853[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13828 === (1)))
{var inst_13798 = cljs.core.vec.call(null,chs);var inst_13799 = inst_13798;var state_13827__$1 = (function (){var statearr_13832 = state_13827;(statearr_13832[(10)] = inst_13799);
return statearr_13832;
})();var statearr_13833_13854 = state_13827__$1;(statearr_13833_13854[(2)] = null);
(statearr_13833_13854[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13828 === (4)))
{var inst_13799 = (state_13827[(10)]);var state_13827__$1 = state_13827;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13827__$1,(7),inst_13799);
} else
{if((state_val_13828 === (6)))
{var inst_13823 = (state_13827[(2)]);var state_13827__$1 = state_13827;var statearr_13834_13855 = state_13827__$1;(statearr_13834_13855[(2)] = inst_13823);
(statearr_13834_13855[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13828 === (3)))
{var inst_13825 = (state_13827[(2)]);var state_13827__$1 = state_13827;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13827__$1,inst_13825);
} else
{if((state_val_13828 === (2)))
{var inst_13799 = (state_13827[(10)]);var inst_13801 = cljs.core.count.call(null,inst_13799);var inst_13802 = (inst_13801 > (0));var state_13827__$1 = state_13827;if(cljs.core.truth_(inst_13802))
{var statearr_13836_13856 = state_13827__$1;(statearr_13836_13856[(1)] = (4));
} else
{var statearr_13837_13857 = state_13827__$1;(statearr_13837_13857[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13828 === (11)))
{var inst_13799 = (state_13827[(10)]);var inst_13816 = (state_13827[(2)]);var tmp13835 = inst_13799;var inst_13799__$1 = tmp13835;var state_13827__$1 = (function (){var statearr_13838 = state_13827;(statearr_13838[(10)] = inst_13799__$1);
(statearr_13838[(11)] = inst_13816);
return statearr_13838;
})();var statearr_13839_13858 = state_13827__$1;(statearr_13839_13858[(2)] = null);
(statearr_13839_13858[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13828 === (9)))
{var inst_13807 = (state_13827[(7)]);var state_13827__$1 = state_13827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13827__$1,(11),out,inst_13807);
} else
{if((state_val_13828 === (5)))
{var inst_13821 = cljs.core.async.close_BANG_.call(null,out);var state_13827__$1 = state_13827;var statearr_13840_13859 = state_13827__$1;(statearr_13840_13859[(2)] = inst_13821);
(statearr_13840_13859[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13828 === (10)))
{var inst_13819 = (state_13827[(2)]);var state_13827__$1 = state_13827;var statearr_13841_13860 = state_13827__$1;(statearr_13841_13860[(2)] = inst_13819);
(statearr_13841_13860[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13828 === (8)))
{var inst_13799 = (state_13827[(10)]);var inst_13808 = (state_13827[(9)]);var inst_13807 = (state_13827[(7)]);var inst_13806 = (state_13827[(8)]);var inst_13811 = (function (){var c = inst_13808;var v = inst_13807;var vec__13804 = inst_13806;var cs = inst_13799;return ((function (c,v,vec__13804,cs,inst_13799,inst_13808,inst_13807,inst_13806,state_val_13828,c__6366__auto___13851,out){
return (function (p1__13744_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13744_SHARP_);
});
;})(c,v,vec__13804,cs,inst_13799,inst_13808,inst_13807,inst_13806,state_val_13828,c__6366__auto___13851,out))
})();var inst_13812 = cljs.core.filterv.call(null,inst_13811,inst_13799);var inst_13799__$1 = inst_13812;var state_13827__$1 = (function (){var statearr_13842 = state_13827;(statearr_13842[(10)] = inst_13799__$1);
return statearr_13842;
})();var statearr_13843_13861 = state_13827__$1;(statearr_13843_13861[(2)] = null);
(statearr_13843_13861[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6366__auto___13851,out))
;return ((function (switch__6351__auto__,c__6366__auto___13851,out){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_13847 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13847[(0)] = state_machine__6352__auto__);
(statearr_13847[(1)] = (1));
return statearr_13847;
});
var state_machine__6352__auto____1 = (function (state_13827){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_13827);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e13848){if((e13848 instanceof Object))
{var ex__6355__auto__ = e13848;var statearr_13849_13862 = state_13827;(statearr_13849_13862[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13827);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13863 = state_13827;
state_13827 = G__13863;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_13827){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_13827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___13851,out))
})();var state__6368__auto__ = (function (){var statearr_13850 = f__6367__auto__.call(null);(statearr_13850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___13851);
return statearr_13850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___13851,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6366__auto___13956 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___13956,out){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___13956,out){
return (function (state_13933){var state_val_13934 = (state_13933[(1)]);if((state_val_13934 === (7)))
{var inst_13915 = (state_13933[(7)]);var inst_13915__$1 = (state_13933[(2)]);var inst_13916 = (inst_13915__$1 == null);var inst_13917 = cljs.core.not.call(null,inst_13916);var state_13933__$1 = (function (){var statearr_13935 = state_13933;(statearr_13935[(7)] = inst_13915__$1);
return statearr_13935;
})();if(inst_13917)
{var statearr_13936_13957 = state_13933__$1;(statearr_13936_13957[(1)] = (8));
} else
{var statearr_13937_13958 = state_13933__$1;(statearr_13937_13958[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13934 === (1)))
{var inst_13910 = (0);var state_13933__$1 = (function (){var statearr_13938 = state_13933;(statearr_13938[(8)] = inst_13910);
return statearr_13938;
})();var statearr_13939_13959 = state_13933__$1;(statearr_13939_13959[(2)] = null);
(statearr_13939_13959[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13934 === (4)))
{var state_13933__$1 = state_13933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13933__$1,(7),ch);
} else
{if((state_val_13934 === (6)))
{var inst_13928 = (state_13933[(2)]);var state_13933__$1 = state_13933;var statearr_13940_13960 = state_13933__$1;(statearr_13940_13960[(2)] = inst_13928);
(statearr_13940_13960[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13934 === (3)))
{var inst_13930 = (state_13933[(2)]);var inst_13931 = cljs.core.async.close_BANG_.call(null,out);var state_13933__$1 = (function (){var statearr_13941 = state_13933;(statearr_13941[(9)] = inst_13930);
return statearr_13941;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13933__$1,inst_13931);
} else
{if((state_val_13934 === (2)))
{var inst_13910 = (state_13933[(8)]);var inst_13912 = (inst_13910 < n);var state_13933__$1 = state_13933;if(cljs.core.truth_(inst_13912))
{var statearr_13942_13961 = state_13933__$1;(statearr_13942_13961[(1)] = (4));
} else
{var statearr_13943_13962 = state_13933__$1;(statearr_13943_13962[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13934 === (11)))
{var inst_13910 = (state_13933[(8)]);var inst_13920 = (state_13933[(2)]);var inst_13921 = (inst_13910 + (1));var inst_13910__$1 = inst_13921;var state_13933__$1 = (function (){var statearr_13944 = state_13933;(statearr_13944[(8)] = inst_13910__$1);
(statearr_13944[(10)] = inst_13920);
return statearr_13944;
})();var statearr_13945_13963 = state_13933__$1;(statearr_13945_13963[(2)] = null);
(statearr_13945_13963[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13934 === (9)))
{var state_13933__$1 = state_13933;var statearr_13946_13964 = state_13933__$1;(statearr_13946_13964[(2)] = null);
(statearr_13946_13964[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13934 === (5)))
{var state_13933__$1 = state_13933;var statearr_13947_13965 = state_13933__$1;(statearr_13947_13965[(2)] = null);
(statearr_13947_13965[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13934 === (10)))
{var inst_13925 = (state_13933[(2)]);var state_13933__$1 = state_13933;var statearr_13948_13966 = state_13933__$1;(statearr_13948_13966[(2)] = inst_13925);
(statearr_13948_13966[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13934 === (8)))
{var inst_13915 = (state_13933[(7)]);var state_13933__$1 = state_13933;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13933__$1,(11),out,inst_13915);
} else
{return null;
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
});})(c__6366__auto___13956,out))
;return ((function (switch__6351__auto__,c__6366__auto___13956,out){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_13952 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13952[(0)] = state_machine__6352__auto__);
(statearr_13952[(1)] = (1));
return statearr_13952;
});
var state_machine__6352__auto____1 = (function (state_13933){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_13933);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e13953){if((e13953 instanceof Object))
{var ex__6355__auto__ = e13953;var statearr_13954_13967 = state_13933;(statearr_13954_13967[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13933);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13953;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13968 = state_13933;
state_13933 = G__13968;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_13933){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_13933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___13956,out))
})();var state__6368__auto__ = (function (){var statearr_13955 = f__6367__auto__.call(null);(statearr_13955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___13956);
return statearr_13955;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___13956,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6366__auto___14065 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___14065,out){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___14065,out){
return (function (state_14040){var state_val_14041 = (state_14040[(1)]);if((state_val_14041 === (7)))
{var inst_14035 = (state_14040[(2)]);var state_14040__$1 = state_14040;var statearr_14042_14066 = state_14040__$1;(statearr_14042_14066[(2)] = inst_14035);
(statearr_14042_14066[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14041 === (1)))
{var inst_14017 = null;var state_14040__$1 = (function (){var statearr_14043 = state_14040;(statearr_14043[(7)] = inst_14017);
return statearr_14043;
})();var statearr_14044_14067 = state_14040__$1;(statearr_14044_14067[(2)] = null);
(statearr_14044_14067[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14041 === (4)))
{var inst_14020 = (state_14040[(8)]);var inst_14020__$1 = (state_14040[(2)]);var inst_14021 = (inst_14020__$1 == null);var inst_14022 = cljs.core.not.call(null,inst_14021);var state_14040__$1 = (function (){var statearr_14045 = state_14040;(statearr_14045[(8)] = inst_14020__$1);
return statearr_14045;
})();if(inst_14022)
{var statearr_14046_14068 = state_14040__$1;(statearr_14046_14068[(1)] = (5));
} else
{var statearr_14047_14069 = state_14040__$1;(statearr_14047_14069[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14041 === (6)))
{var state_14040__$1 = state_14040;var statearr_14048_14070 = state_14040__$1;(statearr_14048_14070[(2)] = null);
(statearr_14048_14070[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14041 === (3)))
{var inst_14037 = (state_14040[(2)]);var inst_14038 = cljs.core.async.close_BANG_.call(null,out);var state_14040__$1 = (function (){var statearr_14049 = state_14040;(statearr_14049[(9)] = inst_14037);
return statearr_14049;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14040__$1,inst_14038);
} else
{if((state_val_14041 === (2)))
{var state_14040__$1 = state_14040;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14040__$1,(4),ch);
} else
{if((state_val_14041 === (11)))
{var inst_14020 = (state_14040[(8)]);var inst_14029 = (state_14040[(2)]);var inst_14017 = inst_14020;var state_14040__$1 = (function (){var statearr_14050 = state_14040;(statearr_14050[(10)] = inst_14029);
(statearr_14050[(7)] = inst_14017);
return statearr_14050;
})();var statearr_14051_14071 = state_14040__$1;(statearr_14051_14071[(2)] = null);
(statearr_14051_14071[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14041 === (9)))
{var inst_14020 = (state_14040[(8)]);var state_14040__$1 = state_14040;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14040__$1,(11),out,inst_14020);
} else
{if((state_val_14041 === (5)))
{var inst_14020 = (state_14040[(8)]);var inst_14017 = (state_14040[(7)]);var inst_14024 = cljs.core._EQ_.call(null,inst_14020,inst_14017);var state_14040__$1 = state_14040;if(inst_14024)
{var statearr_14053_14072 = state_14040__$1;(statearr_14053_14072[(1)] = (8));
} else
{var statearr_14054_14073 = state_14040__$1;(statearr_14054_14073[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14041 === (10)))
{var inst_14032 = (state_14040[(2)]);var state_14040__$1 = state_14040;var statearr_14055_14074 = state_14040__$1;(statearr_14055_14074[(2)] = inst_14032);
(statearr_14055_14074[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14041 === (8)))
{var inst_14017 = (state_14040[(7)]);var tmp14052 = inst_14017;var inst_14017__$1 = tmp14052;var state_14040__$1 = (function (){var statearr_14056 = state_14040;(statearr_14056[(7)] = inst_14017__$1);
return statearr_14056;
})();var statearr_14057_14075 = state_14040__$1;(statearr_14057_14075[(2)] = null);
(statearr_14057_14075[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6366__auto___14065,out))
;return ((function (switch__6351__auto__,c__6366__auto___14065,out){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_14061 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14061[(0)] = state_machine__6352__auto__);
(statearr_14061[(1)] = (1));
return statearr_14061;
});
var state_machine__6352__auto____1 = (function (state_14040){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_14040);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e14062){if((e14062 instanceof Object))
{var ex__6355__auto__ = e14062;var statearr_14063_14076 = state_14040;(statearr_14063_14076[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14040);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14062;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14077 = state_14040;
state_14040 = G__14077;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_14040){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_14040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___14065,out))
})();var state__6368__auto__ = (function (){var statearr_14064 = f__6367__auto__.call(null);(statearr_14064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___14065);
return statearr_14064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___14065,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6366__auto___14212 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___14212,out){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___14212,out){
return (function (state_14182){var state_val_14183 = (state_14182[(1)]);if((state_val_14183 === (7)))
{var inst_14178 = (state_14182[(2)]);var state_14182__$1 = state_14182;var statearr_14184_14213 = state_14182__$1;(statearr_14184_14213[(2)] = inst_14178);
(statearr_14184_14213[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14183 === (1)))
{var inst_14145 = (new Array(n));var inst_14146 = inst_14145;var inst_14147 = (0);var state_14182__$1 = (function (){var statearr_14185 = state_14182;(statearr_14185[(7)] = inst_14147);
(statearr_14185[(8)] = inst_14146);
return statearr_14185;
})();var statearr_14186_14214 = state_14182__$1;(statearr_14186_14214[(2)] = null);
(statearr_14186_14214[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14183 === (4)))
{var inst_14150 = (state_14182[(9)]);var inst_14150__$1 = (state_14182[(2)]);var inst_14151 = (inst_14150__$1 == null);var inst_14152 = cljs.core.not.call(null,inst_14151);var state_14182__$1 = (function (){var statearr_14187 = state_14182;(statearr_14187[(9)] = inst_14150__$1);
return statearr_14187;
})();if(inst_14152)
{var statearr_14188_14215 = state_14182__$1;(statearr_14188_14215[(1)] = (5));
} else
{var statearr_14189_14216 = state_14182__$1;(statearr_14189_14216[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14183 === (15)))
{var inst_14172 = (state_14182[(2)]);var state_14182__$1 = state_14182;var statearr_14190_14217 = state_14182__$1;(statearr_14190_14217[(2)] = inst_14172);
(statearr_14190_14217[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14183 === (13)))
{var state_14182__$1 = state_14182;var statearr_14191_14218 = state_14182__$1;(statearr_14191_14218[(2)] = null);
(statearr_14191_14218[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14183 === (6)))
{var inst_14147 = (state_14182[(7)]);var inst_14168 = (inst_14147 > (0));var state_14182__$1 = state_14182;if(cljs.core.truth_(inst_14168))
{var statearr_14192_14219 = state_14182__$1;(statearr_14192_14219[(1)] = (12));
} else
{var statearr_14193_14220 = state_14182__$1;(statearr_14193_14220[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14183 === (3)))
{var inst_14180 = (state_14182[(2)]);var state_14182__$1 = state_14182;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14182__$1,inst_14180);
} else
{if((state_val_14183 === (12)))
{var inst_14146 = (state_14182[(8)]);var inst_14170 = cljs.core.vec.call(null,inst_14146);var state_14182__$1 = state_14182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14182__$1,(15),out,inst_14170);
} else
{if((state_val_14183 === (2)))
{var state_14182__$1 = state_14182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14182__$1,(4),ch);
} else
{if((state_val_14183 === (11)))
{var inst_14162 = (state_14182[(2)]);var inst_14163 = (new Array(n));var inst_14146 = inst_14163;var inst_14147 = (0);var state_14182__$1 = (function (){var statearr_14194 = state_14182;(statearr_14194[(7)] = inst_14147);
(statearr_14194[(8)] = inst_14146);
(statearr_14194[(10)] = inst_14162);
return statearr_14194;
})();var statearr_14195_14221 = state_14182__$1;(statearr_14195_14221[(2)] = null);
(statearr_14195_14221[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14183 === (9)))
{var inst_14146 = (state_14182[(8)]);var inst_14160 = cljs.core.vec.call(null,inst_14146);var state_14182__$1 = state_14182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14182__$1,(11),out,inst_14160);
} else
{if((state_val_14183 === (5)))
{var inst_14147 = (state_14182[(7)]);var inst_14146 = (state_14182[(8)]);var inst_14150 = (state_14182[(9)]);var inst_14155 = (state_14182[(11)]);var inst_14154 = (inst_14146[inst_14147] = inst_14150);var inst_14155__$1 = (inst_14147 + (1));var inst_14156 = (inst_14155__$1 < n);var state_14182__$1 = (function (){var statearr_14196 = state_14182;(statearr_14196[(12)] = inst_14154);
(statearr_14196[(11)] = inst_14155__$1);
return statearr_14196;
})();if(cljs.core.truth_(inst_14156))
{var statearr_14197_14222 = state_14182__$1;(statearr_14197_14222[(1)] = (8));
} else
{var statearr_14198_14223 = state_14182__$1;(statearr_14198_14223[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14183 === (14)))
{var inst_14175 = (state_14182[(2)]);var inst_14176 = cljs.core.async.close_BANG_.call(null,out);var state_14182__$1 = (function (){var statearr_14200 = state_14182;(statearr_14200[(13)] = inst_14175);
return statearr_14200;
})();var statearr_14201_14224 = state_14182__$1;(statearr_14201_14224[(2)] = inst_14176);
(statearr_14201_14224[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14183 === (10)))
{var inst_14166 = (state_14182[(2)]);var state_14182__$1 = state_14182;var statearr_14202_14225 = state_14182__$1;(statearr_14202_14225[(2)] = inst_14166);
(statearr_14202_14225[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14183 === (8)))
{var inst_14146 = (state_14182[(8)]);var inst_14155 = (state_14182[(11)]);var tmp14199 = inst_14146;var inst_14146__$1 = tmp14199;var inst_14147 = inst_14155;var state_14182__$1 = (function (){var statearr_14203 = state_14182;(statearr_14203[(7)] = inst_14147);
(statearr_14203[(8)] = inst_14146__$1);
return statearr_14203;
})();var statearr_14204_14226 = state_14182__$1;(statearr_14204_14226[(2)] = null);
(statearr_14204_14226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6366__auto___14212,out))
;return ((function (switch__6351__auto__,c__6366__auto___14212,out){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_14208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14208[(0)] = state_machine__6352__auto__);
(statearr_14208[(1)] = (1));
return statearr_14208;
});
var state_machine__6352__auto____1 = (function (state_14182){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_14182);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e14209){if((e14209 instanceof Object))
{var ex__6355__auto__ = e14209;var statearr_14210_14227 = state_14182;(statearr_14210_14227[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14182);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14228 = state_14182;
state_14182 = G__14228;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_14182){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_14182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___14212,out))
})();var state__6368__auto__ = (function (){var statearr_14211 = f__6367__auto__.call(null);(statearr_14211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___14212);
return statearr_14211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___14212,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6366__auto___14371 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___14371,out){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___14371,out){
return (function (state_14341){var state_val_14342 = (state_14341[(1)]);if((state_val_14342 === (7)))
{var inst_14337 = (state_14341[(2)]);var state_14341__$1 = state_14341;var statearr_14343_14372 = state_14341__$1;(statearr_14343_14372[(2)] = inst_14337);
(statearr_14343_14372[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14342 === (1)))
{var inst_14300 = [];var inst_14301 = inst_14300;var inst_14302 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14341__$1 = (function (){var statearr_14344 = state_14341;(statearr_14344[(7)] = inst_14301);
(statearr_14344[(8)] = inst_14302);
return statearr_14344;
})();var statearr_14345_14373 = state_14341__$1;(statearr_14345_14373[(2)] = null);
(statearr_14345_14373[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14342 === (4)))
{var inst_14305 = (state_14341[(9)]);var inst_14305__$1 = (state_14341[(2)]);var inst_14306 = (inst_14305__$1 == null);var inst_14307 = cljs.core.not.call(null,inst_14306);var state_14341__$1 = (function (){var statearr_14346 = state_14341;(statearr_14346[(9)] = inst_14305__$1);
return statearr_14346;
})();if(inst_14307)
{var statearr_14347_14374 = state_14341__$1;(statearr_14347_14374[(1)] = (5));
} else
{var statearr_14348_14375 = state_14341__$1;(statearr_14348_14375[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14342 === (15)))
{var inst_14331 = (state_14341[(2)]);var state_14341__$1 = state_14341;var statearr_14349_14376 = state_14341__$1;(statearr_14349_14376[(2)] = inst_14331);
(statearr_14349_14376[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14342 === (13)))
{var state_14341__$1 = state_14341;var statearr_14350_14377 = state_14341__$1;(statearr_14350_14377[(2)] = null);
(statearr_14350_14377[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14342 === (6)))
{var inst_14301 = (state_14341[(7)]);var inst_14326 = inst_14301.length;var inst_14327 = (inst_14326 > (0));var state_14341__$1 = state_14341;if(cljs.core.truth_(inst_14327))
{var statearr_14351_14378 = state_14341__$1;(statearr_14351_14378[(1)] = (12));
} else
{var statearr_14352_14379 = state_14341__$1;(statearr_14352_14379[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14342 === (3)))
{var inst_14339 = (state_14341[(2)]);var state_14341__$1 = state_14341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14341__$1,inst_14339);
} else
{if((state_val_14342 === (12)))
{var inst_14301 = (state_14341[(7)]);var inst_14329 = cljs.core.vec.call(null,inst_14301);var state_14341__$1 = state_14341;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14341__$1,(15),out,inst_14329);
} else
{if((state_val_14342 === (2)))
{var state_14341__$1 = state_14341;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14341__$1,(4),ch);
} else
{if((state_val_14342 === (11)))
{var inst_14305 = (state_14341[(9)]);var inst_14309 = (state_14341[(10)]);var inst_14319 = (state_14341[(2)]);var inst_14320 = [];var inst_14321 = inst_14320.push(inst_14305);var inst_14301 = inst_14320;var inst_14302 = inst_14309;var state_14341__$1 = (function (){var statearr_14353 = state_14341;(statearr_14353[(7)] = inst_14301);
(statearr_14353[(11)] = inst_14319);
(statearr_14353[(12)] = inst_14321);
(statearr_14353[(8)] = inst_14302);
return statearr_14353;
})();var statearr_14354_14380 = state_14341__$1;(statearr_14354_14380[(2)] = null);
(statearr_14354_14380[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14342 === (9)))
{var inst_14301 = (state_14341[(7)]);var inst_14317 = cljs.core.vec.call(null,inst_14301);var state_14341__$1 = state_14341;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14341__$1,(11),out,inst_14317);
} else
{if((state_val_14342 === (5)))
{var inst_14305 = (state_14341[(9)]);var inst_14302 = (state_14341[(8)]);var inst_14309 = (state_14341[(10)]);var inst_14309__$1 = f.call(null,inst_14305);var inst_14310 = cljs.core._EQ_.call(null,inst_14309__$1,inst_14302);var inst_14311 = cljs.core.keyword_identical_QMARK_.call(null,inst_14302,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14312 = (inst_14310) || (inst_14311);var state_14341__$1 = (function (){var statearr_14355 = state_14341;(statearr_14355[(10)] = inst_14309__$1);
return statearr_14355;
})();if(cljs.core.truth_(inst_14312))
{var statearr_14356_14381 = state_14341__$1;(statearr_14356_14381[(1)] = (8));
} else
{var statearr_14357_14382 = state_14341__$1;(statearr_14357_14382[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14342 === (14)))
{var inst_14334 = (state_14341[(2)]);var inst_14335 = cljs.core.async.close_BANG_.call(null,out);var state_14341__$1 = (function (){var statearr_14359 = state_14341;(statearr_14359[(13)] = inst_14334);
return statearr_14359;
})();var statearr_14360_14383 = state_14341__$1;(statearr_14360_14383[(2)] = inst_14335);
(statearr_14360_14383[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14342 === (10)))
{var inst_14324 = (state_14341[(2)]);var state_14341__$1 = state_14341;var statearr_14361_14384 = state_14341__$1;(statearr_14361_14384[(2)] = inst_14324);
(statearr_14361_14384[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14342 === (8)))
{var inst_14301 = (state_14341[(7)]);var inst_14305 = (state_14341[(9)]);var inst_14309 = (state_14341[(10)]);var inst_14314 = inst_14301.push(inst_14305);var tmp14358 = inst_14301;var inst_14301__$1 = tmp14358;var inst_14302 = inst_14309;var state_14341__$1 = (function (){var statearr_14362 = state_14341;(statearr_14362[(7)] = inst_14301__$1);
(statearr_14362[(14)] = inst_14314);
(statearr_14362[(8)] = inst_14302);
return statearr_14362;
})();var statearr_14363_14385 = state_14341__$1;(statearr_14363_14385[(2)] = null);
(statearr_14363_14385[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6366__auto___14371,out))
;return ((function (switch__6351__auto__,c__6366__auto___14371,out){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_14367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14367[(0)] = state_machine__6352__auto__);
(statearr_14367[(1)] = (1));
return statearr_14367;
});
var state_machine__6352__auto____1 = (function (state_14341){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_14341);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e14368){if((e14368 instanceof Object))
{var ex__6355__auto__ = e14368;var statearr_14369_14386 = state_14341;(statearr_14369_14386[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14341);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14368;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14387 = state_14341;
state_14341 = G__14387;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_14341){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_14341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___14371,out))
})();var state__6368__auto__ = (function (){var statearr_14370 = f__6367__auto__.call(null);(statearr_14370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___14371);
return statearr_14370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___14371,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map