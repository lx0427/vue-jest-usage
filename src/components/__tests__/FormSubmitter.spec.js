import { shallowMount } from '@vue/test-utils';
import FormSubmitter from '@/components/FormSubmitter.vue';
import { flushTask } from '@/util/jest';

let url = '';
let data = '';
const mockHttp = {
    get: (_url, _data) => {
        return new Promise((resolve, reject) => {
            url = _url;
            data = _data;
            setTimeout(() => {
                resolve(true);
            }, 0);
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

        // ! 确保请求完成
        await flushTask();
        // 1,2,3
        // w1,w3
        // h2,h3
        // => h3执行完成

        // 确保端点和 payload 的正确
        expect(url).toBe('/api/v1/register');
        expect(data).toEqual({ username: 'alice' });

        console.log(wrapper.html());

        expect(wrapper.find('.message').text()).toBe('Thank you for your submission, alice.');
    });
});
