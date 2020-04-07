<template>
	<div data-spec="taskList">
        <span data-spec="noTasksText" v-if="tasks.length === 0">
            There are no tasks
        </span>
    </div>
</template>

<script>
// @ is an alias to /src
import { TaskListType } from "@/models/TaskModel";

export default {
	name: "TaskList",
	props: {
		tasks: {
			type: TaskListType
		}
	},
	data() {
		return {};
	},
	components: {}
};
</script>
