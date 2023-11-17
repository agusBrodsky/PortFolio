import React, { useState, useEffect } from 'react';
import './Creaciones.css';
import axios from 'axios';
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Banner from '../../components/Banner/Banner.js';

const Creaciones = () => {
  const [creaciones, setCreaciones] = useState([]);
  const [autor, setAutor] = useState(""); // Quiero guardar el nombre del creador para mostrar los trabajos de cada uno
  const [loading, setLoading] = useState(false); // Lo arranco asi por ahora!!
  const autoresUnicos = [...new Set(creaciones.map(creacion => creacion.usuario))]; // array con los autores posibles
  const [autorSeleccionado, setAutorSeleccionado] = useState("Todos");
  const [creacionesFiltradas, setCreacionesFiltradas] = useState([]);



  useEffect(() => {
    axios.get('./listaCreaciones.JSON')
      .then(res => {
        setCreaciones(res.data);
        console.log(res.data);
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

  const handleButtonClick = (id)=>{
    console.log(id);
  }
  return (
    <Container>
      
      <Row>
          <Col style={{ color: 'black' }}>
          <h1 className='header-text-title'>Nuestras Creaciones!</h1>
          <DropdownButton
            id="dropdown-autores"
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
              onClick={handleButtonClick}
            />
          </Col>
        ))}
      </Row>
    </Container>

  );
}
export default Creaciones;
