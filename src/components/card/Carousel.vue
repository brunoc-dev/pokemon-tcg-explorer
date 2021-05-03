<template>
  <div class="carousel">
    <slot />

    <button type="button" class="previous" @click="previous">
      Previous
    </button>

    <button type="button" class="next" @click="next">
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    itemsLength: {
      type: Number,
      default: null
    }
  },

  data () {
    return {
      visibleSlide: 0,
      direction: 'left'
    }
  },

  methods: {
    next () {
      this.visibleSlide = this.visibleSlide < this.itemsLength - 1
        ? this.visibleSlide += 1
        : 0

      this.direction = 'left'
    },

    previous () {
      this.visibleSlide = this.visibleSlide > 0
        ? this.visibleSlide -= 1
        : this.itemsLength - 1

      this.direction = 'right'
    }
  }
}
</script>

<style lang="sass" scoped>
.carousel
  position: relative
  width: 100%
  height: 80vh
  overflow: hidden

button
  width: 4rem
  height: 4rem
  position: absolute
  top: 50%
  background-color: rgba(0, 0, 0, 0.8)
  color: white
  border-radius: 50%

button:focus, button:hover
  outline: none
  cursor: pointer

button.next
  right: 0

button.previous
  left: 0
</style>
