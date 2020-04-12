import { render, configure, fireEvent } from "@testing-library/vue";
import Task from "@/components/Task/Task.vue";

configure({ testIdAttribute: "data-spec" });

describe("Task.vue", () => {
	it("component renders", () => {
		const { getByTestId } = render(Task);

		getByTestId("taskName");

		getByTestId("taskDescription");

		getByTestId("completeTaskButton");
	});

	it("complete button doesn't render if the task is completed", () => {
		const { queryByTestId } = render(Task,{
			data() {
				return {
					completed: true
				}
			}
		});
		
		expect(queryByTestId("completeTaskButton")).toBeNull();

	});

/* 	it("clicking the complete button changes the completed variable from false to true", async () => {
		const { getByTestId, container } = render(Task,{
			data() {
				return {
					completed: false
				}
			}
		});

		const button = queryByTestId("completeTaskButton");

		await fireEvent.click(button);
		
		container.

	}) */
});
