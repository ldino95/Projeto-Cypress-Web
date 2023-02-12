import checkoutCompleteActions from "../support/pages/checkoutComplete/index";


describe("Checkout your information", function () {
  beforeEach(() => {
    cy.visit("/");
    cy.login();
    
  });

  context(
    "validar funcionalidades na pagina de CHECKOUT: COMPLETE",
    function () {
      it.only("CT001 - Validar imagem da pagina da Pony Express", function () {
        checkoutCompleteActions.viewTitle()
        cy.addItem();
        cy.cartClickCheckout();
        cy.preencherCheckout();
        cy.clickButtonFinish();
        checkoutCompleteActions.viewponyImage()

        
      });

      it("CT002 - Validar que ao clicar no botão Back-Home sou direcionado para página incial", function () {
        checkoutCompleteActions.viewTitle()
        cy.addItem();
        cy.cartClickCheckout();
        cy.preencherCheckout();
        cy.clickButtonFinish();
        checkoutCompleteActions.backHome()

      });

    }
  );
});
