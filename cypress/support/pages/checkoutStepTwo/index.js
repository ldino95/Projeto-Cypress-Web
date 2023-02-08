import { el } from "./elements";

class checkoutStepTwoActions {
  viewTitle() {
    cy.get(el.title).should("be.visible");
  }

  viewPaymentinformantion(){
    cy.get(el.paymentInformantion).should("be.visible")
  }

  validateValue(){
    
   cy.get(el.itemTotalPrice).should("have.text",'Item total: $29.99')
   cy.get(el.taxPrice).should("have.text",'Tax: $2.40')
   cy.get(el.totalResultPrice).should("have.text","Total: $32.39")
   
  }
}

export default new checkoutStepTwoActions();
