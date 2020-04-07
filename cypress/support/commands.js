import {login} from './functions';

// Selectors
import {toDataCy, toId} from './functions';

// Functionalities
Cypress.Commands.add('login', (userPermissions) => {
    login(userPermissions).then(user => {
        toDataCy('input','login-email').clear().type(user.email);
        toDataCy('input','login-password').clear().type(user.password);
        toDataCy('button','send-form').click();
    })
});

Cypress.Commands.add('logout', () => {
    toDataCy('li', 'logout-button').click();
})

Cypress.Commands.add('fillForm', (formFields) => {
    formFields.map((field) => {
        if (field.type.toLowerCase() === 'text') {
            let dataCy = field.dataCy.split('@');
            toDataCy(dataCy[0], dataCy[1]).clear().type(field.value);
        }

        if (field.type.toLowerCase() === 'select') {
            let dataCy = field.dataCy.split('@');
            toDataCy(dataCy[0], dataCy[1]).select(field.value);
        } 
    })
})

// Timers
Cypress.Commands.add('onToastDisappear', (toastTitle) => {
    toId('toast-container').should('contain', toastTitle);
    toId('toast-container').should('not.contain', toastTitle);
});