<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{ name }}</p>
  </div>
</template>

<script>

import { ref, computed } from 'vue'

export default {
  name: 'Home',
  setup() {
    const name = computed(() => {
      return 'shaun'
    })
  // return the name object for the template to render
    return { name }
  }
}
</script>
