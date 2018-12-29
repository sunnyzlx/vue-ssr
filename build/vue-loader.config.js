module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCSS: !isDev, // 生产环境要把.vue中的css打包进单独的css文件
    cssModules: {},
    // hotReload: false // 根据环境变量生成
  } 
}