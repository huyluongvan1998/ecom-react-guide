import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyB6V9bh6-oisy3z35NToPKQPt7PbSPhRhk",
    authDomain: "atn-demo.firebaseapp.com",
    databaseURL: "https://atn-demo.firebaseio.com",
    projectId: "atn-demo",
    storageBucket: "atn-demo.appspot.com",
    messagingSenderId: "387840868203",
    appId: "1:387840868203:web:7291a9810ee06755e0162e",
    measurementId: "G-4P2PSJ528G"
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle =  () => auth.signInWithPopup(provider);

export default firebase;