import {mockData} from './mockdata';

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const clearStorage = () => {
    localStorage.removeItem("tasks");
    tasks = [];
}

const createTask = (task) => {
    const t = {...task, complete: false, id: tasks.length, remainingDuration: task.duration * 60}
    tasks.push(t);
    saveTasks();
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(t);
        }, 2000);
    })
}

const getAllTasks = () => {
    return Promise.resolve(tasks);
}

const completeTask = (task) => {
    const index = tasks.indexOf(task);
    tasks[index].complete = true;
    saveTasks();
    return Promise.resolve(tasks);
}

const getTask = (id) => {
    const task = tasks.find(t => t.id == id)
    return Promise.resolve(task);
}

const updateTask = (id, properties) => {
    const index = tasks.findIndex(t => t.id == id)
    tasks[index] = {
        ...tasks[index],
        ...properties
    }
    saveTasks();
    return Promise.resolve();
}

const deleteTask = (id) => {
	const index = tasks.findIndex((x) => x.id === id);
    tasks.splice(index, 1);
    saveTasks();
    return Promise.resolve();
}

export default {
    createTask,
    getAllTasks,
    completeTask,
    clearStorage,
    getTask,
    updateTask,
    deleteTask
}