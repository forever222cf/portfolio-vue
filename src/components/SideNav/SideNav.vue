<template>
  <nav class="p-side-nav">
    <div
      :class="{ 'p-side-nav__item': true, 'p-side-nav__item--active': currentPosition === item.position }"
      v-for="item in sections"
      :key="item.id"
      @click="handleClickNavItem(item.position)">
      <svg class="p-side-nav__item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <circle class="p-side-nav__item-circle" cx="12" cy="12" r="11" stroke-width="1" stroke="currentColor" fill="transparent"></circle>
      </svg>
    </div>
  </nav>
</template>

<script>
// Use in:
//  - @/views/About

import { mapState, mapActions } from 'vuex'
import {
  UPDATE_POSITION,
  UPDATE_SLIDE_DIRECTION,
  UPDATE_TRANSITION_STATE
} from '@/store/action-types'

export default {
  name: 'p-side-nav',
  props: {
    sections: Array
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      currentPosition: state => state.transition.currentPosition,
      transitionTime: state => state.transition.transitionTime,
      isTransitioning: state => state.transition.isTransitioning
    })
  },
  methods: {
    ...mapActions({
      _updatePosition: `transition/${UPDATE_POSITION}`,
      _updateSlideDirection: `transition/${UPDATE_SLIDE_DIRECTION}`,
      _updateTransitionState: `transition/${UPDATE_TRANSITION_STATE}`
    }),
    handleClickNavItem (position) {
      if (!this.isTransitioning) {
        // Disable scroll
        this._updateTransitionState(true)
        // Enable after transition finish
        setTimeout(() => {
          this._updateTransitionState(false)
        }, this.transitionTime)
        // Execute transition
        this._updateSlideDirection(position > this.currentPosition ? 'up' : 'down')
        this._updatePosition(position)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.p-side-nav {
  position: absolute;
  top: 50%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  transform: translateY(-50%);
  &__item {
    position: relative;
    overflow: hidden;
    margin: 0.5rem 0;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    color: $color-white;
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0.375rem;
      height: 0.375rem;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: $color-white;
    }
    &--active {
      color: $color-main;
      &:before {
        background-color: $color-main;
      }
      .p-side-nav__item {
        &-svg {
          transform: rotate(450deg);
        }
        &-circle {
          stroke-dashoffset: 0;
        }
      }
    }
    &-svg {
      transition: transform 1.5s cubic-bezier(0.4, 0.4, 0, 1);
    }
    &-circle {
      stroke-dasharray: 70;
      stroke-dashoffset: 70;
      transition: stroke-dashoffset 1.5s cubic-bezier(0.4, 0.4, 0, 1);
    }
  }
}
</style>
