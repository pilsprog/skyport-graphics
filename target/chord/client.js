// Compiled by ClojureScript 0.0-2261
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('chord.channels');
goog.require('cljs.core.async');
goog.require('chord.format');
goog.require('chord.format');
goog.require('chord.channels');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* @param {...*} var_args
*/
chord.client.on_close = (function() { 
var on_close__delegate = function (ws,read_ch,write_ch,p__11099){var vec__11172 = p__11099;var err_meta_channel = cljs.core.nth.call(null,vec__11172,(0),null);return ws.onclose = ((function (vec__11172,err_meta_channel){
return (function (ev){var c__6366__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto__,vec__11172,err_meta_channel){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto__,vec__11172,err_meta_channel){
return (function (state_11211){var state_val_11212 = (state_11211[(1)]);if((state_val_11212 === (7)))
{var inst_11207 = (state_11211[(2)]);var inst_11208 = cljs.core.async.close_BANG_.call(null,read_ch);var inst_11209 = cljs.core.async.close_BANG_.call(null,write_ch);var state_11211__$1 = (function (){var statearr_11213 = state_11211;(statearr_11213[(7)] = inst_11208);
(statearr_11213[(8)] = inst_11207);
return statearr_11213;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11211__$1,inst_11209);
} else
{if((state_val_11212 === (1)))
{var inst_11173 = (state_11211[(9)]);var inst_11173__$1 = ws.error_seen;var state_11211__$1 = (function (){var statearr_11214 = state_11211;(statearr_11214[(9)] = inst_11173__$1);
return statearr_11214;
})();if(cljs.core.truth_(inst_11173__$1))
{var statearr_11215_11244 = state_11211__$1;(statearr_11215_11244[(1)] = (2));
} else
{var statearr_11216_11245 = state_11211__$1;(statearr_11216_11245[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11212 === (4)))
{var inst_11179 = (state_11211[(2)]);var state_11211__$1 = state_11211;if(cljs.core.truth_(inst_11179))
{var statearr_11217_11246 = state_11211__$1;(statearr_11217_11246[(1)] = (5));
} else
{var statearr_11218_11247 = state_11211__$1;(statearr_11218_11247[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11212 === (6)))
{var state_11211__$1 = state_11211;var statearr_11219_11248 = state_11211__$1;(statearr_11219_11248[(2)] = null);
(statearr_11219_11248[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11212 === (3)))
{var inst_11176 = ev.wasClean;var inst_11177 = cljs.core.not.call(null,inst_11176);var state_11211__$1 = state_11211;var statearr_11220_11249 = state_11211__$1;(statearr_11220_11249[(2)] = inst_11177);
(statearr_11220_11249[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11212 === (12)))
{var inst_11204 = (state_11211[(2)]);var state_11211__$1 = state_11211;var statearr_11221_11250 = state_11211__$1;(statearr_11221_11250[(2)] = inst_11204);
(statearr_11221_11250[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11212 === (2)))
{var inst_11173 = (state_11211[(9)]);var state_11211__$1 = state_11211;var statearr_11222_11251 = state_11211__$1;(statearr_11222_11251[(2)] = inst_11173);
(statearr_11222_11251[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11212 === (11)))
{var inst_11199 = (state_11211[(2)]);var state_11211__$1 = state_11211;var statearr_11223_11252 = state_11211__$1;(statearr_11223_11252[(2)] = inst_11199);
(statearr_11223_11252[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11212 === (9)))
{var state_11211__$1 = state_11211;var statearr_11224_11253 = state_11211__$1;(statearr_11224_11253[(2)] = null);
(statearr_11224_11253[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11212 === (5)))
{var inst_11181 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"wasClean","wasClean",-1404940601)];var inst_11182 = ev.reason;var inst_11183 = ev.code;var inst_11184 = ev.wasClean;var inst_11185 = [inst_11182,inst_11183,inst_11184];var inst_11186 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11181,inst_11185);var state_11211__$1 = (function (){var statearr_11225 = state_11211;(statearr_11225[(10)] = inst_11186);
return statearr_11225;
})();if(cljs.core.truth_(err_meta_channel))
{var statearr_11226_11254 = state_11211__$1;(statearr_11226_11254[(1)] = (8));
} else
{var statearr_11227_11255 = state_11211__$1;(statearr_11227_11255[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11212 === (10)))
{var inst_11186 = (state_11211[(10)]);var inst_11202 = (state_11211[(2)]);var state_11211__$1 = (function (){var statearr_11228 = state_11211;(statearr_11228[(11)] = inst_11202);
return statearr_11228;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11211__$1,(12),read_ch,inst_11186);
} else
{if((state_val_11212 === (8)))
{var inst_11186 = (state_11211[(10)]);var inst_11173 = (state_11211[(9)]);var inst_11191 = cljs.core.async.chan.call(null,(1));var inst_11192 = (function (){var c__6366__auto____$1 = inst_11191;var error_desc = inst_11186;var error_seen_QMARK_ = inst_11173;return ((function (c__6366__auto____$1,error_desc,error_seen_QMARK_,inst_11186,inst_11173,inst_11191,state_val_11212,c__6366__auto__,vec__11172,err_meta_channel){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto____$1,error_desc,error_seen_QMARK_,inst_11186,inst_11173,inst_11191,state_val_11212,c__6366__auto__,vec__11172,err_meta_channel){
return (function (state_11189){var state_val_11190 = (state_11189[(1)]);if((state_val_11190 === (1)))
{var state_11189__$1 = state_11189;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11189__$1,error_desc);
} else
{return null;
}
});})(c__6366__auto____$1,error_desc,error_seen_QMARK_,inst_11186,inst_11173,inst_11191,state_val_11212,c__6366__auto__,vec__11172,err_meta_channel))
;return ((function (switch__6351__auto__,c__6366__auto____$1,error_desc,error_seen_QMARK_,inst_11186,inst_11173,inst_11191,state_val_11212,c__6366__auto__,vec__11172,err_meta_channel){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_11232 = [null,null,null,null,null,null,null];(statearr_11232[(0)] = state_machine__6352__auto__);
(statearr_11232[(1)] = (1));
return statearr_11232;
});
var state_machine__6352__auto____1 = (function (state_11189){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_11189);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e11233){if((e11233 instanceof Object))
{var ex__6355__auto__ = e11233;var statearr_11234_11256 = state_11189;(statearr_11234_11256[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11189);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11257 = state_11189;
state_11189 = G__11257;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_11189){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_11189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto____$1,error_desc,error_seen_QMARK_,inst_11186,inst_11173,inst_11191,state_val_11212,c__6366__auto__,vec__11172,err_meta_channel))
})();var state__6368__auto__ = (function (){var statearr_11235 = f__6367__auto__.call(null);(statearr_11235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto____$1);
return statearr_11235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});
;})(c__6366__auto____$1,error_desc,error_seen_QMARK_,inst_11186,inst_11173,inst_11191,state_val_11212,c__6366__auto__,vec__11172,err_meta_channel))
})();var inst_11193 = cljs.core.async.impl.dispatch.run.call(null,inst_11192);var inst_11195 = cljs.core.async.chan.call(null);var inst_11196 = cljs.core.async.close_BANG_.call(null,inst_11195);var inst_11197 = chord.channels.bidi_ch.call(null,inst_11191,inst_11195);var state_11211__$1 = (function (){var statearr_11236 = state_11211;(statearr_11236[(12)] = inst_11196);
(statearr_11236[(13)] = inst_11193);
return statearr_11236;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11211__$1,(11),err_meta_channel,inst_11197);
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
});})(c__6366__auto__,vec__11172,err_meta_channel))
;return ((function (switch__6351__auto__,c__6366__auto__,vec__11172,err_meta_channel){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_11240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11240[(0)] = state_machine__6352__auto__);
(statearr_11240[(1)] = (1));
return statearr_11240;
});
var state_machine__6352__auto____1 = (function (state_11211){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_11211);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e11241){if((e11241 instanceof Object))
{var ex__6355__auto__ = e11241;var statearr_11242_11258 = state_11211;(statearr_11242_11258[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11211);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11241;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11259 = state_11211;
state_11211 = G__11259;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_11211){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_11211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto__,vec__11172,err_meta_channel))
})();var state__6368__auto__ = (function (){var statearr_11243 = f__6367__auto__.call(null);(statearr_11243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto__);
return statearr_11243;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto__,vec__11172,err_meta_channel))
);
return c__6366__auto__;
});})(vec__11172,err_meta_channel))
;
};
var on_close = function (ws,read_ch,write_ch,var_args){
var p__11099 = null;if (arguments.length > 3) {
  p__11099 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return on_close__delegate.call(this,ws,read_ch,write_ch,p__11099);};
on_close.cljs$lang$maxFixedArity = 3;
on_close.cljs$lang$applyTo = (function (arglist__11260){
var ws = cljs.core.first(arglist__11260);
arglist__11260 = cljs.core.next(arglist__11260);
var read_ch = cljs.core.first(arglist__11260);
arglist__11260 = cljs.core.next(arglist__11260);
var write_ch = cljs.core.first(arglist__11260);
var p__11099 = cljs.core.rest(arglist__11260);
return on_close__delegate(ws,read_ch,write_ch,p__11099);
});
on_close.cljs$core$IFn$_invoke$arity$variadic = on_close__delegate;
return on_close;
})()
;
chord.client.make_open_ch = (function make_open_ch(ws,read_ch,write_ch,v){var ch = cljs.core.async.chan.call(null);chord.client.on_close.call(null,ws,read_ch,write_ch,ch);
ws.onopen = ((function (ch){
return (function (){var c__6366__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto__,ch){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto__,ch){
return (function (state_11279){var state_val_11280 = (state_11279[(1)]);if((state_val_11280 === (2)))
{var inst_11276 = (state_11279[(2)]);var inst_11277 = cljs.core.async.close_BANG_.call(null,ch);var state_11279__$1 = (function (){var statearr_11281 = state_11279;(statearr_11281[(7)] = inst_11276);
return statearr_11281;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11279__$1,inst_11277);
} else
{if((state_val_11280 === (1)))
{var state_11279__$1 = state_11279;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11279__$1,(2),ch,v);
} else
{return null;
}
}
});})(c__6366__auto__,ch))
;return ((function (switch__6351__auto__,c__6366__auto__,ch){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_11285 = [null,null,null,null,null,null,null,null];(statearr_11285[(0)] = state_machine__6352__auto__);
(statearr_11285[(1)] = (1));
return statearr_11285;
});
var state_machine__6352__auto____1 = (function (state_11279){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_11279);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e11286){if((e11286 instanceof Object))
{var ex__6355__auto__ = e11286;var statearr_11287_11289 = state_11279;(statearr_11287_11289[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11279);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11290 = state_11279;
state_11279 = G__11290;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_11279){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_11279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto__,ch))
})();var state__6368__auto__ = (function (){var statearr_11288 = f__6367__auto__.call(null);(statearr_11288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto__);
return statearr_11288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto__,ch))
);
return c__6366__auto__;
});})(ch))
;
return ch;
});
chord.client.close_event__GT_maybe_error = (function close_event__GT_maybe_error(ev){if(cljs.core.truth_(ev.wasClean))
{return null;
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
/**
* Creates websockets connection and returns a 2-sided channel when the websocket is opened.
* Arguments:
* ws-url           - (required) link to websocket service
* opts             - (optional) map to configure reading/writing channels
* :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
* :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
* :format        - (optional) data format to use on the channel, (at the moment)
* either :edn (default), :json, :json-kw or :str.
* 
* Usage:
* (:require [cljs.core.async :as a])
* 
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437"))
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
* :write-ch (a/chan (a/dropping-buffer 10))}))
* @param {...*} var_args
*/
chord.client.ws_ch = (function() { 
var ws_ch__delegate = function (ws_url,p__11293){var vec__11392 = p__11293;var map__11393 = cljs.core.nth.call(null,vec__11392,(0),null);var map__11393__$1 = ((cljs.core.seq_QMARK_.call(null,map__11393))?cljs.core.apply.call(null,cljs.core.hash_map,map__11393):map__11393);var format = cljs.core.get.call(null,map__11393__$1,new cljs.core.Keyword(null,"format","format",-1306924766));var write_ch = cljs.core.get.call(null,map__11393__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));var read_ch = cljs.core.get.call(null,map__11393__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));var web_socket = (new WebSocket(ws_url));var map__11394 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__3543__auto__ = read_ch;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__3543__auto__ = write_ch;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})()], null),format);var map__11394__$1 = ((cljs.core.seq_QMARK_.call(null,map__11394))?cljs.core.apply.call(null,cljs.core.hash_map,map__11394):map__11394);var write_ch__$1 = cljs.core.get.call(null,map__11394__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));var read_ch__$1 = cljs.core.get.call(null,map__11394__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));var open_ch = cljs.core.async.chan.call(null);var close_ch = cljs.core.async.chan.call(null);web_socket.binaryType = "arraybuffer";
chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);
chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);
web_socket.onopen = ((function (web_socket,map__11394,map__11394__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11392,map__11393,map__11393__$1,format,write_ch,read_ch){
return (function (p1__11291_SHARP_){return cljs.core.async.put_BANG_.call(null,open_ch,p1__11291_SHARP_);
});})(web_socket,map__11394,map__11394__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11392,map__11393,map__11393__$1,format,write_ch,read_ch))
;
web_socket.onclose = ((function (web_socket,map__11394,map__11394__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11392,map__11393,map__11393__$1,format,write_ch,read_ch){
return (function (p1__11292_SHARP_){return cljs.core.async.put_BANG_.call(null,close_ch,p1__11292_SHARP_);
});})(web_socket,map__11394,map__11394__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11392,map__11393,map__11393__$1,format,write_ch,read_ch))
;
var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (web_socket,map__11394,map__11394__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11392,map__11393,map__11393__$1,format,write_ch,read_ch){
return (function (){return web_socket.close();
});})(web_socket,map__11394,map__11394__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11392,map__11393,map__11393__$1,format,write_ch,read_ch))
], null));var initial_ch = cljs.core.async.chan.call(null);var c__6366__auto___11490 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6366__auto___11490,ws_chan,initial_ch,web_socket,map__11394,map__11394__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11392,map__11393,map__11393__$1,format,write_ch,read_ch){
return (function (){var f__6367__auto__ = (function (){var switch__6351__auto__ = ((function (c__6366__auto___11490,ws_chan,initial_ch,web_socket,map__11394,map__11394__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11392,map__11393,map__11393__$1,format,write_ch,read_ch){
return (function (state_11453){var state_val_11454 = (state_11453[(1)]);if((state_val_11454 === (7)))
{var inst_11449 = (state_11453[(2)]);var state_11453__$1 = state_11453;var statearr_11455_11491 = state_11453__$1;(statearr_11455_11491[(2)] = inst_11449);
(statearr_11455_11491[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (20)))
{var state_11453__$1 = state_11453;var statearr_11456_11492 = state_11453__$1;(statearr_11456_11492[(2)] = null);
(statearr_11456_11492[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (1)))
{var inst_11395 = false;var state_11453__$1 = (function (){var statearr_11457 = state_11453;(statearr_11457[(7)] = inst_11395);
return statearr_11457;
})();var statearr_11458_11493 = state_11453__$1;(statearr_11458_11493[(2)] = null);
(statearr_11458_11493[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (4)))
{var inst_11407 = (state_11453[(8)]);var inst_11405 = (state_11453[(9)]);var inst_11405__$1 = (state_11453[(2)]);var inst_11406 = cljs.core.nth.call(null,inst_11405__$1,(0),null);var inst_11407__$1 = cljs.core.nth.call(null,inst_11405__$1,(1),null);var inst_11408 = cljs.core._EQ_.call(null,inst_11407__$1,open_ch);var state_11453__$1 = (function (){var statearr_11459 = state_11453;(statearr_11459[(10)] = inst_11406);
(statearr_11459[(8)] = inst_11407__$1);
(statearr_11459[(9)] = inst_11405__$1);
return statearr_11459;
})();if(inst_11408)
{var statearr_11460_11494 = state_11453__$1;(statearr_11460_11494[(1)] = (5));
} else
{var statearr_11461_11495 = state_11453__$1;(statearr_11461_11495[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (15)))
{var inst_11434 = (state_11453[(2)]);var state_11453__$1 = state_11453;var statearr_11462_11496 = state_11453__$1;(statearr_11462_11496[(2)] = inst_11434);
(statearr_11462_11496[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (21)))
{var inst_11445 = (state_11453[(2)]);var state_11453__$1 = state_11453;var statearr_11463_11497 = state_11453__$1;(statearr_11463_11497[(2)] = inst_11445);
(statearr_11463_11497[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (13)))
{var state_11453__$1 = state_11453;var statearr_11464_11498 = state_11453__$1;(statearr_11464_11498[(2)] = null);
(statearr_11464_11498[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (6)))
{var inst_11407 = (state_11453[(8)]);var inst_11420 = cljs.core._EQ_.call(null,inst_11407,close_ch);var state_11453__$1 = state_11453;if(inst_11420)
{var statearr_11465_11499 = state_11453__$1;(statearr_11465_11499[(1)] = (9));
} else
{var statearr_11466_11500 = state_11453__$1;(statearr_11466_11500[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (17)))
{var state_11453__$1 = state_11453;var statearr_11467_11501 = state_11453__$1;(statearr_11467_11501[(2)] = initial_ch);
(statearr_11467_11501[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (3)))
{var inst_11451 = (state_11453[(2)]);var state_11453__$1 = state_11453;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11453__$1,inst_11451);
} else
{if((state_val_11454 === (12)))
{var inst_11395 = (state_11453[(7)]);var state_11453__$1 = state_11453;if(cljs.core.truth_(inst_11395))
{var statearr_11468_11502 = state_11453__$1;(statearr_11468_11502[(1)] = (16));
} else
{var statearr_11469_11503 = state_11453__$1;(statearr_11469_11503[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (2)))
{var inst_11402 = [open_ch,close_ch];var inst_11403 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11402,null));var state_11453__$1 = state_11453;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11453__$1,(4),inst_11403);
} else
{if((state_val_11454 === (19)))
{var inst_11406 = (state_11453[(10)]);var state_11453__$1 = state_11453;var statearr_11470_11504 = state_11453__$1;(statearr_11470_11504[(2)] = inst_11406);
(statearr_11470_11504[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (11)))
{var inst_11447 = (state_11453[(2)]);var state_11453__$1 = state_11453;var statearr_11471_11505 = state_11453__$1;(statearr_11471_11505[(2)] = inst_11447);
(statearr_11471_11505[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (9)))
{var inst_11424 = (state_11453[(11)]);var inst_11405 = (state_11453[(9)]);var inst_11423 = cljs.core.nth.call(null,inst_11405,(0),null);var inst_11424__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_11423);var state_11453__$1 = (function (){var statearr_11472 = state_11453;(statearr_11472[(11)] = inst_11424__$1);
return statearr_11472;
})();if(cljs.core.truth_(inst_11424__$1))
{var statearr_11473_11506 = state_11453__$1;(statearr_11473_11506[(1)] = (12));
} else
{var statearr_11474_11507 = state_11453__$1;(statearr_11474_11507[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (5)))
{var inst_11405 = (state_11453[(9)]);var inst_11411 = cljs.core.nth.call(null,inst_11405,(0),null);var inst_11412 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];var inst_11413 = [ws_chan];var inst_11414 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11412,inst_11413);var state_11453__$1 = (function (){var statearr_11475 = state_11453;(statearr_11475[(12)] = inst_11411);
return statearr_11475;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11453__$1,(8),initial_ch,inst_11414);
} else
{if((state_val_11454 === (14)))
{var inst_11437 = (state_11453[(2)]);var inst_11438 = cljs.core.async.close_BANG_.call(null,ws_chan);var inst_11439 = cljs.core.async.close_BANG_.call(null,initial_ch);var state_11453__$1 = (function (){var statearr_11476 = state_11453;(statearr_11476[(13)] = inst_11438);
(statearr_11476[(14)] = inst_11437);
return statearr_11476;
})();var statearr_11477_11508 = state_11453__$1;(statearr_11477_11508[(2)] = inst_11439);
(statearr_11477_11508[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (16)))
{var state_11453__$1 = state_11453;var statearr_11478_11509 = state_11453__$1;(statearr_11478_11509[(2)] = read_ch__$1);
(statearr_11478_11509[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (10)))
{var inst_11407 = (state_11453[(8)]);var inst_11441 = cljs.core._EQ_.call(null,inst_11407,new cljs.core.Keyword(null,"default","default",-1987822328));var state_11453__$1 = state_11453;if(inst_11441)
{var statearr_11479_11510 = state_11453__$1;(statearr_11479_11510[(1)] = (19));
} else
{var statearr_11480_11511 = state_11453__$1;(statearr_11480_11511[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11454 === (18)))
{var inst_11424 = (state_11453[(11)]);var inst_11429 = (state_11453[(2)]);var inst_11430 = [new cljs.core.Keyword(null,"error","error",-978969032)];var inst_11431 = [inst_11424];var inst_11432 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11430,inst_11431);var state_11453__$1 = state_11453;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11453__$1,(15),inst_11429,inst_11432);
} else
{if((state_val_11454 === (8)))
{var inst_11416 = (state_11453[(2)]);var inst_11417 = cljs.core.async.close_BANG_.call(null,initial_ch);var inst_11395 = true;var state_11453__$1 = (function (){var statearr_11481 = state_11453;(statearr_11481[(15)] = inst_11416);
(statearr_11481[(16)] = inst_11417);
(statearr_11481[(7)] = inst_11395);
return statearr_11481;
})();var statearr_11482_11512 = state_11453__$1;(statearr_11482_11512[(2)] = null);
(statearr_11482_11512[(1)] = (2));
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
});})(c__6366__auto___11490,ws_chan,initial_ch,web_socket,map__11394,map__11394__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11392,map__11393,map__11393__$1,format,write_ch,read_ch))
;return ((function (switch__6351__auto__,c__6366__auto___11490,ws_chan,initial_ch,web_socket,map__11394,map__11394__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11392,map__11393,map__11393__$1,format,write_ch,read_ch){
return (function() {
var state_machine__6352__auto__ = null;
var state_machine__6352__auto____0 = (function (){var statearr_11486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11486[(0)] = state_machine__6352__auto__);
(statearr_11486[(1)] = (1));
return statearr_11486;
});
var state_machine__6352__auto____1 = (function (state_11453){while(true){
var ret_value__6353__auto__ = (function (){try{while(true){
var result__6354__auto__ = switch__6351__auto__.call(null,state_11453);if(cljs.core.keyword_identical_QMARK_.call(null,result__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6354__auto__;
}
break;
}
}catch (e11487){if((e11487 instanceof Object))
{var ex__6355__auto__ = e11487;var statearr_11488_11513 = state_11453;(statearr_11488_11513[(5)] = ex__6355__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11453);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11514 = state_11453;
state_11453 = G__11514;
continue;
}
} else
{return ret_value__6353__auto__;
}
break;
}
});
state_machine__6352__auto__ = function(state_11453){
switch(arguments.length){
case 0:
return state_machine__6352__auto____0.call(this);
case 1:
return state_machine__6352__auto____1.call(this,state_11453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6352__auto____0;
state_machine__6352__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6352__auto____1;
return state_machine__6352__auto__;
})()
;})(switch__6351__auto__,c__6366__auto___11490,ws_chan,initial_ch,web_socket,map__11394,map__11394__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11392,map__11393,map__11393__$1,format,write_ch,read_ch))
})();var state__6368__auto__ = (function (){var statearr_11489 = f__6367__auto__.call(null);(statearr_11489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6366__auto___11490);
return statearr_11489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6368__auto__);
});})(c__6366__auto___11490,ws_chan,initial_ch,web_socket,map__11394,map__11394__$1,write_ch__$1,read_ch__$1,open_ch,close_ch,vec__11392,map__11393,map__11393__$1,format,write_ch,read_ch))
);
return initial_ch;
};
var ws_ch = function (ws_url,var_args){
var p__11293 = null;if (arguments.length > 1) {
  p__11293 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return ws_ch__delegate.call(this,ws_url,p__11293);};
ws_ch.cljs$lang$maxFixedArity = 1;
ws_ch.cljs$lang$applyTo = (function (arglist__11515){
var ws_url = cljs.core.first(arglist__11515);
var p__11293 = cljs.core.rest(arglist__11515);
return ws_ch__delegate(ws_url,p__11293);
});
ws_ch.cljs$core$IFn$_invoke$arity$variadic = ws_ch__delegate;
return ws_ch;
})()
;

//# sourceMappingURL=client.js.map