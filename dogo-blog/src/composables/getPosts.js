import { ref } from 'vue'

const getPosts = () => {
    // create const variables that will get values in the lifecycle
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            // // simulate delay
            // await new Promise(resolve => {
            //     setTimeout(resolve, 1000)
            // })

            let data = await fetch('http://localhost:3000/posts')
            if (!data.ok) {
                throw Error('no data available')
            }
            posts.value = await data.json()
        }
        // gets Error from above
        catch (err) {
        // use value property to update the error
        error.value = err.message
        console.log(error.value)
        }
    }

    return { posts, error, load}
}

export default getPosts