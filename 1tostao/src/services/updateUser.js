import { updateDoc, doc } from "firebase/firestore";
import db from "./Firebase";


export const updateUser = async (uid, desc, lastname, email, tell, username, name, banner, profilePic) => {
  console.log('teste')
  const update = doc(db, "users", uid);

 const teste = await updateDoc(update, {
    desc: desc,
    sobrenome: lastname,
    email: email,
    tell: tell,
    username: username,
    nome: name,
    banner: banner,
    imgPerfil: profilePic
  });

  console.log(teste)
};
