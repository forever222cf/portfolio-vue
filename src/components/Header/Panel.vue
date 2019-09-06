<template>
  <div ref="panel" class="p-header-panel">
    <div class="p-header-panel--logo">
      <Logo inPanel />
    </div>
    <div class="p-header-panel--menu">
      <Menu inPanel />
    </div>
    <div class="p-header-panel--social">
      <Social inPanel />
    </div>
  </div>
</template>

<script>
// Use in:
//  - @/components/Header/Header.vue

import { mapState } from 'vuex'
import { TimelineLite } from 'gsap'

export default {
  name: 'p-header-panel',
  components: {
    Logo: () => import('@/components/Logo/Logo.vue'),
    Menu: () => import('@/components/Menu/Menu.vue'),
    Social: () => import('@/components/Social/Social.vue')
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      isShowHeaderPanel: state => state.isShowHeaderPanel
    })
  },
  watch: {
    isShowHeaderPanel (newVal, oldVal) {
      if (newVal) {
        this._showPanel()
      } else {
        this._hidePanel()
      }
    }
  },
  methods: {
    _showPanel () {
      let main = new TimelineLite({
        delay: 0.4
      })
      main.to(this.$refs.panel, 0.3, { y: '100%' })
    },
    _hidePanel () {
      let main = new TimelineLite({
        delay: 0.8
      })
      main.to(this.$refs.panel, 0.3, { y: '0%' })
    }
  }
}
</script>

<style lang="scss" scoped>
.p-header-panel {
  position: fixed;
  z-index: $z-index-header-panel;
  top: -100%;
  left: 0;
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $color-title;
  &--logo {
    text-align: center;
  }
}
</style>
