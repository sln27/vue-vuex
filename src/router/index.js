import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
/** 首页 index.vue */
import index from '@/components/index'
/* 产品中心 Product.vue */
import product from '@/components/product'
/*我的订单 order.vue */
import order from '@/components/order'
/* footer.vue   底部table */
import footerBot from '@/components/public/footer'
/* details.vue  详情页面 */
import details from '@/components/public/details'
/* detailed.vue  */
import detailed from '@/components/public/detailed'
/* 公用头部  header.vue */
import header from '@/components/public/header'
/* 我的订单  myorder.vue */
import myorder from '@/components/myorder'
/* 票号查询  banksearch.vue */
import banksearch from '@/components/public/banksearch'
/*客服  */
import customer from '@/components/public/customer'
/* 保单信息填写  information.vue */
import information from '@/components/information'
/*  订单详情  orderdeta.vue */
import orderdeta from '@/components/public/orderdeta'
/*  出行保障计划  inforfill.vue */
import inforfill from '@/components/inforfill'
/* 保单信息确认  firmpro.vue */
import firmpro from '@/components/firmpro'
import Axios from '../../node_modules/axios';
import flightinfor from '@/components/public/flightinfor'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'index',component: index},
    {path:'/inforfill',name:'inforfill',component: inforfill},
    {path:'/product',name:'product',component: product},
    {path:'/order',name:'order',component: order},
    {path:'/details',name:'details',component: details},
    {path:'/detailed',name:'detailed',component: detailed},
    {
      path:'/myorder',
      name:'myorder',
      component:myorder,
      beforeEnter:(to,from,next)=>{ //导航守卫
        if(store.state.token==1 && sessionStorage.getItem("iphone")!="undefined"){
          console.log('用户已经登录');
          next();
        }else{
          console.log('用户未登录');
          next({path: '/order'});
        }
      }
    },
    {path:'/banksearch',name:'banksearch',component:banksearch},
    {path:"/information",name:"information",component:information},
    {path:"/orderdeta",name:"orderdeta",component:orderdeta},
    {path:"/firmpro",name:"firmpro",component:firmpro},
    {path:"/flightinfor",name:"flightinfor",component:flightinfor}
  ]
})
