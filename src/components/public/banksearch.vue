<template>
    <div id="peojectbox">
        <section>
            <header>
                <header-vue :titname=titname :pathurl="$route.path"></header-vue>
            </header>
            <div class="bankmain">
                <p class="bankmainlt">销量：7</p>
                <p class="bankmainrt">￥30</p>
            </div>
            <div class="bankpro">
                <p class="bankprolt">航班信息</p>
                <p class="bankprort">如何找到机票票号？</p>
            </div>
            <div class="bankselect">
                <label for="bank">搜索类型</label>
                <select name="" id="bank">
                    <option value="">机票票号</option>
                </select>
            </div>
            <p id="banknum">
                <span>机票票号</span>
                <input type="text" placeholder="请输入机票票号">
            </p>
            <button id="getpro"  @click="clishow">航班信息提取</button>
        </section>
        <customer-vue></customer-vue>
        <!-- 蒙版 弹窗 -->
        <div class="popwindow" v-show="getform">
            <transition enter-active-class="animated zoomInLeft">
                <div class="popbox" v-show="getform">
                    <p class="poptop popchange">信息</p>
                    <p class="poptit popchange">请输入机票票号</p>
                    <p class="popchange popwin"><span @click="clihide">确定</span></p>
                </div>
            </transition>
        </div>
    </div>
</template>
/* getLocationUrl()+"/product/GoInsurance?PRODUCT_ID="+productId; */
<script>
import headerVue from './header'
import customerVue from './customer'
export default {
    data(){
        return{
            titname:"票号搜索",
            getform:false
        }
    },
    components:{headerVue,customerVue},
    methods:{
        clishow:function(){
            this.getform=true
        },
        clihide:function(){
            this.getform=false;
            this.$router.push({
                path:"/flightinfor"
            })
        }
    },
    mounted(){}
}
</script>

<style>

</style>
