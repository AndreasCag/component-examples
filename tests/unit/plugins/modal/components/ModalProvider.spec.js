import ModalProvider from '@/plugins/modal/ModalProvider';
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';

// H variable is used in JSX
// eslint-disable-next-line no-unused-vars
const h = new Vue().$createElement;

describe('ModalProvider.vue', () => {
  it('renders nothing', () => {
    const modalWrapper = shallowMount(ModalProvider, {
      scopedSlots: {
        default: () => (
          <div>
            Test
          </div>
        ),
      },
    });

    expect(modalWrapper.html()).toBeFalsy();

    modalWrapper.vm.$destroy();
  });

  it('appends modal to the body', () => {
    const modalWrapper = shallowMount(ModalProvider, {
      scopedSlots: {
        default: () => (
          <div>
            Important content
          </div>
        ),
      },
    });

    expect(document.body.innerHTML).toMatch('<div>Important content</div>');

    modalWrapper.vm.$destroy();
  });

  it('emits close if Modal emits close', () => {
    const modalWrapper = shallowMount(ModalProvider, {
      scopedSlots: {
        default: () => null,
      },
    });

    modalWrapper.vm._modalInstance.$refs.modal.$emit('close');

    expect(modalWrapper.emitted().close.length).toBe(1);

    modalWrapper.vm.$destroy();
  });
});
