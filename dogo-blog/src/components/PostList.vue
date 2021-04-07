<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    // post sent down as prop from Home
    props: ['posts'],
    setup(props) {
        console.log(props)
    }
}
</script>

<style>
    
</style>