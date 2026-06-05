describe('Testes de Login', () => {

    beforeEach(() => {
        cy.visit('https://quick-notes.club/')
    });

    describe('Sucesso', () => {
        it('Credenciais válidas', () => {
            cy.get('#login-email').type('testes.iarastevanialves@gmail.com')
            cy.get('#login-password').type('12345678')
            cy.get('#login-form > .btn-primary').click()

            cy.contains('Hi, Iara').should('be.visible')
            cy.get('#logout-btn').should('be.visible')
        });
    });

    describe('Falha', () => {

        it('Senha inválida', () => {
            cy.get('#login-email').type('testes.iarastevanialves@gmail.com')
            cy.get('#login-password').type('1234567')
            cy.get('#login-form > .btn-primary').click()

            cy.get('#login-error').contains('Invalid email or password').should('be.visible')
        });

        it('Senha vazia', () => {
            cy.get('#login-email').type('testes.iarastevanialves@gmail.com')
            cy.get('#login-form > .btn-primary').click()

            cy.get('#login-password')
                .should('match', ':invalid')
                .and(($input) => {
                    expect($input[0].validationMessage).to.not.be.empty
                });
        });

        it('E-mail invalido', () => {
            cy.get('#login-email').type('testes.com')
            cy.get('#login-password').type('12345678')
            cy.get('#login-form > .btn-primary').click()

            cy.get('#login-email')
                .should('match', ':invalid')
                .and(($input) => {
                    expect($input[0].validationMessage).to.not.be.empty
                });
        });

        it('E-mail vazio', () => {
            cy.get('#login-form > .btn-primary').click()

            cy.get('#login-email')
                .should('match', ':invalid')
                .and(($input) => {
                    expect($input[0].validationMessage).to.not.be.empty
                });
        });
    });
});
