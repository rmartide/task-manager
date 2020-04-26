import { render, configure } from "@testing-library/vue";
import { Create } from "@/views";

import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-spec" });

describe("Create.vue", () => {    
	it("component renders", () => {
		const { getByTestId } = render(Create);

		getByTestId("pageTitle");

		getByTestId("taskForm");
	});
});
