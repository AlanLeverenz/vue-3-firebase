<template>
    <div>
        <h1>Job Details Page</h1>
        <!-- $route has info about the 'current' route -->
        <p>The job id is {{ id }}</p> 
    </div>
</template>

<script>
export default {
    // id is returned to the store and exported for the template
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>

<style scoped>

</style>