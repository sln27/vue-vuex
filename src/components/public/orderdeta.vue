<template>
<div id="peojectbox">
    <section>
        <header>
            <header-vue :titname=titname :pathurl="$route.path"></header-vue>
        </header>
        <div class="particmain">
            <div class="partictheme">
                <div class="themelt">
                    <p class="themetit"><span class="themenum">订单编号</span><span class="detanum">MH5807111046523</span></p>
                    <p class="themeltpri">保险金额: <span>￥100</span></p>
                    <p class="themeltpri" style="margin-bottom:0;">支付方式: 微信</p>
                </div>
                <div class="themert"><i></i><span>退款成功</span></div>
            </div>
            <div class="partictheme particthe">
                <p class="particnum">保单号：AJN01151DSADASFDSAFKM</p>
                <p class="particmation"><img src="../../../static/images/order_img2.jpg"><span>太空年期航空意外保障</span><span class="mationprice">￥100</span></p>
            </div>
            <p class="ptit">投保人信息</p>
            <div class="partictheme particthe">
                <p class="particnum"><span>赵娜</span><span>18501286541</span></p>
                <p class="particredent"><span class="crelt">证件类型</span><span class="crert">身份证</span></p>
                <p class="particredent"><span class="crelt">证件号</span><span class="crert">132169841531874561</span></p>
                <p class="particredent"><span class="crelt">出生日期</span><span class="crert">19821025</span></p>
            </div>
            <p class="ptit">被保人信息</p>
            <div class="partictheme particthe">
                <p class="particlegal particredent"><span class="crelt">法定受益人</span><span class="crert">法定继承人</span></p>
                <p class="particlegal particredent"><span class="crelt">与被保人关系</span><span class="crert">本人</span></p>
            </div>
        </div>
    </section>
    <button id="particfoo">电子保单</button>
    <customer-vue></customer-vue>
</div>
</template>

<script>
import headerVue from './header'
import customerVue from './customer'
import axios from 'axios'
export default {
    data(){
        return{
            titname:"订单详情",
            resdata:null
        }
    },
    components:{headerVue,customerVue},
    mounted(){
        axios({
            url:"",
            method:"",
            data:{}    
        }).then(function(result){
            
        }).catch(function(err) {
            console.info(err)
        })
    },
    computed: {},
    methods:{}
}
</script>

<style>

</style>
