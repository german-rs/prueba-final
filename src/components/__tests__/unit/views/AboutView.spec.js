// Importaciones necesarias
import { mount } from '@vue/test-utils' // Importa el método mount para renderizar componentes en pruebas
import AboutView from '@/views/AboutView.vue' // Importa el componente principal a probar
import ParentComponent from '@/components/ParentComponent.vue' // Importa el componente padre
import ChildComponent from '@/components/ChildComponent.vue' // Importa el componente hijo
import { describe, it, expect } from 'vitest' // Importa utilidades de Vitest para escribir pruebas

// Suite de pruebas para el componente AboutView
describe('AboutView', () => {
  // Primer caso de prueba: verificación de la existencia de ParentComponent
  it('should contain ParentComponent', () => {
    // Monta (renderiza) el componente AboutView para la prueba
    const wrapper = mount(AboutView)

    // Busca el componente ParentComponent dentro del wrapper
    const parentComponent = wrapper.findComponent(ParentComponent)

    // Verifica que ParentComponent exista en el componente
    expect(parentComponent.exists()).toBe(true)
  })

  // Segundo caso de prueba: verificación de la existencia de ChildComponent dentro de ParentComponent
  it('should contain ChildComponent within ParentComponent', () => {
    // Monta el componente AboutView
    const wrapper = mount(AboutView)

    // Busca el componente ParentComponent
    const parentComponent = wrapper.findComponent(ParentComponent)

    // Busca el componente ChildComponent dentro de ParentComponent
    const childComponent = parentComponent.findComponent(ChildComponent)

    // Verifica que ChildComponent exista dentro de ParentComponent
    expect(childComponent.exists()).toBe(true)
  })
})
