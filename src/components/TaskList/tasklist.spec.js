import { render, configure } from "@testing-library/vue";
import {TaskList} from "@/components";
import Vue from "vue";
import VueMaterial from "vue-material";
import { mockData } from "@/services/mockdata";
Vue.use(VueMaterial);

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
		const tasks = [mockData.task1];

		const { queryByTestId } = render(TaskList, {
			data() {
				return {
					tasks
				};
			}
		});

		expect(queryByTestId("noTasksText")).toBeNull();
	});

	it("There's one element on the list for each task on the array", () => {

		const tasks = [mockData.task1, mockData.task2, mockData.task3];

		const { getAllByTestId } = render(TaskList, {
			data() {
				return {
					tasks
				};
			}
		});

		expect(getAllByTestId("listItemComponent").length).toEqual(tasks.length);
	});
});
