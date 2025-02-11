// Browser controls and navigation scenarios 

const webPage = 'https://www.demoblaze.com/'

describe('Browser control test', ()=>{
    it('Browser back button test', ()=>{
        cy.visit(webPage)
        cy.wait(2000)
        cy.get('a[id="cartur"]').click()
        cy.wait(2000)
        cy.url().should('include', 'cart.html')
        cy.wait(2000)
        cy.go('back')  //browser back navigation
        cy.wait(2000)
        cy.url().should('include', 'https://www.demoblaze.com/')
    })
    
    it('Browser forward button test', ()=>{
        cy.visit(webPage)
        cy.wait(2000)
        cy.get('a[id="cartur"]').click()
        cy.wait(2000)
        cy.url().should('include', 'cart.html')
        cy.wait(2000)
        cy.go('back')  //browser back navigation
        cy.wait(2000)
        cy.url().should('include', 'https://www.demoblaze.com/')
        cy.wait(2000)
        cy.go('forward')
        cy.wait(2000)
        cy.url().should('include','cart.html')
    })

    it('Browse to footer and header section', ()=>{
        cy.visit(webPage)
        cy.scrollTo('bottom')  //navigates to the footer section 
        cy.wait(2000)
        cy.get("p[class='m-0 text-center text-white']").should('have.text', 'Copyright © Product Store 2017')
        cy.scrollTo("top")   //navigates to the header section
        cy.wait(2000)
        cy.get("a[id='nava']").should('be.visible')

    })

})