import Vuex from 'vuex';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import ComponentWithButtons from '@/components/ComponentWithButtons.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
    testMutation: jest.fn(),
};

const store = new Vuex.Store({ mutations });

describe('ComponentWithButtons', () => {
    it('commits a mutation when a button is clicked', async () => {
        const wrapper = shallowMount(ComponentWithButtons, {
            store,
            localVue,
        });

        wrapper.find('.commit').trigger('click');
        // ! 任何导致操作 DOM 的改变都应该在断言之前 await nextTick 函数。
        // 因为 Vue 会对未生效的 DOM 进行批量异步更新，避免因数据反复变化而导致不必要的渲染。
        await wrapper.vm.$nextTick();

        expect(mutations.testMutation).toHaveBeenCalledWith({}, { msg: 'Test Commit' });
    });

    it('dispatches an action when a button is clicked', async () => {
        const mockStore = { dispatch: jest.fn() };
        const wrapper = shallowMount(ComponentWithButtons, {
            mocks: {
                $store: mockStore,
            },
        });

        wrapper.find('.dispatch').trigger('click');
        await wrapper.vm.$nextTick();

        expect(mockStore.dispatch).toHaveBeenCalledWith('testAction', { msg: 'Test Dispatch' });
    });

    it('dispatch a namespaced action when button is clicked', async () => {
        const store = new Vuex.Store();
        store.dispatch = jest.fn();

        const wrapper = shallowMount(ComponentWithButtons, {
            store,
            localVue,
        });

        wrapper.find('.namespaced-dispatch').trigger('click');
        await wrapper.vm.$nextTick();

        expect(store.dispatch).toHaveBeenCalledWith('namespaced/very/deeply/testAction', {
            msg: 'Test Namespaced Dispatch',
        });
    });
});
