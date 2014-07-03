// Compiled by ClojureScript 0.0-2261
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');
chord.channels.read_from_ws_BANG_ = (function read_from_ws_BANG_(ws,ch){return ws.onmessage = (function (ev){var message = ev.data;return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function write_to_ws_BANG_(ws,ch){var c__6366__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto__){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto__){
return (function (state_11687){var state_val_11688 = (state_11687[(1)]);if((state_val_11688 === (7)))
{var inst_11683 = (state_11687[(2)]);var state_11687__$1 = state_11687;var statearr_11689_11704 = state_11687__$1;(statearr_11689_11704[(2)] = inst_11683);
(statearr_11689_11704[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11688 === (6)))
{var state_11687__$1 = state_11687;var statearr_11690_11705 = state_11687__$1;(statearr_11690_11705[(2)] = null);
(statearr_11690_11705[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11688 === (5)))
{var inst_11677 = (state_11687[(7)]);var inst_11679 = ws.send(inst_11677);var state_11687__$1 = (function (){var statearr_11691 = state_11687;(statearr_11691[(8)] = inst_11679);
return statearr_11691;
})();var statearr_11692_11706 = state_11687__$1;(statearr_11692_11706[(2)] = null);
(statearr_11692_11706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11688 === (4)))
{var inst_11677 = (state_11687[(7)]);var inst_11677__$1 = (state_11687[(2)]);var state_11687__$1 = (function (){var statearr_11693 = state_11687;(statearr_11693[(7)] = inst_11677__$1);
return statearr_11693;
})();if(cljs.core.truth_(inst_11677__$1))
{var statearr_11694_11707 = state_11687__$1;(statearr_11694_11707[(1)] = (5));
} else
{var statearr_11695_11708 = state_11687__$1;(statearr_11695_11708[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11688 === (3)))
{var inst_11685 = (state_11687[(2)]);var state_11687__$1 = state_11687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11687__$1,inst_11685);
} else
{if((state_val_11688 === (2)))
{var state_11687__$1 = state_11687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11687__$1,(4),ch);
} else
{if((state_val_11688 === (1)))
{var state_11687__$1 = state_11687;var statearr_11696_11709 = state_11687__$1;(statearr_11696_11709[(2)] = null);
(statearr_11696_11709[(1)] = (2));
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
var state_machine__6352__auto____0 = (function (){var statearr_11700 = [null,null,null,null,null,null,null,null,null];(statearr_11700[(0)] = state_machine__6352__auto__);
(statearr_11700[(1)] = (1));
return statearr_11700;
});
var state_machine__6352__auto____1 = (function (state_11687){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_11687);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e11701){if((e11701 instanceof Object))
{var ex__6355__auto__ = e11701;var statearr_11702_11710 = state_11687;(statearr_11702_11710[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11711 = state_11687;
state_11687 = G__11711;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_11687){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_11687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto__))
})();var state__6368__auto__ = (function (){var statearr_11703 = f__6367__auto__.call(null);(statearr_11703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto__);
return statearr_11703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto__))
);
return c__6366__auto__;
});
/**
* @param {...*} var_args
*/
chord.channels.bidi_ch = (function() { 
var bidi_ch__delegate = function (read_ch,write_ch,p__11712){var vec__11718 = p__11712;var map__11719 = cljs.core.nth.call(null,vec__11718,(0),null);var map__11719__$1 = ((cljs.core.seq_QMARK_.call(null,map__11719))?cljs.core.apply.call(null,cljs.core.hash_map,map__11719):map__11719);var on_close = cljs.core.get.call(null,map__11719__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));if(typeof chord.channels.t11720 !== 'undefined')
{} else
{
/**
* @constructor
*/
chord.channels.t11720 = (function (on_close,map__11719,vec__11718,p__11712,write_ch,read_ch,bidi_ch,meta11721){
this.on_close = on_close;
this.map__11719 = map__11719;
this.vec__11718 = vec__11718;
this.p__11712 = p__11712;
this.write_ch = write_ch;
this.read_ch = read_ch;
this.bidi_ch = bidi_ch;
this.meta11721 = meta11721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.channels.t11720.cljs$lang$type = true;
chord.channels.t11720.cljs$lang$ctorStr = "chord.channels/t11720";
chord.channels.t11720.cljs$lang$ctorPrWriter = ((function (vec__11718,map__11719,map__11719__$1,on_close){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"chord.channels/t11720");
});})(vec__11718,map__11719,map__11719__$1,on_close))
;
chord.channels.t11720.prototype.cljs$core$async$impl$protocols$Channel$ = true;
chord.channels.t11720.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__11718,map__11719,map__11719__$1,on_close){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);
if(cljs.core.truth_(self__.on_close))
{return self__.on_close.call(null);
} else
{return null;
}
});})(vec__11718,map__11719,map__11719__$1,on_close))
;
chord.channels.t11720.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
chord.channels.t11720.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__11718,map__11719,map__11719__$1,on_close){
return (function (_,msg,handler){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__11718,map__11719,map__11719__$1,on_close))
;
chord.channels.t11720.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
chord.channels.t11720.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__11718,map__11719,map__11719__$1,on_close){
return (function (_,handler){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__11718,map__11719,map__11719__$1,on_close))
;
chord.channels.t11720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__11718,map__11719,map__11719__$1,on_close){
return (function (_11722){var self__ = this;
var _11722__$1 = this;return self__.meta11721;
});})(vec__11718,map__11719,map__11719__$1,on_close))
;
chord.channels.t11720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__11718,map__11719,map__11719__$1,on_close){
return (function (_11722,meta11721__$1){var self__ = this;
var _11722__$1 = this;return (new chord.channels.t11720(self__.on_close,self__.map__11719,self__.vec__11718,self__.p__11712,self__.write_ch,self__.read_ch,self__.bidi_ch,meta11721__$1));
});})(vec__11718,map__11719,map__11719__$1,on_close))
;
chord.channels.__GT_t11720 = ((function (vec__11718,map__11719,map__11719__$1,on_close){
return (function __GT_t11720(on_close__$1,map__11719__$2,vec__11718__$1,p__11712__$1,write_ch__$1,read_ch__$1,bidi_ch__$1,meta11721){return (new chord.channels.t11720(on_close__$1,map__11719__$2,vec__11718__$1,p__11712__$1,write_ch__$1,read_ch__$1,bidi_ch__$1,meta11721));
});})(vec__11718,map__11719,map__11719__$1,on_close))
;
}
return (new chord.channels.t11720(on_close,map__11719__$1,vec__11718,p__11712,write_ch,read_ch,bidi_ch,null));
};
var bidi_ch = function (read_ch,write_ch,var_args){
var p__11712 = null;if (arguments.length > 2) {
  p__11712 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return bidi_ch__delegate.call(this,read_ch,write_ch,p__11712);};
bidi_ch.cljs$lang$maxFixedArity = 2;
bidi_ch.cljs$lang$applyTo = (function (arglist__11723){
var read_ch = cljs.core.first(arglist__11723);
arglist__11723 = cljs.core.next(arglist__11723);
var write_ch = cljs.core.first(arglist__11723);
var p__11712 = cljs.core.rest(arglist__11723);
return bidi_ch__delegate(read_ch,write_ch,p__11712);
});
bidi_ch.cljs$core$IFn$_invoke$arity$variadic = bidi_ch__delegate;
return bidi_ch;
})()
;

//# sourceMappingURL=channels.js.map