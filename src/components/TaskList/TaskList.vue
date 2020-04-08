<template>
	<div data-spec="taskList">
		<span data-spec="noTasksText" v-if="tasks && tasks.length === 0">
			There are no tasks
		</span>
	</div>
</template>

<script>
// @ is an alias to /src

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
	components: {}
};
</script>
