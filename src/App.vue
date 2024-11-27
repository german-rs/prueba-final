<!-- Sección de script con la sintaxis setup (Composition API) -->
<script setup>
// Importa los componentes de routing de Vue Router
// RouterLink: Componente para crear enlaces de navegación
// RouterView: Componente que renderiza el componente de la ruta actual
import { RouterLink, RouterView } from 'vue-router'
</script>

<!-- Template del componente -->
<template>
  <header class="header">
    <nav class="header__navbar">
      <ul class="header__list">
        <li class="header__item">
          <!-- RouterLink para navegar a la página de inicio (ruta '/') -->
          <RouterLink class="header__link" to="/">Contador</RouterLink>
        </li>
        <li class="header__item">
          <!-- RouterLink para navegar a la página About (ruta '/about') -->
          <RouterLink class="header__link" to="/about">Comunicación</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <!-- RouterView: Renderiza el componente correspondiente a la ruta actual -->
  <RouterView />
</template>

<style lang="scss" scoped>
.header {
  &__list {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: start;
    gap: 1em;
    padding: 1em 0;
  }

  &__item {
    list-style: none;
    margin: 0;
  }

  &__link {
    text-decoration: none;
    color: var(--gray800);
    padding: 1em;
    transition: all 0.5s ease;

    &:hover {
      background: var(--gray800);
      color: var(--gray100);
    }
  }
}
</style>
