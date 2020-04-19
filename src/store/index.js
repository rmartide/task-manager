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
		loadCompletedTasks(state, { tasks }) {
			state.tasks = tasks.filter(({completed}) => !completed);
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
		async getCompletedTasks() {
			const tasks = await api.getAllTasks();

			commit("loadCompletedTasks", { tasks });
		},
		async createTask({ name, description }) {
			const task = await api.createTask({ name, description });

			this.commit("addTask", { task });
		},

		async completeTask(task) {
			const tasks = await api.completeTask(task);

			this.commit("loadCompletedTasks", { tasks })
		}
	},
	modules: {}
});
