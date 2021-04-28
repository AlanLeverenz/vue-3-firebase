import * as keys from '../../keys'
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: keys.firebaseApiKey,
    authDomain: keys.firebaseAuthDomain,
    databaseURL: keys.firebaseDatabaseURL,
    projectId: keys.firebaseProjectId,
    storageBucket: keys.storageBucket,
    messagingSenderId: keys.firebaseMessagingSenderId,
    appId: keys.firebaseAppId,
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore }

// const apiKey = keys.firebaseApiKey,
// const authDomain = keys.firebaseAuthDomain,
// const databaseURL = keys.firebaseDatabaseURL,
// const projectId = keys.firebaseProjectId,
// const storageBucket = keys.storageBucket,
// const messagingSenderId = keys.firebaseMessagingSenderId,
// const appId = keys.firebaseAppId,

// export { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId }

