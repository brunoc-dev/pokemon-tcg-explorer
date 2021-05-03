<template>
  <main v-if="card" class="card-detail">
    <aside class="card-image">
      <img :src="card.images.large" alt="Pokémon card">
    </aside>

    <header>{{ card.name }} #{{ card.id.toUpperCase() }}</header>

    <section class="card-data">
      <div class="features">
        <strong>Types:</strong>
        <div
          v-for="(type, index) in card.types"
          :key="'type#' + index"
          class="feature"
        >
          {{ type }}
        </div>
      </div>

      <strong>Resistances</strong>
      <div
        v-for="(resistance, index) in card.resistances"
        :key="'res#' + index"
        class="feature"
      >
        <a>{{ resistance.type }} | {{ resistance.value }}</a>
      </div>

      <strong>Attacks</strong>
      <div
        v-for="(attack, index) in card.attacks"
        :key="'atk#' + index"
        class="features"
      >
        <div @click="openModal(attack)">
          {{ attack.name }}
        </div>
      </div>

      <strong>Weaknesses</strong>
      <div
        v-for="weakness in card.weaknesses"
        :key="'weak#' + weakness"
        class="feature"
      >
        {{ weakness.type }} | {{ weakness.value }}
      </div>
    </section>
    <CardAttackModal v-if="showModal" :atack="selectedAtack" @close="showModal = false" />
  </main>
</template>

<script>
import CardAttackModal from '@/components/card/CardAttackModal.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'CardDetails',

  components: {
    CardAttackModal
  },

  props: {
    id: {
      type: [String, Number],
      default: null
    }
  },

  data () {
    return {
      showModal: false,
      selectedAtack: {}
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
    },

    openModal (atack) {
      this.selectedAtack = atack
      this.showModal = true
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
  max-width: 28rem
</style>
