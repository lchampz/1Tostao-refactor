import React, { useState, useContext, createContext } from "react";

export const LoadingContext = createContext({});

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
      <LoadingContext.Provider value={{ loading, setLoading }}>
          {children}
      </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
