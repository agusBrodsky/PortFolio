import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Detalle.css';
import {useNavigate } from "react-router-dom";


import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

function Detalle() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [creacion, setCreacion] = useState({});

  useEffect(() => { // trae el objeto!
    axios.get('../listaCreaciones.JSON')
      .then(res => {
        res.data.forEach(element => {
          if (element.id == id) { setCreacion(element) };
        });
      })
    }, []);

  return (
    <Container>
      <Row>
        <Col md={8} className="main-container">
          <h1 style={{ background: 'linear-gradient(to left, #0ef, #c800ff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>{creacion.titulo}</h1>
          <h3 style={{ background: 'linear-gradient(to left, #0ef, #c800ff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Creado por {creacion.usuario}</h3>
          <Row>
            <Row style={{ height: '50vh' }}>
              <img src={creacion.imagen} alt="Creacion" className="img-fluid" />
              <Row className='main-detalle-body'>
                <Row className="main-detalle-texto">
                  <p>{creacion.descripcion}</p>
                </Row>
                <Row >
                  <Col>
                    <Button className="class-button"  variant="secondary"  href={creacion.gitRepo} target="_blank" style={{ background: 'linear-gradient(to left, #0ef, #c800ff)'}}>

                      <BsGithub /> &nbsp;
                      Github
                    </Button>
                  </Col>
                  <Col>
                    <Button className="class-button" variant="secondary" href={creacion.linkUser} target="_blank"  style={{background: 'linear-gradient(to left, #0ef, #c800ff)'}}>
                      <FaLinkedin /> Linkedin
                    </Button>
                  </Col>
                </Row>
                <Row >
                  <Col className="main-detalle-buttonBack">
                  <Button variant="secundary" className="class-buttonBack" target="_blank" 
                  onClick={() => navigate(`/`)}>Go Back!</Button>
                  </Col>
                </Row>
              </Row>
            </Row>
          </Row>

        </Col>


        <Col sm={4}><Banner texto={creacion.titulo} /></Col>
      </Row>
    </Container>

  );
}

export default Detalle;

