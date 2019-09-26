import Icon from './Icon'
export default {
  install(Vue, componentsName = 'Icon') {
    const req = require.context('@/assets/ioc_svg', false /* 不查询子目录 */, /\.svg$/)
    req.keys().map(req)
    Vue.component(componentsName, Icon)
  }
}