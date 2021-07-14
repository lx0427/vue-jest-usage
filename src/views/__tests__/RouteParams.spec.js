import { shallowMount } from '@vue/test-utils';
import RouteParams from '@/views/RouteParams.vue';

const $route = {
    path: '/some/path',
};

it('fetches async when a button is clicked', async () => {
    const wrapper = shallowMount(RouteParams, {
        mocks: {
            $route,
        },
    });
    expect(wrapper.text()).toContain('/some/path');
});
