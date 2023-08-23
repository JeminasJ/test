import Vue from 'vue'
import store from '@/store'

/**
 * Action 权限指令
 * 指令用法：
 *  - 在需要控制 action 级别权限的组件上使用 v-action:[method] , 如下：
 *    <i-button v-action:add >添加用户</a-button>
 *    <a-button v-action:delete>删除用户</a-button>
 *    <a v-action:edit @click="edit(record)">修改</a>
 *
 *  - 当前用户没有权限时，组件上使用了该指令则会被隐藏
 *  - 当后台权限跟 pro 提供的模式不同时，只需要针对这里的权限过滤进行修改即可
 *
 *  @see https://github.com/vueComponent/ant-design-vue-pro/pull/53
 */
const action = Vue.directive('action', {
  inserted: function (el, binding, vnode) {
    const actionName = binding.arg // 权限按钮类型
    const roles = store.getters.roles // 当前用户权限
    const elVal = vnode.context.$route.meta.permission // 当前路由权限
    const permissionId =
      (Object.prototype.toString.call(elVal) === '[object String]' && [elVal]) || elVal // 将 string 类型变为 [string]

    roles.permissions.forEach((item) => {
      if (!permissionId.includes(item.permissionId)) {
        return
      }
      if (item.actionList && !item.actionList.includes(actionName)) {
        ;(el.parentNode && el.parentNode.removeChild(el)) || (el.style.display = 'none')
      }
    })
  }
})

export default action
