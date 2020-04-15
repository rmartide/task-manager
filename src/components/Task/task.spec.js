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

		getByTestId("taskStreak");
	});

	it("complete button renders if the task is not completed", () => {
		const { getByTestId } = render(Task,{
			data() {
				return {
					completed: false
				}
			}
		});
		
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

	it("clicking the complete button changes the completed variable from false to true and hides the button", async () => {
		const { queryByTestId, getByTestId } = render(Task,{
			data() {
				return {
					completed: false
				}
			}
		});

		const button = getByTestId("completeTaskButton");

		await fireEvent.click(button);

		expect(queryByTestId("completeTaskButton")).toBeNull();

	});

	it("renders props correctly", () => {

		const name = 'Name';
		const description = 'Description';
		const streak = 2;

		const { getByTestId } = render(Task, {
			props: {
				name: name,
				description: description,
				streak: streak
			}
		}
		);


		expect(getByTestId("taskName")).toHaveTextContent(name);

		expect(getByTestId("taskDescription")).toHaveTextContent(description);
		
		expect(getByTestId("taskStreak")).toHaveTextContent(`Streak: ${streak} days`);

	});
});
