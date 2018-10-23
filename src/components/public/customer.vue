<template>
    <a class="customer" id="customer" href="http://www.auib.com.cn:80/auibInsurance/auisProduct/customer_service.html" style="position:absolute;width:1rem;height:1rem;top: 10rem;left:8.8rem;
    border-radius:100%;background:rgb(48, 122, 232)">
        <span style="width:17px;height: 14px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAAZUlEQVR42mP4+/fvp/9kApDe169f8zIMY0OA7LkgTAIf1ZB///59Y2BgYARhmCJcfJBa2rlkNIoxDQHSN4G4HIhrgLiBCNwBxFVXrlxhY4Aa8Pnbt2+yDOQCYJxf+/nzpy4DBQAA2q8K0ItWtQkAAAAASUVORK5CYII=')no-repeat center;background-size:100% 100%;"></span>
        <i v-show="format" style="display: block;font-size: .36rem;width: 26px; height: 26px;position:absolute;background:rgb(255, 59, 48);color:#fff;text-align: center;line-height: 26px;border-radius:50%;font-style:normal;top:-13px;right:-13px;">2</i>
    </a>
</template>

<script>
export default {
    data () {
        return {
            format:true
        }
    },
    mounted () {
        var customer=document.getElementById("customer");
        this.drag(customer);
    },
    methods: {
        drag:function(obj) {
            obj.addEventListener("touchstart",function(ev){
                var oevent=ev||event;
                var boxX=oevent.touches[0].clientX-obj.offsetLeft;
                var boxY=oevent.touches[0].clientY-obj.offsetTop;
                obj.addEventListener("touchmove",function(ev){
                    var oevent=ev||event;
                    if(oevent.touches[0].clientX-boxX<0){
                        obj.style.left=0;
                    }else if(oevent.touches[0].clientX-boxX<=document.body.clientWidth-obj.offsetWidth && oevent.touches[0].clientX-boxX>=0){
                        obj.style.left=oevent.touches[0].clientX-boxX/2+"px";
                    }else{
                        obj.style.left=document.body.clientWidth-obj.offsetWidth+"px";
                    }
                    if(oevent.touches[0].clientY-boxY<0){
                        obj.style.top=0;
                    }else if(oevent.touches[0].clientY-boxY<=document.body.offsetHeight-obj.offsetHeight && oevent.touches[0].clientY-boxY>=0){
                        obj.style.top=oevent.touches[0].clientY-boxY/2+"px";
                    }else{
                        obj.style.top=document.body.offsetHeight-obj.offsetHeight+"px";
                    }
                })
                obj.addEventListener("touchend",function(ev){
                    obj.touchmove=null;
                    obj.touchup=null;
                })

            })
        }
    }
}
</script>

<style>

</style>
