<template>
	<div>
		<div class="md-layout md-alignment-center">
			<md-card class="md-layout-item md-small-size-50 md-medium-size-33 md-size-25">
				<md-card-content>
					<md-field>
						<label>Task name</label>
						<md-input data-spec="taskNameInput" v-model="name"></md-input>
					</md-field>
					<md-field>
						<label>Task description</label>
						<md-input data-spec="taskDescriptionInput" v-model="description"></md-input>
					</md-field>
				</md-card-content>
				<md-card-actions>
					<md-button type="submit" class="md-primary" data-spec="createTaskButton" @click="createTask">Create task</md-button>
				</md-card-actions>
			</md-card>
		</div>
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
		createTask: async function () {
			this.$store.dispatch('createTask', { name: this.name, description: this.description })

			this.$router.push("/");
		}
	}
};
</script>
