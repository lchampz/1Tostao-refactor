import React, { useEffect } from 'react'
import About from '../components/molecules/AboutUs';
import Footer from '../components/organims/Footer/Footer'


const AboutUs = () => {

    useEffect(() => {
        document.title="1Tostão | Sobre Nós"
    })

    return(
        <>
            <About/>
            <Footer />
        </>   
    );
}

export default AboutUs