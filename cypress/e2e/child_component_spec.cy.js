describe('ChildComponent Message Sending', () => {
  it('should send a message when the button is clicked', () => {
    // Visita la página donde se encuentra el ChildComponent
    cy.visit('/');

    // Escribe un mensaje en el campo de texto del ChildComponent
    cy.get('.child-component__input')
      .type('Hola desde Cypress');

    // Haz clic en el botón de enviar mensaje en el ChildComponent
    cy.get('.child-component__button')
      .click();

    // Verifica que el mensaje haya sido enviado y se muestre en el ParentComponent
    cy.get('.parent-component__message-text')
      .should('have.text', 'Hola desde Cypress');
  });
});

  