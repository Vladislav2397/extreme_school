import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const state = {}

export default new Vuex.Store({
    state: () => (state),
    getters,
    mutations: {},
    actions: {},
    modules: {

    },
})
