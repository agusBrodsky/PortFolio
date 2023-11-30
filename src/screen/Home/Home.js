import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Archivo de estilos (si es necesario)
//import fotoPorfolio from 'https://i.pinimg.com/originals/d3/98/81/d3988178780bbe1a619655ddd6e47831.jpg';


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
        <img className="profile-img" src='https://i.pinimg.com/originals/d3/98/81/d3988178780bbe1a619655ddd6e47831.jpg' alt="..." />
      </div>
    </div>
  );
};

export default Home;