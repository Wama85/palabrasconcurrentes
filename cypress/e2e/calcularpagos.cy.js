describe("Calcular pagos", () => {
    it("Shows the amount of the addition to the user", () => {
      cy.visit("/calcularpago.html");
      cy.get("#txtPago").type(30);
      cy.get("#txtHoras").type(2);
      cy.get("#btncalcular").click();
      cy.get("#resultado-div").should("contain", "60");
    });
  });