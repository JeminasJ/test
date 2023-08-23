module.exports = {
  printWidth: 100, // 最大行宽
  tabWidth: 2, // 缩进长度
  useTabs: false, // 空格代替 table
  semi: false, // 句末分号
  singleQuote: true, // 单引号
  quoteProps: 'as-needed', // 仅在必需时为对象的 key添加引号
  jsxSingleQuote: true, // jsx中使用单引号
  trailingComma: 'none', // 尾随逗号
  bracketSpacing: true, // 在对象内添加空格
  bracketSameLine: false, // > 是否放在末尾
  arrowParens: 'always', // 箭头函数使用括号
  requirePragma: false, // 无需顶部注释即可格式化
  insertPragma: false, // 在已被 preitter格式化的文件顶部加上标注
  proseWrap: 'preserve', // 不影响 markdown
  htmlWhitespaceSensitivity: 'css', // HTML内空格
  vueIndentScriptAndStyle: true, // 缩进 vue中的 script及 style标签
  endOfLine: 'lf', // 结束行形式
  embeddedLanguageFormatting: 'auto', //对引用代码进行格式化
  singleAttributePerLine: false // 不强制执行每行单个属性
}
