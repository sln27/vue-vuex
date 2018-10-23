<template>
    <div id="peojectbox">
        <section>
            <header>
                <header-vue :titname=titname :pathurl="$route.path"></header-vue>
            </header>
            <div class="detailedmain">
                <img src="http://www.auib.com.cn/Admin/pic/65305361.jpg">
                <div class="detailedthe">
                    <p>安心30元托运行李保障</p>
                    <div class="thecontact">
                        <p class="thelt">
                            产品及理赔咨询请拨打客服专线：<br><a href="tel:4008102688">4008102688</a>
                        </p>
                        <img src="http://www.auib.com.cn:80/Admin/pic/96886563.jpg" >
                    </div>
                </div>
                <p class="detaprice">￥30</p>
                <div class="security">
                    <p class="securp">保障责任</p>
                    <div class="securitybox" v-for="(item,securIndex) in securs" :key="securIndex" :securID="item.securID" @click="isdatashow($event,item)" :class="{'rotatesecur':item.secur}">
                        <p class="cations">
                            <span class="securlt">{{item.securtit}}</span>
                            <span class="securrt">{{item.securprice}}<i></i></span>
                        </p>
                        <transition enter-active-class="animated zoomIn">
                            <p class="cationpro"></p>
                        </transition>
                    </div>
                </div>
                <div class="detailedprompt">
                    <ul class="detailedul">
                        <li @click="clidetashow"><span>投保须知</span><img src="http://www.auib.com.cn/auibInsurance/images/insurance_icon1.jpg"></li>
                        <li @click="clidetashow"><span>产品条款</span><img src="http://www.auib.com.cn:80/auibInsurance/images/insurance_icon1.jpg"></li>
                        <li @click="clidetashow"><span>常见问题</span><img src="http://www.auib.com.cn:80/auibInsurance/images/insurance_icon1.jpg"></li>
                    </ul>
                </div>
            </div>
        </section>
        <customer-vue></customer-vue>
        <div class="detailedpay">
            <div class="paylt">总额￥<span>30</span></div>
            <div class="payrt" @click="quickBuy">快速购买</div>
        </div>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="popwindow detailedpop" v-show="detailedpop">
                <div class="detailedtop">
                    <div class="detailedbox">
                        <p class="popchange detailedtit">投保须知</p>
                        <div class="detailedpro">
                        <ul>
                            <li>1、本保险产品为航空托运行李险，由安心财产保险有限责任公司承保，由航联保险销售有限公司面向全国销售。</li>
                            <li>2、根据中国保险监督管理委员会的批复，安心财产保险有限责任公司作为互联网专业保险公司，在中华人民共和国境内（港、澳、台地区除外）开展与互联网交易直接相关的保险业务，不设分支机构。</li>
                            <li>3、本保险产品备案号:《托运行李丢失延误保险条款(2016版)》安心财险发[2016] (安心财险)(备-普通家财险)【2016】(主) 043号</li>
                            <li>4、本保险产品适用人群：18周岁以上；</li>
                            <li>5、 本产品承担被保险人搭乘航班时，托运行李发生丢失、延误、破损的赔偿责任，不限行李件数；</li>
                            <li>6、每航次每人限投保一份，多投无效； </li>
                            <li>7、行李延误赔付限额300元，行李破损按破损情况最高赔付800元，本保险累计赔付限额为800元；</li>
                            <li>8、保险费及退保金支付方式：1）借记卡；2）支付宝；3）财付通等；</li>
                            <li>9、本产品退保：本保险产品一旦生效，不支持退保；生效前的退保，请您拨打400-810-2688联系航联客服（客服在线时间：周一至周日9:00-21:00）。</li>
                            <li>10、如实告知：被保险人同意购买且认可保险金额，并已阅读保险条款/费用扣除/退保等在内的重要事项且投保信息填写真实正确，如有隐瞒或不实告知，愿意承担由此带来的法律责任；</li>
                            <li>11、信息安全：航联保险严格遵守现行的关于个人信息、数据及隐私保护的法律法规，采取充分的技术手段和制度管理，保护您提供的个人信息、数据和隐私不受到非法的泄露或披露给未获授权的第三方；</li>
                            <li>12、电子保单及发票：本保险产品采用电子保单形式承保，法律效力等同于纸质保单。电子保单及电子发票可在安心保险官网上查询和下载</li>
                            <li>13、如果投保人需要纸质保单及发票，请拨打客服电话95303。若需寄送，邮费将由投保人自行承担；</li>
                            <li>14、理赔报案请拨打，安心保险全国统一客服专线：95303；</li>
                            <li>15、除外责任：<br><span> 存在下列情形的,保险人不负责赔偿：</span>
                                <span>（一）被保险人持有的客票状态为退票、改签、作废、失效的；</span>
                                <span>（二）被保险人自身原因导致行李丢失或延误的。</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <button class="detailedbot" @click="clidetahide">关闭</button>
        </div>
        </transition>
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
            titname:"安心30元托运行李保障",
            detailedpop:false,
            securs:[],
            securID:false,
            DATATYPE:null
        }
    },
    components:{headerVue,customerVue},
    mounted(){
        var that=this;
        Axios({
            url:'static/json/initialize.json',
            method:"get",
            params:{}
        }).then(function(result){
            that.securs=result.data.security;
        }).catch(function(err){console.log(err)});
        /* 获取url */
        this.DATATYPE=this.$route.query.dataType;
    },
    methods:{
        clidetashow:function(){
            this.detailedpop=true
        },
        clidetahide:function(){
            this.detailedpop=false
        },
        isdatashow:function(e,item){
            if(item.secur){
                Vue.set(item,'secur',false);
            }else{
                Vue.set(item,'secur',true);
            }
        },
        /* 快速购买 */
        quickBuy:function(){
            if(this.DATATYPE==1){
                this.$router.push({
                    path:"/inforfill"
                })
            }else if(this.DATATYPE==0){
                this.$router.push({
                    path:"/banksearch"
                })
            }
        }
    }
}
</script>

<style>

</style>
