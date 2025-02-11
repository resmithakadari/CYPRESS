class Login{
    loginOption(){
        return cy.get('#login2')
    }

    userName(){
        return cy.get("input[id='loginusername']")
    }

    password(){
        return cy.get("input[id='loginpassword']")
    }

    loginButton(){
        return cy.get("button[onClick='logIn()']")
    }
}


export default Login