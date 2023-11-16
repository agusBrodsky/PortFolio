import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    return (
        <>
            <nav className="navbar">
                <NavLink to="/" className="navbar-link">
                    Inicio
                </NavLink>
                <NavLink to="/Creaciones" className="navbar-link">
                    Creaciones
                </NavLink>
            </nav>
            <div className="content-wrapper">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;