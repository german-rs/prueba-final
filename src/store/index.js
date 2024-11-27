// Importa la función createStore de Vuex para crear un store de gestión de estado
import { createStore } from 'vuex'

// Exporta la configuración del store de Vuex con la función createStore
export default createStore({
  // Definición del estado inicial de la aplicación
  state: {
    counter: 0, // Propiedad 'counter' inicializada en 0, será utilizada para operaciones de incremento y decremento
  },

  // Definición de las mutaciones (funciones que modifican directamente el estado)
  mutations: {
    // Mutación para incrementar el valor del contador
    increment(state) {
      state.counter++ // Aumenta el valor de counter en 1
    },

    // Mutación para decrementar el valor del contador
    decrement(state) {
      state.counter-- // Disminuye el valor de counter en 1
    },
  },
})
