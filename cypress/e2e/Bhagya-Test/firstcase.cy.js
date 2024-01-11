/// <reference types='cypress'/>
describe ('title',()=>{
    it ('testcase',()=>{
        cy.visit('https://demoqa.com')
        cy.log("Hello World")
    })
})
