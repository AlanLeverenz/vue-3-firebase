<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        click me
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    // mounted hook fires when component is mounted
    mounted() {
        // console.log('component mounted')
        setTimeout(()=> {
            this.showBlock = true
            // call method function to start timer
            this.startTimer()
            // console.log(this.delay)
        }, this.delay)
    },
    methods: {
        startTimer() {
            // timer updates reactionTime every 10 ms
            this.timer = setInterval(()=> {
                this.reactionTime += 10
            }, 10)
            },
        stopTimer() {
            // clearing the interval value stops the timer
            clearInterval(this.timer)
            console.log(this.reactionTime)
            this.$emit('end', this.reactionTime)
        }
    }
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