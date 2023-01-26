import cartActions from "../support/pages/cart/index";

describe("Carrinho", function () {
  beforeEach(() => {
    cy.visit("/");
    cy.login();
  });

  context(" Validar funcionalidades da pagina de carrinho", function () {
      it("CT001 - Validar itens adcionado ao carrinho", function () {
        cy.addItem();
        cartActions.viewTitle();
        cartActions.viewItem();
      });

      it("CT002 - Validar que a funcionalidade remover item", function () {
        cy.addItem();
        cartActions.viewTitle();
        cartActions.removeItem();
        cartActions.validadeItemRemove();
      });
      it("CT003 - Validar que ao clicar em checkout sou direcionado para página de checkout", function () {
        cy.addItem();
        cartActions.viewTitle();
        cartActions.clickCheckoutButton();
        cartActions.validadeUrlNext();
      });
      it("CT004 - Validar que ao clicar em continue shopping sou direcionado para página de produtos", function () {
        cy.addItem();
        cartActions.viewTitle();
        cartActions.clickContinueButton();
        cartActions.validadeUrlPrevious();

      });
    }
  );
});
