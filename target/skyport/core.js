// Compiled by ClojureScript 0.0-2261
goog.provide('skyport.core');
goog.require('cljs.core');
goog.require('chord.client');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('chord.client');
goog.require('chord.client');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
skyport.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),"gamestate",new cljs.core.Keyword(null,"turn","turn",75759344),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["G","E","S"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["G","R","V"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","G","G"], null)], null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"player1",new cljs.core.Keyword(null,"primary-weapon","primary-weapon",105056880),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"laser",new cljs.core.Keyword(null,"level","level",1290497552),(1)], null),new cljs.core.Keyword(null,"secondary-weapon","secondary-weapon",-179890342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"mortar",new cljs.core.Keyword(null,"level","level",1290497552),(1)], null),new cljs.core.Keyword(null,"health","health",-295520649),(100),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"position","position",-2011731912),"0,2"], null)], null)], null));
skyport.core.hexagon = (function hexagon(p__9896){var map__9902 = p__9896;var map__9902__$1 = ((cljs.core.seq_QMARK_.call(null,map__9902))?cljs.core.apply.call(null,cljs.core.hash_map,map__9902):map__9902);var y = cljs.core.get.call(null,map__9902__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var x = cljs.core.get.call(null,map__9902__$1,new cljs.core.Keyword(null,"x","x",2099068185));var size = cljs.core.get.call(null,map__9902__$1,new cljs.core.Keyword(null,"size","size",1098693007));var points = (function (){var iter__4268__auto__ = ((function (map__9902,map__9902__$1,y,x,size){
return (function iter__9903(s__9904){return (new cljs.core.LazySeq(null,((function (map__9902,map__9902__$1,y,x,size){
return (function (){var s__9904__$1 = s__9904;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9904__$1);if(temp__4126__auto__)
{var s__9904__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9904__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__9904__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__9906 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__9905 = (0);while(true){
if((i__9905 < size__4267__auto__))
{var i = cljs.core._nth.call(null,c__4266__auto__,i__9905);var angle = (((2) * (Math.PI / (6))) * i);var x_i = (x + (size * Math.cos(angle)));var y_i = (y + (size * Math.sin(angle)));cljs.core.chunk_append.call(null,b__9906,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_i)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_i)));
{
var G__9907 = (i__9905 + (1));
i__9905 = G__9907;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9906),iter__9903.call(null,cljs.core.chunk_rest.call(null,s__9904__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9906),null);
}
} else
{var i = cljs.core.first.call(null,s__9904__$2);var angle = (((2) * (Math.PI / (6))) * i);var x_i = (x + (size * Math.cos(angle)));var y_i = (y + (size * Math.sin(angle)));return cljs.core.cons.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x_i)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y_i)),iter__9903.call(null,cljs.core.rest.call(null,s__9904__$2)));
}
} else
{return null;
}
break;
}
});})(map__9902,map__9902__$1,y,x,size))
,null,null));
});})(map__9902,map__9902__$1,y,x,size))
;return iter__4268__auto__.call(null,cljs.core.range.call(null,(6)));
})();return React.DOM.polygon({"points": clojure.string.join.call(null,", ",points)});
});
skyport.core.world_view = (function world_view(state,owner){if(typeof skyport.core.t9917 !== 'undefined')
{} else
{
/**
* @constructor
*/
skyport.core.t9917 = (function (owner,state,world_view,meta9918){
this.owner = owner;
this.state = state;
this.world_view = world_view;
this.meta9918 = meta9918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
skyport.core.t9917.cljs$lang$type = true;
skyport.core.t9917.cljs$lang$ctorStr = "skyport.core/t9917";
skyport.core.t9917.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"skyport.core/t9917");
});
skyport.core.t9917.prototype.om$core$IRender$ = true;
skyport.core.t9917.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(cljs.core.PersistentArrayMap.EMPTY,React.DOM.svg({"height": "100%", "width": "100%"},cljs.core.apply.call(null,om.dom.g,null,cljs.core.flatten.call(null,(function (){var iter__4268__auto__ = ((function (___$1){
return (function iter__9920(s__9921){return (new cljs.core.LazySeq(null,((function (___$1){
return (function (){var s__9921__$1 = s__9921;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9921__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var j = cljs.core.first.call(null,xs__4624__auto__);var iterys__4264__auto__ = ((function (s__9921__$1,j,xs__4624__auto__,temp__4126__auto__,___$1){
return (function iter__9922(s__9923){return (new cljs.core.LazySeq(null,((function (s__9921__$1,j,xs__4624__auto__,temp__4126__auto__,___$1){
return (function (){var s__9923__$1 = s__9923;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9923__$1);if(temp__4126__auto____$1)
{var s__9923__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9923__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__9923__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__9925 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__9924 = (0);while(true){
if((i__9924 < size__4267__auto__))
{var k = cljs.core._nth.call(null,c__4266__auto__,i__9924);var size = (25);var offset = (130);var x = (offset + ((size * ((3) / (2))) * ((3) + ((k - j) - (1)))));var y = (offset + (((size / (2)) * Math.sqrt((3))) * (j + (k - (2)))));cljs.core.chunk_append.call(null,b__9925,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,React.DOM.text({"y": y, "x": x},cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),j,k], null)))),skyport.core.hexagon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"size","size",1098693007),size], null))));
{
var G__9926 = (i__9924 + (1));
i__9924 = G__9926;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9925),iter__9922.call(null,cljs.core.chunk_rest.call(null,s__9923__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9925),null);
}
} else
{var k = cljs.core.first.call(null,s__9923__$2);var size = (25);var offset = (130);var x = (offset + ((size * ((3) / (2))) * ((3) + ((k - j) - (1)))));var y = (offset + (((size / (2)) * Math.sqrt((3))) * (j + (k - (2)))));return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,React.DOM.text({"y": y, "x": x},cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),j,k], null)))),skyport.core.hexagon.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"size","size",1098693007),size], null))),iter__9922.call(null,cljs.core.rest.call(null,s__9923__$2)));
}
} else
{return null;
}
break;
}
});})(s__9921__$1,j,xs__4624__auto__,temp__4126__auto__,___$1))
,null,null));
});})(s__9921__$1,j,xs__4624__auto__,temp__4126__auto__,___$1))
;var fs__4265__auto__ = cljs.core.seq.call(null,iterys__4264__auto__.call(null,cljs.core.range.call(null,(3))));if(fs__4265__auto__)
{return cljs.core.concat.call(null,fs__4265__auto__,iter__9920.call(null,cljs.core.rest.call(null,s__9921__$1)));
} else
{{
var G__9927 = cljs.core.rest.call(null,s__9921__$1);
s__9921__$1 = G__9927;
continue;
}
}
} else
{return null;
}
break;
}
});})(___$1))
,null,null));
});})(___$1))
;return iter__4268__auto__.call(null,cljs.core.range.call(null,(3)));
})()))));
});
skyport.core.t9917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9919){var self__ = this;
var _9919__$1 = this;return self__.meta9918;
});
skyport.core.t9917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9919,meta9918__$1){var self__ = this;
var _9919__$1 = this;return (new skyport.core.t9917(self__.owner,self__.state,self__.world_view,meta9918__$1));
});
skyport.core.__GT_t9917 = (function __GT_t9917(owner__$1,state__$1,world_view__$1,meta9918){return (new skyport.core.t9917(owner__$1,state__$1,world_view__$1,meta9918));
});
}
return (new skyport.core.t9917(owner,state,world_view,null));
});
om.core.root.call(null,skyport.core.world_view,skyport.core.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map