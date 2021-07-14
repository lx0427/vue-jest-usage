import { shallowMount } from '@vue/test-utils';
import AxiosMock from '@/views/AxiosMock.vue';

jest.mock('axios', () => ({
    get: () => Promise.resolve({ data: 'value' }),
}));

it('fetches async when a button is clicked', async () => {
    const wrapper = shallowMount(AxiosMock);
    await wrapper.find('button').trigger('click');
    expect(wrapper.text()).toBe('value');
});
