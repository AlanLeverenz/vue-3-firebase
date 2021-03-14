<template>
  <div>
    <h1>Ninja Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endgame" />
    <p v-if="showResults">Reaction time: {{ score }} ms</p>
  </div>
</template>

<script>
// 'disabled' property is enabled by a boolean value for a data store element (isPlaying) 
// the delay property is bound with the Block component and is passed down as a prop

import Block from './components/Block.vue'

export default {
  name: 'App',
  components: { Block },
  // data() is a function that adds to the store
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  // methods are objects that contain functions
  methods: { 
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
    },
    endgame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false,
      this.showResults = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>