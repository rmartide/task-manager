<template>
	<div class="home">
		<h1>home</h1>
		<TaskList :tasks="tasks"></TaskList>
		<button data-spec="addTaskButton" @click="goToCreate">Add task</button>
	</div>
</template>

<script>
// @ is an alias to /src
import TaskList from '@/components/TaskList/TaskList';
import api from '../services/api';

export default {
	name: "Home",
	components: {
		TaskList
	},
	data() {
		return {
			tasks: []
		}
	},
	methods: {
		goToCreate() {
			this.$router.push("create");
		}
	},
	mounted() {
		api.getAllTasks().then(tasks => {
			this.tasks = tasks;
		})
	}
};
</script>
