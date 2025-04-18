/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () =>[

    beforeEach(() => {
        cy.visit('minha-conta')
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

    }),

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

    }),

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.fixture('perfil').then( dados => {
        cy.get('#username').type(perfil.usuario, { log:false})
        cy.get('#password').type(perfil.senha, { log:false})
        cy.get('.woocommerce-form > .button').click()
        })
    }),

    it.only('Deve fazer login com sucesso - usando Comandos Customizados', () => {
        cy.login('william.teste@teste.com.br', 'Teste@123678')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, william.teste (não é william.teste? Sair)')
        
    })
])