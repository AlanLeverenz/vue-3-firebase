<template>
  <div class="home">
    <!-- $event 'by' value is passed to 'current' data object, emitted when the filter button is clicked (all, completed, ongoing) -->
    <!-- data binding current with the child component FilterNav -->
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <!-- binding key data -->
      <!-- the object to render must be inside the div v-for element -->
      <!-- the div defines the scope of the project items -->
      <!-- filteredProjects is a computed value -->
      <div v-for="project in filteredProjects" :key="project.id">
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

// challenge
//  - when the filter changes (current), only show those projects
//  - e.g. if we click 'completed' only show the completed projects
//  - use a computed property called filteredProjects

import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'

export default {
  // exporting Home component by name, with its components, data store, and methods.
  name: 'Home',
  components: { SingleProject, FilterNav },
  // data is returning project objects from db.json
  data() {
    return {
      projects: [],
      current: 'all'
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
  },
  computed: {
    filteredProjects(current) {
      if (this.current === 'completed') {
        // filter function tests if projects are complete
        return this.projects.filter(project => project.complete)
      }
      if (this.current === 'ongoing') {
        // filter function tests if projects are not complete
        return this.projects.filter(project => !project.complete)
      }
      // if none above found anything, then all
      return this.projects
    }
  }
}
</script>
