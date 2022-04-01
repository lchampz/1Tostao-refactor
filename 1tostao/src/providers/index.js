import React from 'react'
import { AuthProvider } from '../request/hooks/Auth'
import { ThemeProvider } from '../request/hooks/Theme'
import { LoadingProvider } from '../request/hooks/Loading'

const Providers = ({ children }) => {

    return(
        <>
            <AuthProvider>
                <LoadingProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </LoadingProvider> 
            </AuthProvider>
        </>
    )
}

export default Providers

