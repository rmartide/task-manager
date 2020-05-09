<template>
	<div v-if="task !== null">
		<div class="md-layout md-alignment-center spacing">
			<md-toolbar class="md-layout-item md-xsmall-size-75 md-small-size-50 md-medium-size-33 md-size-25" :md-elevation="1">
				<span data-spec="pageTitle" class="md-title center-text">{{task.name}}</span>
			</md-toolbar>
		</div>
		<Task v-bind="{...task, showTime: false}"></Task>
	</div>
</template>

<script>
import api from '@/services/api';
import { Task } from '@/components';

export default {
	name: "Details",
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

<style lang="scss" scoped>

.spacing {
	margin-top: 15px;
	margin-bottom: 5px;
}

.center-text {
	width: 100%;
	text-align: center;
}

</style>