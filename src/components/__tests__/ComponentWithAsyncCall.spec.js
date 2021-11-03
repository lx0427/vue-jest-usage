import { shallowMount, mount } from '@vue/test-utils';
import ParentWithAPICallChild from '@/components/ParentWithAPICallChild.vue';
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall.vue';

describe('ParentWithAPICallChild.vue', () => {
    it('renders with mount and does initialize API call', () => {
        const wrapper = mount(ParentWithAPICallChild);

        expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
    });

    it('renders with mount and does initialize API call', () => {
        const wrapper = mount(ParentWithAPICallChild, {
            stubs: {
                // stub 掉代码中那些我们不感兴趣的部分
                ComponentWithAsyncCall: true,
            },
        });

        expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
    });

    it('renders with shallowMount and does not initialize API call', () => {
        // ! shallowMount不挂载子组件
        const wrapper = shallowMount(ParentWithAPICallChild);

        expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true);
    });
});
