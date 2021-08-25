//import React, {useState} from 'react';
import { Link} from 'react-router-dom';
import {ImArrowLeft} from 'react-icons/im';


export const Header = ({title, link, visible}) => {
    
    return (
        <div>
            <nav className="navbar bg-light navbar-expand-lg navbar-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item arrow">
                        <Link to="/" className="back"> <ImArrowLeft /></Link>
                    </li>
                    <li className="navbar-item mt-auto">
                        <h4>{title}</h4>
                    </li>
                </ul>
          
            </nav>
        </div>
    );
    
}

Header.defaultProps = {
    visible : false,
    link : '',
}