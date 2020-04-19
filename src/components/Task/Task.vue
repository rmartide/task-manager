<template>
	<div>
		<h3 data-spec="taskName">{{ name }}</h3>
		<span data-spec="taskDescription">{{ description }}</span>
		<span data-spec="taskStreak">Streak: {{streak}} days</span>
		<button data-spec="completeTaskButton" @click="handleClick">
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
		description: String,
		streak: Number,
		complete: Boolean
	},
	methods: {
		handleClick() {
			this.$emit('complete-task');
		}
	}
};
</script>
