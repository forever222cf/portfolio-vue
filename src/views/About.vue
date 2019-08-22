<template>
  <div class="p-about">
    <Banner />
  </div>
</template>

<script>
export default {
  name: 'p-about',
  components: {
    Banner: () => import('@/components/Banner/Banner.vue')
  }
}
</script>
