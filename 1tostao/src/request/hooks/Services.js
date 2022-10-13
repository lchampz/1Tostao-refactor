import React, { createContext, useContext, useState, useEffect } from "react";

import db from "../../services/Firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useUserAuth } from "./Auth";

export const ServiceContext = createContext({});

export const ServiceProvider = ({ children }) => {
  const [service, setService] = useState();
  const [serviceUser, setServiceUser] = useState();
  const [serviceDestaque, setServiceDestaque] = useState();
  const [filter, setFilter] = useState();
  const docRef = collection(db, "servicos");
  const { user, profile } = useUserAuth();
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

  const getServicesUser = async (uid) => {
    const filtered = query(docRef, where("uid", "==", uid));
    const data = await getDocs(filtered);
    setServiceUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

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
      where("nome", "<=", text + "~"),
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
        removeFilter,
        serviceDestaque,
        serviceUser,
        getServicesUser,
        getServiceSearch,
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
