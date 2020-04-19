import { render, configure, fireEvent } from "@testing-library/vue";
import TaskForm from "@/components/TaskForm/TaskForm.vue";
import $store from "@/store/index";
import $router from "@/router/index";

jest.mock("@/store/index");
jest.mock("@/router/index");

configure({ testIdAttribute: "data-spec" });

describe("TaskForm.vue", () => {
	it("component renders", () => {
		const { getByTestId } = render(TaskForm);

		getByTestId("taskNameInput");

		getByTestId("taskDescriptionInput");

		getByTestId("createTaskButton");
	});

	it("method createTask gets called", async () => {

		const { getByTestId } = render(TaskForm, {
			mocks: {
				$router,
				$store
			}
		});

		const button = getByTestId("createTaskButton");

		await fireEvent.click(button);

		expect($store.dispatch).toHaveBeenCalled();

		expect($router.push).toHaveBeenCalledWith("/");
	});
});
