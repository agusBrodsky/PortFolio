import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Detalle.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import favoritosContext from '../../context/context.js'

function Detalle() {
  const navigate = useNavigate();
  const { id } = useParams();
  //let idCreacion = id;
  const [creacion, setCreacion] = useState({});
  const [loading, setLoading] = useState(false);

  const context = useContext(favoritosContext); 
  //const [favoritos, setFavoritos] = useState({ id: idCreacion, almacenar: false });


  useEffect(() => { // esto funciona, guarda el objeto que deseo mostrar!!
    axios.get('../listaCreaciones.JSON').then((res) => {
      setCreacion(res.data[id]);
      // array favoritos!
      //setFavoritos(arrayFavoritos[idCreacion] || {}); // objeto favorito!
      //console.log(arrayFavoritos);
    });
  }, [id]);


  const agregarQuitarFavorito = () => {
    // Cambiar el valor de almacenar

    // Verificar si el objeto ya está en el array
    const existeEnFavoritos = context.arrayFavoritos.some(item => item.id == id);
    if (existeEnFavoritos) {
      // Lo borramos
      context.setFavoritosContext(prevArrayFavoritos => prevArrayFavoritos.filter(item => item.id != id));        
    } else {
      // Lo agregamos
      context.setFavoritosContext(prevArrayFavoritos => [...prevArrayFavoritos, creacion]);
    }

  
    console.log(`Función agregar/quitar fav id: ${id}`);

      //return nuevoFavoritos;
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
                      {context.arrayFavoritos.some(item => item.id == id) ? 'Quitar de favoritos' : 'Agregar a favoritos'}

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
