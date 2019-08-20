<template>
  <div id="app">
    <Menu />
    <main id="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'p-app',
  components: {
    Menu: () => import('@/components/Menu/Menu.vue')
  }
}
</script>

<style lang="scss" scoped>
</style>
