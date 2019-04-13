import Notifications from './Notifications.vue';

export default {
  install(Vue) {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const NotificationsClass = Vue.extend(Notifications);
    const notificationsInstance = new NotificationsClass({
      el: container,
    });

    Vue.mixin({

      methods: {

        $addNotification: notificationsInstance.addNotification,

      },

    });
  },
};
