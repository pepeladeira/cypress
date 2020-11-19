/// <reference types="cypress" />

describe("API Testing", () => {
    it("GET - users", () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
            expect(response).to.have.property('status', 200)
        })
    })
})