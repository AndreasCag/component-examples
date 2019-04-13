<script>
import ModalTransition from './ModalTransition.vue';

export default {

  props: {
    renderContent: {
      type: Function,
      required: true,
    },
  },

  data: () => ({
    // isStartClosing is used to play close animation
    isStartClosing: false,
  }),

  methods: {

    backgroundIsClicked(event) {
      if (event.target !== event.currentTarget) {
        return;
      }

      this.$emit('close');
    },

    closeModal() {
      this.isStartClosing = true;
    },

    emitLeaveTransitionEnd() {
      this.$emit('leaveTransitionEnd');
    },

  },

  render() {
    const { isStartClosing } = this;

    return (
      <ModalTransition
        onAfterLeave={this.emitLeaveTransitionEnd}
      >
        {
          !isStartClosing ? (
            <div
              class="background"
              onClick={this.backgroundIsClicked}
            >
              <div class="container">
                {this.renderContent()}
              </div>
            </div>
          ) : null
        }
      </ModalTransition>
    );
  },

};
</script>

<style scoped>
.background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 2px;
}
</style>
