import {React,useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import favoritosContext from '../../context/context.js'

const Layout = () => {
    const context = useContext(favoritosContext); 

    return (
        <>
            <Navbar data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link > <NavLink to="/" className="navbar-link"> Home </NavLink></Nav.Link>
                        <Nav.Link ><NavLink to="/Creaciones" className="navbar-link"> Creaciones </NavLink></Nav.Link>
                        <Nav.Link ><NavLink to="/AboutUs" className="navbar-link"> AboutUs </NavLink></Nav.Link>
                        <Nav.Link ><NavLink to="/Favorito" className="navbar-link"> Favoritos <Badge bg="success">{ context.arrayFavoritos.length }</Badge> </NavLink></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};

export default Layout;