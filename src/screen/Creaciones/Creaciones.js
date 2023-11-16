import React, { useState, useEffect } from 'react';
import './Creaciones.css';
import axios from 'axios';
import ProjectCard from "../../components/ProjectCard/ProjectCard.js";
import { Container, Row, Col } from "react-bootstrap";
//import Particle from "../Particle";

const Creaciones = () => {
  const [creaciones, setCreaciones] = useState([]);

  useEffect(() => {
    console.log("Primer useEffect! - (levantar mis creaciones)");
    axios.get('./listaCreaciones.JSON')
      .then(res => {
        setCreaciones(res.data);
        console.log(res.data);
      })
  }, []);

  return (
    <Container>
      <Row>
        <Col style={{color:'black'}}>
          <h1>Flechaaaaaaaaaaaaaaaaaaaaaaa</h1>
        </Col>
      </Row>
      <Row>
      {creaciones.map(creacion => (
        <Col>
            <ProjectCard
                usuario={creacion.usuario}
                imgPath={creacion.imagen}
                isBlog={false}
                title={creacion.titulo}
                descripcion={creacion.descripcion}
                ghLink={creacion.gitRepo} // repositorio de github
                linkUser={creacion.linkUser}
                demoLink="null" // ni idea
            />
          </Col>
          ))}
      </Row>
    </Container>
    
  );
}
export default Creaciones;
