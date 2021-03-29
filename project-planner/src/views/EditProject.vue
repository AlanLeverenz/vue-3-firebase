<template>
    <form @submit.prevent="handleSubmit">
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
// challenge
//  - add a submit handler to update the project
//  - make a fetch (PATCH) request to the uri to update the project
// - redirect to the homepage when done


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
        methods: {
        handleSubmit() {
            // sends v-form field data to json-server
            fetch(this.uri, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify( { title: this.title, details: this.details })
            // }).then(() => {
            //     // updates Home page
            //     this.$emit('update', this.project.id)
            }).then(() => {
                // resets to the Home page
               this.$router.push('/') 
               // callback function is console.log
            }).catch((err) => console.log(err))
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