/// <reference types="cypress" />

describe("Login", () => {
    it("Go to Login Page", () => {

        cy.visit('https://pingback.com');

        cy.get('.btn-login').click({
            force: true
        });

        cy.url()
            .should('include', '/login');
    });

    it("Sign In", () => {

        cy.get('input[type="text"]')
            .type('xxx@live.com');

        cy.get('[type="button"]').click();

        cy.get('bp3-toast-message').should('not.be.visible');
    })
})