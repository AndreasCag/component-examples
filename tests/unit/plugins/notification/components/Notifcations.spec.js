import Notifications, { defaultDuration } from '@/plugins/notification/Notifications.vue';
import Notification from '@/plugins/notification/Notification.vue';
import { shallowMount } from '@vue/test-utils';

describe('Notifications.vue', () => {
  it('renders notification component', () => {
    const notificationsWrapper = shallowMount(Notifications);

    expect(notificationsWrapper.find(Notification).exists()).toBeFalsy();
    notificationsWrapper.vm.addNotification({});
    expect(notificationsWrapper.find(Notification).exists()).toBeTruthy();
  });

  it('renders list of notification components', () => {
    const componentsAmount = 3;

    const notificationsWrapper = shallowMount(Notifications);

    expect(notificationsWrapper.find(Notification).exists()).toBeFalsy();

    for (let i = 0; i < componentsAmount; i++) {
      notificationsWrapper.vm.addNotification({});
    }

    expect(notificationsWrapper.findAll(Notification).length).toBe(componentsAmount);
  });

  it('removes notification when setTimeout is called', () => {
    jest.useFakeTimers();

    const notificationsWrapper = shallowMount(Notifications);
    notificationsWrapper.vm.addNotification({});
    jest.runAllTimers();

    expect(notificationsWrapper.find(Notification).exists()).toBeFalsy();
  });

  it('calls setTimeout with defaultDuration if duration isn\'t passed', () => {
    jest.useFakeTimers();

    const notificationsWrapper = shallowMount(Notifications);
    notificationsWrapper.vm.addNotification({});

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), defaultDuration);
  });

  it('calls setTimeout with customDuration', () => {
    const duration = 1333;
    jest.useFakeTimers();

    const notificationsWrapper = shallowMount(Notifications);

    notificationsWrapper.vm.addNotification({
      duration,
    });

    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), duration);
  });

  it('returns remove function', () => {
    const notificationsWrapper = shallowMount(Notifications);
    const removeFunc = notificationsWrapper.vm.addNotification({});

    removeFunc();

    expect(notificationsWrapper.find(Notification).exists()).toBeFalsy();
  });
});
