<template>
  <div class="p-about">
    <Banner />
    <Info title="Introduction">
      <p>Sed lacinia felis metus, ut efficitur lacus eleifend vitae. Aenean pharetra ultricies nulla, id placerat ex bibendum eget. Nullam scelerisque, sapien id commodo cursus, dui nisl eleifend arcu, vel consectetur ligula arcu quis ante. Mauris id ultricies lectus. Sed eget laoreet tellus. Ut sit amet felis a augue iaculis posuere. Quisque fermentum, dolor in vehicula semper, nisl ante varius augue, ac cursus ante velit nec nisi. Donec condimentum, nibh vel hendrerit interdum, lectus mauris porta eros, eu accumsan nibh felis in dui. Praesent nec leo porttitor, venenatis massa eget, consectetur augue.</p>
    </Info>
    <Info title="Skills">
      <div v-for="item in skills" :key="item.id">{{ item.label }}</div>
    </Info>
    <Info title="Languages"></Info>
    <Info title="Hobbies"></Info>
    <Info title="Personalities"></Info>
  </div>
</template>

<script>
import { skills } from '@/data.json'
export default {
  name: 'p-about',
  components: {
    Banner: () => import('@/components/Banner/Banner.vue'),
    Info: () => import('@/components/Info/Info.vue')
  },
  data () {
    return {
      skills
    }
  }
}
</script>
