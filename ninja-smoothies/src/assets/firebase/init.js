// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBXcylUCJ2ByyYmzrEEUf5ooqA8vnEwwNo",
  authDomain: "udemy-ninja-smoothies-f8ded.firebaseapp.com",
  projectId: "udemy-ninja-smoothies-f8ded",
  storageBucket: "udemy-ninja-smoothies-f8ded.appspot.com",
  messagingSenderId: "1044606797869",
  appId: "1:1044606797869:web:b0dbbd01059536bea7d0a4",
  measurementId: "G-V1R6VR2DNZ"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({timestampsInSnapshots: true })


// export firestore database
export default firebaseApp.firestore()

firebase.analytics();