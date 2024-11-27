<script>
// Importa el componente `ParentComponent` desde la ruta especificada
import ParentComponent from '@/components/ParentComponent.vue'
export default {
  components: {
    // Se declara `ParentComponent` como un componente que se puede usar en este componente
    ParentComponent,
  },
}
</script>

<template>
  <!-- Usa el componente `ParentComponent` dentro de esta plantilla -->
  <ParentComponent />
</template>
