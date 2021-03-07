<template>
  <div>
    <h1>{{ title }}</h1>
        <Modal header="Sign up for the giveaway" text="Grab your ninja swag for half price!"/>
    <!-- <input type="text" ref="name">
    <button @click="handleClick">click me</button> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Modal
  //   HelloWorld
  },
  data() {
    return {
      title: 'My First Vue App :)'
    }
  },
  // $refs references an element by ref
  // classList is JS term that adds a class to an element <input>
  // focus selects the element
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
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
  color: #2c3e50;
  margin-top: 60px;
}
h1 { 
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
