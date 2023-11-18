import React from 'react';
import './Hhome.css'; // Asegúrate de tener tu archivo CSS importado correctamente
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import fotoPorfolio from '../../assets/FotoPorfolio.jpeg';

const Hhome = () => {
  return (
    <Container>
      <Row>
        <Col sm={6} className='claseCol'>
              <h1 className="title">Nuestro Portfolio</h1>
              <button className="submit"><Link to="/Creaciones" className='jeje'>Nuestras creaciones</Link></button>
              <button className="submit"><Link to="/AboutUs" className='jeje'>Todo sobre nosotros</Link></button>
        </Col>
        <Col sm={6} className='claseCol'>
          <img className='claseImagen' src={fotoPorfolio} />
        </Col>
      </Row>

    </Container>




  );
}

export default Hhome;
