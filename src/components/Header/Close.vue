<template>
  <div class="p-header-close" @click="handleClickClose">
    <div ref="firstLine" class="p-header-close__line"></div>
    <div ref="secondLine" class="p-header-close__line"></div>
  </div>
</template>

<script>
// Use in:
//  - @/components/Header/Header.vue

import { TimelineLite } from 'gsap'

export default {
  name: 'p-header-close',
  data () {
    return {
    }
  },
  methods: {
    handleClickClose () {
      this.$emit('onClickClose')
    },
    _showClose () {
      let main = new TimelineLite()
      // main.from(this.$refs.firstLine, 0.4, { opacity: 0, x: '-100%' })
      // main.from(this.$refs.secondLine, 0.4, { opacity: 0, x: '-100%', y: '-100%' })
    },
    _hideClose () {

    }
  },
  mounted () {
    this._showClose()
  }
}
</script>

<style lang="scss" scoped>
.p-header-close {
  position: absolute;
  top: 50%;
  right: 2rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  user-select: none;
  transform: translateY(-50%);
  // border: 2px solid adjust-color($color-white, $alpha: -0.8);
  &__line {
    position: absolute;
    // top: -0.0625rem;
    top: 50%;
    left: 0;
    // width: 145%;
    width: 100%;
    height: 0.125rem;
    background-color: $color-white;
    &:nth-child(1) {
      // transform-origin: left;
      // transform: rotate(45deg);
      transform: rotate(45deg) translateX(-200%);
    }
    &:nth-child(2) {
      // left: auto;
      // right: 0;
      // transform-origin: right;
      transform: rotate(-45deg) translateX(-200%);
    }
  }
}
</style>
