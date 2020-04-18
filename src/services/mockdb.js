let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const clearStorage = () => {
    localStorage.removeItem("tasks");
    tasks = [];
}

const createTask = (task) => {
    tasks.push({...task, complete: false});
    saveTasks();
    return Promise.resolve();
}

const getAllTasks = () => {
    return Promise.resolve(tasks);
}

const completeTask = (task) => {
    const index = tasks.indexOf(task);
    tasks[index].complete = true;
    saveTasks();
    return Promise.resolve();
}

export default {
    createTask,
    getAllTasks,
    completeTask,
    clearStorage
}