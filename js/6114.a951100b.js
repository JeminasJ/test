"use strict";(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[6114],{56114:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var n=function(){var t=this,e=t._self._c;return e("a-card",{attrs:{bordered:!1}},[e("div",{staticClass:"table-page-search-wrapper"},[e("a-form",{attrs:{layout:"inline"}},[e("a-row",{attrs:{gutter:48}},[e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"规则编号"}},[e("a-input",{attrs:{placeholder:""}})],1)],1),e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"使用状态"}},[e("a-select",{attrs:{placeholder:"请选择","default-value":"0"}},[e("a-select-option",{attrs:{value:"0"}},[t._v("全部")]),e("a-select-option",{attrs:{value:"1"}},[t._v("关闭")]),e("a-select-option",{attrs:{value:"2"}},[t._v("运行中")])],1)],1)],1),t.advanced?[e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"调用次数"}},[e("a-input-number",{staticStyle:{width:"100%"}})],1)],1),e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"更新日期"}},[e("a-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入更新日期"}})],1)],1),e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"使用状态"}},[e("a-select",{attrs:{placeholder:"请选择","default-value":"0"}},[e("a-select-option",{attrs:{value:"0"}},[t._v("全部")]),e("a-select-option",{attrs:{value:"1"}},[t._v("关闭")]),e("a-select-option",{attrs:{value:"2"}},[t._v("运行中")])],1)],1)],1),e("a-col",{attrs:{md:8,sm:24}},[e("a-form-item",{attrs:{label:"使用状态"}},[e("a-select",{attrs:{placeholder:"请选择","default-value":"0"}},[e("a-select-option",{attrs:{value:"0"}},[t._v("全部")]),e("a-select-option",{attrs:{value:"1"}},[t._v("关闭")]),e("a-select-option",{attrs:{value:"2"}},[t._v("运行中")])],1)],1)],1)]:t._e(),e("a-col",{attrs:{md:t.advanced?24:8,sm:24}},[e("span",{staticClass:"table-page-search-submitButtons",style:t.advanced&&{float:"right",overflow:"hidden"}||{}},[e("a-button",{attrs:{type:"primary"}},[t._v("查询")]),e("a-button",{staticStyle:{"margin-left":"8px"}},[t._v("重置")]),e("a",{staticStyle:{"margin-left":"8px"},on:{click:t.toggleAdvanced}},[t._v(" "+t._s(t.advanced?"收起":"展开")+" "),e("a-icon",{attrs:{type:t.advanced?"up":"down"}})],1)],1)])],2)],1)],1),e("div",{staticClass:"table-operator"},[e("a-button",{attrs:{type:"primary",icon:"plus"}},[t._v("新建")]),t.selectedRowKeys.length>0?e("a-dropdown",[e("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e("a-menu-item",{key:"1"},[e("a-icon",{attrs:{type:"delete"}}),t._v("删除")],1),e("a-menu-item",{key:"2"},[e("a-icon",{attrs:{type:"lock"}}),t._v("锁定")],1)],1),e("a-button",{staticStyle:{"margin-left":"8px"}},[t._v(" 批量操作 "),e("a-icon",{attrs:{type:"down"}})],1)],1):t._e()],1),e("s-table",{ref:"table",attrs:{size:"default",columns:t.columns,data:t.loadData,alert:{show:!0,clear:!0},rowSelection:{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}},scopedSlots:t._u([t._l(t.columns,(function(a,n){return{key:a.dataIndex,fn:function(s,o){return a.scopedSlots?[e("div",{key:n},[o.editable?e("a-input",{staticStyle:{margin:"-5px 0"},attrs:{value:s},on:{change:function(e){return t.handleChange(e.target.value,o.key,a,o)}}}):[t._v(t._s(s))]],2)]:void 0}}})),{key:"action",fn:function(a,n){return[e("div",{staticClass:"editable-row-operations"},[n.editable?e("span",[e("a",{on:{click:function(){return t.save(n)}}},[t._v("保存")]),e("a-divider",{attrs:{type:"vertical"}}),e("a-popconfirm",{attrs:{title:"真的放弃编辑吗?"},on:{confirm:function(){return t.cancel(n)}}},[e("a",[t._v("取消")])])],1):e("span",[e("a",{staticClass:"edit",on:{click:function(){return t.edit(n)}}},[t._v("修改")]),e("a-divider",{attrs:{type:"vertical"}}),e("a",{staticClass:"delete",on:{click:function(){return t.del(n)}}},[t._v("删除")])],1)])]}}],null,!0)})],1)},s=[],o=a(93806),l={name:"TableList",components:{STable:o.m7},data:function(){var t=this;return{advanced:!1,queryParam:{},columns:[{title:"规则编号",dataIndex:"no",width:90},{title:"描述",dataIndex:"description",scopedSlots:{customRender:"description"}},{title:"服务调用次数",dataIndex:"callNo",width:"150px",sorter:!0,needTotal:!0,scopedSlots:{customRender:"callNo"}},{title:"状态",dataIndex:"status",width:"100px",needTotal:!0,scopedSlots:{customRender:"status"}},{title:"更新时间",dataIndex:"updatedAt",width:"200px",sorter:!0,scopedSlots:{customRender:"updatedAt"}},{table:"操作",dataIndex:"action",width:"120px",scopedSlots:{customRender:"action"}}],loadData:function(e){return t.$http.get("/service",{params:Object.assign(e,t.queryParam)}).then((function(t){return t.result}))},selectedRowKeys:[],selectedRows:[]}},methods:{handleChange:function(t,e,a,n){n[a.dataIndex]=t},edit:function(t){t.editable=!0},del:function(t){this.$confirm({title:"警告",content:"真的要删除 ".concat(t.no," 吗?"),okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){return new Promise((function(t,e){setTimeout(Math.random()>.5?t:e,1e3)})).catch((function(){}))},onCancel:function(){}})},save:function(t){t.editable=!1},cancel:function(t){t.editable=!1},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e},toggleAdvanced:function(){this.advanced=!this.advanced}},watch:{}},r=l,c=a(1001),i=(0,c.Z)(r,n,s,!1,null,"7d3bb311",null),d=i.exports}}]);