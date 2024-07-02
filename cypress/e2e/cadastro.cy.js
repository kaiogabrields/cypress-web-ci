var faker = require('faker-br');

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
            let password = faker.internet.password()
            cy.contains('Cadastre-se').click()
            cy.get('input[data-test="inputNome"]').type(faker.name.firstName())
            cy.get('input[data-test="inputCNPJ"]').type(faker.br.cnpj())
            cy.get('input[data-test="inputEmail"]').type(faker.internet.email())
            cy.get('input[data-test="inputSenha"]').type(password)
            cy.get('input[data-test="inputSenhaVerificada"]').type(password)
            cy.contains('button', 'Avançar').click()
            cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible')
            cy.get('input[data-test="inputTelefone"]').type(faker.phone.phoneNumberFormat())
            cy.get('input[data-test="inputCEP"]').type(faker.address.zipCodeValid())
            cy.get('input[data-test="inputRua"]').type(faker.address.streetName())
            cy.get('input[data-test="inputNumero"]').type(faker.random.number({min: 100, max:150}))
            cy.get('input[data-test="inputComplemento"]').type(faker.address.city())
            cy.get('input[data-test="inputEstado"]').type(faker.address.stateAbbr())
            cy.contains('button', 'Cadastrar').click()
            cy.contains('h2', 'Faça login em sua conta').should('be.visible')

    });
});