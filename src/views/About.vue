<template>
  <div class="p-about" @wheel.stop="handleWheel">
    <transition :name="slideDirection" mode="out-in" v-for="item in sections" :key="item.id">
      <Section v-show="currentPosition === item.position">
        <component :is="item.component"></component>
      </Section>
    </transition>
    <nav class="p-about__nav">
      <div :class="{ 'p-about__nav-item': true, 'p-about__nav-item--active': currentPosition === item.position }"
           v-for="item in sections"
           :key="item.id"
           @click="handleClickNavItem(item.position)">
        <svg class="p-about__nav-item-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <circle class="p-about__nav-item-circle" cx="12" cy="12" r="11" stroke-width="1" stroke="currentColor" fill="transparent"></circle>
        </svg>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {
  UPDATE_POSITION,
  UPDATE_SLIDE_DIRECTION,
  UPDATE_TRANSITION_STATE
} from '@/store/action-types'

export default {
  name: 'p-about',
  components: {
    Section: () => import('@/components/Section/Section.vue'),
    Banner: () => import('@/components/About/Banner.vue'),
    Introductions: () => import('@/components/About/Introductions.vue'),
    Skills: () => import('@/components/About/Skills.vue'),
    Hobbies: () => import('@/components/About/Hobbies.vue'),
    Languages: () => import('@/components/About/Languages.vue'),
    Personalities: () => import('@/components/About/Personalities.vue')
  },
  data () {
    return {
      transitionTime: 1000 // ms
    }
  },
  computed: {
    ...mapState({
      sections: state => state.about.sections,
      slideDirection: state => state.about.slideDirection,
      currentPosition: state => state.about.currentPosition,
      isTransitioning: state => state.about.isTransitioning
    })
  },
  methods: {
    ...mapActions({
      _updatePosition: `about/${UPDATE_POSITION}`,
      _updateSlideDirection: `about/${UPDATE_SLIDE_DIRECTION}`,
      _updateTransitionState: `about/${UPDATE_TRANSITION_STATE}`
    }),
    handleWheel (event) {
      if (!this.isTransitioning) {
        // Disable scroll
        this._updateTransitionState(true)
        // Enable after transition finish
        setTimeout(() => {
          this._updateTransitionState(false)
        }, this.transitionTime)
        // Execute transition
        if (event.wheelDelta < -100 && this.currentPosition < this.sections.length - 1) {
          // Scroll down
          this._updatePosition(this.currentPosition + 1)
          this._updateSlideDirection('slide-up')
        } else if (event.wheelDelta > 100 && this.currentPosition > 0) {
          // Scroll up
          this._updatePosition(this.currentPosition - 1)
          this._updateSlideDirection('slide-down')
        }
      }
    },
    handleClickNavItem (position) {
      this._updateSlideDirection(position > this.currentPosition ? 'slide-up' : 'slide-down')
      this._updatePosition(position)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.p-about {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  &__nav {
    position: absolute;
    top: 50%;
    right: 1.5rem;
    display: flex;
    flex-direction: column;
    transform: translateY(-50%);
    &-item {
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
        .p-about__nav-item {
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
}

.p-skills {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
}
</style>
