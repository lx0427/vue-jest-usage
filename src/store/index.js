import Vue from 'vue';
import Vuex from 'vuex';
import myModule from './myModule';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        myModule,
    },
});
