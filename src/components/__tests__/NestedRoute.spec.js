import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import NestedRoute from '@/components/NestedRoute.vue';
import mockModule from '@/router/bust-cache.js';

jest.mock('@/router/bust-cache.js', () => ({ bustCache: jest.fn() }));

describe('beforeEach', () => {
    it('calls bustCache and next when leaving the route', async () => {
        const wrapper = shallowMount(NestedRoute);
        const next = jest.fn();
        NestedRoute.beforeRouteLeave.call(wrapper.vm, undefined, undefined, next);
        await wrapper.vm.$nextTick();

        expect(mockModule.bustCache).toHaveBeenCalled();
        expect(next).toHaveBeenCalled();
    });
});
