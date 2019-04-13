import Vue from 'vue';
import Modal from './Modal.vue';

const modalData = Vue.observable({
  modalsCount: 0,
});

new Vue().$watch(
  () => modalData.modalsCount,
  (newVal, prevVal) => {
    if (newVal !== 0 && prevVal !== 0) {
      return;
    }

    if (newVal === 0) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';

      return;
    }

    document.body.style.paddingRight = `${window.innerWidth - document.body.offsetWidth}px`;
    document.body.style.overflow = 'hidden';
  },
);

export default {

  render() {
    // add HMR support
    if (process.env.NODE_ENV === 'development') {
      if (this._isMounted) {
        this._modalInstance.$forceUpdate();
      }
    }

    return null;
  },

  mounted() {
    modalData.modalsCount++;

    const container = document.createElement('div');
    document.body.appendChild(container);

    this._modalInstance = new Vue({
      el: container,
      render: h => h(Modal, {
        ref: 'modal',
        props: {
          renderContent: this.$scopedSlots.default,
        },
        on: {
          close: () => {
            this.$emit('close');
          },
          leaveTransitionEnd: () => {
            modalData.modalsCount--;
          },
        },
      }),
    });
  },

  destroyed() {
    this._modalInstance.$refs.modal.closeModal();
  },

};
