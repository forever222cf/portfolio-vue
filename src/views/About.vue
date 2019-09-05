<template>
  <div class="p-about" @wheel.stop="handleWheel">
    <transition :name="transitionName" mode="out-in" v-for="item in sections" :key="item.id">
      <Section v-show="currentPosition === item.position">
        <component :is="item.component"></component>
      </Section>
    </transition>
    <SideNav :sections="sections"/>
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
    SideNav: () => import('@/components/SideNav/SideNav.vue'),
    Introductions: () => import('@/components/About/Introductions.vue'),
    Skills: () => import('@/components/About/Skills.vue'),
    Hobbies: () => import('@/components/About/Hobbies.vue'),
    Languages: () => import('@/components/About/Languages.vue'),
    Personalities: () => import('@/components/About/Personalities.vue')
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      sections: state => state.about.sections,
      slideDirection: state => state.transition.slideDirection,
      currentPosition: state => state.transition.currentPosition,
      transitionTime: state => state.transition.transitionTime,
      isTransitioning: state => state.transition.isTransitioning
    }),
    transitionName () {
      return `slide-${this.slideDirection}`
    }
  },
  methods: {
    ...mapActions({
      _updatePosition: `transition/${UPDATE_POSITION}`,
      _updateSlideDirection: `transition/${UPDATE_SLIDE_DIRECTION}`,
      _updateTransitionState: `transition/${UPDATE_TRANSITION_STATE}`
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
          this._updateSlideDirection('up')
        } else if (event.wheelDelta > 100 && this.currentPosition > 0) {
          // Scroll up
          this._updatePosition(this.currentPosition - 1)
          this._updateSlideDirection('down')
        }
      }
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
}
</style>
