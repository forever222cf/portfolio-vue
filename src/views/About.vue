<template>
  <div class="p-about" @wheel="handleWheel">
    <transition name="slide" mode="out-in">
      <Section v-show="selectedSection === 'banner'">
        <Banner />
      </Section>
    </transition>
    <transition name="slide" mode="out-in">
      <Section v-show="selectedSection === 'intro'">
        <Info title="Introduction">
          <p v-for="item in introductions" :key="item.id">{{ item.text }}</p>
        </Info>
      </Section>
    </transition>
    <!-- <Section>
      <Info title="Skills">
        <div class="p-skills">
          <div class="p-skills__group" v-for="group in skills" :key="group.id">
            <strong>{{ group.label }}</strong>
            <div v-for="item in group.list" :key="item.id">{{ item.label }}</div>
          </div>
        </div>
      </Info>
    </Section>
    <Section>
      <Info title="Languages">
        <div v-for="item in languages" :key="item.id">{{ item.label }} | {{ item.status }}</div>
      </Info>
    </Section>
    <Section>
      <Info title="Hobbies">
        <div v-for="item in hobbies" :key="item.id">{{ item.label }}</div>
      </Info>
    </Section>
    <Section>
      <Info title="Personalities">
        <div v-for="item in personalities" :key="item.id">{{ item.label }}</div>
      </Info>
    </Section> -->
  </div>
</template>

<script>
import { introductions, skills, languages, hobbies, personalities } from '@/data.json'

export default {
  name: 'p-about',
  components: {
    Section: () => import('@/components/Section/Section.vue'),
    Banner: () => import('@/components/Banner/Banner.vue'),
    Info: () => import('@/components/Info/Info.vue')
  },
  data () {
    return {
      introductions,
      skills,
      languages,
      hobbies,
      personalities,
      selectedSection: 'banner',
      scrollY: 0
    }
  },
  methods: {
    handleWheel (event) {
      // Scroll down
      if (event.wheelDelta < 0) {
        this.selectedSection = 'intro'
      } else {
        this.selectedSection = 'banner'
      }
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.p-about {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.p-skills {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr;
}
</style>
