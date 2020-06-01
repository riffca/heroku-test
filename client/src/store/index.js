import Vue from 'vue'
import Vuex from 'vuex'
import form from './form'
import forks from './forks'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		form,
		forks
	},
	state: {
	},
	mutations: {
	},
	actions: {
	},
})
