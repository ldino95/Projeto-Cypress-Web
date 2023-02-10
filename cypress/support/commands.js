// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add("addItem", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get(".shopping_cart_link").click();
});

Cypress.Commands.add("cartClickCheckout", () => {
  cy.get('[data-test="checkout"]').should("be.visible");
  cy.get('[data-test="checkout"]').click();
  cy.url().should("contain", "/checkout-step-one.html");
});

Cypress.Commands.add("preencherCheckout", () => {
cy.get('[data-test="firstName"]').type("Lucas")
cy.get('[data-test="lastName"]').type("Silva")
cy.get('[data-test="postalCode"]').type("03097010")
cy.get('[data-test="continue"]').click()
});

Cypress.Commands.add("clickButtonFinish", () => {
    cy.get('[data-test="finish"]').click()

    });

