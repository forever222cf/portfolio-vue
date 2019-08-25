<template>
  <div ref="welcome" class="p-welcome">
    <div ref="background" class="p-welcome__background">
      <div ref="backgroundPanelLeft" class="p-welcome__background-panel p-welcome__background-panel--left"></div>
      <div ref="backgroundPanelRight" class="p-welcome__background-panel p-welcome__background-panel--right"></div>
    </div>
    <div ref="icon" class="p-welcome__icon">
      <div ref="topBorder" class="p-welcome__icon-border p-welcome__icon-border--top"></div>
      <div ref="rightBorder" class="p-welcome__icon-border p-welcome__icon-border--right"></div>
      <div ref="bottomBorder" class="p-welcome__icon-border p-welcome__icon-border--bottom"></div>
      <div ref="leftBorder" class="p-welcome__icon-border p-welcome__icon-border--left"></div>
      <div ref="letterWrapper" class="p-welcome__icon-label-wrapper">
        <div ref="letter" class="p-welcome__icon-label">L</div>
        <div ref="cover" class="p-welcome__icon-label-cover"></div>
      </div>
    </div>
  </div>
</template>

<script>
// Use in:
//  - @/App.vue

import { mapActions } from 'vuex'
import { UPDATE_WELCOME_STATE } from '@/store/action-types'
import { TimelineLite } from 'gsap'

export default {
  name: 'p-welcome-loader',
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      _updateWelcomeState: UPDATE_WELCOME_STATE
    }),
    welcome () {
      let main = new TimelineLite({
        delay: 0.5
      })
      main.add(this._initial())
      main.add(this._addIconBorder())
      main.add(this._revealLetter(), '+=0.3')
      main.add(this._revealApp(), '+=1')
    },
    _initial () {
      let tl = new TimelineLite()
      tl.from(this.$refs.background, 0.5, { opacity: 0 })
      tl.from(this.$refs.cover, 0, { opacity: 0 })
      return tl
    },
    _addIconBorder () {
      let tl = new TimelineLite()
      tl.from(this.$refs.icon, 0.5, { scale: 2, rotation: 90 })
      tl.from(this.$refs.topBorder, 0.5, { x: '100%', opacity: 0 }, '-=0.5')
      tl.from(this.$refs.rightBorder, 0.5, { y: '100%', opacity: 0 }, '-=0.5')
      tl.from(this.$refs.bottomBorder, 0.5, { x: '-100%', opacity: 0 }, '-=0.5')
      tl.from(this.$refs.leftBorder, 0.5, { y: '-100%', opacity: 0 }, '-=0.5')
      return tl
    },
    _revealLetter () {
      let tl = new TimelineLite()
      tl.fromTo(this.$refs.letterWrapper, 0.3, { left: '75%' }, { left: 4 })
      tl.from(this.$refs.letter, 0.3, { x: '-200%' }, '-=0.3')
      tl.to(this.$refs.cover, 0, { opacity: 0, onComplete: this._animationComplete })
      return tl
    },
    _revealApp () {
      let tl = new TimelineLite()
      tl.to(this.$refs.icon, 0.5, { scale: 2, rotation: 90, opacity: 0 })
      tl.to(this.$refs.letter, 0.5, { scale: 0.5, rotation: -90 }, '-=0.5')
      tl.to(this.$refs.topBorder, 0.5, { x: '100%', opacity: 0 }, '-=0.5')
      tl.to(this.$refs.rightBorder, 0.5, { y: '100%', opacity: 0 }, '-=0.5')
      tl.to(this.$refs.bottomBorder, 0.5, { x: '-100%', opacity: 0 }, '-=0.5')
      tl.to(this.$refs.leftBorder, 0.5, { y: '-100%', opacity: 0 }, '-=0.5')
      tl.to(this.$refs.backgroundPanelLeft, 1.2, { right: '100%', ease: 'Power4.easeIn' }, '-=0.5')
      tl.to(this.$refs.backgroundPanelRight, 1.2, { left: '100%', ease: 'Power4.easeIn' }, '-=1.2')
      return tl
    },
    _animationComplete () {
      this._updateWelcomeState(false)
    }
  },
  mounted () {
    this.welcome()
  }
}
</script>

<style lang="scss" scoped>
.p-welcome {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: $z-index-welcome;
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    &-cell {
      background-color: $color-title;
    }
    &-panel {
      position: absolute;
      top: 0;
      bottom: 0;
      background-color: $color-title;
      &--left {
        left: 0;
        right: 50%;
      }
      &--right {
        left: 50%;
        right: 0;
      }
    }
  }
  &__icon {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 10vw;
    height: 10vw;
    transform: translate(-50%, -50%);
    &-border {
      position: absolute;
      background-color: $color-white;
      &--top,
      &--bottom {
        left: 0;
        width: 100%;
        height: 2px;
      }
      &--right,
      &--left {
        top: 0;
        width: 2px;
        height: 100%;
      }
      &--top {
        top: 0;
      }
      &--right {
        right: 0;
      }
      &--bottom {
        bottom: 0;
      }
      &--left {
        left: 0;
      }
    }
    &-label {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 6vw;
      line-height: 1;
      color: $color-white;
      font-family: $ff-RobotoSlab;
      transform: translate(-50%, -50%);
      &-wrapper {
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        overflow: hidden;
      }
      &-cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        width: 21px;
        height: 100%;
        background-color: $color-title;
      }
    }
  }
}
</style>
