import React from 'react';
import './App.css';
import { HomePage } from './pages/Home';
import { CatalogPage } from './pages/Catalog';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/catalog' element={<CatalogPage />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

