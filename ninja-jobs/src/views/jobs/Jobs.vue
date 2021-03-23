<template>
    <div>
        <h1>Jobs</h1>
        <!-- conditional output of the template waiting for data -->
        <div v-if="jobs.length">
            <div v-for="job in jobs" :key="job.id" class="job">
                <!-- bind to the 'name' object from index.js -->
                <!-- params links id to the job.id -->
                <router-link :to="{ name: 'JobDetails', params: { id: job.id} }">
                    <!-- resolve the job.title value -->
                    <h2>{{ job.title }}</h2>
                </router-link>
            </div>
        </div>
        <div v-else>
            <p>Loading jobs...</p>
        </div>
    </div>
</template>

<script>
// exports jobs store for template to use
export default {
    data() {
        // jobs object is filled with fetch data
        return {
            jobs: []
        }
    },
    // when component mounts fetch happens
    mounted() {
        fetch('http://localhost:3000/jobs')
                .then((res) => res.json())
                .then((data) => this.jobs = data)
                .catch(err => console.log(err.message))
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