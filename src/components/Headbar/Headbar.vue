<template>
  <div class="p-headbar">
    <div class="p-headbar__logo">
      <Logo />
    </div>
    <div class="p-headbar__menu">
      <Menu />
    </div>
    <div class="p-headbar__social">
      <Social />
    </div>
  </div>
</template>

<script>
// Use in:
//  - @/App.vue

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
  position: fixed;
  z-index: $z-index-headbar;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.75rem 5rem;
  margin: 0 auto;
  min-height: 6rem;
  display: flex;
  align-items: center;
  &__menu {
    margin-left: 4rem;
  }
  &__social {
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
