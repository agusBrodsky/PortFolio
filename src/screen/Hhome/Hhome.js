import React, { useState, useEffect } from 'react';
import './Hhome.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaVestPatches } from 'react-icons/fa';

//import fotoPorfolio from '/assets/FotoPorfolio.jpeg';
//import fotoPorfolio from 'https://i.pinimg.com/originals/d3/98/81/d3988178780bbe1a619655ddd6e47831.jpg';

const Hhome = () => {
  const [creaciones, setCreaciones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('../listaCreaciones.JSON').then((res) => {
      setCreaciones(res.data.slice(0, 6)); // Mostrar solo las primeras 6 creaciones
    });
  }, []);

  const handlePhotoClick = (id) => {
    navigate(`/Detalle/${id}`);
  };

  return (
    <Container className='container'>
      <Row style={{ height: '10vh' }}>
        <Col>
          <h1 style={{ background: 'linear-gradient(to left, #0ef, #c800ff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Bienvenidos a nuestro Portfolio!!
          </h1>
        </Col>
      </Row>

      <Row className='classRow'>
        <Col className='colLeft'>
          <h1 style={{ background: 'linear-gradient(to left, #0ef, #c800ff)', WebkitBackgroundClip: 'text', color: 'transparent' }} className="title">
            Acerca de nuestro Portfolio
          </h1>
          <div style={{ display: 'flex' }}>
            <button className="submit">
              <Link to="/Creaciones" className='jeje'>
                Nuestras creaciones
              </Link>
            </button>
            <button className="submit">
              <Link to="/AboutUs" className='jeje'>
                Todo sobre nosotros
              </Link>
            </button>
          </div>
        </Col>
        <Col className='colLeft'>
          <img
            className='claseImagen'
            src='https://i.pinimg.com/originals/d3/98/81/d3988178780bbe1a619655ddd6e47831.jpg'
            alt="Portfolio"
            style={{ cursor: 'pointer' }}
          />
        </Col>
      </Row>

      <h1 style={{marginBottom:'40px'}}> Creaciones destacadas </h1>

      <Row>
        {creaciones.map((creacion) => (
          <Col key={creacion.id} xs={12} md={6} lg={4} xl={3} className="mb-4">
            <h3>{creacion.titulo}</h3>
            <img
              src={creacion.imagen}
              alt={`Creación ${creacion.id}`}
              className="creacion-photo"
              style={{ width: '50%', cursor: 'pointer' }}
              onClick={() => handlePhotoClick(creacion.id)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Hhome;
