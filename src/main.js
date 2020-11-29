import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store/store";

import toast from 'components/common/toast'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// 安装toast插件
Vue.use(toast)

// 解决移动端300ms延时
FastClick.attach(document.body,)

//使用懒加载的插件
Vue.use(VueLazyLoad,{
  //  占位图
  loading: require('./assets/img/common/placeholder.png')

})

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store,

}).$mount('#app')
