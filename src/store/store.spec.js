import { render } from "@testing-library/vue";
import store from "@/store/index";
import api from "@/services/api";
import { mockData, mockImplementation } from "@/services/mockdata";

import "@testing-library/jest-dom";

// SE NECESITA COMPROBAR EL STATEEEEEEEEEEEEEEEEEEEEEEEEE

jest.mock("@/services/api", () => {
	return {
		getAllTasks: jest.fn(() => mockImplementation.getAllTasks()),
		createTask: jest.fn((t) => mockImplementation.createTasks(t)),
		completeTask: jest.fn((t) => mockImplementation.completeTask(t))
	};
});

describe("action tests", () => {
	beforeEach(() => {
		store.state.tasks = [];
	});

	it("getAllTasks", async () => {
		await store.dispatch("getAllTasks");

		expect(api.getAllTasks).toHaveBeenCalled();

		expect(store.state.tasks.length).toEqual(mockData.tasks.length);
	});

	it("getUncompletedTasks", async () => {
		await store.dispatch("getUncompletedTasks");

		expect(api.getAllTasks).toHaveBeenCalled();

		expect(store.state.tasks.length).toEqual(mockData.tasks.length - 1);

		const expectedTask = mockData.task4;

		expect(store.state.tasks.find((t) => t.name === expectedTask.name && t.description === expectedTask.description)).toBeUndefined();
	});

	it("createTask", async () => {
		const expectedTask = { name: "name5", description: "description5" };

		await store.dispatch("createTask", expectedTask);

		expect(api.createTask).toHaveBeenCalled();

		expect(store.state.tasks.length).toEqual(1);

		const received = store.state.tasks[0];

		expect(received.name).toEqual(expectedTask.name);
		expect(received.description).toEqual(expectedTask.description);
		expect(received.complete).toBeFalsy();
	});

	it("completeTask", async () => {
		const expectedTask = mockData.task1;

		await store.dispatch("completeTask", { task: expectedTask });

		expect(api.completeTask).toHaveBeenCalled();

		expect(store.state.tasks.length).toEqual(mockData.tasks.length - 2);

		expect(store.state.tasks.find((t) => t.name === expectedTask.name && t.description === expectedTask.description)).toBeUndefined();
	});
});
