import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import App from '@/App.vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // component: About,
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    },
];

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App', () => {
    it('renders a child component via routing', async () => {
        const router = new VueRouter({ routes });
        const wrapper = mount(App, { localVue, router });
        await router.push('/about');
        // 异步组件未渲染前，根组件中不包含当前组件
        expect(await wrapper.findComponent(About).exists()).toBe(false);
        await router.push('/');
        expect(wrapper.text()).toContain('Installed CLI Plugins');
    });
});
