<template>
  <transition>
    <div class="modal">
      <div><strong>{{ atack.name }}</strong></div>
      <div>{{ atack.text }}</div>
      <div>{{ atack.cost }}</div>
      <div>{{ atack.damage }}</div>
      <button @click="$emit('close')">
        Ok
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CardAtackModal',
  props: {
    atack: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="sass" scoped>
.modal
  max-width: 50%
  height: 50%

</style>
