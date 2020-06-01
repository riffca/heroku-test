<template>
	<div class="wrap-table">

		<div class="button-panel" v-if="mappedForks.length">
			<div class="button" @click="previousPage" v-if="$store.state.forks.page !== 1">previous</div>
			<div class="button" @click="nextPage">next</div>
			<span>page {{$store.state.forks.page}}</span>
		</div>

		<div class="wrapper">
			
			<table>
				<thead>
					<th v-show="index !== 0" v-for="(item,key,index) in mappedForks[0]" :key="index">{{ key }}</th>
				</thead>
				<tbody>
					<tr 
						v-for="(rowItem,index) in mappedForks" 
						@click="current = rowItem"
						:key="index">
						<td 
							v-show="index !== 0"
							v-for="(item,key,index) in rowItem" 
							:key="index">
							<span v-if="item.toString().indexOf('http') !== -1"> 
								<a :href="'https://github.com/search?q='+rowItem.Name+'&ref=simplesearch'" target="_blank">go to...</a>
							</span>
							<span v-else>{{ item }}</span>
						</td>	
					</tr>
				</tbody>
			</table>
			
		</div>


		<div class="table-modal" v-if="current">
			<div class='wrap'>
				<div class="title"><h4>Add to favourites</h4></div>
				<div class= "close" @click="current=''">x</div>
				<div class="currentName">{{ current.Owner }} / {{current.Name}}</div>
				<div class="button" @click="addToFavourites">Save</div>
				<div class="button" @click="removeFromFavourites">Remove</div>
			</div>
		</div>

	</div>

</template>

<script>

import {mapState} from 'vuex'
import firebase from 'firebase/app';
import 'firebase/database';
export default {
	data(){
		return {
			names: [
				'Repo name',
				'owner',
			],
			current: ''
		}
	},
	computed: {

		...mapState('forks',['forks', 'stars']),

		mappedForks() {

			let mapped = this.forks.map(item=>{
				let fork = {}
				fork.id = item.id
				fork.Name = item.name
				fork.Owner = item.owner.login
				fork.Stars = item.stargazers_count
				fork.Url = item.clone_url
				fork.Favourites = ''

				this.$store.state.forks.favourites.forEach(selectedId=>{

					if(fork.id === parseInt(selectedId)){
						fork.Favourites = 'yes'
					}	
				})

				return fork
			})

			return mapped
		}
	},


	methods: {


		addToFavourites() {
			firebase.database().ref('favourites/' + this.current.id).set({
				id: this.current.id,
				name: this.current.Name,
			});
			this.current = ''
		},		

		removeFromFavourites() {
			firebase.database().ref('favourites/' + this.current.id).remove()
			let index = this.$store.state.forks.favourites.findIndex((item)=>{
				return this.current.id === item
			})

			this.$store.state.forks.favourites.splice(index,1)

			this.current = ''
		},
		nextPage(){
			this.$store.commit('forks/incPage',1)
			this.$store.dispatch('forks/fetchForks',{})
		},		
		previousPage(){
			let currentPage = this.$store.state.forks.page
			if (currentPage === 1) return
			this.$store.commit('forks/incPage',-1)
			this.$store.dispatch('forks/fetchForks',{})
		}
	},
}
</script>

<style lang="scss">
.button-panel {
	padding: 1.2vw 1.2vw;
	.button {
		font-size: 1.9vw;
		padding: 1vw;
	}
}

tr {
	cursor: pointer;
	&:hover {
		background: grey;
		color: white;
	}
}

.wrapper {
	display: flex;
	justify-content: center;
}

.table-modal {
	background: rgba(0,0,0,0.45);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	.wrap {
		height: 40vw;
		width: 40vw;
		background: white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		
	}	

	.close {
		font-size: 2vw;
		cursor: pointer;
		padding: 1vw;
		position: absolute;
		top: 3vw;
		right: 0;
		transform: translate(-50%,-50%);
		
	}
	.title {
		margin-top: 3vw;
	}
	.currentName {
		margin-bottom: 6vw;

		font-size: 2vw;
	}


}

</style>