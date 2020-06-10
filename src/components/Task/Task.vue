<template>
	<div>
		<div class="md-layout md-alignment-center">
			<md-card md-with-hover class="md-layout-item md-xsmall-size-75 md-small-size-50 md-medium-size-33 md-size-25">
				<md-ripple>
					<md-card-header>
						<div class="md-title" data-spec="taskName">{{ name }}</div>
					</md-card-header>
					<md-card-content class="md-card-content md-alignment-">
						<div class="md-layout">
							<span data-spec="taskDescription">{{ description }}</span>
						</div>
						<div class="md-layout">
							<span data-spec="taskStreak">Streak: {{streak}} days</span>
						</div>
					</md-card-content>
				</md-ripple>
			</md-card>
		</div>
		<div class="md-layout md-alignment-center">
			<md-button
				data-spec="completeTaskButton"
				@click="handleClick"
				class="md-raised md-primary md-layout-item md-xsmall-size-75 md-small-size-50 md-medium-size-33 md-size-25"
			>Complete task</md-button>
		</div>
		<div class="md-layout md-alignment-center">
			<BaseTimer @times-up="handleClick" @time-passed="updateRemainingDuration" :remainingDuration="remainingDuration"></BaseTimer>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "Task",
	props: {
		id: Number,
		name: String,
		description: String,
		streak: Number,
		complete: Boolean,
		remainingDuration: Number
	},
	methods: {
		handleClick: async function() {
			await this.$store.dispatch('completeTask', this.id)
			this.$router.push("/");
		},
		updateRemainingDuration: async function(timePassed) {
			await this.$store.dispatch('updateRemainingDuration', { id: this.id, remainingDuration: timePassed });
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
