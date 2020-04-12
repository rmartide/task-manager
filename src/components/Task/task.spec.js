import { render, configure, fireEvent } from "@testing-library/vue";
import Task from "@/components/Task/Task.vue";

import "@testing-library/jest-dom";

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
/* 
	it("clicking the complete button changes the completed variable from false to true", async () => {
		const { getByTestId } = render(Task,{
			data() {
				return {
					completed: false
				}
			}
		});

		const button = queryByTestId("completeTaskButton");

		await fireEvent.click(button);

		// EXPECT MISSSING!!

	}) */

	it("renders props correctly", () => {

		const name = 'Name';
		const description = 'Description';

		const { getByTestId } = render(Task, {
			props: {
				name: name,
				description: description
			}
		}
		);


		expect(getByTestId("taskName")).toHaveTextContent(name);

		expect(getByTestId("taskDescription")).toHaveTextContent(description);

	})
});
