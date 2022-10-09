import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NotFound from './pages/notFound';
import LoginForm from './pages/login/LoginForm';
import RegisterForm from './pages/registro/RegisterForm';

function App() {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <main className="main">
        <Routes>
          <Route exact path="/" element={ <Navigate to="/login" /> } />
          <Route exact path="/login" element={ <LoginForm /> } />
          <Route exact path="/register" element={ <RegisterForm /> } />
          <Route exact path="/products" element={ <NotFound /> } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
