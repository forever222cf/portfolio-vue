<template>
  <div ref="social" :class="socialClass">
    <div class="p-social__list">
      <a class="p-social__item" v-for="item in socialList" :key="item.id" :href="item.href" target="_blank">
        <Icon :name="item.iconName" />
      </a>
    </div>
  </div>
</template>

<script>
// Use in:
//  - @/components/Header/Headbar.vue
//  - @/components/Header/HeaderPanel.vue

import { mapState } from 'vuex'
import { TimelineLite } from 'gsap'

export default {
  name: 'p-social',
  components: {
    Icon: () => import('@/components/Icon/Icon.vue')
  },
  props: {
    inPanel: Boolean
  },
  data () {
    return {
      socialList: [
        {
          id: 'github',
          iconName: 'Github',
          href: 'https://github.com/forever222cf'
        },
        {
          id: 'linked-in',
          iconName: 'LinkedIn',
          href: 'https://www.linkedin.com/in/phbl'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      isShowHeaderPanel: state => state.isShowHeaderPanel
    }),
    socialClass () {
      return {
        'p-social': true,
        'p-social--panel': this.inPanel
      }
    }
  },
  watch: {
    isShowHeaderPanel (newVal, oldVal) {
      if (this.inPanel) {
        if (newVal) {
          this._showSocial()
        } else {
          this._hideSocial()
        }
      }
    }
  },
  methods: {
    _showSocial () {
      let main = new TimelineLite({
        delay: 1.2
      })
      main.to(this.$refs.social, 0.4, { opacity: 1, left: '0' })
    },
    _hideSocial () {
      let main = new TimelineLite({
        delay: 0.4
      })
      main.to(this.$refs.social, 0.4, { opacity: 0, left: '40px' })
      // Reset position
      main.to(this.$refs.social, 0, { opacity: 0, left: '-40px' })
    }
  }
}
</script>

<style lang="scss" scoped>
.p-social {
  &--panel {
    position: relative;
    left: -40px;
    opacity: 0;
    .p-social {
      &__list {
        justify-content: center;
        margin: 0 1rem;
      }
      &__item {
        padding: 0 1rem;
      }
    }
    .p-icon {
      width: 2rem;
      height: 2rem;
    }
  }
  &__list {
    display: flex;
    justify-content: flex-end;
    margin: 0 -0.5rem;
  }
  &__item {
    padding: 0 0.5rem;
    color: $color-white;
    &:hover {
      color: $color-main;
    }
  }
}
</style>
