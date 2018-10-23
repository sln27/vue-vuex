<template>
    <div id="peojectbox">
        <section>
            <header>
                <header-vue :titname=titname :pathurl="$route.path"></header-vue>
            </header>
            <div class="productmain">
                <ul class="productul">
                    <li @click="enterdetail(item.state,item.nextlevel)" v-for="(item,index) in items" :key="index">
                        <div class="productop">
                            <img :src="item.imgpath">
                            <div>
                                <p class="pone">{{item.pone}}</p>
                                <p class="ptwo">{{item.ptwo}}</p>
                            </div>
                        </div>
                        <div class="productbot">
                            <img src="http://www.auib.com.cn/Admin/pic/96886563.jpg">
                            <p>产品报价<span class="prospan">￥</span><span>{{item.price}}</span><span class="prospan">起</span></p>
                        </div>
                    </li>
                </ul>
            </div>
            <footer id="footer">
                <footer-vue :urlRouter="$route.path"></footer-vue>
            </footer>
        </section>
        <customer-vue></customer-vue>
    </div>
</template>

<script>
import headerVue from './public/header'
import customerVue from './public/customer'
import footerVue from './public/footer'
export default {
    data(){
        return{
            titname:"产品中心",
            items:[
                {"imgpath":"http://www.auib.com.cn:80/Admin/pic/68942327.jpg","pone":"安心30元托运行李保...","ptwo":"保障托运行李丢失、延误、破损...","price":"30","state":"10010","nextlevel":1}
            ]
        }
    },
    components:{headerVue,footerVue,customerVue},
    mounted(){
        console.log(this.$route.path)
    },
    methods:{
        enterdetail:function(state,level) {
            console.log(state,level);
            this.$router.push({
                path:"/detailed",
                query:{
                    typety:state,
                    dataType:level
                }
            })
        }
    }
}
</script>

<style>

</style>
