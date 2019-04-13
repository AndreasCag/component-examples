<template>
  <ModalProvider
    v-slot
    @close="emitClose"
  >
    <div class="action-request">
      <div
        v-if="$scopedSlots.header"
        class="header"
      >
        <slot name="header" />
      </div>

      <div class="content">
        <slot name="content" />
      </div>

      <div
        v-if="actions.length"
        class="actions"
      >
        <Action
          v-for="action in actions"
          :key="action.text"
          :data="action"
          class="action"
        />
      </div>
    </div>
  </ModalProvider>
</template>

<script>
import Action from './Action.vue';

export default {

  components: {
    Action,
  },

  props: {
    actions: {
      type: Array,
      default: () => [],
    },
  },

  methods: {

    emitClose() {
      this.$emit('close');
    },

  },

};
</script>

<style scoped>
.action-request {
  padding: 16px 32px;
  font-size: 16px;
  line-height: 22px;
}

.header {
  margin-bottom: 8px;
  font-weight: bold;
}

.content {
  margin-bottom: 16px;
}

.actions {
  display: flex;
}

.action:not(:last-child) {
  margin-right: 16px;
}

.action:first-child {
  margin-left: auto;
}
</style>
