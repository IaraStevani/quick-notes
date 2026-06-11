describe('Testes de Alteração', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.RealizarLoginComCredenciaisValidas()
    });

    it('Alteração com sucesso', () => {
        cy.contains('Nota de teste').click()
        cy.get('#note-content').clear().type('Nota de teste alterada com sucesso')
        cy.get('#save-note-btn').click()
        cy.contains('Nota de teste alterada com sucesso').should('be.visible')
    });
});
