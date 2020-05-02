<template>
	<div data-spec="taskList">
		<span data-spec="noTasksText" v-if="tasks && tasks.length === 0">There are no tasks</span>
		<div v-else-if="tasks && tasks.length !== 0">
			<ListItem @click.native="onClick(task.id)" v-for="task in tasks" :key="task.id" data-spec="listItemComponent" :name="task.name"></ListItem>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { ListItem } from '@/components/';

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
		ListItem
	},
	methods: {
		onClick(id) {
			this.$router.push(`details/${id}`);
		}
	}
};
</script>
