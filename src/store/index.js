import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    loadTasks(state, payload) {
      state.tasks = payload.tasks;
    }
  },
  actions: {
    async getAllTasks() {
      const tasks = await api.getAllTasks();

      commit('loadTasks', { tasks });
    }
  },
  modules: {
  }
})
