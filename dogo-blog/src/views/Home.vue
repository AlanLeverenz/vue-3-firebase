<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <!-- bind posts data to setup const (reactive) -->
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts()

    // calls load function imported from getPosts
    load()

  // must return the objects for the template to render
    return { posts, error }
  }
}
</script>
