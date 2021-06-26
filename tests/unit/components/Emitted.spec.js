import { mount } from '@vue/test-utils';
import Emitted from '@/views/Emitted';

describe('Emitted', () => {
    it("displays 'Emitted!' when custom event is emitted", async () => {
        const wrapper = mount(Emitted);
        wrapper.vm.$emit('foo');
        wrapper.vm.$emit('foo', 123);
        // console.log(wrapper.emitted().foo); // [ [], [ 123 ] ]

        // 断言事件已经被触发
        expect(wrapper.emitted().foo).toBeTruthy();

        // 断言事件的数量
        expect(wrapper.emitted().foo.length).toBe(2);

        // 断言事件的有效数据
        expect(wrapper.emitted().foo[1]).toEqual([123]);
    });
});
