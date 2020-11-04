import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDkayKhuZgPBE5Y5Je-8UZSk_QCLVdvxB0",
    authDomain: "react-guide-ecom.firebaseapp.com",
    databaseURL: "https://react-guide-ecom.firebaseio.com",
    projectId: "react-guide-ecom",
    storageBucket: "react-guide-ecom.appspot.com",
    messagingSenderId: "650649116468",
    appId: "1:650649116468:web:b2af539d193362d9d60f61",
    measurementId: "G-ME3QYH5XX7"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) =>  {
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exist){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error){
      console.log('Error: ', error.message);
    }
  }
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
