<template>
  <Info title="Introduction">
    <div class="p-intro">
      <p v-for="item in introductions" :key="item.id">{{ item.text }}</p>
    </div>
  </Info>
</template>

<script>
// Use in:
//  - @/views/About.vue

import { introductions } from '@/data.json'

export default {
  name: 'p-intro',
  components: {
    Info: () => import('@/components/Info/Info.vue')
  },
  data () {
    return {
      introductions
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
