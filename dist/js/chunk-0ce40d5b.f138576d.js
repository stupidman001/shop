(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ce40d5b"],{"37f9":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"search"},[t("van-search",{attrs:{shape:"round",background:"#fff",placeholder:"请输入搜索关键词"},on:{blur:e.fun},model:{value:e.searchValue,callback:function(a){e.searchValue=a},expression:"searchValue"}})],1),t("van-swipe",{staticClass:"showSwipe",attrs:{autoplay:3e3,height:"200"}},e._l(e.images,(function(e,a){return t("van-swipe-item",{key:a},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"image"}]})])})),1),t("van-tabs",{staticClass:"tabs",model:{value:e.active,callback:function(a){e.active=a},expression:"active"}},e._l(e.tabs,(function(a,n){return t("van-tab",{key:n,scopedSlots:e._u([{key:"title",fn:function(){return[t("van-icon",{attrs:{name:a.icon}}),e._v("选项 ")]},proxy:!0}],null,!0)},[e._v(" "+e._s(a.type)+" ")])})),1),e._v(" "+e._s(e.categories)+" ")],1)},c=[],s={data:function(){return{searchValue:"",images:["https://img01.yzcdn.cn/vant/apple-1.jpg","https://img01.yzcdn.cn/vant/apple-2.jpg"],tabs:[{icon:"goods-collect",type:"全部"},{icon:"wap-home",type:"生活"},{icon:"goods-collect",type:"服装"},{icon:"gift",type:"食品"},{icon:"service",type:"数码"}],active:0,categories:[]}},methods:{fun:function(){var e=this;this.axios.get("https://api.shop.eduwork.cn/api/index").then((function(a){e.categories=a.data.categories}))}}},i=s,o=(t("bae9"),t("2877")),r=Object(o["a"])(i,n,c,!1,null,"d354cc7a",null);a["default"]=r.exports},"7e7a":function(e,a,t){},bae9:function(e,a,t){"use strict";t("7e7a")}}]);
//# sourceMappingURL=chunk-0ce40d5b.f138576d.js.map