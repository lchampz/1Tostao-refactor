import { collection, query, getDocs, where, limit } from "firebase/firestore";
import db from "./Firebase";

const servicesRef = collection(db, "servicos");

export async function getDataFromService(uid) {
  const docs = query(servicesRef);
  const response = await getDocs(docs);
  const data = response.docs.map((doc) => {
    if (doc.id === uid) {
      return doc.data();
    }
  });

  return data.filter(function (i) {
    return i;
  });
}

export async function getServiceWithCategory(category, range) {
  const q = range
    ? query(servicesRef, where("categoria", "==", category), limit(range))
    : query(servicesRef, where("categoria", "==", category));

  const response = await getDocs(q);
  const data = response.docs.map((doc) => {
    return { info: doc.data(), id: doc.id };
  });

  return data.filter(function (i) {
    return i;
  });
}
