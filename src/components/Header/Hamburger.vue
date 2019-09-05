<template>
  <div :class="hamburgerClass" @click="handleClickHamburger">
    <div ref="firstLine" class="p-hamburger__line"></div>
    <div ref="secondLine" class="p-hamburger__line"></div>
    <div ref="thirdLine" class="p-hamburger__line"></div>
  </div>
</template>

<script>
// Use in:
//  - @/components/Header/Header.vue

import { mapState } from 'vuex'
import { TimelineLite } from 'gsap'

export default {
  name: 'p-header-hamburger',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      slideDirection: state => state.transition.slideDirection,
      currentPosition: state => state.transition.currentPosition
    }),
    hamburgerClass () {
      return {
        'p-hamburger': true,
        'p-hamburger--show': this.currentPosition > 0
      }
    }
  },
  watch: {
    currentPosition (newVal, oldVal) {
      if (newVal > 0 && oldVal === 0) {
        // Enter
        this._showHamburger()
      } else if (newVal === 0) {
        // Leave
        this._hideHamburger()
      }
    }
  },
  methods: {
    _showHamburger () {
      let main = new TimelineLite({
        delay: 0.75
      })
      main.to(this.$refs.secondLine, 0.4, { opacity: 1, x: '32px', ease: 'Power2.easeOut' })
      main.to(this.$refs.firstLine, 0.4, { opacity: 1, x: '32px', ease: 'Power2.easeOut' }, '-=0.2')
      main.to(this.$refs.thirdLine, 0.4, { opacity: 1, x: '32px', ease: 'Power2.easeOut' }, '-=0.2')
    },
    _hideHamburger () {
      let main = new TimelineLite()
      main.to(this.$refs.thirdLine, 0.4, { opacity: 0, x: '64px', ease: 'Power2.easeOut' })
      main.to(this.$refs.firstLine, 0.4, { opacity: 0, x: '64px', ease: 'Power2.easeOut' }, '-=0.3')
      main.to(this.$refs.secondLine, 0.4, { opacity: 0, x: '64px', ease: 'Power2.easeOut' }, '-=0.3')
      // Reset position
      main.to(this.$refs.firstLine, 0, { opacity: 0, x: '0%' })
      main.to(this.$refs.secondLine, 0, { opacity: 0, x: '0%' })
      main.to(this.$refs.thirdLine, 0, { opacity: 0, x: '0%' })
    },
    handleClickHamburger () {
      this.$emit('onClickHamburger')
    }
  }
}
</script>

<style lang="scss" scoped>
.p-hamburger {
  position: absolute;
  top: 50%;
  right: 2rem;
  width: 2rem;
  height: 1.25rem;
  cursor: pointer;
  user-select: none;
  pointer-events: none;
  transform: translateY(-50%);
  &--show {
    pointer-events: auto;
    &:hover {
      .p-hamburger {
        &__line {
          width: 100%;
        }
      }
    }
    .p-hamburger {
      &__line {
        transition: width 0.4s cubic-bezier(0.6, -0.4, 0.5, 2);
      }
    }
  }
  &__line {
    position: absolute;
    top: 0;
    right: 100%;
    opacity: 0;
    width: 100%;
    height: 0.125rem;
    background-color: $color-white;
    &:nth-child(1) {
      top: 0;
      width: 100%;
    }
    &:nth-child(2) {
      top: calc(50% - 0.125rem / 2);
      width: 60%;
    }
    &:nth-child(3) {
      top: calc(100% - 0.125rem);
      width: 85%;
    }
  }
}
</style>
