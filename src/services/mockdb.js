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
    const t = {...task, complete: false, id: tasks.length}
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

export default {
    createTask,
    getAllTasks,
    completeTask,
    clearStorage,
    getTask
}