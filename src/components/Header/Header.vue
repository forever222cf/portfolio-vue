<template>
  <header class="p-header">
    <transition :name="transitionName">
      <Headbar v-show="currentPosition < 1" />
    </transition>
    <HeaderHamburger @onClickHamburger="handleClickHamburger" />
    <HeaderClose @onClickHamburger="handleClickClose" />
    <HeaderPanel />
  </header>
</template>

<script>
// Use in:
//  - @/App.vue

import { mapState } from 'vuex'

export default {
  name: 'p-header',
  components: {
    Headbar: () => import('@/components/Headbar/Headbar.vue'),
    HeaderHamburger: () => import('./Hamburger.vue'),
    HeaderClose: () => import('./Close.vue'),
    HeaderPanel: () => import('./Panel.vue')
  },
  data () {
    return {
      isShowHeaderPanel: false
    }
  },
  computed: {
    ...mapState({
      slideDirection: state => state.transition.slideDirection,
      currentPosition: state => state.transition.currentPosition
    }),
    transitionName () {
      return `slide-${this.slideDirection}-delay`
    }
  },
  methods: {
    handleClickHamburger () {
      this.isShowHeaderPanel = true
    },
    handleClickClose () {
      this.isShowHeaderPanel = false
    }
  }
}
</script>

<style lang="scss" scoped>
.p-header {
  position: fixed;
  z-index: $z-index-headbar;
  top: 0;
  left: 0;
  right: 0;
  padding: 2vh 5rem;
  margin: 0 auto;
  min-height: 10vh;
  transition: all 0.3s ease;
  // backdrop-filter: saturate(180%) blur(20px);
  // background-color: adjust-color($color-bg, $alpha: -0.8);
}
</style>
