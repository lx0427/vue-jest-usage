import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ComponentWithVuex from '@/components/ComponentWithVuex.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
    state: {
        username: 'alice',
    },
});

describe('ComponentWithVuex', () => {
    it('renders a username using a real Vuex store', () => {
        const wrapper = shallowMount(ComponentWithVuex, {
            store,
            localVue,
        });

        expect(wrapper.find('.username').text()).toBe('alice');
    });

    it('renders a username using a mock store', () => {
        const wrapper = shallowMount(ComponentWithVuex, {
            mocks: {
                // ! mock掉全局的$store
                $store: {
                    state: { username: 'alice' },
                },
            },
        });

        expect(wrapper.find('.username').text()).toBe('alice');
    });
});
