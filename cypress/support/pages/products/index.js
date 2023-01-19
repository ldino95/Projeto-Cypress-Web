import { el } from "./elements";

class productsAction {
  clickAddToCart() {
    cy.get(el.addToCartButton).should("be.visible");
    cy.get(el.addToCartButton).click();
    cy.get(el.removeToCartButton).should("be.visible");
  }

  removeAddToCart() {
    cy.get(el.addToCartButton).should("be.visible");
    cy.get(el.addToCartButton).click();
    cy.get(el.removeToCartButton).should("be.visible");
    cy.get(el.removeToCartButton).click();
    cy.get(el.addToCartButton).should("be.visible");
  }

  viewCart() {
    cy.get(el.shoppingCartButton).should("be.visible");
    cy.get(el.shoppingCartButton).click();
    cy.url().should('contain', '/cart.html')
  }

  viewItem() {
    cy.get(el.viewItemButton).should("be.visible");
    cy.get(el.viewItemButton).click();
    cy.url().should('contain', '/inventory-item.html')
  }
}

export default new productsAction();
