import { shallowMount } from '@vue/test-utils';
import Counter from '@/views/Counter.vue';

describe('Counter.vue', () => {
    it('increments count when button is clicked', async () => {
        const wrapper = shallowMount(Counter);
        expect(wrapper.find('button').exists()).toBe(true);
        // trigger返回promise
        await wrapper.find('button').trigger('click');
        expect(wrapper.find('div').text()).toContain('1');
    });
});
