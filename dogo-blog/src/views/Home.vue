<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts"/>
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic nesciunt dolorum quis iure molestiae reiciendis accusantium corporis aliquam doloribus odit sed cum asperiores, laborum est aspernatur magnam earum quia. Doloremque.', id: 1 },
      { title: 'top 5 css tips', body: 'lorem ipsum', id: 2 }
    ])
    const showPosts = ref(true)

  // return the object name for the template to render
    return { posts, showPosts }
  }
}
</script>
