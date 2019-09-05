<template>
  <Info title="Skills">
    <div class="p-skills">
      <div class="p-skills__group" v-for="group in skills" :key="group.id">
        <strong>{{ group.label }}</strong>
        <div v-for="item in group.list" :key="item.id">{{ item.label }}</div>
      </div>
    </div>
  </Info>
</template>

<script>
// Use in:
//  - @/views/About.vue

import { skills } from '@/data.json'

export default {
  name: 'p-skills',
  components: {
    Info: () => import('@/components/Info/Info.vue')
  },
  data () {
    return {
      skills
    }
  }
}
</script>

<style lang="scss" scoped>
.p-skills {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
}
</style>
