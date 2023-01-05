import React from 'react'
import ContactForm from '../contact/ContactForm'

describe('<ContactForm />', () => {
  it('renders', () => {
    cy.mount(<ContactForm />)
  });
  
  it('contains right inputs', () => {
    cy.mount(<ContactForm />)

    // Type in content to inputs
    cy.get('#contactForm__name').type('Okoye Charles');
    cy.get('#contactForm__email').type('okoyecharles509@gmail.com');

    // Intentionally type too short text in textarea
    cy.get('#contactForm__message').type('Hey c');

    // Submit form
    cy.get('.contactForm > button[type="submit"]').click();
    
    // Check for error
    cy.get('#contactForm__message').should('have.class', 'invalid');
  })
})