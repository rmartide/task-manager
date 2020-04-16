import { render, configure, fireEvent } from "@testing-library/vue";
import TaskForm from "@/components/TaskForm/TaskForm.vue";
import api from "@/services/api";
import $router from "@/router/index";

jest.mock("@/services/api");
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
				$router
			}
		});

		const button = getByTestId("createTaskButton");

		await fireEvent.click(button);

		expect(api.createTask).toHaveBeenCalled();

		expect($router.push).toHaveBeenCalledWith("/");
	});
});
