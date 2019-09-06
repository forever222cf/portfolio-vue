<template>
  <div ref="logo" :class="logoClass">
    <router-link to="/" class="p-logo__link">
      <div class="p-logo__text">L</div>
    </router-link>
  </div>
</template>

<script>
// Use in:
//  - @/components/Header/Headbar.vue
//  - @/components/Header/HeaderPanel.vue

import { mapState } from 'vuex'
import { TimelineLite } from 'gsap'

export default {
  name: 'p-logo',
  props: {
    inPanel: Boolean
  },
  computed: {
    ...mapState({
      isShowHeaderPanel: state => state.isShowHeaderPanel
    }),
    logoClass () {
      return {
        'p-logo': true,
        'p-logo--panel': this.inPanel
      }
    }
  },
  watch: {
    isShowHeaderPanel (newVal, oldVal) {
      if (this.inPanel) {
        if (newVal) {
          this._showLogo()
        } else {
          this._hideLogo()
        }
      }
    }
  },
  methods: {
    _showLogo () {
      let main = new TimelineLite({
        delay: 0.8
      })
      main.to(this.$refs.logo, 0.4, { opacity: 1, left: '0' })
    },
    _hideLogo () {
      let main = new TimelineLite()
      main.to(this.$refs.logo, 0.4, { opacity: 0, left: '40px' })
      // Reset position
      main.to(this.$refs.logo, 0, { opacity: 0, left: '-40px' })
    }
  }
}
</script>

<style lang="scss" scoped>
.p-logo {
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  line-height: 1;
  font-weight: 700;
  border: 2px solid $color-white;
  font-family: $ff-RobotoSlab;
  display: inline-flex;
  &--panel {
    position: relative;
    left: -40px;
    opacity: 0;
    width: 4rem;
    height: 4rem;
    font-size: 3rem;
  }
  &__link {
    display: flex;
    flex-grow: 1;
    height: 100%;
    justify-content: center;
    color: $color-white;
    align-items: center;
  }
}
</style>
