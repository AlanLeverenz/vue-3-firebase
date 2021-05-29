<template>
  <div id="app">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'My first Vue app, woo :)'
    }
  }
}
</script>

<style>
  h1 {
    color: #444;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: normal;
    text-align: center;
  }

</style>
