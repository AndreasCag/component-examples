<template>
  <transition
    class="modal-transition"
    name="modal"
    appear
    v-on="$listeners"
  >
    <slot />
  </transition>
</template>

<style scoped>
.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity .3s ease;
}
</style>
