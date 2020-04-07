/// <reference types="cypress" />

import {toDataCy} from '../support/functions';

context('Different app logins', () => {

    before(() => {
        cy.visit('/');
    })

    it('Normal Login', () => {
        cy.login('normal');
        cy.onToastDisappear('Inicio de sesión fallido');
    })

    it('Owner Login', () => {
        cy.login('owner');
        cy.onToastDisappear('Inicio de sesión correcto');
        toDataCy('div', 'restaurant-card').eq(0).children().find('a').click();
        cy.logout();
    })

    it('Admin Login', () => {
        cy.login('admin');
        cy.onToastDisappear('Inicio de sesión correcto');
        cy.logout();
    })

    it('Validate Login', () => {
        // We prove to login with the empty text fields.
        toDataCy('button','send-form').click();
        toDataCy('div', 'login-email-unity').should('contain', 'Debes completar este campo');
        toDataCy('div', 'login-password-unity').should('contain', 'Debes completar este campo');

        // We put bad formats to the inputs.
        toDataCy('input','login-email').clear().type('asdas');
        toDataCy('div', 'login-email-unity').should('contain', 'Formato de email erroneo');

        toDataCy('input','login-password').clear().type('12345');
        toDataCy('div', 'login-password-unity').should('contain', 'Debe tener al menos 6 caracteres');

        //We put correct format but incorrect credentials
        toDataCy('input','login-email').clear().type('test@test.com');
        toDataCy('input','login-password').clear().type('testtest');

        //We try to make login into the app
        toDataCy('button','send-form').click();
        cy.onToastDisappear('Inicio de sesión fallido');
    }) 

})