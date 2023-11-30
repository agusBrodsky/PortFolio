import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Detalle.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs';
import { FaChessBishop, FaLinkedin } from 'react-icons/fa';

function Detalle() {
  const navigate = useNavigate();
  const { id } = useParams();
  let idCreacion = id;
  const [creacion, setCreacion] = useState({});
  const [loading, setLoading] = useState(false);

  const [arrayFavoritos, setArrayFavoritos] = useState({});
  const [favoritos, setFavoritos] = useState({ id: idCreacion, almacenar: false });


  useEffect(() => { // esto funciona, guarda el objeto que deseo mostrar!!
    axios.get('../listaCreaciones.JSON').then((res) => {
      setCreacion(res.data[idCreacion]);
      const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || [];
      setArrayFavoritos(favoritosGuardados);
      // array favoritos!
      setFavoritos(favoritosGuardados[idCreacion - 1]); // objeto favorito!
      console.log(favoritosGuardados);
    });
  }, [idCreacion]);


  const agregarQuitarFavorito = () => {
    // Cambiar el valor de almacenar
    setFavoritos(prevFavoritos => {
      const nuevoFavoritos = { ...prevFavoritos, almacenar: !prevFavoritos.almacenar };

      // Verificar si el objeto ya está en el array
      const existeEnFavoritos = arrayFavoritos.some(item => item.id === nuevoFavoritos.id);

      if (nuevoFavoritos.almacenar) {
        // Si almacenar es true y el objeto no está en el array, agregarlo
        if (!existeEnFavoritos) {
          setArrayFavoritos(prevArrayFavoritos => [...prevArrayFavoritos, nuevoFavoritos]);
        }
      } else {
        // Si almacenar es false, filtrar el objeto del array
        if (existeEnFavoritos) {
          setArrayFavoritos(prevArrayFavoritos => prevArrayFavoritos.filter(item => item.id !== nuevoFavoritos.id));
        }
      }

      // Guardar el array actualizado en el localStorage
      console.log(arrayFavoritos);
      localStorage.setItem('favoritos', JSON.stringify(arrayFavoritos));

      console.log(`Función agregar/quitar fav id: ${idCreacion}`);

      return nuevoFavoritos;
    });
  };

  return (
    <Container>
      <Row>
        <Col md={8} className="main-container">
          <h1 style={{ background: 'linear-gradient(to left, #0ef, #c800ff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>{creacion.titulo}</h1>
          <h3 style={{ background: 'linear-gradient(to left, #0ef, #c800ff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Creado por {creacion.usuario}</h3>
          <Row>
            <Row style={{ height: '50vh' }}>
              <img className='imgCreacion' src={creacion.imagen} alt="Creacion" />
              <Row className='main-detalle-body'>
                <Row className="main-detalle-texto">
                  <p>{creacion.descripcion}</p>
                </Row>
                <Row>
                  <Col>
                    <Button
                      className="class-button"
                      variant="secondary"
                      href={creacion.gitRepo}
                      target="_blank"
                      style={{ background: 'linear-gradient(to left, #0ef, #c800ff)' }}
                    >
                      <BsGithub /> &nbsp;
                      Github
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="class-button"
                      variant="secondary"
                      href={creacion.linkUser}
                      target="_blank"
                      style={{ background: 'linear-gradient(to left, #0ef, #c800ff)' }}
                    >
                      <FaLinkedin /> Linkedin
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="class-button"
                      variant="secondary"
                      onClick={() => agregarQuitarFavorito()}
                      style={{ background: 'linear-gradient(to left, #0ef, #c800ff)' }}
                    >
                      {favoritos ? 'Quitar de favoritos' : 'Agregar a favoritos'}

                    </Button>
                  </Col>
                </Row>
                <Row></Row>
              </Row>
            </Row>
          </Row>
        </Col>
        <Col sm={4}>

        </Col>
      </Row>
    </Container>
  );
}

export default Detalle;
