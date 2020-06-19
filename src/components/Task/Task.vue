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
				@click="completeTask"
				class="md-raised md-primary md-layout-item md-xsmall-size-75 md-small-size-50 md-medium-size-33 md-size-25"
			>Complete task</md-button>
		</div>
		<div class="md-layout md-alignment-center">
			<BaseTimer @times-up="completeTask" @time-passed="updateRemainingDuration" :remainingDuration="remainingDuration"></BaseTimer>
		</div>
		<div class="md-layout md-alignment-center">
			<md-button
				data-spec="deleteTaskButton"
				@click="deleteTask"
				class="md-raised md-primary md-layout-item md-xsmall-size-75 md-small-size-50 md-medium-size-33 md-size-25"
			>Delete task</md-button>
		</div>
		<div class="md-layout md-alignment-center">
			<md-button
				data-spec="editTaskButton"
				@click="editTask"
				class="md-raised md-primary md-layout-item md-xsmall-size-75 md-small-size-50 md-medium-size-33 md-size-25"
			>Edit task</md-button>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Swal from 'sweetalert2';

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
		completeTask: async function () {
			await this.$store.dispatch('completeTask', this.id)
			this.$router.push("/");
		},
		editTask: async function () {

		},
		deleteTask: async function () {
			const result = await Swal.fire({
				title: 'Are you sure you want to delete the task?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!'
			});
			if (result.value) {
				const result = await Swal.fire(
					'Deleted!',
					'Your file has been deleted.',
					'success'
				);
				this.$router.push("/");
			}
		},
		updateRemainingDuration: async function (timePassed) {
			await this.$store.dispatch('updateRemainingDuration', { id: this.id, remainingDuration: timePassed });
		}
	}
};
</script>

<style lang="scss" scoped>
</style>
