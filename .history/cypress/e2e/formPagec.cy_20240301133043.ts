describe('Form Page', () => {
    beforeEach(function(){
        console.log("Starting form page test")
    })
  
    it('should load the form page', ()=>{
        //visit form page
        cy.visit('http://localhost:3000/form');
  
        // have navbar present
        cy.get('img[src="/assets/logo/stardustLogo.svg"]').should('be.visible')
        cy.get('a').should('exist').contains('Your Horoscopes')

       // have the footer present
        cy.get('img[src="/assets/logo/wordmark.svg"]').should('exist')
        cy.get('h1').should('exist').contains('Copyright © 2024 – All rights Reserved')

        // check if input forms are displayed
        cy.get('input[placeholder="Month"]').should('be.visible');
        cy.get('input[placeholder="Date"]').should('be.visible');
        cy.get('button').contains('Find Your Star').should('be.visible');
      
    })
  })