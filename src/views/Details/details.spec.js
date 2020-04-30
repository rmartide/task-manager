import { render, configure, queryByTestId } from "@testing-library/vue";
import { Details } from "@/views";
import api from "@/services/api";
import { mockData, mockImplementation } from "@/services/mockdata";

import "@testing-library/jest-dom";

jest.mock("@/services/api", () => {
	return {
		getTask: jest.fn(() => mockImplementation.getTask())
	};
});

configure({ testIdAttribute: "data-spec" });

describe("Details.vue", () => {
	it("component renders", () => {
		const { queryByTestId } = render(Details);

        expect(queryByTestId("pageTitle")).toBeNull();
        expect(queryByTestId("taskName")).toBeNull();
        expect(queryByTestId("taskDescription")).toBeNull();
	});

	it("When it receives an id it renders the correct task", () => {
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

		expect(api.getTask).toBeCalledWith(task1.id);
		expect(api.getTask()).resolves.toBe(task1);

        expect(getByTestId("taskName")).toHaveTextContent(task1.name);
        expect(getByTestId("taskDescription")).toHaveTextContent(task1.description);
	});
});
