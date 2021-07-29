import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {

  const documents = ref(null)
  const error = ref(null)

  // register the firestore collection reference
  let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

  const unsub = collectionRef.onSnapshot(snap => {
    let results = []
    snap.docs.forEach(doc => {
      // must wait for the server to create the timestamp & send it back
      console.log(doc.data())
      doc.data().createdAt && results.push({...doc.data(), id: doc.id})
    });
    // update values
    documents.value = results
    // test to see what's up
    console.log(results)
    error.value = null
  }, err => {
    console.log(err.message)
    documents.value = null
    error.value = 'could not fetch the data'
    console.log(error.value)
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, documents }
}

export default getCollection