// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get('[data-spec="taskName"]').should('exist');
    cy.get('[data-spec="taskDescription"]').should('exist');
    cy.get('[data-spec="taskStatus"]').should('exist');
    cy.get('[data-spec="taskCompleteButton"]').should('exist');
  });
});
