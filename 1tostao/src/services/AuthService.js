import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import db, { auth } from "./Firebase";
import { setDoc, doc } from "firebase/firestore";

async function createUserFirestore(
  email,
  password,
  state,
  cpf,
  name,
  rg,
  tell,
  uid,
  username,
  lastname,
  niver,
  city
) {
  try {
    const docRef = await setDoc(doc(db, "users", uid), {
      email: email,
      senha: password,
      estado: state,
      cpf: cpf,
      nome: name,
      rg: rg,
      uid: uid,
      date: new Date().toLocaleDateString().toString(),
      bio: "",
      imgPerfil: "",
      banner: "",
      username: username,
      sobrenome: lastname,
      ADM: false,
      tell: tell,
      niver: niver,
      cidade: city,
      banner: '',
      imgPerfil: '',
      firstAcces: true,
    });
    console.log("[SUCCESS] ID: ", docRef.id);
  } catch (e) {
    console.log("[ERROR]: ", e);
  }
}

export async function createUser(
  email,
  password,
  state,
  cpf,
  name,
  rg,
  tell,
  username,
  lastname,
  niver,
  city
) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    const uid = user.user.uid;
    await createUserFirestore(
      email,
      password,
      state,
      cpf,
      name,
      rg,
      tell,
      uid,
      username,
      lastname,
      niver,
      city
    );

    console.log(user);
  } catch (err) {
    console.log(err);
  }
}
