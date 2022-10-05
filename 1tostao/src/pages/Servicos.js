import React, { useEffect } from 'react'
import ServiceFilter from '../components/atoms/ServiceFilter'
import Services from '../components/atoms/Services'
import Footer from '../components/organims/Footer/Footer.js'
const Servicos = () => {

    useEffect(() => {
        document.title="1Tostão | Serviços"
    })

    return(
        <>
            <ServiceFilter/>
            <Services/>
            <Footer/>
        </>   
    )
}

export default Servicos