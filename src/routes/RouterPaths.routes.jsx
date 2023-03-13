import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Logo from '../components/Header/NavBar/Logo/Logo'
import LoginUser from '../components/UserComponents/LoginUser/LoginUser'
import CartPath from '../pages/CartPath'
import Home from '../pages/HomePath'
import Products from '../pages/ProductsPath'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivateRoute.routes'
import FavoritePage from '../pages/FavoritePage'
import DetailPath from '../pages/DetailPath'



const RouterPaths = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/' element={< Logo />} />
        <Route path='/products' element={<Products />}/>
        <Route path='/products/:title' element={<DetailPath />}/>
        <Route path='/favorites' element={
          <PrivateRoute>
            <FavoritePage />
          </PrivateRoute>
        } />
        <Route path='/login' element={<LoginUser />} />
        <Route path='/cart' element={<CartPath />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RouterPaths