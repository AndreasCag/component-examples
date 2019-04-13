import Vue from 'vue';
import App from './App.vue';
import router from './router';
import notificationPlugin from '@/plugins/notification';
import modalPlugin from '@/plugins/modal';

Vue.config.productionTip = false;

Vue.use(notificationPlugin);
Vue.use(modalPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
