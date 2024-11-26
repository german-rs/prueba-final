<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'CounterComponent',
  props: {
    title: String
  },
  computed: {
    ...mapState(['counter']),
    defaultTitle() {
      return this.title || 'Contador';
    }
  },
  methods: {
    ...mapMutations(['increment', 'decrement'])
  }
}
</script>

<template>
  <div class="counter">
    <h2 class="counter__title">{{ defaultTitle }}</h2>
    <p class="counter__number">{{ counter }}</p>
  
    <div class="counter__box">
      <button class="counter__button" v-on:click="increment">+1</button>
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
    transition: all .7s ease;

    &:hover {
      background-color: var(--gray800);
      color: var(--gray50);
    }
  }
}
</style>
