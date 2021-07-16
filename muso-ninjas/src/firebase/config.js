import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyADCm-M0S73Uwtr7aooYSVV3D2JuQkuBy4",
  authDomain: "muso-ninjas-8927a.firebaseapp.com",
  projectId: "muso-ninjas-8927a",
  storageBucket: "muso-ninjas-8927a.appspot.com",
  messagingSenderId: "761933362356",
  appId: "1:761933362356:web:f320046f14cabaaead13e1"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }