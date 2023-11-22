import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Creaciones.css';

import axios from 'axios';
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaVestPatches } from 'react-icons/fa';

const Creaciones = () => {

  let navigate = useNavigate();

  const [creaciones, setCreaciones] = useState([]);
  const autoresUnicos = [...new Set(creaciones.map(creacion => creacion.usuario))]; // array con los autores posibles
  const [autorSeleccionado, setAutorSeleccionado] = useState("Todos");
  const [creacionesFiltradas, setCreacionesFiltradas] = useState([]);
  let favoritosGuardados = null;

  const [favoritos, setFavoritos] = useState(() => { // inicializo el array con el localStorage o vacio si no hay data!
    favoritosGuardados = JSON.parse(localStorage.getItem('favoritos'));
    return favoritosGuardados || [];
  });

  useEffect(() => {
    axios.get('../listaCreaciones.JSON')
      .then(res => {
        setCreaciones(res.data);

        if (!favoritosGuardados) {
          setFavoritos(res.data.map(creacion => ({
            id: creacion.id,
            almacenar: false
          })));
        }
      })
  }, []);

  useEffect(() => { // filtra las creaciones correspondientes
    if (autorSeleccionado == "Todos") {
      setCreacionesFiltradas(creaciones);
    }
    else {
      if (autorSeleccionado) {
        const creacionesFiltradas = creaciones.filter(creacion => creacion.usuario === autorSeleccionado && !creacion.multAutor);
        setCreacionesFiltradas(creacionesFiltradas);
      } else {
        setCreacionesFiltradas(creaciones.filter(creacion => !creacion.multAutor));
      }
    }
  }, [autorSeleccionado, creaciones]);

  const agregarFavorito = (id) => { // ya funciona!!
    setFavoritos((favs) =>
      favs.map((favorito) =>
        (favorito.id === id) ? { ...favorito, almacenar: !favorito.almacenar } : favorito
      )
    );
    console.log(`funcion agregar fav id:${id}`);

  }

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);


  return (
    <Container>
      <Row>
        <Col style={{ color: 'black' }}>
          <h1 className='header-text-title'>Nuestras Creaciones!</h1>
          <DropdownButton
            style={{border:'2px solid black'}}
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
        </Col>
      </Row>
      <Row>
        {creacionesFiltradas.map(creacion => (
          <Col key={creacion.id}>
            <ProjectCard
              id={creacion.id}
              usuario={creacion.usuario}
              imgPath={creacion.imagen}
              isBlog={false}
              title={creacion.titulo}
              descripcion={creacion.descripcion}
              ghLink={creacion.gitRepo}
              linkUser={creacion.linkUser}
              demoLink="null"
              onClick={() => navigate(`/Detalle/${creacion.id}`)}
              favorito={() => { agregarFavorito(creacion.id) }}
            />
          </Col>
        ))}
      </Row>
    </Container>

  );
}
export default Creaciones;
