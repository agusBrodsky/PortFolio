import React from 'react';
import './Hhome.css'; // Asegúrate de tener tu archivo CSS importado correctamente
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import fotoPorfolio from '../../assets/FotoPorfolio.jpeg';
// falta agregar la img // <img className='claseImagen' src={fotoPorfolio} />

/*
--------------------- codigo viejo -----------------------
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
-----------------------------------------------------------

*/
const Hhome = () => {
  return (
    <Container className='container'>
      <Row style={{ height: '10vh' }}>
        <Col>
        <h1 style={{ background: 'linear-gradient(to left, #0ef, #c800ff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Bienvenidos a nuestro PortFolio!!</h1>
        </Col>
      </Row>

      <Row className='classRow'>
        <Col className='colLeft'>
          <h1 style={{ background: 'linear-gradient(to left, #0ef, #c800ff)', WebkitBackgroundClip: 'text', color: 'transparent' }} className="title">Acerca de nuestro Portfolio</h1>
          <div style={{ display: 'flex' }}>
            <button className="submit"><Link to="/Creaciones" className='jeje'>Nuestras creaciones</Link></button>
            <button className="submit"><Link to="/AboutUs" className='jeje'>Todo sobre nosotros</Link></button>
          </div>
        </Col>
        <Col className='colLeft'>
          <img className='claseImagen' src={fotoPorfolio} />
        </Col>
      </Row>
      <Row style={{ height: '8vh', background:'linear-gradient(to left, #0ef, #c800ff)' }}>
        <h1  style={{color:'white'}} >Footer</h1>
      </Row>
    </Container>
  );
}

export default Hhome;
