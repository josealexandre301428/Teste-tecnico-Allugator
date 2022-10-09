import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <main className="main">
        <Routes>
          {/*  */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;