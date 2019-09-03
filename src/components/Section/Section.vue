<template>
  <section :class="sectionClass">
    <slot></slot>
  </section>
</template>

<script>
// Use in:
//  - @/views/About.vue

export default {
  name: 'p-section',
  // props: {
  //   isFullPage: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  computed: {
    sectionClass () {
      return {
        'p-section': true,
        'p-section--fullpage': this.isSectionFullPage
      }
    },
    isSectionFullPage () {
      return this.$route.meta.isSectionFullPage
    }
  }
}
</script>

<style lang="scss" scoped>
.p-section {
  &--fullpage {
    height: 100vh;
  }
}
</style>
