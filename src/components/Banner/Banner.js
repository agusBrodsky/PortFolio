import React from 'react';
import './Banner.css';

const Banner = ({texto = ""}) => {
    return (
        <div className="banner">
            <h1 className="wel_text">{texto}</h1>
        </div>
    );
}

export default Banner;
