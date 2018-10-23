<template>
    <div id="peojectbox">
        <section>
            <header id="fillhea">
                <header-vue :titname=titname :pathurl="$route.path"></header-vue>
                <b v-show="rmDele" @click="rmLicant"></b>
            </header>
            <div class="inforfillmain">
                <img src="http://www.auib.com.cn:80/Admin/pic/70699520.jpg">
                <p class="infortit">安心全球出行保障计划</p>
                <div class="inforage"><span class="fimainlt">投保年龄</span><p class="fimainrt" @click="chooseAGE"><span ref="fillage">{{age}}</span></p></div>
                <div class="inforage"><span class="fimainlt">保障期限</span><p class="fimainrt" @click="chooselimit"><span ref="limitfill">{{limit}}</span></p></div>
                <div class="fillcontent">
                    <p class="fillclass"><span>起保日期</span><el-date-picker ref="startDate" @change="chooseDate()" v-model="value1" type="date" placeholder="选择日期"></el-date-picker></p>
                    <p class="fillclass"><span>截止日期</span><span ref="endDate" class="fillrt">{{endDate}}</span></p>
                </div>
                <div class="fillcontent">
                    <p class="fillcli">投保人信息</p>
                    <p class="fillclass"><span class="fillsp">姓名</span><input @blur="leaveName($event)" ref="holderName" type="text" class="filldata"></p>
                    <p class="fillclass"><span class="fillsp">证件类型</span>
                        <select name="" id="" @change="chooseID($event)" ref="holderID">
                            <option value="1">身份证</option>
                            <option value="0">护照</option>
                        </select>
                    </p>
                    <p class="fillclass"><span class="fillsp">证件号码</span><input ref="holderNum" @blur="leaveIdNUm($event)" type="text" class="filldata" maxlength="18"></p>
                    <p class="fillclass"><span class="fillsp">出生日期</span><input ref="holderStartDate" @blur="leaveStartDate($event)" type="text" class="filldata" maxlength="8"></p>
                    <p class="fillclass"><span class="fillsp">手机号码</span><input ref="holderTel" @blur="leaveTel($event)" type="text" class="filldata" maxlength="11"></p>
                </div>
                <!-- 被保人信息填写 start -->
                <div class="fillcontent licantfill" v-for="(item,licantIndex) in licants" :key="licantIndex">
                    <p class="fillcli">被保人信息</p>
                    <p class="fillclass"><span class="fillsp">证件类型</span>
                        <select @change="leaveLicantID($event)">
                            <option value="1">本人</option>
                            <option value="0">他人</option>
                        </select>
                    </p>
                    <p class="fillclass"><span class="fillsp">姓名</span><input ref="" type="text" class="filldata"></p>
                    <p class="fillclass"><span class="fillsp">证件类型</span>
                        <select>
                            <option value="1">身份证</option>
                            <option value="0">护照</option>
                        </select>
                    </p>
                    <p class="fillclass"><span class="fillsp">证件号码</span><input @blur="leaveLicantNum($event)" type="text" class="filldata" maxlength="18"></p>
                    <p class="fillclass"><span class="fillsp">出生日期</span><input type="text" class="filldata" maxlength="8"></p>
                    <p class="fillclass"><span class="fillsp">手机号码</span><input type="text" class="filldata" maxlength="11"></p>
                </div>
                <!-- 被保人信息填写  end -->
                <button id="fillbtn" @click="addLicant">+添加被保人信息</button>
            </div>
        </section>
        <customer-vue></customer-vue>
        <div class="detailedpay">
            <div class="paylt">总额￥<span>{{Number(agePrice)+Number(limitPrice)}}</span></div>
            <div class="payrt" @click="subNext()">下一步</div>
        </div>
        <!-- 选择年龄 天数弹窗 -->
        <div class="choosepop" v-show="ischoose">
            <div class="choosecli">
                <transition enter-active-class="animated bounceIn">
                    <ul class="chooseul"  v-show="ischoose">
                        <li @click="chooseVAL($event)" v-for="(fill,fillIndex) in DATAFILL" :key="fillIndex" :data-id="fill.cantID" :data-stus="fill.licantStus" :data-price="fill.dataPrice">{{fill.licant}}</li>
                    </ul>
                </transition>
            </div>
            <button id="popbtn" @click="(ischoose=false)">取消</button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import headerVue from './public/header'
