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
export default {
  name: 'p-menu',
  data () {
    return {
      menuList: [
        {
          id: '1',
          href: '/',
          label: 'All projects'
        },
        {
          id: '2',
          href: '/about',
          label: 'About me'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.p-menu {
  &__item {
    font-weight: 700;
    color: $color-text;
    &:not(:last-child) {
      &:after {
        content: '|';
        color: $color-text;
        padding: 0 0.5rem;
      }
    }
    &:hover {
      color: $color-main;
    }
    &--exact-active {
      color: $color-main;
    }
  }
}
</style>
