<template>
  <main>
    <header>
      <h1>Pokémon Trading Card Game</h1>
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
.search
  width: 80%
  height: 1.5rem
  margin: 1rem 0

.search-btn
    height: 1.8rem

.card-list
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-content: center
  align-items: center
  width: 90vw
  height: 80vh

.card-list *
  display: flex
  box-sizing: border-box
</style>
