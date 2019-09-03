<template>
  <div :class="headbarClass" v-scroll="handleScroll">
    <div class="p-headbar__item p-headbar__item--logo">
      <Logo />
    </div>
    <div class="p-headbar__item p-headbar__item--menu">
      <Menu />
    </div>
    <div class="p-headbar__item p-headbar__item--social">
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
      isPassBanner: false
    }
  },
  computed: {
    headbarClass () {
      return {
        'p-headbar': true,
        'p-headbar--stick': this.isPassBanner
      }
    }
  },
  methods: {
    handleScroll (event, el) {
      this.isPassBanner = window.scrollY > window.innerHeight - el.clientHeight
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
  padding: 2vh 5rem;
  margin: 0 auto;
  min-height: 10vh;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  &--stick {
    // backdrop-filter: saturate(180%) blur(20px);
    // background-color: adjust-color($color-bg, $alpha: -0.3);
  }
  &__item {
    flex: 1 0 auto;
    &--logo {
    }
    &--menu {
    }
    &--social {
    }
  }
}
</style>
