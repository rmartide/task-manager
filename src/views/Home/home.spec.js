import { render, configure } from "@testing-library/vue";
import { Home } from "@/views";
import $store from "@/store/index";
import $router from "@/router/index";

jest.mock("@/store/index", () => {
    return {
        state: {
            tasks: []
        },
        dispatch: jest.fn(() => {})
    }
});
jest.mock("@/router/index");

import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-spec" });

describe("Home.vue", () => {    
	it("component renders", () => {
		const { getByTestId } = render(Home, {
            mocks: {
                $router,
                $store
            }
        });

		getByTestId("pageTitle");

		getByTestId("taskList");

        getByTestId("addTaskButton");
        
        expect($store.dispatch).toBeCalledWith('getUncompletedTasks');
	});
});
