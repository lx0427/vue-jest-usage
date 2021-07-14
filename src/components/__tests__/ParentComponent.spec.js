import { mount } from '@vue/test-utils';
import ParentComponent from '@/components/ParentComponent';
import ChildComponent from '@/components/ChildComponent';

describe('ParentComponent', () => {
    it("displays 'Emitted!' when custom event is emitted", async () => {
        const wrapper = mount(ParentComponent);
        await wrapper.getComponent(ChildComponent).vm.$emit('custom');
        expect(wrapper.html()).toContain('Emitted!');
    });
});
