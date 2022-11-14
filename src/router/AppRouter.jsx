import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import FavoritePage from "../pages/FavoritePage"
import Navbar from '../components/Navbar'
import ContactPage from "../pages/ContactPage"
import AboutPage from "../pages/AboutPage"
import ShoppingPage from "../pages/ShoppingPage"
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes >
        <Route  path='/' element={<Home /> } />
        <Route  path='/about' element={<AboutPage /> } />
        <Route  path='/favorite' element={<FavoritePage /> } />
        <Route  path='/contact' element={<ContactPage /> } />
        <Route  path='/shopping' element={<ShoppingPage /> } />



    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
