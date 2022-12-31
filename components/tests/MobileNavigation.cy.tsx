import React from "react";
import MobileNavigation from "../navigation/MobileNavigation";
import { Provider } from "react-redux";
import store from "../../redux/configureStore";
import socialLinks from "../../db/social_links";

describe("<MobileNavigation />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Provider store={store}>
        <MobileNavigation />
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

    // Test all social links
    socialLinks.forEach(link => {
      cy.get(`a[title="${link.title}"]`).should('have.attr', 'href', `${link.href}`);
    })
  });
});
