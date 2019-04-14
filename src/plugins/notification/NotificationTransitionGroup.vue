<template>
  <transition-group
    class="notification-transition-group"
    name="notification"
  >
    <slot />
  </transition-group>
</template>

<style scoped>
.notification-transition-group > :global(.notification-enter) {
  opacity: 0;
  transform: translateY(100%);
}

.notification-transition-group > :global(.notification-move) {
  transition: transform .3s ease;
}

.notification-transition-group > :global(.notification-leave-to) {
  opacity: 0;
  transform: translateX(100%) translateY(calc(-100% - 32px));
}

.notification-transition-group > :global(.notification-enter-active),
.notification-transition-group > :global(.notification-leave-active) {
  transition: transform .3s ease, opacity .3s ease;
}

.notification-transition-group > :global(.notification-leave) {
  transform: translateY(calc(-100% - 32px));
}

.notification-transition-group > :global(.notification-leave-active) {
  position: absolute !important;
}
</style>
