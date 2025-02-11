class cart{
    loginoption(){
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

    product(){
        return cy.get('a[href="prod.html?idp=1"][class="hrefch"]')
    }

    addtocart(){
        return cy.get('a[onclick="addToCart(1)"]')
    }


}

 export default cart