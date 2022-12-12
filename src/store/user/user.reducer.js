// import { createContext, useEffect, useReducer } from "react";
// import { onAuthStateChangedListener } from "../utils/firebase/firbase.utils";

//==================================================//

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  // console.log(action);
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

// export const UserProvider = ({ children }) => {
//   const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
//   const setCurrentUser = (user) => {
//     dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
//   };

//   const value = { currentUser, setCurrentUser };

//   useEffect(() => {
//     const unSubscribe = onAuthStateChangedListener((user) => {
//       setCurrentUser(user);
//       // user value will be user object (if sign in) or null (if sign out) which will be change value if current user .. which is used in navbar page to change display sign in or sign out
//     });
//     return unSubscribe;
//   }, []);
//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
