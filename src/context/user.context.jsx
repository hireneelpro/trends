// import { createContext, useEffect, useReducer } from "react";
// import { onAuthStateChangedListener } from "../utils/firebase/firbase.utils";

// //==================================================//
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const USER_ACTION_TYPES = {
//   SET_CURRENT_USER: "SET_CURRENT_USER",
// };

// const userReducer = (state, action) => {
//   // console.log(action);
//   const { type, payload } = action;
//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };
//     default:
//       throw new Error(`Unhandled type ${type}in userReducer`);
//   }
// };

// const INITIAL_STATE = {
//   currentUser: null,
// };

// export const UserProvider = ({ children }) => {
//   //   const [currentUser, setCurrentUser] = useState(null);
//   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
//   // const{currentUser}= state
//   console.log(currentUser);
//   const setCurrentUser = (user) => {
//     dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
//   };

//   const value = { currentUser, setCurrentUser };

//   // signOutUser()
//   useEffect(() => {
//     const unSubscribe = onAuthStateChangedListener((user) => {
//       // console.log(user);
//       setCurrentUser(user);
//       // user value will be user object (if sign in) or null (if sign out) which will be change value if current user .. which is used in navbar page to change display sign in or sign out
//     });
//     return unSubscribe;
//   }, []);
//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// ========= original context code =========//

// import { createContext,useState,useEffect } from "react";
// import { onAuthStateChangedListener } from "../utils/firebase/firbase.utils";
// import { signOutUser } from "../utils/firebase/firbase.utils";

// //==================================================//
// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser:()=> null
// })
// export const UserProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
//     const value = { currentUser, setCurrentUser }

//     // signOutUser()
//     useEffect(() => {
//         const unSubscribe = onAuthStateChangedListener((user) => {
//             console.log(user);
//             setCurrentUser(user)
//             // user value will be user object (if sign in) or null (if sign out) which will be change value if current user .. which is used in navbar page to change display sign in or sign out
//         })
//         return unSubscribe
//     },[])
//     return <UserContext.Provider value={value}>{children }</UserContext.Provider>
// }
