<template>
    <div class="block" v-if="showBlock">
        click me
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false
        }
    },
    // mounted hook fires when component is mounted
    mounted() {
        // console.log('component mounted')
        setTimeout(()=> {
            this.showBlock = true
            // console.log(this.delay)
        }, this.delay)
    },
    // when data is changed, updated lifecycle happens
    // updated() {
    //     console.log('component updated')
    // },
    // when page is changed, the previous is unmounted
    // unmounted() {
    //     console.log('unmounted')
    // }
}
</script>

<style scoped>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;

    }
</style>