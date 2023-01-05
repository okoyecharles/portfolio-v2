import React from 'react'
import SideBar from '../navigation/Sidebar'
import socialLinks from '../../db/social_links'

describe('<SideBar />', () => {
  it('renders', () => {
    // Testing render
    cy.mount(<SideBar />)

    // Test all social links
    socialLinks.forEach(link => {
      cy.get(`a[title="${link.title}"]`).should('have.attr', 'href', `${link.href}`);
    })
  })
})