import Vue, { createSSRApp } from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

//调用store vuex 状态管理
import store from '@/store/index.js'
const app = new Vue({
    ...App,
	store
})


app.$mount()
