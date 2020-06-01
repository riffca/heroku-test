<template>
	<div class="results page">
		<tableList />
	</div>
</template>

<script>
import tableList from '../components/table-list' 
// @ is an alias to /src
export default {
	name: 'Results',
	components: {
		tableList
	},
	created(){
		this.$store.dispatch("forks/fetchForks",{})
	}
}
</script>
