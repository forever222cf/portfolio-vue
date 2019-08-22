<template>
  <div class="p-banner">
    <div class="p-banner__info">
      <div class="p-banner__info-name">JOHN DOE</div>
      <div class="p-banner__info-title">Sale Manager</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'p-banner'
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.p-banner {
  position: relative;
  height: 100vh;
  background-color: $color-bg;
  background-size: cover;
  background-position: center;
  background-image: url('./../../assets/images/placeholder-02.jpg');
  &:before {
    position: absolute;
    z-index: 1;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: adjust-color($color-black, $alpha: -0.2);
  }
  &__info {
    position: relative;
    z-index: 2;
    color: $color-white;
    &-name {
      font-size: 1vh;
      font-weight: 700;
    }
  }
}
</style>
