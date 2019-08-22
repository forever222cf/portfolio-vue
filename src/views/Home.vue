<template>
  <div class="home">
    <Banner />
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    Banner: () => import('@/components/Banner/Banner.vue')
  }
}
</script>
