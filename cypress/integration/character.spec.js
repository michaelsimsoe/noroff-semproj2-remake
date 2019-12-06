// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Characters selection page', function() {
  it('Choosing two characters should reveal the begin button.', function() {
    cy.visit('/');

    cy.contains('House Stark of Winterfell');
    cy.get('[data-name="House Stark of Winterfell"] > figure > img');
    cy.wait(500);
    cy.get('[data-name="House Stark of Winterfell"] > figure > img').click();
    cy.get('[data-character="Arya Stark"] > .char-select-btn').click({
      force: true
    });
    cy.get('[data-character="Jon Snow"] > .char-select-btn').click({
      force: true
    });
    cy.get('[data-cy="begin-btn"]')
      .scrollIntoView()
      .should('be.visible');
  });

  it('Clicking begin button starts the game', function() {
    cy.visit('/');

    cy.contains('House Stark of Winterfell');
    cy.get('[data-name="House Stark of Winterfell"] > figure > img');
    cy.wait(500);
    cy.get('[data-name="House Stark of Winterfell"] > figure > img').click();
    cy.get('[data-character="Arya Stark"] > .char-select-btn').click({
      force: true
    });
    cy.get('[data-character="Jon Snow"] > .char-select-btn').click({
      force: true
    });
    cy.get('[data-cy="begin-btn"]').click({
      force: true
    });

    cy.location('pathname').should('eq', '/game.html');
  });

  it('Choosing the same character twice should reveal the alert box.', function() {
    cy.visit('/');

    cy.contains('House Stark of Winterfell');
    cy.get('[data-name="House Stark of Winterfell"] > figure > img');
    cy.wait(500);
    cy.get('[data-name="House Stark of Winterfell"] > figure > img').click();
    cy.get('[data-character="Arya Stark"] > .char-select-btn').click({
      force: true
    });
    cy.get('[data-character="Arya Stark"] > .char-select-btn').click({
      force: true
    });
    cy.get('[data-cy="alert-box"]')
      .scrollIntoView()
      .should('be.visible');
  });
});

describe('Navigation in Character Select page', function() {
  it('Should only be visible when menu button is clicked', function() {
    cy.visit('/');
    cy.get('#main-navigation').should('not.be.visible');

    cy.get('#menu').click();
    cy.get('#main-navigation').should('be.visible');
  });
});
