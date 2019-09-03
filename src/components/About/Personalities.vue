<template>
  <Info title="Personalities">
    <div class="p-personalities">
      <div v-for="item in personalities" :key="item.id">{{ item.label }}</div>
    </div>
  </Info>
</template>

<script>
// Use in:
//  - @/views/About.vue

import { personalities } from '@/data.json'

export default {
  name: 'p-personalities',
  components: {
    Info: () => import('@/components/Info/Info.vue')
  },
  data () {
    return {
      personalities
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
