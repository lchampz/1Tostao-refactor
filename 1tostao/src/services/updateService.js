import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import db from "./Firebase";

export const updateService = async (uid, name, desc, preco, entrega, cat) => {
  const update = doc(db, "servicos", uid);

  await updateDoc(update, {
    desc: desc,
    preco: preco,
    entrega: entrega,
    nome: name,
    categoria: cat,
  });
};

export const deleteService = (uid) => {
  deleteDoc(doc(db, "servicos", uid));
};
