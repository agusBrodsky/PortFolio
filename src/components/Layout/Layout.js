import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Layout = () => {
    return (
        <>
            <Navbar data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link > <NavLink to="/" className="navbar-link"> Home </NavLink></Nav.Link>
                        <Nav.Link ><NavLink to="/Creaciones" className="navbar-link"> Creaciones </NavLink></Nav.Link>
                        <Nav.Link ><NavLink to="/AboutUs" className="navbar-link"> AboutUs </NavLink></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};

export default Layout;