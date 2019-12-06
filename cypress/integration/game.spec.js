// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Navigation in Game Page', function() {
  it('Should only be visible when menu button is clicked', function() {
    cy.visit('/game.html');
    cy.get('#main-navigation').should('not.be.visible');

    cy.get('#menu').click();
    cy.get('#main-navigation').should('be.visible');
  });
});

describe('Game Page Functionality', function() {
  it('Should display an alert box if no players are selected', function() {
    cy.visit('/game.html');
    redircetToFinale();
  });

  it('Should only be visible when menu button is clicked', function() {
    cy.visit('/game.html');
    redircetToFinale();
  });
});
