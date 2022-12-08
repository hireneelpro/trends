import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getdocs,
  getDocs,
} from "firebase/firestore";

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
//=============  initialise fire store===============//

export const db = getFirestore(); // accessing stored data in firestore
// ========== storing data into firestore ==================//

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

// ========== end of storing data in firestore ===========//
// ========== fetching data from firebase ===============//
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

//=============end of fetching data from firestore=======//
export const auth = getAuth();

// ==============sign in with google ==============//

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

provider.setCustomParameters({
  prompt: "select_account",
});

// ===========sign-up with email and password method ==================//
export const signupWithEmail = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
// ============ sign-in with email and password===============//
export const signInWithEmail = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
// ========== sign out ===============================//
export const signOutUser = () => signOut(auth);

//=========== onAuthStateChanged===================//

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
//  onAuthStateChanged method takes two argument one auth and other is callback function which we can define.. so when function runs it keep listening auth object and when state of auth change it runs callback function .. so when signin this function will run,, if signout this function will run.

// ========== firestore  storing user data complete=================//

export const createUserDocumentFromAuth = async (userAuth, extrainfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  // Fetching the document
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...extrainfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
