import { el } from "./elements";

class checkoutStepOneActions {
  preencherCorretamente() {
    cy.get(el.firstName).type("Lucas");
    cy.get(el.lastName).type("Silva");
    cy.get(el.zipCode).type("03097010");
    cy.get(el.continueButton).click();
    cy.url().should("contain", "/checkout-step-two.html");
  }

  preencherSomenteNome() {
    cy.get(el.firstName).type("Lucas");
    cy.get(el.continueButton).click();
    cy.get(el.mensagemError).should(
      "have.text",
      "Error: Last Name is required"
    );
  }

  preencherSomenteSobrenome() {
    cy.get(el.lastName).type("Silva");
    cy.get(el.continueButton).click();
    cy.get(el.mensagemError).should(
      "have.text",
      "Error: First Name is required"
    );
  }

  preencherZipCode() {
    cy.get(el.zipCode).type("00100203");
    cy.get(el.continueButton).click();
    cy.get(el.mensagemError).should(
      "have.text",
      "Error: First Name is required"
    );
  }

  
  enviarVazio() {
    cy.get(el.continueButton).click();
    cy.get(el.mensagemError).should(
      "have.text",
      "Error: First Name is required"
    );
  }
}

export default new checkoutStepOneActions();
