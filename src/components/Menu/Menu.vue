<template>
  <div ref="menu" :class="menuClass">
    <router-link
      v-for="item in menuList"
      :key="item.id"
      class="p-menu__item"
      active-class="p-menu__item--active"
      exact-active-class="p-menu__item--exact-active"
      :to="item.href">{{ item.label }}</router-link>
  </div>
</template>

<script>
// Use in:
//  - @/components/Header/Headbar.vue
//  - @/components/Header/HeaderPanel.vue

import { mapState } from 'vuex'
import { TimelineLite } from 'gsap'

export default {
  name: 'p-menu',
  props: {
    inPanel: Boolean
  },
  data () {
    return {
      menuList: [
        {
          id: '1',
          href: '/',
          label: 'Projects'
        },
        {
          id: '2',
          href: '/about',
          label: 'About'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      isShowHeaderPanel: state => state.isShowHeaderPanel
    }),
    menuClass () {
      return {
        'p-menu': true,
        'p-menu--panel': this.inPanel
      }
    }
  },
  watch: {
    isShowHeaderPanel (newVal, oldVal) {
      if (this.inPanel) {
        if (newVal) {
          this._showMenu()
        } else {
          this._hideMenu()
        }
      }
    }
  },
  methods: {
    _showMenu () {
      let main = new TimelineLite({
        delay: 1
      })
      main.to(this.$refs.menu, 0.4, { opacity: 1, left: '0' })
    },
    _hideMenu () {
      let main = new TimelineLite({
        delay: 0.2
      })
      main.to(this.$refs.menu, 0.4, { opacity: 0, left: '40px' })
      // Reset position
      main.to(this.$refs.menu, 0, { opacity: 0, left: '-40px' })
    }
  }
}
</script>

<style lang="scss" scoped>
.p-menu {
  display: flex;
  justify-content: center;
  &--panel {
    position: relative;
    left: -40px;
    opacity: 0;
    flex-direction: column;
    align-items: center;
    .p-menu {
      &__item {
        font-size: 2.5rem;
        font-weight: 500;
        margin: 1.5rem 0;
      }
    }
  }
  &__item {
    font-weight: 700;
    padding: 0.5rem 1rem;
    color: $color-white;
    &:hover {
      color: $color-main;
    }
    &--exact-active {
      color: $color-main;
    }
  }
}
</style>
