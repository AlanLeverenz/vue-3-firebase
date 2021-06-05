<template>
  <div class="view-profile">
    <h2>Profile for {{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ViewProfile',
  data() {
    return {
      userId: this.$route.params.user_id
    }
  },
  methods: {
    updateId(){
      this.userId = this.$route.params.user_id
    }
  },
  // watch has Vue monitor changes, which causes an update
  watch: {
    $route: 'updateId'
  }
}
</script>

<style>

</style>