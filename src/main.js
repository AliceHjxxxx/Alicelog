import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'

// 字体样式
import './assets/styles/icon.scss'
import './assets/styles/global.scss'

// 组件样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter)


new Vue({
    render: h => h(App),
    router,

}).$mount('#app')