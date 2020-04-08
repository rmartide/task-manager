<template>
	<div>
		<h3 data-spec="taskName">{{ name }}</h3>
		<span data-spec="taskDescription">{{ description }}</span>
		<button data-spec="completeTaskButton" v-if="!completed">
			Complete
		</button>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "Task",
	props: {
		name: String,
		description: String
	},
	data() {
		return {
			completed: false
		};
	},
	components: {}
};
</script>