import customerVue from './public/customer'
import Axios from 'axios';
export default {
    data(){
        return{
            titname:"安心申根出行保障计划",
            value1:"",
            ischoose:false,
            licants:1,
            rmDele:false,
            SUMDATA:null,
            DATAFILL:null,
            age:"",
            limit:"",
            agePrice:null,
            limitPrice:null,
            endDate:null
        }
    },
    components:{headerVue,customerVue},
    mounted(){
        var that=this;
        Axios({
            url:"static/json/initialize.json",
            method:"get",
            params:{}
        }).then(function(result){
            that.SUMDATA=result.data.licantData;
            that.age=result.data.licantData.dataAge[0].licant;
            that.limit=result.data.licantData.dataLimit[0].licant;
            that.agePrice=result.data.licantData.dataAge[0].dataPrice;
            that.limitPrice=result.data.licantData.dataLimit[0].dataPrice;
        }).catch(function(err){console.log(err)});
        this.value1=new Date();
        var initialDate=this.returnDate(this.value1);
        this.endDate=this.addDate(initialDate,6);
    },
    methods:{
        /* 点击下一步 提交 */
        subNext:function(){
           /**
            * 
            * 获取年龄 日期  投保人信息
            * 
            */
           /**
            * 获取年龄 日期
            */
           var getAge=this.$refs.fillage.innerHTML;
           var getLimit=this.$refs.limitfill.innerHTML;
           var starGetDate=this.$refs.startDate.value;
           var endDate=this.$refs.endDate.innerHTML;
           /**
            * 获取投保人信息
            */
           var holderName = this.$refs.holderName.value;
           var holderID = this.$refs.holderID.value;
           var holderNum = this.$refs.holderNum.value;
           var holderStartDate = this.$refs.holderStartDate.value;
           var holderTel = this.$refs.holderTel.value;
           var licantfill=document.getElementsByClassName("licantfill");
           var DATAarr=[];
           if(!holderName){
               alertWarning('请填写投保人姓名!');
                return;
           }else if(!holderNum){
               alertWarning('请填写投保人证件号码!');
                return;
           }else if(!holderStartDate){
               alertWarning('投保人出生日期不能为null!');
                return;
           }else if(!holderTel){
               alertWarning('投保人手机号不能为null!');
                return;
           }else if(licantfill){
               /**
                * 获取被保人信息
                */
                for(var q=0;q<licantfill.length;q++){
                    for(var t=q;t<licantfill.length-1;t++){
                        if(licantfill[q].children[1].children[1].value=="1"&&licantfill[t+1].children[1].children[1].value=="1"){
                            if(licantfill[q].children[1].children[1].value==licantfill[t+1].children[1].children[1].value){
                                    alertWarning('1同一人不能被保多次!');
                                    return;
                            }
                        }else if(licantfill[q].children[4].children[1].value&&licantfill[t+1].children[4].children[1].value){
                            if(licantfill[q].children[4].children[1].value==licantfill[t+1].children[4].children[1].value){
                                    alertWarning('2同一人不能被保多次!');
                                    return;
                                }
                        }
                    }
                    if(!licantfill[q].children[2].children[1].value){
                        alertWarning('被保人姓名不能为null!');
                        return;
                    }else if(!licantfill[q].children[4].children[1].value){
                        alertWarning('被保人证件号码不能为null!');
                        return;
                    }else if(!licantfill[q].children[5].children[1].value){
                        alertWarning('被保人出生日期不能为null!');
                        return;
                    }else if(!licantfill[q].children[6].children[1].value){
                        alertWarning('被保人手机号不能为null!');
                        return;
                    }else{
                        var licantData=new Object();
                        licantData.licantWeen=licantfill[q].children[1].children[1].value;
                        licantData.licantName=licantfill[q].children[2].children[1].value;
                        licantData.licantID=licantfill[q].children[3].children[1].value;
                        licantData.licantNum=licantfill[q].children[4].children[1].value;
                        licantData.licantStartDate=licantfill[q].children[5].children[1].value;
                        licantData.licantTel=licantfill[q].children[6].children[1].value;
                        DATAarr.push(licantData);
                    }
                }
           }
           console.log(DATAarr);
           this.$router.push({
               path:"/firmpro"
           })
        },
        /* 返回时间 */
        returnDate:function(date){
            var initialyear=date.getFullYear();
            var initialmonth=date.getMonth()+1;
            var initialday=date.getDate();
                  if(initialmonth<10){
        initialmonth="0"+initialmonth;
      }
      if(initialday<10){
        initialday="0"+initialday;
      }
      return initialyear + "/" + initialmonth + "/" + initialday;
        },
        /* 增加天数 */
        addDate:function(date,days){
            if(days=="undefined" || days==""){
                days=1;
            }
            var date=new Date(date);
            date.setDate(date.getDate()+days);
            var year= date.getFullYear();
            var month =date.getMonth()+1;
            var day= date.getDate();
            if(month<10){
                month="0"+month;
            }
            if(day<10){
                day="0"+day;
            }
            var time=year+"-"+month+"-"+day;
            return time;
        },
        addLicant:function() {
            this.licants+=1;
            if(this.licants>1){
                this.rmDele=true;
            }
        },
        rmLicant:function(){
            if(this.licants>1){
                this.licants-=1;
            }else{
                this.licants=1;
            }
        },
        /* 选择年龄 */
        chooseAGE:function(){
            this.DATAFILL=this.SUMDATA.dataAge;
            this.ischoose=true;
        },
        /* 选择期限 */
        chooselimit:function(){
            this.DATAFILL=this.SUMDATA.dataLimit;
            this.ischoose=true;
        },
        /* 选择起保日期 */
        chooseDate:function(){
           var chooseDate=this.$refs.startDate.value;
           var initialDate=this.returnDate(chooseDate);
           this.endDate=this.addDate(initialDate,6);
           var nowDate=new Date();
           var chooseStar=this.returnDate(nowDate);
           if(initialDate<chooseStar){
               alertWarning('起保日期不能小于起始日期!');
               this.value1=nowDate;
           }
        },
        /* 选择 li 获取某一个的 value */
        chooseVAL:function(e){
            var ev=e.currentTarget;
            var getStatus=ev.getAttribute("data-stus");
            if(getStatus=="AGE"){
                this.age=ev.innerText;
                this.agePrice=ev.getAttribute("data-price");
            }else if(getStatus=="LIMIT"){
                this.limit=ev.innerText;
                this.limitPrice=ev.getAttribute("data-price");
            }
            this.ischoose=false;
        },
        /* 投保人选择 身份证 护照 */
        chooseID:function(e){
            var ev=e.currentTarget;
            this.$nextTick(function(){
                var licantfill=document.getElementsByClassName("licantfill");
                for(var i=0;i<licantfill.length;i++){
                    if(licantfill[i].children[1].children[1].value=="1"){
                        if(ev.value=="1"){
                            licantfill[i].children[3].children[1].children[1].selected=false;
                            licantfill[i].children[3].children[1].children[0].selected=true;
                        }else if(ev.value=="0"){
                            licantfill[i].children[3].children[1].children[1].selected=true;
                            licantfill[i].children[3].children[1].children[0].selected=false;
                        }
                    }
                }
            });
        },
        /* 
        * 离开事件
        */ 
       /* 投保人信息  姓名 */
       leaveName:function(e){
           var ev=e.currentTarget;
           var licantfill=document.getElementsByClassName("licantfill");
           for(var k=0;k<licantfill.length;k++){
               if(licantfill[k].children[1].children[1].value=="1"){
                   licantfill[k].children[2].children[1].value=ev.value;
               }
           }
       },
       /* 投保人信息 证件号码 */
       leaveIdNUm:function(e){
           var ev=e.currentTarget;
           var regIdNum=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
           var licantfill=document.getElementsByClassName("licantfill");
           /* 父节点 */
           var parentID=ev.parentNode||ev.parentElement;
           var brother=parentID.nextElementSibling||parentID.nextSibling;
           var lastNode=parentID.previousElementSibling||parentID.previousSibling;
           if(lastNode.children[1].value=="1"){
                if(!regIdNum.test(ev.value)){
                    alertWarning('身份证号码格式错误!');
                }else{
                    brother.children[1].value=ev.value.substring(6,14);
                    for(var k=0;k<licantfill.length;k++){
                            if(licantfill[k].children[1].children[1].value=="1"){
                                licantfill[k].children[4].children[1].value=ev.value;
                                licantfill[k].children[5].children[1].value=ev.value.substring(6,14);
                            }
                        }
                }
           }else if(lastNode.children[1].value=="0"){
               if(!regIdNum.test(ev.value)){
                    alertWarning('护照号码不能为null!');
                }
           }
       },
       /* 投保人信息 出生日期 */
       leaveStartDate:function(e){
           var ev=e.currentTarget;
           var regDate=/^19|20{0-9}{2}{01-12}{01-31}$/;
           var licantfill=document.getElementsByClassName("licantfill");
           if(!regDate.test(ev.value)){
               return;
           }else{
               for(var k=0;k<licantfill.length;k++){
                    if(licantfill[k].children[1].children[1].value=="1"){
                        licantfill[k].children[5].children[1].value=ev.value;
                    }
                }
           }
       },
       /* 投保人信息  手机号 */
       leaveTel:function(e){
           var ev=e.currentTarget;
           var regTel=/^[1][3,4,5,7,8][0-9]{9}$/;
           var licantfill=document.getElementsByClassName("licantfill");
            if(!regTel.test(ev.value)){
                return;
           }else{
               for(var k=0;k<licantfill.length;k++){
                    if(licantfill[k].children[1].children[1].value=="1"){
                        licantfill[k].children[6].children[1].value=ev.value;
                    }
                }
           }
       },
       /* 被保人信息 选择身份证  护照 */
       leaveLicantID:function(e){
           var ev=e.currentTarget;
           var licantParent=ev.parentNode;
           var licantNext1=licantParent.nextElementSibling||licantParent.nextSibling;
           var licantNext2=licantNext1.nextElementSibling||licantNext1.nextSibling;
           var licantNext3=licantNext2.nextElementSibling||licantNext2.nextSibling;
           var licantNext4=licantNext3.nextElementSibling||licantNext3.nextSibling;
           var licantNext5=licantNext4.nextElementSibling||licantNext4.nextSibling;
           var holderName = this.$refs.holderName.value;
           var holderID = this.$refs.holderID.value;
           var holderNum = this.$refs.holderNum.value;
           var holderStartDate = this.$refs.holderStartDate.value;
           var holderTel = this.$refs.holderTel.value
           if(ev.value=="1"){
                licantNext1.children[1].value=holderName;
                licantNext2.children[1].value=holderID;
                licantNext3.children[1].value=holderNum;
                licantNext4.children[1].value=holderStartDate;
                licantNext5.children[1].value=holderTel;
           }else if(ev.value=="0"){
                licantNext1.children[1].value="";
                licantNext3.children[1].value="";
                licantNext4.children[1].value="";
                licantNext5.children[1].value="";
           }
       },
       /* 被保人信息 证件号码 */
       leaveLicantNum:function(e){
           var ev=e.target;
           var licantNumParent=ev.parentNode;
           var licantPrevNode=licantNumParent.previousElementSibling||licantNumParent.previousSibling;
           var licantNextNode=licantNumParent.nextElementSibling||licantNumParent.nextSibling;
           if(ev.value){
               if(licantPrevNode.children[1].value=="1"){
                   licantNextNode.children[1].value=ev.value.substring(6,14);
               }
           }else{
               alertWarning('被保人证件号码不能为null!');
           }
       }
    },
    watch:{
        licants:function(val){
            if(val>1){
                this.rmDele=true;
            }else{
                this.rmDele=false;
            }
        }
    }
}
</script>

<style>

</style>
