<template>
	<div class="create">
		<h1 data-spec="pageTitle">New task</h1>
		<TaskForm data-spec="taskForm"></TaskForm>
	</div>
</template>

<script>
import {TaskForm} from "@/components/";

export default {
	name: "Create",
	components: { TaskForm }
};
</script>
