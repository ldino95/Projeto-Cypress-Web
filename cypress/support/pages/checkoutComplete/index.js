import { el } from "./elements";

class checkoutComplete {
  viewTitle() {
    cy.get(el.title).should("be.visible");
  }

  viewponyImage(){
    cy.get(el.ponyImage).should("be.visible")
  }

  backHome(){
    cy.get(el.buttonBack).should("be.visible")
    cy.get(el.buttonBack).click()
   }

}

export default new checkoutComplete();
