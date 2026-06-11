describe('Testes de Alteração', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.RealizarLoginComCredenciaisValidas()
    });

    it('Exclusão com sucesso', ()=>{
        cy.contains('Nota de teste').click()
        cy.get('#delete-note-btn').click()
        cy.contains('Nota de teste').should('not.exist')
    });
});