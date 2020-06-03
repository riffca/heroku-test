let state = {

	owner: 'vuejs',
	repoName: 'vue'

}

let mutations = {

	inputOwner(state,val){
		state.owner = val
	},
	inputRepoName(state,val){
		state.repoName = val
	}
}


export default {
	namespaced: true,
	state,
	mutations
}