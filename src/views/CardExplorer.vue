<template>
  <div class="home">
    <CardList />
  </div>
</template>

<script>
import CardList from '@/components/card/CardList.vue'

export default {
  name: 'CardExplorer',

  components: {
    CardList
  }
}
</script>

<style lang="sass" scoped>
.home
  width: 100vw
  height: 100vh
  margin: 0
  padding: 0
  display: flex
  align-content: center
  justify-content: center
  align-items: center
</style>
