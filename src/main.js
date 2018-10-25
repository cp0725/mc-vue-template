import Vue from 'vue';
Vue.config.productionTip = false;

// 引入 element-ui.
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI)

import './styles/index.scss';
import App from './App.vue';
import router from './router';

// 加载 ajax 接口.
import api from "./api/index";
import apiConfig from "./api/urls/index";
api.load(apiConfig);

window._dc = new Vue()

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
