// https://docs.cypress.io/api/introduction/api.html
describe("Tasks management", () => {
	it("Create new task", () => {
		cy.visit("/");

		cy.get('[data-spec="addTaskButton"]').click();

		cy.url().should("include", "/create");

		cy.get('[data-spec="taskNameInput"').type("New task");

		cy.get('[data-spec="taskDescriptionInput"]').type("New Description");

		cy.get('[data-spec="createTaskButton"').click();
		// This has to be in an env variable
		const apiServer = "http://localhost:8081";

		cy.url().should("eq", `${apiServer}/`);
	});

	it("Completing a task removes it from the list", () => {
		cy.visit("/");

		cy.get('[data-spec="completeTaskButton"').click();

		
	})
});
