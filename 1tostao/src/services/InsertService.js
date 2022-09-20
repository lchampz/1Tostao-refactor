import { addDoc, collection } from "firebase/firestore";
import db from "./Firebase";
import { getStorage, ref, uploadString } from "firebase/storage";
import { encodeBase64 } from '../request/utils/base64'

const storage = getStorage();
const storageRef = ref(storage, 'imgs');

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

export async function uploadImg(code) {
  const base64 = await encodeBase64(code)

  uploadString(storageRef, base64, 'base64').then((snapshot) => {
    console.log('Uploaded a base64 string!', snapshot);
  });
}