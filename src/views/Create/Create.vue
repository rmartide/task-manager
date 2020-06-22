<template>
	<div class="create">
		<h1 data-spec="pageTitle">New task</h1>
		<TaskForm data-spec="taskForm" :task="task"></TaskForm>
	</div>
</template>

<script>
import api from '@/services/api';
import {TaskForm} from "@/components/";

export default {
	name: "Create",
	props: ['id'],
	data() {
		return {
			task: null
		}
	},
	components: { TaskForm },
	mounted: async function () {
		if (this.$props?.id !== undefined) {
			this.task = await api.getTask(this.$props.id);
		}
	}
};
</script>
