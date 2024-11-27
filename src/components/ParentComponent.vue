<script>
// Se importa el componente 'ChildComponent' desde la ruta especificada
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    // Se declara 'ChildComponent' como un componente que se puede usar en este componente
    ChildComponent,
  },
  data() {
    return {
      // Se inicializa una variable 'receivedMessage' para almacenar el texto recibido desde el componente hijo
      receivedMessage: '',
    }
  },
  methods: {
    // Se define el método 'displayMessage' que se activa al recibir un evento 'message-sent'
    displayMessage(message) {
      // Se almacena el mensaje recibido en la variable 'receivedMessage'
      this.receivedMessage = message
    },
  },
}
</script>

<template>
  <div class="parent-component">
    <h2 class="parent-component__title">Comunicación entre componentes</h2>

    <!-- Se incluye el componente hijo 'ChildComponent' y escucha el evento 'message-sent'
         Cuando se dispara el evento, se llama al método 'displayMessage' -->
    <ChildComponent class="parent-component__child" @message-sent="displayMessage" />

    <!-- Muestra el mensaje recibido desde el componente hijo -->
    <p class="parent-component__message">
      Mensaje desde otro componente:
      <span class="parent-component__message-text">{{ receivedMessage }}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.parent-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  gap: 1em;

  &__title {
    text-align: center;
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 600;
    color: var(--gray700);
    font-size: 3em;
    margin-bottom: 2em;
  }

  &__message {
    font-size: 20px;
    padding: 1em;
  }

  &__message-text {
    font-family: 'IBM Plex Mono', monospace;
    color: var(--red500);
    font-weight: 700;
    font-size: 22px;
  }
}
</style>
