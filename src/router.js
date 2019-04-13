import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/notification',
    },
    {
      path: '/notification',
      component: () => import(/* webpackChunkName: "notification" */ './views/Notification.vue'),
    },
    {
      path: '/table',
      component: () => import(/* webpackChunkName: "table" */ './views/Table.vue'),
    },
    {
      path: '/modal',
      component: () => import(/* webpackChunkName: "modal" */ './views/Modal.vue'),
    },
  ],
});
