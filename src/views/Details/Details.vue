<template>
	<div v-if="task !== null">
		<h1 data-spec="pageTitle"></h1>
		<Task v-bind="{...task, showTime: false}"></Task>
	</div>
</template>

<script>
import api from '@/services/api';
import { Task } from '@/components';

export default {
	name: "Deails",
	props: ['id'],
	data() {
		return {
			task: null
		}
	},
	components: {
		Task
	},
	computed: {

	},
	mounted: async function () {
		this.task = await api.getTask(this.$props.id);
	}
};
</script>