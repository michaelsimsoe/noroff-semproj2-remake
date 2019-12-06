describe('Characters selection page', function() {
  it('Visit index.html', function() {
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
    cy.contains('Let The Board Game of Thrones Begin');
  });
});
