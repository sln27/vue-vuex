<template>
    <div id="peojectbox">
        <section>
            <div class="inforbox">
                <p>合众50元航空意外保障</p>
                <p><label for="">投保年龄</label><span @click="clipopdata" class="insuredage"><input ref="insuredage" type="button" value="选择投保年龄"><i></i></span></p>
                <div class="block">
                    <span class="demonstration">航班日期</span>
                    <el-date-picker ref="hanktime" v-model="value.value1" type="date" placeholder="选择日期"></el-date-picker>
                </div>
                <p><label for="flightnumber">航班号码</label><input ref="flightnumber" class="inforfill" name="flightnumber" type="text" placeholder="如:MU5108"></p>
            </div>
            <div class="inforbox inforchange">
                <p>投保人信息</p>
                <p><label class="inforlabel" for="holdername">姓名</label><input ref="holdername" class="inforfill" name="holdername" type="text" placeholder="holdername"></p>
                <p><label class="inforlabel" for="idcard">证件类型</label><span class="proveid">身份证</span></p>
                <p><label class="inforlabel" for="inforid">证件号码</label><input ref="inforid" class="inforfill" name="inforid" type="text" placeholder="如:MU5108"></p>
                <p><label class="inforlabel" for="datebirth">出生日期</label><input ref="datebirth" class="inforfill" name="datebirth" type="text" placeholder="如:MU5108"></p>
                <p><label class="inforlabel" for="infortel">手机号码</label><input ref="infortel" class="inforfill" name="infortel" type="text" placeholder="如:MU5108"></p>
            </div>
            <div class="inforbox inforchange inforadd">
                <p>被保人信息</p>
                <p>
                    <label class="inforlabel" for="theapplicant">与投保人关系</label>
                    <el-select ref="theapplicant" v-model="value.value2" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option> </el-select>
                </p>
                <p><label class="inforlabel" for="applicant">姓名</label><input ref="applicant" class="inforfill" name="applicant" type="text" placeholder="如:MU5108"></p>
                <p><label class="inforlabel" for="cantid">证件类型</label><span class="proveid">身份证</span></p>
                <p><label class="inforlabel" for="cantidnum">证件号码</label><input  ref="cantidnum" class="inforfill" name="cantidnum" type="text" placeholder="如:MU5108"></p>
            </div>
        </section>
        <!-- 底部 -->
        <footer id="inforfoo">
            <div class="inforlt">总额<span class="pricestate">￥</span><span class="fooprice">50</span></div>
            <div class="inforrt" @click="clihide">下一步</div>
        </footer>
        <customer-vue></customer-vue>
        <!-- 弹窗 -->
        <div class="inforpop" v-show="isshow">
            <transition enter-active-class="animated fadeIn">
                <div class="popbox" v-show="isshow">
                    <div class="inforpoptop inforwid"></div>
                    <div class="inforpopbot inforwid" @click="clihide">取消</div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import customerVue from './public/customer'
export default {
    data () {
        return {
            value:{value1:"",value2:""},
            isshow:false,
            options:[
                {"value":"1","label":"本人"},{"value":"2","label":"他人"}
            ]
        }
    },
    methods: {
        clihide:function(){
            this.isshow=false;
            console.log(this.$refs.hanktime.displayValue);
            console.log(this.$refs.hanktime.value)
        },
        clipopdata:function(){
            this.isshow=true;
        }
    },
    mounted () {
        
    },
    components: {
        customerVue
    }
}
</script>

<style>

</style>
