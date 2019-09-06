<template>
  <div class="p-headbar">
    <div class="p-headbar__item">
      <Logo />
    </div>
    <div class="p-headbar__item">
      <Menu />
    </div>
    <div class="p-headbar__item">
      <Social />
    </div>
  </div>
</template>

<script>
// Use in:
//  - @/components/Header/Header.vue

export default {
  name: 'p-headbar',
  components: {
    Logo: () => import('@/components/Logo/Logo.vue'),
    Menu: () => import('@/components/Menu/Menu.vue'),
    Social: () => import('@/components/Social/Social.vue')
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.p-headbar {
  display: flex;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  &__item {
    flex: 1 0 auto;
  }
}
</style>
