import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NotFound from './pages/notFound/notFound';
import Products from './pages/products/Products';
import LoginForm from './pages/login/LoginForm';
import RegisterForm from './pages/registro/RegisterForm';
import Checkout from './pages/checkout/Checkout';
import About from './pages/about/About';

function App() {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <main className="main">
        <Routes>
          <Route exact path="/" element={ <Navigate to="/products" /> } />
          <Route exact path="/login" element={ <LoginForm /> } />
          <Route exact path="/register" element={ <RegisterForm /> } />
          <Route exact path="/products" element={ <Products /> } />
          <Route exact path="/checkout" element={ <Checkout /> } />
          <Route exact path="/about/:id" element={ <About /> } />
          <Route exact path="*" element={ <NotFound /> } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
