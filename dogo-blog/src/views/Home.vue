<template>
  <div class="home">
    home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  // setup() runs before any lifecycles
  // can write javascript, set variables, etc. inside setup
  // which can be used inside the template
  // if used data() with objects, those are reactive

  setup() {
    console.log('setup')
    // not reactive values
    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log('you clicked me')
    }

    // values and functions must be returned to be usable in template

    return { name, age, handleClick }

  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
}
</script>
