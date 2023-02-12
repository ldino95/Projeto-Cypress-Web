import checkoutStepTwoActions from "../support/pages/checkoutStepTwo/index";


describe("Checkout your information", function () {
  beforeEach(() => {
    cy.visit("/");
    cy.login();
    
  });

  context(
    "validar funcionalidades na pagina de CHECKOUT: OVERVIEW",
    function () {
      it("CT001 - Validar que codigo de pagamente e informado.", function () {
        checkoutStepTwoActions.viewTitle()
        cy.addItem();
        cy.cartClickCheckout();
        cy.preencherCheckout();
        checkoutStepTwoActions.viewPaymentinformantion()
      
        
      });

      it("CT002 - Validar que valor do Item, taxa e total é apresentado.", function () {
        checkoutStepTwoActions.viewTitle()
        cy.addItem();
        cy.cartClickCheckout();
        cy.preencherCheckout();
        checkoutStepTwoActions.viewPaymentinformantion()
        checkoutStepTwoActions.validateValue()

      });

    }
  );
});
