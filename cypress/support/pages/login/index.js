import { el } from "./elements";

class loginActions {
  loginCorreto() {
    cy.get(el.user).type("standard_user");
    cy.get(el.password).type("secret_sauce");
    cy.get(el.loginButton).click();
    cy.url().should("contain", "/inventory.html");
  }

  usuarioInvalido() {
    cy.get(el.user).type("standard_user1");
    cy.get(el.password).type("secret_sauce");
    cy.get(el.loginButton).click();
    cy.get(el.errorMensage).should('have.text', 'Epic sadface: Username and password do not match any user in this service')

  }

  senhaInvalida() {
    cy.get(el.user).type("standard_user1");
    cy.get(el.loginButton).click();
    cy.get(el.errorMensage).should('have.text', 'Epic sadface: Password is required')
    
  }

  semParametro() {
    cy.get(el.loginButton).click();
    cy.get(el.errorMensage).should('have.text','Epic sadface: Username is required')
  
  }
}

export default new loginActions();
