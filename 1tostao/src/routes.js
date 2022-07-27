import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AboutUs, Home, Login, Register, Servicos, FAQ, Profile, Category, Support, Dashboard, Account, Send } from './pages'


const Rotas = () => {

    const routes = [
        { path: '/', name: 'Home', element: <Home />},
        { path: '/login', name: 'Login', element: <Login />},
        { path: '/register', name: 'Register', element: <Register />},
        { path: '/about', name: 'About', element: <AboutUs />},
        { path: '/faq', name: 'FAQ', element: <FAQ />},
        { path: '/servicos', name: 'Servicos', element: <Servicos />},
        { path: '/profile', name: 'Profile', element: <Profile />},
        { path: '/support', name: 'Support', element: <Support />},
        { path: '/categories', name: 'Categories', element: <Category />},
        { path: '/dashboard', name: 'Dashboard', element: <Dashboard />},
        { path: '/support/send', name: 'SendEmail', element: <Send />},
        { path: '/support/myaccount', name: 'Account', element: <Account />},
    ]

    return(
        <Routes>
            {routes.map((routes, i) => (
                <Route key={i} path={routes.path} element={routes.element}/>
            ))}
        </Routes>
    )
}

export default Rotas