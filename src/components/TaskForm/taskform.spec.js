import { render, configure, fireEvent, getNodeText } from "@testing-library/vue";
import { TaskForm } from "@/components";
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
	});

	it("When it receives an id it renders the values", () => {
		const { task1 } = mockData;
		const { getByTestId } = render(Details, {
			data() {
				return {
					task: task1
				};
			},
			props: {
				id: task1.id
			}
		});

		expect(getByTestId("taskNameInput")).toHaveTextContent(task1.name);
		expect(getByTestId("taskDescriptionInput")).toHaveTextContent(task1.description);
		expect(getByTestId("taskDurationInput")).toHaveTextContent(task1.duration);
	})
});
