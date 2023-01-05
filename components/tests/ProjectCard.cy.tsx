import React from 'react'
import ProjectCard from '../projects/ProjectCard'
import projects from '../../db/projects';

const project = projects[0];

describe('<FeaturedProject />', () => {
  it('renders', () => {
    cy.mount(<ProjectCard project={project} />);
  })
  
  it('contains right content', () => {
    cy.mount(<ProjectCard project={project} />);

    cy.get('.projectCard__content h3').should('have.text', project.title);
    cy.get('.projectCard__content p').should('have.html', project.note);

    project.stack.forEach(item => {
      cy.get('.projectCard__techStack').contains(item);
    })
  })
})