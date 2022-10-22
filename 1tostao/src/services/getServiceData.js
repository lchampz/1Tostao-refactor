import { collection, query, getDocs } from "firebase/firestore";
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

  return data.filter(function (i) { return i});
}
