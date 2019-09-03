<template>
  <Info title="Languages">
    <div class="p-languages">
      <div v-for="item in languages" :key="item.id">{{ item.label }} | {{ item.status }}</div>
    </div>
  </Info>
</template>

<script>
// Use in:
//  - @/views/About.vue

import { languages } from '@/data.json'

export default {
  name: 'p-languages',
  components: {
    Info: () => import('@/components/Info/Info.vue')
  },
  data () {
    return {
      languages
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
