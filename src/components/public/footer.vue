<template>
    <div class="footer">
        <ul class="footerul">
            <li :class="{footerlicor:urlRouter == '/index' || urlRouter == '/'}" ><router-link to="/"><i></i>首页</router-link></li>
            <li :class="{footerlicor:urlRouter == '/product'}" ><router-link to="product"><i></i>产品中心</router-link></li>
            <li><a href="http://www.auib.com.cn:80/auibInsurance/auisProduct/customer_service.html"><i></i>在线客服</a></li>
            <li :class="{footerlicor:urlRouter == '/order'}" ><router-link to="/myorder"><i></i>我的订单</router-link></li>
        </ul>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    props:['urlRouter','usertel'],
    data(){
        return{
            shoucla:false,
        }
    },
    methods:{},
    mounted(){},
    computed: {}
}
</script>

<style>

</style>
