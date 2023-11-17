import logo from './logo.svg';
import React, { useState, useEffect, useContext, createContext, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hhome from './screen/Hhome/Hhome.js'
import Home from "./screen/Home/Home.js";
import Creaciones from "./screen/Creaciones/Creaciones.js";
import Detalle from "./screen/Detalle/Detalle.js";
import Layout from "./components/Layout/Layout.js";
import AboutUs from './screen/AboutUs/AboutUs';
function App() {
  // Hhome es la nueva pestaña de inicioo, no la remplace para quej despues decidamos con cual nos quedamos pero eso!!!!!
  // para poner que se inicie con uno tenes qque modificar el Route y agregarle index (acordate de sacarselo a el otro que lo tenga)
  // Saque el navbar porque no me gustaba, pero  te dejo la linea para agregarlo!!  <Route path="/" element={<Layout />}>
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />} >
            <Route index path="/" element={<Hhome />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Creaciones" element={<Creaciones />} />
            <Route path="/Detalle" element={<Detalle />} /> 
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
