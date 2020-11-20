/// <reference types="cypress" />
import login from '../pageObjects/login';

describe("Login", () => {

    const Login = new login();

    it("Go to Login Page", () => {

        cy.visit('https://pingback.com');

        Login.goToLoginBtn().click({
            force: true
        });

        cy.url()
            .should('include', '/login');
    });

    it("Sign In", () => {

        Login.email()
            .type('xxx@live.com');

        Login.logInBtn().click();

        Login.toastMessage().should('not.be.visible');
    })
})