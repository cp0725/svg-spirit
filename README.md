# svg-spirit
> 快速在项目中使用svg图标


### Step 1 安装依赖
`npm install svg-spirit --save-dev`         
`npm install svg-sprite-loader --save-dev`


### Step 2 注册svg-spirit
```
main.js
import svgSpirit from 'svg-spirit'
Vue.use(svgSpirit, /* 'Icon' */)
```


### Step 3 修改webpack配置
```
vue.config.js
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
```


### Step 4 把svg图标文件拷贝到 `/src/assets/ioc_svg/edit.svg`

### Step 5 使用Icon
```
<Icon class="edit" icon="edit" />
```


### Step 6 调整大小以及颜色
```
.edit{
  width: 50px;
  height: 50px; 
  filter: drop-shadow(0 60px blue);
  top: -60px;
  position: relative;
}
```