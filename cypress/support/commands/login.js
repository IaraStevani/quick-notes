Cypress.Commands.add('RealizarLoginComCredenciaisValidas', () => {
    cy.fixture('credenciais').then((credenciais) => {
        cy.get('#login-email').type(credenciais.valida.email)
        cy.get('#login-password').type(credenciais.valida.senha)
    });

    cy.get('#login-form > .btn-primary').click()
    cy.contains('Hi, QA').should('be.visible')
    cy.get('#logout-btn').should('be.visible')
});

