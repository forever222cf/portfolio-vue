<template>
  <div class="p-logo">
    <div class="p-logo__text">P</div>
    <div class="p-logo__text">H</div>
    <div class="p-logo__text">B</div>
    <div class="p-logo__text">L</div>
  </div>
</template>

<script>
export default {
  name: 'p-logo'
}
</script>

<style lang="scss" scoped>
.p-logo {
  font-size: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  &__text {
    flex: 1 0 50%;
    max-width: 50%;
  }
}
</style>
