import React from 'react'
import FeaturedProject from '../projects/FeaturedProject';
import projects from '../../db/projects';

const project = projects[0];

describe('<FeaturedProject />', () => {
  it('renders', () => {
    cy.mount(<FeaturedProject {...project} />);
  })
  
  it('contains right content', () => {
    cy.mount(<FeaturedProject {...project} />);

    cy.get('.featuredProject__content h3').should('have.text', project.title);
    cy.get('.featuredProject__content p').should('have.html', project.description);

    project.stack.forEach(item => {
      cy.get('.featuredProject__techStack').contains(item);
    })
  })
})