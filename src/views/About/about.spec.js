import { render, configure } from "@testing-library/vue";
import { About } from "@/views";

import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-spec" });

describe("Home.vue", () => {
	it("component renders", () => {
		const { getByTestId } = render(About);

		getByTestId("pageTitle");
	});
});
