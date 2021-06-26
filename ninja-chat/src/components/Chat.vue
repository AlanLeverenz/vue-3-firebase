<template>
  <div class="chat container">
    <!-- 'this' is the prop in this component -->
    <h2>Chat {{ this.name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: ['name'],
  data() {
    return {

    }
  }
}
</script>

<style>

</style>