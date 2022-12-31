import React from "react";
import Hero from "./Hero";

describe("<Hero />", () => {
  it("renders", () => {
    cy.mount(<Hero />);
  });
  
  it("contains headers", () => {
    cy.mount(<Hero />);
    cy.get("h1").should("have.text", "Hi, my name is");
    cy.get("h2").should("have.text", "Okoye Charles.");
    cy.get("h3").should("have.text", "I embrace the digital world.");
  });
  
  it("has call to action", () => {
    cy.mount(<Hero />);
    cy.get("a")
      .should("have.attr", "href", "#featured")
      .get("button")
      .should("have.text", "Check out my work!");
  });
});
