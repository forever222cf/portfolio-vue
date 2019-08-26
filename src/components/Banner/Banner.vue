<template>
  <div class="p-banner">
    <div class="p-banner__info">
      <div class="p-banner__info-name">LOREM IPSUM DOLOR SIT AMET</div>
      <!-- <div class="p-banner__info-name">PHAM HOANG BAO LONG</div> -->
      <div class="p-banner__info-title">Consectetur Adipiscing Elit</div>
      <!-- <div class="p-banner__info-title">Senior Front End Developer</div> -->
    </div>
    <div class="p-banner__avatar"></div>
  </div>
</template>

<script>
// Use in:
//  - @/views/About.vue

export default {
  name: 'p-banner'
}
</script>

<style lang="scss" scoped>
.p-banner {
  display: flex;
  height: 100vh;
  color: $color-white;
  background-color: $color-bg;
  &__avatar {
    position: relative;
    flex: 1 0 50%;
    max-width: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('./../../assets/images/placeholder-03.jpeg');
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
  }
  &__info {
    padding-left: 5rem;
    padding-right: 2rem;
    flex: 1 0 50%;
    max-width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-name {
      font-size: 1.75rem;
      letter-spacing: 0.25rem;
      font-weight: 700;
      font-family: $ff-RobotoSlab;
    }
    &-title {
      font-size: 1.5rem;
      margin-top: 0.5rem;
    }
  }
}
</style>
