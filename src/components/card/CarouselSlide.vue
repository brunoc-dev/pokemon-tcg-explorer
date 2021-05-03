<template>
  <transition :name="direction" mode="in-out">
    <div v-if="visibleSlide === currentSlide" class="carousel-slide">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CarouselSlide',
  props: {
    visibleSlide: {
      type: Number,
      default: null
    },

    currentSlide: {
      type: Number,
      default: null
    },

    direction: {
      type: String,
      default: null
    }
  }
}
</script>
<style lang="sass" scoped>
.carousel-slide
  position: absolute
  top: 0
  left: 0
  bottom: 0
  right: 0

.right-enter-active
  animation: rightInAnimation 0.4s ease-in-out

.right-leave-active
  animation: rightOutAnimation 0.4s ease-in-out

.left-enter-active
  animation: leftInAnimation 0.4s ease-in-out

.left-leave-active
  animation: leftOutAnimation 0.4s ease-in-out

@keyframes rightInAnimation
  from {transform: translateX(-100%)}
  to {transform: translateX(0%)}
@keyframes rightOutAnimation
  from {transform: translateX(0)}
  to {transform: translateX(+100%)}

@keyframes leftInAnimation
  from {transform: translateX(100%)}
  to {transform: translateX(0)}
@keyframes leftOutAnimation
  from {transform: translateX(0)}
  to {transform: translateX(-100%)}
</style>
