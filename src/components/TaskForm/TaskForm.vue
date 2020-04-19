<template>
	<div>
		<input type="text" data-spec="taskNameInput" />
		<input type="text" data-spec="taskDescriptionInput" />
		<button data-spec="createTaskButton" @click="createTask">
			Create task
		</button>
	</div>
</template>

<script>
// @ is an alias to /src
import api from "@/services/api";

export default {
	name: "TaskForm",
	data() {
		return {
			name: "",
			description: ""
		};
	},
	methods: {
		createTask: async function() {
			this.$store.dispatch('createTask', {name: this.name, description: this.description})

			this.$router.push("/");
		}
	}
};
</script>
