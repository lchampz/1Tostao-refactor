import React, { createContext, useContext, useState, useEffect } from "react";

import db from "../../services/Firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";

export const ServiceContext = createContext({});

export const ServiceProvider = ({ children }) => {
  const [service, setService] = useState();
  const [serviceDestaque, setServiceDestaque] = useState();
  const [filter, setFilter] = useState();
  const docRef = collection(db, "servicos");
  // query serviços
  useEffect(() => {
    const getServices = async () => {
      const data = await getDocs(docRef);
      setService(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setServiceDestaque(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getServices();
  }, []);

  // filtragem serviços
  const getServicesFiltered = async (filtragem, sinal, valor) => {
    const filtered = query(docRef, where(filtragem, sinal, valor));
    const servicesFiltered = await getDocs(filtered);
    setFilter(
      servicesFiltered.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  // barra de pesquisa
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
  // filtragem maior e menor
  const sortByPrice = async (variavel) => {
    const searched = query(docRef, orderBy("preco", variavel));
    const servicesFiltered = await getDocs(searched);
    setFilter(
      servicesFiltered.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  // remover filtros
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
        removeFilter,
        serviceDestaque,
        sortByPrice,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export function useService() {
  return useContext(ServiceContext);
}
