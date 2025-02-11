class SignUp{
    signUpOption(){
        return cy.get("a[id='signin2']")
    }

    signUpUserName(){
        return cy.get("input[id='sign-username']")
    }

    signUpPassword(){
        return cy.get("input[id='sign-password']")
    }

    signUpButton(){
        return cy.get('button[onclick="register()"]')
    }
}


export default SignUp

