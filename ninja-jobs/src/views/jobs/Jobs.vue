<template>
    <div>
        <h1>Jobs</h1>
        <div v-for="job in jobs" :key="job.id" class="job">
            <!-- bind to the 'name' object from index.js -->
            <!-- params links id to the job.id -->
            <router-link :to="{ name: 'JobDetails', params: { id: job.id} }">
                <!-- resolve the job.title value -->
                <h2>{{ job.title }}</h2>
            </router-link>
        </div>
    </div>
</template>

<script>
// exports jobs store for template to use
export default {
    data() {
        return {
            jobs: [
                { title: 'Ninja UX Designer', id: 1, details: 'lorem'},
                { title: 'Ninja Web Designer', id: 2, details: 'lorem'},
                { title: 'Ninja Vue Designer', id: 3, details: 'lorem'},

            ]
        }
    }
}
</script>

<style scoped>
    .job h2 {
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .job h2:hover {
        background: #ddd;
    }
    .job a {
        text-decoration: none;
    }

</style>