import Vue from 'vue';
import App from './App.vue';
import router from './router';
import notificationPlugin from '@/plugins/notification';

Vue.config.productionTip = false;

Vue.use(notificationPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
