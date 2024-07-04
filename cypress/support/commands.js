var faker = require('faker-br');

Cypress.Commands.add('login', (email, password) => { 
    cy.session([email,password], () =>{
        cy.visit('/login')
        cy.get('input[data-test="inputLoginEmail"]').type(email)
        cy.get('input[data-test="inputLoginSenha"]').type(password, { log: false }) 
        cy.contains('button', 'Entrar').click()
        cy.location('pathname').should('equal', '/dashboard')
    })
 })

 Cypress.Commands.add('cadastroSucesso', () => {
    let password = faker.internet.password()
    cy.contains('Cadastre-se').click()
    cy.get('input[data-test="inputNome"]').type(faker.name.firstName())
    cy.get('input[data-test="inputCNPJ"]').type(faker.br.cnpj())
    cy.get('input[data-test="inputEmail"]').type(faker.internet.email())
    cy.get('input[data-test="inputSenha"]').type(password, { log: false })
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
 })

 Cypress.Commands.add('cadastroEspecialista', (nome, email, senha, especialidade, crm, telefone, imagem, cep, rua, numero, complemento, estado) => {
    cy.contains('Cadastrar especialista').should('be.visible').click()
    cy.get('[data-test="inputEspecialistaNome"]').type(nome)
    cy.get('[data-test="inputEspecialistaEmail"]').type(email)
    cy.get('[data-test="inputEspecialistaSenha"]').type(senha)
    cy.get('[data-test="inputEspecialistaSenhaVerificada"]').type(senha)
    cy.get('[data-test="inputEspecialistaEspecialidade"]').type(especialidade)
    cy.get('[data-test="inputEspecialistaCRM"]').type(crm)
    cy.get('[data-test="inputEspecialistaTel"]').type(telefone)
    cy.get('[data-test="inputEspecialistaImagem"]').type(imagem)
    cy.get('[data-test="inputEspecialistaCEP"]').type(cep)
    cy.get('[data-test="inputEspecialistaRua"]').type(rua)
    cy.get('[data-test="inputEspecialistaNumero"]').type(numero)
    cy.get('[data-test="inputEspecialistaComplemento"]').type(complemento)
    cy.get('[data-test="inputEspecialistaEstado"]').type(estado)

 })

Cypress.Commands.add('loginApi', (email, senha) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('api_login'),
        body: {
            email: email,
            senha: senha
        }
    }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.auth).to.be.true;
        expect(response.body.rota).to.eq('/clinica');
        expect(response.body.token).to.exist;
        cy.wrap(response.body.token).as('token')
    })
})