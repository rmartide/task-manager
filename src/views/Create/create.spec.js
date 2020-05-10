import { render, configure } from "@testing-library/vue";
import { Create } from "@/views";
import Vue from "vue";
import VueMaterial from "vue-material";
Vue.use(VueMaterial);

import "@testing-library/jest-dom";

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
});
