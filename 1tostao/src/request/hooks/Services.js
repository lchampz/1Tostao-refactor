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
  const [search, setSearch] = useState();
  const [searchValue, setSearchValue] = useState(undefined);
  const [searchShow, setSearchShow] = useState();
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
  const getServiceSearch = (text) => {
    setSearch(text);
    if (text !== "") {
      setSearchValue(
        service?.filter((person) => {
          return (
            person.nome.toLowerCase().includes(search.toLowerCase()) ||
            person.categoria.toLowerCase().includes(search.toLowerCase()) ||
            person.autor.toLowerCase().includes(search.toLowerCase())
          );
        })
      );
    } else if (text === "") {
      setSearchValue(undefined);
    }
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
    setSearchValue(undefined);
  };

  //filtrar cards

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
        search,
        searchValue,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export function useService() {
  return useContext(ServiceContext);
}
