import React, { useEffect } from 'react'
import Footer from '../components/organims/Footer/Footer.js'
import AccountLayout from '../components/molecules/AccountLayout'


const Account = () => {
    useEffect(() => {
        document.title="1Tostão | Minha Conta"
    })

    return (
    <>  
        <AccountLayout />
        <Footer />
    </>);
}
 
export default Account;