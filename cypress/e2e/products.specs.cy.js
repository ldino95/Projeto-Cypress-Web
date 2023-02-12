import productActions from "../support/pages/products/index";

describe("Produtos", function () {
  beforeEach(() => {
    cy.visit("/");
    cy.login();
  });

  context("validar funcionalidades na pagina de produtos", function () {
    it("CT001 - Validar o botão adicionar item ao carrinho.", function () {
      productActions.clickAddToCart();
    });

    it("CT002 - Validar a opção de remover item do carrinho.", function () {
      productActions.removeAddToCart();
    });

    it("CT003 - Validar a opção de ir direto para o carrinho.", function () {
      productActions.viewCart();
    });

    it("CT004 - Validar que ao clicar no item ele me redireciona para uma página somente do item.", function () {
        productActions.viewItem()
    });
  });
});
