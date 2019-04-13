<script>
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
      if (event.target !== this.$el) {
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
      <transition
        name="modal"
        appear
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
      </transition>
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

.modal-enter, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .3s ease;
}
</style>
