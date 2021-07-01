import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA3-kAfAviNzVfRCe1-x6zsuFLtLsTtBq4",
  authDomain: "udemy-geo-ninjas-eec04.firebaseapp.com",
  projectId: "udemy-geo-ninjas-eec04",
  storageBucket: "udemy-geo-ninjas-eec04.appspot.com",
  messagingSenderId: "797170358871",
  appId: "1:797170358871:web:67339c580f7bd86659a112"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true, merge: true })

export default firebaseApp.firestore()
