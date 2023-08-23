"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[483],{80483:function(t,a,e){e.r(a),e.d(a,{default:function(){return f}});var s=function(){var t=this,a=t._self._c;return a("page-header-wrapper",{scopedSlots:t._u([{key:"content",fn:function(){return[a("div",{staticClass:"page-header-content"},[a("div",{staticClass:"avatar"},[a("a-avatar",{attrs:{size:"large",src:t.currentUser.avatar}})],1),a("div",{staticClass:"content"},[a("div",{staticClass:"content-title"},[t._v(" "+t._s(t.timeFix)+"，"+t._s(t.user.name)),a("span",{staticClass:"welcome-text"},[t._v("，"+t._s(t.welcome))])]),a("div",[t._v("前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台")])])])]},proxy:!0},{key:"extraContent",fn:function(){return[a("div",{staticClass:"extra-content"},[a("div",{staticClass:"stat-item"},[a("a-statistic",{attrs:{title:"项目数",value:56}})],1),a("div",{staticClass:"stat-item"},[a("a-statistic",{attrs:{title:"团队内排名",value:8,suffix:"/ 24"}})],1),a("div",{staticClass:"stat-item"},[a("a-statistic",{attrs:{title:"项目访问",value:2223}})],1)])]},proxy:!0}])},[a("div",[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:16,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticClass:"project-list",staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,bordered:!1,title:"进行中的项目","body-style":{padding:0}}},[a("a",{attrs:{slot:"extra"},slot:"extra"},[t._v("全部项目")]),a("div",t._l(t.projects,(function(e,s){return a("a-card-grid",{key:s,staticClass:"project-card-grid"},[a("a-card",{attrs:{bordered:!1,"body-style":{padding:0}}},[a("a-card-meta",[a("div",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[a("a-avatar",{attrs:{size:"small",src:e.cover}}),a("a",[t._v(t._s(e.title))])],1),a("div",{staticClass:"card-description",attrs:{slot:"description"},slot:"description"},[t._v(" "+t._s(e.description)+" ")])]),a("div",{staticClass:"project-item"},[a("a",{attrs:{href:"/#/"}},[t._v("科学搬砖组")]),a("span",{staticClass:"datetime"},[t._v("9小时前")])])],1)],1)})),1)]),a("a-card",{attrs:{loading:t.loading,title:"动态",bordered:!1}},[a("a-list",t._l(t.activities,(function(e,s){return a("a-list-item",{key:s},[a("a-list-item-meta",[a("a-avatar",{attrs:{slot:"avatar",size:"small",src:e.user.avatar},slot:"avatar"}),a("div",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(e.user.nickname))]),t._v("  在 "),a("a",{attrs:{href:"#"}},[t._v(t._s(e.project.name))]),t._v("  "),a("span",[t._v(t._s(e.project.action))]),t._v("  "),a("a",{attrs:{href:"#"}},[t._v(t._s(e.project.event))])]),a("div",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(e.time))])],1)],1)})),1)],1)],1),a("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:8,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"快速开始 / 便捷导航",bordered:!1,"body-style":{padding:0}}},[a("div",{staticClass:"item-group"},[a("a",[t._v("操作一")]),a("a",[t._v("操作二")]),a("a",[t._v("操作三")]),a("a",[t._v("操作四")]),a("a",[t._v("操作五")]),a("a",[t._v("操作六")]),a("a-button",{attrs:{size:"small",type:"primary",ghost:"",icon:"plus"}},[t._v("添加")])],1)]),a("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"XX 指数",loading:t.radarLoading,bordered:!1,"body-style":{padding:0}}},[a("div",{staticStyle:{"min-height":"400px"}},[a("radar",{attrs:{data:t.radarData}})],1)]),a("a-card",{attrs:{loading:t.loading,title:"团队",bordered:!1}},[a("div",{staticClass:"members"},[a("a-row",t._l(t.teams,(function(e,s){return a("a-col",{key:s,attrs:{span:12}},[a("a",[a("a-avatar",{attrs:{size:"small",src:e.avatar}}),a("span",{staticClass:"member"},[t._v(t._s(e.name))])],1)])})),1)],1)])],1)],1)],1)])},r=[],i=e(95082),n=e(84722),o=e(20629),c=e(40321),l=e(93806),d=e(54101),u=e(63531),v={name:"Workplace",components:{PageHeaderWrapper:c.Oc,Radar:l.Fk},data:function(){return{timeFix:(0,n.D$)(),avatar:"",user:{},projects:[],loading:!0,radarLoading:!0,activities:[],teams:[],axis1Opts:{dataKey:"item",line:null,tickLine:null,grid:{lineStyle:{lineDash:null},hideFirstLine:!1}},axis2Opts:{dataKey:"score",line:null,tickLine:null,grid:{type:"polygon",lineStyle:{lineDash:null}}},scale:[{dataKey:"score",min:0,max:80}],axisData:[{item:"引用",a:70,b:30,c:40},{item:"口碑",a:60,b:70,c:40},{item:"产量",a:50,b:60,c:40},{item:"贡献",a:40,b:50,c:40},{item:"热度",a:60,b:70,c:40},{item:"引用",a:70,b:50,c:40}],radarData:[]}},computed:(0,i.Z)((0,i.Z)({},(0,o.rn)({nickname:function(t){return t.user.nickname},welcome:function(t){return t.user.welcome}})),{},{currentUser:function(){return{name:"Serati Ma",avatar:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"}},userInfo:function(){return this.$store.getters.userInfo}}),created:function(){this.user=this.userInfo,this.avatar=this.userInfo.avatar,(0,d.JV)().then((function(t){})),(0,d.qM)().then((function(t){}))},mounted:function(){this.getProjects(),this.getActivity(),this.getTeams(),this.initRadar()},methods:{getProjects:function(){var t=this;this.$http.get("/list/search/projects").then((function(a){t.projects=a.result&&a.result.data,t.loading=!1}))},getActivity:function(){var t=this;this.$http.get("/workplace/activity").then((function(a){t.activities=a.result}))},getTeams:function(){var t=this;this.$http.get("/workplace/teams").then((function(a){t.teams=a.result}))},initRadar:function(){var t=this;this.radarLoading=!0,this.$http.get("/workplace/radar").then((function(a){var e=(new u.View).source(a.result);e.transform({type:"fold",fields:["个人","团队","部门"],key:"user",value:"score"}),t.radarData=e.rows,t.radarLoading=!1}))}}},m=v,p=e(1001),g=(0,p.Z)(m,s,r,!1,null,"2fd7707b",null),f=g.exports},54101:function(t,a,e){e.d(a,{CZ:function(){return c},JV:function(){return i},Zu:function(){return o},qM:function(){return n}});var s=e(46945),r={user:"/user",role:"/role",service:"/service",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function i(t){return(0,s.ZP)({url:r.role,method:"get",params:t})}function n(t){return(0,s.ZP)({url:r.service,method:"get",params:t})}function o(t){return(0,s.ZP)({url:r.permissionNoPager,method:"get",params:t})}function c(t){return(0,s.ZP)({url:r.orgTree,method:"get",params:t})}}}]);