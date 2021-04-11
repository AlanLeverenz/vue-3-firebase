import { ref } from 'vue'

const getPost = (id) => {
    // pass in the id to make the param in the route
    // create const variables that will get values in the lifecycle
    const post = ref([null])
    const error = ref(null)

    const load = async () => {
        try {
            // simulate delay
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })

            let data = await fetch('http://localhost:3000/posts/' + id)
            if (!data.ok) {
                throw Error('that post does not exist')
            }
            // post is a ref so assign data to its value
            post.value = await data.json()
        }
        // gets Error from above
        catch (err) {
        // use value property to update the error
        error.value = err.message
        console.log(error.value)
        }
    }

    return { post, error, load }
}

export default getPost