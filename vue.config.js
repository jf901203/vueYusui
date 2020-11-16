
const webpack = require("webpack");

module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 9999,
    proxy: {
      "/xboot": {
        target: "http://127.0.0.1:8888", // 请求本地 需要xboot后台项目
        ws: true
      },
      "/foo": {
        target: "<other_url>"
      }
    }
  },

  configureWebpack: {
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
          })
    ]
  },
  // 打包时不生成.map文件 避免看到源码
  productionSourceMap: false
};
