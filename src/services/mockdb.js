let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const clearStorage = () => {
    localStorage.removeItem("tasks");
    tasks = [];
}

const createTask = (task) => {
    const t = {...task, complete: false}
    tasks.push(t);
    saveTasks();
    return Promise.resolve(t);
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

export default {
    createTask,
    getAllTasks,
    completeTask,
    clearStorage
}