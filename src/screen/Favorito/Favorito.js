import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import './Favorito.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaClipboardList } from 'react-icons/fa';



function Favorito() {

  let navigate = useNavigate();
  
  const [favoritosGuardados, setFavoritosGuardados] = useState(JSON.parse(localStorage.getItem('favoritos')) || []);
  const [creaciones, setCreaciones] = useState([]);
  
  


  useEffect(() => {
    axios.get('../listaCreaciones.JSON')
      .then(res => {
        const nuevasCreaciones = res.data.filter(element => favoritosGuardados[element.id - 1]?.almacenar === true);
        setCreaciones(nuevasCreaciones);
      });
      console.log(favoritosGuardados);
  }, [favoritosGuardados]);

  const handlePhotoClick = (id) => {
    navigate(`/Detalle/${id}`);
  };

  return (

    <Container>
      <Row>
        <h1>Tus creaciones Favoritas</h1>
      </Row>
      <Row>
        {creaciones.map((creacion) => (
          <>
            <Col key={creacion.id} sm style={{display:'flex', justifyContent:'center'}}>
              <div className="creaciones-item" style={{ border: '3px solid black', margin: '10px', width: '30vw' }}>
                <img
                  src={creacion.imagen}
                  alt={`Creación ${creacion.id}`}
                  className="creaciones-photo"
                  style={{ width: '50%', cursor: 'pointer' }}
                />
                <div className="creaciones-body" style={{ textAlign: 'left', margin: '5px', width: '50%' }}>
                  <h2>{creacion.titulo}</h2>
                  <h4>{creacion.descripcion}</h4>
                </div>
              </div>
            </Col>
          </>

        ))}
      </Row>
    </Container>

  );
}

export default Favorito;

