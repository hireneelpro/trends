import { createContext,useState,useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firbase.utils";
import { signOutUser } from "../utils/firebase/firbase.utils";




//==================================================//
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser:()=> null
})
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }
    
    // signOutUser()
    useEffect(() => {
        const unSubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
            setCurrentUser(user)
            // user value will be user object (if sign in) or null (if sign out) which will be change value if current user .. which is used in navbar page to change display sign in or sign out
        })
        return unSubscribe
    },[])
    return <UserContext.Provider value={value}>{children }</UserContext.Provider>
}