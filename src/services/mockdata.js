const task1 = { name: "name1", description: "description1", complete: false, id: 1, streak: 5 };
const task2 = { name: "name2", description: "description2", complete: false, id: 2 };
const task3 = { name: "name3", description: "description3", complete: false, id: 3 };
const task4 = { name: "name4", description: "description4", complete: true, id: 4 };
let tasks = [task1, task2, task3, task4];

const getAllTasks = () => Promise.resolve(tasks);
const createTasks = (t) => Promise.resolve(t);
const completeTask = (id) => {
	const result = [...tasks];
	const index = result.findIndex((x) => x.id === id);
	result[index].complete = true;
	return Promise.resolve(result);
};
const getTask = () => Promise.resolve(task1);
const deleteTask = (id) => {
	const index = tasks.findIndex((x) => x.id === id);
	tasks.splice(index, 1);
}

const updateTask = (task) => {
	const index = tasks.findIndex((x) => x.id === task.id);
	tasks[index] = task;
}

const initTasks = () => tasks = [task1, task2, task3, task4];

export const mockData = {
	task1,
	task2,
	task3,
	task4,
	tasks,
}

export const mockImplementation = {
	getAllTasks,
	createTasks,
	completeTask,
	getTask,
	deleteTask,
	initTasks,
	updateTask
}