import React from 'react'
import SideBar from './Sidebar'

describe('<SideBar />', () => {
  it('renders', () => {
    // Testing render
    cy.mount(<SideBar />)

    // Test all social links
    const navLinks = [
      { name: "Twitter", route: "https://twitter.com/OkoyeCharles_" },
      { name: "Github", route: "https://github.com/okoyecharles" },
      { name: "LinkedIn", route: "https://www.linkedin.com/in/charles-k-okoye/" },
      { name: "AngelList", route: "https://angel.co/u/charles-k-okoye" },
      { name: "Gmail", route: "mailto:okoyecharles509@gmail.com" }
    ];

    navLinks.forEach(link => {
      cy.get(`a[title="${link.name}"]`).should('have.attr', 'href', `${link.route}`);
    })
  })
})