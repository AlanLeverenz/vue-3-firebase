import { ref } from 'vue'
import { projectFirestore } from '../firebase/config' // interacts with Firebase data

const getPosts = () => {
    // create const variables that will get values in the lifecycle
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const res = await projectFirestore.collection('posts').get()

            posts.value = res.docs.map(doc => {
                console.log(doc.data()) // data() is method that extracts data from the doc
                return { ...doc.data(), id: doc.id } // ... spreads values, provides id for PostList.vue
            })
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