import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Detalle.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

function Detalle() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [creacion, setCreacion] = useState({});
  let favoritosGuardados = null;

  const [favoritos, setFavoritos] = useState(() => {
    favoritosGuardados = JSON.parse(localStorage.getItem('favoritos'));
    return favoritosGuardados || [];
  });
  const [isFavorito,setIsFavorito] = useState(favoritos.some((favorito) => favorito.id === creacion.id));

  useEffect(() => {
    axios.get('../listaCreaciones.JSON').then((res) => {
      res.data.forEach((element) => {
        if (element.id == id) {
          setCreacion(element);
        }
      });

      /*if (favoritosGuardados) {
        setFavoritos(
          res.data.map((creacion) => ({
            id: creacion.id,
            almacenar: false,
          }))
        );
      }*/
    });
  }, []);


  const agregarQuitarFavorito = (id) => {
    setFavoritos((favs) => {
        // creo nuevoEstado, es el array nuevo con todas las respuestas 
      const nuevoEstado = favs.map((favorito, index) =>
        index === id - 1 ? { ...favorito, almacenar: !favorito.almacenar } : favorito
      );
      setIsFavorito(!isFavorito);
      
      return nuevoEstado;
    });
    console.log(`funcion agregar/quitar fav id:${id}`);
  };
  


  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));

  }, [favoritos]);

  return (
    <Container>
      <Row>
        <Col md={8} className="main-container">
          <h1 style={{ background: 'linear-gradient(to left, #0ef, #c800ff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>{creacion.titulo}</h1>
          <h3 style={{ background: 'linear-gradient(to left, #0ef, #c800ff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Creado por {creacion.usuario}</h3>
          <Row>
            <Row style={{ height: '50vh' }}>
              <img src={creacion.imagen} alt="Creacion" style={{ weight: '30%' }} />
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
                      onClick={() => agregarQuitarFavorito(creacion.id)}
                      style={{ background: 'linear-gradient(to left, #0ef, #c800ff)' }}
                    >
                      {!isFavorito ? 'Agregar a favoritos' : 'Quitar de favoritos'}
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
