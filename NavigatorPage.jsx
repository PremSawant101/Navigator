import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './Style.css'
import NavbarPage from './NavbarPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Products from './Pages/Products'
import MenTshirts from './Products/MenTshirts'
import MenShirts from './Products/MenShirts'
import MenJeans from './Products/MenWatches'
import MenShoes from './Products/MenShoes'

const NavigatorPage = () => {
    return (
        <div>
            <NavbarPage />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Products' element={<Products />} >
                    <Route path="men-tshirts" element={<MenTshirts />} />
                    <Route path="men-shirts" element={<MenShirts />} />
                    <Route path="men-watches" element={<MenJeans />} />
                    <Route path="men-shoes" element={<MenShoes />} />
                </Route>
                <Route path='/Login' element={<Login />} />
            </Routes>
        </div>
    )
}

export default NavigatorPage
