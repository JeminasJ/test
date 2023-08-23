- 文档: https://pro.antdv.com/docs/getting-started
- 更新日志: https://pro.antdv.com/docs/changelog
- 常见问题: https://pro.antdv.com/docs/faq
- Vue3 ProLayout: https://github.com/vueComponent/pro-layout

## 环境和依赖

- node
- yarn
- webpack
- eslint
- @vue/cli
- [ant-design-vue@1.x](https://github.com/vueComponent/ant-design-vue) - Ant Design Of Vue 实现
- [vue-cropper](https://github.com/xyxiao001/vue-cropper) - 头像裁剪组件
- [@antv/g2](https://antv.alipay.com/zh-cn/index.html) - Alipay AntV 数据可视化图表
- [Viser-vue](https://viserjs.github.io/docs.html#/viser/guide/installation) - antv/g2 封装实现

> 本项目使用 [Yarn](https://yarnpkg.com/) 包管理工具

## 目录结构

```
├── public
│   ├── logo.png                       # LOGO
|   └── index.html                     # Vue 入口模板
├── src
│   ├── api                            # 接口 Api
│   ├── assets                         # 本地静态资源
│   ├── components                     # 业务通用组件
│   ├── config                         # 项目基础配置
│   │   ├── defaultSettings.js         # 风格主题默认配置
│   │   └── router.config.js           # 路由配置
│   ├── core                           # 项目引导, 全局配置初始化，依赖包引入等
│   │   ├── directives                 # Vue自定义指令
│   │   │   └── action.js              # 操作权限指令
│   │   │── permission                 # 权限控制
│   │   │   └── permission.js          # 权限控制
│   │   ├── bootstrap.js               #
│   │   ├── icons.js                   #
│   │   ├── lazy_use.js                #
│   │   └── use.js                     #
│   ├── layouts                        # 页面布局结构组件
│   ├── locales                        # 国际化资源
│   ├── mock                           # 数据模拟
│   ├── router                         # 路由管理
│   ├── store                          # Vuex
│   ├── utils                          # 工具库
│   ├── views                          # 业务页面入口和常用模板
│   ├── App.vue                        # Vue 模板入口
│   ├── global.less                    # 全局样式
│   ├── main.js                        # Vue 入口 JS
│   ├── permission.js                  # 路由守卫(路由权限控制)
│   └── tailwind.css                   # tailwind样式
├── tests                              # 测试工具
├── .browserslistrc                    # 浏览器版本
├── .editorconfig                      # 编辑器缩进配置
├── .env                               # 生产环境配置
├── .env.development                   # 开发环境配置
├── .env.preview                       # 预览环境配置
├── .eslintrc.js                       # eslint配置
├── .eslintrc.json                     # eslint配置
├── .gitattributes                     # git行尾规范配置
├── .gitignore                         # git忽略文件
├── .lintstagedrc.json                 #
├── .prettierignore                    # 代码格式化忽略文件
├── .prettierrc.js                     # 代码格式化配置
├── .stylelintrc.js                    # css格式化配置
├── .travis.yml                        # travis集成配置
├── babel.config.js                    # babel配置
├── commitlint.config.js               # git提交规范配置
├── Dockerfile                         # docker配置
├── jest.config.js                     # jest测试配置
├── jsconfig.json                      # js配置
├── package.json
├── postcss.config.js                  # postcss配置
├── README.md
├── tailwind.config.js                 # tailwindcss配置
└── vue.config.js
```

## 项目运行

- 安装依赖

```
yarn install
```

- 开发模式运行

```
yarn run dev
```

- 编译项目

```
yarn run build
```

- 代码检测

```
yarn run lint
```

## 其他说明

- 关闭 Eslint：移除 `package.json` 中 `eslintConfig` 整个节点代码, `vue.config.js` 下的 `lintOnSave` 值改为 `false`

- 组件按需加载 `/src/main.js` L14 相关代码 `import './core/lazy_use'` / `import './core/use'`

- [修改 Ant Design 配色 (@kokoroli)](https://github.com/kokoroli/antd-awesome/blob/master/docs/Ant_Design_%E6%A0%B7%E5%BC%8F%E8%A6%86%E7%9B%96.md)

- I18n: [多语言支持 (@musnow)](./src/locales/index.js)

- 生产环境默认不加载 `mock`，更多详情请看 `src/mock/index.js`

## 浏览器兼容

Modern browsers and IE10.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |
