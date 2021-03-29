<template>
  <div>
    <div id="nav">
      <!-- router-link intercepts requests to network -->
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> | 
      <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
      <!-- data bind the path to the index.js route's object name -->
    </div>

<!-- @click activates methods -->
    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>

    <!-- router components are injected below in router-view -->
    <router-view/>
  </div>
</template>

<script>
// use export default when a component object is inside a vue file.
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' })
    },
    // go method steps through router history
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
/* built-in class for vue router-links */
#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
