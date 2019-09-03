<template>
  <div class="p-menu">
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
//  - @/components/Headbar/Headbar.vue

export default {
  name: 'p-menu',
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
  }
}
</script>

<style lang="scss" scoped>
.p-menu {
  display: flex;
  justify-content: center;
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
