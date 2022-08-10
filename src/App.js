import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import { MainPage, BeerPage } from './pages';

const App = () => (
   <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/beers/:id" element={<BeerPage />} />
         </Routes>
      </BrowserRouter>
   </div>
);

export default App;
