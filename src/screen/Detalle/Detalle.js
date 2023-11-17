import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Detalle.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from 'react-router-dom';


function Detalle() {
    const { id } = useParams();
    const [creacion, setCreacion] = useState({});
      

      useEffect(() => {
        axios.get('../listaCreaciones.JSON')
      .then(res => {
        res.data.forEach(element => {
            if (element.id == id) setCreacion(element);
        });
        console.log(creacion);
      })
      }, []);

    return (
        <div className='container'>
            <header className="header-container">

            </header>
            <main className="main-container">
                <h1>{creacion.id}</h1>
            </main>
            <footer className="footer-container">
            </footer>
        </div>
    );
}

export default Detalle;

