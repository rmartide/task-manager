import { render, configure, fireEvent } from "@testing-library/vue";
import TaskForm from "@/components/TaskForm/TaskForm.vue";
import api from "@/services/api";

jest.mock("@/services/api");

configure({ testIdAttribute: "data-spec" });

describe("TaskForm.vue", () => {
	it("component renders", () => {
		const { getByTestId } = render(TaskForm);

		getByTestId("taskNameInput");

		getByTestId("taskDescriptionInput");

		getByTestId("createTaskButton");
	});

	it("method createTask gets called", async () => {

		const $router = { push: jest.fn(() => {})}

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
