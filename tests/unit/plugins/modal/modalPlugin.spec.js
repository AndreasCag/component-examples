import modalPlugin from '@/plugins/modal';
import { createLocalVue } from '@vue/test-utils';

const LocalVue = createLocalVue();
LocalVue.use(modalPlugin);

describe('Modal plugin', () => {
  it('adds global component', () => {
    expect(LocalVue.options.components.ModalProvider).toBeTruthy();
  });
});
