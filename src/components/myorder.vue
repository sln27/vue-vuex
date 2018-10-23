<template>
    <div id="peojectbox">
        <section>
            <header>
                <header-vue :titname=titname :pathurl="$route.path"></header-vue>
            </header>
            <div class="myordermain">
                <ul class="mymainul">
                    <li>
                        <div class="mymaintit">
                            <img src="http://www.auib.com.cn:80/Admin/pic/96886563.jpg">
                            <p><i></i><span>未支付</span></p>
                        </div>
                        <div class="particmation mymainmid">
                            <img src="../../static/images/order_img2.jpg"><span>前海30元航空意外保障计划</span><i class="myarrow"></i>
                        </div>
                        <div class="mymainbot">
                            <p>保险金额<span>￥30</span></p>
                            <router-link to="">查看订单</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <customer-vue></customer-vue>
    </div>
</template>

<script>
import customerVue from './public/customer'
import headerVue from './public/header'
export default {
    data(){
        return{
            titname:"我的订单"
        }
    },
    components:{headerVue,customerVue},
}
</script>

<style>

</style>
