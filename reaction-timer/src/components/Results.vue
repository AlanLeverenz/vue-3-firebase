<template>
    <div>
        <p>Reaction time: {{ score }} ms</p>
    </div>
</template>

<script>

export default {
    props: ['score'],
    // data() {
    //     return this.score;
    // }
}
</script>