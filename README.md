# aliceblog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 3.27日

##### 前端 Vuejs

完成登录界面

css 参考采用grid网格布局， 实际采用flex布局

​        响应式布局采用rem,以37.5为基准

用到的npm包

字体库：icomoon

组件：element-ui

请求发送：axios  

为了避免请求代码冗杂，创建axios时，封装了一个全局baseAPI，将服务器的ip地址放入

const request = axios.create({

​    baseURL: "http://localhost:3007/",

}

​			

##### 数据库部分 MySql

建立blog数据库: article(有待商榷是否删除) host

##### 后端部分 nodejs 简易开发

封装登录接口

包：mysql：主要用于数据操作

​        bcryptjs：用于传输过来的密码加密

实践问题

①vue向服务器发送遇到跨域问题

解决方案：1、前端可采用代理服务器解决

​			在vue.config.js中配置 devServer: {

​      				  //开启代理服务器 方式一

​       				 proxy: 'http://localhost:3007/'

   				},

​                   2、 后端在服务器装上cors插件，修改请求头内容

②解析从前端传入的POST请求body中的数据时以数据流的形式传输，会出现后端拿数据空白的情况

解决方案：通过接收流来拿到数据

​		 安装插件 npm i body-parser

​			        引入

​			      const bodyParser = require('body-parser')

​				注册解码

​			     app.use(bodyParser.urlencoded({ extended: false }))

​			      app.use(bodyParser.json())

​			

### 3.28日

##### 前端

完成路由模块 

主要步骤：安装vue-route插件，全局注册

​		    需要有展示的地方使用<router-view></router-view>

遇到棘手的问题：

vue3不指出element-ui的引入，同时请降低vue-router版本，如果vue-router版本太高会引起Vue冲突

主要完成工作

##### 后端

①完成身份加密，传回token，存入本地存储中

主要步骤：安装jsonwebtoken包

​			全局添加加密钥匙

​			module.exports = {

​				//加密密钥

  				  jweSecretKey: 'alicekey',

​				//有效时长

   				 expiresIn: '10h',

​				}

​		并在app.js中引入

​		 const token=require('jsonwebtoken')

​		  // if (hostinfo.password != results[0].password) return res.send({ success: -1 })

​               const host = {...results[0], password: '' }

​                // 使用签名机制

​             	 const tokenStr = jwt.sign(host, config.jweSecretKey, {

​                      expiresIn: config.expiresIn

​             })

