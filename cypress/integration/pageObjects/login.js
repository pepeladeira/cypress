/// <reference types="cypress" />

class login {
    goToLoginBtn() {
        return cy.get('.btn-login');
    }

    email() {
        return cy.get('input[type="text"]')
    }

    logInBtn() {
        return cy.get('[type="button"]')
    }

    toastMessage() {
        return cy.get('bp3-toast-message')
    }
}

export default login;