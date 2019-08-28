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
.p-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  width: 85%;
  max-width: 1400px;
  &:not(:last-child) {
    padding-bottom: 4rem;
  }
  &__title {
    font-size: 1.75rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  &__content {

  }
}
</style>
