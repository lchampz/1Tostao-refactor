import React, { useEffect } from 'react';
import Contact from '../components/molecules/ContactLayout';
import Footer from '../components/organims/Footer/Footer.js'
const Send = () => {

    useEffect(() => {
        document.title="1Tostão | Fale Conosco"
    })

    return (
    <div>
        <Contact/>
        <Footer/>
    </div>);
}
 
export default Send;