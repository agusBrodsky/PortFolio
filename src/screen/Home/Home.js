import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Archivo de estilos (si es necesario)
import fotoPorfolio from '../../assets/FotoPorfolio.jpeg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1 className="class-text">Bienvenido a nuestro Portfolio</h1>
        <h3 className="class-pText">un lugar para conocenos mas!!.</h3>
        <div className="clase-boton">
            <button className="boton-gilf"><Link to="/AboutUs">About Us </Link></button>
          <button className="boton-gilf">Proyectos</button>
        </div>
      </div>
      <div className="image-section">
        <img className="profile-img" src={fotoPorfolio} alt="..." />
      </div>
    </div>
  );
};

export default Home;