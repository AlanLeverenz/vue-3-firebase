<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome</p>
      <teleport to="#modals" v-if="showModal">
          <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
            <template v-slot:links>
              <a href="#">Sign up now</a>
              <a href="#">More info</a>
            </template>
          </Modal>
      </teleport>
      <teleport to="#modals" v-if="showModalTwo">
        <Modal theme="sale" @close="toggleModalTwo">
        <template v-slot:links2>
          <a href="#">Sign up later</a>
          <a href="#">No more info</a>
        </template>
        <!-- these hard-coded elements go to default slot -->
        <h1>Tess Giveaway!</h1>
        <p>Grab your Tess swag at half price!</p>
        </Modal>
      </teleport>
      <button @click.alt="toggleModal">open modal (alt)</button>
      <button @click="toggleModalTwo">open modal 2</button>
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
#app, #modals {
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
