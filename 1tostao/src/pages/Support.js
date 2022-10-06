import React, { useEffect } from 'react'
import Cards from '../components/atoms/CardSupport'
import Footer from '../components/organims/Footer/Footer'

const Support = () => {

    useEffect(() => {
        document.title="1Tostão | Suporte"
    })

    return (
        <>
            <Cards />
            <Footer needMargin/>
        </>
    );
}
 
export default Support;