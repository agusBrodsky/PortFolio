import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Creaciones.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

const Creaciones = () => {
  let navigate = useNavigate();

  const [creaciones, setCreaciones] = useState([]);
  const autoresUnicos = [...new Set(creaciones.map((creacion) => creacion.usuario))];
  const [autorSeleccionado, setAutorSeleccionado] = useState('Todos');
  const [creacionesFiltradas, setCreacionesFiltradas] = useState([]);
  let favoritosGuardados = null;

  const [favoritos, setFavoritos] = useState(() => {
    favoritosGuardados = JSON.parse(localStorage.getItem('favoritos'));
    return favoritosGuardados || [];
  });

  useEffect(() => {
    axios.get('../listaCreaciones.JSON').then((res) => {
      setCreaciones(res.data);

      if (!favoritosGuardados) {
        setFavoritos(
          res.data.map((creacion) => ({
            id: creacion.id,
            almacenar: false,
          }))
        );
      }
    });
  }, []);

  useEffect(() => {
    if (autorSeleccionado === 'Todos') {
      setCreacionesFiltradas(creaciones);
    } else {
      if (autorSeleccionado) {
        const creacionesFiltradas = creaciones.filter(
          (creacion) => creacion.usuario === autorSeleccionado && !creacion.multAutor
        );
        setCreacionesFiltradas(creacionesFiltradas);
      } else {
        setCreacionesFiltradas(creaciones.filter((creacion) => !creacion.multAutor));
      }
    }
  }, [autorSeleccionado, creaciones]);

  const handlePhotoClick = (id) => {
    navigate(`/Detalle/${id}`);
  };

 return (
    <Container>
      <Row>
        <Col style={{ color: 'black' }}>
          <h1 className='header-text-title'>Nuestras Creaciones!</h1>
        </Col>
        <Row>
        <DropdownButton
            style={{margin:"15px"}}
            id="dropdown-autores"
            size="lg"
            title={`Filtrar por Autor: ${autorSeleccionado || "Todos"}`}
          >
            <Dropdown.Item onClick={() => setAutorSeleccionado("Todos")}>Todos</Dropdown.Item>
            {autoresUnicos.map(autor => {
              const mostrarAutor = !creaciones.some(creacion => creacion.usuario === autor && creacion.multAutor);
              return mostrarAutor && (
                <Dropdown.Item key={autor} onClick={() => setAutorSeleccionado(autor)}>
                  {autor}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
          </Row>
      </Row>
      <Row>
        {creacionesFiltradas.map((creacion) => (
          <Col key={creacion.id} xs={12} md={6} lg={3} className="mb-4">
            <img
              src={creacion.imagen}
              alt={`Creación ${creacion.id}`}
              className="creacion-photo"
              style={{ width: '100%', cursor: 'pointer' }}
              onClick={() => handlePhotoClick(creacion.id)}
            />
            <h1 className='header-text-title'>{creacion.titulo}</h1>
          </Col>
           
        ))}
      </Row>
    </Container>
  );
};

export default Creaciones;
