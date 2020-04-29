import driver from './driver';

const api = {
	getAllTasks: driver.getAllTasks,
	createTask: driver.createTask,
	completeTask: driver.completeTask,
	getTask: driver.getTask
};

export default api;
