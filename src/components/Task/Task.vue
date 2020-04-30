<template>
	<div>
		<md-card md-with-hover class="md-accent">
			<md-ripple>
				<md-card-header>
					<div class="md-title" data-spec="taskName">{{ name }}</div>
				</md-card-header>
				<md-card-content class="md-card-content">
					<template v-if="!showTime">
						<span data-spec="taskDescription">{{ description }}</span>
						<span data-spec="taskStreak">Streak: {{streak}} days</span>
						<button data-spec="completeTaskButton" @click="handleClick">Complete</button>
					</template>
				</md-card-content>
			</md-ripple>
		</md-card>
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

<style lang="scss" scoped>
.md-card {
	width: 320px;
	margin: 4px;
	display: inline-block;
	vertical-align: top;
}
</style>
