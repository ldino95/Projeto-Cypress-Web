import checkoutStepOneActions from "../support/pages/checkoutStepOne/index";

describe("Checkout your information", function () {
  beforeEach(() => {
    cy.visit("/");
    cy.login();
    
  });

  context(
    "validar funcionalidades na pagina de Checkout Your Information",
    function () {
      it("CT001 - Enviar dados validos .", function () {
        cy.addItem();
        cy.cartClickCheckout();
        checkoutStepOneActions.preencherCorretamente();
        
      });

      it("CT002 - Validar tentativa de envio somente de nome ", function () {
        cy.addItem();
        cy.cartClickCheckout();
        checkoutStepOneActions.preencherSomenteNome()
      });

      it("CT003 - Validar tentativa de envio somente de ultimo nome .", function () {
        cy.addItem();
        cy.cartClickCheckout();
        checkoutStepOneActions.preencherSomenteSobrenome()
      });

      it("CT004 - Validar tentativa de envio somente de cep .", function () {
        cy.addItem();
        cy.cartClickCheckout();
        checkoutStepOneActions.preencherZipCode()
      });

      it("CT005 - Validar tentativa de envio com os campos vazios .", function () {
        cy.addItem();
        cy.cartClickCheckout();
        checkoutStepOneActions.enviarVazio()
      });
    }
  );
});
