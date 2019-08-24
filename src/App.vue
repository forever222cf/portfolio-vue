<template>
  <div id="app">
    <!-- <Headbar v-if="!isInitialing" /> -->
    <!-- <InitialLoader /> -->
    <main id="main">
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
    // Headbar: () => import('@/components/Headbar/Headbar.vue'),
    // InitialLoader: () => import('@/components/InitialLoader/InitialLoader.vue')
  },
  computed: {
    ...mapState({
      isInitialing: state => state.isInitialing
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
