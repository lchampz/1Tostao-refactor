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
import db from '../../services/Firebase'
import {collection, getDocs, where, query} from 'firebase/firestore';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState();

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

      const getUsers = async () => {
        const docRef = query(collection(db, "users"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(docRef);
        querySnapshot.forEach((doc) => {
          setProfile(doc.data());
        })
      }

    
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          console.log("Auth", currentuser);
          setUser(currentuser);
          if(!currentuser.emailVerified) {
            sendEmailVerification(currentuser)
          }
        });
    
        return () => {
          unsubscribe();
        };
      }, []); 

      getUsers();
    return(
        <AuthContext.Provider value={{profile, user, getUsers,logIn, signUp, logOut, googleSignIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(AuthContext);
}
