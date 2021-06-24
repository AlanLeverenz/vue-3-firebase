  import firebase from 'firebase/app'
  import firestore from 'firebase/firestore/'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD5k-ms7lhj3QN5sMpkbg0nF9n_UMQc63M",
    authDomain: "udemy-ninja-chat-26ef0.firebaseapp.com",
    projectId: "udemy-ninja-chat-26ef0",
    storageBucket: "udemy-ninja-chat-26ef0.appspot.com",
    messagingSenderId: "119164852618",
    appId: "1:119164852618:web:b6cbb6cc074b98e02ad073"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true, merge: true})

  export default firebaseApp.firestore()