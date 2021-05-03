<template>
  <router-link
    data-test="card"
    class="card-list-item"
    :to="{name: 'card-details', params: {id: card.id}}"
  >
    <img :src="card.images.small" alt="Pokémon card">
  </router-link>
</template>

<script>
export default {
  name: 'CardListItem',

  props: {
    card: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="sass" scoped>
.card-list-item
  flex: 1 1 18rem
  justify-content: center
  align-items: center
  margin: 1rem

.card-list-item img
  width: 100%
  max-width: 25rem
</style>
