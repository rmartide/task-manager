// LAZY LOADING
const TaskList = () => import('./TaskList/TaskList.vue');
const Task  = () => import('./Task/Task.vue');
const TaskForm  = () => import('./TaskForm/TaskForm.vue');
const ListItem = () => import('./ListItem/ListItem.vue');

// NORMAL LOADING SINCE IT WILL ALWAYS APPEAR
import  Navbar from './Navbar/Navbar.vue';

export { ListItem, Task, TaskForm, TaskList, Navbar };