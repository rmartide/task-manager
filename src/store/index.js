import Vue from "vue";
import Vuex from "vuex";
import api from "@/services/api";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		tasks: []
	},
	mutations: {
		loadTasks(state, { tasks }) {
			state.tasks = tasks;
		},
		loadUncompletedTasks(state, { tasks }) {
			state.tasks = tasks.filter(task => task.complete === false);
		},
		addTask(state, { task }) {
			state.tasks.push(task);
		}
	},
	actions: {
		async getAllTasks() {
			const tasks = await api.getAllTasks();

			commit("loadTasks", { tasks });
		},
		async getUncompletedTasks() {
			const tasks = await api.getAllTasks();

			commit("loadUncompletedTasks", { tasks });
		},
		async createTask({ name, description }) {
			const task = await api.createTask({ name, description });

			this.commit("addTask", { task });
		},

		async completeTask(task) {
			const tasks = await api.completeTask(task);

			this.commit("loadUncompletedTasks", { tasks })
		}
	},
	modules: {}
});
