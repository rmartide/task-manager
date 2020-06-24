<template>
	<div>
		<form id="app" @submit="checkForm" action="https://vuejs.org/" method="post">
			<div class="md-layout md-alignment-center">
				<md-card class="md-layout-item md-xsmall-size-75 md-small-size-50 md-medium-size-33 md-size-25">
					<md-card-content>
						<md-field :class="messageClass">
							<label data-spec="taskNameLabel">Task name</label>
							<md-input data-spec="taskNameInput" v-model="name"></md-input>
							<span class="md-error">The name is required</span>
						</md-field>
						<md-field>
							<label data-spec="taskDescriptionLabel">Task description</label>
							<md-input data-spec="taskDescriptionInput" v-model="description"></md-input>
						</md-field>
						<md-field>
							<label data-spec="taskDurationLabel">Task duration (minutes)</label>
							<md-input data-spec="taskDurationInput" v-model="duration" type="number" min="1"></md-input>
						</md-field>
					</md-card-content>
					<md-progress-bar class="md-primary" md-mode="indeterminate" v-if="loading" />
					<md-card-actions>
						<md-button data-spec="createTaskButton" class="md-icon-button md-accent" @click="checkForm">
							<md-icon>{{buttonText}}</md-icon>
						</md-button>
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
	props: ['task'],
	data() {
		return {
			name: "",
			description: "",
			duration: 5,
			hasMessages: false,
			loading: false
		};
	},
	methods: {
		createTask: async function () {
			this.loading = true;
			await this.$store.dispatch('createTask', { name: this.name, description: this.description, duration: this.duration })
			this.loading = false;
			this.$router.push("/");
		},
		updateTask: async function () {
			this.loading = true;
			await this.$store.dispatch('updateTask', { ...this.task, name: this.name, description: this.description, duration: this.duration })
			this.loading = false;
			this.$router.push("/");
		},
		checkForm: function (e) {
			this.errors = [];

			if (this.name === "") {
				this.hasMessages = true;
			}
			else {
				this.task ? this.updateTask() : this.createTask();
			}
			e.preventDefault();
		}
	},
	computed: {
		messageClass() {
			return {
				'md-invalid': this.hasMessages
			}
		},
		buttonText() {
			return this.task ? 'update' : 'create'
		}
	},
	watch: {
		task(newTask) {
			if (newTask) {
				const { name, description, duration } = newTask;
				this.name = name;
				this.description = description;
				this.duration = duration;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.md-progress-bar {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
}
</style>
