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

	it("renders props correctly for showTime = true", () => {

		const name = 'Name';
		const description = 'Description';
		const streak = 2;

		const { getByTestId, queryByTestId } = render(Task, {
			props: {
				name: name,
				description: description,
				streak: streak,
				completed: false,
				showTime: true
			}
		}
		);


		expect(getByTestId("taskName")).toHaveTextContent(name);

		expect(queryByTestId("taskDescription")).toBeNull();
		
		expect(queryByTestId("taskStreak")).toBeNull();

		expect(queryByTestId("completeTaskButton")).toBeNull();


	});


	it("renders props correctly for showTime = false", () => {

		const name = 'Name';
		const description = 'Description';
		const streak = 2;

		const { getByTestId, queryByTestId } = render(Task, {
			props: {
				name: name,
				description: description,
				streak: streak,
				completed: false
			}
		}
		);


		expect(getByTestId("taskName")).toHaveTextContent(name);

		expect(queryByTestId("taskDescription")).toHaveTextContent(description);
		
		expect(queryByTestId("taskStreak")).toHaveTextContent(`Streak: ${streak} days`);

		getByTestId("completeTaskButton");
	});

	it("Clicking on the complete button emmits complete-task event", async () => {

		const $emit = jest.fn(() => {});

		const { getByTestId } = render(Task, {
			mocks: {
				$emit
			}
		});

		const button = getByTestId("completeTaskButton");

		await fireEvent.click(button);

		expect($emit).toBeCalledWith('complete-task');

	});
});
