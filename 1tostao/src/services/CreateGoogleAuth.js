import db, { auth } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";

async function createUserFirestore(email, name, uid) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: email,
      nome: name,
      senha: "",
      estado: "",
      cpf: "",
      rg: "",
      tell: "",
      cidade: "",
      niver: null,
      uid: uid,
      date: new Date().toString(),
      username: name,
      sobrenome: "",
      ADM: false,
    });
    console.log("[SUCCESS] ID: ", docRef.id);
  } catch (e) {
    console.log("[ERROR]: ", e);
  }
}

export async function createUser(email, name, uid) {
  try {
    await createUserFirestore(email, name, uid);
  } catch (err) {
    console.log(err);
  }
}
