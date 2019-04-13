<template>
  <div>
    <div>
      <button @click="canShowFirstModal = true;">
        Show modal
      </button>
    </div>

    <BeautyModal
      v-if="canShowFirstModal"
      :actions="firstModalActions"
      @close="canShowFirstModal = false;"
    >
      <template #header>
        Lorem ipsum
      </template>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
      </template>
    </BeautyModal>

    <BeautyModal
      v-if="canShowSecondModal"
      :actions="secondModalActions"
      @close="canShowSecondModal = false;"
    >
      <template #content>
        Lorem ipsum dolor sit amet!
      </template>
    </BeautyModal>
  </div>
</template>

<script>
import BeautyModal from '@/components/BeautyModal/index.vue';

export default {

  components: {
    BeautyModal,
  },

  data: () => ({
    canShowFirstModal: false,
    canShowSecondModal: false,
  }),

  computed: {

    firstModalActions() {
      return [
        {
          text: 'no',
          action: () => {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.canShowFirstModal = false;
          },
        },
        {
          text: 'yes',
          mode: 'primary',
          action: () => {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.canShowSecondModal = true;
          },
        },
      ];
    },

    secondModalActions() {
      return [
        {
          text: 'close',
          mode: 'primary',
          action: () => {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.canShowSecondModal = false;
          },
        },
      ];
    },

  },

};
</script>
