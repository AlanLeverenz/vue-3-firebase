<template>
  <div class="home">
    <div v-if="projects.length">
      <!-- binding key data -->
      <!-- the object to render must be inside the div v-for element -->
      <!-- the div defines the scope of the project items -->
      <div v-for="project in projects" :key="project.id">
        <!-- cycling through each project by binding to each one -->
        <!-- @delete is the $emit name, handleDelete is local function -->
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
    <div v-else>Houston, we've got a problem</div>
  </div>
</template>

<script>
// @ is an alias to /src
import SingleProject from '../components/SingleProject.vue'

export default {
  name: 'Home',
  components: {
    SingleProject
  },
  // data is returning project objects from db.json
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    // mounted() is a "hook" lifecycle
    // these are asynchronous requests with promises returned (.then.catch)
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => this.projects = data)
    .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id) {
      // filters out the deleted project and redefines local projects
      this.projects = this.projects.filter((project) => {
        // return based on boolean statement
        return project.id !== id
      })
    },
    handleComplete(id) {
      // finds and updates complete object in project that was emitted
      let p = this.projects.find(project => {
        return project.id === id // boolean statement true or false to store project in 'p'
      })
      p.complete = !p.complete
    }
  }
}
</script>
