/// <reference types="cypress" />

describe("Example 1", () => {
    it("Makes an assertion", () => {
        cy.visit('https://example.cypress.io');

        cy.contains('type').click();

        cy.url()
            .should('include', '/commands/actions');
    })
})