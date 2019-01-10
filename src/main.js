import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import Vuex from 'vuex';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import axios from 'axios';
import QS from 'qs';
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;

Vue.use(Vuex);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')