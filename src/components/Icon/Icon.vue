<template>
  <span class="p-icon">
    <component :is="name"></component>
  </span>
</template>

<script>
// Use in:
//  - @/components/Social/Social.vue

const lazyLoad = iconName => () => import(`./Icons/${iconName}.vue`)

export default {
  name: 'p-icon',
  props: {
    name: {
      type: String,
      require: true
    }
  },
  components: {
    LinkedIn: lazyLoad('LinkedIn'),
    Github: lazyLoad('Github')
  }
}
</script>

<style lang="scss" scoped>
.p-icon {
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
