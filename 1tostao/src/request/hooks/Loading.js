import React, { useState, useContext, createContext } from 'react'

export const LoadingContext = createContext({});

export const load = [
    {
        isTrue: {
            bg: 'rgb(0, 0, 0, 0.7)',
        },
        isFalse: {
            bg: 'rgb(0, 0, 0, 0.0)',
        }
    }
]

export const LoadingProvider = ({ children }) => {
    const [ loading, setLoading ] = useState(true)
gi
    return(
        <>
        <LoadingContext.Provider value={{ loading, setLoading }}>
            <div style={loading ? {backgroundColor:  'rgb(0, 0, 0, 0.7)', zIndex: 99999, width: '100vh', height: '100vh'} : {backgroundColor: 'rgb(0, 0, 0, 0.0)', zIndex: 99999, width: '100vh', height: '100vh'}}>
                {children}
            </div> 
        </LoadingContext.Provider>

        </>
    )
}