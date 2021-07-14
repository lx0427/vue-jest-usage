import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VuexModules from '@/views/VuexModules.vue';
import myModule from '@/store/myModule';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('VuexModules.vue', () => {
    let actions;
    let state;
    let store;

    beforeEach(() => {
        state = {
            clicks: 3,
        };

        actions = {
            moduleActionClick: jest.fn(),
        };

        store = new Vuex.Store({
            modules: {
                myModule: {
                    state,
                    actions,
                    getters: myModule.getters,
                },
            },
        });
    });

    it('calls store action "moduleActionClick" when button is clicked', () => {
        const wrapper = shallowMount(VuexModules, { store, localVue });
        const button = wrapper.find('button');
        button.trigger('click');
        expect(actions.moduleActionClick).toHaveBeenCalled();
    });

    it('renders "state.clicks" in first p tag', () => {
        const wrapper = shallowMount(VuexModules, { store, localVue });
        console.log(wrapper.vm.$store.state.myModule.clicks);
        const p = wrapper.find('p');
        expect(p.text()).toBe(state.clicks.toString());
    });
});
