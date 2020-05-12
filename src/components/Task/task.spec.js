import { render, configure, fireEvent } from "@testing-library/vue";
import {Task} from "@/components";
import Vue from "vue";
import VueMaterial from "vue-material";
Vue.use(VueMaterial);

import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-spec" });

describe("Task.vue", () => {
	it("component renders", () => {
		const { getByTestId } = render(Task);

		getByTestId("taskName");

		getByTestId("taskDescription");

		getByTestId("completeTaskButton");

		getByTestId("taskStreak");

		getByTestId("startTimerButton");
	});

	it("renders props correctly", () => {
		const name = "Name";
		const description = "Description";
		const streak = 2;

		const { getByTestId } = render(Task, {
			props: {
				name: name,
				description: description,
				streak: streak,
				completed: false
			}
		});

		expect(getByTestId("taskName")).toHaveTextContent(name);

		expect(getByTestId("taskDescription")).toHaveTextContent(description);

		expect(getByTestId("taskStreak")).toHaveTextContent(`Streak: ${streak} days`);

		expect(getByTestId("startTimerButton")).toHaveTextContent(`Start timer`);

		expect(getByTestId("completeTaskButton")).toHaveTextContent(`Complete task`);

	});

	it("Clicking on the complete button emmits complete-task event", async () => {
		const $store = {
			dispatch: jest.fn(() => {})
		};

		const { getByTestId } = render(Task, {
			mocks: {
				$store
			}
		});

		const button = getByTestId("completeTaskButton");

		await fireEvent.click(button);

		expect($store.dispatch).toBeCalled();
	});
});
