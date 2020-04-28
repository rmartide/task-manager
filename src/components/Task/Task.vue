<template>
	<div>
		<h3 data-spec="taskName">{{ name }}</h3>
		<template v-if="!showTime">
			<span data-spec="taskDescription">{{ description }}</span>
			<span data-spec="taskStreak">Streak: {{streak}} days</span>
			<button data-spec="completeTaskButton" @click="handleClick">Complete</button>
		</template>
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
		complete: Boolean,
		showTime: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		handleClick() {
			this.$emit('complete-task');
		}
	}
};
</script>
