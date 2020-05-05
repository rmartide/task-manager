<template>
	<div>
		<form id="app" @submit="checkForm" action="https://vuejs.org/" method="post">
			<div class="md-layout md-alignment-center">
				<md-card class="md-layout-item md-small-size-50 md-medium-size-33 md-size-25">
					<md-card-content>
						<md-field :class="messageClass">
							<label>Task name</label>
							<md-input data-spec="taskNameInput" v-model="name"></md-input>
							<span class="md-error">The name is required</span>
						</md-field>
						<md-field>
							<label>Task description</label>
							<md-input data-spec="taskDescriptionInput" v-model="description"></md-input>
						</md-field>
					</md-card-content>
					<md-card-actions>
						<md-button type="submit" class="md-primary" data-spec="createTaskButton">Create task</md-button>
					</md-card-actions>
				</md-card>
			</div>
		</form>
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
			description: "",
			hasMessages: false
		};
	},
	methods: {
		createTask: async function () {
			this.$store.dispatch('createTask', { name: this.name, description: this.description })

			this.$router.push("/");
		},
		checkForm: function (e) {
			if (this.name && this.age) {
				return true;
			}

			this.errors = [];

			if (!this.name) {
				this.hasMessages = true;
			}
			else {
				this.createTask();
			}
			e.preventDefault();
		}
	},
	computed: {
		messageClass() {
			return {
				'md-invalid': this.hasMessages
			}
		}
	}
};
</script>
