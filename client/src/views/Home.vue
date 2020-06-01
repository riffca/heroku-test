<template>
	<div class="forks">
		<tableList />
	</div>
</template>

<script>
import tableList from '../components/table-list' 
// @ is an alias to /src
export default {
	name: 'Home',
	components: {
		tableList
	},
}
</script>
