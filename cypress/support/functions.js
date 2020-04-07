// Functionalities
export async function login(userPermissions) {
    let user;
    await cy.fixture('users').then((usersData) => {
        if (userPermissions.toLowerCase() === 'normal') {
            user = usersData.normal;
        } else if (userPermissions.toLowerCase() === 'owner') {
            user = usersData.owner;
        } else if (userPermissions.toLowerCase() === 'admin') {
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