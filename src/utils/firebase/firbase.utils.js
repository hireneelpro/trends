import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration// downlo
const firebaseConfig = {
  apiKey: "AIzaSyBwicIJNquvaSJGmhAzZN2rsKxNvdEefb4",
  authDomain: "trends-clothing-cf8a4.firebaseapp.com",
  projectId: "trends-clothing-cf8a4",
  storageBucket: "trends-clothing-cf8a4.appspot.com",
  messagingSenderId: "999835508346",
  appId: "1:999835508346:web:be3a0af45610e5b28d25c3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//=============  initialise fire store===============//

export const db = getFirestore(); // accessing stored data in firestore
export const createUserDocumentFromAuth = async (userAuth, extrainfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userAuth);
  console.log(userDocRef);

  // Fetching the document
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot.data());
  // console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    // console.log(displayName, email, createAt);
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...extrainfo
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
// ========== firestore  storing user data complete=================//

// ===========sign-in with email and password method ==================//
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
