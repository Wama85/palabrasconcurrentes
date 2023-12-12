describe("Ocurrencias", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#txtpalabra").type('Hola Hola');
    cy.get("#btncontar").click();
    cy.get("#resultado-div").should("contain", "Hola:2");
  });
});
