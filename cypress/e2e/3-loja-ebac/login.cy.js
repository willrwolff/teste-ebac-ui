/// <reference types="cypress"/>

describe('Funcionalidade: Login', () =>[

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    }),

    afterEach(() => {
        cy.screenshot()
    }),
    
    it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('william.teste@teste.com.br')
        cy.get('#password').type('Teste@123678')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, william.teste (não é william.teste? Sair)')
    }),

    it('Deve ecibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('william@teste.com.br')
        cy.get('#password').type('Teste@123678')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário')

    }),

    it('Deve ecibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('william.teste@teste.com.br')
        cy.get('#password').type('Teste@12')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('exist')

    })
])