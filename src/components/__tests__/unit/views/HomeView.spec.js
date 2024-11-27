// Importaciones necesarias
import { mount } from '@vue/test-utils' // Método para renderizar componentes en pruebas
import HomeView from '@/views/HomeView.vue' // Componente principal a probar
import CounterComponent from '@/components/CounterComponent.vue' // Componente de contador
import { createStore } from 'vuex' // Función para crear una tienda de Vuex
import { describe, it, expect } from 'vitest' // Utilidades de Vitest para escribir pruebas

// Crear una store de Vuex de prueba
const store = createStore({
  // Estado inicial
  state: {
    counter: 0, // El contador comienza en 0
  },
  // Mutaciones para modificar el estado
  mutations: {
    // Incrementa el contador
    increment(state) {
      state.counter++
    },
    // Decrementa el contador
    decrement(state) {
      state.counter--
    },
  },
})

// Suite de pruebas para el componente HomeView
describe('HomeView', () => {
  // Caso de prueba para verificar la existencia de CounterComponent
  it('should contain CounterComponent', () => {
    // Monta el componente HomeView
    // Configura globalmente la store de Vuex para la prueba
    const wrapper = mount(HomeView, {
      global: {
        plugins: [store], // Añade la store como un plugin global
      },
    })

    // Busca el componente CounterComponent dentro del wrapper
    const counterComponent = wrapper.findComponent(CounterComponent)

    // Verifica que CounterComponent exista en el componente
    expect(counterComponent.exists()).toBe(true)
  })
})
