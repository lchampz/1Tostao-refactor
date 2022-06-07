import React, { createContext, useContext, useState, useEffect} from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendEmailVerification
  } from "firebase/auth";
import { auth } from '../../services/Firebase';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});

    function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }
      function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
      }
      function logOut() {
        return signOut(auth);
      }
      function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
      }
    
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          console.log("Auth", currentuser);
          setUser(currentuser);
          if(!currentuser.emailVerified) {
            sendEmailVerification(currentuser)
            .then(() => {
              window.datalayer.push({	
                user: currentuser,
              })
            })
          }
        });
    
        return () => {
          unsubscribe();
        };
      }, []); 

    return(
        <AuthContext.Provider value={{user,logIn, signUp, logOut, googleSignIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(AuthContext);
}
