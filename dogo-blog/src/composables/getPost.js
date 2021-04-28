import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {
    // pass in the id to make the param in the route
    // create const variables that will get values in the lifecycle
    const post = ref([null])
    const error = ref(null)

    const load = async () => {
        try {
            let res = await projectFirestore.collection('posts').doc(id).get()
            
            post.value = { ...res.data(), id: res.id }
            console.log(post.value)
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