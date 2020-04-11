/// <reference types="cypress" />

context('Restaurant Acess', () => {

    it('Restaurant Access Denied', () => {
        cy.visit('/');
        cy.login('owner');
        cy.visit('/restaurant-panel/idThatNotExist');
        cy.onToastDisappear('Acceso denegado');
    })

    it('Restaurant Access Allow', () => {
        cy.visit('/');
        cy.login('owner');
        cy.visit('/restaurant-panel/0');
        cy.url().should('include', '/restaurant-panel/0/home')
    })
})