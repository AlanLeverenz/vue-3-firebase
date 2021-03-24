<template>
  <div class="home">
    <div v-if="projects.length">
      <!-- binding key data -->
      <div v-for="project in projects" :key="project.id"></div>
      <p>{{ project.title }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  // data is returning project objects from db.json
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    // mounted() is a "hook" lifecycle
    // these are asynchronous requests with promises returned (.then)
    fetch('http://locahost:3000/projects')
    .then(res => res.json())
    .then(data => this.projects = data)
    .catch(err => console.log(err.message))
  }
}
</script>
