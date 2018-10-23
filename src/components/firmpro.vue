<template>
    <div id="peojectbox">
        <section>
            <header>
                <header-vue :titname=titname :pathurl="$route.path"></header-vue>
            </header>
            <div class="firmmain">
                <img src="http://www.auib.com.cn:80/Admin/pic/74971023.jpg">
                <p class="infortit">安心国内出行保障计划</p>
                <div class="firmDaTe">
                    <p class="fillclass"><span class="fillsp">证件号码</span><span class="filldata">2018-12-31</span></p>
                    <p class="fillclass"><span class="fillsp">出生日期</span><span class="filldata">2019-01-05</span></p>
                    <p class="fillclass"><span class="fillsp">保障计划</span><span class="filldata">3</span></p>
                </div>
                <div class="firmDaTe">
                    <p class="fillcli">投保人信息</p>
                    <p class="fillclass"><span class="fillsp">姓名</span><span class="filldata firmpro">啊啊啊</span></p>
                    <p class="fillclass"><span class="fillsp">证件号码</span><span class="filldata firmpro">371522199806152356</span></p>
                    <p class="fillclass"><span class="fillsp">出生日期</span><span class="filldata firmpro">20100910</span></p>
                    <p class="fillclass"><span class="fillsp">手机号码</span><span class="filldata firmpro">15139567114</span></p>
                    <p class="fillclass"><span class="fillsp">证件类型</span><span class="filldata firmpro">身份证</span></p>
                </div>
                <!-- 被保人信息 -->
                <div class="firmlicantbox">
                    <div class="firmlicant">
                        <p class="fillcli">被保人信息</p>
                        <p class="fillclass"><span class="fillsp">姓名</span><span class="filldata firmpro">啊啊啊</span></p>
                        <p class="fillclass"><span class="fillsp">证件号码</span><span class="filldata firmpro">371522199806152356</span></p>
                        <p class="fillclass"><span class="fillsp">出生日期</span><span class="filldata firmpro">20100910</span></p>
                        <p class="fillclass"><span class="fillsp">手机号码</span><span class="filldata firmpro">15139567114</span></p>
                        <p class="fillclass filbot"><span class="fillsp">证件类型</span><span class="filldata firmpro">身份证</span></p>
                    </div>
                    <div class="firmlicant">
                        <p class="fillcli">被保人信息</p>
                        <p class="fillclass"><span class="fillsp">姓名</span><span class="filldata firmpro">啊啊啊</span></p>
                        <p class="fillclass"><span class="fillsp">证件号码</span><span class="filldata firmpro">371522199806152356</span></p>
                        <p class="fillclass"><span class="fillsp">出生日期</span><span class="filldata firmpro">20100910</span></p>
                        <p class="fillclass"><span class="fillsp">手机号码</span><span class="filldata firmpro">15139567114</span></p>
                        <p class="fillclass"><span class="fillsp">证件类型</span><span class="filldata firmpro">身份证</span></p>
                    </div>
                    <p class="getCode"><span>短信验证码</span><input id="verCode" type="text" placeholder="短信验证码"><button id="firmbtn">获取验证码</button></p>
                </div>
                <div class="confiradio">
                    <input @change="isagreed($event)" type="checkbox" id="confircheck" checked>
                    <p>我已认真阅读投保须知和<router-link to="">投保条款</router-link></p>
                </div>
            </div>
        </section>
        <div class="detailedpay">
            <div class="paylt">总额￥<span>100</span></div>
            <div class="payrt" @click="subPay">提交订单</div>
        </div>
        <customer-vue></customer-vue>
    </div>
</template>

<script>
import customerVue from './public/customer'
import headerVue from './public/header'
export default {
    data(){
        return{
            titname:"安心国内出行保障计划"
        }
    },
    components:{headerVue,customerVue},
    mounted () {
        
    },
    methods: {
        isagreed:function(e){
            var ev=e.target;
            if(ev.checked==false){
                alertWarning("请确认阅读投保须知和投保条款!");
            }
        },
        /* 提交 */
        subPay:function(){
            var confircheck=document.getElementById("confircheck");
            var verCode=document.getElementById("verCode");
            if(confircheck.checked==false){
                alertWarning("请确认阅读投保须知和投保条款!");
            }else if(!verCode.value){
                alertWarning("验证码不能为空!");
            }else{
                alertWarning("提交success!");
            }
        }
    }
}
</script>

<style>

</style>
