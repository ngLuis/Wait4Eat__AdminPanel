/// <reference types="cypress" />

import { toDataCy } from "../support/functions";

context('User CRUD', () => {

    it('Create User', () => {
        cy.visit('/');
        cy.login('admin');
        cy.onToastDisappear('Inicio de sesión correcto');

        toDataCy('ul', 'menu-bar').children().eq(2).should('contain','Usuarios').click();
        
        toDataCy('a', 'create-new-button').click();

        cy.fillForm([
            {"dataCy": 'input@usercrud-username-input', "value": "UsuarioTest", "type":"text"},
            {"dataCy": 'input@usercrud-password-input', "value": "testtest", "type":"text"},
            {"dataCy": 'input@usercrud-email-input', "value": "test@test.com", "type":"text"},
            {"dataCy": 'input@usercrud-phone-input', "value": "961234569", "type":"text"},
            {"dataCy": 'select@usercrud-type-select', "value": "Normal", "type":"select"}
        ])

        toDataCy('button','send-form').click();
        cy.onToastDisappear('Operación Correcta');
    })

    it('Update user', () => {
        toDataCy('tr','usercrud-list-row').last().children()
        .find('[data-cy=usercrud-list-row-update]').click();

        cy.fillForm([
            {"dataCy": 'input@usercrud-username-input', "value": "UsuarioTest2", "type":"text"},
            {"dataCy": 'input@usercrud-email-input', "value": "test2@test.com", "type":"text"},
            {"dataCy": 'input@usercrud-phone-input', "value": "123456789", "type":"text"}
        ])

        toDataCy('button','send-form').click();
        cy.onToastDisappear('Operación Correcta');
    })

    it('Delete user', () => {
        toDataCy('tr','usercrud-list-row').last().children()
        .find('[data-cy=usercrud-list-row-delete]').click();

        toDataCy('a','confirmation-dialog-confirm').click();
        cy.onToastDisappear('Operación realizada con éxito');

        cy.logout();
    })

});