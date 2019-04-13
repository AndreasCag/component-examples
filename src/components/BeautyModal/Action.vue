<template>
  <button
    class="action"
    :class="actionClass"
    @click="callAction()"
  >
    {{ data.text }}
  </button>
</template>

<script>
export default {

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  computed: {

    actionClass() {
      switch (this.data.mode) {
        case 'primary':
          return 'action_primary';
        case 'default':
        default:
          return 'action_default';
      }
    },

  },

  methods: {

    callAction() {
      this.data.action();
    },

  },

};
</script>

<style scoped>
.action {
  padding: 8px 16px;
  background-color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, .4);
  font-size: 14px;
  line-height: 20px;
}

.action_primary {
  background-color: #2196f3;
  color: white;
}
</style>
