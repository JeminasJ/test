"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[4320,1788,541,7551],{61788:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var r=function(){var t=this,e=t._self._c;return e("div",[e("a-form",{staticStyle:{"max-width":"500px",margin:"40px auto 0"},attrs:{form:t.form}},[e("a-form-item",{attrs:{label:"付款账户",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["paymentUser",{rules:[{required:!0,message:"付款账户必须填写"}]}],expression:"[\n          'paymentUser',\n          { rules: [{ required: true, message: '付款账户必须填写' }] }\n        ]"}],attrs:{placeholder:"ant-design@alipay.com"}},[e("a-select-option",{attrs:{value:"1"}},[t._v("ant-design@alipay.com")])],1)],1),e("a-form-item",{attrs:{label:"收款账户",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-input-group",{staticStyle:{display:"inline-block","vertical-align":"middle"},attrs:{compact:!0}},[e("a-select",{staticStyle:{width:"100px"},attrs:{defaultValue:"alipay"}},[e("a-select-option",{attrs:{value:"alipay"}},[t._v("支付宝")]),e("a-select-option",{attrs:{value:"wexinpay"}},[t._v("微信")])],1),e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["payType",{initialValue:"test@example.com",rules:[{required:!0,message:"收款账户必须填写"}]}],expression:"[\n            'payType',\n            {\n              initialValue: 'test@example.com',\n              rules: [{ required: true, message: '收款账户必须填写' }]\n            }\n          ]"}],style:{width:"calc(100% - 100px)"}})],1)],1),e("a-form-item",{attrs:{label:"收款人姓名",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{initialValue:"Alex",rules:[{required:!0,message:"收款人名称必须核对"}]}],expression:"[\n          'name',\n          { initialValue: 'Alex', rules: [{ required: true, message: '收款人名称必须核对' }] }\n        ]"}]})],1),e("a-form-item",{attrs:{label:"转账金额",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["momey",{initialValue:"5000",rules:[{required:!0,message:"转账金额必须填写"}]}],expression:"[\n          'momey',\n          { initialValue: '5000', rules: [{ required: true, message: '转账金额必须填写' }] }\n        ]"}],attrs:{prefix:"￥"}})],1),e("a-form-item",{attrs:{wrapperCol:{span:19,offset:5}}},[e("a-button",{attrs:{type:"primary"},on:{click:t.nextStep}},[t._v("下一步")])],1)],1),e("a-divider"),t._m(0)],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"step-form-style-desc"},[e("h3",[t._v("说明")]),e("h4",[t._v("转账到支付宝账户")]),e("p",[t._v(" 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ")]),e("h4",[t._v("转账到银行卡")]),e("p",[t._v(" 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ")])])}],l={name:"Step1",data:function(){return{labelCol:{lg:{span:5},sm:{span:5}},wrapperCol:{lg:{span:19},sm:{span:19}},form:this.$form.createForm(this)}},methods:{nextStep:function(){var t=this,e=this.form.validateFields;e((function(e,a){e||t.$emit("nextStep")}))}}},i=l,n=a(1001),o=(0,n.Z)(i,r,s,!1,null,"e9200ad8",null),p=o.exports},33523:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var r=function(){var t=this,e=t._self._c;return e("div",[e("a-form",{staticStyle:{"max-width":"500px",margin:"40px auto 0"},attrs:{form:t.form}},[e("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{closable:!0,message:"确认转账后，资金将直接打入对方账户，无法退回。"}}),e("a-form-item",{staticClass:"stepFormText",attrs:{label:"付款账户",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[t._v(" ant-design@alipay.com ")]),e("a-form-item",{staticClass:"stepFormText",attrs:{label:"收款账户",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[t._v(" test@example.com ")]),e("a-form-item",{staticClass:"stepFormText",attrs:{label:"收款人姓名",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[t._v(" Alex ")]),e("a-form-item",{staticClass:"stepFormText",attrs:{label:"转账金额",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[t._v(" ￥ 5,000.00 ")]),e("a-divider"),e("a-form-item",{staticClass:"stepFormText",attrs:{label:"支付密码",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["paymentPassword",{initialValue:"123456",rules:[{required:!0,message:"请输入支付密码"}]}],expression:"[\n          'paymentPassword',\n          { initialValue: '123456', rules: [{ required: true, message: '请输入支付密码' }] }\n        ]"}],staticStyle:{width:"80%"},attrs:{type:"password"}})],1),e("a-form-item",{attrs:{wrapperCol:{span:19,offset:5}}},[e("a-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.nextStep}},[t._v("提交")]),e("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.prevStep}},[t._v("上一步")])],1)],1)],1)},s=[],l={name:"Step2",data:function(){return{labelCol:{lg:{span:5},sm:{span:5}},wrapperCol:{lg:{span:19},sm:{span:19}},form:this.$form.createForm(this),loading:!1,timer:0}},methods:{nextStep:function(){var t=this,e=this.form.validateFields;t.loading=!0,e((function(e,a){e?t.loading=!1:t.timer=setTimeout((function(){t.loading=!1,t.$emit("nextStep")}),1500)}))},prevStep:function(){this.$emit("prevStep")}},beforeDestroy:function(){clearTimeout(this.timer)}},i=l,n=a(1001),o=(0,n.Z)(i,r,s,!1,null,"51f072b4",null),p=o.exports},97551:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var r=function(){var t=this,e=t._self._c;return e("div",[e("a-form",[e("a-result",{staticStyle:{"max-width":"560px",margin:"40px auto 0"},attrs:{title:"操作成功","is-success":!0,"sub-title":"预计两小时内到账"},scopedSlots:t._u([{key:"extra",fn:function(){return[e("a-button",{attrs:{type:"primary"},on:{click:t.finish}},[t._v("再转一笔")]),e("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.toOrderList}},[t._v("查看账单")])]},proxy:!0}])},[e("div",{staticClass:"information"},[e("a-row",[e("a-col",{attrs:{sm:8,xs:24}},[t._v("付款账户：")]),e("a-col",{attrs:{sm:16,xs:24}},[t._v("ant-design@alipay.com")])],1),e("a-row",[e("a-col",{attrs:{sm:8,xs:24}},[t._v("收款账户：")]),e("a-col",{attrs:{sm:16,xs:24}},[t._v("test@example.com")])],1),e("a-row",[e("a-col",{attrs:{sm:8,xs:24}},[t._v("收款人姓名：")]),e("a-col",{attrs:{sm:16,xs:24}},[t._v("辉夜")])],1),e("a-row",[e("a-col",{attrs:{sm:8,xs:24}},[t._v("转账金额：")]),e("a-col",{attrs:{sm:16,xs:24}},[e("span",{staticClass:"money"},[t._v("500")]),t._v(" 元")])],1)],1)])],1)],1)},s=[],l={name:"Step3",data:function(){return{loading:!1}},methods:{finish:function(){this.$emit("finish")},toOrderList:function(){this.$router.push("/list/table-list")}}},i=l,n=a(1001),o=(0,n.Z)(i,r,s,!1,null,"808b55f0",null),p=o.exports},44320:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("page-header-wrapper",{scopedSlots:t._u([{key:"content",fn:function(){return[t._v(" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。 ")]},proxy:!0}])},[e("a-card",{attrs:{bordered:!1}},[e("a-steps",{staticClass:"steps",attrs:{current:t.currentTab}},[e("a-step",{attrs:{title:"填写转账信息"}}),e("a-step",{attrs:{title:"确认转账信息"}}),e("a-step",{attrs:{title:"完成"}})],1),e("div",{staticClass:"content"},[0===t.currentTab?e("step1",{on:{nextStep:t.nextStep}}):t._e(),1===t.currentTab?e("step2",{on:{nextStep:t.nextStep,prevStep:t.prevStep}}):t._e(),2===t.currentTab?e("step3",{on:{prevStep:t.prevStep,finish:t.finish}}):t._e()],1)],1)],1)},s=[],l=a(61788),i=a(33523),n=a(97551),o={name:"StepForm",components:{Step1:l["default"],Step2:i["default"],Step3:n["default"]},data:function(){return{currentTab:0,form:null}},methods:{nextStep:function(){this.currentTab<2&&(this.currentTab+=1)},prevStep:function(){this.currentTab>0&&(this.currentTab-=1)},finish:function(){this.currentTab=0}}},p=o,u=a(1001),m=(0,u.Z)(p,r,s,!1,null,"84803f98",null),c=m.exports}}]);