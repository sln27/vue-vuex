<template>
<div id="peojectbox">
    <section>
        <div class="main">
            <div class="item" v-for="(item,index) in items" @click="aLink(item.dataID,item.statusType)" to="" :key="index"><img :src="item.imgpath"></div>
        </div>
        <footer id="footer">
            <footer-vue :urlRouter="$route.path"></footer-vue>
        </footer>
    </section>
    <customer-vue></customer-vue>
</div>
</template>

<script>
import axios from 'axios'
import customerVue from './public/customer'
import footerVue from './public/footer'
export default {
    data(){
        return{
            items:[]
        }
    },
    components:{footerVue,customerVue},
    mounted(){
        var that = this;
        axios({
            method: 'get',
            url: 'static/json/initialize.json',
            params:{}
        }).then(function(result) {
            that.items=result.data.index;
        }).catch(function(err) {
            
        })
    },
    methods:{
        aLink:function(id,staType){
            this.$router.push({
                path:'/details',
                query:{
                    ptype:id,
                    statusType:staType
                }
            })
        }
    }
}
</script>

<style>

</style>
