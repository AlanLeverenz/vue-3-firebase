<template>
    <form>
        <label>Title:</label>
        <!-- v-model tracks the user's input -->
        <!-- this is 2-way data binding between form and data store -->
        <input type="text" v-model="title" required>
        <label>Details:</label>
        <textarea v-model="details" required></textarea>
        <button>Edit Project</button>
    </form>
</template>

<script>
// need data models to track what user types into the form
// need to accept data objects as props. props = true in routes object.
// use props 'id' in a fetch function to get elements from json-server db.
export default {
    props: ['id'],
    data() {
        return {
            title: '',
            details: '',
            // uri is for fetch request
            uri: 'http://localhost:3000/projects/' + this.id
        }
    },
    // get data from json-server once the page loads
    mounted() {
        // this.uri is references within its own view
        fetch(this.uri)
        // json-server sends response in json format
        .then(res => res.json())
        .then(data => {
            this.title = data.title
            this.details = data.details
        })
    }
}
</script>

<style>

</style>