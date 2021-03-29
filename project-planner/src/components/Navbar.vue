<template>
    <nav class="main-nav">
        <router-link :to="{ name: 'Home' }">Projects</router-link>
        <router-link :to="{ name: 'AddProject' }">Add a new Project</router-link>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>
    .main-nav {
        text-align: center;
        margin: 40px auto;
    }
    /* anchor tag applied when a router-link has been loaded */
    .main-nav a {
        display: inline-block;
        text-decoration: none;
        margin: 0 10px;
        color: #999;
        font-size: 18px;
    }
    /* the active class is automatic when a link is selected */
    a.router-link-active {
        border-bottom: 2px solid #00ce89;
        padding-bottom: 4px;
    }
</style>