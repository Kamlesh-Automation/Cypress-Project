describe('This is my 4th Test Suit', function(){

    it('This is my 4th Test case',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //window:alert
        cy.on('window:alert',(str)=>{

            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //windows: confirm

})
})