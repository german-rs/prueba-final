// Suite de pruebas para la vista About, enfocada en la comunicación entre componentes
describe('AboutView with ParentComponent and ChildComponent', () => {
  // Caso de prueba que verifica el flujo de envío de mensaje desde ChildComponent a ParentComponent
  it('should send a message from ChildComponent and display it in ParentComponent', () => {
    // Navega a la página /about donde se encuentran los componentes a probar
    // Esta ruta contiene el ParentComponent que incluye al ChildComponent
    cy.visit('/about'); 

    // Interactúa con el campo de texto del ChildComponent
    // Utiliza un selector de clase para identificar el input
    // Escribe un mensaje de prueba para simular la entrada del usuario
    cy.get('.child-component__input')
      .type('Hola desde Cypress');

    // Simula un clic en el botón de envío del ChildComponent
    // Este botón debería desencadenar el envío del mensaje al ParentComponent
    cy.get('.child-component__button')
      .click();

    // Verifica que el mensaje se ha transmitido correctamente
    // Comprueba que el texto aparece en el elemento de mensaje del ParentComponent
    // Usa una aserción para confirmar que el texto coincide exactamente
    cy.get('.parent-component__message-text')
      .should('have.text', 'Hola desde Cypress');
  });
});