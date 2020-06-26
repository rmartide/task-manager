import { render, configure, fireEvent, getNodeText } from "@testing-library/vue";
import { TaskForm } from "@/components";
import $router from "@/router/index";
import Vue from "vue";
import VueMaterial from "vue-material";
import { mockData } from "@/services/mockdata";

Vue.use(VueMaterial);

import "@testing-library/jest-dom";

jest.mock("@/router/index");

configure({ testIdAttribute: "data-spec" });

describe("TaskForm.vue", () => {
	it("component renders", () => {
		const { getByTestId } = render(TaskForm);

		getByTestId("taskNameInput");

		getByTestId("taskDescriptionInput");

		getByTestId("taskDurationInput");

		getByTestId("taskNameLabel");

		getByTestId("taskDescriptionLabel");

		getByTestId("taskDurationLabel");

		getByTestId("createTaskButton");
	});

	it("method createTask gets called with expected parameters", async () => {
		const $store = {
			dispatch: jest.fn(() => {})
		};
		const { getByTestId } = render(TaskForm, {
			mocks: {
				$router,
				$store
			}
		});

		const name = "Name";
		const description = "Description";
		const duration = 5;

		const taskNameInput = getByTestId("taskNameInput");

		await fireEvent.update(taskNameInput, name);

		const taskDescriptionInput = getByTestId("taskDescriptionInput");

		await fireEvent.update(taskDescriptionInput, description);

		const button = getByTestId("createTaskButton");

		await fireEvent.click(button);

		expect($store.dispatch).toBeCalledWith("createTask", { name, description, duration });

		expect($router.push).toBeCalledWith("/");
	});

	it("From shows error if name is missing and it doesn't call dispatch", async () => {
		const $store = {
			dispatch: jest.fn(() => {})
		};
		const { getByTestId } = render(TaskForm, {
			mocks: {
				$router,
				$store
			}
		});

		const button = getByTestId("createTaskButton");

		await fireEvent.click(button);

		expect($store.dispatch).not.toBeCalled();
	});

	it("The labels contain the correct text", () => {
		const { getByTestId } = render(TaskForm);

		expect(getNodeText(getByTestId("taskNameLabel"))).toEqual("Task name");
		expect(getNodeText(getByTestId("taskDescriptionLabel"))).toEqual("Task description");
		expect(getNodeText(getByTestId("taskDurationLabel"))).toEqual("Task duration (minutes)");
		expect(getByTestId("createTaskButton").textContent).toContain("create");
	});

	it("When it receives an task it renders the values", async () => {
		const { task1 } = mockData;
		const component = render(TaskForm);
		const { getByTestId } = component;
		await component.updateProps({ task: task1 });

		expect(getByTestId("taskNameInput").value).toEqual(task1.name);
		expect(getByTestId("taskDescriptionInput").value).toEqual(task1.description);
		expect(+getByTestId("taskDurationInput").value).toEqual(task1.duration);
	});

	it("When it receives an task the button text changes to update", async () => {
		const { task1 } = mockData;
		const component = render(TaskForm);
		const { getByTestId } = component;
		expect(getByTestId("createTaskButton").textContent).toContain("create");
		await component.updateProps({ task: task1 });
		expect(getByTestId("createTaskButton").textContent).toContain("update");
	});

	it("When it receives an task the button calls to updateTask", async () => {
		const { task1 } = mockData;
		const $store = {
			dispatch: jest.fn(() => {})
		};
		const component = render(TaskForm, {
			mocks: {
				$router,
				$store
			}
		});
		const { getByTestId } = component;

		await component.updateProps({ task: task1 });

		const button = getByTestId("createTaskButton");

		await fireEvent.click(button);

		expect($store.dispatch).toBeCalledWith("updateTask", task1);
		expect($router.push).toBeCalledWith("/");
	});
});
