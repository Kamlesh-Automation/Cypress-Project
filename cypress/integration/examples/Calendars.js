describe('this is calendar example suits',function(){

    it('this is calendar test case',function(){

        const monthNumber="6";
        const date = "15";
        const year = "2026";
        const expectedList = [monthNumber,date,year]

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains("button",year).click()
        cy.get('.react-calendar__year-view__months__month').eq(Number(monthNumber)-1).click()
        cy.contains("abbr",date).click()

        //Assertion
        cy.get('.react-date-picker__inputGroup__input').each(($el,index,)=>{

            cy.wrap($el).invoke('value').should('eq',expectedList[index]);
        })
    
    })
})