<script>
export default {
  // Se define la función data que devuelve un objeto con propiedades reactivas
  data() {
    return {
      message: '', // Inicializa una variable reactiva 'message' para almacenar el texto ingresado por el usuario
    }
  },
  methods: {
    // Se define el método 'sendMessage' que se activa al hacer clic en el botón
    sendMessage() {
      // Emite un evento llamado 'message-sent' junto con el contenido de la variable 'message'
      // Esto permite que el componente padre escuche y maneje el evento
      this.$emit('message-sent', this.message)
    },
  },
}
</script>

<template>
  <div class="child-component">
    <!-- Campo de entrada para que el usuario escriba un mensaje
         Se vincula con la variable 'message' usando v-model para la reactividad -->
    <input class="child-component__input" v-model="message" placeholder="Escribe algo" />

    <!-- Botón que dispara el método 'sendMessage' al hacer clic -->
    <button class="child-component__button" @click="sendMessage">Enviar</button>
  </div>
</template>

<style lang="scss" scoped>
.child-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;

  &__input {
    width: 100%;
    height: 40px;
    border: 2px solid var(--gray800);
    box-shadow: -3px 5px var(--gray800);
    padding: 0.5em;
    font-weight: 18px;
    font-size: 18px;
  }

  &__button {
    padding: 1em;
    border: 2px solid var(--gray800);
    color: var(--gray800);
    font-weight: 600;
    font-size: 18px;
    box-shadow: -3px 5px var(--gray800);
    transition: all 0.7s ease;

    &:hover {
      background-color: var(--gray800);
      color: var(--gray50);
    }
  }
}
</style>
