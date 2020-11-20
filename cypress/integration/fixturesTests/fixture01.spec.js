/// <reference types="cypress" />

describe("Login", () => {

    it("Sign In", () => {

        cy.fixture('loginCredentials').then((user) => {
            cy.get('input[type="text"]')
                .type(user.email);
        })

        cy.get('[type="button"]').click();

        cy.get('bp3-toast-message').should('not.be.visible');
    })
})