import axios from 'axios'
import store from './index'
let state = {

	forks: [],
	favourites: [],	
	page: 1

}


let actions = {


	fetchForks({commit},{ perPage=10}){

		let url = 'http://localhost:3000/github/forks?'

		url += 'page=' + store.state.forks.page.toString() 
		url += '&per_page=' + perPage.toString() 
		url += '&owner=' + store.state.form.owner.toString()
		url += '&repoName=' + store.state.form.repoName.toString() 

		console.log(url)
		axios({
			type: 'get',
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			crossdomain: true,
			url:url}).then(res=>{



				commit('setForks',res.data)

				if(!res.data.name === 'Error') {
					alert('Forks 403 error')
					console.log('getting forks',res.data.length ? res.data.length : res.data)
				}
			}).catch(e=>{

				console.log(e)
			})

	}
}
let mutations = {
	setForks(state,val){
		if(val && val.length) {
			state.forks = val
		} else {
			state.forks = []
		}
	},
	incPage(state,val){
		state.page += val
	}	
}


export default {
	state,
	mutations,
	actions,
	namespaced: true,
}