import React from 'react';
import './style.css'

const Header1 = (props) => {
    return (
        <div>
            <a href="/">
                <h1>{props.text}</h1>
            </a>
        </div>
    );
}

export default Header1;