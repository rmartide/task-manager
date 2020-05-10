const task1 = { name: "name1", description: "description1", complete: false, id: 1, streak: 5 };
const task2 = { name: "name2", description: "description2", complete: false, id: 2 };
const task3 = { name: "name3", description: "description3", complete: false, id: 3 };
const task4 = { name: "name4", description: "description4", complete: true, id: 4 };
const tasks = [task1, task2, task3, task4];

const getAllTasks = () => Promise.resolve(tasks);
const createTasks = (t) => Promise.resolve(t);
const completeTask = (t) => {
	const result = [...tasks];
	const index = result.findIndex((x) => x.name === t.name && x.description === t.description);
	result[index].complete = true;
	return Promise.resolve(result);
};
const getTask = () => Promise.resolve(task1);

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
	getTask
}