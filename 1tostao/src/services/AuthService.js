import { createUserWithEmailAndPassword } from "firebase/auth";
import db, { auth } from './Firebase' 
import { addDoc, collection } from "firebase/firestore";

function createUserFirestore(email, password, state, cpf, name, rg, tell, uid, username, lastname, niver, city) {
    try {
        const docRef = addDoc(collection(db, "users"), {
            email: email, 
            senha: password, 
            estado: state, 
            cpf: cpf, 
            nome: name, 
            rg: rg,
            uid: uid,
            username: username,
            sobrenome: lastname,
            ADM: false,
            tell: tell,
            niver: niver,
            cidade: city,
            autenticado: false,
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}


export async function createUser(email, password, state, cpf, name, rg, tell, username, lastname, niver, city) {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        const uid = user.user.uid
        createUserFirestore(email, password, state, cpf, name, rg, tell, uid, username, lastname, niver, city)
        
        console.log(user)
    } catch (err) {
        console.error(err)
    }
    
}
