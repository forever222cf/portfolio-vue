<template>
  <div class="p-logo">
    <div class="p-logo__text">L</div>
  </div>
</template>

<script>
// Use in:
//  - @/components/Headbar/Headbar.vue

export default {
  name: 'p-logo'
}
</script>

<style lang="scss" scoped>
.p-logo {
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  line-height: 1;
  font-weight: 700;
  color: $color-white;
  border: 2px solid $color-white;
  font-family: $ff-RobotoSlab;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
