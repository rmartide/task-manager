<template>
	<div data-spec="taskList">
		<div v-if="tasks && tasks.length === 0" class="no-tasks-container">
			<h3 data-spec="noTasksText">There are no tasks: </h3>
			<md-button @click="goCreate" class="md-primary" data-spec="createTaksButton">create task</md-button>
		</div>
		<div v-else-if="tasks && tasks.length !== 0">
			<transition-group appear name="custom-classes-transition" enter-active-class="animated fadeIn" tag="div">
				<ListItem @click.native="onClick(task.id)" v-for="task in tasks" :key="task.id" data-spec="listItemComponent" :name="task.name"></ListItem>
			</transition-group>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { ListItem } from '@/components';

export default {
	name: "TaskList",
	props: {
		items: {
			type: Array
		}
	},
	data() {
		return {
			tasks: []
		};
	},
	components: {
		ListItem
	},
	methods: {
		onClick(id) {
			this.$router.push(`details/${id}`);
		},
		goCreate() {
			this.$router.push(`create`);
		}
	},
	mounted() {

	},
	watch: {
		items(newItems) {
			if (newItems) {
				for (let i = 0; i < newItems.length; i++) {
					// Where 300 is milliseconds to delay
					let delay = i * 150;

					setTimeout(function () {
						this.tasks.push(newItems[i])
					}.bind(this), delay);
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
	.no-tasks-container {
		display: inline-flex;
		align-items: center;
		padding-bottom: 1em;
	}
</style>