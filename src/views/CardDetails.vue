<template>
  <main v-if="card" class="card-detail">
    <aside class="card-image">
      <img :src="card.images.large" alt="Pokémon card">
    </aside>
    <header>{{ card.name }} #{{ card.id.toUpperCase() }}</header>
    <section class="card-data">
      <div>
        Types:
        <template v-for="type in card.types">
          {{ type }}
        </template>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CardDetails',

  props: {
    id: {
      type: [String, Number],
      default: null
    }
  },

  computed: {
    ...mapGetters('card', ['card'])
  },

  mounted () {
    this.getCard()
  },

  beforeDestroy () {
    this.$store.commit('card/updateCard', {})
  },

  methods: {
    getCard () {
      this.$store.dispatch('card/getCard', this.id)
    }
  }
}
</script>

<style lang="sass" scoped>
header
  font-weight: 700
  font-size: 1rem

.card-detail
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-content: center
  align-items: center
  margin: 0

  & *
    display: flex
    justify-content: center
    align-content: center
    align-items: center
    margin: 1rem
    flex: 1 1 19rem

.card-image
  width: 100%
  flex: 2 1 19rem

.card-image img
  width: 100%
  max-width: 35rem
</style>
