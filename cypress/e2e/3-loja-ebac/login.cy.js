/// <reference types="cypress"/>

describe('Funcionalidade: Login', () =>[

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('william.teste@teste.com.br')
        cy.get('#password').type('Teste@123678')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, william.teste (não é william.teste? Sair)')
    })
]) 