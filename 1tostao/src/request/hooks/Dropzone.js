import React, { useState, useContext, createContext } from "react";

export const DropzoneContext = createContext({});

export const DropzoneProvider = ({ children }) => {
  const [dropzone, setDropzone] = useState('');

  return (
      <DropzoneContext.Provider value={{ dropzone, setDropzone }}>
          {children}
      </DropzoneContext.Provider>
  );
};

export const useDrop = () => useContext(DropzoneContext);
