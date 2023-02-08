import loginActions from "../support/pages/login/index";

describe("Login", function () {
  beforeEach(() => {
    cy.visit("/");
    
  });

  context("validar funcionalidades na pagina de login", function () {
    it("CT001 - Validar login com usuário valido", function () {
      loginActions.loginCorreto();
    });

    it("CT002 - Validar mensagem de erro após tentativa de usuário invalido.", function () {
        loginActions.usuarioInvalido();
      });

      it("CT003 - Validar mensagem de erro após tentativa de fazer login sem senha.", function () {
        loginActions.senhaInvalida();
      });

      it("CT004 - Validar mensagem de erro após tentativa de realizar login sem passar nenhum parametro", function () {
        loginActions.semParametro();
      });
  });
});
