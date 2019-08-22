<template>
  <div class="p-projects">
    <InitialLoader />
  </div>
</template>

<script>
export default {
  name: 'p-projects',
  components: {
    InitialLoader: () => import('@/components/InitialLoader/InitialLoader.vue')
  }
}
</script>

<style lang="scss" scoped>
</style>
