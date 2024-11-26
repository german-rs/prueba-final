<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
      <nav class="header__navbar">
        <ul class="header__list">
          <li class="header__item">
            <RouterLink class="header__link" to="/">Contador</RouterLink>
          </li>
          <li class="header__item">
            <RouterLink class="header__link" to="/about">Comunicación</RouterLink>
          </li>
        </ul>
      </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
.header{

  &__list{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: start;
    gap: 1em;
    padding: 1em 0;
  }

  &__item{
    list-style: none;
    margin: 0;
  }

  &__link{
    text-decoration: none;
    color: var(--gray800);
    padding: 1em;
    transition: all .5s ease;

    &:hover{
      background: var(--gray800);
      color: var(--gray100);
    }
  }
}
</style>
