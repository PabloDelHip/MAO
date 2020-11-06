import firebase from 'firebase/app';

require("firebase/auth");
require("firebase/firestorage");
require("firebase/storage");
require("firebase/functions");

var firebaseConfig = {
    apiKey: "AIzaSyDUrCgegjYsA7J_dfqzl6hyabTmkkh7u-g",
    authDomain: "mao-b3369.firebaseapp.com",
    databaseURL: "https://mao-b3369.firebaseio.com",
    projectId: "mao-b3369",
    storageBucket: "mao-b3369.appspot.com",
    messagingSenderId: "147919879869",
    appId: "1:147919879869:web:1b38eb9f07a050743541d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();

export {
    firebase,
    auth,
    db,
    storage,
    functions
}