import Vue from "vue";
import Vuex from "vuex";
import api from "@/services/api";
import mockdb from "@/services/mockdb";

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
			state.tasks = tasks.filter((task) => task.complete === false);
		},
		addTask(state, { task }) {
			state.tasks.push(task);
		},
		clearTasks(state) {
			state.tasks = [];
		}
	},
	actions: {
		async getAllTasks({ commit }) {
			const tasks = await api.getAllTasks();

			commit("loadTasks", { tasks });
		},
		async getUncompletedTasks({ commit }) {
			const tasks = await api.getAllTasks();

			commit("loadUncompletedTasks", { tasks });
		},
		async createTask({ commit }, t) {
			const task = await api.createTask(t);

			commit("addTask", { task });
		},
		async completeTask({ commit }, id) {
			const tasks = await api.completeTask(id);

			commit("loadUncompletedTasks", { tasks });
		},
		updateRemainingDuration({}, { id, remainingDuration }) {
			api.updateTask(id, { remainingDuration });
		},
		clearTasks({ commit }) {
			mockdb.clearStorage();

			commit("clearTasks");
		},
		async editTask({ }, task) {
			const {id, ...rest} = task;
			await api.updateTask(id, rest);
		},
		async deleteTask({}, id) {
			await api.deleteTask(id);
		}
	},
	modules: {}
});
