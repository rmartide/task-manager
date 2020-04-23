import { render } from "@testing-library/vue";
import store from "@/store/index";
import api from "@/services/api";

import "@testing-library/jest-dom";

// SE NECESITA COMPROBAR EL STATEEEEEEEEEEEEEEEEEEEEEEEEE

jest.mock("@/services/api", () => {
	const task1 = { name: "name1", description: "description1", complete: false };
	const task2 = { name: "name2", description: "description2", complete: false };
	const task3 = { name: "name3", description: "description3", complete: false };
	const task4 = { name: "name4", description: "description4", complete: true };
	const tasks = [task1, task2, task3, task4];
	return {
		getAllTasks: jest.fn(() => Promise.resolve(tasks)),
		createTask: jest.fn((t) => Promise.resolve(t)),
		completeTask: jest.fn((t) => {
			const result = [...tasks];
			const index = result.findIndex(x => x.name === t.name && x.description === t.description);
			result[index].complete = true;
			return Promise.resolve(result);
		})
	};
});

describe("action tests", () => {
	beforeEach(() => {
		store.state.tasks = [];
	});

	it("getAllTasks", async () => {
		await store.dispatch("getAllTasks");

        expect(api.getAllTasks).toHaveBeenCalled();
        
		expect(store.state.tasks.length).toEqual(4);
	});

	it("getUncompletedTasks", async () => {
		await store.dispatch("getUncompletedTasks");

        expect(api.getAllTasks).toHaveBeenCalled();
        
        expect(store.state.tasks.length).toEqual(3);
        
        expect(store.state.tasks.find(t => t.name === "name4" && t.description === "description4")).toBeUndefined();
	});

	it("createTask", async () => {
        const expected = { name: "name5", description: "description5" };

		await store.dispatch("createTask", expected);

        expect(api.createTask).toHaveBeenCalled();
        
        expect(store.state.tasks.length).toEqual(1);

        const received = store.state.tasks[0];
    
        expect(received.name).toEqual(expected.name);
        expect(received.description).toEqual(expected.description);
        expect(received.complete).toBeFalsy();
	});

	it("completeTask", async () => {
		await store.dispatch("completeTask", { task: { name: "name1", description: "description1" } });

        expect(api.completeTask).toHaveBeenCalled();
        
        expect(store.state.tasks.length).toEqual(2);
        
        expect(store.state.tasks.find(t => t.name === "name1" && t.description === "description1")).toBeUndefined();
	});
});
