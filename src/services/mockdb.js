const tasks = localStorage.getItem("tasks");

if(tasks === null) {
    localStorage.setItem("tasks", []);
}

export const newTask = (task) => {
}