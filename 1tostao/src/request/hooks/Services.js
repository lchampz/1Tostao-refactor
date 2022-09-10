import React, { createContext,useContext, useState, useEffect} from 'react'

import db from '../../services/Firebase'
import {collection, getDocs} from 'firebase/firestore';


export const ServiceContext = createContext({});

export const ServiceProvider = ({ children }) => {
  
  const [service, setService] = useState();
 const docRef = collection(db, "servicos");
 useEffect(() => {
   const getServices = async () => {
     const data = await getDocs(docRef);
     setService((data.docs.map((doc) => ({...doc.data(), id:doc.id}))));
   }
   getServices();
 }, [])
 return(
    <ServiceContext.Provider value={{service}}>
        {children}
    </ServiceContext.Provider>
)
}

export function useService(){
    return useContext(ServiceContext);
}
