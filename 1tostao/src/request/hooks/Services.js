import React, { createContext, useContext, useState, useEffect } from "react";

import db from "../../services/Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ServiceContext = createContext({});

export const ServiceProvider = ({ children }) => {
  const [service, setService] = useState();
  const [filter, setFilter] = useState();
  const docRef = collection(db, "servicos");

  useEffect(() => {
    const getServices = async () => {
      const data = await getDocs(docRef);
      setService(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getServices();
  }, []);

  const getServicesFiltered = async (filtragem, valor) => {
    const filtered = query(docRef, where(filtragem, "==", valor));
    const servicesFiltered = await getDocs(filtered);
    setFilter(
      servicesFiltered.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const removeFilter = () => {
    setFilter(undefined);
  };

  return (
    <ServiceContext.Provider
      value={{ service, filter, getServicesFiltered, removeFilter }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export function useService() {
  return useContext(ServiceContext);
}
