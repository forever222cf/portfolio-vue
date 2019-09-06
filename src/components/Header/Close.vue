<template>
  <div :class="closeButtonClass" @click="handleClickClose">
    <div ref="firstLine" class="p-header-close__line"></div>
    <div ref="secondLine" class="p-header-close__line"></div>
  </div>
</template>

<script>
// Use in:
//  - @/components/Header/Header.vue

import { mapState, mapActions } from 'vuex'
import { UPDATE_HEADER_STATE } from '@/store/action-types'
import { TimelineLite } from 'gsap'

export default {
  name: 'p-header-close',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      isShowHeaderPanel: state => state.isShowHeaderPanel
    }),
    closeButtonClass () {
      return {
        'p-header-close': true,
        'p-header-close--active': this.isShowHeaderPanel
      }
    }
  },
  watch: {
    isShowHeaderPanel (newVal, oldVal) {
      if (newVal) {
        this._showClose()
      } else {
        this._hideClose()
      }
    }
  },
  methods: {
    ...mapActions({
      _updateHeaderState: UPDATE_HEADER_STATE
    }),
    handleClickClose () {
      this._updateHeaderState(false)
    },
    _showClose () {
      let main = new TimelineLite({
        delay: 0.8
      })
      main.to(this.$refs.firstLine, 0.4, { opacity: 1, transform: 'rotate(45deg)' })
      main.to(this.$refs.secondLine, 0.4, { opacity: 1, transform: 'rotate(-45deg)' }, '-=0.2')
    },
    _hideClose () {
      let main = new TimelineLite()
      main.to(this.$refs.firstLine, 0.4, { opacity: 0, transform: 'rotate(45deg) translateX(200%)' })
      main.to(this.$refs.secondLine, 0.4, { opacity: 0, transform: 'rotate(-45deg) translateX(200%)' }, '-=0.2')
      // Reset position
      main.to(this.$refs.firstLine, 0, { opacity: 0, transform: 'rotate(45deg) translateX(-200%)' })
      main.to(this.$refs.secondLine, 0, { opacity: 0, transform: 'rotate(-45deg) translateX(-200%)' })
    }
  }
}
</script>

<style lang="scss" scoped>
.p-header-close {
  position: absolute;
  z-index: $z-index-header-panel-close;
  top: 50%;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  user-select: none;
  transform: translateY(-50%);
  pointer-events: none;
  &--active {
    pointer-events: auto;
  }
  &__line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 0.125rem;
    opacity: 0;
    background-color: $color-white;
    &:nth-child(1) {
      // transform: rotate(45deg);
      transform: rotate(45deg) translateX(-200%);
    }
    &:nth-child(2) {
      // transform: rotate(-45deg);
      transform: rotate(-45deg) translateX(-200%);
    }
  }
}
</style>
