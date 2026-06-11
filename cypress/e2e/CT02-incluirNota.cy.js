describe('Testes de Inclusão', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.RealizarLoginComCredenciaisValidas()
    });

    describe('Sucesso', () => {
        it('Inclusão com sucesso', () => {
            cy.get('#new-note-btn').click()
            cy.get('#note-content').type('Nota de teste')
            cy.get('#note-tags').type('work')
            cy.get('#save-note-btn').click()
            cy.contains('Nota de teste').should('be.visible')
        });
    });

    describe('Falha', ()=>{
        it('Campos obrigatórios', ()=>{
            cy.get('#new-note-btn').click()
            cy.get('#save-note-btn').click()
            cy.get('#editor-error').contains('Note cannot be empty').should('be.visible')
        });
    });
});