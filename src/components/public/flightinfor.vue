<template>
    <div id="peojectbox">
        <section>
            <header>
                <header-vue :titname=titname :pathurl="$route.path"></header-vue>
            </header>
            <div class="fightmain">
                <div class="fightbox">
                    <p><span class="fightcli">旅客姓名:</span><span class="fightpro">汪汪汪CHD</span></p>
                    <p><span class="fightcli">证件号:</span><span class="fightpro fightcor">14100220130914032</span></p>
                    <p><span class="fightcli">机票票号:</span><span class="fightpro">7842361876858</span></p>
                </div>
                <div class="fightbox">
                    <p><span class="fightcli">航班号:</span><span class="fightpro">CZ3199</span></p>
                    <p><span class="fightcli">航班日期:</span><span class="fightpro">20180917</span></p>
                    <p><span class="fightcli">出发地:</span><span class="fightpro">CAN</span></p>
                    <p><span class="fightcli">目的地:</span><span class="fightpro">LFQ</span></p>
                    <input type="checkbox" class="choosefight">
                </div>
                <div class="fightfill">
                    <p class=""><span>手机号码</span><input type="text" placeholder="请输入您的手机号"></p>
                    <p><span>出生日期</span><b>20130914</b></p>
                </div>
            </div>
        </section>
        <customer-vue></customer-vue>
        <div class="detailedpay">
            <div class="paylt">总额￥<span>30</span></div>
            <div class="payrt">确定</div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import headerVue from './header'
import customerVue from './customer'
import Axios from 'axios';
export default {
    data(){
        return{
            titname:"航班信息",
        }
    },
    components:{headerVue,customerVue},
    mounted(){

    },
    methods:{
    }
}
</script>

<style>

</style>
