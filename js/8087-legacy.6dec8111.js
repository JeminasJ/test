"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[8087,472],{8087:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});a(82526),a(41817);var n=function(){var t=this,e=t._self._c;return e("a-list",{attrs:{size:"large",rowKey:"id",loading:t.loading,itemLayout:"vertical",dataSource:t.data},scopedSlots:t._u([{key:"renderItem",fn:function(a){return e("a-list-item",{key:a.id},[e("template",{slot:"actions"},[e("icon-text",{attrs:{type:"star-o",text:a.star}}),e("icon-text",{attrs:{type:"like-o",text:a.like}}),e("icon-text",{attrs:{type:"message",text:a.message}})],1),e("a-list-item-meta",[e("a",{attrs:{slot:"title",href:"https://vue.ant.design/"},slot:"title"},[t._v(t._s(a.title))]),e("template",{slot:"description"},[e("span",[e("a-tag",[t._v("Ant Design")]),e("a-tag",[t._v("设计语言")]),e("a-tag",[t._v("蚂蚁金服")])],1)])],2),e("article-list-content",{attrs:{description:a.description,owner:a.owner,avatar:a.avatar,href:a.href,updateAt:a.updatedAt}})],2)}}])},[t.data.length>0?e("div",{staticStyle:{"text-align":"center","margin-top":"16px"},attrs:{slot:"footer"},slot:"footer"},[e("a-button",{attrs:{loading:t.loadingMore},on:{click:t.loadMore}},[t._v("加载更多")])],1):t._e()])},i=[],r=(a(41539),a(92222),a(84802)),o=a(70472),s={name:"Article",components:{IconText:o["default"],ArticleListContent:r.cD},data:function(){return{loading:!0,loadingMore:!1,data:[]}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.$http.get("/list/article").then((function(e){t.data=e.result,t.loading=!1}))},loadMore:function(){var t=this;this.loadingMore=!0,this.$http.get("/list/article").then((function(e){t.data=t.data.concat(e.result)})).finally((function(){t.loadingMore=!1}))}}},l=s,c=a(1001),u=(0,c.Z)(l,n,i,!1,null,"3d1244bf",null),d=u.exports},70472:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var n=function(){var t=this,e=t._self._c;return e("span",[e("a-icon",{staticStyle:{"margin-right":"8px"},attrs:{type:t.type}}),t._v(" "+t._s(t.text)+" ")],1)},i=[],r=(a(9653),{name:"IconText",props:{type:{type:String,required:!0},text:{type:[String,Number],required:!0}}}),o=r,s=a(1001),l=(0,s.Z)(o,n,i,!1,null,null,null),c=l.exports}}]);