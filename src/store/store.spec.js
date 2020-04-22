import { render } from "@testing-library/vue";
import store from "@/store/index";
import api from "@/services/api";

import "@testing-library/jest-dom";

// SE NECESITA COMPROBAR EL STATEEEEEEEEEEEEEEEEEEEEEEEEE

jest.mock("@/services/api", () => {
    return {
    getAllTasks: jest.fn(() => Promise.resolve([])),
    createTask: jest.fn(() => Promise.resolve({name: 'name', description: 'description', complete: false})),
    completeTask: jest.fn(() => Promise.resolve([])),
}
});

describe("action tests", () => {

    beforeEach(() => {
        store.state.tasks = [];
    })

	it("getAllTasks", async () => {

        await store.dispatch("getAllTasks");

        expect(api.getAllTasks).toHaveBeenCalled();
        
    });
    
    it("getUncompletedTasks", async () => {

        await store.dispatch("getUncompletedTasks");

        expect(api.getAllTasks).toHaveBeenCalled();
        
    });
    
    it("createTask", async () => {

        await store.dispatch("createTask", {name: 'name', description: 'description'});

        expect(api.createTask).toHaveBeenCalled();
        
    });
    
    it("completeTask", async () => {

        await store.dispatch("completeTask", { task: {name: 'name', description: 'description'} });

        expect(api.completeTask).toHaveBeenCalled();
        
    });


});
