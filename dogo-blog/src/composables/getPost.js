import { ref } from 'vue'

const getPost = (id) => {
    // pass in the id to make it the param for the route
    // create const variables that will get values in the lifecycle
    const post = ref([null])
    const error = ref(null)

    const load = async () => {
        try {
        let data = await fetch('http://localhost:3000/posts/' + id)
        if (!data.ok) {
            throw Error('that post does not exist')
        }
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