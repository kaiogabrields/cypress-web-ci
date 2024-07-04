describe('Cadastro', () => {

    beforeEach(()=>{
        cy.visit('/')
    })

    it('CT-01 Redirecionamento pagina cadastro', () => {
        cy.contains('Cadastre-se')
            .should('be.visible')
            .click()
        cy.location('pathname').should('equal', '/cadastro')
    });

    it('CT-02 Cadastro com sucesso', () => {
        cy.cadastroSucesso()
    });
});