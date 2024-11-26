import { mount } from '@vue/test-utils';
import AboutView from '@/views/AboutView.vue';
import ParentComponent from '@/components/ParentComponent.vue';
import ChildComponent from '@/components/ChildComponent.vue';
import { describe, it, expect } from 'vitest';

describe('AboutView', () => {
  // Prueba para verificar la existencia del componente ParentComponent
  it('should contain ParentComponent', () => {
    const wrapper = mount(AboutView);
    const parentComponent = wrapper.findComponent(ParentComponent);
    expect(parentComponent.exists()).toBe(true);
  });

  // Prueba para verificar la existencia del componente ChildComponent dentro de ParentComponent
  it('should contain ChildComponent within ParentComponent', () => {
    const wrapper = mount(AboutView);
    const parentComponent = wrapper.findComponent(ParentComponent);
    const childComponent = parentComponent.findComponent(ChildComponent);
    expect(childComponent.exists()).toBe(true);
  });
});
