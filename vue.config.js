
// vue.config.js
module.exports = {
  runtimeCompiler: true,
  lintOnSave: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'vue-svg-sprite-loader',
              options: {
                removeTitle: true
              }
            }
          ]
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .test(() => false)
      .use('file-loader')
  }
}
