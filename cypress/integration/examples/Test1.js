// Mocha framework - describe and it
import Login from '../Pageobjects/login'
import SignUp from '../Pageobjects/signup'
import cart from '../Pageobjects/cart'



const {generateUsername} = require('unique-username-generator')

const generator = require('generate-password')

let userName = generateUsername()

let password = generator.generate({
    length: 5,
    numbers: true,
    uppercase: true,
})

const url = 'https://www.demoblaze.com/'
let loginpage = new Login()//creating an object for the class login
let SignUpProcess = new SignUp()  
let cartprocess = new cart()

describe("This is my first Cypress Test", function(){
    it("This will check navigation to a page given", function(){
        cy.visit(url)
        loginpage.loginOption().should('be.visible').click() 
        cy.wait(2000)  // to pause the execution in cypress 
        loginpage.userName().type('test')
        cy.wait(2000)
        loginpage.password().type('test')
        cy.wait(2000)
        loginpage.loginButton().click()
        cy.wait(2000)
        cy.get('a[id="nameofuser"]').should('have.text', 'Welcome test')  //Validation of the username after successful login
    })
         

    it('Test to add a new user for SignUp process', function(){
        cy.visit(url)
        SignUpProcess.signUpOption().click()
        cy.wait(2000)
        SignUpProcess.signUpUserName().type(userName)
        cy.wait(2000)
        SignUpProcess.signUpPassword().type(password)
        cy.wait(2000)
        SignUpProcess.signUpButton().click()
        cy.wait(2000)
        cy.on('window:alert', function(alertText){
            expect(alertText).eql('Sign up successful.')
        })
        cy.reload()
    })

    it('Add an item to cart', function(){
        cy.visit(url)
        cartprocess.loginoption().click() 
        cy.wait(2000)  // to pause the execution in cypress 
        cartprocess.userName().type(userName)
        cy.wait(2000)
        cartprocess.password().type(password)
        cy.wait(2000)
        cartprocess.loginButton()
        cy.wait(2000)
        cartprocess.product().click()
        cy.wait(2000)
        cartprocess.addtocart().click()
        cy.wait(2000)
        cy.on('window:alert', function(productAdded){
            expect(productAdded).eql('Product added.')
        })
        cy.reload()
        cy.wait(2000)
        cy.get('a[id="cartur"]').click()
        cy.wait(2000)
        cy.get('img[src="imgs/galaxy_s6.jpg"]').should('be.visible')
    })

    it('use of custom commands', ()=>{
        cy.visit(url)
        cy.wait(2000)
        cy.nextPage()
        cy.wait(2000)
        cy.previousPage()
        cy.wait(2000)

    })
   
    it('should navigate to the next page and previous page', function(){
        cy.visit(url)
        cy.get('#next2').click()
        cy.wait(2000)
        cy.get('#prev2').click()
        cy.wait(2000)
    })

})



    
