describe('AboutView with ParentComponent and ChildComponent', () => {
    it('should send a message from ChildComponent and display it in ParentComponent', () => {
      // Visita la página /about donde se encuentra el ParentComponent que contiene a ChildComponent.
      cy.visit('/about'); 
  
      // Escribe un mensaje en el campo de texto de ChildComponent.
      cy.get('.child-component__input')
        .type('Hola desde Cypress');
  
      // Clic en el botón para enviar mensaje desde el ChildComponent hacía el ParentComponent.
      cy.get('.child-component__button')
        .click();
  
      // Verifica que el mensaje haya sido enviado y se muestre en el ParentComponent
      cy.get('.parent-component__message-text')
        .should('have.text', 'Hola desde Cypress');
    });
  });
  