<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome</p>
      <div v-if="showModal">
          <Modal theme="sale" @close="toggleModal">
            <template v-slot:links>
              <a href="#">Sign up now</a>
              <a href="#">More info</a>
            </template>
            <!-- <template v-slot:links2>
              <a href="#">Sign up later</a>
              <a href="#">No more info</a>
            </template> -->
            <!-- This is default content for Modal -->
            <h1>Ninja Giveaway!</h1>
            <p>Grab your ninja swag for half price!</p>
          </Modal>
        <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/> -->
    <!-- <input type="text" ref="name">
    <button @click="handleClick">click me</button> -->
      </div>
      <div v-if="showModalTwo">
        <Modal theme="sale" @close="toggleModalTwo">
        <template v-slot:links2>
          <a href="#">Sign up later</a>
          <a href="#">No more info</a>
        </template>
        <!-- This is default content for Modal -->
        <h1>Tess Giveaway!</h1>
        <p>Grab your Tess swag at half price!</p>
        </Modal>
      </div>
      <button @click.alt="toggleModal">open modal (alt)</button>
      <button @click.alt="toggleModalTwo">open modal 2 (alt)</button>
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
    // data properties are defined and returned and bound the <Modal tag above as props
    return {
      title: 'My First Vue App :)',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your ninja swag for half price!',
      showModal: false,
      showModalTwo: false
    }
  },
  // $refs references an element by ref
  // classList is JS term that adds a class to an element <input>
  // focus selects the element
  methods: {
    // handleClick() {
    //   console.log(this.$refs.name)
    //   this.$refs.name.classList.add('active')
    //   this.$refs.name.focus()
    // }
    toggleModal() {
      this.showModal = !this.showModal
      console.log(`1 = ${this.showModal}`)
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
      console.log(`2 = ${this.showModalTwo}`)
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
