import { render, configure } from "@testing-library/vue";
import { Home } from "@/views";
import $store from "@/store/index";
import $router from "@/router/index";
import { mockData } from "@/services/mockdata";
import Vue from "vue";
import VueMaterial from "vue-material";
Vue.use(VueMaterial);

import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-spec" });

jest.mock("@/store/index", () => {
	return {
		state: {
			tasks: []
		},
		dispatch: jest.fn(() => {})
	};
});

jest.mock("@/router/index");

describe("Home.vue", () => {
	beforeEach(() => {
		$store.state.tasks = [];
	});

	it("component renders", () => {
		const { getByTestId } = render(Home, {
			mocks: {
				$router,
				$store
			}
		});

		getByTestId("pageTitle");

		getByTestId("taskList");

		getByTestId("addTaskButton");

		getByTestId("noTasksText");
	});

	it("Component calls the store", () => {
		$store.state.tasks = mockData.tasks;

		render(Home, {
			mocks: {
				$router,
				$store
			}
		});

		expect($store.dispatch).toBeCalledWith("getUncompletedTasks");
	});

	it("Component elements contain the expected text", () => {
		const expectedTitle = "Tasks to do";

		const { getByTestId } = render(Home, {
			mocks: {
				$router,
				$store
			}
		});

		expect(getByTestId("pageTitle")).toHaveTextContent(expectedTitle);
	});
});
