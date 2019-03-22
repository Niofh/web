// const webpack = require('webpack')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: process.env.BASE_URL, // 打包的静态文件路径
  assetsDir: 'static',

  devServer: {
    proxy: { // 代理服务器接口
      '/api': {
        target: 'http://localhost:4000',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: { // 配置webpack
    plugins: []
  },

  chainWebpack: config => { // 配置webpack别名，加载器，规则所有属性
    config.resolve.alias
      .set('@', resolve('src'))
  },
  productionSourceMap: process.env.NODE_ENV === 'development' ? true : false,

  css: {
    sourceMap: process.env.NODE_ENV === 'development' ? true : false
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
