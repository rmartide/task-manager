<template>
	<div class="home">
		<h1>home</h1>
		<button data-spec="addTaskButton" @click="goToCreate">Add task</button>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "Home",
	components: {},
	methods: {
		goToCreate() {
			this.$router.push("create");
		}
	}
};
</script>
