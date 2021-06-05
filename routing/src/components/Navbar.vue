<template>
  <nav class="main-nav">
    <ul>
      <li><router-link :to="{name: 'Home'}">Home</router-link></li>
      <li><router-link :to="{name: 'About'}">About</router-link></li>
    </ul>
    <h2>User Profiles</h2>
      <ul>
        <li v-for="(id, index) in userIds" :key="index">
          <router-link :to="{ name: 'ViewProfile', params: { user_id: id } }">
            <span>Profile {{ id }}</span>
          </router-link>
        </li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      userIds: ['1', '2', '3', '4']
    }
  }
}
</script>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  /* style needs an anchor tag for the router link */
  a {
    color: #42b983
  }
</style>