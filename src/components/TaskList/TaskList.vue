<template>
	<div data-spec="taskList">
		<span data-spec="noTasksText" v-if="tasks && tasks.length === 0">There are no tasks</span>
		<div v-else-if="tasks && tasks.length !== 0">
			<transition-group appear name="custom-classes-transition" enter-active-class="animated fadeIn" tag="div">
				<ListItem @click.native="onClick(task.id)" v-for="task in tasks" :key="task.id" data-spec="listItemComponent" :name="task.name"></ListItem>
			</transition-group>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import { ListItem } from '@/components';

export default {
	name: "TaskList",
	props: {
		items: {
			type: Array
		}
	},
	data() {
		return {
			tasks: []
		};
	},
	components: {
		ListItem
	},
	methods: {
		onClick(id) {
			this.$router.push(`details/${id}`);
		}
	},
	mounted() {
		if (this.items) {
			for (let i = 0; i < this.items.length; i++) {
				// Where 300 is milliseconds to delay
				let delay = i * 150;

				setTimeout(function () {
					this.tasks.push(this.items[i])
				}.bind(this), delay);
			}
		}
	}
};
</script>
