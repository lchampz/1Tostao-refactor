import { addDoc, collection } from "firebase/firestore";
import db from "./Firebase";

export async function createService(
    autor, categoria, desc, entrega, img, nome, preco, uid
) {
  try {
      const docRef = await addDoc(collection(db, "servicos"), {
          autor: autor,
          categoria: categoria,
          desc: desc,
          entrega: entrega,
          img: img,
          nome: nome,
          nota: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
          },
          preco: preco,
          uid: uid,
      }
    )
    console.log('[SUCCESS] ID: ', docRef.id)
    ;
  } catch (e) {
    console.log("[ERROR]: ", e);
  }
}