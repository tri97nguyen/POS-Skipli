import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAHVSz3lh_kZU2hj6EuvQ1zuHViHsSdrGQ",
    authDomain: "skipli-c72ad.firebaseapp.com",
    databaseURL: "https://skipli-c72ad.firebaseio.com",
    projectId: "skipli-c72ad",
    storageBucket: "skipli-c72ad.appspot.com",
    messagingSenderId: "474208813853",
    appId: "1:474208813853:web:77aa9ebf6153d9602257f4",
    measurementId: "G-GJ1N62VF64"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export var googleProvider = new firebase.auth.GoogleAuthProvider();
export var auth = firebase.auth();