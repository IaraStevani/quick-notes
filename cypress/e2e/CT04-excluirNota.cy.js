describe('Testes de Exclusão', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.RealizarLoginComCredenciaisValidas()
    });

    it('Exclusão com sucesso', () => {
        const noteContent = `Nota para excluir ${Date.now()}`

        cy.get('#new-note-btn').click()
        cy.get('#note-content').type(noteContent)
        cy.get('#note-tags').type('work')
        cy.get('#save-note-btn').click()
        cy.contains(noteContent).should('be.visible').click()
        cy.get('#delete-note-btn').click()
        cy.contains(noteContent).should('not.exist')
    });
});
