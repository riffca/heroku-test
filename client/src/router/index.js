import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
Vue.use(VueRouter)

	const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/search',
		name: 'Search',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Results.vue')
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})


router.beforeEach((to, from, next) => {

	let { page, repository, owner } =  to.query

	if(to.name === 'Search' && page && repository && from){
		if(!owner) {
			alert('warn! Provide &owner= query')
		} else {
			store.commit('form/inputOwner', owner)
			store.commit('forks/setPage', parseInt(page))
			store.commit('form/inputRepoName', repository)

		}


	}
	next()
})

export default router
