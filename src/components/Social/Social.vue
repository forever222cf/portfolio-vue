<template>
  <div class="p-social">
    <div class="p-social__list">
      <a class="p-social__item" v-for="item in socialList" :key="item.id" :href="item.href" target="_blank">
        <Icon :name="item.iconName" />
      </a>
    </div>
  </div>
</template>

<script>
// Use in:
//  - @/components/Headbar/Headbar.vue

export default {
  name: 'p-social',
  components: {
    Icon: () => import('@/components/Icon/Icon.vue')
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
  }
}
</script>

<style lang="scss" scoped>
.p-social {
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
