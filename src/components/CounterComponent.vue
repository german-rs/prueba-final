<script>
// Importa helpers de Vuex para mapear estado y mutaciones de forma sencilla
import { mapState, mapMutations } from 'vuex'

export default {
  // Nombre del componente para identificación y depuración
  name: 'CounterComponent',

  // Definición de propiedades que el componente puede recibir del componente padre
  props: {
    // Propiedad para un título personalizado, de tipo String
    title: String,
  },

  // Propiedades computadas del componente
  computed: {
    // Usa spread operator para mapear el estado 'counter' desde Vuex
    // Permite acceder a this.counter directamente en el componente
    ...mapState(['counter']),

    // Propiedad computada para manejar el título del contador
    defaultTitle() {
      // Si no se proporciona un título, usa 'Contador' como valor por defecto
      return this.title || 'Contador'
    },
  },

  // Métodos del componente
  methods: {
    // Mapea las mutaciones 'increment' y 'decrement' del store de Vuex
    // Permite llamar a this.increment() y this.decrement() directamente
    ...mapMutations(['increment', 'decrement']),
  },
}
</script>

<template>
  <div class="counter">
    <!-- Título del contador, usando la propiedad computada defaultTitle -->
    <h2 class="counter__title">{{ defaultTitle }}</h2>
    <!-- Muestra el valor actual del contador desde el estado de Vuex -->
    <p class="counter__number">{{ counter }}</p>

    <div class="counter__box">
      <!-- Botón para incrementar, llama a la mutación increment de Vuex -->
      <button class="counter__button" v-on:click="increment">+1</button>

      <!-- Botón para decrementar, llama a la mutación decrement de Vuex -->
      <button class="counter__button" v-on:click="decrement">-1</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2em;
  gap: 1em;

  &__title {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 600;
    color: var(--gray700);
    font-size: 3em;
  }

  &__number {
    font-size: 2em;
    font-weight: 800;
    color: var(--gray600);
  }

  &__box {
    margin-top: 1em;
    display: flex;
    gap: 1em;
  }

  &__button {
    padding: 1em 2em;
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
