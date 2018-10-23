<template>
    <div id="peojectbox">
        <section>
            <div class="details">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,itemIndex) in items" :key="itemIndex" :data-id="item.dataID" :data-type="item.dataType" @click="getlinkDetaed(item.dataID,item.dataType)">
                            <img :src="item.detaimg">
                            <p><i class="swipericon"></i><span class="text">{{item.detatit}}</span></p>
                            <div class="swipercopy">{{item.detapro}}</div>
                            <div class="price"><p><span>{{item.detaprice}}</span>元起</p></div>
                        </div>
                    </div>
                    <!-- 查看详情-->
                    <div class="todeta"  @click="checkdeta()">查 看 详 情 </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            items:[],
            mySwiper:null
        }
    },
    methods:{
        checkdeta:function(){
            var swiperSlide= document.getElementsByClassName("swiper-slide");
            console.log(swiperSlide[this.mySwiper.activeIndex].getAttribute("data-id"));
            var dataID=swiperSlide[this.mySwiper.activeIndex].getAttribute("data-id");
            var dataType=swiperSlide[this.mySwiper.activeIndex].getAttribute("data-type");
            if(swiperSlide.length>0){
                this.$router.push({path:'/detailed',query:{dataId:dataID,dataType:dataType}});
            }
        },
        getlinkDetaed:function(dataID,dataType){
            this.$router.push({path:'/detailed',query:{dataId:dataID,dataType:dataType}});
        }
    },
    mounted(){
        /** 顶部滑动轮播 */
        this.mySwiper = new Swiper ('.swiper-container', {
                slidesPerView: 'auto',   //设置slider容器能够同时显示的slides数量
                centeredSlides: true,    //设定为true时，活动块会居中，而不是默认状态下的居左。
                speed: 500,
                noSwiping: false,        //设置为true时禁止切换
                effect :'coverflow',
                paginationClickable: false,
                autoplayDisableOnInteraction: false,
                observer: true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,//修改swiper的父元素时，自动初始化swiper
                pagination : '.swiper-pagination',// 如果需要分页器
                paginationType : 'bullets',
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows : true
                }
        })        
        var ptype =this.$route.query.ptype;
        var that=this;
        axios({
            url:"static/json/initialize.json",
            method:"get",
            params:{
                ptype : ptype
            }
        }).then(function(result){
            console.log(result);
            that.items=result.data.details
        }).catch(function(err){
            alert(err)
        })
    }
}
</script>

<style>

</style>
