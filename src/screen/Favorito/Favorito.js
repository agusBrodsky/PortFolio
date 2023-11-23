import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Favorito.css';



function Favorito() {
  const [favoritosGuardados, setFavoritosGuardados] = useState(JSON.parse(localStorage.getItem('favoritos')) || []);
  const [creaciones, setCreaciones] = useState([]);
  let p=null;

  useEffect(() => {
  axios.get('../listaCreaciones.JSON')
    .then(res => {
      const nuevasCreaciones = res.data.filter(element => favoritosGuardados[element.id-1]?.almacenar === true);
      setCreaciones(nuevasCreaciones);
    });
}, [favoritosGuardados]);



  return (
    <div className="favorito-container">
      <h1>Tus Creaciones Favoritas</h1>
      {creaciones.map(creacion => (
  <div key={creacion.id} className="creacion-item" style={{border:'3px solid black'}}>
    <img
      src={creacion.imagen}
      alt={`Creación ${creacion.id}`}
      className="creacion-photo"
      style={{ width: '20%', cursor: 'pointer' }}
    />
    <h2>{creacion.titulo}</h2>
    <p>{creacion.descripcion}</p>
  </div>
))}

    </div>
  );
}

export default Favorito;

