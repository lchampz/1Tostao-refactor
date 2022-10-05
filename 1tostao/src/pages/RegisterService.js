import React, { useEffect } from 'react'
import Register from '../components/molecules/RegisterService'
import Footer from '../components/organims/Footer/Footer'

const RegisterService = () => {

    useEffect(() => {
        document.title="1Tostão | Registrar Serviço"
    })

    return(
        <>
            <Register/>
            <Footer needMargin/>
        </>   
    )
}

export default RegisterService;