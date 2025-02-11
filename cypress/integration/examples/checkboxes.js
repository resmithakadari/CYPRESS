describe("Tests with checkboxes and radio buttons", ()=> {
    it('Verify a single checkbox can be selected', ()=> {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=product/search')
        cy.wait(2000)
        cy.get('#description').check().should('be.checked') //checking a checkbox and confirming it
        cy.get('#description').uncheck().should('not.be.checked')  //Uncheck the checkbox and confirming it
    })

    it('Verify multiple checkboxes scenario', ()=> {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42%27')
        cy.wait(2000)
        cy.get('input[type="checkbox"]').check(['10','11']).should('be.checked')  //checking multiple checkboxes and confirming it
        cy.get('input[type="checkbox"]').uncheck(['10','11']).should('not.be.checked') //unchecking multiple checkboxes and confirming it
    })

    it('Verify radio buttons', ()=>{
        cy.visit('https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42')
        cy.wait(2000)
        cy.get("input[name='option[218]']").check().should('be.checked')
        cy.get("input[name='option[218]']").then(($radio)=>{
            $radio[0].checked = false 
        }).should('not.be.selected')
    })


})