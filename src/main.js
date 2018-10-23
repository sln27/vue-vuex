// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/store'
import router from './router'
import ElementUI from 'element-ui';
import flex from '../static/js/flex'
import 'element-ui/lib/theme-chalk/index.css';
import babelPoly from 'babel-polyfill'
import NYMask from '../static/js/NYMask'
import animateCss from '../static/css/animate.css'
import publicCss from '../static/css/public.css'
import NYMaskCss from '../static/css/NYMask.css'
import peonyCss from '../static/css/peony.css'
import swiperCss from '../static/css/swiper.min.css'
import swiperJs from '../static/js/swiper.min.js'

Vue.use(ElementUI)
Vue.config.productionTip = false




/* 全局守卫 */
/*router.beforeEach((to,from,next)=>{
    var statue=store.state.LoginedUser.tel= sessionStorage.getItem('tel');
    if(to.meta.requireAuth){
      if(statue!==""||statue!==null||statue!=="undefined"){
          next()
      }else{
          alert("未登录")
          next({path: '/order'})
      }
    }else{
      next();
    }
})*/


/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router
}).$mount("#app");
