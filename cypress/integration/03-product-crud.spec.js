/// <reference types="cypress" />

import { toDataCy } from "../support/functions";

context('Product CRUD', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.login('owner');
        cy.onToastDisappear('Inicio de sesión correcto');

        toDataCy('div','restaurant-card').eq(0).children().find('a').click();
        toDataCy('ul','menu-bar').find('li').eq(1).click();
    })

    it('Create Product', () => {
        toDataCy('a','create-new-button').click();

        cy.fillForm([
            {"dataCy":"input@productcrud-name", "value":"Producto Test", "type":"text"},
            {"dataCy":"input@productcrud-price", "value":"10.50", "type":"text"},
            {"dataCy":"textarea@productcrud-description", "value":"Esta es la descripcion de un producto test", "type":"textarea"},
            {"dataCy":"select@productcrud-category", "value":"Bebida", "type":"select"},
        ])

        toDataCy('button','send-form').click();
        cy.onToastDisappear('Operación Correcta');

        cy.logout();
    })

    it('Update Product', () => {
        toDataCy('div','product-card').last().children().find('a').eq(1).click();

        cy.fillForm([
            {"dataCy":"input@productcrud-name", "value":"Producto Test Actualizado", "type":"text"},
            {"dataCy":"input@productcrud-price", "value":"10.99", "type":"text"},
            {"dataCy":"select@productcrud-category", "value":"Comida", "type":"select"},
        ])

        toDataCy('button','send-form').click();
        cy.onToastDisappear('Operación Exitosa');

        cy.logout();
    })

    it('Delete Product', () => {
        toDataCy('div','product-card').last().children().find('a').eq(0).click();
        toDataCy('a','confirmation-dialog-confirm').click();
        cy.onToastDisappear('Operación Correcta');
    })

})