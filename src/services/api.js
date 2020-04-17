import driver from './driver';

const api = {
	getAllTasks: driver.getAllTasks,
	createTask: driver.createTask,
	completeTask: driver.completeTask
};

export default api;
