<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <AllFriends />
    <OnlineFriends />
  </div>
</template>

<script>
import Navbar from './Navbar';
import AllFriends from './AllFriends';
import OnlineFriends from './OnlineFriends';

export default {
  name: 'app',
  components: {
    Navbar,
    OnlineFriends,
    AllFriends,
  },
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
