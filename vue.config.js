const path = require('path')
module.exports = {
  chainWebpack: config => {
    // 添加新的svg-sprite-loader处理svgIcon
    config.module
      .rule('svgIcon')
      .test(/\.svg$/)
      .include
      .add(path.join(__dirname, '.', 'src/assets/ioc_svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .tap(options => ({ symbolId: 'icon-[name]' }))
    // 原有的svg图像处理loader添加exclude
    config.module
      .rule('svg')
      .exclude
      .add(path.join(__dirname, '.', 'src/assets/ioc_svg'))
      .end()
  }
}
