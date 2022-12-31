import React from "react";
import TestimonialCard from "../testimonials/TestimonialCard";
import testimonials from "../../db/testimonials";

const testimonial = testimonials[1];

describe("<TestimonialCard />", () => {
  it("renders", () => {
    cy.mount(<TestimonialCard {...testimonial} />);
  });

  it("contains right content", () => {
    cy.mount(<TestimonialCard {...testimonial} />);

    cy.get(".testimonialCard__header h3").should(
      "have.text",
      testimonial.author
    );
    cy.get(".testimonialCard__header div").should(
      "have.text",
      testimonial.location
    );

    testimonial.text.forEach((paragragh) => {
      cy.get(".testimonialCard__content").contains(paragragh);
    });
  });

  it("contains image", () => {
    cy.mount(<TestimonialCard {...testimonial} />);

    cy.get(".testimonialCard__image img").should(
      "have.attr",
      "src",
      `/_next/image?url=%2Ftestimonials%2F${testimonial.image}&w=256&q=75`
    );
  });
});
