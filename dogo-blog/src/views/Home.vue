<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from 'vue'

export default {
  name: 'Home',
  setup() {
    const ninjaOne = ref({ name: 'mario', age: 30 })
    const ninjaTwo = reactive({ name: 'luigi', age: 35})

    const nameOne = ref('mario') // this is a reactive ref
    const nameTwo = reactive('luigi') // not reactive because of a primitive value

    // ref needs the value property
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }

    // reactive doesn't need the value property
    // but it cannot update the value reactively (strange)
    const updateNinjaTwo = () => {
      ninjaTwo.age = 45
    }

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, nameTwo }
  }
}
</script>
