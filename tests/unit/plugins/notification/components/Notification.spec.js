import Notification from '@/plugins/notification/Notification.vue';
import CrossIcon from '@/plugins/notification/CrossIcon.vue';
import { shallowMount, mount } from '@vue/test-utils';
import Vue from 'vue';

// H variable is used in JSX
// eslint-disable-next-line no-unused-vars
const h = new Vue().$createElement;

describe('Notification.vue', () => {
  it('renders header and content', () => {
    const data = {
      header: 'Test header',
      content: 'Test content',
    };

    const notificationWrapper = shallowMount(Notification, {
      propsData: { data },
    });

    const notificationText = notificationWrapper.text();

    expect(notificationText).toMatch(data.header);
    expect(notificationText).toMatch(data.content);
  });

  it('adds notification_warning class to message without mode', () => {
    const notificationWrapper = shallowMount(Notification, {
      propsData: { data: {} },
    });

    expect(notificationWrapper.classes()).toContain('notification_warning');
  });

  it('adds notification_warning class to message with warning mode', () => {
    const data = {
      mode: 'warning',
    };

    const notificationWrapper = shallowMount(Notification, {
      propsData: { data },
    });

    expect(notificationWrapper.classes()).toContain('notification_warning');
  });

  it('adds notification_error class to message with error mode', () => {
    const data = {
      mode: 'error',
    };

    const notificationWrapper = shallowMount(Notification, {
      propsData: { data },
    });

    expect(notificationWrapper.classes()).toContain('notification_error');
  });

  it('emits close event', () => {
    const notificationWrapper = mount(Notification, {
      propsData: { data: {} },
    });

    notificationWrapper.find(CrossIcon).trigger('click');

    expect(notificationWrapper.emitted().close.length).toBe(1);
  });

  it('renders passed content', () => {
    const data = {
      render: () => [
        <div class="test-header">
          test header
        </div>,
        <div class="test-subheader">
          test subheader
        </div>,
        <div class="test-content">
          test content
        </div>,
      ],
    };

    const notificationWrapper = shallowMount(Notification, {
      propsData: { data },
    });

    expect(notificationWrapper.element).toMatchSnapshot();
  });

  it('passes close function as argument in render function', () => {
    const mockRenderFunction = jest.fn(() => (
      <div>
        test data
      </div>
    ));

    const data = {
      render: mockRenderFunction,
    };

    const notificationWrapper = shallowMount(Notification, {
      propsData: { data },
    });

    expect(mockRenderFunction).toBeCalledWith(expect.any(Function));
    expect(notificationWrapper.emitted().close).toBeFalsy();

    // call close function
    mockRenderFunction.mock.calls[0][0]();

    expect(notificationWrapper.emitted().close.length).toBe(1);
  });
});
