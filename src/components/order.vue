<template>
<div id="peojectbox">
    <section>
        <header>
            <header-vue :titname=titname :pathurl="$route.path"></header-vue>
        </header>
        <div class="ordermain">
            <input type="tel" maxlength="11" placeholder="请输入手机号" id="tel" ref="tel">
            <div class="code">
                <input type="text" name="" id="code" placeholder="短信验证码" ref="code" maxlength="4">
                <button id="getcode" @click="cligetcode">获取验证码</button>
            </div>
            <div class="login">
                <button type="button" id="login" @click="login">快速登录</button>
            </div>
        </div>
        <footer id="footer">
            <footer-vue :urlRouter="$route.path" :usertel="usertel"></footer-vue>
        </footer>
    </section>
    <customer-vue></customer-vue>
    <!--蒙版层 -->
    <div class="popwindow" v-show="showpop" @click="clihide">
        <p>{{prompt}}</p>
    </div>
    <!-- loading -->
    <div class="loading" v-show="setload">
        <div id="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</div>
</template>

<script>
import headerVue from './public/header'
import customerVue from './public/customer'
import footerVue from './public/footer'
import axios from 'axios'
import { mapActions,mapState } from 'vuex'
export default {
    data(){
        return{
            titname:"快捷登录",
            prompt:"",
            showpop:false,
            setload:false,
            fa:true,
            time:null,
            time2:null,
            orderlogin:"",
            usertel:null
        }
    },
    components:{footerVue,headerVue,customerVue},
    mounted(){
        if(sessionStorage.getItem("iphone")=="undefined" || sessionStorage.getItem("iphone")=="" || sessionStorage.getItem("iphone")==null){
            this.$router.push({
                path:"/order"
            })
        }else{
            var that=this;
            var tel=sessionStorage.getItem("iphone")
            axios({
                    url:"static/json/initialize.json",
                    method:"get",
                    data:{}
                }).then(function(result){
                    that.$store.commit('LOGIN_USER',{token:1,tel:tel});
                    that.usertel=tel;
                    that.$router.push({
                        path:"/myorder"
                    })
                }).catch(function(err){
                    alert(err)
                })
        }
    },
    computed: {},
    methods:{
        login:function(){
            var reg=/^[1][3,4,5,7,8][0-9]{9}$/;
            var that=this;
            var tel=this.$refs.tel.value;
            var code = this.$refs.code.value;
            if(!reg.test(tel)){
                this.prompt="请输入手机号！";
                this.showpop=true;
                this.time=setInterval(function(){
                    that.showpop=false;
                    clearInterval(that.time)
                },3000)
            }else{
                axios({
                    url:"static/json/initialize.json",
                    method:"get",
                    data:{}
                }).then(function(result){
                    console.log(tel)
                    that.$store.commit('LOGIN_USER',{token:1,tel:tel});
                    that.usertel=tel;
                    that.$router.push({
                        path:"/myorder"
                    })
                }).catch(function(err){
                    alert(err)
                })
            }
        },
        // 点击蒙版 消失
        clihide:function(){
            this.prompt="";
            this.showpop=false;
            clearInterval(this.time)
        },
        //点击获取验证码
        cligetcode:function(){
            var that=this
            if(this.fa){
                that.fa=false;
                var reg=/^[1][3,4,5,7,8][0-9]{9}$/;
                var that=this;
                var tel=this.$refs.tel.value;
                if(!reg.test(tel)){
                    this.prompt="请输入有效手机号！";
                    this.showpop=true;
                    setInterval(function(){
                        that.showpop=false;
                    },3000)
                }else{
                    that.time2=setInterval(function(){
                        that.fa=true;
                        clearInterval(that.time2)
                    },6000)
                }
            }
        }
    }
}
</script>

<style>

</style>
