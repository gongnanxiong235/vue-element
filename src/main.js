import Vue from 'vue'
import Ap from './Blog'
import routerConfig from './router'
import axios from "axios";
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Moment from 'moment'

Vue.config.productionTip = false
//全局引用
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.use(VueResource)
//创建路由实例
const router = new VueRouter(routerConfig)
// 绑定 moment 进行时间格式化 ✔
Vue.prototype.$moment = Moment;//赋值使用

//全局引用,可以在所有的vue实例中使用
Vue.prototype.axios = axios
Vue.http.options.emulateJSON = true;


new Vue({
    render: h => h(Ap),
    router
}).$mount('#app')
