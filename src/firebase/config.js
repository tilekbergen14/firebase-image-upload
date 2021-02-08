import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
//create your own firebase app configs
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseStorage = firebase.storage()
const firebaseDb = firebase.firestore()

export {firebaseDb, firebaseStorage}