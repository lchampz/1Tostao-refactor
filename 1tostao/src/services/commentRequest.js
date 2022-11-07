import { addDoc, collection, query, getDocs, where, } from "firebase/firestore";
import db from "./Firebase"; 

export async function insertComment (
  autor,
  idServico,
  desc,
  nota,
  uidAutor,
  data
) {
  try {
    const docRef = await addDoc(collection(db, "comentarios"), {
      autor: autor,
      idServico: idServico,
      desc: desc,
      nota: nota,
      uidAutor: uidAutor,
      data: data
    });
    console.log("[SUCCESS] ID: ", docRef.id);
  } catch (e) {
    console.log("[ERROR]: ", e);
  }
}

const commentsRef = collection(db, "comentarios");

export const getComments = async (serviceUid) => {
  const q = query(commentsRef, where("idServico", "==", serviceUid));
  const response = await getDocs(q);
  const data = response.docs.map((doc) => {
    return { info: doc.data(), id: doc.id };
  });

  return data.filter(function (i) {
    return i;
  });
};

