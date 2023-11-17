import React from 'react';
import './Banner.css';
import { Container, Row, Col } from "react-bootstrap";

const Banner = ({texto = ""}) => {
    return (
        <div className="banner">
            <h1 className="wel_text">{texto}<br /></h1>
        </div>
    );
}

export default Banner;
