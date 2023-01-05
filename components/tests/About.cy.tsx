import React from 'react'
import About from '../about/About'

describe('<About />', () => {
  it('renders properly', () => {
    // render component;
    cy.mount(<About />)
  })
  
  it('contains name', () => {
    cy.mount(<About />)
    cy.get('.about__content')
    .should('contain.text', 'Okoye Charles Kaosisochukwu')
  });
  
  it('contains image', () => {
    cy.mount(<About />)
    cy.get('.about__image img').should('have.attr', 'alt', 'Headshot');
  })
})