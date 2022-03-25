import React from 'react'
import { Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import { AboutUs, Home, Login, Register, Servicos } from './pages'
=======
import { AboutUs, Home, Login, Register, FAQ } from './pages'
>>>>>>> 6325fb0289ca006a0b2f7105fbae2a8ddab0f1fc

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
<<<<<<< HEAD
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/servicos" element={<Servicos/>} />
=======
            {routes.map((routes, i) => (
                <Route key={i} path={routes.path} element={routes.element}/>
            ))}
>>>>>>> 6325fb0289ca006a0b2f7105fbae2a8ddab0f1fc
        </Routes>
    )
}

export default Rotas