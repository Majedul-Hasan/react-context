import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyCyauX6WAODVA67327uyrNT8HnNSII0KJg",
  authDomain: "crown-clothing-8c233.firebaseapp.com",
  databaseURL: "https://crown-clothing-8c233-default-rtdb.firebaseio.com",
  projectId: "crown-clothing-8c233",
  storageBucket: "crown-clothing-8c233.appspot.com",
  messagingSenderId: "169216582895",
  appId: "1:169216582895:web:2616bedcf770afd42b271a"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
