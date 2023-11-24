import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import agusIndividual from '../../assets/agus_individual.jpeg';
import facuIndividual from '../../assets/rozen_individual.jpeg'
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    const [user, setUser] = useState([]);

    // Función handleImg para manejar la acción cuando se hace clic en las imágenes
    const handleImg = () => {
        console.log("sdsads")
        // Aquí puedes realizar cualquier acción que desees cuando se haga clic en las imágenes.
        // Por ejemplo, redirigir a otra página o realizar alguna otra lógica.
        // Puedes personalizar esta función según tus necesidades.
    };

    return (
        <div className='container'>
            <Row>
                <Col>
                    <div className='container-user'>
                        <h1 className='titulo'>Resumen</h1>
                    </div>
                    <div className='image-container'>
                        <Link onClick={handleImg}>
                            <img
                                className='rounded-image'
                                src={facuIndividual}

                            />
                        </Link>
                        <Link onClick={handleImg}>
                            <img
                                className='rounded-image'
                                src={agusIndividual}
                                alt='Imagen 2'
                            />
                        </Link>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{width:'100%'}} class="card shadow border-0 rounded-4 mb-5">
                        <div class="card-body p-5">
                            <div class="mb-5">
                                <div class="d-flex align-items-center mb-4">
                                    <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-tools"></i></div>
                                    <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Professional Skills</span></h3>
                                </div>
                                <div class="row row-cols-1 row-cols-md-3 mb-4">
                                    <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">SEO/SEM Marketing</div></div>
                                    <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Statistical Analysis</div></div>
                                    <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Development</div></div>
                                </div>
                                <div class="row row-cols-1 row-cols-md-3">
                                    <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Network Security</div></div>
                                    <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Adobe Software Suite</div></div>
                                    <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">User Interface Design</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                <div style={{width:'100%'}} class="card shadow border-0 rounded-4 mb-5">
                        <div class="card-body p-5">
                            <div class="mb-5">
                                <div class="d-flex align-items-center mb-4">
                                    <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-tools"></i></div>
                                    <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Professional Skills</span></h3>
                                </div>
                                <div class="row row-cols-1 row-cols-md-3 mb-4">
                                    <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">SEO/SEM Marketing</div></div>
                                    <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Statistical Analysis</div></div>
                                    <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Development</div></div>
                                </div>
                                <div class="row row-cols-1 row-cols-md-3">
                                    <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Network Security</div></div>
                                    <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Adobe Software Suite</div></div>
                                    <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">User Interface Design</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;
