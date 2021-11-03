import { shallowMount } from '@vue/test-utils';
import FormSubmitter from '@/components/FormSubmitter.vue';
import flushPromises from 'flush-promises';

let url = '';
let data = '';
const mockHttp = {
    get: (_url, _data) => {
        return new Promise((resolve, reject) => {
            url = _url;
            data = _data;
            resolve(true);
        });
    },
};

describe('FormSubmitter', () => {
    it('reveals a notification when submitted', async () => {
        const wrapper = shallowMount(FormSubmitter, {
            mocks: {
                $http: mockHttp,
            },
        });

        wrapper.find('[data-username]').setValue('alice');
        wrapper.find('form').trigger('submit.prevent'); // 异步请求

        await flushPromises();

        // 确保端点和 payload 的正确
        expect(url).toBe('/api/v1/register');
        expect(data).toEqual({ username: 'alice' });

        expect(wrapper.find('.message').text()).toBe('Thank you for your submission, alice.');
    });
});
