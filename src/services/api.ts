import { Task } from "./../models/TaskModel";
const api = {
	getAllTasks: (): Task[] => {
		return [];
	},
	createTask: (t: Task): Promise<void> => {
        return Promise.resolve();
	}
};

export default api;
