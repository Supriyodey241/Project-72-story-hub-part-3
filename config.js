import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCw2q1LfySlxlnIIittrT_yBfgUbCsyswg",
  authDomain: "story-hub-7366b.firebaseapp.com",
  databaseURL: "https://story-hub-7366b-default-rtdb.firebaseio.com",
  projectId: "story-hub-7366b",
  storageBucket: "story-hub-7366b.appspot.com",
  messagingSenderId: "349288311234",
  appId: "1:349288311234:web:98b6923f6844dd07a6ce5b"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   