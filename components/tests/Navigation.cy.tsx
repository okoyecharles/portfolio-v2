import React from "react";
import Navigation from "../navigation/Navigation";
import { Provider } from "react-redux";
import store from "../../redux/configureStore";

describe("<Navigation />", () => {
  it("renders", () => {
    // Testing render
    cy.mount(
      <Provider store={store}>
        <Navigation />
      </Provider>
    );

    // Test all anchor links
    const navLinks = [
      { name: "Home", route: "content" },
      { name: "About", route: "about" },
      { name: "Projects", route: "featured" },
      { name: "Testimonials", route: "testimonials" },
      { name: "Contact", route: "contact" }
    ];

    navLinks.forEach((link) => {
      cy.contains(link.name).should('have.attr', 'href', `#${link.route}`);
    });

    // Test resume link
    cy.get('.navigation__linkResume a').should('have.attr', 'download').get('button').should("have.text", 'Resume')
  });
});
