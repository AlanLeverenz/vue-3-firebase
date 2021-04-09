<template>
    <div class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ snippet }}</p>
        <span v-for="tag in post.tags" :key="tag">
            #{{ tag }}
        </span>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    // accept props from PostList to use in template
    props: ['post'],
    // 'props' parameter is "accepted" by the setup function
    setup(props) {
        // computed function is used in the const assignment
        // and must be returned to be available to the template
        const snippet = computed(() => {
            return props.post.body.substring(0,98) + '....'
        })

        return { snippet }
    }
}
</script>

<style>

</style>