import Vue from 'vue'
import App from './App'
import store from '@/store/store.js'

Vue.config.productionTip = false
App.mpType = 'app'

//调用store vuex 状态管理
//import store from '@/store/index.js'
const app = new Vue({
    ...App,
	store
})


app.$mount()


//封装弹窗的方法
uni.$showMsg = function(title='数据请求失败！',duration=1500){
	uni.showToast({
		title,
		duration,
		icon:'none'
	})
}