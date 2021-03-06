import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Router from 'router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false
Vue.use(
    VueAxios,
    axios,
    Router,
    Antd,
)
new Vue({
    render: h => h(App),
}).$mount('#app')
