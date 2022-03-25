import React, { useState, createContext, useContext, useEffect } from 'react'


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState({
        name: ''
    })

    return(
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
