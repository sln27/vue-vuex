import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const LOGIN_USER = 'LOGIN_USER';  /**  用常量代替事件类型  */

//创建基本状态
const state={
    //登录或者未登录状态
    token:0,
}

//创建改变状态的方法
const mutations= {
    [LOGIN_USER](state,result){
        state.token=result.token;
        sessionStorage.setItem("token", result.token);
        sessionStorage.setItem("iphone", result.tel);
    }
}

//创建驱动 actions 可以使得 mutations 得以启动
const actions={}

export default new Vuex.Store({
    state,
    mutations,
    actions
})