"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[8711],{18711:function(t,a,e){e.r(a),e.d(a,{default:function(){return f}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"ant-pro-pages-account-projects-cardList"},[a("a-list",{attrs:{loading:t.loading,"data-source":t.data,grid:{gutter:24,xxl:3,xl:2,lg:2,md:2,sm:2,xs:1}},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("a-card",{staticClass:"ant-pro-pages-account-projects-card",attrs:{hoverable:""}},[a("img",{attrs:{slot:"cover",src:e.cover,alt:e.title},slot:"cover"}),a("a-card-meta",{attrs:{title:e.title}},[a("template",{slot:"description"},[a("ellipsis",{attrs:{length:50}},[t._v(t._s(e.description))])],1)],2),a("div",{staticClass:"cardItemContent"},[a("span",[t._v(t._s(t._f("fromNow")(e.updatedAt)))]),a("div",{staticClass:"avatarList"},[a("avatar-list",{attrs:{size:"small"}},t._l(e.members,(function(t,s){return a("avatar-list-item",{key:"".concat(e.id,"-avatar-").concat(s),attrs:{src:t.avatar,tips:t.name}})})),1)],1)])],1)],1)}}])})],1)},r=[],n=e(30381),i=e.n(n),o=e(93806),c=o.OT.Option,l=o.eM.Item,d={name:"Project",components:{AvatarList:o.eM,AvatarListItem:l,Ellipsis:o.mH,TagSelect:o.OT,TagSelectOption:c,StandardFormRow:o.vy},data:function(){return{data:[],form:this.$form.createForm(this),loading:!0}},filters:{fromNow:function(t){return i()(t).fromNow()}},mounted:function(){this.getList()},methods:{handleChange:function(t){},getList:function(){var t=this;this.$http.get("/list/article",{params:{count:8}}).then((function(a){t.data=a.result,t.loading=!1}))}}},u=d,m=e(1001),p=(0,m.Z)(u,s,r,!1,null,"7887321c",null),f=p.exports}}]);