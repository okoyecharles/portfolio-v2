import React from "react";
import Hero from "./Hero";

describe("<Hero />", () => {
  it("renders", () => {
    // Render hero section
    cy.mount(<Hero />);

    // Test headers
    cy.get("h1").should("have.text", "Hi, my name is");
    cy.get("h2").should("have.text", "Okoye Charles.");
    cy.get("h3").should("have.text", "I embrace the digital world.");

    // Test call to action button
    cy.get("a")
      .should("have.attr", "href", "#featured")
      .get("button")
      .should("have.text", "Check out my work!");
  });
});
