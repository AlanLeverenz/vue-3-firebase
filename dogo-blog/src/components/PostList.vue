<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
// get SinglePost objects by importing
import SinglePost from './SinglePost.vue'

export default {
    // posts sent down as prop from Home
    props: ['posts'],
    // declare SinglePost as a component
    components: { SinglePost },
    // include props in setup
    setup(props) {
        onMounted(() => console.log('component mounted'))
        onUnmounted(() => console.log('component unmounted'))
        onUpdated(() => console.log('component updated'))
    },
    mounted() {
        console.log('mounted using options api')
    }
}
</script>

<style>
    
</style>