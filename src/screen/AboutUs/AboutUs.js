import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import agusIndividual from '../../assets/agus_individual.jpeg';
import facuIndividual from '../../assets/rozen_individual.jpeg'

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
            <div className='container-body'>
                <div className='container-category'>
                    <div className='text-container2'> <h1>Experience</h1> </div>
                    <div className='container-card'>
                    <Card className="card">
                            <Card.Body>
                                <div className='class-cardBody'>
                                    <div className='izq-card'>
                                        <div className="text-primary fw-bolder mb-2">2019 - Present</div>
                                        <div className="small fw-bolder">Web Developer</div>
                                        <div className="small text-muted">Stark Industries</div>
                                        <div className="small text-muted">Los Angeles, CA</div>
                                    </div>
                                    <div className='der-card'>
                                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</h4>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            
            
            
            </div>
        </div>
    );
};

export default AboutUs;
