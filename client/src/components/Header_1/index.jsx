import React from 'react';
import './style.css'

const Header1 = (props) => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    );
}

export default Header1;