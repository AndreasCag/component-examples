import Modal from '@/plugins/modal/Modal.vue';
import ModalTransition from '@/plugins/modal/ModalTransition.vue';
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';

// H variable is used in JSX
// eslint-disable-next-line no-unused-vars
const h = new Vue().$createElement;

describe('Modal.vue', () => {
  it('renders pasted content', () => {
    const modalWrapper = shallowMount(Modal, {
      propsData: {
        renderContent: () => [
          <div class="test-content">
            Test content
          </div>,
          <div class="another-test-content">
            Another test content
          </div>,
        ],
      },
    });

    expect(modalWrapper.element).toMatchSnapshot();
  });

  it('emits close event after click event on background', () => {
    const modalWrapper = shallowMount(Modal, {
      propsData: {
        renderContent: () => null,
      },
    });

    modalWrapper.find('.background').trigger('click');

    expect(modalWrapper.emitted().close.length).toBe(1);
  });

  it('emits leaveTransitionEnd after afterLeave event in ModalTransition', async () => {
    const modalWrapper = shallowMount(Modal, {
      propsData: {
        renderContent: () => null,
      },
    });

    modalWrapper.find(ModalTransition).vm.$emit('afterLeave');

    expect(modalWrapper.emitted().leaveTransitionEnd.length).toBe(1);
  });
});
