import React from 'react';
import './Hhome.css'; // Asegúrate de tener tu archivo CSS importado correctamente
import { Container, Row, Col } from "react-bootstrap";
import Banner from '../../components/Banner/Banner.js';
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
        <Banner texto="BIENVENIDO"/>
        </Col>
      </Row>
    </Container>




    );
}

export default Hhome;
