<template>
  <div id="app">
    <Welcome />
    <Header v-if="!isWelcoming" />
    <main id="main" v-if="!isWelcoming">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'p-app',
  components: {
    Header: () => import('@/components/Header/Header.vue'),
    Welcome: () => import('@/components/Welcome/Welcome.vue')
  },
  computed: {
    ...mapState({
      isWelcoming: state => state.isWelcoming
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
