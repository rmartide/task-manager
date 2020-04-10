import { render, configure } from "@testing-library/vue";
import TaskList from "@/components/TaskList/TaskList.vue";

import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-spec" });

describe("TaskList.vue", () => {
	it("component renders", () => {
		const { getByTestId } = render(TaskList);

		getByTestId("taskList");
	});

	it("Empty component shows: There are no tasks", () => {
		const tasks = [];

		const { getByTestId } = render(TaskList, {
			props: {
				tasks
			}
		});

		const expectedValue = "There are no tasks";

		expect(getByTestId("noTasksText")).toHaveTextContent(expectedValue);
	});

	it("There is no message if there's at least one task", () => {
		const task = {
			name: "task",
			description: "description"
		};
		const tasks = [task];

		const { queryByTestId } = render(TaskList, {
			props: {
				tasks
			}
		});

		expect(queryByTestId("noTasksText")).toBeNull();
	});

	it("There's one element on the list for each task on the array", () => {
		const task = {
			name: "task",
			description: "description"
		};
		const tasks = [task, task, task];

		const { getAllByTestId } = render(TaskList, {
			props: {
				tasks
			}
		});

		expect(getAllByTestId('taskComponent').length).toEqual(tasks.length);
	});
});
