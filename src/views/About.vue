<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
export default {
  name: 'about',
  components: {
    HelloWorld: () => import('@/components/HelloWorld/HelloWorld.vue')
  }
}
</script>
