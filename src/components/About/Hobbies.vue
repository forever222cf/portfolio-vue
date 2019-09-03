<template>
  <Info title="Hobbies">
    <div class="p-hobbies">
      <div v-for="item in hobbies" :key="item.id">{{ item.label }}</div>
    </div>
  </Info>
</template>

<script>
// Use in:
//  - @/views/About.vue

import { hobbies } from '@/data.json'

export default {
  name: 'p-hobbies',
  components: {
    Info: () => import('@/components/Info/Info.vue')
  },
  data () {
    return {
      hobbies
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
