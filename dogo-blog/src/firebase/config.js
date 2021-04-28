// import { apiKey } from '../../keys.js'
// import { authDomain } from '../../keys.js'
// import { projectId } from '../../keys.js'
// import { storageBucket } from '../../keys.js'
// import { messagingSenderId } from '../../keys.js'
// import { appId } from '../../keys.js'
import firebase from 'firebase/app'
import 'firebase/firestore'

// console.log(`HELLO: ${apiKey}`)

const firebaseConfig = {
    apiKey: "AIzaSyAfqbiHJKcMEd9ryWNmJizm3I_tLObs_iM",
    authDomain: "vue-firebase-sites-bf315.firebaseapp.com",
    projectId: "vue-firebase-sites-bf315",
    storageBucket: "vue-firebase-sites-bf315.appspot.com",
    messagingSenderId: "248777487074",
    appId: "1:248777487074:web:018e42d522cb7c68fb24bb"
}

// const firebaseConfig = {
//     apiKey: apiKey,
//     authDomain: authDomain,
//     databaseURL: databaseURL,
//     projectId: projectId,
//     storageBucket: storageBucket,
//     messagingSenderId: messagingSenderId,
//     appId: appId,
//   };

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

