import { updateDoc, doc } from "firebase/firestore";
import db from "./Firebase";

export const updateUser = async (
  uid,
  lastname,
  tell,
  username,
  name,
  banner,
  profilePic
) => {
  const update = doc(db, "users", uid);

  await updateDoc(update, {
    sobrenome: lastname,
    tell: tell,
    username: username,
    nome: name,
    banner: banner,
    imgPerfil: profilePic,
  });

 
};
