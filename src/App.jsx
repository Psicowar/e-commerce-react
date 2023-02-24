import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import  Home from './pages/HomePath';
import Products from './pages/ProductsPath';
import Header from './components/Header/Header';
import LoginUser from './components/LoginUser/LoginUser';
import Logo from './components/Header/Logo/Logo';
import CartPath from './pages/CartPath';
import { ShoppingCartProvider } from './context/ShoppingCartContex/ShoppingCartContext';


function App() {


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
  );
}

export default App;
