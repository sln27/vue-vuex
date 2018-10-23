"use strict";
(function(m,n){
    var time;
    m.NYpoptit=function(prompt){
        var a=n.createElement("div");
        a.setAttribute("id","popwindow");
        a.setAttribute("onclick","popwinhide()");
        var p=n.createElement("p");
        p.setAttribute("id","poptit");
        p.innerHTML= prompt;
        a.appendChild(p);
        if(prompt){
            n.body.appendChild(a);
            timeHide();
        }
    };
    m.popwinhide=function(){
        var aHide = n.getElementById("popwindow");
        aHide.parentNode.removeChild(aHide);
    };
    m.timeHide=function(){
        time=setTimeout(function(){
            popwinhide();
            clearTimeout(time);
        },3000)
    }
})(window,document);
(function(m,n){
    m.NYoffPop=function(prompt){
        var p=n.createElement("div");
        p.setAttribute("id","popwindow");
        var b=n.createElement("div");
        b.setAttribute("class","popbox");
        var totalp={};
        totalp.p1=n.createElement("p");
        totalp.p1.setAttribute("class","boxtit");
        totalp.p1.innerHTML="信息";
        totalp.p2=n.createElement("p");
        totalp.p2.setAttribute("class","boxpro");
        totalp.p2.innerHTML=prompt;
        totalp.p3=n.createElement("p");
        totalp.p3.setAttribute("class","boxfn");
        totalp.p3.innerHTML="<a href='javascript:NYclosePop();'>确定</a>";
        b.appendChild(totalp.p1);
        b.appendChild(totalp.p2);
        b.appendChild(totalp.p3);
        p.appendChild(b);
        if(prompt){
            n.body.appendChild(p)
        }
    }
    m.NYclosePop=function(){
        var aHide = n.getElementById("popwindow");
        aHide.parentNode.removeChild(aHide);
    }
})(window,document);
(function(m,n){
    var time;
    m.alertWarning=function(prompt){
        var p=n.createElement("div");
        p.setAttribute("id","popwindow");
        p.setAttribute("onclick","warning()");
        var a=n.createElement("div");
        a.setAttribute("class","alertbox");
        var i=n.createElement("i");
        i.setAttribute("class","iwran");
        var totalp={};
        totalp.p1=n.createElement("p");
        totalp.p1.setAttribute("class","alerttit");
        totalp.p1.appendChild(i);
        totalp.p2=n.createElement("p");
        totalp.p2.setAttribute("class","alertinn");
        totalp.p2.innerHTML=prompt;
        a.appendChild(totalp.p1);
        a.appendChild(totalp.p2);
        p.appendChild(a);
        if(prompt){
            n.body.appendChild(p);
            alertHide();
        }
    }
    m.warning=function(){
        var aHide = n.getElementById("popwindow");
        aHide.parentNode.removeChild(aHide);
        clearTimeout(time);
    }
    m.alertHide=function(){
        time=setTimeout(function () {
            warning();
            clearTimeout(time);
        },3000)
    }
})(window,document);