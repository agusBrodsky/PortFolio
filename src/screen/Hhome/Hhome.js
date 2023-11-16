import React from 'react';
import './Hhome.css'; // Asegúrate de tener tu archivo CSS importado correctamente
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

const Hhome = () => {
    return (
        <Container>
      <Row className='claseRow'>
        <Col className='form'>
            <h1 className="title">Nuestro Portfolio</h1>
            <button className="submit"><Link to="/Creaciones" className='jeje'>Nuestras creaciones</Link></button>
            <button className="submit"><Link to="/AboutUs" className='jeje'>Todo sobre nosotros</Link></button>
        </Col>
        <Col>
        <div className="banner">
        <h1 className="wel_text">BIENVENIDO<br /></h1>
        </div>
        </Col>
      </Row>
    </Container>




    );
}

export default Hhome;
