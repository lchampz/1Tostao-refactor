import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AboutUs, Home, Login, Register, FAQ } from './pages'

const Rotas = () => {

    const routes = [
        { path: '/', name: 'Home', element: <Home />},
        { path: '/login', name: 'Login', element: <Login />},
        { path: '/register', name: 'Register', element: <Register />},
        { path: '/about', name: 'About', element: <AboutUs />},
        { path: '/faq', name: 'FAQ', element: <FAQ />},
    ]

    return(
        <Routes>
            {routes.map((routes, i) => (
                <Route path={routes.path} element={routes.element}/>
            ))}
        </Routes>
    )
}

export default Rotas