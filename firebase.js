import * as firebase from 'firebase';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCVOJp9C9gzqwqjS4CeVKCZJrwtQSEjIwg",
    authDomain: "coen4440reactlecture8a2.firebaseapp.com",
    databaseURL: "https://coen4440reactlecture8a2.firebaseio.com",
    projectId: "coen4440reactlecture8a2",
    storageBucket: "coen4440reactlecture8a2.appspot.com",
    messagingSenderId: "574642150716",
    appId: "1:574642150716:web:d8107e8ddc70f4c03c5239",
    measurementId: "G-C8KVQBTC5X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  export default firestore;