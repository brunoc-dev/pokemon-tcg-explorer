<template>
  <main>
    <header>
      <h2>Pokémon Trading Card Game</h2>
      <input v-model="filter.name" class="search" type="text">
      <button class="search-btn" @click="getCards">
        Buscar
      </button>
    </header>

    <section v-if="cardList && cardListFormat === 'mobile'" class="card-list mobile">
      <Carousel ref="carousel" :items-length="cardList.length">
        <template v-if="$refs.carousel">
          <CarouselSlide
            v-for="(card, index) in cardList"
            :key="card.id"
            :visible-slide="$refs.carousel.visibleSlide"
            :direction="$refs.carousel.direction"
            :current-slide="index"
          >
            <CardListItem class="carousel-item" :card="card" />
          </CarouselSlide>
        </template>
      </Carousel>
    </section>

    <section v-else class="card-list">
      <CardListItem v-for="card in cardList" :key="card.id" :card="card" />
    </section>
  </main>
</template>

<script>
import Carousel from './Carousel.vue'
import CarouselSlide from './CarouselSlide.vue'
import CardListItem from './CardListItem.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'CardList',

  components: {
    CardListItem,
    Carousel,
    CarouselSlide
  },

  data () {
    return {
      filter: { name: '' },
      windowWidth: 0
    }
  },

  computed: {
    ...mapGetters('card', ['cardList']),

    cardListFormat () {
      return this.windowWidth < 800 ? 'mobile' : 'desktop'
    }
  },

  mounted () {
    this.getWindowWidth()
    this.getCards()
  },

  beforeMount () {
    window.addEventListener('resize', this.getWindowWidth)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth)
  },

  methods: {
    async getCards () {
      await this.$store.dispatch('card/getCardList', this.filter)
    },

    getWindowWidth () {
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style lang="sass" scoped>
header
  margin: 1rem
  &  *
    flex: 1 1 18rem

.search
  height: 1.7rem
  margin: 1rem 0

.search-btn
    flex: 0 0 5rem !important
    height: 1.8rem

.card-list
  width: 90vw
  height: 80vh
  overflow: auto

.card-list *
  display: flex
  box-sizing: border-box
</style>
