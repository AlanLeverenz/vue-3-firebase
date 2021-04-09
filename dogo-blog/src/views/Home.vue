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
import { ref } from 'vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    // create const variables that will get values in the lifecycle
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw Error('no data available')
        }
        posts.value = await data.json()
      }
      // gets Error from above
      catch (err) {
        // use value property to update the error
        error.value = err.message
        console.log(error.value)
      }
    }

    // call load function to fetch data
    load()

  // must return the objects for the template to render
    return { posts, error }
  }
}
</script>
