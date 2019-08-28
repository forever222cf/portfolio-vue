import Vue from 'vue'

Vue.directive('scroll', {
  inserted: (el, binding) => {
    let f = event => {
      if (binding.value(event, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
