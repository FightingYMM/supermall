module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },

  devServer: {
    headers: {
      'Access-Control-Allow-Origin':'*',
    },
    host: '127.0.0.1',
    hotOnly: false,
    disableHostCheck: true, //  新增该配置项
  }
}
