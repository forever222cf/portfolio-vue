<template>
  <div class="p-info">
    <div class="p-info__title">{{ title }}</div>
    <div class="p-info__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'p-info',
  props: {
    title: String
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
