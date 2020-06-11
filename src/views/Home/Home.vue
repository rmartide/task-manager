<template>
	<div class="home">
		<h1 data-spec="pageTitle">Tasks to do</h1>
		<TaskList data-spec="taskList" :items="tasks"></TaskList>
		<md-button class="md-accent" data-spec="addTaskButton" @click="goToCreate">Add task</md-button>
		<md-button class="md-accent"  @click="clearList">Clear list</md-button>
	</div>
</template>

<script>
// @ is an alias to /src
import {TaskList} from '@/components';
import api from '@/services/api';

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
		},
		clearList() {
			this.$store.dispatch('clearTasks')
		}
	},
	mounted() {
		this.$store.dispatch('getUncompletedTasks');
	}
};
</script>
