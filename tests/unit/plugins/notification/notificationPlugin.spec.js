import notificationPlugin from '@/plugins/notification';
import { createLocalVue } from '@vue/test-utils';

const LocalVue = createLocalVue();
LocalVue.use(notificationPlugin);
const vueInstance = new LocalVue();

describe('Notification plugin', () => {
  it('adds instance method', () => {
    expect(vueInstance.$addNotification).toBeInstanceOf(Function);
  });

  it('adds container to the body', () => {
    expect(document.body.querySelector('.notification-container')).toBeTruthy();
  });
});
