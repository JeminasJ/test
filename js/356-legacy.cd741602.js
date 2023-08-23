"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[356,4511,3981],{40356:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var a=function(){var e=this,t=e._self._c;return t("page-header-wrapper",{attrs:{content:"高级表单常见于一次性输入和提交大批量数据的场景"}},[t("a-card",{staticClass:"card",attrs:{title:"仓库管理",bordered:!1}},[t("repository-form",{ref:"repository",attrs:{showSubmit:!1}})],1),t("a-card",{staticClass:"card",attrs:{title:"任务管理",bordered:!1}},[t("task-form",{ref:"task",attrs:{showSubmit:!1}})],1),t("a-card",[t("a-table",{attrs:{columns:e.columns,dataSource:e.data,pagination:!1,loading:e.memberLoading},scopedSlots:e._u([e._l(["name","workId","department"],(function(r,a){return{key:r,fn:function(o,n){return[n.editable?t("a-input",{key:r,staticStyle:{margin:"-5px 0"},attrs:{value:o,placeholder:e.columns[a].title},on:{change:function(t){return e.handleChange(t.target.value,n.key,r)}}}):[e._v(e._s(o))]]}}})),{key:"operation",fn:function(r,a){return[a.editable?[a.isNew?t("span",[t("a",{on:{click:function(t){return e.saveRow(a)}}},[e._v("添加")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){return e.remove(a.key)}}},[t("a",[e._v("删除")])])],1):t("span",[t("a",{on:{click:function(t){return e.saveRow(a)}}},[e._v("保存")]),t("a-divider",{attrs:{type:"vertical"}}),t("a",{on:{click:function(t){return e.cancel(a.key)}}},[e._v("取消")])],1)]:t("span",[t("a",{on:{click:function(t){return e.toggle(a.key)}}},[e._v("编辑")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){return e.remove(a.key)}}},[t("a",[e._v("删除")])])],1)]}}],null,!0)}),t("a-button",{staticStyle:{width:"100%","margin-top":"16px","margin-bottom":"8px"},attrs:{type:"dashed",icon:"plus"},on:{click:e.newMember}},[e._v("新增成员")])],1),t("footer-tool-bar",{attrs:{"is-mobile":e.isMobile,collapsed:e.sideCollapsed}},[t("span",{staticClass:"popover-wrapper"},[t("a-popover",{attrs:{title:"表单校验信息",overlayClassName:"antd-pro-pages-forms-style-errorPopover",trigger:"click",getPopupContainer:function(e){return e.parentNode}}},[t("template",{slot:"content"},e._l(e.errors,(function(r){return t("li",{key:r.key,staticClass:"antd-pro-pages-forms-style-errorListItem",on:{click:function(t){return e.scrollToField(r.key)}}},[t("a-icon",{staticClass:"antd-pro-pages-forms-style-errorIcon",attrs:{type:"cross-circle-o"}}),t("div",{},[e._v(e._s(r.message))]),t("div",{staticClass:"antd-pro-pages-forms-style-errorField"},[e._v(e._s(r.fieldLabel))])],1)})),0),e.errors.length>0?t("span",{staticClass:"antd-pro-pages-forms-style-errorIcon"},[t("a-icon",{attrs:{type:"exclamation-circle"}}),e._v(e._s(e.errors.length)+" ")],1):e._e()],2)],1),t("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.validate}},[e._v("提交")])],1)],1)},o=[],n=r(89584),s=r(95082),i=(r(41539),r(39714),r(57327),r(68309),r(69826),r(54747),r(47941),r(78783),r(33948),r(21249),r(84511)),l=r(3981),u=r(48826),c=r(84789),d={name:"仓库名",url:"仓库域名",owner:"仓库管理员",approver:"审批人",dateRange:"生效日期",type:"仓库类型",name2:"任务名",url2:"任务描述",owner2:"执行人",approver2:"责任人",dateRange2:"生效日期",type2:"任务类型"},m={name:"AdvancedForm",mixins:[c.c],components:{FooterToolBar:u.Z,RepositoryForm:i["default"],TaskForm:l["default"]},data:function(){return{loading:!1,memberLoading:!1,columns:[{title:"成员姓名",dataIndex:"name",key:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"工号",dataIndex:"workId",key:"workId",width:"20%",scopedSlots:{customRender:"workId"}},{title:"所属部门",dataIndex:"department",key:"department",width:"40%",scopedSlots:{customRender:"department"}},{title:"操作",key:"action",scopedSlots:{customRender:"operation"}}],data:[{key:"1",name:"小明",workId:"001",editable:!1,department:"行政部"},{key:"2",name:"李莉",workId:"002",editable:!1,department:"IT部"},{key:"3",name:"王小帅",workId:"003",editable:!1,department:"财务部"}],errors:[]}},methods:{handleSubmit:function(e){e.preventDefault()},newMember:function(){var e=this.data.length;this.data.push({key:0===e?"1":(parseInt(this.data[e-1].key)+1).toString(),name:"",workId:"",department:"",editable:!0,isNew:!0})},remove:function(e){var t=this.data.filter((function(t){return t.key!==e}));this.data=t},saveRow:function(e){var t=this;this.memberLoading=!0;var r=e.key,a=e.name,o=e.workId,n=e.department;if(!a||!o||!n)return this.memberLoading=!1,void this.$message.error("请填写完整成员信息。");new Promise((function(e){setTimeout((function(){e({loop:!1})}),800)})).then((function(){var e=t.data.find((function(e){return e.key===r}));e.editable=!1,e.isNew=!1,t.memberLoading=!1}))},toggle:function(e){var t=this.data.find((function(t){return t.key===e}));t._originalData=(0,s.Z)({},t),t.editable=!t.editable},getRowByKey:function(e,t){var r=this.data;return(t||r).find((function(t){return t.key===e}))},cancel:function(e){var t=this.data.find((function(t){return t.key===e}));Object.keys(t).forEach((function(e){t[e]=t._originalData[e]})),t._originalData=void 0},handleChange:function(e,t,r){var a=(0,n.Z)(this.data),o=a.find((function(e){return t===e.key}));o&&(o[r]=e,this.data=a)},validate:function(){var e=this,t=this.$refs,r=t.repository,a=t.task,o=this.$notification,n=new Promise((function(e,t){r.form.validateFields((function(r,a){r?t(r):e(a)}))})),i=new Promise((function(e,t){a.form.validateFields((function(r,a){r?t(r):e(a)}))}));this.errors=[],Promise.all([n,i]).then((function(e){o["error"]({message:"Received values of form:",description:JSON.stringify(e)})})).catch((function(){var t=Object.assign({},r.form.getFieldsError(),a.form.getFieldsError()),o=(0,s.Z)({},t);e.errorList(o)}))},errorList:function(e){e&&0!==e.length&&(this.errors=Object.keys(e).filter((function(t){return e[t]})).map((function(t){return{key:t,message:e[t][0],fieldLabel:d[t]}})))},scrollToField:function(e){var t=document.querySelector('label[for="'.concat(e,'"]'));t&&t.scrollIntoView(!0)}}},p=m,f=r(1001),v=(0,f.Z)(p,a,o,!1,null,"44b31ce4",null),h=v.exports},84511:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"仓库名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入仓库名称",whitespace:!0}]}],expression:"[\n            'name',\n            { rules: [{ required: true, message: '请输入仓库名称', whitespace: true }] }\n          ]"}],attrs:{placeholder:"请输入仓库名称"}})],1)],1),t("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[t("a-form-item",{attrs:{label:"仓库域名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",{rules:[{required:!0,message:"请输入仓库域名",whitespace:!0},{validator:e.validate}]}],expression:"[\n            'url',\n            {\n              rules: [\n                { required: true, message: '请输入仓库域名', whitespace: true },\n                { validator: validate }\n              ]\n            }\n          ]"}],attrs:{addonBefore:"http://",addonAfter:".com",placeholder:"请输入"}})],1)],1),t("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[t("a-form-item",{attrs:{label:"仓库管理员"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["owner",{rules:[{required:!0,message:"请选择管理员"}]}],expression:"['owner', { rules: [{ required: true, message: '请选择管理员' }] }]"}],attrs:{placeholder:"请选择管理员"}},[t("a-select-option",{attrs:{value:"王同学"}},[e._v("王同学")]),t("a-select-option",{attrs:{value:"李同学"}},[e._v("李同学")]),t("a-select-option",{attrs:{value:"黄同学"}},[e._v("黄同学")])],1)],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"审批人"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["approver",{rules:[{required:!0,message:"请选择审批员"}]}],expression:"['approver', { rules: [{ required: true, message: '请选择审批员' }] }]"}],attrs:{placeholder:"请选择审批员"}},[t("a-select-option",{attrs:{value:"王晓丽"}},[e._v("王晓丽")]),t("a-select-option",{attrs:{value:"李军"}},[e._v("李军")])],1)],1)],1),t("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[t("a-form-item",{attrs:{label:"生效日期"}},[t("a-range-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["dateRange",{rules:[{required:!0,message:"请选择生效日期"}]}],expression:"['dateRange', { rules: [{ required: true, message: '请选择生效日期' }] }]"}],staticStyle:{width:"100%"}})],1)],1),t("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[t("a-form-item",{attrs:{label:"仓库类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请选择仓库类型"}]}],expression:"['type', { rules: [{ required: true, message: '请选择仓库类型' }] }]"}],attrs:{placeholder:"请选择仓库类型"}},[t("a-select-option",{attrs:{value:"公开"}},[e._v("公开")]),t("a-select-option",{attrs:{value:"私密"}},[e._v("私密")])],1)],1)],1)],1),e.showSubmit?t("a-form-item",[t("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},o=[],n=(r(74916),{name:"RepositoryForm",props:{showSubmit:{type:Boolean,default:!1}},data:function(){return{form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){e||t.$notification["error"]({message:"Received values of form:",description:r})}))},validate:function(e,t,r){var a=/^user-(.*)$/;a.test(t)||r(new Error("需要以 user- 开头")),r()}}}),s=n,i=r(1001),l=(0,i.Z)(s,a,o,!1,null,"676cc41c",null),u=l.exports},3981:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"任务名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name2",{rules:[{required:!0,message:"请输入任务名称",whitespace:!0}]}],expression:"[\n            'name2',\n            { rules: [{ required: true, message: '请输入任务名称', whitespace: true }] }\n          ]"}],attrs:{placeholder:"请输入任务名称"}})],1)],1),t("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[t("a-form-item",{attrs:{label:"任务描述"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url2",{rules:[{required:!0,message:"请输入任务描述",whitespace:!0}]}],expression:"[\n            'url2',\n            { rules: [{ required: true, message: '请输入任务描述', whitespace: true }] }\n          ]"}],attrs:{placeholder:"请输入任务描述"}})],1)],1),t("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[t("a-form-item",{attrs:{label:"执行人"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["owner2",{rules:[{required:!0,message:"请选择执行人"}]}],expression:"['owner2', { rules: [{ required: true, message: '请选择执行人' }] }]"}],attrs:{placeholder:"请选择执行人"}},[t("a-select-option",{attrs:{value:"黄丽丽"}},[e._v("黄丽丽")]),t("a-select-option",{attrs:{value:"李大刀"}},[e._v("李大刀")])],1)],1)],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"责任人"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["approver2",{rules:[{required:!0,message:"请选择责任人"}]}],expression:"['approver2', { rules: [{ required: true, message: '请选择责任人' }] }]"}],attrs:{placeholder:"请选择责任人"}},[t("a-select-option",{attrs:{value:"王伟"}},[e._v("王伟")]),t("a-select-option",{attrs:{value:"李红军"}},[e._v("李红军")])],1)],1)],1),t("a-col",{attrs:{xl:{span:7,offset:1},lg:{span:8},md:{span:12},sm:24}},[t("a-form-item",{attrs:{label:"提醒时间"}},[t("a-time-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["dateRange2",{rules:[{required:!0,message:"请选择提醒时间"}]}],expression:"['dateRange2', { rules: [{ required: true, message: '请选择提醒时间' }] }]"}],staticStyle:{width:"100%"}})],1)],1),t("a-col",{attrs:{xl:{span:9,offset:1},lg:{span:10},md:{span:24},sm:24}},[t("a-form-item",{attrs:{label:"任务类型"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type2",{rules:[{required:!0,message:"请选择任务类型"}]}],expression:"['type2', { rules: [{ required: true, message: '请选择任务类型' }] }]"}],attrs:{placeholder:"请选择任务类型"}},[t("a-select-option",{attrs:{value:"定时执行"}},[e._v("定时执行")]),t("a-select-option",{attrs:{value:"周期执行"}},[e._v("周期执行")])],1)],1)],1)],1),e.showSubmit?t("a-form-item",[t("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)},o=[],n={name:"TaskForm",props:{showSubmit:{type:Boolean,default:!1}},data:function(){return{form:this.$form.createForm(this)}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){e||t.$notification["error"]({message:"Received values of form:",description:r})}))}}},s=n,i=r(1001),l=(0,i.Z)(s,a,o,!1,null,"4c964f08",null),u=l.exports},48826:function(e,t,r){r.d(t,{Z:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",{class:e.prefixCls,style:{width:e.barWidth,transition:"0.3s all"}},[t("div",{staticStyle:{float:"left"}},[e._t("extra",(function(){return[e._v(e._s(e.extra))]}))],2),t("div",{staticStyle:{float:"right"}},[e._t("default")],2)])},o=[],n=(r(9653),{name:"FooterToolBar",props:{prefixCls:{type:String,default:"ant-pro-footer-toolbar"},collapsed:{type:Boolean,default:!1},isMobile:{type:Boolean,default:!1},siderWidth:{type:Number,default:void 0},extra:{type:[String,Object],default:""}},computed:{barWidth:function(){return this.isMobile?void 0:"calc(100% - ".concat(this.collapsed?80:this.siderWidth||256,"px)")}}}),s=n,i=r(1001),l=(0,i.Z)(s,a,o,!1,null,"641f2366",null),u=l.exports,c=u},84789:function(e,t,r){r.d(t,{c:function(){return n}});var a=r(95082),o=r(20629),n={computed:(0,a.Z)((0,a.Z)({},(0,o.rn)({layout:function(e){return e.app.layout},navTheme:function(e){return e.app.theme},primaryColor:function(e){return e.app.color},colorWeak:function(e){return e.app.weak},fixedHeader:function(e){return e.app.fixedHeader},fixedSidebar:function(e){return e.app.fixedSidebar},contentWidth:function(e){return e.app.contentWidth},autoHideHeader:function(e){return e.app.autoHideHeader},isMobile:function(e){return e.app.isMobile},sideCollapsed:function(e){return e.app.sideCollapsed},multiTab:function(e){return e.app.multiTab}})),{},{isTopMenu:function(){return"topmenu"===this.layout}}),methods:{isSideMenu:function(){return!this.isTopMenu}}}},89584:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(49227);function o(e){if(Array.isArray(e))return(0,a.Z)(e)}r(82526),r(41817),r(41539),r(32165),r(78783),r(33948),r(91038);function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var s=r(12780);function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e){return o(e)||n(e)||(0,s.Z)(e)||i()}}}]);