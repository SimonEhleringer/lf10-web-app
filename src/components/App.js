import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Current from './Current';
import Forecast from './Forecast';
import Form from './Form';
import Header from './Header';

function App() {
  const [city, setCity] = useState(undefined);
  const [country, setCountry] = useState(undefined);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setCity(e.target.elements.city.value);
    setCountry(e.target.elements.country.value);
  };

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Form handleSubmit={handleFormSubmit} />
        <Routes>
          <Route
            path='/current'
            element={<Current city={city} country={country} />}
          />

          <Route
            path='/forecast'
            element={<Forecast city={city} country={country} />}
          />
          <Route path='/' element={<Navigate replace to='/current' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
