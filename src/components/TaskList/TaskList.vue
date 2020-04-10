<template>
	<div data-spec="taskList">
		<span data-spec="noTasksText" v-if="tasks && tasks.length === 0">
			There are no tasks
		</span>
		<div v-else-if="tasks && tasks.length !== 0">
			<Task v-for="(task, index) in tasks" :key="`task_${index}`" data-spec="taskComponent"></Task>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Task from '@/components/Task/Task';

export default {
	name: "TaskList",
	props: {
		tasks: {
			type: Array
		}
	},
	data() {
		return {};
	},
	components: {
		Task
	}
};
</script>
