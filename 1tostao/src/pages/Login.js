import React, { useEffect } from 'react'
import CardLogin from '../components/atoms/CardLogin/index.js'
import Footer from '../components/organims/Footer/Footer.js'
const Login = () => {

    useEffect(() => {
        document.title="1Tostão | Login"
    })

    return(
        <>
            <CardLogin />
            <Footer />
        </>   
    )
}

export default Login;