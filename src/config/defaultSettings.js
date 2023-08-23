// 默认配置
export default {
  navTheme: 'dark', // 菜单主题 'dark' or 'light'
  primaryColor: '#1890ff', // 默认主题色 '#F5222D'
  layout: 'sidemenu', // 菜单布局方式 'sidemenu' or 'topmenu'
  contentWidth: 'Fluid', // 内容区布局 'Fluid' or 'Fixed', 只在 'topmenu' 生效
  fixedHeader: false, // 固定头部
  fixSiderbar: false, // 固定菜单
  colorWeak: false, // 色盲模式
  menu: {
    locale: true
  },
  title: 'Ant Design Pro',
  pwa: false,
  iconfontUrl: '',
  production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true'
}
