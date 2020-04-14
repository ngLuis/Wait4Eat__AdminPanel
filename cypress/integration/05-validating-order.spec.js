/// <reference types="cypress" />

import { toDataCy } from "../support/functions";

context('Validate order', () => {
    it('Validating order', () => {
        cy.visit('/');
        cy.login('owner');
        cy.onToastDisappear('Inicio de sesión correcto');

        toDataCy('div', 'restaurant-card').eq(0).children().find('a').click();

        toDataCy('ul', 'menu-bar').children().eq(2).should('contain','Pedidos').click();

        toDataCy('tr', 'order-row').children().last().children().click();

        toDataCy('a','confirmation-dialog-cancel').click();
        cy.onToastDisappear('Pago Erroneo');

        toDataCy('tr', 'order-row').children().last().children().click();

        toDataCy('a','confirmation-dialog-confirm').click();
        cy.onToastDisappear('Pago Exitoso');
    })
})