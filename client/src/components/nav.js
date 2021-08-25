import React from 'react';

import './css/nav.css';

export const Nav = () => {
    return (
        <div className="wrapper">
                <button className="btn btn-primary user">
                    Users
                </button>
                <button className="btn btn-dark register">
                    Register
                </button>
        </div>
    );
}


