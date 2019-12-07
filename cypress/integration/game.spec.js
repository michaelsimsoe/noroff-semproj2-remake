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

    cy.get('[data-cy="alert-box"]')
      .scrollIntoView()
      .should('be.visible');
  });

  it('Should display player tokens if players are in local storage', function() {
    localStorage.setItem(
      'player-one',
      JSON.stringify({ name: 'Arya Stark', house: 'House Stark of Winterfell' })
    );
    localStorage.setItem(
      'player-two',
      JSON.stringify({ name: 'Jon Snow', house: 'House Stark of Winterfell' })
    );
    cy.visit('/game.html');

    cy.get('[data-cy="player-token"]').should('be.visible');
  });

  it('Should move the player token after rolling the dice', function() {
    localStorage.setItem(
      'player-one',
      JSON.stringify({
        name: 'Arya Stark',
        house: 'House Stark of Winterfell'
      })
    );
    localStorage.setItem(
      'player-two',
      JSON.stringify({ name: 'Jon Snow', house: 'House Stark of Winterfell' })
    );
    cy.visit('/game.html');

    cy.get('#dice-btn').click();
    cy.wait(3300);
    cy.get('#player-token-one').then(token => {
      let tokenX = token[0].x.animVal.value;
      console.log(tokenX);
      expect(tokenX).to.not.equal(170);
    });
  });

  it('Finale modal should appear when first player finish', function() {
    localStorage.setItem(
      'player-one',
      JSON.stringify({
        name: 'Arya Stark',
        house: 'House Stark of Winterfell'
      })
    );
    localStorage.setItem(
      'player-two',
      JSON.stringify({ name: 'Jon Snow', house: 'House Stark of Winterfell' })
    );
    cy.visit('/game.html');
    cy.window().then(win => {
      let state = win.__state__;
      state.currentPlayer.moved = 29;
      cy.get('#dice-btn').click();
    });

    cy.get('[data-cy="finale-modal"]').should('be.visible');
  });

  it('Winning player should be announced on finale page', function() {
    localStorage.setItem(
      'player-one',
      JSON.stringify({
        name: 'Arya Stark',
        house: 'House Stark of Winterfell'
      })
    );
    localStorage.setItem(
      'player-two',
      JSON.stringify({ name: 'Jon Snow', house: 'House Stark of Winterfell' })
    );
    cy.visit('/game.html');
    cy.window().then(win => {
      let state = win.__state__;
      state.currentPlayer.moved = 29;
      cy.get('#dice-btn').click();
    });
    cy.wait(3000);
    cy.visit('/finale.html');
    cy.get('[data-cy="winner-heading"]').contains('Arya Stark');
  });
});
