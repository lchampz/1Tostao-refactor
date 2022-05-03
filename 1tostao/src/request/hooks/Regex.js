import React, { createContext, useContext } from 'react'

export const RegexContext = createContext({});

export const regexTypes = {
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    pass: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
    cpf: /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
    rg: /(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)/,
    tell: /(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/
}

export const RegexProvider = ({ children }) => {
    return(

        <RegexContext.Provider value={{ regexTypes }}>
            {children}
        </RegexContext.Provider>
    )
} 

export const useRegex = () => useContext(RegexContext)
