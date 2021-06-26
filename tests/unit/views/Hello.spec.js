import { shallowMount } from '@vue/test-utils';
import Hello from '@/views/Hello.vue';

test('Hello', async () => {
    // 渲染这个组件
    const wrapper = shallowMount(Hello);

    // `username` 在除去头尾空格之后不应该少于 7 个字符
    await wrapper.setData({ username: ' '.repeat(7) });
    // console.log(wrapper.vm.error);

    // 确认错误信息被渲染了
    expect(wrapper.find('.error').exists()).toBe(true);

    // // 将名字更新至足够长
    await wrapper.setData({ username: 'Lachlan' });

    // 断言错误信息不再显示了
    expect(wrapper.find('.error').exists()).toBe(false);
});
