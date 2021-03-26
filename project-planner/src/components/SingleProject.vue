<template>
    <div class="project">
        <div class="actions">
            <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
        </div>
        <div v-if="showDetails" class="details">
            <p>{{ project.details }}</p>
        </div>
    </div>
</template>

<script>
export default {
    // project needs to be passed as a prop to be rendered here 
    props: ['project'],
    // data is used in this component to set default for details
    data() {
        return {
            showDetails: false
        }
    }
}
</script>

<style>
    .project {
        margin: 20px auto;
        background: white;
        padding: 10px 20px;
        border-radius: 4px;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
        border-left: 4px solid #e90074;
    }
    h3 {
        cursor: pointer;
    }
</style>