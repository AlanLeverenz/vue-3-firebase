<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
// get SinglePost objects by importing
import SinglePost from './SinglePost.vue'

export default {
    // post sent down as prop from Home
    props: ['posts'],
    // declare SinglePost as a component
    components: { SinglePost },

    setup(props) {
        console.log(props)
    }
}
</script>

<style>
    
</style>