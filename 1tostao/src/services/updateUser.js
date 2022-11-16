import { updateDoc, doc, deleteDoc  } from "firebase/firestore";
import db,{ auth } from "./Firebase";
import { deleteUser, reauthenticateWithCredential, EmailAuthProvider  } from "firebase/auth";


export const updateUser = async (
  uid,
  lastname,
  tell,
  username,
  name,
) => {
  const update = doc(db, "users", uid);

  await updateDoc(update, {
    sobrenome: lastname,
    tell: tell,
    username: username,
    nome: name,
  });

};

export const updateUserProfileImg = async (
  uid,
  profilePic
) => {
  const update = doc(db, "users", uid);

  await updateDoc(update, {
    imgPerfil: profilePic,
  });
};

export const updateUserProfileBanner = async (
  uid,
  banner
) => {
  const update = doc(db, "users", uid);

  await updateDoc(update, {
    banner: banner,
  });
};

export const deleteUserAcc = async (uid, pass) => {
  const user = auth.currentUser;
  try {
    const credential = EmailAuthProvider.credential(auth.currentUser.email, pass)

    await reauthenticateWithCredential(user, credential).then(() => {

    deleteUser(user).catch((err) => {
      console.log('[del] ',err)
    });
    deleteDoc(doc(db, "users", uid));
  })
  } catch(err) {
    console.log('[reAuth] ', err)
  }
  

  
}