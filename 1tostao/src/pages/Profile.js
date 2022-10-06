import React, { useEffect } from 'react';
import HeaderUser from '../components/atoms/HeaderUser/index.js';
import Footer from '../components/organims/Footer/Footer.js'
const Profile = () => {
    useEffect(() => {
        document.title="1Tostão | Perfil"
    })

    return ( 
        <>
            <HeaderUser/>
            <Footer/>
        </>
     );
}
 
export default Profile;