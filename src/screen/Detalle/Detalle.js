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
  const navigate = useNavigate();
  const { id } = useParams();
  const [creacion, setCreacion] = useState({});
  const [loading, setLoading] = useState(false);

  const [favoritos, setFavoritos] = useState(() => {
    const favoritosGuardados = JSON.parse(localStorage.getItem('favorito'));
    return favoritosGuardados || {};
  });
  const [isFavorito,setIsFavorito] = useState(favoritos.some((favorito) => favorito.id === creacion.id));

  useEffect(() => {
    axios.get('../listaCreaciones.JSON').then((res) => {
      const creacionEncontrada = res.data.find((element) => element.id == id);
      if (creacionEncontrada) {
        setCreacion(creacionEncontrada);
      }

      /*if (favoritos[id]) {
        setFavoritos((prevFavoritos) => ({
          ...prevFavoritos,
          [id]: { almacenar: null },
        }));
        setLoading(true);
      }*/
    });
  }, [favoritos, id]);

  const agregarQuitarFavorito = () => {
    setFavoritos((prevFavoritos) => {
      const nuevoEstado = { ...prevFavoritos };
      nuevoEstado[id] = { almacenar: !nuevoEstado[id]?.almacenar };

      // Si la creación se quitó de favoritos, actualiza localStorage
      if (!nuevoEstado[id]?.almacenar) {
        localStorage.setItem('favorito', JSON.stringify(nuevoEstado));
      }

      return nuevoEstado;
    });
    console.log(`funcion agregar/quitar fav id:${id}`);
    
  };

  useEffect(() => {
    localStorage.setItem('favorito', JSON.stringify(favoritos));
  }, [favoritos]);

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
                      {!isFavorito ? 'Agregar a favoritos' : 'Quitar de favoritos'}
                      {favoritos[creacion.id]?.almacenar ? 'Quitar de favoritos' : 'Agregar a favoritos'}
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
