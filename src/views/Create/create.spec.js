import { render, configure } from "@testing-library/vue";
import { Create } from "@/views";
import Vue from "vue";
import VueMaterial from "vue-material";
import { mockData, mockImplementation } from "@/services/mockdata";
Vue.use(VueMaterial);
import api from "@/services/api";

import "@testing-library/jest-dom";

jest.mock("@/services/api", () => {
	return {
		getTask: jest.fn(() => mockImplementation.getTask())
	};
});

configure({ testIdAttribute: "data-spec" });

describe("Create.vue", () => {    
	it("Component renders", () => {
		const { getByTestId } = render(Create);

		getByTestId("pageTitle");

		getByTestId("taskForm");
	});

	it("Component elements contain the expected text", () => {

		const expectedTitle = "New task";

		const { getByTestId } = render(Create);

		expect(getByTestId("pageTitle")).toHaveTextContent(expectedTitle);

	})

	it("When it receives an id it renders the correct task", () => {
		const { task1 } = mockData;
		const { getByTestId } = render(Create, {
			data() {
				return {
					task: task1
				};
			},
			props: {
				id: task1.id
			}
		});

		expect(api.getTask).toBeCalledWith(task1.id);
		expect(api.getTask()).resolves.toBe(task1);
	});
});
