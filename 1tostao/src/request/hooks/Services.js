import React, { createContext, useContext, useState, useEffect } from "react";

import db from "../../services/Firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

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
  const getServicesFilteredByTime = async (valor) => {
    const filtered = query(docRef, where("entrega", "<=", valor));
    const servicesFiltered = await getDocs(filtered);
    setFilter(
      servicesFiltered.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  const getServicesFilteredByPrice = async (sinal, valor) => {
    const filtered = query(docRef, where("preco", sinal, valor));
    const servicesFiltered = await getDocs(filtered);
    setFilter(
      servicesFiltered.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const getServiceSearch = async (text) => {
    const searched = query(
      docRef,
      where("nome", "<=", text + "\uf8ff"),
      where("nome", ">=", text)
    );

    const servicesFiltered = await getDocs(searched);
    setFilter(
      servicesFiltered.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const sortByPriceMenor = async () => {
    const searched = query(docRef, orderBy("preco"));
    const servicesFiltered = await getDocs(searched);
    setFilter(
      servicesFiltered.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  const sortByPriceMaior = async () => {
    const searched = query(docRef, orderBy("preco", "desc"));
    const servicesFiltered = await getDocs(searched);
    setFilter(
      servicesFiltered.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const removeFilter = () => {
    setFilter(undefined);
  };

  return (
    <ServiceContext.Provider
      value={{
        service,
        filter,
        getServicesFiltered,
        getServiceSearch,
        getServicesFilteredByPrice,
        removeFilter,
        sortByPriceMenor,
        sortByPriceMaior,
        getServicesFilteredByTime,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export function useService() {
  return useContext(ServiceContext);
}
