const task1 = { name: "name1", description: "description1", complete: false };
const task2 = { name: "name2", description: "description2", complete: false };
const task3 = { name: "name3", description: "description3", complete: false };
const task4 = { name: "name4", description: "description4", complete: true };
const tasks = [task1, task2, task3, task4];

const getAllTasks = () => Promise.resolve(tasks);
const createTasks = (t) => Promise.resolve(t);
const completeTask = (t) => {
	const result = [...tasks];
	const index = result.findIndex((x) => x.name === t.name && x.description === t.description);
	result[index].complete = true;
	return Promise.resolve(result);
};

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
	completeTask
}