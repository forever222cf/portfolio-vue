<template>
  <div class="p-about">
    <Banner />
    <Info title="Introduction"></Info>
    <Info title="Skills"></Info>
    <Info title="Languages"></Info>
    <Info title="Hobbies"></Info>
    <Info title="Personalities"></Info>
  </div>
</template>

<script>
export default {
  name: 'p-about',
  components: {
    Banner: () => import('@/components/Banner/Banner.vue'),
    Info: () => import('@/components/Info/Info.vue')
  }
}
</script>
