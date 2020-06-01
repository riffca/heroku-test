<template>
	<div id="app">

		<div class="title">Get more forks in few steps</div>

		<div class="form-wrapper">
			<div>
				<label for="owner">Enter owner</label> 
				<input id='owner' v-model="owner" type="text">
			</div>
			<div>
				<label for="repoName">and repo name</label> 
				<input id='repoName' v-model="repoName" type="text">
			</div>

			<button v-if="$route.path.indexOf('result')===-1" @click="$router.push('/results')">get results</button>
		</div>

		<router-view/>



	</div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/database';
export default {

	mounted(){

			let that = this

			var config = {
				apiKey: "AIzaSyCKVwnbO5gbhIxLiMoNB5A2LdHHmpP30rc",
				authDomain: "temp-652e3.firebaseapp.com",
				databaseURL: "https://temp-652e3.firebaseio.com",
				storageBucket: "temp-652e3.appspot.com"
			};

			firebase.initializeApp(config)
			

			var starCountRef =firebase.database().ref('favourites');
			starCountRef.on('value', function(snapshot) {
				if(snapshot.val()){
					Object.keys(snapshot.val()).forEach((key)=>{
						that.$store.state.forks.favourites.push(parseInt(key))
					})
				}
			});


	},


	computed: {
		owner: {
			get () {
				return this.$store.state.form.owner
			},
			set (value) {
				this.$store.commit('inputOwner', value)
			}
		},	 
		repoName: {
			get () {
				return this.$store.state.form.repoName
			},
			set (value) {
				this.$store.commit('inputRepoName', value)
			}
		}
	},

	watch:{
		owner(){
			this.$store.state.forks.page = 1
			this.$store.dispatch('forks/fetchForks',{})
		},
		repoName(){
			this.$store.state.forks.page = 1
			this.$store.dispatch('forks/fetchForks',{})

		}
	}
}
</script>

<style lang="scss">


.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}


.button {
	display: inline;
	padding: 1.2vw;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
	}
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.title {
	font-size: 4vw;
	padding: 1vw;
}

.form-wrapper {
	display: flex;
	justify-content: center;
	

	input {
		padding: .8vw;
		width: 10vw;
		font-size: 2vw;
	}

	label {
		padding: 0.8vw;
		font-size: 3vw;
	}

}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
