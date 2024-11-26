import { mount } from '@vue/test-utils'
import CounterComponent from '@/components/CounterComponent.vue'
import { createStore } from 'vuex'
import { describe, it, expect } from 'vitest'

// Función para crear una store de Vuex con un estado inicial personalizado
const createVuexStore = (initialState) => {
  return createStore({
    state: initialState,
    mutations: {
      increment(state) {
        state.counter++; // Incrementa el valor del contador en el estado de Vuex
      },
      decrement(state) {
        state.counter--; // Decrementa el valor del contador en el estado de Vuex
      }
    }
  });
};

describe('CounterComponent', () => {
  
  // Prueba para verificar que se recibe un valor inicial en el contador
  it('should receive an initial value in the counter', () => {
    // Crea una store de Vuex con un valor inicial del contador de 5
    const store = createVuexStore({ counter: 5 });
    
    // Monta el componente CounterComponent con la store de Vuex
    const wrapper = mount(CounterComponent, {
      global: {
        plugins: [store] // Proporciona la store de Vuex como plugin global
      },
      props: {
        title: 'Test Counter' // Define la prop "title" del componente
      }
    });

    // Verifica que el texto del componente contiene el valor inicial del contador (5)
    expect(wrapper.text()).toContain('5');
  });

  // Prueba para verificar la funcionalidad de incremento del contador
  it('should increment the counter value', async () => {
    // Crea una store de Vuex con un valor inicial del contador de 5
    const store = createVuexStore({ counter: 5 });
    
    // Monta el componente CounterComponent con la store de Vuex
    const wrapper = mount(CounterComponent, {
      global: {
        plugins: [store] // Proporciona la store de Vuex como plugin global
      },
      props: {
        title: 'Test Counter' // Define la prop "title" del componente
      }
    });

    // Simula un clic en el botón de incrementar (el primer botón)
    await wrapper.find('button.counter__button').trigger('click');
    
    // Verifica que el valor del contador en la store de Vuex ha incrementado a 6
    expect(store.state.counter).toBe(6);
  });

  // Prueba para verificar la funcionalidad de decremento del contador
  it('should decrement the counter value', async () => {
    // Crea una store de Vuex con un valor inicial del contador de 5
    const store = createVuexStore({ counter: 5 });
    
    // Monta el componente CounterComponent con la store de Vuex
    const wrapper = mount(CounterComponent, {
      global: {
        plugins: [store] // Proporciona la store de Vuex como plugin global
      },
      props: {
        title: 'Test Counter' // Define la prop "title" del componente
      }
    });

    // Simula un clic en el botón de decrementar (el segundo botón)
    await wrapper.findAll('button.counter__button')[1].trigger('click');
    
    // Verifica que el valor del contador en la store de Vuex ha decrementado a 4
    expect(store.state.counter).toBe(4);
  });
});