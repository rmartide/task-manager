import driver from './driver';

const api = {
	getAllTasks: driver.getAllTasks,
	createTask: driver.createTask,
	completeTask: driver.completeTask,
	getTask: driver.getTask,
	updateTask: driver.updateTask,
	deleteTask: driver.deleteTask
};

export default api;
