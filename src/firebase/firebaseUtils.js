import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBGTYnyjpK9s5eI_1Fl_s47N4HyQ7-GRng",
    authDomain: "crown-clothing-db-ea8f4.firebaseapp.com",
    projectId: "crown-clothing-db-ea8f4", 
    storageBucket: "crown-clothing-db-ea8f4.appspot.com",
    messagingSenderId: "835545159281",
    appId: "1:835545159281:web:9ac602886c9007b2b12dd0",
    measurementId: "G-1LQQYB63VH"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const fireStore = firebase.firestore()

  export const createUserProfileDocument = async(authUser, additionalData) => {
    if (!authUser) return;
    
    const userRef = fireStore.doc(`users/${authUser.uid}`);
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
      const { displayName, email } = authUser;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
      } catch (error) {
        console.log(`Error creating a user:  ${error.message}`)
      }
    }
    return userRef;

  }


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  
  export default firebase;