/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    })

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
            //.first()
           // .eq(2)
        .contains('Aero Daily Fitness Tee')
        .click()

        cy.get('#tab-title-description > a').should('exist')
    });
});