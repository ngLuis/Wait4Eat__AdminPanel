// Functionalities
export async function login(userPermissions) {
    let user;
    await cy.fixture('users').then((usersData) => {
        if (userPermissions.toLowerCase() === 'normal') {
            user = usersData.normal;
        } else if (userPermissions.toLowerCase() === 'owner') {
            user = usersData.owner;
        } else if (userPermissions.toLowerCase() === 'ownertest') {
            user = usersData.ownertest;
        }else if (userPermissions.toLowerCase() === 'admin') {
            user = usersData.admin;
        }
    })
    return user;
}

// Selectors
export function toDataCy(tagType, dataCyValue) {
    return cy.get(tagType+`[data-cy=${dataCyValue}]`);
}

export function toId(id) {
    if (id.charAt(0) === '#') {
        id = id.substring(1);
    }

    return cy.get(`#${id}`);
}

export function uploadFile(filePath, htmlTag, dataCyName, fileType ) {
    cy.fixture(filePath).as('file')
    .get(`${htmlTag}[data-cy=${dataCyName}]`).then(element => {
        Cypress.Blob.base64StringToBlob(cy.get('@file'), fileType)
        .then(blob => {
            element[0].files[0] = blob;
            element[0].dispatchEvent(new Event('change', {bubbles:true}))
        })
    })
}