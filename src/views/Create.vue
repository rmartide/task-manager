<template>
	<div class="create">
		<h1>new task</h1>
		<TaskForm></TaskForm>
	</div>
</template>

<script>
import TaskForm from "@/components/TaskForm/TaskForm";

export default {
	name: "Create",
	components: { TaskForm }
};
</script>
