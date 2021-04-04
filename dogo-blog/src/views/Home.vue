<template>
  <div class="home">
    home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Add 1 to age</button>
    <!-- don't need .value when addressing a ref in the template -->
    <input type="text" v-model="name">
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'

export default {
  name: 'Home',
  // setup() runs before any lifecycles
  // can write javascript, set variables, etc. inside setup
  // which can be used inside the template
  // if used data() with objects, those are reactive
  // 'this' is not available in setup
  setup() {
    // console.log(this)

    // p is defined as a ref const, can assigned to template element
    // note: the value for p cannot be used until it is returned
    // const p = ref(null)
    // console.log(p, p.value)

    // not reactive values
    // whereas data() values are reactive and can be changed
    // let name = 'mario'
    // let age = 30

    // when ref surrounds a value it becomes reactive
    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'luigi'
      age.value = '35'
      // console.log(p, p.value)
      // // can assign a class to the ref object's class list
      // p.value.classList.add('test')
      // // this will replace the text of the p element
      // p.value.textContent = 'hello, ninjas'
    }

    // values and functions must be returned to be usable in template
    return { name, age, handleClick }

  },
  // created() {
  //   console.log('created')
  // },
  // mounted() {
  //   console.log('mounted')
  // },
}
</script>
