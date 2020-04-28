import { render, configure } from "@testing-library/vue";
import { Details } from "@/views";

import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-spec" });

describe("Details.vue", () => {
	it("component renders", () => {
		const { getByTestId } = render(Details);

		getByTestId("pageTitle");
    });
    
    it("When it receives an id it renders the correct task", () => {

        const { getByTestId } = render(Details);
        
        getByTestId('taskComponent');

    })
});
