import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AboutUs, Home, Login, Register, Servicos } from './pages'

const Rotas = () => {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/servicos" element={<Servicos/>} />
        </Routes>
    )
}

export default Rotas