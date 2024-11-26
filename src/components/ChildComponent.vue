<script>
export default {
  data() {
    return {
      message: '' // Variable para almacenar el texto ingresado
    };
  },
  methods: {
    sendMessage() {
      this.$emit('message-sent', this.message); // Emite el texto ingresado al componente padre
    }
  }
};
</script>

<template>
    <div class="child-component">
      <input class="child-component__input" v-model="message" placeholder="Escribe algo"  />
      <button class="child-component__button" @click="sendMessage" >Enviar</button>
    </div>
  </template>
  
<style lang="scss" scoped>
.child-component{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;

    &__input{
        width: 100%;
        height: 40px;
        border: 2px solid var(--gray800);
        box-shadow: -3px 5px var(--gray800);
        padding: 0.5em;
        font-weight: 18px;
        font-size: 18px;
    }

    &__button{
        padding: 1em;
        border: 2px solid var(--gray800);
        color: var(--gray800);
        font-weight: 600;
        font-size: 18px;
        box-shadow: -3px 5px var(--gray800);
        transition: all .7s ease;

        &:hover{
            background-color: var(--gray800);
            color: var(--gray50);
        }
    }
}
</style>
  

  