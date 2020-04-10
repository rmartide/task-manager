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

	it("Empty component shows: There are no tasks", () => {
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
});
