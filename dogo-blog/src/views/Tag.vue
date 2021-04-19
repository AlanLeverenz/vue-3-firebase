<template>
    <div class="tag">
        <div v-if="error">{{ error }}</div>
        <!-- bind posts data to setup const (reactive) -->
        <div v-if="posts.length" class="layout">
            <!-- binding posts to the filtered postsWithTag -->
            <PostList :posts="postsWithTag" />
            <TagCloud :posts="posts" />
        </div>
        <div v-else><Spinner /></div>
    </div>
</template>

<script>
// challenge 
// - create a tag route, with the tag as a route parameter (/tags/:tag)
// - in the Tag component, make a request for all the posts
// - use a computed property to return an array of posts which have the current tag
// - use the useRoute function to access the tag route parameter
// - use the PostList component to output the required posts
// - show the spinner until the data is loaded, and error if there is one

import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core'

export default {
    components: { PostList, Spinner, TagCloud },

    setup() {
        const route = useRoute()
        // get objects from getPosts composable
        const { posts, error, load } = getPosts()

        // calls load function imported from getPosts
        load()

        const postsWithTag = computed(() => {
            return posts.value.filter((post) => post.tags.includes(route.params.tag))
        })

  // must return the objects for the template to render
    return { posts, error, postsWithTag }
  }
}
</script>

<style>

</style>