<template>
    <div>
        <h1>{{ job.title }}</h1>
        <p>The job id is {{ id }}</p>
        <p>{{ job.details }}</p>
    </div>
</template>

<script>
export default {
    // props flow down from App to this component, defined in index.js
    // if passed as a prop, then no need for data() store to return it
    props: ['id'],
    data() {
        return {
            job: null
        }
    },
    // this.id references the props id for 'this' component
    // this.job references the job object in the data() store
    mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
            .then((res) => res.json())
            .then((data) => this.job = data)
            .catch(err => console.log(err.message))
    }
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