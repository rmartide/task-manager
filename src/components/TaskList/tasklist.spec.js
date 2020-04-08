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
		const component = TaskList;

		const { getByTestId } = render(component, {
			props: {
				tasks
			}
		});

		const expectedValue = "There are no tasks";

		expect(getByTestId("noTasksText")).toHaveTextContent(expectedValue);
	});
});
