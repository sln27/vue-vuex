<template>
    <div class="header">
        <p><i class="headericon" @click="healink()"></i><span>{{titname}}</span></p>
    </div>
</template>

<script>
export default {
    props:['titname','pathurl'],
    data(){
        return{}
    },
    methods:{
        healink:function(){
            console.log(this.pathurl);
            if(this.pathurl=="/banksearch"){
                this.$router.push({
                    path:'/detailed'
                })
            }else{
                this.$router.push({
                    path:'/'
                })
            }
        }
    },
    mounted(){
    
    }
}
</script>

<style>

</style>
