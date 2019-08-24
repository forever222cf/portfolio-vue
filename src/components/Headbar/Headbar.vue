<template>
  <div class="p-headbar">
    <div class="p-headbar__logo">
      <Logo />
    </div>
    <div class="p-headbar__menu">
      <Menu />
    </div>
  </div>
</template>

<script>
export default {
  name: 'p-headbar',
  components: {
    Logo: () => import('@/components/Logo/Logo.vue'),
    Menu: () => import('@/components/Menu/Menu.vue')
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
  padding: 1vw 7vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
