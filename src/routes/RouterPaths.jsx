import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Logo from '../components/Header/Logo/Logo'
import LoginUser from '../components/LoginUser/LoginUser'
import { ShoppingCartProvider } from '../context/ShoppingCartContex/ShoppingCartContext'
import CartPath from '../pages/CartPath'
import Home from '../pages/HomePath'
import Products from '../pages/ProductsPath'

const RouterPaths = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/' element={< Logo />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<LoginUser />} />
          <Route path='/cart' element={<CartPath />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default RouterPaths