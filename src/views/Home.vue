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
	computed: {
		tasks () {
			return this.$store.state.tasks;
		}
	},
	methods: {
		goToCreate() {
			this.$router.push("create");
		}
	},
	mounted() {
		this.$store.dispatch('getUncompletedTasks');
	}
};
</script>
