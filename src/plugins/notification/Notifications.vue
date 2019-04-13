<template>
  <div class="notification-container">
    <NotificationTransitionGroup>
      <Notification
        v-for="notification in notifications"
        :key="notification.id"
        :data="notification"
        class="notification"
        @close="removeNotification(notification)"
      />
    </NotificationTransitionGroup>
  </div>
</template>

<script>
import Notification from './Notification.vue';
import NotificationTransitionGroup from './NotificationTransitionGroup.vue';

export const defaultDuration = 4000;
let notificationCount = 0;

export default {

  components: {
    Notification,
    NotificationTransitionGroup,
  },

  data: () => ({
    notifications: [],
  }),

  methods: {

    addNotification(notificationData) {
      const { notifications } = this;

      const {
        duration = defaultDuration,
        ...partialNotificationData
      } = notificationData;

      const notification = {
        ...partialNotificationData,
        // eslint-disable-next-line no-plusplus
        id: notificationCount++,
      };

      notifications.push(notification);

      const removeNotification = () => {
        this.removeNotification(notification);
      };

      setTimeout(removeNotification, duration);

      return removeNotification;
    },

    removeNotification(notification) {
      const { notifications } = this;

      const idxOfNotification = notifications.indexOf(notification);

      if (idxOfNotification === -1) {
        return;
      }

      notifications.splice(idxOfNotification, 1);
    },

  },

};
</script>

<style scoped>
.notification-container {
  position: fixed;
  z-index: 2;
  bottom: 0;
  right: 0;
  width: 350px;
}

.notification {
  margin-bottom: 32px;
  margin-right: 32px;
}
</style>
