/// <reference types="cypress" />

import { toDataCy } from "../support/functions";

context('Restaurant CRUD', () => {

    it ('Create Restaurant', () => {
        cy.visit('/');
        cy.login('admin');
        cy.onToastDisappear('Inicio de sesión correcto');

        toDataCy('ul', 'menu-bar').children().eq(1).should('contain','Restaurantes').click();
        
        toDataCy('a', 'create-new-button').click();

        cy.fillForm([
            {"dataCy": 'input@restaurantcrud-name', "value": "Restaurante Test", "type":"text"},
            {"dataCy": 'input@restaurantcrud-cif', "value": "A10101010A", "type":"text"},
            {"dataCy": 'select@restaurantcrud-restaurant-owner', "value": "toni", "type":"select"}
        ])

        toDataCy('button','send-form').click();
        cy.onToastDisappear('Operación Correcta');
    })

    it('Update Restaurant', () => {
        toDataCy('div','restaurant-card').last().children().find('a').eq(1).click();

        cy.fillForm([
            {"dataCy": 'input@restaurantcrud-name', "value": "Nombre Test Updateado", "type":"text"},
            {"dataCy": 'input@restaurantcrud-cif', "value": "B0000000B", "type":"text"},
        ])

        toDataCy('button','send-form').click();
        cy.onToastDisappear('Operación Correcta');
    })

    it('Delete Restaurant', () => {
        toDataCy('div','restaurant-card').last().children().find('a').eq(0).click();

        toDataCy('a','confirmation-dialog-confirm').click();
        cy.onToastDisappear('Borrado');

        cy.logout();
    })

})