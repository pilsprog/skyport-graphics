// Compiled by ClojureScript 0.0-2261
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
chord.format.try_read = (function try_read(read_fn){return (function (p__11519){var map__11520 = p__11519;var map__11520__$1 = ((cljs.core.seq_QMARK_.call(null,map__11520))?cljs.core.apply.call(null,cljs.core.hash_map,map__11520):map__11520);var data = map__11520__$1;var message = cljs.core.get.call(null,map__11520__$1,new cljs.core.Keyword(null,"message","message",-406056002));var error = cljs.core.get.call(null,map__11520__$1,new cljs.core.Keyword(null,"error","error",-978969032));if(cljs.core.truth_(error))
{return data;
} else
{try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),read_fn.call(null,message)], null);
}catch (e11521){if((e11521 instanceof Error))
{var e = e11521;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11521;
} else
{return null;
}
}
}}
});
});
chord.format.wrap_format = (function (){var method_table__4409__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4410__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4411__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4412__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4413__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("wrap-format",((function (method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__){
return (function (chs,format){return format;
});})(method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__,hierarchy__4413__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4413__auto__,method_table__4409__auto__,prefer_table__4410__auto__,method_cache__4411__auto__,cached_hierarchy__4412__auto__));
})();
cljs.core._add_method.call(null,chord.format.wrap_format,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (p__11522,_){var map__11523 = p__11522;var map__11523__$1 = ((cljs.core.seq_QMARK_.call(null,map__11523))?cljs.core.apply.call(null,cljs.core.hash_map,map__11523):map__11523);var write_ch = cljs.core.get.call(null,map__11523__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));var read_ch = cljs.core.get.call(null,map__11523__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,chord.format.try_read.call(null,cljs.reader.read_string),read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,cljs.core.pr_str,write_ch)], null);
}));
cljs.core._add_method.call(null,chord.format.wrap_format,new cljs.core.Keyword(null,"json","json",1279968570),(function (p__11524,_){var map__11525 = p__11524;var map__11525__$1 = ((cljs.core.seq_QMARK_.call(null,map__11525))?cljs.core.apply.call(null,cljs.core.hash_map,map__11525):map__11525);var write_ch = cljs.core.get.call(null,map__11525__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));var read_ch = cljs.core.get.call(null,map__11525__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,chord.format.try_read.call(null,cljs.core.comp.call(null,cljs.core.js__GT_clj,JSON.parse)),read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,cljs.core.comp.call(null,JSON.stringify,cljs.core.clj__GT_js),write_ch)], null);
}));
cljs.core._add_method.call(null,chord.format.wrap_format,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (chs,_){return cljs.core.update_in.call(null,chord.format.wrap_format.call(null,chs,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414)], null),(function (p1__11526_SHARP_){return cljs.core.async.map_LT_.call(null,clojure.walk.keywordize_keys,p1__11526_SHARP_);
}));
}));
cljs.core._add_method.call(null,chord.format.wrap_format,new cljs.core.Keyword(null,"str","str",1089608819),(function (chs,_){return chs;
}));
cljs.core._add_method.call(null,chord.format.wrap_format,null,(function (chs,_){return chord.format.wrap_format.call(null,chs,new cljs.core.Keyword(null,"edn","edn",1317840885));
}));
cljs.core._add_method.call(null,chord.format.wrap_format,new cljs.core.Keyword(null,"default","default",-1987822328),(function (chs,format){throw ("ERROR: Invalid Chord channel format: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(format));
}));

//# sourceMappingURL=format.js.map