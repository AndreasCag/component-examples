<script>
import classNames from 'classnames';
import CrossIcon from './CrossIcon.vue';

export default {

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  computed: {

    renderedContent() {
      const { data } = this;

      if (data.render) {
        return data.render(this.close);
      }

      return [
        <div class="header">
          {data.header}
        </div>,
        <div class="content">
          {data.content}
        </div>,
        <CrossIcon
          class="cross-icon"
          onClick={this.close}
        />,
      ];
    },

    notificationClass() {
      switch (this.data.mode) {
        case 'error':
          return 'notification_error';
        case 'warning':
        default:
          return 'notification_warning';
      }
    },

  },

  methods: {

    close() {
      this.$emit('close');
    },

  },

  render() {
    const { renderedContent, notificationClass } = this;

    return (
      <div class={classNames('notification', notificationClass)}>
        {renderedContent}
      </div>
    );
  },

};
</script>

<style scoped>
.notification {
  position: relative;
  padding: 16px 32px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, .5);
  color: white;
  font-size: 16px;
  line-height: 22px;
  border-radius: 2px;
}

.notification_warning {
  background-color: rgba(189, 54, 47, .8)
}

.header {
  font-weight: bold;
  margin-bottom: 8px;
  margin-right: 4px;
}

.cross-icon {
  position: absolute;
  right: 16px;
  top: 16px;
  width: 16px;
  height: 16px;
  fill: white;
  cursor: pointer;
}
</style>
