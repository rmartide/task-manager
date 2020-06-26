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
		const apiServer = "http://localhost:8080";

		cy.url().should("eq", `${apiServer}/`);
	});
});

describe("Completing a task", () => {
	beforeEach(() => {
		cy.clearStorage();
		cy.createTask("Name_1", "Description_1");
	});

	it("Completing a task removes it from the list", () => {
		cy.visit("/");

		cy.get("[data-spec=taskComponent]").within(() => {
			cy.get("[data-spec=taskName]").contains("Name_1");

			cy.get("[data-spec=taskDescription]").contains("Description_1");

			cy.get("[data-spec=completeTaskButton]").click();
		});

		cy.get("[data-spec=taskComponent]").should("not.exist");
	});
});


describe("Routes", () => {

	it("Visiting a route loads the correct page", () => {
		cy.visit("/");

		cy.get("[data-spec=pageTitle]").contains("Tasks to do");

		cy.visit("/create")

		cy.get("[data-spec=pageTitle]").contains("New task");

	});
});
