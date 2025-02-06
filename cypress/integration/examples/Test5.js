describe('this is my 5th testsuit',function(){

it('Handling the child window',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.origin("https://www.qaclickacademy.com/", ()=>{

        cy.get("#navbarSupportedContent a[href*='about']").click()
        cy.get('.mt-50 h2').should('contain','QAClick Academy')
    })
    
})

})