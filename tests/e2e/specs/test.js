// https://docs.cypress.io/api/introduction/api.html
describe("Tasks management", () => {
	it("Create new task", () => {
		cy.visit("/");

		cy.get('[data-spec="addTaskButton"]').click();

		cy.get('[data-spec="taskNameInput"').type("New task");

		cy.get('[data-spec="taskDescriptionInput"]').type("New Description");

		cy.get('[data-spec="createTaskButton"').click();

		cy.contains("New task create successfully");
	});
});
