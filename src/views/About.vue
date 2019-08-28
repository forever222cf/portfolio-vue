<template>
  <div class="p-about">
    <Banner />
    <div class="p-about__content">
      <Info title="Introduction">
        <p v-for="item in introductions" :key="item.id">{{ item.text }}</p>
      </Info>
      <Info title="Skills">
        <div class="p-skills">
          <div class="p-skills__group" v-for="group in skills" :key="group.id">
            <strong>{{ group.label }}</strong>
            <div v-for="item in group.list" :key="item.id">{{ item.label }}</div>
          </div>
        </div>
      </Info>
      <Info title="Languages">
        <div v-for="item in languages" :key="item.id">{{ item.label }} | {{ item.status }}</div>
      </Info>
      <Info title="Hobbies">
        <div v-for="item in hobbies" :key="item.id">{{ item.label }}</div>
      </Info>
      <Info title="Personalities">
        <div v-for="item in personalities" :key="item.id">{{ item.label }}</div>
      </Info>
    </div>
  </div>
</template>

<script>
import { introductions, skills, languages, hobbies, personalities } from '@/data.json'

export default {
  name: 'p-about',
  components: {
    Banner: () => import('@/components/Banner/Banner.vue'),
    Info: () => import('@/components/Info/Info.vue')
  },
  data () {
    return {
      introductions,
      skills,
      languages,
      hobbies,
      personalities
    }
  }
}
</script>

<style lang="scss" scoped>
.p-about {
  &__content {
    padding-top: 5rem;
  }
}

.p-skills {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
}
</style>
