<template>
    <div>
        <h1>Job Details Page</h1>
        <p>The job id is {{ id }}</p> 
    </div>
</template>

<script>
export default {
    // props flow down from App to this component, defined in index.js
    // if passed as a prop, then no need for data() store to return it
    props: ['id'],
    // id is returned to the store and exported for the template
    // $route has info about the 'current' route
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<style scoped>

</style>