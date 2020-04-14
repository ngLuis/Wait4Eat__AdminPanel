/// <reference types="cypress" />

import { toDataCy, uploadFile } from "../support/functions";

context('Full Flow', () => {
    it('Admin Login', () => {
        cy.visit('/');
        cy.login('admin');
        cy.onToastDisappear('Inicio de sesión correcto');
    })

    it('Create owner user', () => {
        toDataCy('ul', 'menu-bar').children().eq(2).should('contain','Usuarios').click();
        
        toDataCy('a', 'create-new-button').click();

        cy.fillForm([
            {"dataCy": 'input@usercrud-username-input', "value": "UsuarioTest", "type":"text"},
            {"dataCy": 'input@usercrud-password-input', "value": "adminadmin", "type":"text"},
            {"dataCy": 'input@usercrud-email-input', "value": "test@test.com", "type":"text"},
            {"dataCy": 'input@usercrud-phone-input', "value": "961234569", "type":"text"},
            {"dataCy": 'select@usercrud-type-select', "value": "Propietario", "type":"select"}
        ])

        toDataCy('button','send-form').click();
        cy.onToastDisappear('Operación Correcta');
    })

    it('Assign new restaurant', () => {
        toDataCy('ul', 'menu-bar').children().eq(1).should('contain','Restaurantes').click();
        
        toDataCy('a', 'create-new-button').click();

        cy.fillForm([
            {"dataCy": 'input@restaurantcrud-name', "value": "Restaurante Test", "type":"text"},
            {"dataCy": 'input@restaurantcrud-cif', "value": "A10101010A", "type":"text"},
            {"dataCy": 'select@restaurantcrud-restaurant-owner', "value": "UsuarioTest", "type":"select"}
        ])

        uploadFile('/img/1.jpg', 'input', 'input-img', 'image/jpg');

        toDataCy('button','send-form').click();
        cy.onToastDisappear('Operación Correcta');



        cy.logout();
    })

    it('LogIn with user test', () => {
        cy.login('ownertest');
        cy.onToastDisappear('Inicio de sesión correcto');

        cy.url().should('include', 'home')
    })

    it('Create Product', () => {
        toDataCy('ul', 'menu-bar').children().eq(1).should('contain','Productos').click();

        toDataCy('a','create-new-button').click();

        cy.fillForm([
            {"dataCy":"input@productcrud-name", "value":"Producto Test", "type":"text"},
            {"dataCy":"input@productcrud-price", "value":"10.50", "type":"text"},
            {"dataCy":"textarea@productcrud-description", "value":"Esta es la descripcion de un producto test", "type":"textarea"},
            {"dataCy":"select@productcrud-category", "value":"Bebida", "type":"select"},
        ])

        uploadFile('/img/1.jpg', 'input', 'input-img', 'image/jpg');

        toDataCy('button','send-form').click();
        cy.onToastDisappear('Operación Correcta');

        cy.logout();
    })
})