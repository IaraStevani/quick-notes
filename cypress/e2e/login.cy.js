describe('Testes de Login', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    describe('Sucesso', () => {
        it('Credenciais válidas', () => {
            cy.fixture('credenciais').then((credenciais) => {
                cy.get('#login-email').type(credenciais.valida.email)
                cy.get('#login-password').type(credenciais.valida.senha)
            });

            cy.get('#login-form > .btn-primary').click()
            cy.contains('Hi, QA').should('be.visible')
            cy.get('#logout-btn').should('be.visible')
        });
    });

    describe('Falha', () => {

        it('Senha inválida', () => {
            cy.fixture('credenciais').then((credenciais) => {
                cy.get('#login-email').type(credenciais.valida.email)
                cy.get('#login-password').type(credenciais.invalida.senha)
            });

            cy.get('#login-form > .btn-primary').click()
            cy.get('#login-error').contains('Invalid email or password').should('be.visible')
        });

        it('Senha vazia', () => {
            cy.fixture('credenciais').then((credenciais) => {
                cy.get('#login-email').type(credenciais.valida.email)

            });

            cy.get('#login-form > .btn-primary').click()
            cy.get('#login-password')
                .should('match', ':invalid')
                .and(($input) => {
                    expect($input[0].validationMessage).to.not.be.empty
                });
        });

        it('E-mail invalido', () => {
            cy.fixture('credenciais').then((credenciais) => {
                cy.get('#login-email').type(credenciais.invalida.email)
                cy.get('#login-password').type(credenciais.valida.senha)
            });

            cy.get('#login-form > .btn-primary').click()
            cy.get('#login-email')
                .should('match', ':invalid')
                .and(($input) => {
                    expect($input[0].validationMessage).to.not.be.empty
                });
        });

        it('E-mail vazio', () => {
            cy.fixture('credenciais').then((credenciais) => {
                cy.get('#login-password').type(credenciais.valida.senha)
            });

            cy.get('#login-form > .btn-primary').click()
            cy.get('#login-email')
                .should('match', ':invalid')
                .and(($input) => {
                    expect($input[0].validationMessage).to.not.be.empty
                });
        });
    });
});
