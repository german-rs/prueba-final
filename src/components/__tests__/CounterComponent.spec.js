import { mount } from '@vue/test-utils'
import CounterComponent from '@/components/CounterComponent.vue'
import { createStore } from 'vuex'
import { describe, it, expect } from 'vitest'


const createVuexStore = (initialState) => {
  return createStore({
    state: initialState,
    mutations: {
      increment(state) {
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      }
    }
  });
};

describe('CounterComponent', () => {
  
  it('should receive an initial value in the counter', () => {
    const store = createVuexStore({ counter: 5 });
    const wrapper = mount(CounterComponent, {
      global: {
        plugins: [store]
      },
      props: {
        title: 'Test Counter'
      }
    });

    expect(wrapper.text()).toContain('5');
  });

  it('should increment the counter value', async () => {
    const store = createVuexStore({ counter: 5 });
    const wrapper = mount(CounterComponent, {
      global: {
        plugins: [store]
      },
      props: {
        title: 'Test Counter'
      }
    });

    await wrapper.find('button.counter__btn').trigger('click');
    expect(store.state.counter).toBe(6);
  });

  
  it('should decrement the counter value', async () => {
    const store = createVuexStore({ counter: 5 });
    const wrapper = mount(CounterComponent, {
      global: {
        plugins: [store]
      },
      props: {
        title: 'Test Counter'
      }
    });

    await wrapper.findAll('button.counter__btn')[1].trigger('click');
    expect(store.state.counter).toBe(4);
  });
});
