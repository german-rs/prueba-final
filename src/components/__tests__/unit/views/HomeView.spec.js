/* 
    Este código hace lo siguiente:
    1. Crea una store de Vuex de prueba con el estado inicial y las mutaciones necesarias.
    2. Monta la vista `HomeView` utilizando `@vue/test-utils` y proporciona la store de Vuex como un plugin global.
    3. Busca el componente `CounterComponent` dentro de la vista montada.
    4. Valida que `CounterComponent` existe utilizando el método `exists()`.
*/

import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import CounterComponent from '@/components/CounterComponent.vue';
import { createStore } from 'vuex';
import { describe, it, expect } from 'vitest';

// Crear una store de Vuex de prueba
const store = createStore({
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    }
  }
});

describe('HomeView', () => {
  // Prueba para verificar la existencia del componente CounterComponent
  it('should contain CounterComponent', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [store]
      }
    });
    const counterComponent = wrapper.findComponent(CounterComponent);
    expect(counterComponent.exists()).toBe(true);
  });
});