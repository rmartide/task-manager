import { TaskListType } from "./../../models/TaskModel";
import { render, configure } from "@testing-library/vue";
import TaskList from "@/components/TaskList/TaskList.vue";

configure({ testIdAttribute: "data-spec" });

describe("TaskList.vue", () => {
	it("component renders", () => {
		const { getByTestId } = render(TaskList as any);

		getByTestId("taskList");
	});

	it("Empty component shows: There are no tasks", () => {
		const tasks: TaskListType = [];
		const component = TaskList as any;

		const { getByTestId } = render(component, {
			props: {
				tasks
			}
		});

        const { nodeValue } = getByTestId("noTasksText");
        
        const expectedValue = "There are no tasks";

        expect(nodeValue).toBe(expectedValue);
	});
});
