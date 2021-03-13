import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDeZCJcGNT0EpwealoCCeWGlS1hGcr1z6A",
    authDomain: "bt3103-week-6-cc9f8.firebaseapp.com",
    projectId: "bt3103-week-6-cc9f8",
    storageBucket: "bt3103-week-6-cc9f8.appspot.com",
    messagingSenderId: "486715915534",
    appId: "1:486715915534:web:508ed1249fb3dd0a09ab5f",
    measurementId: "G-9BTNDK9D1M"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;