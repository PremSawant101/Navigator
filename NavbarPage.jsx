import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Products from './Pages/Products'
import { Search, UserRound } from 'lucide-react'

const NavbarPage = () => {
    return (
        <div className="nav sticky top-0 z-50 flex items-center justify-between px-8 py-3 backdrop-blur-md bg-white/80 border-b border-gray-200">

            <Link to="/" className="logo-link">
                <h1 className="logo-text">RUNWAY</h1>
            </Link>

            <div className="flex items-center gap-8">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/About" className="nav-link">ABOUT</Link>
                <Link to="/Products" className="nav-link">SHOP</Link>
            </div>

            <div className="flex items-center gap-4">
                <div className="search-bar">
                    <input
                        type="search"
                        placeholder="Search products"
                        className="search-input"
                    />
                    <Search size={22} strokeWidth={2.2} className="text-gray-600" />
                </div>

                <Link to="/Login" className="icon-btn">
                    <UserRound size={24} strokeWidth={2.2} />
                </Link>
            </div>
        </div>

    )
}

export default NavbarPage
