describe('this is my 7th testsuit',function()
{
 it('This is Mouse Hover TestCase',function(){
   
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click({force: true}) // this use force fully click event which is hide or show
    cy.url().should('include','top')
 })


})