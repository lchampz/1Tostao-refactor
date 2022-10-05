import React, { useEffect } from 'react'
import CardRegister from '../components/atoms/CardRegister/index.js';
import Footer from '../components/organims/Footer/Footer.js'

const Register = () => {

    useEffect(() => {
        document.title="1Tostão | Registrar"
    })

    return(
        <>
            <CardRegister />
            <Footer />
        </>   
    )
}

export default Register;