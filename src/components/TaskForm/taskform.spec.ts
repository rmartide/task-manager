import { render, configure } from "@testing-library/vue";
import TaskForm from "@/components/TaskForm/TaskForm.vue";

configure({ testIdAttribute: "data-spec" });

describe("TaskForm.vue", () => {
	it("component renders", () => {
		const { getByTestId } = render(TaskForm as any);

		getByTestId("taskNameInput");

		getByTestId("taskDescriptionInput");

		getByTestId("createTaskButton");
	});
});
