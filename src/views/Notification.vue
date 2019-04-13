<template>
  <div>
    Notification
    <button @click="addNotification">
      Add notification
    </button>
  </div>
</template>

<script>
export default {

  methods: {

    addNotification() {
      this.$addNotification({
        header: 'Test Test Test Test Test Test Test Test Test ',
        content: 'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text ',
        duration: 40000000,
      });
    },

  },

};
</script>
