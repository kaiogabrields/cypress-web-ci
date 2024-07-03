describe('usuario logado no dashboard', () =>{
    beforeEach(() => {
        cy.fixture('especialista.json').as('especialistas')
        cy.login(Cypress.env('email'), Cypress.env('senha'))
        cy.visit('/dashboard')
    })
    it('CT-01 Redirecionamento pagina dashboard', () => {
        cy.contains('h2', 'Área Administrativa').should('be.visible')
        cy.location('pathname').should('equal', '/dashboard')
    });

    it('CT-02 Cadastro especialista', () => {
        cy.get('@especialistas').then((dados) =>{
            const especialista = dados.especialistas[0];
            cy.cadastroEspecialista(
                especialista.nome,
                especialista.email,
                especialista.senha,
                especialista.especialidade,
                especialista.crm,
                especialista.telefone,
                especialista.imagem,
                especialista.cep,
                especialista.rua,
                especialista.numero,
                especialista.complemento,
                especialista.estado
            )
        })
        cy.get('[type="checkbox"]').check()
        cy.get('[type="checkbox"]').check(['Sulamerica', 'Unimed', 'Bradesco'])
        cy.contains('button', 'Cadastrar').should('be.visible').should('be.enabled').click()
        
    });
})