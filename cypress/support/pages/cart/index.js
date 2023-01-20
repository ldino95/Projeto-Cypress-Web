import { el } from "./elements";

class cartActions {
  viewTitle() {
    cy.get(el.titleText).should("be.visible");
  }

  viewItem() {
    cy.get(el.itemLabel).should("be.visible");
  }

  removeItem() {
    cy.get(el.removeButton).should("be.visible");
    cy.get(el.removeButton).click();
  }

  validadeItemRemove() {
    cy.get(el.itemLabel).should("not.null");
  }

  
  clickCheckoutButton() {
    cy.get(el.checkoutButton).should("be.visible")
    cy.get(el.checkoutButton).click()
  }

  validadeUrlNext(){
    cy.url().should('contain', '/checkout-step-one.html')
  }

  clickContinueButton() {
    cy.get(el.continueButton).should("be.visible")
    cy.get(el.continueButton).click()
  }

  validadeUrlPrevious(){
    cy.url().should('contain', '/inventory.html')
  }
}

export default new cartActions();
