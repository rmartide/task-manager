<template>
	<div>
		<md-card md-with-hover class="md-accent">
			<md-ripple>
				<md-card-header>
					<div class="md-title" data-spec="taskName">{{ name }}</div>
				</md-card-header>
				<template v-if="!showTime">
					<md-card-content class="md-card-content md-alignment-">
						<div class="md-layout">
							<span data-spec="taskDescription">{{ description }}</span>
						</div>
						<div class="md-layout">
							<span data-spec="taskStreak">Streak: {{streak}} days</span>
						</div>
					</md-card-content>
						<md-card-actions>
							<md-button data-spec="completeTaskButton" @click="handleClick">Complete</md-button>
						</md-card-actions>
				</template>
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
		handleClick(task) {
			this.$store.dispatch('completeTask', { task });
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
