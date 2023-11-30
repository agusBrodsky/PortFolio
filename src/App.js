import React, { useState, useEffect, useContext, createContext, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hhome from './screen/Hhome/Hhome.js'
import Home from "./screen/Home/Home.js";
import Creaciones from "./screen/Creaciones/Creaciones.js";
import Detalle from "./screen/Detalle/Detalle.js";
import Layout from "./components/Layout/Layout.js";
import AboutUs from './screen/AboutUs/AboutUs';
import Favorito from './screen/Favorito/Favorito.js';
import FavoritosContext from './context/context.js';
function App() {
  const [arrayFavoritos, setFavoritosContext] = useState( JSON.parse(localStorage.getItem('favoritos')) || []);

  useEffect(() => { // esto funciona, guarda el objeto que deseo mostrar!!
    // Guardar el array actualizado en el localStorage
      //console.log(arrayFavoritos);
      localStorage.setItem('favoritos', JSON.stringify(arrayFavoritos));
      //console.log(favContext);
  }, [arrayFavoritos]);

  // Hhome es la nueva pestaña de inicioo, no la remplace para quej despues decidamos con cual nos quedamos pero eso!!!!!
  // para poner que se inicie con uno tenes qque modificar el Route y agregarle index (acordate de sacarselo a el otro que lo tenga)
  // Saque el navbar porque no me gustaba, pero  te dejo la linea para agregarlo!!  <Route path="/" element={<Layout />}>
  return (
    <>
      <FavoritosContext.Provider value={{ arrayFavoritos, setFavoritosContext }} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index path="/" element={<Hhome />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Creaciones" element={<Creaciones />} />
              <Route path="/Detalle/:id" element={<Detalle />} />
              <Route path="/Favorito" element={<Favorito />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FavoritosContext.Provider>
    </>
  );
}

export default App;
