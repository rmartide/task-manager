import { render, configure, fireEvent } from "@testing-library/vue";
import TaskForm from "@/components/TaskForm/TaskForm.vue";
import $router from "@/router/index";
import Vue from "vue";
import VueMaterial from "vue-material";
Vue.use(VueMaterial);

jest.mock("@/router/index");

configure({ testIdAttribute: "data-spec" });

describe("TaskForm.vue", () => {
	it("component renders", () => {
		const { getByTestId } = render(TaskForm);

		getByTestId("taskNameInput");

		getByTestId("taskDescriptionInput");

		getByTestId("taskDuration");

		getByTestId("createTaskButton");
	});

	it("method createTask gets called with expected parameters", async () => {
		const $store = {
			dispatch: jest.fn(() => {})
		}
		const { getByTestId } = render(TaskForm, {
			mocks: {
				$router,
				$store
			}
		});

		const name = "Name";
		const description = "Description";

		const taskNameInput = getByTestId("taskNameInput");

		await fireEvent.update(taskNameInput, name);

		const taskDescriptionInput = getByTestId("taskDescriptionInput");

		await fireEvent.update(taskDescriptionInput, description);

		const button = getByTestId("createTaskButton");

		await fireEvent.click(button);

		expect($store.dispatch).toHaveBeenCalledWith("createTask", { name, description });

		expect($router.push).toHaveBeenCalledWith("/");
	});

	it("From shows error if name is missing and it doesn't call dispatch", async () => {
		const $store = {
			dispatch: jest.fn(() => {})
		}
		const { getByTestId } = render(TaskForm, {
			mocks: {
				$router,
				$store
			}
		});

		const button = getByTestId("createTaskButton");

		await fireEvent.click(button);

		expect($store.dispatch).not.toHaveBeenCalled();
		
		expect($router.push).not.toHaveBeenCalled();

	});
});
