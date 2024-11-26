<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      receivedMessage: '' // Variable para almacenar el texto recibido del componente Child
    };
  },
  methods: {
    displayMessage(message) {
      this.receivedMessage = message; // Almacena el texto recibido
    }
  }
};
</script>

<template>
    <div class="parent-component">
      <h2 class="parent-component__title">Comunicación entre componentes</h2>  
      <ChildComponent class="parent-component__child" @message-sent="displayMessage" />
      <p class="parent-component__message">Mensaje desde otro componente: 
        <span class="parent-component__message-text">{{ receivedMessage }}</span> 
    </p>
    </div>
</template>

<style lang="scss" scoped>
.parent-component{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    gap: 1em;

    &__title{
        text-align: center;
        font-family: 'IBM Plex Mono', monospace;
        font-weight: 600;
        color: var(--gray700);
        font-size: 3em;
        margin-bottom: 2em;
    }

    &__message{
        font-size: 20px;
        padding: 1em;
    }

    &__message-text{
        font-family: 'IBM Plex Mono', monospace;
        color: var(--red500);
        font-weight: 700;
        font-size: 22px;
    }
}
</style>
  

  