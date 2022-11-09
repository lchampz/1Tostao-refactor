import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../services/Firebase";
import db from "../../services/Firebase";
import {
  collection,
  getDocs,
  where,
  query,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { createUser } from "../../services/CreateGoogleAuth";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();
  const [service, setService] = useState();
  const [users, setUsers] = useState();

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  async function Validate(email, name, uid) {
    let check = undefined;
    const docRef = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(docRef);
    querySnapshot.forEach((doc) => {
      check = doc.data();
    });
    if (check !== undefined) {
      console.log("Este email ja está cadastrado!");
      console.log(check);
      check = undefined;
    } else {
      createUser(email, name, uid);
      console.log(check);
      check = undefined;
    }
  }

  const getUsers = async () => {
    const docRef = query(collection(db, "users"), where("uid", "==", user.uid));
    const querySnapshot = await getDocs(docRef);
    querySnapshot.forEach((doc) => {
      setProfile(doc.data());
    });
  };

  const deleteUser = async (val) => {
    await deleteDoc(doc(db, "users", val.id));
    window.location.reload();
  };
  useEffect(() => {
    const getAllUsers = async () => {
      const docRef = collection(db, "users");
      const data = await getDocs(docRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAllUsers();
  }, []);

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider).then((results) => {
      Validate(results.user.email, results.user.displayName, results.user.uid);
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  getUsers();
  return (
    <AuthContext.Provider
      value={{
        profile,
        service,
        user,
        getUsers,
        logIn,
        logOut,
        googleSignIn,
        users,
        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useUserAuth() {
  return useContext(AuthContext);
}
