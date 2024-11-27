<script>
// Importa el componente del contador
import CounterComponent from '@/components/CounterComponent.vue'
export default {
  components: {
    // Se declara el componente del contador para usarlo en la vista
    CounterComponent,
  },
}
</script>

<template>
  <main>
    <!-- Incluye el componente del contador en la vista principal -->
    <CounterComponent />
  </main>
</template>
