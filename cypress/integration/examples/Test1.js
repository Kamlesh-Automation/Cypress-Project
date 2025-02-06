///<reference types="Cypress" />
describe('My first Test Suite', function() 
{

it('My First TestCase', function()  
{
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca')
cy.wait(2000)
cy.get('.product:visible').should('have.length',4)
//parent  chils chaining
cy.get('.products').find('.product').should('have.length',4)
cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click().then(function()
{
    console.log('sf')
})
cy.get('.products').find('.product').each(($e1, index , $list) => {
const textVeg = $e1.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
    cy.wrap($e1).find('button').click()
}
})
const txt = cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
})

// cy.log(cy.get('.brand').text()) //text() is not cypress command

})

})