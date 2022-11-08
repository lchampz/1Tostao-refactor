import {
  addDoc,
  collection,
  query,
  getDocs,
  where,
  updateDoc,
  doc,
  increment,
} from "firebase/firestore";
import db from "./Firebase";

export async function insertComment(
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
      data: data,
    });
    console.log("[SUCCESS] ID: ", docRef.id);

    const update = doc(db, "servicos", idServico);

    switch (nota) {
      case 1:
        await updateDoc(update, {
          nota1: increment(1),
        });

      case 2:
        await updateDoc(update, {
          nota2: increment(1),
        });

      case 3:
        await updateDoc(update, {
          nota3: increment(1),
        });

      case 4:
        await updateDoc(update, {
          nota4: increment(1),
        });

      case 5:
        await updateDoc(update, {
          nota5: increment(1),
        });
    }
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
