<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <!-- bind posts data to setup const (reactive) -->
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Home',
  // need to register component objects
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts()

    // calls load function imported from getPosts
    load()

  // must return the objects for the template to render
    return { posts, error }
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
  
</style>
