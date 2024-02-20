describe('Form Page', () => {
    beforeEach(function(){
        console.log("Starting form page test")
    })
  
    it('should load the form page', ()=>{
        //visit home page
        cy.visit('http://localhost:3000');
  
        // have navbar present
        cy.get('img[src="/assets/logo/stardustLogo.svg"]').should('be.visible')
        cy.get('a').should('exist').contains('Your Horoscopes')

       // have the footer present
        cy.get('img[src="/assets/logo/wordmark.png"]').should('exist')
        cy.get('h1').should('exist').contains('Copyright © 2024 – All rights Reserved')
      
      
      
    })
  })