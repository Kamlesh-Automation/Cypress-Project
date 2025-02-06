describe('this is my 8th testsuit',function(){

    it('Handling the child window second',function(){
    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //cy.get('#opentab').prop('href').click()
        cy.get('#opentab').then(function(el)
        {
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url, ()=>
            {
                cy.get("#navbarSupportedContent a[href*='about']").click()
            })
            
        })
       
      
        
    })
    
    })