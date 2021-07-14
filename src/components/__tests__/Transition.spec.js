import Transition from '@/components/Transition.vue';
import { mount } from '@vue/test-utils';

test('should render Foo, then hide it', async () => {
    const wrapper = mount(Transition);
    expect(wrapper.text()).toMatch(/Foo/);

    wrapper.setData({
        show: false,
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).not.toMatch(/Foo/);
});
